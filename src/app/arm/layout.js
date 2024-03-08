import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <main className="max-w-screen-2xl m-auto">
      <Nav />
      {children}
    </main>
  );
}
