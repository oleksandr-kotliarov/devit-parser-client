import { Breadcrumbs } from '@mui/material';
import { useLocation } from 'react-router-dom';
import AdminNavigationLink from '../AdminNavigationLink';
import { adminNavigationLinks } from '@/utils/adminNavigationLinks';

function AdminNavigation() {
  const { pathname } = useLocation();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {adminNavigationLinks.map(({ to, text }) => (
        <AdminNavigationLink
          location={pathname}
          text={text}
          to={to}
          key={text}
        />
      ))}
    </Breadcrumbs>
  );
}

export default AdminNavigation;
