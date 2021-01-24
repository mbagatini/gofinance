import { format, parseISO } from 'date-fns';

const formatDateBR = (date: Date): string => {
  const dateISO = parseISO(date.toString());
  return format(dateISO, 'dd/MM/yyyy');
};

export default formatDateBR;
