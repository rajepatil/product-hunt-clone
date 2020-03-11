import React from 'react';
export function Card(props)
{
  console.log("props in card",props)
  return (

    <div className="flex card">
      <div className="flex">
        <img className="img" src={props.thumbnail.image_url} alt={props.name}></img>
        <div className="description">
          <h3 className="heading">{props.name}</h3>
          
         <div>
            <button className="btn">{props.comments_count}</button>
           <span>{props.tagline}</span>
          </div>
        </div>
      </div>
      <button className="up" onClick={() => props.updateCount(props.votes_count)}>
        {props.votes_count}
      </button>

    </div>);
}
