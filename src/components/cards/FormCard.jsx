import Link from "next/link";

const FormCard = () => {
  return (
    <div className="p-15 rounded-2xl bg-[#1A1A1A]">
      <h4 className="pb-12.5 border-b border-[#262626] text-[1.5rem]!">
        Ask your question
      </h4>
      <form className="mt-12.5 gap-5 flex flex-col">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="uppercase font-primary text-[#F3DFD8] mb-2.5"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-6 rounded-[0.625rem] bg-[#0F0F0F] text-[#F3DFD8] text-lg font-primary placeholder:text-[#676665]"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="uppercase font-primary text-[#F3DFD8] mb-2.5"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-6 rounded-[0.625rem] bg-[#0F0F0F] text-[#F3DFD8] text-lg font-primary placeholder:text-[#676665]"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="uppercase font-primary text-[#F3DFD8] mb-2.5"
          >
            Your Question
          </label>
          <textarea
            type="text"
            placeholder="Enter your question here ....."
            className="p-6 rounded-[0.625rem] bg-[#0F0F0F] text-[#F3DFD8] text-lg font-primary placeholder:text-[#676665] h-43"
          />
        </div>
        <button>
          <Link
            className="text-lg uppercase text-[#0F0F0F] bg-[#CE7D63] rounded-xl w-full block py-4.5 font-medium hover:bg-white trns mt-7.5"
            href="#"
          >
            Send Your Message
          </Link>
        </button>
      </form>
    </div>
  );
};

export default FormCard;
