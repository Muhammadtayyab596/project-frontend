export const dateFormatter = (inputDate: string) => {
  const yearFormat = {
    year: "numeric",
    month: "short",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;

  return new Intl.DateTimeFormat("en-US", yearFormat).format(
    new Date(inputDate)
  );
};
