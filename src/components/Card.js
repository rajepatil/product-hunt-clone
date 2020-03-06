import React from 'react';
export function Card(props)
{
  return (
    <div className="flex card">
      <div className="flex">
        <img className="img" src={props.src} alt={props.name}></img>
        <div className="description">
          <h3 className="heading">{props.name}</h3>
          <p className="description">{props.description}</p>
          <div>
            <button className="btn">{props.up}</button>
            {props.tags.map(tag => <span>{tag}</span>)}
          </div>
        </div>
      </div>
      <button className="up" onClick={() => props.updateCount(props.count)}>
        {props.count}
      </button>

    </div>);
}
