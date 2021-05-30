import { UserType } from './user';

export type PositionType = Array<Required<Pick<UserType, 'position'>> & { quantity: number }>;

export interface ProjectType {
  name: string;
  author: string;
  description: string;
  positions?: PositionType;
}
