import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes';

function App() {
  return (
    <div className="mx-12 my-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
