export const debounce = (func: (e: string) => void, timeout: number) => {
  let tid: NodeJS.Timeout | undefined;

  return (...args: any) => {
    if (tid) {
      clearTimeout(tid);
    }

    tid = setTimeout(() => {
      func.apply(null, args);
    }, timeout);
  };
};
