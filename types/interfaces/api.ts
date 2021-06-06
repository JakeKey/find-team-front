import { UserPositions } from 'types/enums';
import { ProjectType } from './project';
import { UserType } from './user';

type ReCaptchaReq = {
  reCaptchaResponse: string;
};

export type RegisterReqBody = Pick<UserType, 'username' | 'password' | 'email' | 'position'> &
  ReCaptchaReq;

export type LoginReqBody = Pick<UserType, 'password'> &
  Partial<Pick<UserType, 'username' | 'email'>> &
  ReCaptchaReq;

export type RegisterResponseData = null;

export type LoginResponseData = { token: string };

export type VerifyCodeReqBody = { code: string } & ReCaptchaReq;

export type VerifyCodeResponseData = { token: string };

export type CreateProjectReqBody = Pick<ProjectType, 'name' | 'description' | 'positions'>;

export type GetProjectByIdParams = string | number;

export type GetProjectResponseData = ProjectType & {
  authorname: string;
};

export interface GetProjectsAllQueryParams {
  fromId?: number;
  page: number;
  limit: number;
  filter?: UserPositions;
}

export type GetAllProjectsResponseData = Pick<
  ProjectType,
  'id' | 'name' | 'description' | 'createdAt'
> & { authorname: string };

export type CreateProjectResponseData = null;
