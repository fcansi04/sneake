import Button from "../Componets/Button";

const Subscribe = () => {
  return (
    <div
      className="flex mx-20 items-center justify-between max-lg:flex-col max-lg:gap-10 "
      id="contact-us"
    >
      <div>
        <h6 className="font-bold text-3xl w-[20rem]">
          Sign Up for <span className="text-coral-red">Updates</span> &
          Newsletter
        </h6>
      </div>
      <form className="relative ">
        <input
          className="py-4 px-6 max-lg:w-[25rem] lg:w-[34rem] border border-slate-gray rounded-full   rounded-2 outline-none text-[17px]"
          type="text"
          placeholder="subscribe@nike.com"
        />
        <Button label="Sign Up" />
      </form>
    </div>
  );
};

export default Subscribe;
