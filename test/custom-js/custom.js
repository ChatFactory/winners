/* global AFRAME */

AFRAME.registerComponent('custom', {
  schema: {
    on: {type: 'string'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      window.location = data.src;
    });
  }
});


$(document).ready( function() {
  if ( $('#audio1').length ) {
    $('#audio1').get(0).play();
  }
} );

