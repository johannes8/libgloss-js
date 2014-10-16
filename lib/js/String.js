// String.js 1.0
// Requires Number.js >= 1.0
(function()
{
    'use strict';
    String.debug   = String.prototype.debug   = function() {return this + ' = ' + String(eval(this));};
    String.reverse = String.prototype.reverse = function() {return this.split('').reverse().join('');};
    String.THSEP   = String.prototype.THSEP   = (1000).toLocaleString()[1];
    
    /**
     * Groups strings into any size groups, separated by the current locale's thousands separator
     * and starting from the last character. Does no padding. Useful when dealing with non-decimal 
     * number systems - originally written for grouping binary numbers, just to name a sample use.
     * Example: "12345678".toGroup(4) will return "1234.5678" in de-DE locale
     * @return {String}
     * @param  {Number} n Positive integer group length in characters
     */
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
