// HSB.js 1.0 by Jochen Mauch <mauch at mail dot de>
// Requires RGB.js >= 1.0
'use strict';
/**
 * Constructor for the <code>HSB</code> class
 * @return {HSB}
 * @param  {Number} hue Hue in the range from 0 to 1535
 * @param  {Number} sat Saturation in the range from 0 to 255
 * @param  {Number} brt Brightness in the range from 0 to 255
 */
function HSB(hue, sat, brt)
{
    hue     = parseInt(hue);
    sat     = parseInt(sat);
    brt     = parseInt(brt);
    this.h  = hue - parseInt(hue / 1536) * 1536;
    this.s  = sat & 255;
    this.b  = brt & 255;
}

/**
 * Converts a <code>HSB</code> object to an <code>RGB</code> object. 
 * @return {RGB}
 */
HSB.toRGB   = HSB.prototype.toRGB = function()
{
    var tmp = this.s / 255,
        r   = this.b * (this.h).hueTransform(),
        g   = this.b * (this.h + 1024).hueTransform(),
        b   = this.b * (this.h +  512).hueTransform();
    r       = tmp    * r + (1 - tmp) * this.b;
    g       = tmp    * g + (1 - tmp) * this.b;
    b       = tmp    * b + (1 - tmp) * this.b;
    return new RGB(r, g, b);
};
