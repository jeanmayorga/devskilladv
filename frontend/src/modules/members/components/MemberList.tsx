import { useEffect } from "react";
import { useMembersStore } from "../store";
import { Member } from "../types";
import { getMembers } from "../services";
import { useMembers } from "../hooks";

function Headers() {
  return (
    <div className="flex bg-slate-300 text-slate-500 text-center font-light px-4 py-4">
      <div className="w-1/4">First Name</div>
      <div className="w-1/4">Last Name</div>
      <div className="w-1/4">Address</div>
      <div className="w-1/4">SSN</div>
    </div>
  );
}

function MemberRow(props: { member: Member }) {
  return (
    <div className="flex bg-slate-100 text-slate-500 text-center font-light px-4 py-4">
      <div className="w-1/4">{props.member.firstName}</div>
      <div className="w-1/4">{props.member.lastName}</div>
      <div className="w-1/4">{props.member.address}</div>
      <div className="w-1/4">{props.member.ssn}</div>
    </div>
  );
}
function MemberRowSkeleton() {
  return (
    <div className="flex bg-slate-100 text-slate-500 text-center font-light px-4 py-4">
      <div className="w-1/4">
        <div className="inline-flex bg-slate-300 h-[12px] w-[100px]" />
      </div>
      <div className="w-1/4">
        <div className="inline-flex bg-slate-300 h-[12px] w-[100px]" />
      </div>
      <div className="w-1/4">
        <div className="inline-flex bg-slate-300 h-[12px] w-[180px]" />
      </div>
      <div className="w-1/4">
        <div className="inline-flex bg-slate-300 h-[12px] w-[100px]" />
      </div>
    </div>
  );
}

export function MemberList() {
  const { members, isLoading } = useMembers();

  return (
    <div className="col-span-8 rounded-md overflow-hidden">
      <Headers />
      {isLoading &&
        Array.from(Array(5).keys()).map((item) => (
          <MemberRowSkeleton key={item} />
        ))}
      {members.map((member) => (
        <MemberRow member={member} />
      ))}
    </div>
  );
}
