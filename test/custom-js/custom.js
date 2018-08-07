/* global AFRAME */

AFRAME.registerComponent('custom', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      document.getElementById('links').setAttribute("visible", "false");
      document.getElementById('back-btn').setAttribute("visible", "true");
    });
  }
});
