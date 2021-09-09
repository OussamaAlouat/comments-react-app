import React from 'react';
import ReactDom from 'react-dom';
import './app.css'

const App = () => {
  return (
    <div className="container">
      <h1>Wellcome to Comment APP</h1>
    </div>
  )
};

ReactDom.render(<App/>, document.querySelector('#root'))
