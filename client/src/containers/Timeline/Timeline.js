import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserNav from '../../components/UserNav/UserNav';
import './Timeline.css';

class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleFeeds: [],
            gifFeeds: [],
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
                    articleFeeds: data.data.articles,
                    gifFeeds: data.data.gifs
                })
              
            })
            .catch(e => console.log(e));
    }


    render() {
        const { articleFeeds, gifFeeds } = this.state;

        return (
            <div className='container'>
                <UserNav />
                <div className='right'>
                    <div className='headers'>
                        <h4>Articles</h4> | <h4>Gifs</h4>
                    </div>
                    <div className='article-container'>
                        {articleFeeds.map((articles, i) => {
                            return (
                                <div className='articles' key={i}>
                                    <div className='article-properties'>
                                        <h3 className='article-title'><Link to='/'>{articles.title}</Link></h3>
                                        <p>{articles.createdon}</p>
                                    </div>
                                    <article>
                                        {articles.article}
                                    </article>
                                </div>
                            )
                        })}

                    </div>
                    {/* gif area */}
                    <div className='gif-container'>
                        {gifFeeds.map((gifs, i) => {
                            return (

                                <div className='gifs' key={i}>
                                    <img src={gifs.image} alt='' className='gif-image' />
                                    <div className='gif-properties'>
                                    <div>{gifs.gifcreatedon}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default Timeline;