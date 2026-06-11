import React, { useState, useMemo } from 'react';
import { filterCategories, categoryMapping, recommendations } from '../data';
import { Search, Filter, Sparkles, Leaf, Droplets, Info, MoveRight } from 'lucide-react';

const IconMap: Record<string, React.FC<any>> = {
  sparkles: Sparkles,
  leaf: Leaf,
  droplets: Droplets,
};

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
          "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "url": item.link,
            "availability": "https://schema.org/InStock"
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
        <div className="max-w-3xl">
          <h1 className="font-medium text-4xl mb-6 tracking-tight leading-none text-zinc-950">
            Die <span className="bg-yellow-300 text-blue-800 px-2 py-0.5 rounded-sm">nerdige</span> Handpflege-Datenbank.
          </h1>
          <p className="text-base md:text-lg text-zinc-700 max-w-2xl font-normal leading-relaxed mb-10">
            Keine algorithmische Selektion. Hierbei handelt es sich um eine privat getestete, manuell kuratierte Handcreme-Datenbank. Empfehlungen auf privaten Erfahrungen und Inhaltsstoffen.
          </p>

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
        <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
          {/* Info & Label */}
          <div className="flex items-center gap-3 select-none">
            <div className="bg-zinc-200/60 p-2 rounded-sm text-zinc-700 shrink-0">
              <Filter className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-950 block">Schnellfilter nach Kriterien</span>
              <p className="text-[10px] text-zinc-500 font-mono">Wähle ein Attribut zur schnellen Eingrenzung</p>
            </div>
          </div>
          
          {/* Divider inside box for mobile, hide on desktop */}
          <div className="h-px bg-zinc-200 md:hidden w-full"></div>

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
                  <div className="aspect-[4/5] bg-zinc-100 mb-8 overflow-hidden relative rounded-sm border border-zinc-200">
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
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-zinc-200 p-2 rounded-sm text-blue-700">
                      <IconComp className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Data & Origin */}
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-600 mb-4 font-bold">
                    <span className="text-blue-700">ID.0{item.id}</span>
                    <span className="w-8 h-[1px] bg-amber-400"></span>
                    <span>{item.country}</span>
                  </div>

                  {/* Brand & Name */}
                  <h2 className="font-bold text-xl text-zinc-950 tracking-tight">{item.brand}</h2>
                  <h2 className="font-semibold text-lg text-zinc-800 mb-4 tracking-tight leading-snug line-clamp-2">{item.name}</h2>

                  {/* Description */}
                  <p className="text-zinc-700 text-base leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Details List */}
                  {item.details && item.details.length > 0 && (
                    <ul className="mb-8 space-y-2.5 text-base text-zinc-700 flex-grow">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-zinc-400 mt-0.5 flex-shrink-0 font-bold">—</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    <span className="text-xs font-mono bg-amber-200 text-amber-950 px-2.5 py-1 rounded-sm flex items-center justify-center min-w-[32px] font-bold">
                      {item.priceLevel}
                    </span>
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono border border-zinc-200 text-zinc-700 px-2.5 py-1 rounded-sm bg-zinc-50 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Price Justification */}
                  {item.priceJustification && (
                    <div className="mb-6 p-4 border border-zinc-200 bg-zinc-50/50 rounded-sm text-sm text-zinc-700 flex items-start gap-3 leading-relaxed">
                      <Info className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" />
                      <p>
                        <strong className="font-mono text-xs uppercase text-zinc-900 block mb-1 font-bold">Preislogik</strong> 
                        {item.priceJustification}
                      </p>
                    </div>
                  )}

                  {/* Ingredients */}
                  {item.ingredients && (
                    <div className="mb-8 border-t border-zinc-200 pt-5 mt-2">
                      <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2.5">Hauptinhaltsstoffe (Auszug)</h4>
                      <p className="text-xs text-zinc-600 font-mono leading-relaxed break-words bg-zinc-50 p-3 border border-zinc-200 rounded-sm">
                        {item.ingredients}
                      </p>
                    </div>
                  )}

                  {/* Action Button */}
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-blue-700 text-white text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 hover:bg-blue-800 rounded-sm hover:-translate-y-0.5"
                  >
                    Auf Amazon kaufen <MoveRight className="w-4 h-4" />
                  </a>
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
