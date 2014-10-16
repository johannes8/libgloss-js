// RGB.js 1.0 by Jochen Mauch <mauch at mail dot de>
// Requires Number.js >= 1.0
'use strict';
/**
 * Constructor for the <code>RGB</code> class
 * @return {RGB}
 * @param  {Number} red   Red component
 * @param  {Number} green Green component
 * @param  {Number} blue  Blue component
 */
function RGB(red, green, blue)
{
    this.r   = parseInt(red)   & 255;
    this.g   = parseInt(green) & 255;
    this.b   = parseInt(blue)  & 255;
}

/**
 * Generates 24bit color value by shifting an bitwise-or-ing the three RGB components
 * @return	{Number}
 */
RGB.gen24    = RGB.prototype.gen24    = function(){return this.r<<16|this.g<<8|this.b;     };

/**
 * Returns the HTML color string
 * @return	{String}
 */
RGB.toString = RGB.prototype.toString = function(){return "#"+this.gen24().toHex32String().substr(2);};
