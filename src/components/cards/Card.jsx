import Button from "../ui/Button";

const Card = ({
  title,
  iconLink,
  link,
  description,
  pricetext,
  category,
  time,
  btnText,
  isWorksCard,
  isServiceCard,
}) => {
  return (
    <div
      className={`${
        isWorksCard ? "px-10 py-15" : "myContainer py-23.5"
      } rounded-[0.875rem] bg-[#1A1A1A]`}
    >
      <div className="f-bw mb-12.5">
        <div className="w-fit f-center gap-3.5">
          <div className="f-center w-16.5 h-16.5 rounded-xl bg-[#1F1F1F] border border-[#333333]">
            <img className="w-9 h-9" src={iconLink} alt={`${title} Icon`} />
          </div>
          <h3 className={`${isWorksCard ? "text-2xl!" : ""}`}>{title}</h3>
        </div>
        <Button
          link={link}
          text={btnText}
          style="global"
          arrowClassName="border border-[#545454] group-hover:bg-[#CE7D63] group-hover:border-[#CE7D63]"
          isSection
        />
      </div>
      {isWorksCard && (
        <ul className="flex flex-col gap-3 mb-10">
          <li className="w-fit py-2.5 px-4 bg-[#0f0f0f] rounded-[2.813rem] text-xl text-[#E6E6E6] font-primary">
            Category: {category}
          </li>
          <li className="w-fit py-2.5 px-4 bg-[#0f0f0f] rounded-[2.813rem] text-xl text-[#E6E6E6] font-primary">
            Time Taken: {time}
          </li>
        </ul>
      )}
      <p>{description}</p>
      {isServiceCard && <h3 className="mt-8">{pricetext}</h3>}
    </div>
  );
};

export default Card;
