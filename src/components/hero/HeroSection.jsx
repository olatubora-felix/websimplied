import HeroForm from "./HeroForm";

const HeroSection = () => {
  return (
    <section className="bg-blue-500 px-5 py-6 text-white text-center">
      <div className="wrapper content space-y-4 w-full">
        <h2 className="text-[2.188rem]">Stay Up To Date</h2>

        <p className="font-light text-xl opacity-80">
          Join my newsletter for up to date information on everything Web Dev
          Simplified as well as free tips and tutorials.
        </p>
        <HeroForm />
        <p className="font-light text-xl opacity-80">
          You are signing up to receive emails from Web Dev Simplified
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
