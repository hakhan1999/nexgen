const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#1A1A1A] z-50">
      <div className="loader animate-spin border-4 border-t-[#CE7D63] border-b-[#CE7D63] border-l-[##0F0F0F] border-r-[##0F0F0F] rounded-full w-16 h-16"></div>
    </div>
  );
};

export default Preloader;
