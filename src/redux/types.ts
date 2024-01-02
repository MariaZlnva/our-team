import { ReactNode } from "react";

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
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: ITeamItem[]
}