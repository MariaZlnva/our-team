import { ReactNode } from 'react';

export interface IChildren {
  children?: ReactNode;
}

export interface ITeamItem {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export type ITeamList = {
  teamList: ITeamItem[];
};

export interface ITeamListAction {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ITeamItem[];
}

export interface IMemberAction {
  data: IMember;
}
export interface IMember {
  member: ITeamItem;
}

export interface IInput {
  userName?: string;
  email: string;
  password: string;
  retryPassword?: string;
}

export interface IRegister {
  id: string;
  token: string;
}

export interface IToken {
  token: string;
}

export interface IUserState {
  id: string;
  token: string;
  isLoggedIn: boolean;
}
