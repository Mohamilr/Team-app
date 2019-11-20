import React from 'react';
import UserNav from '../../components/UserNav/UserNav';
import './GifUpload.css';
import '../../assets/Actions/Upload';

const GifUpload = () => {
  // const input = document.querySelector('.input');
  // // const icon = document.querySelector('.fa-plus-circle');

  // await function action () {
  //   document.querySelector('.input').click();
  // }
  return (
      <div className='container'>
    <UserNav />
       <div className='gif-upload-container'>
           <h1 className='header'>Upload A Gif</h1>
           <div className='upload-gif'>
           <input type='file' className='input' style={{display: 'none'}} />
           <i className="fas fa-plus-circle" ></i>
           <input type='text' placeholder='Gif title' className='title'/>
           <div className='preview'>
             <p>gif name</p>
             <p>gif size</p>
           </div>
           <button className='btn-upload'>Upload</button>
           </div>
       </div>
      </div>
  );
};

export default GifUpload;