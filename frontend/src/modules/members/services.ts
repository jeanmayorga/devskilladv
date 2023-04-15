import { api } from "@/config";
import { Member } from "./types";

export async function createMember(member: Member) {
  const request = await api.post<Member>("/api/members", member);
  const response = request.data;

  return response;
}

export async function getMembers() {
  const request = await api.get<Member[]>("/api/members");
  const response = request.data;
  return response;
}
