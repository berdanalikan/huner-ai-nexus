import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Send, Plus, ArrowLeft, History, User, Bot } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface ChatSession {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: Date;
  messages: Message[];
}

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Demo chat sessions
  const [chatSessions] = useState<ChatSession[]>([
    {
      id: "1",
      title: "Diabetes Takibi",
      lastMessage: "Kan şekeri ölçümlerini nasıl takip edebilirim?",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      messages: []
    },
    {
      id: "2", 
      title: "İlaç Etkileşimleri",
      lastMessage: "Bu ilaçları birlikte kullanabilir miyim?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      messages: []
    },
    {
      id: "3",
      title: "Beslenme Önerileri", 
      lastMessage: "Kilo vermek için hangi besinleri tüketmeliyim?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      messages: []
    }
  ]);

  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "ai",
      content: "Merhaba! Ben Hüner AI asistanınızım. Sağlık konularında size nasıl yardımcı olabilirim?",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `Bu konuda size yardımcı olmaya çalışacağım. "${currentMessage}" ile ilgili detaylı bilgi verebilirim. Daha spesifik sorularınız var mı?`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = diff / (1000 * 60 * 60);
    
    if (hours < 1) return 'Az önce';
    if (hours < 24) return `${Math.floor(hours)} saat önce`;
    return `${Math.floor(hours / 24)} gün önce`;
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar */}
      <div className="w-80 border-r border-border glass flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Ana Sayfa</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-full bg-gradient-primary shadow-ai">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-sm">Hüner AI</span>
            </div>
          </div>
          
          <HeroButton 
            variant="glass" 
            size="sm" 
            className="w-full"
            icon={<Plus className="w-4 h-4" />}
          >
            Yeni Sohbet
          </HeroButton>
        </div>

        {/* Chat History */}
        <div className="flex-1 p-4">
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <History className="w-4 h-4" />
            <span>Sohbet Geçmişi</span>
          </div>
          
          <ScrollArea className="space-y-2">
            {chatSessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setActiveChat(session.id)}
                className={`w-full text-left p-3 rounded-lg transition-all hover:bg-muted/50 ${
                  activeChat === session.id ? 'bg-muted' : ''
                }`}
              >
                <div className="font-medium text-sm mb-1 truncate">
                  {session.title}
                </div>
                <div className="text-xs text-muted-foreground truncate mb-1">
                  {session.lastMessage}
                </div>
                <div className="text-xs text-muted-foreground">
                  {formatDate(session.timestamp)}
                </div>
              </button>
            ))}
          </ScrollArea>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-border/50 glass">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-primary shadow-ai">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold">Hüner AI Asistanı</h2>
                <p className="text-sm text-muted-foreground">
                  {isTyping ? 'Yazıyor...' : 'Aktif'}
                </p>
              </div>
            </div>
            
            <Link to="/home">
              <Button variant="outline" size="sm">
                Ana Sayfa
              </Button>
            </Link>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.type === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-ai flex-shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                
                <div
                  className={`max-w-[70%] rounded-xl p-4 ${
                    message.type === 'user'
                      ? 'bg-gradient-primary text-primary-foreground shadow-ai'
                      : 'glass'
                  }`}
                >
                  <p className="leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 opacity-70`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
                
                {message.type === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-secondary flex items-center justify-center shadow-health flex-shrink-0">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center shadow-ai flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t border-border/50 glass">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <Input
                placeholder="Sağlık konularında sorularınızı sorun..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || isTyping}
                className="bg-gradient-primary hover:shadow-ai"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Hüner AI sağlık konularında bilgi sağlar, ancak doktor tavsiyesinin yerini tutmaz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;