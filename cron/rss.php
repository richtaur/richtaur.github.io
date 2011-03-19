<?php

class RSS {

	private
		$file,
		$json;

	public function __construct($url, $file) {

		$this->file = $file;
		$this->set($url);

	}

	private function set($url) {

		$contents = file_get_contents($url);

		if ($contents) {
			$xml = new XML($contents);
			$this->json = json_encode($xml->get());
		}

	}

/*
	private function set($url) {

		$contents = file_get_contents($url);

		if ($contents) {

			$xml = @new SimpleXMLElement($contents);
			if ($xml) {

				$items = $xml->xpath('/rss/channel/item');

				if ($items) {
					$this->json = json_encode($items[0]);
				} else {
					#$entry = $xml->xpath('/entry');
					$entry = $xml->entry[0];
					$this->json = json_encode($entry);
				}

			}

		}

	}
*/

	public function write() {
		if ($this->file && $this->json) {
			file_put_contents($this->file, $this->json);
		}
	}

}

class XML {

	private $depth = array(),
		$obj;

	public function __construct($contents) {

		$this->obj = (object) array();
		$xml_parser = xml_parser_create('UTF-8');

		xml_set_object($xml_parser, &$this);
		xml_set_element_handler($xml_parser, 'startElement', 'endElement');
		xml_parse($xml_parser, $contents, true);
		xml_parser_free($xml_parser);

	}

	public function get() {
		return $this->obj;
	}

	private function endElement($parser, $name) {}

	private function startElement($parser, $name, $attrs) {

		$params = array();

		foreach ($attrs as $key => $value) {
			$params[strtolower($key)] = $value;
		}

		$name = strtolower($name);

		if (!isset($this->obj->$name)) {
			$this->obj->$name = $params;
		}

	}

}
