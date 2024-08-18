// src/components/ZodiacList.tsx
import { translate } from '../i18n';
import { zodiacSigns } from '../data/data';

const ZodiacList = ({ lang,onSelect }:{lang:string,onSelect:(sign:string) => void}) => {
  return (
    <div className="zodiac-list">
      {zodiacSigns.map((sign) => (
        <div key={sign.id}  className="zodiac-item" onClick={() => onSelect(sign.id)}>
          <h2>{translate(lang, sign.id)}</h2>
          <p>{translate(lang, `${sign.id}Period`)}</p>
        </div>
      ))}
    </div>
  );
};

export default ZodiacList;