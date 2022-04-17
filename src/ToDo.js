import React from 'react';

const ToDo = ({ filter, title, content, importance, deadline }) => {
  return (
    (filter === importance || filter === "All") ? (
    <div className="todo">
      <h4 className="todo--title">{title}</h4>
      <p className="todo--content">{content}</p>
      <p className="todo--content">{importance}</p>
      <p className="todo--content">{deadline}</p>
    </div>
    ) : (<br></br>)
  );
};

export default ToDo;