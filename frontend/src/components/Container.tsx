import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export function Container({ children, className }: Props) {
  return (
    <div className={clsx(className, "container mx-auto px-4")}>{children}</div>
  );
}
