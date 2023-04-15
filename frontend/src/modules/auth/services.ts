import { api } from "../../config";
import { Auth, AuthResponse } from "./types";

export async function createAuth(auth: Auth) {
  const request = await api.post<AuthResponse>("/auth", auth);
  const response = request.data;

  return response;
}
