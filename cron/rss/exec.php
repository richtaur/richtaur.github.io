#!/usr/bin/php
<?php

require('rss.php');

$file = $argv[1];
$url = $argv[2];
$rss = new RSS($url, $file);
$rss->write();
