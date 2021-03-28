import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NewReciptContainer from './components/Create/NewReciptContainer';
import SignInContainer from './components/Login/SignInContainer';
import Logout from './components/Logout/Logout';
import MainPageContainer from './components/Main/MainPageContainer';
import RecipePage from './components/Recipt/RecipePage';
import SignUpPage from './components/SignUp/SignUpPage';

export const UseRoutes = isAuth => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/create' exact>
                    <NewReciptContainer />
                </Route>
                <Route path='/' exact>
                    <MainPageContainer />
                </Route>
                <Route path='/login' exact>
                    <SignInContainer />
                </Route>
                <Route path='/signup' exact>
                    <SignUpPage />
                </Route>
                <Route path='/logout' exact>
                    <Logout />
                </Route>
                <Route>
                    <RecipePage path='recipe/:id' />
                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/' exact>
                <MainPageContainer />
            </Route>
            <Route path='/login' exact>
                <SignInContainer />
            </Route>
            <Route path='/signup' exact>
                <SignUpPage />
            </Route>
            <Route>
                <RecipePage path='recipe/:id' />
            </Route>
        </Switch>
    )
}