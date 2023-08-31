import { LoginInput, RegistrationInput } from '@/types/auth';
import $api from '..';
import { AuthResponse } from '@/types/response/AuthResponse';
import { ENDPOINTS } from '@/utils/endpoints';

export class AuthController {
  static async login(input: LoginInput) {
    const res = await $api.post<AuthResponse>(ENDPOINTS.auth.login, input);
    this.setToken(res.data.accessToken);
    return res;
  }

  static async registration(input: RegistrationInput) {
    const res = await $api.post<AuthResponse>(
      ENDPOINTS.auth.registration,
      input
    );
    this.setToken(res.data.accessToken);
    return res;
  }

  static async logout(): Promise<void> {
    await $api.post(ENDPOINTS.auth.logout);
    localStorage.removeItem('token');
  }

  static async checkAuth() {
    const res = await $api.post<AuthResponse>(ENDPOINTS.auth.refresh);
    this.setToken(res.data.accessToken);
    return res;
  }

  private static setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
