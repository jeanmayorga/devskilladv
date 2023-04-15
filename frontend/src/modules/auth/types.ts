export interface Auth {
  username: string;
  password: string;
}

export interface AuthResponse {
  iat: number;
  expo: number;
  token: string;
}
