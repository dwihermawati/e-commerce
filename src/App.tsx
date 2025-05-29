import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { ShopZone } from './pages/ShopZone';
import { ScrollToHash } from './components/ScrollToHash';

function App() {
  return (
    <ToastProvider>
      <Router>
        <ScrollToHash />
        <ShopZone />
      </Router>
    </ToastProvider>
  );
}

export default App;
