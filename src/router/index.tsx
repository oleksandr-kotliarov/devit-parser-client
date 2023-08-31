import Admin from '@/components/pages/Admin';
import Home from '@/components/pages/Home';
import Login from '@/components/pages/Login';
import Registration from '@/components/pages/Registration';
import { Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default Router;
