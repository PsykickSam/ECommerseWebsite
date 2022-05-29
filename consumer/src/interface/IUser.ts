export interface IUser {
  _id: string;
  username: string;
  email: string;
  isAdmin: string;
  token: string;
  permissionFlags: number;
}
