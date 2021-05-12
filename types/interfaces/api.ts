import { UserType } from './user';

export type RegisterReqBody = Pick<UserType, 'username' | 'password' | 'email' | 'position'> & {
  reCaptchaResponse: string;
};

export type LoginReqBody = Pick<UserType, 'password'> &
  Partial<Pick<UserType, 'username' | 'email'>>;

export type RegisterResponse = null;

export interface LoginResponse {
  token: string;
}
