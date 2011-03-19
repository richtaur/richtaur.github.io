#!/usr/bin/php
<?php

require('content.php');

$file = $argv[1];
$url = $argv[2];
$content = new Content($url, $file);
$content->write();
