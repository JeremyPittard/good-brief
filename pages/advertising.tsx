import React from "react";
import AdvertisingForm from "../components/AdvertisingForm";
import PageHeader from "../components/PageHeader";

const Advertising = () => {
  return (
    <>
      <PageHeader />
      <main className="content-container max-w-md mx-auto">
        <div className="className= px-4 mt-6 text-xl">
          <h2 className="underline mb-6 text-3xl">Advertising</h2>
          <p>
            {`Good Brief is the perfect option for promoting your brand to a community of positive-minded individuals who are always on the lookout for the latest feel-good news stories. As a new and growing platform, we're excited to collaborate with you and create content that resonates with our readers while highlighting your brand in a unique and meaningful way. If we are up your alley, fill out the form below!
            `}
          </p>
          <div className="mt-6">
            <AdvertisingForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Advertising;
