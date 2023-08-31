import { useAppSelector } from '@/app/hooks';
import { useAuth } from '@/hooks/useAuth';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const isAuth = useAppSelector((state) => state.auth._isAuth);
  const { handleLogout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={isAuth ? '/admin' : '/'}>Articles</Link>
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            {isAuth ? 'Logout' : <Link to={'/login'}>Login</Link>}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
