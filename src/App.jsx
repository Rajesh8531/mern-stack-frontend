import Header from './Components/Header';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Index ,{loader as FeedLoader}from './Components/Index';
import LoginPage from './Components/Authentication/LoginPage';
import Register,{loader as RegisterLoader} from './Components/Authentication/Register';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/main' element={<Header />} >
        <Route index element={<Index />} loader={FeedLoader} />
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
