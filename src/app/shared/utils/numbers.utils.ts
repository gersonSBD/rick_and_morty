export const arrayNumberByRange = (
  start: number,
  stop: number,
  step: number
): number[] =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
  );
