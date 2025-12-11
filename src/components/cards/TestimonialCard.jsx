const TestimonialCard = ({
  title,
  description,
  imageLink,
  name,
  designation,
}) => {
  return (
    <div className="rounded-2xl bg-[#1A1A1A] relative flex flex-col justify-between gap-10">
      <div className="p-10 pb-0">
        <h4 className="mb-6 text-[1.5rem]!">{title}</h4>
        <p>{description}</p>
      </div>
      <div className="px-10 py-7.5 bg-[#1F1F1F] rounded-b-2xl">
        <div className="f-start gap-[0.938rem]">
          <img
            className="rounded-full w-15 h-15 object-cover"
            src={imageLink}
            alt={name}
          />
          <div>
            <h6 className="mb-0.5">{name}</h6>
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
