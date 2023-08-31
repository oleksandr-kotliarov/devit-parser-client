import Router from '@/router';
import Header from '../layout/Header';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

function App() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
