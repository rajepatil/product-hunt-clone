import React from 'react';
import './App.css';
import { Cards } from './Cards';
import { Header } from './header';
import { Asidecard } from './Asidecard';
// import config from './config';

import { profileSrc } from '../data';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      posts:[]
    };
  }

  componentDidMount() {
    fetch("https://api.producthunt.com/v1/posts/",{
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer 0ns-dkfbamLRViMA-xC1CmcaRFBPB_Zoteoweo4Z7Cc",
        "Host": "api.producthunt.com"
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data.posts)
      this.setState({
          posts: data.posts
        }) 
    })
    .catch(error => console.log(error));
        
  }


  updateCount = votes_count =>
  {
    let updatedData = this.state.posts.map(post =>
    {
      if (post.votes_count === votes_count) {
        post.votes_count = post.votes_count + 1;
      }
      return post;
    });
    this.setState({ posts: updatedData });
  };

  render()
  {
    return (
      <div className="App">
        <Header />
        <div className="container flex">
          {/*<Cards names={names} updateCount={this.updateCount} title="Popular this month" />*/}
          <Cards posts={this.state.posts} updateCount={this.updateCount} title="Popular this month" />

          <Asidecard title="Makers working today" profileSrc={profileSrc} />
        </div>
      </div>
    );
  }
}

export default App;


