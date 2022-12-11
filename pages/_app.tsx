import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Luckiest_Guy, Atkinson_Hyperlegible } from "@next/font/google";

const luckyGuy = Luckiest_Guy({ weight: "400", subsets: ["latin"] });
const atkinson = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --atkinson-font: ${atkinson.style.fontFamily};
            --lucky-font: ${luckyGuy.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} className={atkinson.className} />
    </>
  );
}
