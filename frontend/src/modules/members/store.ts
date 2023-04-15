import { create } from "zustand";

import { Member } from "@/modules";

interface BearState {
  members: Member[];
  setMembers: (member: Member[]) => void;
}

export const useMembersStore = create<BearState>((set) => ({
  members: [],
  setMembers: (members: Member[]) => set(() => ({ members })),
}));
