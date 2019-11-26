import React, { Component } from 'react';
import UserNav from '../../components/UserNav/UserNav';
import './GifUpload.css';
import '../../assets/Actions/Upload';

const baseUrl = 'https://team-work-api.herokuapp.com/api/v1';

class GifUpload extends Component {
  constructor () {
    super();
    this.state = {
      gif: null,
      gifTitle: '',
      // id: '',
      // token: '',
      fileProp : {
        name: '',
        size: ''
      }
    }
    
  }

  handleFileUpload = (e) => {
      if(!e.target.files[0]) {
        return console.log('file upload was cancelled')
      }
      
      let name = e.target.files[0].name.substr(0, 15);
      let size = e.target.files[0].size;

      if (size <= 1000) {
        size = `${size.toFixed(1)} bytes`;
      } 
      else if (size > 1000 && size <= 1000000) {
        size = `${(size / 1000).toFixed(1)} kb`;
      }
      else if (size > 1000000 && size <= 1000000000) {
        size = `${(size / 1000000).toFixed(1)} mb`;
      }

      
      this.setState({
        gif: e.target.files[0],
        fileProp : {
          name: name,
          size: size
        }
      })
  }

  handleGifTitle = (e) => {
    this.setState({
        gifTitle: e.target.value
    })
  }

  handleGifPost = () => {

    const token = localStorage.getItem('token');
    const gifAuthorId = localStorage.getItem('id');
   
    const data = new FormData();
    data.append('gif', this.state.gif, this.state.gif.name);
    data.append('gifTitle', this.state.gifTitle);
    data.append('gifAuthorId', gifAuthorId);

     fetch(`${baseUrl}/gifs`, {
       method: 'POST',
       body: data,
       headers: {
         'authorization': `bearer ${token}`
       }
     })
     .then(res => res.json())
     .then(data => console.log(data))
     .catch(e => console.log(e))
  } 


 render () {
   const { name, size} = this.state.fileProp;
  return (
    <div className='container'>
  <UserNav />
     <div className='gif-upload-container'>
         <h1 className='header'>Upload A Gif</h1>
         <div className='upload-gif'>
         <input type='file' className='input' id='file' style={{display: 'none'}} onChange={(e) => {
              this.handleFileUpload(e);
         }} />
         <label htmlFor='file'>
         <i className="fas fa-plus-circle"></i>
         </label>
         <input type='text' placeholder='Gif title' className='title' onChange={(e) => this.handleGifTitle(e)}/>
         <div className='preview' >
           <p>{name ? name : 'gif name'}</p>
           <p>{size ? size : 'gif size'}</p>
         </div>
         <button className='btn-upload' onClick={(e) => this.handleGifPost(e)}>Upload</button>
         </div>
     </div>
    </div>
);
 }
  
};

export default GifUpload;