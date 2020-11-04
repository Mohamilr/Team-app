import React from 'react';
import spinner from '../assets/images/loader.gif';


const Loader = () => {
      return (
      <div>
          <img src={spinner} style={{margin: '10em auto', display: 'block', width: '15em'}} alt='Loading' />
      </div>
      )
}

export default Loader;