/* global AFRAME */

AFRAME.registerComponent('custom', {
  schema: {
    on: {type: 'string'},
    src: {type: 'string', default: null},
    target: {type: 'string', default: null},
    action: {type: 'string', default: null}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    if ( 'navigate' === data.action ) {
      el.addEventListener(data.on, function () {
        window.location = data.src;
      });
    }

    if ( 'read' === data.action ) {
      el.addEventListener(data.on, function () {
        console.log('play');
        $( data.target ).get(0).play();
      });
    }
    
  }
});


// $(document).ready( function() {
//   if ( $('#audio1').length ) {
//     //$('#audio1').get(0).play();
//   }

//   document.querySelector('#readBtn').addEventListener('click', function () {
//     console.log('play');
//     $('#audio1').get(0).play();
//   });
// } );

