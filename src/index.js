import React from 'react';
import ReactDom from 'react-dom';
import './app.css'
import faker from 'faker'
import useForceUpdate from 'use-force-update';
import Comment from './Comment'

faker.locale = "es";

function getRandomNumber (min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}


function getCommentaries () {
  const commentaries = [];
  const randomNumber = getRandomNumber(3, 10);
  for (let i = 0; i < randomNumber; i++) {
    commentaries.push(
      <Comment></Comment>
    )
  }

  return commentaries;
}



const App = () => {
  const forceUpdate = useForceUpdate();

  const handleClick = React.useCallback(() => {
    forceUpdate();
  }, [forceUpdate]);

  return (
    <div className="container">
      <div className="title-section">
        <h1>Wellcome to Comment APP</h1>
      </div>
      <div className="comments-section">
        { getCommentaries() }
      </div>

      <button onClick={ handleClick } className="ui button">Refresh</button>
    </div>
  )
};

ReactDom.render(<App/>, document.querySelector('#root'))
