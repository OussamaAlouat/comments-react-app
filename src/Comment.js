import React from 'react';
import faker from 'faker'

faker.locale = "es";

function getRandomNumber (min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function getFaves(num) {
  const faves = [];
  for (let i = 0; i < num; i++) {
    faves.push(
      <i className="star icon star-color"  key={i}></i>
    )
  }

  if (num < 5) {
    for (let j = faves.length; j < 5; j++) {
      faves.push(
        <i className="star icon" key={j}></i>
      )
    }
  }

  return faves;
}


const Comment = () => {
  const favesRandom = getRandomNumber(1, 5);

  return (
    <div className="ui comments">
      <div className="comment">
        <i className="avatar">
          <img src={ faker.image.avatar() } alt="avatar"/>
        </i>

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
};

export default Comment;