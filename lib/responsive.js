var jQuery = jQuery || require('jquery'),
    $ = jQuery;

var breakpoints = {};
var current = '';

$(window).resize(onResize);

function onResize(resize) {
  var width = $(window).width();
  var height = $(window).height();
  var responsive = getResponsiveByWidth(width);

  if (responsive === current) {
    return;
  }

  return setResponsive(responsive);
}

function removeResponsive(name) {
  $('[responsive]').removeClass(name);
}

function addResponsive(name) {
  $('[responsive]').addClass(name);
}

function setResponsive(name) {
  removeResponsive(current);
  addResponsive(name);
  current = name;
}

exports.setResponsive = setResponsive;

function getResponsiveByWidth(width) {
  var responsive = '';

  for (var name in breakpoints) {
    if (breakpoints[name] > width) responsive = name;
  }
  
  return responsive;  
}

exports.getResponsiveByWidth = getResponsiveByWidth;

function add(name, breakpoint) {
  breakpoints[name] = breakpoint;
  onResize();
}

exports.add = add;

function setResponsiveByWidth (width) {
  return setResponsive(getResponsiveByWidth(width));
}

exports.setResponsiveByWidth = setResponsiveByWidth

function setResponsiveByAuto () {
  return setResponsiveByWidth($(window).width());
}

exports.setResponsiveByAuto = setResponsiveByAuto;
