import logo from './logo.svg';
import './App.css';
import './apercu.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home_page';
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutPage from './pages/layout_page';
import { Children } from 'react';
import StoriesPage from './pages/stories_page';
import ReadStory from './pages/read_page';

function App() {
  const routes = createBrowserRouter([{
    path:"/",
    
    element:<LayoutPage/>,
    children:[
      {
       path:"/",
       element:<HomePage/>
    },
    {
      path:'/stories',
      element:<StoriesPage/>
    },
    {
      path:'/read/:id',
      element:<ReadStory/>
    }
  ]

  }])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
