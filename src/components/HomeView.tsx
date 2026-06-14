import React, { useState, useMemo } from 'react';
import { filterCategories, categoryMapping, recommendations } from '../data';
import { Search, Filter, Sparkles, Leaf, Droplets, Info, MoveRight, ExternalLink, CheckCircle2 } from 'lucide-react';

const IconMap: Record<string, React.FC<any>> = {
  sparkles: Sparkles,
  leaf: Leaf,
  droplets: Droplets,
};

function ExpandableIngredients({ ingredients }: { ingredients: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = ingredients.length > 80;

  return (
    <div className="mb-6">
      <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Hauptinhaltsstoffe (Auszug)</h4>
      <p className={`text-xs text-zinc-600 font-mono leading-relaxed transition-all duration-300 ${expanded ? '' : 'line-clamp-3'}`}>
        {ingredients}
      </p>
      {isLong && (
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="text-[10px] mt-2 font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
        >
          {expanded ? 'Weniger anzeigen' : 'Mehr ausklappen'}
        </button>
      )}
    </div>
  );
}

export function HomeView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filtered = useMemo(() => {
    return recommendations.filter(item => {
      // Freitextsuche
      const s = searchTerm.toLowerCase();
      const matchesSearch = s === '' || 
        item.brand.toLowerCase().includes(s) ||
        item.name.toLowerCase().includes(s) ||
        item.tags.some(tag => tag.toLowerCase().includes(s)) ||
        item.ingredients.toLowerCase().includes(s) ||
        item.country.toLowerCase().includes(s);

      if (!matchesSearch) return false;

      // Schnellfilter
      if (activeFilter === 'Alle') return true;
      const filterTags = categoryMapping[activeFilter] || [];
      return item.tags.some(tag => filterTags.includes(tag)) || item.brand.toLowerCase().includes(activeFilter.toLowerCase());
    });
  }, [searchTerm, activeFilter]);

  const resetFilters = () => {
    setSearchTerm('');
    setActiveFilter('Alle');
  };

  const schemaData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": filtered.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": item.name,
          "brand": {
            "@type": "Brand",
            "name": item.brand
          },
          "description": item.description,
          "url": item.link,
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "BesteHandcreme.xyz"
            },
            "reviewBody": item.editorial.reason || item.description
          }
        }
      }))
    };
  }, [filtered]);

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />
      {/* Hero Section */}
      <section className="px-8 lg:px-16 pt-20 pb-12 mx-auto xl:max-w-7xl">
        <div className="max-w-4xl">
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500"></span> 
             Zuletzt aktualisiert: 12.06.2026
          </div>
          
          <h1 className="font-medium text-4xl mb-6 tracking-tight leading-snug md:leading-tight text-zinc-950">
            Die persönliche <span className="bg-yellow-300 text-blue-800 px-2 py-0.5 rounded-sm inline-block mt-1 md:mt-0">Handcreme-Datenbank</span>
          </h1>
          
          <div className="text-base md:text-lg text-zinc-700 max-w-3xl font-normal leading-relaxed mb-10 space-y-4">
            <p>
              Diese Seite ist ein privates Projekt aus persönlicher Neugier, vielen ausprobierten Handcremes und einer etwas ausufernden Faszination für Inhaltsstoffe. 
              Ich sammle hier Handcremes, vergleiche ihre Formulierungen und notiere, welche Produkte für welche Hautbedürfnisse sinnvoll wirken könnten. 
              Das ist kein Labortest und keine medizinische Beratung, sondern eine persönliche, möglichst transparente Handcreme-Datenbank.
            </p>
          </div>

          {/* Suchfeld */}
          <div className="relative max-w-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-500">
              <Search className="w-4 h-4" />
            </div>
            <input 
              type="text" 
              placeholder="Suchen nach Marke, Inhaltsstoff, Herkunftsland..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-300 rounded-sm focus:outline-none focus:border-blue-700 outline-none transition-colors text-sm text-zinc-900 placeholder-zinc-500 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Section Box */}
      <div className="px-8 lg:px-16 mb-12 mx-auto xl:max-w-7xl">
        <div className="bg-white border-t border-b border-zinc-200 py-5 flex flex-col md:flex-row md:items-center gap-5">
          {/* Info & Label */}
          <div className="flex items-center gap-3 select-none">
            <div className="bg-zinc-100 p-2 rounded-sm text-zinc-700 shrink-0">
              <Filter className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-950 block">Schnellfilter nach Kriterien</span>
            </div>
          </div>
          
          <div className="h-px bg-zinc-200 flex-grow hidden md:block"></div>

          {/* Button Container (Flexible wrap) */}
          <div className="flex flex-wrap gap-2 items-center">
            {filterCategories.map(cat => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-sm whitespace-nowrap font-mono transition-all duration-200 cursor-pointer border ${
                    isActive 
                      ? 'bg-zinc-950 border-zinc-950 text-white font-bold shadow-sm' 
                      : 'text-zinc-650 border-zinc-200 hover:border-zinc-950 hover:bg-zinc-100 hover:text-zinc-900 bg-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="px-8 lg:px-16 mx-auto xl:max-w-7xl">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-zinc-800 bg-white rounded-sm border border-zinc-200 border-dashed max-w-xl mx-auto px-8">
            <p className="mb-5 text-base text-zinc-700 font-medium">Keine Handcremes gefunden, die diesen Kriterien entsprechen.</p>
            <button 
              onClick={resetFilters}
              className="text-xs font-mono uppercase tracking-widest px-5 py-2.5 bg-zinc-200 text-zinc-800 hover:bg-zinc-300 transition-colors rounded-sm font-semibold cursor-pointer"
            >
              Filter zurücksetzen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => {
              const IconComp = IconMap[item.icon] || Sparkles;
              return (
                <article key={item.id} className="flex flex-col border border-zinc-200 bg-white p-6 rounded-sm group shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image / Platzhalter */}
                  <div className="aspect-[4/5] bg-zinc-100 mb-6 overflow-hidden relative rounded-sm border border-zinc-200">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.image.replace('./', '')}`}
                      alt={`${item.brand} Handcreme`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.classList.remove('hidden');
                        e.currentTarget.nextElementSibling!.classList.add('flex');
                      }}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />
                    {/* Fallback */}
                    <div className="absolute inset-0 hidden flex-col items-center justify-center bg-zinc-50 text-zinc-300 p-4 text-center">
                      <Sparkles className="w-10 h-10 mb-1" />
                      <span className="text-xs font-mono uppercase tracking-wider mb-3 text-zinc-400">{item.brand}</span>
                      <span className="text-[10px] font-mono bg-zinc-200/50 text-zinc-500 px-2 py-1 rounded-sm break-all font-medium">
                        {item.image.replace('./', '')}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>

                  {/* Brand & Name */}
                  <div className="mb-4">
                    <h2 className="font-bold text-xl text-zinc-950 tracking-tight">{item.brand}</h2>
                    <h2 className="font-semibold text-lg text-zinc-800 tracking-tight leading-snug line-clamp-2">{item.name}</h2>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-700 text-base leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Editorial Section */}
                  <div className="bg-zinc-50 p-4 rounded-sm border border-zinc-200 mb-6 space-y-3.5">
                    {item.editorial.reason && (
                      <div>
                        <strong className="text-xs font-mono uppercase tracking-widest block text-zinc-500 mb-1">Warum hier gelistet:</strong>
                        <p className="text-sm text-zinc-800">{item.editorial.reason}</p>
                      </div>
                    )}
                    {item.editorial.target && (
                      <div>
                        <strong className="text-xs font-mono uppercase tracking-widest block text-zinc-500 mb-1">Für wen geeignet:</strong>
                        <p className="text-sm text-zinc-800">{item.editorial.target}</p>
                      </div>
                    )}
                    {item.editorial.caveat && (
                      <div>
                        <strong className="text-xs font-mono uppercase tracking-widest block text-zinc-500 mb-1">Was könnte stören:</strong>
                        <p className="text-sm text-zinc-800">{item.editorial.caveat}</p>
                      </div>
                    )}
                    <div className="pt-2 border-t border-zinc-200 mt-2 flex items-center justify-between">
                       <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Basis: {item.editorial.basis}</div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  {item.ingredients && <ExpandableIngredients ingredients={item.ingredients} />}

                  <div className="mt-auto pt-6 border-t border-zinc-200 flex flex-col gap-3">
                    {/* Action Button */}
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-zinc-950 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 hover:bg-zinc-800 rounded-sm hover:-translate-y-0.5"
                    >
                      Bei Amazon ansehen <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                    <div className="text-center text-[10px] text-zinc-400 font-sans">
                      {item.labels && item.labels.includes('Affiliate-Link') && (
                        <span>* Affiliate-Link. Kauf unterstützt diese Seite ohne Mehrkosten.</span>
                      )}
                    </div>
                  </div>
                  
                </article>
              );
            })}
          </div>
        )}
      </section>
      <br/>
      <br/>
    </>
  );
}
