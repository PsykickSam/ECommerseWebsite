export interface IUser {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  permissionFlags: number;
}

export interface IUserExtended extends IUser {
  password: string;
}
