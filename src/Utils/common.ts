import { format } from 'date-fns';

export const notNull = (v:any) => v !== null;
export const noop = () => { console.log('No Op'); };
export const getRandomId = () => Math.floor(Math.random() * 100000);
export const formatDate = (date:string) => format(new Date(date), 'dd-MM-yyyy');
export const formatDateValue = (date?:string) => format(date ? new Date(date) : new Date(), 'yyyy-MM-dd');
