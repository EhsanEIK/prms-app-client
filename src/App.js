import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="mx-12 my-5">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
