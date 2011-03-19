<?php

class Content {

	private
		$content,
		$file;

	public function __construct($url, $file) {
		$this->file = $file;
		$this->content = file_get_contents($url);
	}

	public function write() {
		if ($this->file && $this->content) {
			file_put_contents($this->file, $this->content);
		}
	}

}
