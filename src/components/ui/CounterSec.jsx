import Button from "./Button";

const CounterSec = ({ data }) => {
  if (!data) return null;
  return (
    <div className="inner-padded mt-5">
      <div className="grid grid-cols-6 gap-5">
        {data?.hero_boxes?.map((counter, index) => (
          <div
            key={index}
            className="px-5 py-7.5 rounded-[0.875rem] bg-[#1A1A1A]"
          >
            <p className="uppercase mb-1 text-center">{counter.title}</p>
            <span className="text-[#DA9E8B] font-semibold text-[3.75rem] text-center block font-primary">
              {counter.description}
            </span>
          </div>
        ))}
        <div className="px-5 py-7.5 rounded-[0.875rem] bg-[#1A1A1A] f-center">
          <Button
            link={data.boxes_button.url}
            text={data.boxes_button.title}
            style="global"
            arrowClassName="border border-[#545454] group-hover:bg-[#CE7D63] group-hover:border-[#CE7D63]"
            isSection
          />
        </div>
      </div>
    </div>
  );
};
export default CounterSec;
