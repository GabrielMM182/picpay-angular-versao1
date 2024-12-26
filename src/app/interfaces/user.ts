export enum UserType {
  COMMON = 'COMMON',
  MERCHANT = 'MERCHANT',
}

export interface UserDTO {
  id: number;
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  balance: number;
  type: UserType;
}
