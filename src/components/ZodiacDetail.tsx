import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { translate } from '../i18n';

interface ZodiacDetailProps {
  sign: string;
  onBack: () => void;
  language: string;
}

const ZodiacDetail: React.FC<ZodiacDetailProps> = ({ sign, onBack, language }) => {
  const [description, setDescription] = useState<string>('');

  useEffect(() => {
    const fetchDescription = async () => {
      const response = await axios.post('https://poker247tech.ru/get_horoscope/', {
        sign,
        language: language === 'ru' ? 'original' : 'translated',
        period: 'today',
      });
      setDescription(response.data.horoscope);
    };
    fetchDescription();
  }, [sign, language]);

  return (
    <div className="zodiac-detail">
      <button onClick={onBack}>{translate(language, 'back')}</button>
      <h2>{translate(language, sign)}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ZodiacDetail;
