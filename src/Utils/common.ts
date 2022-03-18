export const notNull = (v:any) => v !== null;
export const noop = () => { console.log('No Op'); };
export const getRandomId = () => {
  console.log('iD');
  return Math.floor(Math.random() * 100000);
};
