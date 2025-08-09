import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

// Extend the Window interface to include n8nChat
declare global {
  interface Window {
    n8nChat?: {
      setTheme?: (theme: string) => void;
      [key: string]: any;
    };
  }
}

const ThemeToggle = ({ className = "" }) => {
  const [isDark, setIsDark] = useState(false);

 useEffect(() => {
   const savedTheme = localStorage.getItem('theme');
   if (savedTheme) {
     const isDarkMode = savedTheme === 'dark';
     setIsDark(isDarkMode);
     document.documentElement.classList.toggle('dark', isDarkMode);
     updateChatTheme(isDarkMode);
    } else {
     // Pas de thème sauvegardé : forcer mode clair par défaut
     setIsDark(false);
     document.documentElement.classList.remove('dark'); // assure light
     updateChatTheme(false);
    }
  }, []);

  const updateChatTheme = (isDarkMode) => {
    // Attendre un peu pour que le DOM soit prêt
    setTimeout(() => {
      // Sélectionner le widget de chat avec plusieurs sélecteurs possibles
      const chatSelectors = [
        '.n8n-chat',
        '[data-chat-widget]', 
        '#n8n-chat',
        '.chat-widget',
        '.chat-container',
        'iframe[src*="chat"]'
      ];
      
      let chatElement = null;
      for (const selector of chatSelectors) {
        chatElement = document.querySelector(selector);
        if (chatElement) break;
      }
      
      if (chatElement) {
        // Appliquer les classes de thème
        if (isDarkMode) {
          chatElement.classList.add('dark-theme');
          chatElement.classList.remove('light-theme');
        } else {
          chatElement.classList.add('light-theme');
          chatElement.classList.remove('dark-theme');
        }
        
        // Si c'est un iframe, essayer de communiquer avec
        if (chatElement.tagName === 'IFRAME') {
          try {
            chatElement.contentWindow.postMessage({
              type: 'theme-change',
              theme: isDarkMode ? 'dark' : 'light'
            }, '*');
          } catch (e) {
            console.log('Communication iframe impossible:', e);
          }
        }
        
        // Forcer la mise à jour des variables CSS sur l'élément chat
        const chatVariables = isDarkMode ? {
          '--chat--color-primary': '#4A9EFF',
          '--chat--color-light': '#2D2D30',
          '--chat--color-dark': '#FFFFFF',
          '--chat--header--background': '#1E1E1E',
          '--chat--message--bot--background': '#2D2D30',
          '--chat--message--bot--color': '#E0E0E0'
        } : {
          '--chat--color-primary': '#0078D4',
          '--chat--color-light': '#f3f3f3',  
          '--chat--color-dark': '#2b2b2b',
          '--chat--header--background': '#0078D4',
          '--chat--message--bot--background': '#f3f3f3',
          '--chat--message--bot--color': '#2b2b2b'
        };
        
        Object.entries(chatVariables).forEach(([property, value]) => {
          chatElement.style.setProperty(property, value);
        });
      }
      
      // Essayer aussi de mettre à jour via l'API n8n si disponible
      if (window.n8nChat && typeof window.n8nChat.setTheme === 'function') {
        window.n8nChat.setTheme(isDarkMode ? 'dark' : 'light');
      }
      
    }, 100);
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Mettre à jour le chat
    updateChatTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110 ${className}`}
      aria-label={`Basculer vers le mode ${isDark ? 'clair' : 'sombre'}`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-primary hover:text-accent transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-primary hover:text-accent transition-colors" />
      )}
    </button>
  );
};

export default ThemeToggle;