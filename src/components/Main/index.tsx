export default function Main({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="container">{children}</main>;
}
