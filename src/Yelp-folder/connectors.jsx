import React from "react";
// import './css/'
import Image from './img/Logo.svg'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";



//pages
import Error from "./error";
import Campground from "./campground";
import Signup from "./signup";
import Signin from "./signin";
import AddCamp from "./code/addCampground";
import NotLoggin from "./code/notLogingin";
import Home from "./Home";
import Comment from "./code/comment";
import Review from "./code/review";
function Connector() {
    return(
        <div>
            <Router> 
                 <Switch>
                    <Route exact path='/'>
                        <Signup />
                    </Route>
                <Route exact  path='/campground'>
                    <Campground />
                </Route>
                    <Route exact path='/home'>
                        <Home/>
                    </Route>
                    <Route exact path='/comment'>
                        <Comment />
                    </Route>
                    <Route exact path='/review'>
                        <Review />
                    </Route>
                    <Route exact path='/signin'>
                        <Signin />
                    </Route>
                    <Route exact path='/addcamp'>
                        <AddCamp />
                    </Route>
                    <Route exact path='/not'>
                        <NotLoggin />
                    </Route>
                <Route exact path='*'>
                    <Error />
                </Route>

                </Switch>
            </Router>
            </div>
    )
}

export default Connector;