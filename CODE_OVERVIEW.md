# Code Overview

This repository contains a simple webpage for listing links to custom GPTs.
It is made up of three main files:

- **GPTs.html** – the main HTML page. It loads the CSS and JavaScript, and
  contains two GPT cards that open external links when clicked.
- **styles.css** – styles the layout, cards, and responsive design.
- **script.js** – provides a small bit of interactivity such as opening links
  in a new tab and revealing cards on scroll.

## How it works

1. Each GPT card has an `onclick` attribute that calls `openLink()` with a URL.
2. `openLink()` is defined in `script.js` and uses `window.open` to launch the
   URL in a new browser tab.
3. The script also listens for the `scroll` event. As the page scrolls it adds
   the `active` class to cards that have come into view to trigger CSS effects.

## Page Structure

```text
+-------------------- header ---------------------+
|              My GPTs Collection                 |
+-------------------------------------------------+
|                container (div)                  |
|  +-------------- gpt-card --------------+       |
|  | Scholarship Strategist GPT           |       |
|  +--------------------------------------+       |
|  +-------------- gpt-card --------------+       |
|  | Synonym Finder GPT                   |       |
|  +--------------------------------------+       |
+-------------------------------------------------+
|                   footer                         |
+-------------------------------------------------+
```

The `GPTs.html` page references `styles.css` for styling and `script.js` for
functionality. The CSS sets up the basic layout, card animations, and a
responsive design for mobile screens.
