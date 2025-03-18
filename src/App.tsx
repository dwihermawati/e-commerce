import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { ShopZone } from './pages/ShopZone';

function App() {
  return (
    <ToastProvider>
      <Router>
        <ShopZone />
      </Router>
    </ToastProvider>
  );
}

export default App;
