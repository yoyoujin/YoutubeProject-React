import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

register('ko', koLocale);

const formatAgo = (date, lang = 'en_US') => {
  return format(date, lang);
};

export default formatAgo;
