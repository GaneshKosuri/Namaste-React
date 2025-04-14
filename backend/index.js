import React from 'react'
import ReactDOM from 'react-dom/client'

// React.createElement => ReactElement => Object => renders to => HTML element

const heading = React.createElement('h1', { id: 'heading' }, "Hi Ganesh Kosuri Backend")
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(heading)
root.render(heading)

// JSX => Not HTML in JavaScript => HTML/XML like syntax
// JSX code transpiled in to JS before it goes to JSEngine => Job is Done by PARCEL (it uses Babel)
const jsxHeading = <h1 id="heading">Hello Ganesh Kosuri Backend 1234</h1>
root.render(jsxHeading)