import Button from "./Button";

const CounterSec = () => {
  const heroCounters = [
    { id: 1, title: "Clients", counter: "200+" },
    { id: 2, title: "Projects", counter: "280+" },
    { id: 3, title: "Happy Clients", counter: "100%" },
    { id: 4, title: "Followers", counter: "420K" },
    { id: 5, title: "Years of experience", counter: "10+" },
  ];
  return (
    <div className="inner-padded mt-5">
      <div className="grid grid-cols-6 gap-5">
        {heroCounters.map((counter) => (
          <div
            key={counter.id}
            className="px-5 py-7.5 rounded-[0.875rem] bg-[#1A1A1A]"
          >
            <p className="uppercase mb-1 text-center">{counter.title}</p>
            <span className="text-[#DA9E8B] font-semibold text-[3.75rem] text-center block font-primary">
              {counter.counter}
            </span>
          </div>
        ))}
        <div className="px-5 py-7.5 rounded-[0.875rem] bg-[#1A1A1A] f-center">
          <Button
            link="#"
            text="Know More"
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
