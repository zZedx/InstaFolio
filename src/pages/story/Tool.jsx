export function Tool({ children }) {
  return (
    <span className="from-[rgb(236, 72, 153)] inline-block rounded border-2 border-red-800 bg-gradient-to-tr to-[#E4F9F5] px-2 py-0.5 text-center text-xs font-bold uppercase text-white md:text-sm">
      {children}
    </span>
  );
}
