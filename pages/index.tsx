import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import Intro from "../components/Intro";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <PageHeader />
      <main className="content-container max-w-md mx-auto">
        <Intro />
        <Subscribe />
      </main>
    </>
  );
}
