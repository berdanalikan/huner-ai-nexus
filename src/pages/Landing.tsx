import { HeroButton } from "@/components/ui/hero-button";
import { Link } from "react-router-dom";
import { Brain, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Card */}
      <div className="flex justify-center pt-12 pb-8 px-6">
        <div className="glass rounded-2xl p-8 animate-fade-in">
          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-gradient-primary shadow-ai">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hüner AI
              </h1>
              <p className="text-lg text-muted-foreground font-light mt-1">
                Sağlık ve AI'da Geleceğin Öncüsü
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Split Screen Content */}
      <div className="flex-1 flex">
        {/* Left Side - Ana Sayfa */}
        <div className="w-1/2 flex items-center justify-center p-8 border-r border-border/30 relative overflow-hidden group">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-secondary/5 group-hover:from-secondary/20 group-hover:to-secondary/10 transition-all duration-700"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-secondary opacity-10 blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-secondary opacity-20 blur-lg animate-float" style={{animationDelay: '1s'}}></div>
          
          <Link to="/home" className="relative z-10 group/link">
            <div className="text-center space-y-8 transform transition-all duration-500 group-hover:scale-105">
              <div className="mx-auto w-32 h-32 rounded-full bg-gradient-secondary flex items-center justify-center shadow-health group-hover/link:shadow-xl group-hover/link:shadow-secondary/40 transition-all duration-500 group-hover/link:animate-glow-pulse">
                <Sparkles className="w-16 h-16 text-secondary-foreground" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-foreground group-hover/link:text-secondary transition-colors duration-300">
                  Ana Sayfa
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Hüner AI hakkında detaylı bilgi alın, özelliklerimizi keşfedin ve geleceğin sağlık teknolojilerini deneyimleyin
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-secondary font-medium text-lg group-hover/link:gap-4 transition-all duration-300">
                <span>Keşfetmeye Başla</span>
                <ArrowRight className="w-6 h-6 transform group-hover/link:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>

        {/* Right Side - AI Sohbet */}
        <div className="w-1/2 flex items-center justify-center p-8 relative overflow-hidden group">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-700"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-primary opacity-10 blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-primary opacity-20 blur-lg animate-float" style={{animationDelay: '1.5s'}}></div>
          
          <Link to="/chat" className="relative z-10 group/link">
            <div className="text-center space-y-8 transform transition-all duration-500 group-hover:scale-105">
              <div className="mx-auto w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-ai group-hover/link:shadow-xl group-hover/link:shadow-primary/40 transition-all duration-500 group-hover/link:animate-glow-pulse">
                <MessageSquare className="w-16 h-16 text-primary-foreground" />
              </div>
              
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-foreground group-hover/link:text-primary transition-colors duration-300">
                  AI Sohbet
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Gelişmiş yapay zeka asistanımızla sohbet edin, sorularınızı sorun ve sağlık alanında uzman desteği alın
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-primary font-medium text-lg group-hover/link:gap-4 transition-all duration-300">
                <span>Sohbete Başla</span>
                <ArrowRight className="w-6 h-6 transform group-hover/link:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="text-center py-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <p className="text-muted-foreground text-sm">
          Yapay zeka ile sağlık alanında yenilikçi çözümler
        </p>
      </div>
    </div>
  );
};

export default Landing;