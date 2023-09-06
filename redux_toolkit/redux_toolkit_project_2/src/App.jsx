import './App.css';
import Create from './components/Create';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootNavigation from './components/RootNavigation';
import ReadUsers from './components/ReadUsers';

const route = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootNavigation />}>
    <Route index element={<Create />}/>
    <Route path='/read' element={<ReadUsers />}/>
  </Route>
))

function App() {
  return (
    <div className='App'>
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
