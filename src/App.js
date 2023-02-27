import './App.scss';

import Header from './components/Header';
// import Main from './components/Main';

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Home } from './components/pages/Home'
// import { TestPages } from './components/pages/TestPages'
import { NotFound } from './components/pages/NotFound'
import { Movie } from './components/pages/Movie'
import {Layout} from './components/Layout'


const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Movie/:id' element={<Movie />} />
      <Route path='*' element={<NotFound />} />
  </Route>
  </>
))


export default function App() {
  
  return (
    <>
      <RouterProvider router={router} />
      {/* <Main /> */}
    </>
  );
}
