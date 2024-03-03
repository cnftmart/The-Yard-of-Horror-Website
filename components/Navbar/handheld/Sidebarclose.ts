import { useEffect } from "react";

function useOutsideClick(ref: any, setOpen: any) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
}
export default useOutsideClick;
