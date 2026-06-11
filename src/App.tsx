import React, { useState } from 'react';
import { HomeView } from './components/HomeView';
import { DetailsView } from './components/DetailsView';
import { IngredientsView } from './components/IngredientsView';
import { ArrowLeft } from 'lucide-react';

export type ViewState = 'home' | 'detailsuche' | 'ingredients';

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
      </main>

      {currentView === 'home' && (
        <footer className="mt-auto px-8 lg:px-16 pb-12 mx-auto xl:max-w-7xl font-mono w-full">
          <div className="flex flex-col md:flex-row items-start justify-between text-zinc-500 border-t border-zinc-200 pt-8 gap-6 md:gap-4">
            <div className="flex flex-col gap-2 shrink-0 items-center md:items-start w-full md:w-auto">
              <span className="text-xs tracking-widest uppercase text-center md:text-left">bestehandcreme.xyz :: sys.db</span>
              <a href="https://michaelfoertsch.de/impressum.html" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest hover:text-zinc-900 transition-colors">
                Impressum
              </a>
            </div>
            <span className="text-[8px] sm:text-[9px] text-zinc-400 text-center md:text-right uppercase max-w-2xl leading-relaxed">
              *Hinweis: Bei den Kauf-Buttons handelt es sich um Referral-/Affiliate-Links. Wenn Sie über diese Links einkaufen, erhalten wir eine kleine Provision, ohne dass sich der Preis für Sie ändert.
            </span>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
