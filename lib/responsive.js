var jQuery = jQuery || require('jquery'),
    $ = jQuery;

var breakpoints = {};
var current = '';

$(window).resize(onResize);

function onResize(resize) {
  var width = $(window).width();
  var height = $(window).height();
  var responsive = '';

  for (var name in breakpoints) {
    if (breakpoints[name] > width) responsive = name;
  }

  if (responsive === current) return;
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

exports.add = function (name, breakpoint) {
  breakpoints[name] = breakpoint;
  onResize();
}
