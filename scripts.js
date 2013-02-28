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

function addEvent(element, eventType, eventFunction){
    if (element.attachEvent){
        element.attachEvent('on'+eventType, eventFunction);
    } else if (element.addEventListener){
        element.addEventListener(eventType, eventFunction, true);
    }
}

function changeLang(lang) {
	byId('current_lang').innerHTML = lang;
	hideLangMenu();
}

function showLangMenu(){
	byId('lang_list').style.display = 'block';
}

function hideLangMenu(){
	byId('lang_list').style.display = 'none';
}

function scroll(e){
	
}

$(document).ready(function(){
	addEvent(document.body, 'click', hideLangMenu);
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
	var bottom = $(document).height() - 1180;
	$(window).scroll(function() {
		var menu_pos = parseInt($('#float_menu').css('margin-top').replace('px',''))+$('#float_menu').outerHeight();
		if ($(window).scrollTop() > 301) {
			$('#float_menu').css('position', 'fixed');
			$('#float_menu').css('margin-top', '20px');
			$('#float_menu').css('top', '0px');
		}else {
			$('#float_menu').css('position', 'static');
		}
		log($(window).scrollTop()+' ' +bottom);
		var window_scroll = $(window).scrollTop()
		if (window_scroll >= bottom) {
			$('#float_menu').css('position', 'static');
			$('#float_menu').css('margin-top', bottom);
		}
		/*
		var menu_pos = parseInt($('#float_menu').css('margin-top').replace('px',''))+$('#float_menu').outerHeight();
		var content_height = $('#right_content').outerHeight()+20;
		
		log(menu_pos + ' '+ content_height+' '+ $(document).height()+ ' '+ $(window).scrollTop());
		if ($(window).scrollTop() > 301 && menu_pos <= bottom){
			$('#float_menu').css('margin-top', $(window).scrollTop() -287 );
		}*/
		
		
	})
});