import { CustomInput } from "./CustomInput";

const HeroForm = () => {
  return (
    <form className="flex items-center gap-3 justify-center md:flex-row flex-col">
      <div className="flex items-center gap-3">
        <CustomInput
          type="text"
          placeholder="Name"
          name="name"
          required={true}
        />
        <CustomInput
          type="text"
          placeholder="Email"
          name="email"
          required={true}
        />
      </div>
      <button className="btn h-[55px] md:w-[135.24px] w-full">Join Now</button>
    </form>
  );
};

export default HeroForm;
