import { Link } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
  location: string;
}

function AdminNavigationLink({ to, location, text }: Props) {
  const path = '/admin' + to;

  return (
    <Link
      color="inherit"
      to={path}
      style={{ fontWeight: location === path ? 'bold' : 'inherit' }}
    >
      {text}
    </Link>
  );
}

export default AdminNavigationLink;
