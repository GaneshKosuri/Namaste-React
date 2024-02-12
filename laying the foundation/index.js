import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
    "h1",
    { id: "title", className: "heading", style: { color: "red" } },
    "Namaste Everyone!"
);
console.log(heading); // prints an object which is created by react and it will have all the info to render an element
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading2 = React.createElement(
    "h2",
    {
        id: "heading2",
    },
    "Heading 2"
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
);
console.log(container);
root.render(container);