//@ts-nocheck
import {
  // useRef,
  useState,
  useEffect,
} from "react";

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
  });
  return {
    columns,
    windowWidth,
  };
}

const binarySearch = (arr, tar) => {
  let l = 0;
  let r = arr.length;
  while (l < r) {
    let m = ~~(l + (r - l) / 2);
    if (arr[m] === tar) return m;
    if (tar > arr[m]) l = m + 1;
    else r = m;
  }
  return r;
};

const widthToCol = (w, bkps, cols) => {
  console.log(binarySearch(bkps, w));
  console.log(cols[binarySearch(bkps, w)]);
  return cols[binarySearch(bkps, w)];
};

export function useClientWidth(divRef, queries, values, defaultValue, margin) {
  const getWidth = () =>
    divRef.current !== null
      ? divRef.current.clientWidth
      : window.innerWidth * (1 - margin);

  const match = () => widthToCol(getWidth(), queries, values) || defaultValue;
  const [columns, set] = useState(match);
  const [windowWidth, setWidth] = useState(getWidth());
  useEffect(() => {
    const handler = () => {
      divRef.current && console.log(divRef.current.clientWidth);
      set(match);
      setWidth(getWidth());
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return {
    columns,
    windowWidth,
  };
}
