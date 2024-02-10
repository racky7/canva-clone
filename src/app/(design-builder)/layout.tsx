export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen">
        <div className="h-full flex-1">{children}</div>
      </div>
    </>
  );
}
