/* eslint-disable react/prop-types */

export const PaidCourses = (props) => {
  console.log(props);
  return (
    <section className="flex md:flex-row flex-col gap-6 items-center py-5">
      <div className="md:w-[606.6px] w-full">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="flex-1 space-y-3">
        <h6 className="text-primary text-lg">{`$${props.price}`}</h6>
        <h2 className="text-dark-100 text-[1.688rem] font-bold">
          {props.title}
        </h2>
        <p className="font-openSans text-lg text-dark-100 font-light">
          {props.subTitle}
        </p>
        <button className="btn">View course</button>
      </div>
    </section>
  );
};
