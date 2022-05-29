export interface CreateUserDto {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
  permissionFlags: number;
}
