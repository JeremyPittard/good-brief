import { useForm, ValidationError } from "@formspree/react";

const AdvertisingForm = () => {
  const [state, handleSubmit] = useForm("xjvdoqja");
  if (state.succeeded) {
    return <p>Thanks! we will be in touch. </p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col py-6">
      <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="border border-black rounded-md block p-3"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          type="text"
          name="companyName"
          className="border border-black rounded-md block p-3"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="Message">
          Why would Good Brief be a good fit for your brand?
        </label>

        <textarea
          id="message"
          name="message"
          className="border border-black rounded-md block p-3"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-brand-pink text-white rounded-md mt-4 p-3"
      >
        Submit
      </button>
    </form>
  );
};
export default AdvertisingForm;
