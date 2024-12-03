import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/routes';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Providers/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
