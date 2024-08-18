import React, { useState, useEffect } from 'react';
import ZodiacList from './components/ZodiacList';
import ZodiacDetail from './components/ZodiacDetail';
const tg = window.Telegram.WebApp;
const App: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    if (tg) {
      tg.ready();
      const userLang = tg.initDataUnsafe.user?.language_code;
      setLanguage(userLang === 'ru' ? 'ru' : 'en');
    }
  }, []);

  const handleSelect = (sign: string) => setSelectedSign(sign);
  const handleBack = () => setSelectedSign(null);
  const toggleLanguage = () => setLanguage(language === 'ru' ? 'en' : 'ru');

  return (
    <div className="app">
      <header>
        <button onClick={toggleLanguage}>
          {language === 'ru' ? 'Switch to English' : 'Переключить на Русский'}
        </button>
      </header>
      {selectedSign ? (
        <ZodiacDetail
          sign={selectedSign}
          onBack={handleBack}
          language={language}
        />
      ) : (
        <ZodiacList onSelect={handleSelect} lang={language} />
      )}
    </div>
  );
};

export default App;
