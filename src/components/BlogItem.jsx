/* eslint-disable react/prop-types */
export const BlogItem = ({ post }) => {
  const { image, title, subtitle } = post;
  return (
    <section className="bg-white flex gap-8 items-center md:flex-row flex-col">
      <img src={image} alt={title} className="max-w-[455px] w-full" />
      <div className="md:space-y-6 space-y-4">
        <h2 className="text-3xl leading-[54px]">{title}</h2>
        <p className="text-dark-100 text-xl font-light">{subtitle}</p>
        <button className="btn w-[170.82px]">View course</button>
      </div>
    </section>
  );
};
