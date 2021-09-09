import React from 'react';
import ReactDom from 'react-dom';
import './app.css'
import faker from 'faker'
import useForceUpdate from 'use-force-update';

faker.locale = "es";

function getRandomNumber (min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getFaves(num) {
  const faves = [];
  for (let i = 0; i < num; i++) {
    faves.push(
      <i className="star icon star-color"></i>
    )
  }

  if (num < 5) {
    for (let j = faves.length; j < 5; j++) {
      faves.push(
        <i className="star icon"></i>
      )
    }
  }

  return faves;
}

function getCommentaries () {
  const commentaries = [];
  const randomNumber = getRandomNumber(3, 10);
  for (let i = 0; i < randomNumber; i++) {
    const favesRandom = getRandomNumber(1, 5);
    commentaries.push(
      <div className="ui comments" >
        <div className="comment">
          <a className="avatar">
            <img src={ faker.image.avatar() } alt="avatar"/>
          </a>

          <div className="content">
            <h3 className="author">{ faker.name.firstName() }</h3>
            <div className="metadata">
              <div className="date">{ getRandomNumber(1, 10) } days ago</div>
            <div className="rating">
              { getFaves(favesRandom) }
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
