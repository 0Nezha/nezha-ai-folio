
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const AIAssistant = () => {
  useEffect(() => {
    // Initialize the N8N chat with your webhook URL
    createChat({
      webhookUrl: 'https://nerabin.app.n8n.cloud/webhook/cc79b15a-b04f-4429-8194-44c560a25e59/chat',
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: false,
      initialMessages: [
        'Hello! I\'m Nezha\'s AI assistant. I can answer questions about his skills, projects, and services in Arabic, French, or English. How can I help you today?'
      ],
      i18n: {
        en: {
          title: 'AI Assistant 👋',
          subtitle: "Ask me about Nezha's skills, projects, and services!",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question in Arabic, French, or English...',
        },
      },
      loadPreviousSession: true,
      enableStreaming: false,
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default AIAssistant;
