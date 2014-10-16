// String.js 1.0
// Requires Number.js >= 1.0
(function()
{
    'use strict';
    String.debug   = String.prototype.debug   = function() {return this + ' = ' + String(eval(this));};
    String.reverse = String.prototype.reverse = function() {return this.split('').reverse().join('');};
    String.THSEP   = String.prototype.THSEP   = (1000).toLocaleString()[1];
    String.toGroup = String.prototype.toGroup = function(n)
    {
      var l        = this.length,
          g        = l / n,
          rs       = parseInt(g) + g.isFloat(),
          r        = new Array(rs),
          sr       = this.reverse();
      for(var i    = 0; i < rs; i++)
          r[i]     = sr.substring(n * i, Math.min(sr.length, n * i + n)).reverse();
      var result   = r.reverse().join(''.THSEP);
      return result;
    };
})();
