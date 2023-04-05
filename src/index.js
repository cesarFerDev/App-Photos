import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { HashRouter , Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Collection} from './pages/Collection';
import {MyPhotos} from './pages/MyPhotos';
import {PhotoInfo} from './pages/PhotoInfo';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Collection/>}/> {/*Página principal de carga y búsqueda de fotos*/}
          <Route path='/my-photos' element={<MyPhotos/>}/> {/*Página de fotos favoritas*/}
          <Route path='/photo-info' element={<PhotoInfo/>}/> {/*No he sabido hacer ruta hija y dinámica de my-photos para el modal y he creado una nueva*/}
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
