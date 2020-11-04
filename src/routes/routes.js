import React , { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const LandingPage = lazy(() => import('../Containers/LandingPage/LandingPage'));
const Signup = lazy(() => import('../Containers/Signup/Signup'));
const Signin = lazy(() => import('../Containers/Signin/Signin')) ;
const CreateArticle = lazy(() => import('../Containers/CreateArticle/CreateArticle'));
const GifUpload = lazy(() => import('../Containers/GifUpload/GifUpload'));
const MyFeeds = lazy(() => import('../Containers/MyFeeds/MyFeeds')) ;
// import ProfilePage from '../Containers/ProfilePage/ProfilePage';
const Timeline = lazy(() => import('../Containers/Timeline/Timeline'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

const Routes = () => {
        return(
            <Suspense fallback='loading'>
            <Router>
            <div>
            <Switch>
             <Route exact path='/' component={LandingPage} />
             <Route path='/register' component={Signup} />
             <Route path='/login' component={Signin} />
             <Route path='/article' component={CreateArticle} />
             <Route path='/gif' component={GifUpload} />
             <Route path='/posts' component={MyFeeds} />
             {/* <Route path='/profile' component={ProfilePage} /> */}
             <Route path='/feeds' component={Timeline} />
             <Route component={NotFound} />
             </Switch>
             <NotificationContainer />
            </div>
            </Router>
            </Suspense>
        );
}

export default Routes;