export const findObjInArrByKey = (
  arr: { [key: string]: any }[],
  value: string | number,
  key = "id"
) => {
  return arr.find((item) => item[key] === value);
};
