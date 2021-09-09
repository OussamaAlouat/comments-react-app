import React from 'react';
import ReactDom from 'react-dom';
import './app.css'

const App = () => {
  return (
    <div className="container">
      <h1>Wellcome to Comment APP</h1>
      <div className="comments-section">
        <div className="ui comments">
          <div className="comment">

            <a className="avatar">
              <img src="/images/avatar/small/stevie.jpg"/>
            </a>

            <div className="content">
              <a className="author">Stevie Feliciano</a>
              <div className="metadata">
                <div className="date">2 days ago</div>
                <div className="rating">
                  <i className="star icon"></i>
                  5 Faves
                </div>
              </div>
              <div className="text">
                Hey guys, I hope this example comment is helping you read this documentation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

ReactDom.render(<App/>, document.querySelector('#root'))
