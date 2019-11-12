import React, { Component } from 'react';
// import Signin from './containers/Signin/Signin';
// import Signup from './containers/Signup/Signup';
import UserNav from './components/UserNav/UserNav';
 

class App extends Component {
  render () {
    return (
      <UserNav />
      //  <Signin />
      //  <Signup />
    );
  }
}

export default App;
