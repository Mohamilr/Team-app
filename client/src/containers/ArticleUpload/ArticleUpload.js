import React from 'react';
// import Trumbowyg from 'react-trumbowyg';
import 'react-trumbowyg/dist/trumbowyg.min.css';

import UserNav from '../../components/UserNav/UserNav';

import './ArticleUpload.css';

const ArticlePage = () => {
    return (
        <div className='container'>
            <UserNav />
            <div className='write-article'>
                <h1 className='header'>Write Your Article</h1>
                <input type='text' placeholder='Article Title' /><br />
                <textarea cols='30' rows='10'></textarea><br />
            <button className='btn-upload'>Upload</button>
            </div>
                {/* <Trumbowyg id='react-trumbowyg' /> */}
        </div>
    );
};

export default ArticlePage;