import React from "react";

export default function List (props) {
  return props.eventType !== 'titleOnly' ? 
      (<div className="myList">
      {props.list.map(list => {
        return (
          <figure key={list.id} className="figure-mylist">
            <img src={list.img} alt={list.id} />
            <figcaption>{list.title}</figcaption>
            <button
              className="btn"
              onClick={() => props.handleClick(list.id)}>
              {props.eventType === 'delete' ? 'Remove' : 'Add'}
            </button>
          </figure>
        );
      })}
    </div>)
    : (props.list.map(item => <a key={item.id} href="/#">{item.title}</a>))
};
