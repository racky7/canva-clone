import Navbar from "./_components/nav-bar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="h-full flex-1">{children}</div>
      </div>
    </>
  );
}
