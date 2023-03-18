import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const PageHeader = () => {
  return (
    <>
      <Head>
        <title>
          Good Brief | bite sized pieces of good news, straight to your email
        </title>
        <meta name="description" content="Good Brief" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-brand-teal p-4 mx-auto">
        <Link href={"/"}>
          <Image
            src="/img/small-square.svg"
            height={250}
            width={250}
            alt="Good Brief"
            className="mx-auto block"
          />
          <h1 className="font-display text-5xl text-center text-brand-pink">
            Good Brief
          </h1>
        </Link>
      </header>
    </>
  );
};

export default PageHeader;
