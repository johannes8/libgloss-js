// Number.js 1.0
(function()
{
    'use strict';
    var Hex08StringArray = [];
    for(var i = 0; i < 256; i++) Hex08StringArray.push((i|256).toString(16).substr(1));
    Number.isFloat       = Number.prototype.isFloat       = function() {return this!=parseInt(this);};
    Number.isNTimesInt   = Number.prototype.isNTimesInt   = function(n){return !(this%n);};
    Number.toLo08        = Number.prototype.toLo08        = function() {return this&255;};
    Number.toHi08        = Number.prototype.toHi08        = function() {return(this&65280)>>8;};
    Number.toLo16        = Number.prototype.toLo16        = function() {return this&65535;};
    Number.toHi16        = Number.prototype.toHi16        = function() {return(this&4294901760)>>16;};
    Number.toHex08String = Number.prototype.toHex08String = function(){return Hex08StringArray[this];};
    Number.toHex16String = Number.prototype.toHex16String = function(){return this.toHi08().toHex08String()+this.toLo08().toHex08String();};
    Number.toHex32String = Number.prototype.toHex32String = function(){return this.toHi16().toHex16String()+this.toLo16().toHex16String();};
    Number.toIPString    = Number.prototype.toIPString    = function()
    {
        var s32          = this & 4294967295,
            r            =
            [
                          (s32  & 4278190080) >> 24,
                          (s32  & 16711680)   >> 16,
                          (s32  & 65280)      >> 8,
                           s32  & 255
            ];
        return r.join('.');
    };
    Number.floorTo       = Number.prototype.roundTo       = function(x){return Math.floor(this/x)*x;};
    Number.roundTo       = Number.prototype.roundTo       = function(x){return Math.floor(this/x+.5)*x;};
    Number.roundTo       = Number.prototype.roundTo       = function(x){return Math.floor(this/x+.5)*x;};

    /**
     * Returns 1 if lo <= this <= hi, otherwise 0
     * @return {Number}
     * @param  {Number} lo Lower boundary of the range
     * @param  {Number} hi Upper boundary of the range
     */
    Number.isIn          = Number.prototype.isIn          = function(lo,hi){return lo<=this&this<=hi;};

    /**
     * Returns 0 or 1, depending on random
     * @return {Number}
     */
    Number.flipCoin      = Number.prototype.flipCoin      = function(){return .5>Math.random()&1;};

    /**
     * Function used by the <code>toRGB</code> method of the <code>HSB</code> class.
     * @return {Number}
     * @param  {Number} hue Hue in the range from 0 to 1535
     */
    Number.hueTransform  = Number.prototype.hueTransform  = function()
    {
        var hue          = parseInt(this)%1536,
            is1          = hue.isIn(1024,1279),
            is2          = hue.isIn( 256, 511),
            m            = is1 - is2,
            b            = hue.isIn(   0, 255) + 2 * is2 - 4 * is1 + hue.isIn(1280,1535);
        return             hue * m / 256 + b;
    };
})();
