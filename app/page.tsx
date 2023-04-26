import { Aside, Footer, PageContainer } from "@/components";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <div className="bg-zinc-950 w-64">
          <Aside />
        </div>

        <div className="flex-1">
          <PageContainer>page</PageContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
