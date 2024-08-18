declare global {
    interface Window {
      Telegram: {
        WebApp: any;
      };
    }
  }
  
  export const tg = window.Telegram.WebApp;