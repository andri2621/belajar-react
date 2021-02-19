import React from 'react';
import './MainLayout.css';
import AppNavbar from '../components/layout/AppNavbar'
import Sidebar from '../components/layout/Sidebar'
import {Route, Switch} from 'react-router-dom'
import { SidebarMenu } from './../data/routing'
import Home from './pages/home/Home'
import Counter from '../components/Counter'
import List from './pages/list/List'
import Todo from './pages/todo/Todo'
import Error404 from './pages/Error404'
import Footer from '../components/layout/Footer'
import MovieList from '../components/movies/ListMovies'
import RatingList from './rating/RatingList'
import ListStudent from '../components/student/ListStudent';

import {MovieDescription} from '../components/movies/MovieDesc'
// import { Movies } from '../components/movieDetail/MoviesStyle';
// import MovieInfo from '../components/movieDetail/MovieInfo';
// import CardMovie from '../components/movieDetail/CardMovie';

import Category from '../crud/Category'


const MainLayout = () => {
    return (
        <div className="container">
            <AppNavbar />
            <Sidebar menus={SidebarMenu}/>
            <Footer />
            <div className="main-content">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/counter" component={Counter} exact />
                    <Route path="/list" component={List} exact />
                    <Route path="/todo" component={Todo} exact />
                    <Route path="/home" component={Home} exact />
                    <Route path="/movies" component={MovieList} exact />
                    <Route path="/movies/:id" component={MovieDescription} exact />
                    <Route path="/rating" component={RatingList} exact />
                    <Route path="/student" component={ListStudent} exact />
                    <Route path="/category" component={Category} exact />

                    {/* <Route path="/movieinfo" component={CardMovie} exact /> */}


                    {/* <Route path="/about" component={About} exact /> */}
                    <Route component={Error404} />
                </Switch>
            </div>
        </div>
    )
}

export default MainLayout;