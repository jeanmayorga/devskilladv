import { Container } from "@/components";
import { MemberForm, MemberList } from "@/modules";

export function MembersPage() {
  return (
    <Container>
      <div className="grid grid-cols-12 gap-4">
        <MemberForm />
        <MemberList />
      </div>
    </Container>
  );
}
