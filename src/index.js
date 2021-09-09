import React from 'react';
import ReactDom from 'react-dom';
import './app.css'
import faker from 'faker'
faker.locale = "es";

function getCommentaries () {
  const commentaries = [];
  const randomNumber = Math.random() * (10 - 3) + 3;
  for (let i = 0; i < randomNumber; i++) {
    commentaries.push(
      <div className="ui comments" >
        <div className="comment">
          <a className="avatar">
            <img src={ faker.image.avatar() } alt="avatar"/>
          </a>

          <div className="content">
            <h3 className="author">{ faker.name.firstName() }</h3>
            <div className="metadata">
              <div className="date">2 days ago</div>
            <div className="rating">
              <i className="star icon"></i>
              5 Faves
            </div>
          </div>
            <div className="text">
              { faker.lorem.sentence() }
            </div>
          </div>
        </div>
      </div>
    )
  }

  return commentaries;
}


const App = () => {
  return (
    <div className="container">
      <h1>Wellcome to Comment APP</h1>
      <div className="comments-section">
        { getCommentaries() }
      </div>
    </div>
  )
};

ReactDom.render(<App/>, document.querySelector('#root'))
