import { useMutation, useQuery } from "@tanstack/react-query";
import { createMember, getMembers } from "./services";
import { useMembersStore } from "./store";
import { Member } from "./types";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { ApiError } from "@/types";
import { useAuthStore } from "../auth";

const TWO_MINUTES = 120000;

export function useMembers() {
  const { members, setMembers } = useMembersStore();
  const { token, clearToken } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ["members"],
    queryFn: () => getMembers(),
    refetchInterval: TWO_MINUTES,
    retry: 1,
    enabled: Boolean(token),
    onSuccess(data) {
      setMembers(data);
    },
    onError(err: AxiosError<ApiError>) {
      if (err.response?.data.message) {
        clearToken();
        toast.error(err.response?.data.message);
      }
    },
  });

  return {
    isLoading,
    members,
  };
}

export function useCreateMembers() {
  const { members, setMembers } = useMembersStore();

  const { isLoading, mutateAsync } = useMutation({
    mutationKey: ["members"],
    mutationFn: (member: Member) => createMember(member),
    onSuccess(data) {
      setMembers([...members, data]);
      toast.success("Member created successfully");
    },
    onError(err: AxiosError<ApiError>) {
      if (err?.response?.data.message) {
        toast.error(err.response.data.message);
      }
    },
  });

  return {
    isLoading,
    createMember: mutateAsync,
  };
}
