import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserNav from '../../components/UserNav/UserNav';
import './Timeline.css';

class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feeds: [],
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
                    feeds: data.data
                })
                console.log(this.state.feeds)
            })
            .catch(e => console.log(e));
        // console.log(this.state.)
    }



    render() {
        const { feeds } = this.state;
        //     return(
        //     <div>{article.id}</div>
        // // <div>{article.aut}</div>
        //     )
        // })
        // const all = feeds.map(articles, i => {
        //    return ( <div>
        //         <div className='articles' key={i}>
        //                 <div className='article-properties'>
        // <h3>{articles.title}</h3>
        //                <p>{articles.createdon}</p>
        //                 </div>
        //                 <article>
        //                {articles.article}
        //                 </article>
        //                 <div className='article-properties'>
        //                     <div><span className='by'>BY</span> <span>{articles.authorid}</span></div>
        //                     <p>comment icon <span>ok</span></p>
        //                 </div>
        //             </div>
        //     </div>
        //    )
        // })
        return (
            <div className='container'>
                <UserNav />
                <div className='right'>
                    <div className='headers'>
                        <h4>Articles</h4> | <h4>Gifs</h4>
                    </div>
                    <div className='article-container'>
                        {feeds.map((articles, i) => {
                            return (
                                <div className='articles' key={i}>
                                    <div className='article-properties'>
                                        <Link to='/'><h3>{articles.title}</h3></Link>
                                        <p>{articles.createdon}</p>
                                    </div>
                                    <article>
                                        {articles.article}
                                    </article>
                                    {/* <div className='article-properties'>
                                        <div><span className='by'>BY</span> <span>{articles.authorid}</span></div>
                                        <p>comment icon <span>ok</span></p>
                                    </div> */}
                                </div>

                            )
                        })}

                    </div>
                    {/* gif area */}
                    <div className='gif-container'>
                        {feeds.map((gifs, i) => {
                            return (

                                <div className='gifs' key={i}>
                                    <img src={gifs.image} alt='' className='gif-image' />
                                    <div className='article-properties'>
                                        <div><span className='by'>BY</span> <span>Mohammed Ibrahim</span></div>
                                        <p>comment icon <span>1</span></p>
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