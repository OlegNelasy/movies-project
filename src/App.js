import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Movie } from './pages/Movie/Movie'
import { Favorites } from './pages/Favorites/Favorites'
import { Layout } from './Layout'


const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Movie/:id' element={<Movie />} />
      <Route path='Favorites' element={<Favorites />} />
      <Route path='*' element={<NotFound />} />
  </Route>
  </>
))


export default function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
