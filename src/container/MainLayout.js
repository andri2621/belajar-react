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
import MovieList from './movies/Movies'


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
                    {/* <Route path="/about" component={About} exact /> */}
                    <Route component={Error404} />
                </Switch>
            </div>
        </div>
    )
}

export default MainLayout;