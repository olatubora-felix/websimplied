/* eslint-disable react/prop-types */
export const CustomInput = (props) => {
  const { name, placeholder, type, required } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className="h-[55px] md:w-[253px] w-full py-3 px-5 outline-none rounded"
    />
  );
};
