var GAME_LEVELS = [
	[" x                  x ",
	 " x                  x ",
	 " x @                x ",
	 " xxxxx              x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x      bbbbbbbbbbbbx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " xbbbbbbbbbb        x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                + x ",
	 " xxxxxxxxxxxxxxxxxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x              xxxxx ",
	 " x                  x "],
	[" xxxxxxxxxxxxxxxxxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x                @ x ",
	 " x              xxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " xbbbbbb     bbbbbbbx ",
	 " x                  x ",
	 " x                  x ",
	 " x     xxx          x ",
	 " x                  x ",
	 " x                  x ",
	 " xbbbbbbbbbb    bbbbx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " xbbbbb   bbbbbbbbbbx ",
	 " x        b         x ",
	 " x        b         x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " xb                 x ",
	 " x b                x ",
	 " x  b               x ",
	 " x   b        xxx   x ",
	 " x    b             x ",
	 " x     b            x ",
	 " x      b           x ",
	 " x       b          x ",
	 " x        b         x ",
	 " x         b        x ",
	 " x          b       x ",
	 " x           b      x ",
	 " x           b      b ",
	 " xbbbbbbbbbbb      bx ",
	 " x                b x ",
	 " x               b  x ",
	 " x              b   x ",
	 " x +           b    x ",
	 " xxxxxxxxxxxxxxxxxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " xxxxx              x "],
	[" xxxxxxxxxxxxxxxxxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x @                x ",
	 " xxxxx              x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x         +        x ",
	 " xxxxxxxxxxxxxxxxxxxx ",
	 " xxxxxxxxxxxxxxxxxxxx "],
	[" x                  x ",
	 " xxxxxxxxxxxxxxxxxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x +                x ",
	 " xxxxx              x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x         @        x ",
	 " xxxxxxxxxxxxxxxxxxxx ",
	 " xxxxxxxxxxxxxxxxxxxx "],
	[" x                  x ",
	 " xxxxxxxxxxxxxxxxxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x                + x ",
	 " x              xxxxx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x @                x ",
	 " xxxxxxxxxxxxxxxxxxxx "],
	[" x                  x ",
	 " x                  x ",
	 " x +                x ",
	 " xxxxx              x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x      bbbbbbbbbbbbx ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " xbbbbbbbbbb        x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                  x ",
	 " x                @ x ",
	 " xxxxxxxxxxxxxxxxxxxx "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

