import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Collection} from './pages/Collection';
import {MyPhotos} from './pages/MyPhotos';
import {PhotoInfo} from './pages/PhotoInfo';

const container = document.getElementById('root');
const root = createRoot(container);

//4 páginas diferentes en lugar de props

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Collection/>}/> 
          <Route path='/my-photos' element={<MyPhotos/>}/>
          <Route path='/photo-info' element={<PhotoInfo/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
