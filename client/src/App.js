import React, { Component } from 'react';
// import Signin from './containers/Signin/Signin';
// import Signup from './containers/Signup/Signup';
// import Timeline from './Containers/Timeline/Timeline';
// import GifUpload from './Containers/GifUpload/GifUpload'; 
// import ArticlePage from './Containers/CreateArticle/CreateArticle';
// import MyFeeds from './Containers/MyFeeds/MyFeeds';
import ProfilePage from './Containers/ProfilePage/ProfilePage';

class App extends Component {
  render () {
    return (
      <ProfilePage />
      // <MyFeeds />
      // <ArticlePage />
      // <GifUpload />
      // <Timeline />
      //  <Signin />
      //  <Signup />
    );
  }
}

export default App;
