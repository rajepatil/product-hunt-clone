import React from 'react';
import { Card } from './Card';
export function Cards(props)
{
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <div className="main-card">
        {props.posts.map(post => <Card {...post} updateCount={props.updateCount} />)}
      </div>
    </div>
  );
}



