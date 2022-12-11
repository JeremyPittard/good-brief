import Image from "next/image";

const Intro = () => {
  return (
    <div className="content-container max-w-sm mx-auto">
      <Image
        src="/img/goodbrief-square.png"
        height={350}
        width={350}
        alt="Good Brief"
        className="mx-auto block"
      />
      <p className="p-2">
        Introducing Good Brief - a weekly newsletter filled with positive and
        uplifting news stories from the past week! In a world that can sometimes
        feel overwhelming, it's important to take a step back and focus on the
        good. Let Good Brief be your souzrce for all the heartwarming,
        inspiring, and feel-good news in bite-sized portions. Sign up now to
        start your week off on the right foot. Launching January 2023. #goodnews
        #newsletter #positivit
      </p>
    </div>
  );
};

export default Intro;
