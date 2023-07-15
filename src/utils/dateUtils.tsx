import { format } from 'date-fns';

export const formatDate = (date: string, formatType?: 'short' | 'medium' | 'long'): string => {
  let formatString: string;
  switch (formatType) {
    case 'short':
      formatString = 'MM/dd/yyyy';
      break;
    case 'medium':
      formatString = 'MMMM dd, yyyy';
      break;
    case 'long':
      formatString = 'EEEE, MMMM dd, yyyy';
      break;
    default:
      formatString = 'MMMM dd, yyyy';
      break;
  }

  return format(new Date(date), formatString);
};
