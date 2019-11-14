import React, { Component } from 'react';
// import Signin from './containers/Signin/Signin';
// import Signup from './containers/Signup/Signup';
// import Timeline from './Containers/Timeline/Timeline';
import GifUpload from './Containers/GifUpload/GifUpload'; 

class App extends Component {
  render () {
    return (
      <GifUpload />
      // <Timeline />
      //  <Signin />
      //  <Signup />
    );
  }
}

export default App;
