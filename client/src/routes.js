import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NewRecipt from './components/Create/NewRecipt';
import SignIn from './components/Login/SignIn';
import MainPage from './components/Main/MainPage';
import ReciptPage from './components/Recipt/ReciptPage';
import SignUpPage from './components/SignUp/SignUpPage';

export const UseRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/create' exact>
                    <NewRecipt />
                </Route>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Route path='/login' exact>
                    <SignIn />
                </Route>
                <Route path='/signup' exact>
                    <SignUpPage />
                </Route>
                <Route>
                    <ReciptPage path='recipt/:id' />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage />
            </Route>
            <Route path='/login' exact>
                <SignIn />
            </Route>
            <Route path='/signup' exact>
                <SignUpPage />
            </Route>
            <Route>
                <ReciptPage path='recipt/:id' />
            </Route>
        </Switch>
    )
}