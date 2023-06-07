export interface role  {
  name: 'ADMIN' | 'SUPERADMIN' | 'VENDEDOR' | null
}

export interface UserInfo {
  id: number;
  firtsName: string;
  lastName: string;
  email: string;
  phone: number;
  password: string;
  role: role;
}

export interface UserLogin {
  email: string;
  password: string;
}