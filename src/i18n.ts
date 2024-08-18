type ruOrEn = {
  [key: string]: {
    [key: string]: string;
  };
};

const ruOrEn: ruOrEn = {
  en: {
    aries: 'Aries',
    taurus: 'Taurus',
    gemini: 'Gemini',
    cancer: 'Cancer',
    leo: 'Leo',
    virgo: 'Virgo',
    libra: 'Libra',
    scorpio: 'Scorpio',
    sagittarius: 'Sagittarius',
    capricorn: 'Capricorn',
    aquarius: 'Aquarius',
    pisces: 'Pisces',
    period: 'Period',
    back: 'Back',
    ariesPeriod: 'March 21 - April 19',
    taurusPeriod: 'April 20 - May 20',
    geminiPeriod: 'May 21 - June 20',
    cancerPeriod: 'June 21 - July 22',
    leoPeriod: 'July 23 - August 22',
    virgoPeriod: 'August 23 - September 22',
    libraPeriod: 'September 23 - October 22',
    scorpioPeriod: 'October 23 - November 21',
    sagittariusPeriod: 'November 22 - December 21',
    capricornPeriod: 'December 22 - January 19',
    aquariusPeriod: 'January 20 - February 18',
    piscesPeriod: 'February 19 - March 20',
  },
  ru: {
    aries: 'Овен',
    taurus: 'Телец',
    gemini: 'Близнецы',
    cancer: 'Рак',
    leo: 'Лев',
    virgo: 'Дева',
    libra: 'Весы',
    scorpio: 'Скорпион',
    sagittarius: 'Стрелец',
    capricorn: 'Козерог',
    aquarius: 'Водолей',
    pisces: 'Рыбы',
    period: 'Период',
    back: 'Назад',
    ariesPeriod: '21 марта - 19 апреля',
    taurusPeriod: '20 апреля - 20 мая',
    geminiPeriod: '21 мая - 20 июня',
    cancerPeriod: '21 июня - 22 июля',
    leoPeriod: '23 июля - 22 августа',
    virgoPeriod: '23 августа - 22 сентября',
    libraPeriod: '23 сентября - 22 октября',
    scorpioPeriod: '23 октября - 21 ноября',
    sagittariusPeriod: '22 ноября - 21 декабря',
    capricornPeriod: '22 декабря - 19 января',
    aquariusPeriod: '20 января - 18 февраля',
    piscesPeriod: '19 февраля - 20 марта',
  },
};

export const translate = (lang: string, key: string): string => {
  return ruOrEn[lang][key];
};
