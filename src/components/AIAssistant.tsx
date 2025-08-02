import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Nezha\'s AI assistant. I can answer questions about his skills, projects, and services in Arabic, French, or English. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    skills: 'Nezha specializes in Web Development (React.js, Vue.js, PHP), Data Analysis (Python, R, SQL), Database Administration (SQL, PL/SQL), and UI/UX Design. He\'s also passionate about AI and innovation.',
    projects: 'His featured project is a Medical Management App - a mobile application for managing medical cabinet operations. He has also worked on data analytics dashboards and AI-powered solutions.',
    services: 'Nezha offers comprehensive services including web development, data analysis, database administration, UI/UX design, AI solutions, and full-stack development.',
    experience: 'He has experience in healthcare technology, data visualization, machine learning, and modern web development frameworks.',
    contact: 'You can reach Nezha through the contact form on this website, connect with him on LinkedIn, or check out his work on GitHub.',
    languages: 'Nezha works with multiple programming languages including JavaScript, Python, R, PHP, SQL, and has experience with various frameworks and tools.',
    education: 'He is a rigorous and fast learner, passionate about data and innovation, with expertise in both technical development and analytical thinking.'
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('skill') || message.includes('compétence') || message.includes('مهارة')) {
      return predefinedResponses.skills;
    }
    if (message.includes('project') || message.includes('projet') || message.includes('مشروع')) {
      return predefinedResponses.projects;
    }
    if (message.includes('service') || message.includes('خدمة')) {
      return predefinedResponses.services;
    }
    if (message.includes('experience') || message.includes('expérience') || message.includes('خبرة')) {
      return predefinedResponses.experience;
    }
    if (message.includes('contact') || message.includes('تواصل')) {
      return predefinedResponses.contact;
    }
    if (message.includes('language') || message.includes('langage') || message.includes('لغة')) {
      return predefinedResponses.languages;
    }
    if (message.includes('education') || message.includes('éducation') || message.includes('تعليم')) {
      return predefinedResponses.education;
    }
    if (message.includes('hello') || message.includes('hi') || message.includes('bonjour') || message.includes('salut') || message.includes('مرحبا') || message.includes('أهلا')) {
      return 'Hello! I\'m here to help you learn more about Nezha\'s professional background, skills, and projects. What would you like to know?';
    }
    
    return 'Thank you for your question! For specific inquiries about Nezha\'s work, projects, or collaboration opportunities, please feel free to use the contact form below or ask me about his skills, services, or experience.';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center float ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Bot className="w-8 h-8" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[32rem] bg-card border border-border rounded-xl shadow-[var(--shadow-elegant)] z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm opacity-90">Ask me about Nezha</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;