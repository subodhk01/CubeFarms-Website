(function() {
    'use strict';
  
    var globals = typeof window === 'undefined' ? global : window;
    if (typeof globals.require === 'function') return;
  
    var modules = {};
    var cache = {};
    var has = ({}).hasOwnProperty;
  
    var aliases = {};
  
    var endsWith = function(str, suffix) {
      return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
  
    var unalias = function(alias, loaderPath) {
      var start = 0;
      if (loaderPath) {
        if (loaderPath.indexOf('components/' === 0)) {
          start = 'components/'.length;
        }
        if (loaderPath.indexOf('/', start) > 0) {
          loaderPath = loaderPath.substring(start, loaderPath.indexOf('/', start));
        }
      }
      var result = aliases[alias + '/index.js'] || aliases[loaderPath + '/deps/' + alias + '/index.js'];
      if (result) {
        return 'components/' + result.substring(0, result.length - '.js'.length);
      }
      return alias;
    };
  
    var expand = (function() {
      var reg = /^\.\.?(\/|$)/;
      return function(root, name) {
        var results = [], parts, part;
        parts = (reg.test(name) ? root + '/' + name : name).split('/');
        for (var i = 0, length = parts.length; i < length; i++) {
          part = parts[i];
          if (part === '..') {
            results.pop();
          } else if (part !== '.' && part !== '') {
            results.push(part);
          }
        }
        return results.join('/');
      };
    })();
    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
  
    var localRequire = function(path) {
      return function(name) {
        var absolute = expand(dirname(path), name);
        return globals.require(absolute, path);
      };
    };
  
    var initModule = function(name, definition) {
      var module = {id: name, exports: {}};
      cache[name] = module;
      definition(module.exports, localRequire(name), module);
      return module.exports;
    };
  
    var require = function(name, loaderPath) {
      var path = expand(name, '.');
      if (loaderPath == null) loaderPath = '/';
      path = unalias(name, loaderPath);
  
      if (has.call(cache, path)) return cache[path].exports;
      if (has.call(modules, path)) return initModule(path, modules[path]);
  
      var dirIndex = expand(path, './index');
      if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
      if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);
  
      throw new Error('Cannot find module "' + name + '" from '+ '"' + loaderPath + '"');
    };
  
    require.alias = function(from, to) {
      aliases[to] = from;
    };
  
    require.register = require.define = function(bundle, fn) {
      if (typeof bundle === 'object') {
        for (var key in bundle) {
          if (has.call(bundle, key)) {
            modules[key] = bundle[key];
          }
        }
      } else {
        modules[bundle] = fn;
      }
    };
  
    require.list = function() {
      var result = [];
      for (var item in modules) {
        if (has.call(modules, item)) {
          result.push(item);
        }
      }
      return result;
    };
  
    require.brunch = true;
    globals.require = require;
  })();
  require.register("js/classes/shapes/AbstractShape", function(exports, require, module) {
  var AbstractShape = (function() {
    
    function AbstractShape(ctx, x, y, side, color) {
      console.info("x:"+x+"\ny:"+y+"\nside:"+side+"\ncolor:"+color);
      this.x = x,
      this.y = y,
      this.side = side,
      this.color = color,
      this.direction = Math.random() > 0.5 ? -1 : 1,
      this.angle = 0,
      this.velocity = (2*Math.PI)/960;
      this.context = ctx;
    }
    
    AbstractShape.prototype.constructor = AbstractShape;
    
    return AbstractShape;
    
  })();
  
  module.exports = AbstractShape;
  });
  
  require.register("js/classes/shapes/Circle", function(exports, require, module) {
  'use strict';
  var AbstractShape = require('./AbstractShape');
  
  var Circle = (function() {
    function Circle(ctx, x, y, side, color) {
      AbstractShape.apply(this, [ctx, x, y, side, color]);
    }
    
    Circle.prototype.constructor = Circle;
    Circle.prototype = new AbstractShape;
    Circle.prototype.render = function() {
      this.context.beginPath()
      this.context.fillStyle = this.color;
      this.context.arc(this.x, this.y, this.side/2, 0, 2*Math.PI, true);
      this.context.closePath();
      this.context.fill();
    }
    
    return Circle;
    
  })();
  
  module.exports = Circle;
  });
  
  require.register("js/classes/shapes/Dash", function(exports, require, module) {
  'use strict';
  var AbstractShape = require('./AbstractShape');
  
  var Dash = (function() {
    function Dash(ctx, x, y, side, color) {
      AbstractShape.apply(this, [ctx, x, y, side, color]);
    }
    
    Dash.prototype.constructor = Dash;
    Dash.prototype = new AbstractShape;
    Dash.prototype.render = function(context) {
      var width = this.side/3.0;
      this.context.translate(this.x + this.side, this.y + width);
      this.context.rotate(this.angle * this.direction);
      this.context.fillStyle = this.color;
      this.context.fillRect(-(this.side)/2, -width/2, this.side, width);
      this.context.rotate(-this.angle * this.direction);
      this.context.translate((this.x + this.side) * (-1), (this.y + width) * (-1));
    }
    
    return Dash;
  
  })();
  
  module.exports = Dash;
  });
  
  require.register("js/classes/shapes/HalfCircle", function(exports, require, module) {
  'use strict';
  var AbstractShape = require('./AbstractShape');
  
  var HalfCircle = (function() {
    function HalfCircle(ctx, x, y, side, color) {
      AbstractShape.apply(this, [ctx, x, y, side, color]);
    }
    
    HalfCircle.prototype.constructor = HalfCircle;
    HalfCircle.prototype = new AbstractShape;
    HalfCircle.prototype.render = function(context) {
      this.context.translate(this.x + this.side/2, this.y + this.side/2);
      this.context.rotate(this.angle * this.direction);
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.arc(0, 0, this.side/2, 0, Math.PI, true);
      this.context.closePath();
      this.context.fill();
      this.context.rotate(-this.angle * this.direction);
      this.context.translate((this.x + this.side/2) * (-1), (this.y + this.side/2) * (-1));
    }
    
    return HalfCircle;
    
  })();
  
  module.exports = HalfCircle;
  });
  
  require.register("js/classes/shapes/Square", function(exports, require, module) {
  'use strict';
  var AbstractShape = require('./AbstractShape');
  
  var Square = (function() {
    function Square(ctx, x,y,side,color) {
      AbstractShape.apply(this, [ctx, x, y, side, color]);
    }
    
    Square.prototype.constructor = Square;
    Square.prototype = new AbstractShape;
    Square.prototype.render = function() {
      this.context.translate(this.x + this.side/2, this.y + this.side/2);
      this.context.rotate(this.angle * this.direction);
      this.context.fillStyle = this.color;
      this.context.fillRect(-this.side/2, -this.side/2, this.side, this.side)
      this.context.rotate(-this.angle * this.direction);
      this.context.translate((this.x + this.side/2) * (-1), (this.y + this.side/2) * (-1));
    }
    
    return Square;
    
  })();
  
  module.exports = Square;
  });
  
  require.register("js/classes/shapes/Triangle", function(exports, require, module) {
  'use strict';
  var AbstractShape = require('./AbstractShape');
  
  var Triangle = (function() {
    function Triangle(ctx, x, y, side, color) {
      AbstractShape.apply(this, [ctx, x, y, side, color]);
    }
    
    Triangle.prototype.constructor = Triangle;
    Triangle.prototype = new AbstractShape;
    Triangle.prototype.render = function() {
      this.context.translate(this.x + this.side/2, this.y + this.side/2);
      this.context.rotate(this.angle * this.direction);
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.moveTo(0, 0);
      this.context.lineTo(this.side/2, this.side/2)
      this.context.lineTo(this.side/2, -this.side/2);
      this.context.lineTo(-this.side/2, -this.side/2);
      this.context.lineTo(0, 0);
      this.context.closePath();
      this.context.fill();
      this.context.rotate(-this.angle * this.direction);
      this.context.translate((this.x + this.side/2) * (-1), (this.y + this.side/2) * (-1));
    }
    
    return Triangle;
  
  })();
  
  module.exports = Triangle;
  });
  
  require.register("js/app", function(exports, require, module) {
  'use strict';
  
  var Circle = require('./classes/shapes/Circle');
  var Dash = require('./classes/shapes/Dash');
  var HalfCircle = require('./classes/shapes/HalfCircle');
  var Square = require('./classes/shapes/Square');
  var Triangle = require('./classes/shapes/Triangle');
  
  // CONSTANTS
  var SCREEN_WIDTH = window.innerWidth,
      SCREEN_HEIGHT = window.innerHeight,
      COLORS = ["#a8f3e7", "#ffcdb9", "#ffeea5", "#ffb5c0", "#cae5f3"];
  
  // GLOBALS
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext('2d'),
      shapes = [];
    
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;
  
  // METHODS
  function generateShapes() {
    for(var i=0; i < SCREEN_HEIGHT/200; i++) {
      for(var j=0; j < SCREEN_WIDTH/200; j++) {
        var x = 200*j + Math.floor(Math.random()*200)-100,
            y = 200*i + Math.floor(Math.random()*100)-50;
        var color = COLORS[Math.floor(Math.random() * COLORS.length)];
        switch(Math.floor(Math.random()*5)) {
          case 0:
            var shape = new Circle(context, x, y, 75, color);
            break;
          case 1 :
            var shape = new Square(context, x, y, 75, color);
            break;
          case 2 :
            var shape = new HalfCircle(context, x, y, 75, color);
            break;
          case 3 :
            var shape = new Triangle(context, x, y, 75, color);
            break;
          case 4 :
            var shape = new Dash(context, x, y, 75, color);
            break;
        }
  
        if((i%2 == 0 && j%2 != 0) || (i%2 != 0 && j%2 == 0)) {
          shape.render(context);
          shapes.push(shape);
        }
        
      }
    }
  }
  
  function rotate() {
    context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    for(var i=0; i < shapes.length; i++) {
      if(shapes[i].y > (SCREEN_HEIGHT + shapes[i].side)) {
        shapes[i].color = COLORS[Math.floor(Math.random() * COLORS.length)];
        shapes[i].direction = Math.random() > 0.5 ? 1 : -1;
        shapes[i].y = -shapes[i].side;
      } else {
        shapes[i].y += 1;
      }
      shapes[i].angle += shapes[i].velocity;
      shapes[i].render();
    }
    window.requestAnimationFrame(rotate);
  }
  
  // DOCUMENT READY
  (function() {
    window.onresize = function() {
      SCREEN_HEIGHT = window.innerHeight;
      SCREEN_WIDTH = window.innerWidth;
      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
      shapes = [];
      generateShapes();
    }
    
    generateShapes();
    window.requestAnimationFrame(rotate);
  })();
  });
  
  require('js/app');