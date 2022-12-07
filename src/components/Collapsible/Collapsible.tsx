import { useState, useCallback } from "preact/hooks";

function Collapsible({ children, title }: { children: any; title: string }) {
  const [open, setOpen] = useState(true);
  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, [open]);

  return (
    <>
      <div
        class="relative flex items-center justify-between px-8 cursor-pointer h-[70px] bg-slate-100 border border-slate-200"
        onClick={handleClick}
      >
        <h1 class="text-lg text-slate-800">{title}</h1>
      </div>
      {open ? (
        <div class="border border-slate-20 border-t-0 p-8">{children}</div>
      ) : null}
    </>
  );
}

export default Collapsible;
