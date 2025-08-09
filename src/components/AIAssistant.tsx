import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const AIAssistant = () => {
  const chatRef = useRef(null);

  useEffect(() => {
    // Initialize the N8N chat with your webhook URL
    const chat = createChat({
      webhookUrl: 'https://nerabin.app.n8n.cloud/webhook/cc79b15a-b04f-4429-8194-44c560a25e59/chat',
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: false,
      initialMessages: [
        'H! I\'m Nezha\'s AI assistant. I can answer questions about his skills, projects, and services in Arabic, French, or English. How can I help you today?'
      ],
      i18n: {
        en: {
          title: "Nezha's AI Assistant 👋",
          subtitle: "Ask me about Nezha's skills, projects, and services!",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question in Arabic, French, or English...',
          closeButtonTooltip: 'Close chat',
          
        },
      },
      loadPreviousSession: true,
      enableStreaming: false,
      // Configuration pour afficher l'heure des messages
      // timestampFormat: 'h:mm A', // Format AM/PM (removed, not supported)
    });

    chatRef.current = chat;

    // Ajouter des styles personnalisés pour l'heure et le bouton fermer
    const addCustomStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Style pour l'affichage de l'heure */
        .n8n-chat .chat-message-timestamp {
          font-size: 0.75rem;
          color: #666;
          margin-top: 4px;
          opacity: 0.7;
        } 
        
        
        /* Style pour le bouton fermer */
        .n8n-chat .chat-header .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #666;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }
        
        .n8n-chat .chat-header .close-button:hover {
          background-color: #f0f0f0;
          color: #333;
        }
        
        /* Assurer que l'heure s'affiche sur chaque message */
        .n8n-chat .chat-message {
          position: relative;
        }
          
         #n8n-chat .chat-window {
         
          height: 500px !important;
          width: 400px !important;
          
        }
          
          
      `;
      document.head.appendChild(style);
    };

    // Ajouter le bouton fermer et gérer l'affichage de l'heure
    const addCloseButtonAndTimestamp = () => {
      const chatContainer = document.querySelector('#n8n-chat');
      if (chatContainer) {
        // Ajouter le bouton fermer
        const header = chatContainer.querySelector('.chat-header');
        if (header && !header.querySelector('.close-button')) {
          const closeButton = document.createElement('button');
          closeButton.className = 'close-button';
          closeButton.innerHTML = '×';
          closeButton.title = 'Fermer le chat';
          closeButton.onclick = () => {
            (chatContainer as HTMLElement).style.display = 'none';
          };
          header.appendChild(closeButton);
        }

        // Observer les nouveaux messages pour ajouter l'heure
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (
                node.nodeType === 1 &&
                (node as Element).classList?.contains('chat-message')
              ) {
                addTimestampToMessage(node as Element);
              }
            });
          });
        });

        const messagesContainer = chatContainer.querySelector('.chat-messages');
        if (messagesContainer) {
          observer.observe(messagesContainer, { childList: true, subtree: true });
          
          // Ajouter l'heure aux messages existants
          const existingMessages = messagesContainer.querySelectorAll('.chat-message');
          existingMessages.forEach(addTimestampToMessage);
        }
      }
    };

    // Fonction pour ajouter l'heure à un message
    const addTimestampToMessage = (messageElement) => {
      if (!messageElement.querySelector('.chat-message-timestamp')) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
        });
        
        const timestamp = document.createElement('div');
        timestamp.className = 'chat-message-timestamp';
        timestamp.textContent = timeString;
        messageElement.appendChild(timestamp);
      }
    };

    // Attendre que le chat soit initialisé puis ajouter les personnalisations
    setTimeout(() => {
      addCustomStyles();
      addCloseButtonAndTimestamp();
    }, 1000);

    // Cleanup function
    return () => {
      if (chatRef.current && typeof chatRef.current.destroy === 'function') {
        chatRef.current.destroy();
      }
    };
  }, []);

  // Fonction pour ouvrir/fermer le chat
  const toggleChat = () => {
    const chatContainer = document.querySelector('#n8n-chat');
    if (chatContainer) {
      (chatContainer as HTMLElement).style.display = (chatContainer as HTMLElement).style.display === 'none' ? 'block' : 'none';
    }
  };

  return (
    <div>
      <div id="n8n-chat"></div>
      {/* Bouton optionnel pour rouvrir le chat s'il est fermé */}
      <button 
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1000
        }}
      >
        💬
      </button>
    </div>
  );
};

export default AIAssistant;   