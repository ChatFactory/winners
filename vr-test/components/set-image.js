/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    videoTarget: {type: 'string'},
    ctype: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    this.setupFadeAnimation();

    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        console.log('\n\n redirect user here');
        // if (data.ctype === 'video') {
        //   console.log('\n\n video', data.src, data.ctype);
        //   document.getElementById('image-360').style.display = 'none';
        //   data.videoTarget.setAttribute('material', 'src', data.src);
        // } else {
        //   console.log('\n\n image', data.src, data.ctype);
        //   data.target.setAttribute('material', 'src', data.src);
        // }
        // document.getElementById('image-bg').style.display = 'none';
        // Set image.
        window.location = "videos/player-01.html";
        // data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});