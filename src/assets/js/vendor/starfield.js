/*---------------------------------------------
Canvas Starfield
Created an interactive canvas starfield.
Forked from: https://github.com/bigsweater/jQuery-Canvas-Starfield

Many of the setting were not actually intergrated (like fps and mouse speed).
So, I(formidable) hooked em up.
----------------------------------------------*/

;(function($, window, document, undefined) {
  // Plugin constructor
  var Starfield = function(el, options) {
    this.el = el;
    this.$el = $(el);
    this.options = options;
    window.starfieldInstance = this;
  };
  var isPlaying;
  var isInited = false;
  var canCanvas = false;
  var animId;
  // RAF polyfill
  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++
      x) {
      window.requestAnimationFrame = window[vendors[x] +
        'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] +
        'CancelAnimationFrame'] || window[vendors[x] +
        'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame =
      function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame =
      function(id) {
        clearTimeout(id);
      };
  }());
  // Plugin prototype
  Starfield.prototype = {
    // Default settings
    defaults: {
      starColor: "rgba(255,255,255,1)",
      bgColor: "rgba(0,0,0,1)",
      mouseMove: true,
      mouseSpeed: 20,
      fps: 50,
      speed: 2,
      quantity: 912,
      ratio: 256,
      divclass: "starfield"
    },
    // Resize the canvas
    resizer: function() {
      var oldStar = this.star;
      var initW = this.context.canvas.width;
      var initH = this.context.canvas.height;
      this.w = this.$el.width();
      this.h = this.$el.height();
      this.x = Math.round(this.w / 2);
      this.y = Math.round(this.h / 2);
      // Check if the device is in portrait orientation
      this.portrait = this.w < this.h;
      // Get the ratio of the old height to the new height
      var ratX = this.w / initW;
      var ratY = this.h / initH;
      this.context.canvas.width = this.w;
      this.context.canvas.height = this.h;
      // Recalculate the position of each star proportionally to new w and h
      for (var i = 0; i < this.n; i++) {
        this.star[i][0] = oldStar[i][0] * ratX;
        this.star[i][1] = oldStar[i][1] * ratY;
        this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) *
          this.star_ratio;
        this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) *
          this.star_ratio;
      }
      starfieldInstance.context.fillStyle = starfieldInstance.settings.bgColor;
      this.context.strokeStyle = this.settings.starColor;
    },
    init: function() {
      // Get default settings
      this.settings = $.extend({}, this.defaults, this.options);
      // Query variables
      var url = document.location.href;
      this.n = parseInt(
        (url.indexOf('n=') !== -1) ? url.substring(url.indexOf('n=') +
          2, (
            (url.substring(url.indexOf('n=') + 2, url.length)).indexOf(
              '&') !== -1) ? url.indexOf('n=') + 2 + (url.substring(url
            .indexOf('n=') + 2, url.length)).indexOf('&') : url.length) :
        this.settings.quantity);
      this.flag = true;
      this.test = true;
      this.w = 0;
      this.h = 0;
      this.x = 0;
      this.y = 0;
      this.z = 0;
      this.star_color_ratio = 0;
      this.star_x_save = 0;
      this.star_y_save = 0;
      this.star_ratio = this.settings.ratio;
      this.star_speed = this.settings.speed;
      this.star_speed_save = 0;
      this.star = new Array(this.n);
      this.color = this.settings.starColor;
      this.opacity = 0.1;
      this.cursor_x = 0;
      this.cursor_y = 0;
      this.mouse_x = 0;
      this.mouse_y = 0;
      this.canvas_x = 0;
      this.canvas_y = 0;
      this.canvas_w = 0;
      this.canvas_h = 0;
      this.fps = this.settings.fps;
      // Check for device orientation support
      this.desktop = !navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/);
      this.orientationSupport = window.DeviceOrientationEvent !==
        undefined;
      this.portrait = null;
      // Inject the canvas element
      var canvasInit = function() {
        starfieldInstance.w = starfieldInstance.$el.width();
        starfieldInstance.h = starfieldInstance.$el.height();
        starfieldInstance.initW = starfieldInstance.w;
        starfieldInstance.initH = starfieldInstance.h;
        starfieldInstance.portrait = starfieldInstance.w < starfieldInstance.h;
        starfieldInstance.wrapper = $('<canvas />').addClass(starfieldInstance.settings.divclass);
        starfieldInstance.wrapper.appendTo(starfieldInstance.el);
        starfieldInstance.starz = $('canvas', starfieldInstance.el);
        if (starfieldInstance.starz[0].getContext) { // Can canvas?
          starfieldInstance.context = starfieldInstance.starz[0].getContext('2d');
          canCanvas = true;
        }
        starfieldInstance.context.canvas.width = starfieldInstance.w;
        starfieldInstance.context.canvas.height = starfieldInstance.h;
      };
      canvasInit();
      // Create initial star array and canvas context
      var starInit = function() {
        // Get context for the canvas element
        if (canCanvas) { // Check for canvas drawering abilities.
          starfieldInstance.x = Math.round(starfieldInstance.w / 2);
          starfieldInstance.y = Math.round(starfieldInstance.h / 2);
          starfieldInstance.z = (starfieldInstance.w + starfieldInstance.h) / 2;
          starfieldInstance.star_color_ratio = 1 / starfieldInstance.z;
          starfieldInstance.cursor_x = starfieldInstance.x;
          starfieldInstance.cursor_y = starfieldInstance.y;
          // Big bang
          for (var i = 0; i < starfieldInstance.n; i++) {
            starfieldInstance.star[i] = new Array(5);
            starfieldInstance.star[i][0] = Math.random() * starfieldInstance.w * 2 - starfieldInstance.x * 2;
            starfieldInstance.star[i][1] = Math.random() * starfieldInstance.h * 2 - starfieldInstance.y * 2;
            starfieldInstance.star[i][2] = Math.round(Math.random() * starfieldInstance.z);
            starfieldInstance.star[i][3] = 0;
            starfieldInstance.star[i][4] = 0;
          }
          // Set the colors
          starfieldInstance.context.fillStyle = starfieldInstance.settings.bgColor;
          starfieldInstance.context.strokeStyle = starfieldInstance.settings.starColor;
        } else {
          return;
        }
      };
      starInit();
      isInited = true;
    },
    // Iterate over every star on the field and move it slightly
    anim: function() {
      this.mouse_x = this.cursor_x - this.x;
      this.mouse_y = this.cursor_y - this.y;
      this.context.fillRect(0, 0, this.w, this.h);
      for (var i = 0; i < this.n; i++) {
        this.test = true;
        this.star_x_save = this.star[i][3];
        this.star_y_save = this.star[i][4];
        this.star[i][0] += this.mouse_x >> this.settings.mouseSpeed;
        // X coords
        if (this.star[i][0] > this.x << 1) {
          this.star[i][0] -= this.w << 1;
          this.test = false;
        }
        if (this.star[i][0] < -this.x << 1) {
          this.star[i][0] += this.w << 1;
          this.test = false;
        }
        // Y coords
        this.star[i][1] += this.mouse_y >> this.settings.mouseSpeed;
        if (this.star[i][1] > this.y << 1) {
          this.star[i][1] -= this.h << 1;
          this.test = false;
        }
        if (this.star[i][1] < -this.y << 1) {
          this.star[i][1] += this.h << 1;
          this.test = false;
        }
        // Z coords
        this.star[i][2] -= this.settings.speed;
        if (this.star[i][2] > this.z) {
          this.star[i][2] -= this.z;
          this.test = false;
        }
        if (this.star[i][2] < 0) {
          this.star[i][2] += this.z;
          this.test = false;
        }
        this.star[i][3] = this.x + (this.star[i][0] / this.star[i][2]) *
          this.star_ratio;
        this.star[i][4] = this.y + (this.star[i][1] / this.star[i][2]) *
          this.star_ratio;
        if (this.star_x_save > 0 && this.star_x_save < this.w && this.star_y_save >
          0 && this.star_y_save < this.h && this.test) {
          this.context.lineWidth = (1 - this.star_color_ratio * this.star[
            i][2]) * 2;
          this.context.beginPath();
          this.context.moveTo(this.star_x_save, this.star_y_save);
          this.context.lineTo(this.star[i][3], this.star[i][4]);
          this.context.stroke();
          this.context.closePath();
        }
      }
    },


    loop: function() {
      this.anim();
      animId = setTimeout(function() {
        window.requestAnimationFrame(function() {
          window.starfieldInstance && starfieldInstance.loop();
        });
      }, 1000 / this.settings.fps);
    },
    move: function() {
      var doc = document.documentElement;
      if (this.orientationSupport && !this.desktop && $(window).width() < 600){
        $(window).on('deviceorientation.starfieldMove', handleOrientation);
      } else {
        $(window).on('mousemove.starfieldMove', handleMousemove);
      }

      function handleOrientation(event) {
        if (event.beta !== null && event.gamma !== null) {
          var x = event.gamma,
            y = event.beta;
          if (!starfieldInstance.portrait) {
            x = event.beta * -1;
            y = event.gamma;
          }
          starfieldInstance.cursor_x = (starfieldInstance.w / 2) + (x * 5);
          starfieldInstance.cursor_y = (starfieldInstance.h / 2) + (y * 5);
        }
      }

      function handleMousemove(event) {
        starfieldInstance.cursor_x = event.pageX || event.clientX + doc.scrollLeft -
          doc.clientLeft;
        starfieldInstance.cursor_y = event.pageY || event.clientY + doc.scrollTop -
          doc.clientTop;
      }
    },
    stop: function() {
      window.cancelAnimationFrame(animId);
      $(window).off(
        'resize.starfieldResize orientationchange.starfieldResize deviceorientation.starfieldMove mousemove.starfieldMove'
      );
      this.$el.empty();
      delete window.starfieldInstance;
      isPlaying = false;
      isInited = false;
      canCanvas = false;
      animId = null;
    },
    // this.start this whole thing
    start: function() {
      // Initialize
      if (!isInited) {
        isInited = true;
        this.init();
      }
      // Start the animation loop
      if (!isPlaying) {
        isPlaying = true;
        this.loop();
      }
      $(window).on('resize.starfieldResize orientationchange.starfieldResize', function() {
        starfieldInstance.resizer();
      });
      // Move stars on mouse move
      if (this.settings.mouseMove) {
        this.move();
      }
      return this;
    },
    bindEvents: function() {
    }
  };
  Starfield.defaults = Starfield.prototype.defaults;
  // Finally, the actual plugin code
  $.fn.starfield = function(options) {
    return this.each(function() {
      new Starfield(this, options).start();
    });
  };
  window.Starfield = Starfield;
})(jQuery, window, document);