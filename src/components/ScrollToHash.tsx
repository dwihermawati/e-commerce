import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      // Scroll with slight delay to ensure element is rendered
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location]);

  return null;
};
