export function Tool({ children }) {
  return (
    <span className="bg-gradient-to-tr to-[#E4F9F5] border-2 border-red-800 from-[rgb(236, 72, 153)] px-2 py-0.5 inline-block rounded uppercase font-bold text-xs md:text-sm min-w-[80px] text-center text-white">
      {children}
    </span>
  );
}
