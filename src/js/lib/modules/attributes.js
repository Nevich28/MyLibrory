import $ from '../core.js';

$.prototype.addAttribute = function(nameAttribute, valueAttribute) {
	for (let i = 0; i < this.length; i++) {
		this[i].setAttribute(nameAttribute, valueAttribute);
	}

	return this;
};

$.prototype.removeAttribute = function(nameAttribute) {
	for (let i = 0; i < this.length; i++) {
		this[i].removeAttribute(nameAttribute);
	}

	return this;
};