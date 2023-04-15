import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ApiError } from "@/types";
import { Auth, useAuthStore } from "../auth";
import { createAuth } from "./services";

export function useCreateAuth() {
  const { clearToken, setToken } = useAuthStore();

  const { isLoading, mutateAsync } = useMutation({
    mutationKey: ["auth"],
    mutationFn: (auth: Auth) => createAuth(auth),
    onSuccess(data) {
      setToken(data.token);
      toast.success("Authenticated.");
    },
    onError(error: AxiosError<ApiError>) {
      clearToken();
      if (error.response?.data.message) {
        toast.error(error.response.data.message);
      }
    },
  });

  return {
    isLoading,
    createAuth: mutateAsync,
  };
}
