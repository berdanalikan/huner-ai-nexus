import { HeroButton } from "@/components/ui/hero-button";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Users, ArrowLeft, Mail, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Geri Dön</span>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Sağlık Alanında{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Devrimi
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hüner AI, sağlık profesyonelleri ve hastalar için tasarlanmış, 
              son teknoloji yapay zeka çözümleri ile geleceğin sağlık hizmetlerini bugün sunuyor.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Neden Hüner AI?</h2>
            <p className="text-xl text-muted-foreground">
              Sağlık alanında yapay zeka ile mümkün olanların sınırlarını zorla
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-ai group-hover:animate-glow-pulse">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Akıllı Analiz</h3>
              <p className="text-muted-foreground">
                Gelişmiş AI algoritmaları ile hızlı ve doğru sağlık analizleri
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-secondary mx-auto mb-4 flex items-center justify-center shadow-health group-hover:animate-glow-pulse">
                <Shield className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Güvenli & Güvenilir</h3>
              <p className="text-muted-foreground">
                HIPAA uyumlu, end-to-end şifreli güvenli sağlık veri işleme
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-accent mx-auto mb-4 flex items-center justify-center shadow-accent group-hover:animate-glow-pulse">
                <Zap className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Sonuçlar</h3>
              <p className="text-muted-foreground">
                Anlık AI destekli tanı ve tedavi önerileri
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center shadow-ai group-hover:animate-glow-pulse">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kolay Kullanım</h3>
              <p className="text-muted-foreground">
                Sezgisel arayüz ile her seviyeden kullanıcı için erişilebilir
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Vizyonumuz</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Hüner AI olarak, yapay zeka teknolojilerini sağlık alanında en etkin şekilde 
            kullanarak, daha erişilebilir, hızlı ve doğru sağlık hizmetleri sunmayı hedefliyoruz. 
            Amacımız, sağlık profesyonellerini güçlendirmek ve hastalara daha iyi bakım imkanı sunmaktır.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Analiz Edilen Veri</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">99.8%</div>
              <div className="text-muted-foreground">Doğruluk Oranı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Kesintisiz Hizmet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Bize Ulaşın</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Önerileriniz ve geri bildirimleriniz bizim için değerli. 
            Hüner AI hakkında düşüncelerinizi paylaşın.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <HeroButton 
              variant="secondary" 
              size="lg"
              className="w-full"
              icon={<Mail className="w-5 h-5" />}
            >
              Öneri & Geri Bildirim Formu
            </HeroButton>
            
            <Link to="/chat">
              <HeroButton 
                variant="primary" 
                size="lg"
                className="w-full"
                icon={<MessageCircle className="w-5 h-5" />}
              >
                AI ile Konuş
              </HeroButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-gradient-primary shadow-ai">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hüner AI
            </span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Hüner AI. Sağlık ve AI'da Geleceğin Öncüsü.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;