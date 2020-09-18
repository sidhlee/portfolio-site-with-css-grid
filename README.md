# Portfolio Site with CSS Grid & Sass

A Code-along with comments for [How to create a Website with CSS Grid & Sass](https://youtu.be/dRuMoGNcJfw) by Kevin Powell.

run2: https://friendly-wozniak-1cf8f4.netlify.app/

## Memo

- Think of CSS grid as a different starting point(grid line) for contents, rather than dividing the screen into content areas. This way, it's easier to create more modern layout where components are layered / overlap on top of each other.

- Sass placeholder selector(`%`) is very handy when you want to `@extend` a `%variable` which holds a block of many css rules.

  - But can cause some issues especially in `@media` and `@supports`, so in general use `@mixin` instead.

- You can write flex box fallback first and write grid inside `@supports (display: grid) {}`.

  - or you can start with grid inside `@supports`, then write fallback.

- `minmax(10em | auto, 50em |auto)` is very convenient when used with grid.

- `object-fit: cover;` is like `background-size: cover` for `<img>` element.

- When having a colorful background, setting opacity on text blends them nicely with the color.
