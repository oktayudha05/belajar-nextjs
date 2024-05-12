import Header from "./header";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold">Hello World</h1>
      </main>
    </>
  );
}
