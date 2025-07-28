import { HeroButton } from "@/components/ui/hero-button";
import { Link } from "react-router-dom";
import { Brain, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Logo/Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-gradient-primary shadow-ai">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hüner AI
            </h1>
          </div>
          <p className="text-xl text-muted-foreground font-light">
            Sağlık ve AI'da Geleceğin Öncüsü
          </p>
        </div>

        {/* Main Buttons Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Ana Sayfa Button */}
          <div className="group animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <Link to="/home">
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 group-hover:shadow-glass">
                <div className="text-center space-y-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-secondary flex items-center justify-center shadow-health group-hover:animate-glow-pulse">
                    <Sparkles className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-foreground">Ana Sayfa</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Hüner AI hakkında detaylı bilgi alın, özelliklerimizi keşfedin ve geleceğin sağlık teknolojilerini deneyimleyin
                    </p>
                  </div>
                  
                  <HeroButton 
                    variant="secondary" 
                    size="lg"
                    className="group/btn w-full"
                    icon={<ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />}
                  >
                    Keşfetmeye Başla
                  </HeroButton>
                </div>
              </div>
            </Link>
          </div>

          {/* AI Sohbet Button */}
          <div className="group animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/chat">
              <div className="glass rounded-2xl p-8 h-full transition-all duration-500 hover:scale-105 group-hover:shadow-glass">
                <div className="text-center space-y-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-ai group-hover:animate-glow-pulse">
                    <MessageSquare className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-foreground">AI Sohbet</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Gelişmiş yapay zeka asistanımızla sohbet edin, sorularınızı sorun ve sağlık alanında uzman desteği alın
                    </p>
                  </div>
                  
                  <HeroButton 
                    variant="primary" 
                    size="lg"
                    className="group/btn w-full"
                    icon={<ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />}
                  >
                    Sohbete Başla
                  </HeroButton>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-muted-foreground text-sm">
            Yapay zeka ile sağlık alanında yenilikçi çözümler
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;