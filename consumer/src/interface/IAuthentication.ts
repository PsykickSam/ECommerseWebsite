import { IResponse } from 'interface/IResponse';

export interface ILoginResponse extends IResponse {};

export interface ILoginRequest {
  username: string;
  password: string;
};

export interface IRegisterResponse extends IResponse {};

export interface IRegisterRequest {
  username: string;
  password: string;
  email: string;
};
