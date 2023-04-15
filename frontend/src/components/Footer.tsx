import { Container } from "./Container";

export default function Footer() {
  return (
    <footer className=" py-4 text-slate-400 mt-8">
      <Container className="flex justify-between">
        <p>copyright</p>
        <p>all rights reserved</p>
      </Container>
    </footer>
  );
}
