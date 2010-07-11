/**
 * richtaur object
 * Oh fuck this file is way too large
 * TODO: create Spawner class and extend with aquarium/env
*/
richtaur = (function() {

	var ANIM_INTERVAL = 50,
		POLL_INTERVAL = 1000,
		TWO_HOURS = 7200000;

	var busy,
		cache = {},
		doc,
		konami = {
			code : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
			index : 0
		};

	var aquarium = (function() {

		var fish = {},
			interval,
			max = 0,
			num = 0;

		var add = function(type) {
			fish[uniqueKey()] = new Fish(type);
			num++;
		};

		var poll = function() {

			if (num < max) {
				// 10% chance for Jaws
				if (rand(1, 10) == 1) {
					add('jaws');
				} else {
					add();
				}
			}

		};

		var remove = function(key) {
			delete fish[key];
			num--;
		};

		var start = function() {

			interval = setInterval(function() {
				for (var i in fish) {
					if (fish[i] && fish[i].move()) remove(i);
				}
			}, ANIM_INTERVAL);

		};

		return {
			init : function() {
				initPosts();
				start();
				setInterval(poll, POLL_INTERVAL);
			},
			add : add,
			full : function() {
				return (num > max);
			},
			setMax : function(newMax) {
				max = newMax;
			},
			toggle : function() {

				if (interval) {
					clearInterval(interval);
					interval = null;
				} else {
					start();
				}

			}
		};

	})();

	var castlevania = function() {
		location.href = 'http://lostdecadegamesapp.appspot.com/';
	};

	var env = (function() {

		var clouds = {},
			interval,
			maxClouds = 0,
			numClouds = 0,
			settings,
			times;

		var add = function(type) {
			clouds[uniqueKey()] = new Cloud(settings.windSpeed);
			numClouds++;
		};

		var exec = function() {

			// This one line takes care of the weather appearance
			$('html').attr('class', settings.time);

			aquarium.setMax({
				night : rand(5, 10),
				sunrising : rand(10, 25),
				sunrise : rand(30, 40),
				day : rand(3, 10),
				sunsetting : rand(10, 25),
				sunset : rand(30, 40)
			}[settings.time]);

			var fog = false;
			maxClouds = 0;

			switch (settings.weatherCode) {

				case 26: // Mostly Cloudy, intentional fallthroughs
				case 27:
				case 28:
					maxClouds = rand(10, 20);
					break;

				case 29: // Parly Cloudy, intentional fallthrough
				case 30:
					maxClouds = rand(2, 5);
					break;

				case 20: // Foggy
					if (settings.time != 'night') fog = 0.3;
					break;

				case 21: // Haze
					if (settings.time != 'night') fog = 0.5;
					break;

			}

			if (fog) $('#extra-2').attr('class', 'fog').css('opacity', fog);

		};

		var get = function() {

			$.ajax({
				dataType : 'json',
				type : 'get',
				url : '/yweather.json',
				complete : set
			});

		};

		var getPlaying = function() {

			$.ajax({
				dataType : 'json',
				type : 'get',
				url : '/now_playing.json',
				complete : setPlaying
			});

		};

		var poll = function() {
			if (numClouds < maxClouds) add();
		};

		var remove = function(key) {
			delete clouds[key];
			numClouds--;
		};

		var set = function(data) {

			// Apparently I'm confused about what jQuery sends back??
			if (data.responseText) eval('data = ' + data.responseText);

			// Parse out what we need
			settings = {
				time : setTime(
					data['yweather:condition'].date,
					data['yweather:astronomy'].sunrise,
					data['yweather:astronomy'].sunset
				),
				weatherCode : +data['yweather:condition'].code,
				windSpeed : +data['yweather:wind'].speed
			};

			exec();

		};

		var setPlaying = function(data) {

			// Apparently I'm confused about what jQuery sends back??
			if (data.responseText) eval('data = ' + data.responseText);

			if (data.response.content.base.playstatus.playing) {
				$('#avatar > div').addClass('playing').html([
					'<strong>Now Playing:</strong>',
					'<em>' + data.response.content.base.playstatus.gametitle + '</em>',
					'<span>via <a href="http://raptr.com/richtaur">raptr.com/richtaur</a></span>'
				].join('')).show();
			} else {
				$('#avatar > div').removeClass('playing').hide();
			}

		};

		var setTime = function(today, sunrise, sunset) {

			var
				key,
				now = (new Date(today)).getTime(),
				today = today.split(' ').splice(0, 4).join(' ') + ' ',
				sunrise = (new Date(today + sunrise)).getTime(),
				sunset = (new Date(today + sunset)).getTime(),
				times = {
					night : (new Date(today + '12:00 am')).getTime(),
					sunrising : (sunrise - TWO_HOURS),
					sunrise : sunrise,
					day : (sunrise + TWO_HOURS),
					sunsetting : (sunset - TWO_HOURS),
					sunset : sunset
				};

			for (var i in times) {
				if (now >= times[i]) key = i;
			}

			if (now > times.sunset) key = 'night';

			return key;

		};

		var start = function() {

			interval = setInterval(function() {
				for (var i in clouds) {
					if (clouds[i]) {
						if (clouds[i].move()) clouds[i].remove();
					}
				}
			}, ANIM_INTERVAL);

		};

		return {
			init : function() {

				start();

				// Get weather and time updates
				setInterval(poll, POLL_INTERVAL);
				setInterval(get, 60000); /* 10 minutes */
				setInterval(getPlaying, 30000); // 5 minutes

			},
			full : function() {
				return (numClouds > maxClouds);
			},
			set : set,
			setPlaying : setPlaying,
			toggle : function() {

				if (interval) {
					clearInterval(interval);
					interval = null;
				} else {
					start();
				}

			}
		};

	})();

	var Cloud = function(speed) {

		var MAX_Y = $('#hd').height();

		var size = rand(1, 4),
			el = $('<span class="cloud size-' + size + '"></span>').appendTo('#extra-2'),
			w = el.width(),
			h = el.height(),
			x = doc.w,
			y = rand(0, (MAX_Y - el.height()));

		speed = (speed / 100) + (rand(1, 10) / 10);

		el.css('left', x).css('top', y).css('opacity', (rand(10, 95) / 100));

		this.move = function() {

			x -= speed;

			el.css('left', x);

			if (x < -w) {

				if (env.full()) {
					el.remove();
					return true;
				} else {
					el.css('top', rand(0, MAX_Y));
					x = doc.w;
					y = rand(0, MAX_Y);
				}
				
			}

			return false;

		};

		this.remove = function() {
			el.remove();
		};

	};

	var Fish = function(type) {

		var MIN_Y = 22,
			MAX_Y = 144,
			PI = 3.141596;

		var angle, el,
			left = (rand(1, 2) == 1),
			speed = rand(1, 10),
			w, h, x, y;

		if (typeof type == 'object') {
			el = $('<span class="' + type.className + '">' + type.html + '</span>').appendTo('#ft');
			w = el.width();
			h = el.height();
			x = type.x;
			y = type.y;
		} else {
			el = $('<span class="' + (type || 'shark') + '"></span>').appendTo('#ft');
			w = el.width();
			h = el.height();
			x = (left ? doc.w : -w);
			y = rand(MIN_Y, MAX_Y);
		}

		el.css('left', x).css('top', y).css('opacity', (rand(70, 100) / 100));

		this.move = function() {

			var oob,
				r = ((PI * angle) / 180);

			x += (Math.cos(r) * speed);
			y += (Math.sin(r) * speed);

			if (y < MIN_Y) {
				y = MIN_Y;
				setAngle();
			} else if (y > MAX_Y) {
				y = MAX_Y;
				setAngle();
			}

			if (x < -w) {
				left = false;
				oob = true;
				setAngle();
			} else if (x > doc.w) {
				left = true;
				oob = true;
				setAngle();
			} else if (rand(1, 100) == 1) {
				left = (rand(1, 2) == 1);
				speed = rand(1, 10);
				el.css('opacity', (rand(70, 100) / 100));
				setAngle();
			}

			if (oob && aquarium.full()) {
				el.remove();
				return true;
			}

			el.css('left', x);
			el.css('top', y);

			if (left) {
				el.removeClass('right');
			} else {
				el.addClass('right');
			}

			return false;

		};

		this.remove = function() {
			el.remove();
		};

		var setAngle = function() {

			if (left) {
				if (rand(1, 2) == 1) {
					angle = rand(0, 15);
				} else {
					angle = rand(345, 360);
				}
			} else {
				angle = rand(165, 195);
			}

			angle -= 180;

		};

		setAngle();

	};

	var lakitu = (function() {

		var buffer = 40,
			current = {},
			timeout,
			tt,
			visible,
			w, h;

		var hide = function() {

			busy = true;

			tt.animate({
				left : doc.w
			}, {
				complete : function() {
					busy = false;
					current = {};
					tt.hide();
				}
			});

		};

		var poll = function() {

			if (busy) return;

			if (visible) {
				show();
			} else {
				hide();
			}

		};

		var show = function() {

			var offset = visible.offset();
				
			if ((current.left == offset.left) && (current.right == offset.right)) return;

			busy = true;
			current = {
				left : offset.left,
				right : offset.right
			};

			tt.find('p').html(visible.attr('tooltip'));

			if (tt.css('display') == 'none') {
					tt.css('left', -w)
						.css('top', (offset.top - h))
						.show();
			}

			tt.animate({
				left : (offset.left + buffer),
				top : (offset.top - h)
			}, {
				complete : function() {
					busy = false;
				}
			});

		};

		return {
			init : function() {

				$('<div id="tooltip"><p></p></div>').appendTo(document.body);
				tt = $('#tooltip');
				w = tt.width();
				h = tt.height();
				tt.hide();

				$('.btns li button').hover(function(e) {

					var el = $(e.target);

					if (timeout) {
						clearTimeout(timeout);
						timeout = null;
					}

					if (el.attr('tooltip')) visible = el;

				}, function() {

					timeout = setTimeout(function() {
						visible = false;
					}, 450);

				});

				setInterval(poll, POLL_INTERVAL);

			},
			hide : hide
		};

	})();

	var minimize = function() {

		cache.clone.animate({
			left : cache.target.offset().left,
			top : cache.target.offset().top,
			opacity : 0,
			width : cache.w,
			height : cache.h
		}, {
			complete : function() {
				busy = false;
				cache.clone.remove();
				cache.clone = null;
				cache.maxxed = null;
				cache.target.css('visibility', 'visible');
			}
		});

		cache.target.animate({
			opacity : 1
		});

	};

	var rand = function(from, to) { 
		return (from + Math.floor((to - from + 1) * Math.random())); 
	}; 

	var init = function() {

		setDocDims();

		$('#divider .btns li button').click(navButton);
		$('#ft .con em').click(footer);
		$('.module .btns li button').live('click', modButton);
		$(document).keydown(keyDown);
		$(window).blur(toggle);
		$(window).focus(toggle);

		aquarium.init();
		env.init();
		lakitu.init();

	};

	var initPosts = function() {
		$('#post-141 .time-toggle').click(function() {
			$('html').attr('class', $(this).attr('data'));
		});
	};

	var footer = function() {

		var el = $(this),
			fish = el.html().split(' '),
			html = '',
			i;

		// There was a bug: when you clicked, nothing would happen except it would disappear
		// Dunno why this was happening, maybe double click?
		if (fish.length == 0) return;

		el.empty();

		for (i = 0; i < fish.length; i++) {
			html += '<span>' + fish[i] + '</span>';
		}

		el.html(html);
		el.find('span').each(function() {
			aquarium.add({
				className : 'custom',
				html : $(this).html(),
				x : $(this).offset().left,
				y : $(this).offset().top
			});
		});

		el.hide();

	};

	var keyDown = function(e) {

		if (e.keyCode == konami.code[konami.index]) {
			if (++konami.index == konami.code.length) castlevania();
		} else {
			konami.index = 0;
		}

		if (cache.maxxed) minimize();

	};

  var modButton = function() {

    if (busy) return;

    var el = $(this),
      width, height;

    switch (el.attr('class')) {

      case 'close':

        var con = el.parent().parent().parent().parent().parent();

        if (con.hasClass('clone')) return;

        lakitu.hide(true);

        con.animate({
          height : 0,
          opacity : 0
        }, {
          complete : function() {
            $(this).remove();
          }
        });

        el.animate({
          background : 'grey'
        });
      
        break;

      case 'maximize':

        if (el.parent().parent().parent().parent().parent().hasClass('minned')) return;

        busy = true;

        if (cache.maxxed) {
          minimize();
        } else {

          lakitu.hide();
					setDocDims();

          cache.maxxed = true;
          cache.target = el.parent().parent().parent().parent().parent();

          var bd = el.parent().parent().parent().next();

          cache.w = cache.target.width();
          cache.h = cache.target.height();

          cache.clone = cache.target.clone(true).appendTo($(document.body));
          cache.clone.addClass('clone');
          cache.clone.css('left', cache.target.offset().left);
          cache.clone.css('top', cache.target.offset().top);
          cache.clone.css('opacity', 0);
          cache.clone.css('width', cache.w);
          cache.clone.css('height', cache.h);
          cache.clone.find('button').attr('tooltip', '');

          cache.clone.animate({
            left : 0,
            top : 0,
            opacity : 1,
            width : doc.w,
            height : doc.h
          }, {
            complete : function() {
              busy = false;
            }
          });

          cache.target.animate({
            opacity : 0
          });

        }

        break;

      case 'toggle':

        var con = el.parent().parent().parent().parent().parent(),
          bd = el.parent().parent().parent().next();

        if (con.hasClass('clone')) return;

        busy = true;

        if (con.hasClass('minned')) {

          con.removeClass('minned');

          // Case for modules that begin minified
          if (!con.attr('data:height')) {
            con.attr('data:height', bd.height());
            bd.css('height', 0);
          }

          bd.animate({
            height : con.attr('data:height')
          }, {
            complete : function() {
              busy = false;
            }
          });

        } else {

          con.attr('data:height', bd.height());

          bd.animate({
            height : 0
          }, {
            complete : function() {
              busy = false;
              con.addClass('minned');
            }
          });

        }

        break;

      default:
        busy = false;

    }

  };

  var navButton = function() {

    if (busy) return;

    var el = $(this);

    switch (el.attr('class')) {

      case 'close':
				aquarium.toggle();
				env.toggle();
        break;

      case 'search':

        var s = $('#search-box');

        if (s.hasClass('maxxed')) {
        } else {
        }

        break;

/*
      case 'maximize':
        break;
*/

      case 'toggle':

        busy = true;

        $('.module').each(function() {

          var el = $(this),
            bd = $(this).find('.bd');

          if (el.hasClass('minned')) {

			el.removeClass('minned');

            bd.animate({
              height : el.attr('data:height') || bd.height()
            }, {
              complete : function() {
                busy = false;
              }
            });

          } else {

            el.attr('data:height', bd.height());

            bd.animate({
              height : 0
            }, {
              complete : function() {
                busy = false;
                el.addClass('minned');
              }
            });

          }

        });

        break;

      default:
        busy = false;

    }

  };

	var setDocDims = function() {

		doc = {
			w : $(window).width(),
			h : $(window).height()
		};

	};

	var toggle = function() {
		aquarium.toggle();
		env.toggle();
	};

	var uniqueKey = function() {
		return rand(1, 999999);
	};

  $(document).ready(init);

	return {
		setPlaying : env.setPlaying,
		setWeather : env.set
	};

})();
