function byId(id) {
	return document.getElementById(id);
}

function byClass(className, parent) {
	var root;
	var classElements = new Array();
	if (parent) {
		root = parent;
	} else {
		root = document.body;
	}
	var elements = root.getElementsByTagName('*');
	for (var i in elements) {
		if (elements[i].className == className) {
			classElements.push(elements[i]);
		}
	}
	return classElements;
}

function log(data) {
	console.log(data);
}

function extendInput(id) {
	var input = byId(id);
	input.onfocus = function() {
		if (input.value == input.defaultValue) input.value = '';
	}
	input.onblur = function() {
		if (input.value == '') input.value = input.defaultValue;
	}
}



$(document).ready(function(){
	extendInput('search_input');
	byId('search_button').onclick = function() {
		document.forms['search_form'].submit();
	}
	$('#slides').cycle({
			fx:     'fade',
	        speed:  2000,
	        timeout: 5000,
	        pager:  '#slideshow_dots'
		}
	);
});