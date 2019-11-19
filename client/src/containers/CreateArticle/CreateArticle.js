import React, {Component} from 'react';
import FroalaEditor from 'react-froala-wysiwyg';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';


import UserNav from '../../components/UserNav/UserNav';

import './CreateArticle.css';

class ArticlePage extends Component {
    render () {
        return (
            <div className='container'>
                <UserNav />
                <div className='write-article'>
                    <h1 className='header'>Write Your Article</h1>
                    <input type='text' placeholder='Article Title' />
                    <div className='textarea'>
                    <FroalaEditor tag='textarea' />
                    </div>
                <button className='btn-upload'>Publish</button>
                </div>
                
            </div>
        );
    }
};

export default ArticlePage;