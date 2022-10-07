export const uuid = () => {
  const randomNum = Math.floor(Math.random() * 100000000000000000000);
  return randomNum.toString();
};
