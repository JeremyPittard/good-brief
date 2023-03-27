import Link from "next/link";

const ExternalLinks = () => {
  return (
    <ul className="navlist p-4 text-sm flex">
      <li className="p-2">
        <a
          href="https://www.facebook.com/ohgoodbrief"
          target={"_blank"}
          rel={"noreferrer"}
        >
          facebook
        </a>
      </li>
      <li className="p-2">
        <a
          href="https://www.instagram.com/ohgoodbrief/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          instagram
        </a>
      </li>
      <li className="p-2">
        <Link href={"/advertising"}>advertising</Link>
      </li>
      <li className="p-2">merch - coming soon</li>
    </ul>
  );
};

export default ExternalLinks;
