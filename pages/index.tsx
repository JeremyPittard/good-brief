import Intro from "../components/Intro";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <main className="content-container max-w-md mx-auto">
        <Intro />
        <Subscribe />
      </main>
    </>
  );
}
