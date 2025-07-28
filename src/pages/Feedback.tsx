import { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, ArrowLeft, Send, MessageSquare, Lightbulb, Bug, Heart } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.type || !formData.message) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Geri Bildiriminiz Alındı! 🎉",
        description: "Değerli önerileriniz için teşekkür ederiz. En kısa sürede size dönüş yapacağız.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        type: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const feedbackTypes = [
    { value: "suggestion", label: "Öneri", icon: Lightbulb },
    { value: "bug", label: "Hata Bildirimi", icon: Bug },
    { value: "feature", label: "Özellik İsteği", icon: MessageSquare },
    { value: "compliment", label: "Teşekkür/Övgü", icon: Heart },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Ana Sayfaya Dön</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-gradient-primary shadow-ai">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hüner AI
              </span>
            </div>

            <Link to="/chat">
              <HeroButton variant="primary" size="sm">
                AI Sohbet
              </HeroButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-gradient-secondary mx-auto mb-6 flex items-center justify-center shadow-health">
              <MessageSquare className="w-10 h-10 text-secondary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Öneri & Geri Bildirim
            </h1>
            <p className="text-xl text-muted-foreground">
              Fikirleriniz bizim için değerli! Hüner AI'ı daha iyi hale getirmemize yardımcı olun.
            </p>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    İsim Soyisim *
                  </label>
                  <Input
                    placeholder="Adınız ve soyadınız"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    E-posta Adresi *
                  </label>
                  <Input
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Feedback Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Geri Bildirim Türü *
                </label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Geri bildirim türünü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {feedbackTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <type.icon className="w-4 h-4" />
                          {type.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Mesajınız *
                </label>
                <Textarea
                  placeholder="Düşüncelerinizi, önerilerinizi veya geri bildirimlerinizi detaylı bir şekilde paylaşın..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <HeroButton
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={isSubmitting ? 
                    <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" /> :
                    <Send className="w-5 h-5" />
                  }
                >
                  {isSubmitting ? "Gönderiliyor..." : "Geri Bildirim Gönder"}
                </HeroButton>
              </div>
            </form>

            {/* Info */}
            <div className="mt-8 p-4 rounded-lg bg-muted/30 border border-border/50">
              <p className="text-sm text-muted-foreground text-center">
                🔒 Bilgileriniz güvenle saklanır ve sadece geliştirme ekibimiz tarafından görüntülenir.
                <br />
                📧 Size en kısa sürede dönüş yapmaya çalışacağız.
              </p>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground">
              Başka bir konuda yardıma mı ihtiyacınız var?
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/chat">
                <Button variant="outline">
                  AI ile Konuş
                </Button>
              </Link>
              <Link to="/home">
                <Button variant="outline">
                  Ana Sayfaya Dön
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;