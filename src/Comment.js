import React from 'react';
import faker from 'faker'

faker.locale = "es";

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

const Comment = (props) => {
  return (
    <div className="ui comments">
      <div className="comment">
        <i className="avatar">
          <img src={ props.avatar } alt="avatar"/>
        </i>

        <div className="content">
          <span className="author">{ props.name }</span>
          <div className="metadata">
            <div className="date">{ props.date} days ago</div>
            <div className="rating">
              { getFaves(props.rave) }
            </div>
          </div>
          <div className="text">
            { props.text }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Comment;