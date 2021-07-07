import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Pages/Repositories';
import Home from './Pages/Home';

export default function Routes() {
    return ( 
        <BrowserRouter>
          <Switch> 
          <Route path="/" exact component={Home} />  {/* exact é utilizado quando a rota é apenas "/". Pois se for colocar na rota /Repositorie, ele identifica primeiro a home por ser apenas "/" */}
          <Route path="/repositories" component={Repositories} />
          </Switch>      
        </BrowserRouter>

    )
}
