import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserNav from '../../components/UserNav/UserNav';
import './MyFeeds.css';

class MyFeeds extends Component {
    constructor() {
        super();
        this.state = {
            myFeeds: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        fetch('https://team-work-api.herokuapp.com/api/v1/feed', {
            method: 'GET',
            headers: {
                'authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    myFeeds: data.data
                })
                console.log(this.state.myFeeds)
            })
            .catch(e => console.log(e));
    }

    render() {
        const { myFeeds } = this.state;
        const id = localStorage.getItem('id');

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
                                            <button className='btn delete'>Delete</button>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    {/* gif area */}
                    <div className='gif-container'>
                        {myFeeds.map((gifs, i) => {
                            if (gifs.gifauthorid === id) {
                                if (gifs.length === 0) {
                                    return (
                                        <h1>NO gif available</h1>
                                    )
                                }
                                else {
                                    return (
                                        <div className='gifs' key={i}>
                                            <img src={gifs.image} alt='' className='gif-image' />
                                            <div className='article-properties'>
                                                <div>{gifs.gifcreatedon}</div>
                                            </div>
                                            <div className='option'>
                                                <button className='btn delete'>Delete</button>
                                            </div>
                                        </div>
                                    );
                                }

                            }
                        })}

                    </div>
                </div>
            </div>
        );
    }

};



export default MyFeeds;