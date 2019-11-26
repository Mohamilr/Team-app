import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserNav from '../../components/UserNav/UserNav';
import './MyFeeds.css';

const baseUrl = 'https://team-work-api.herokuapp.com/api/v1';

class MyFeeds extends Component {
    constructor() {
        super();
        this.state = {
            myFeeds: [],
            myGifs : [],
            token: ''
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        fetch(`${baseUrl}/feed`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    myFeeds: data.data.articles,
                    myGifs: data.data.gifs,
                    token: token
                })
                console.log(this.state.myFeeds)
                
            })
            .catch(e => console.log(e));
    }


    // delete article
    handleArticleDelete = (id) => {
      fetch(`${baseUrl}/articles/${id}`, {
          method: 'DELETE',
          headers: {
              'authorization': `bearer ${this.state.token}`,
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e));
    }


    // delete gif
    handleGifDelete = (id) => {
        fetch(`${baseUrl}/gifs/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${this.state.token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.log(e));
      }



    render() {
        const { myFeeds, myGifs } = this.state;

        const id = parseInt(localStorage.getItem('id'))

        return (
            <div className='container' >
                <UserNav />
                <div className='right'>
                    <div className='headers'>
                        <h4>Articles</h4> | <h4>Gifs</h4>
                    </div>
                    <div className='article-container'>
                        {myFeeds.map((articles, i) => {
                            if (articles.authorid === id) {
                                return (
                                    <div className='articles' key={i}>
                                        <div className='article-properties'>
                                            <Link to='/'><h3>{articles.title}</h3></Link>
                                            <p>{articles.createdon}</p>
                                        </div>
                                        <article>
                                            {articles.article}
                                        </article>
                                        <div className='options'>
                                            <button className='btn update'>Edit</button>
                                            <button className='btn delete' onClick={(e)=> {
                                                e.preventDefault();
                                                this.handleArticleDelete(articles.articleid);
                                            }}>Delete</button>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    {/* gif area */}
                    <div className='gif-container'>
                        {myGifs.map((gifs, i) => {
                            if (gifs.gifauthorid === id) {
                                // if (gifs.length === 0) {
                                //     return (
                                //         <h1>NO gif available</h1>
                                //     )
                                // }
                            
                                    return (
                                        <div className='gifs' key={i}>
                                            <img src={gifs.image} alt='' className='gif-image' />
                                            <div className='gif-properties'>
                                                <h3>{gifs.giftitle}</h3>
                                                <div>{gifs.gifcreatedon}</div>
                                            </div>
                                            <div className='option'>
                                                <button className='btn delete' onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleGifDelete(gifs.gifid);
                                                }}>Delete</button>
                                            </div>
                                        </div>
                                    );

                            }
                        })}

                    </div>
                </div>
            </div>
        );
    }

};



export default MyFeeds;