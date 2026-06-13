import React, { useState } from 'react';
import { HomeView } from './components/HomeView';
import { DetailsView } from './components/DetailsView';
import { IngredientsView } from './components/IngredientsView';
import { AboutView } from './components/AboutView';
import { ArrowLeft } from 'lucide-react';

export type ViewState = 'home' | 'detailsuche' | 'ingredients' | 'about';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const setView = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const Navigation = () => {
    if (currentView === 'home') {
      return (
        <nav className="w-full flex flex-col md:flex-row px-8 lg:px-16 items-center justify-between border-b mx-auto xl:max-w-7xl border-zinc-200 py-4 md:py-0 md:h-16 gap-4 md:gap-0">
          <div className="font-mono text-sm tracking-tight font-medium uppercase cursor-pointer text-center md:text-left" onClick={() => setView('home')}>
            bestehandcreme.xyz
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <button 
              onClick={() => setView('detailsuche')}
              className="text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm transition-all duration-300 text-zinc-800 cursor-pointer font-medium"
            >
              Detailsuche
            </button>
            <button 
              onClick={() => setView('ingredients')}
              className="text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm transition-all duration-300 text-zinc-800 cursor-pointer font-medium"
            >
              Wirkstoffdatenbank
            </button>
            <button 
              onClick={() => setView('about')}
              className="text-[10px] sm:text-xs font-mono uppercase tracking-widest border border-zinc-300 hover:border-zinc-950 hover:bg-zinc-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-sm transition-all duration-300 text-zinc-800 cursor-pointer font-medium bg-white"
            >
              Über diese Seite
            </button>
          </div>
        </nav>
      );
    }

    return (
      <nav className="w-full h-16 flex px-8 lg:px-16 items-center justify-between border-b mx-auto xl:max-w-7xl border-zinc-200">
        <div className="font-mono text-sm tracking-tight font-medium uppercase cursor-pointer" onClick={() => setView('home')}>
          <ArrowLeft className="w-4 h-4 inline-block mr-2 text-zinc-500" /> Zurück
        </div>
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-900 font-sans antialiased selection:bg-zinc-200 flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomeView />}
        {currentView === 'detailsuche' && <DetailsView />}
        {currentView === 'ingredients' && <IngredientsView />}
        {currentView === 'about' && <AboutView />}
      </main>

      {(currentView === 'home' || currentView === 'about') && (
        <footer className="mt-auto px-8 lg:px-16 pb-12 mx-auto xl:max-w-7xl font-sans w-full">
          <div className="flex flex-col items-center md:items-start text-zinc-500 border-t border-zinc-200 pt-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-widest uppercase font-mono">bestehandcreme.xyz </span>
              <span className="text-zinc-300">|</span>
              <a href="https://michaelfoertsch.de/impressum.html" target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-widest hover:text-zinc-900 transition-colors">
                Impressum
              </a>
              <span className="text-zinc-300">|</span>
              <button onClick={() => setView('about')} className="text-xs font-mono uppercase tracking-widest hover:text-zinc-900 transition-colors cursor-pointer">
                Transparenz & Über mich
              </button>
            </div>
            <p className="text-xs text-zinc-500 text-center md:text-left max-w-3xl leading-relaxed">
              Hinweis zu Kauf-Links: Einige Links auf dieser Seite sind Affiliate- oder Referral-Links. Wenn du darüber etwas kaufst, erhalte ich eventuell eine kleine Provision. Für dich ändert sich der Preis nicht. Die Empfehlungen entstehen trotzdem aus meiner eigenen Einschätzung, meinen Erfahrungen und dem Blick auf die Inhaltsstoffe.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
