interface ZodiacSign {
  id: string;
  period: string;
}
export const zodiacSigns: ZodiacSign[] = [
  { id: 'aries', period: 'March 21 - April 19' },
  { id: 'taurus', period: 'April 20 - May 20' },
  { id: 'gemini', period: 'May 21 - June 20' },
  { id: 'cancer', period: 'June 21 - July 22' },
  { id: 'leo', period: 'July 23 - August 22' },
  { id: 'virgo', period: 'August 23 - September 22' },
  { id: 'libra', period: 'September 23 - October 22' },
  { id: 'scorpio', period: 'October 23 - November 21' },
  { id: 'sagittarius', period: 'November 22 - December 21' },
  { id: 'capricorn', period: 'December 22 - January 19' },
  { id: 'aquarius', period: 'January 20 - February 18' },
  { id: 'pisces', period: 'February 19 - March 20' },
];
