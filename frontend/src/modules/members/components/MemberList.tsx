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

function MemberRow() {
  return (
    <div className="flex bg-slate-100 text-slate-500 text-center font-light px-4 py-4">
      <div className="w-1/4">John</div>
      <div className="w-1/4">Doe</div>
      <div className="w-1/4">123 Main Street</div>
      <div className="w-1/4">333-22-4444</div>
    </div>
  );
}

export function MemberList() {
  return (
    <div className="col-span-8 rounded-md overflow-hidden">
      <Headers />
      <MemberRow />
    </div>
  );
}
