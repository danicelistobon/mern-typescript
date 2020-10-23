import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import 'bootswatch/dist/minty/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';

import Navbar from './components/Navbar/Navbar';
import VideoList from './components/Videos/VideoList';
import VideoForm from './components/Videos/VideoForm';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path='/' component={VideoList} />
          <Route exact path='/new-video' component={VideoForm} />
          <Route exact path='/update/:id' component={VideoForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
