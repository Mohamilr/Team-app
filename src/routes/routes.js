import React , { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PrvateRoute from './privateRoute';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const LandingPage = lazy(() => import('../Containers/LandingPage/LandingPage'));
const Signup = lazy(() => import('../Containers/Signup/Signup'));
const Signin = lazy(() => import('../Containers/Signin/Signin')) ;
const CreateArticle = lazy(() => import('../Containers/CreateArticle/CreateArticle'));
const GifUpload = lazy(() => import('../Containers/GifUpload/GifUpload'));
const MyFeeds = lazy(() => import('../Containers/MyFeeds/MyFeeds'));
const EditArticle = lazy(() => import('../Containers/EditArticle/EditArticle'));
const Timeline = lazy(() => import('../Containers/Timeline/Timeline'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));
const ViewArticle = lazy(() => import('../Containers/ViewArticle/ViewArticle'));
const ViewGif = lazy(() => import('../Containers/ViewGif/ViewGif'));

const Routes = () => {
        return(
            <Suspense fallback='loading'>
            <Router>
            <Switch>
             <Route exact path='/' component={LandingPage} />
             <Route path='/register' component={Signup} />
             <Route path='/login' component={Signin} />
             <PrvateRoute exact path='/create-article' component={CreateArticle} />
             <PrvateRoute path='/article/:id' component={ViewArticle} />
             <PrvateRoute path='/edit-article/:id' component={EditArticle} />
             <PrvateRoute exact path='/gif' component={GifUpload} />
             <PrvateRoute path='/gif/:id' component={ViewGif} />
             <PrvateRoute path='/my-posts' component={MyFeeds} />
             <PrvateRoute path='/feeds' component={Timeline} />
             <Route component={NotFound} />
             </Switch>
             <NotificationContainer />
            </Router>
            </Suspense>
        );
}

export default Routes;