import React from 'react';

interface HTMLProps {
  htmlAttributes: Record<string, unknown>;
  headComponents: [];
  bodyAttributes: Record<string, unknown>;
  body: string;
  preBodyComponents: [];
  postBodyComponents: [];
}

const handleTheme = `
  function setTheme(newTheme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.body.className = newTheme;
  }

  var preferredTheme;

  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) { }

  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  }

  setTheme(preferredTheme || 'dark');
`;

const handleDisplay = `
  function setDisplay(newDisplay) {
    window.__display = newDisplay;
    preferredDisplay = newDisplay;
    document.body.id = newDisplay;
  }

  var preferredDisplay;

  try {
    preferredDisplay = localStorage.getItem('display');
  } catch (err) { }

  window.__setPreferredDisplay = function(newDisplay) {
    setDisplay(newDisplay);
    try {
      localStorage.setItem('display', newDisplay);
    } catch (err) {}
  }

  setDisplay(preferredDisplay || 'list');
`;

export default function HTML(props: HTMLProps) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body className="dark" {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              ${handleTheme}
              ${handleDisplay}
            })();
          `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
