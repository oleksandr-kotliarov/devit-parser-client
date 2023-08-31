import { useAppDispatch } from '@/app/hooks';
import { login, logout } from '@/features/auth/authSlice';
import { AuthController } from '@/http/auth';
import { LoginInput, RegistrationInput } from '@/types/auth';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const loginLocal = () => {
    dispatch(login());
    navigator('/admin');
  };

  const handleLogin = async (input: LoginInput) => {
    const res = await AuthController.login(input);
    loginLocal();
    return res;
  };

  const handleRegistration = async (input: RegistrationInput) => {
    const res = await AuthController.registration(input);
    loginLocal();
    return res;
  };

  const handleLogout = async () => {
    try {
      await AuthController.logout();
      dispatch(logout());
      navigator('/login');
    } catch (error) {
      return error;
    }
  };

  const checkAuth = async () => {
    try {
      await AuthController.checkAuth();
      dispatch(login());
      navigator('/admin');
    } catch (error) {
      navigator('/');
    }
  };

  return { handleLogin, handleLogout, checkAuth, handleRegistration };
};
