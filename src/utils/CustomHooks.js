import {
  // useRef,
  useState,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";

export function useMedia(queries, values, defaultValue) {
  const match = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] || defaultValue;
  const [columns, set] = useState(match);
  const [windowWidth, setWidth] = useState(window.innerWidth - 30);
  useEffect(() => {
    const handler = () => {
      set(match);
      setWidth(window.innerWidth - 30);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return {
    columns,
    windowWidth,
  };
}
