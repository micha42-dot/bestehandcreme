import React, { useState, useMemo } from 'react';
import { recommendations, allTags, allCountries, allIngredients } from '../data';
import { Search, Check, ChevronDown } from 'lucide-react';

export function DetailsView() {
  const [detailsSearchTerm, setDetailsSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return recommendations.filter(item => {
      let match = true;
      
      if (detailsSearchTerm !== '') {
        const s = detailsSearchTerm.toLowerCase();
        match = item.brand.toLowerCase().includes(s) || 
                item.name.toLowerCase().includes(s);
      }

      if (match && selectedTags.length > 0) {
        match = selectedTags.every(tag => item.tags.includes(tag));
      }

      if (match && selectedCountries.length > 0) {
        match = selectedCountries.includes(item.country);
      }

      if (match && selectedIngredients.length > 0) {
        const lowerIngs = item.ingredients.toLowerCase();
        match = selectedIngredients.every(ing => lowerIngs.includes(ing.toLowerCase()));
      }

      return match;
    });
  }, [detailsSearchTerm, selectedTags, selectedCountries, selectedIngredients]);

  const toggleSelection = (
    item: string, 
    list: string[], 
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const resetFilters = () => {
    setDetailsSearchTerm('');
    setSelectedTags([]);
    setSelectedCountries([]);
    setSelectedIngredients([]);
  };

  return (
    <section className="px-8 lg:px-16 py-12 mx-auto xl:max-w-7xl">
      <div className="max-w-3xl mb-12">
        <h1 className="font-medium text-3xl mb-4 tracking-tight leading-none text-zinc-950">
          Data Query Interface
        </h1>
        <p className="text-base text-zinc-700 font-mono">
          Kombinieren Sie Filterparameter zur präzisen Eingrenzung der Index-Daten.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Controls */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
          {/* Search */}
          <div className="p-5 border border-zinc-200 rounded-sm bg-white shadow-sm">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Freitext</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-500">
                <Search className="w-3.5 h-3.5" />
              </div>
              <input 
                type="text" 
                placeholder="Marke / Name" 
                value={detailsSearchTerm}
                onChange={(e) => setDetailsSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-300 rounded-sm focus:outline-none focus:border-blue-700 outline-none transition-colors text-sm font-mono placeholder-zinc-400 text-zinc-900"
              />
            </div>
          </div>

          {/* Attributes */}
          <div className="p-5 border border-zinc-200 rounded-sm bg-white shadow-sm flex flex-col relative">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block flex-shrink-0">Attribute</label>
            <div className="relative overflow-hidden group/scroll">
              <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2 pb-8 custom-scrollbar relative z-0">
                {allTags.map(tag => (
                  <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedTags.includes(tag) ? 'bg-zinc-900 border-zinc-900' : 'bg-white border-zinc-300 group-hover:border-zinc-500'}`}>
                      {selectedTags.includes(tag) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-mono text-zinc-700 select-none">{tag}</span>
                    <input type="checkbox" className="hidden" checked={selectedTags.includes(tag)} onChange={() => toggleSelection(tag, selectedTags, setSelectedTags)} />
                  </label>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none flex items-end justify-center pb-1 z-10 transition-opacity duration-300 group-hover/scroll:opacity-0">
                <ChevronDown className="w-4 h-4 text-zinc-400 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Country */}
          <div className="p-5 border border-zinc-200 rounded-sm bg-white shadow-sm">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block">Herstellung</label>
            <div className="flex flex-col gap-3">
              {allCountries.map(country => (
                <label key={country} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedCountries.includes(country) ? 'bg-zinc-900 border-zinc-900' : 'bg-white border-zinc-300 group-hover:border-zinc-500'}`}>
                    {selectedCountries.includes(country) && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <span className="text-sm font-mono text-zinc-700 select-none">{country}</span>
                  <input type="checkbox" className="hidden" checked={selectedCountries.includes(country)} onChange={() => toggleSelection(country, selectedCountries, setSelectedCountries)} />
                </label>
              ))}
            </div>
          </div>

          {/* Key Ingredients */}
          <div className="p-5 border border-zinc-200 rounded-sm bg-white shadow-sm flex flex-col relative">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 block flex-shrink-0">Wirkstoffe</label>
            <div className="relative overflow-hidden group/scroll">
              <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2 pb-8 custom-scrollbar relative z-0">
                {allIngredients.map(ing => (
                  <label key={ing} className="flex items-center gap-3 cursor-pointer group" title={ing}>
                    <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${selectedIngredients.includes(ing) ? 'bg-blue-700 border-blue-700' : 'bg-white border-zinc-300 group-hover:border-zinc-500'}`}>
                      {selectedIngredients.includes(ing) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <span className="text-sm font-mono text-zinc-700 select-none truncate">{ing}</span>
                    <input type="checkbox" className="hidden" checked={selectedIngredients.includes(ing)} onChange={() => toggleSelection(ing, selectedIngredients, setSelectedIngredients)} />
                  </label>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none flex items-end justify-center pb-1 z-10 transition-opacity duration-300 group-hover/scroll:opacity-0">
                <ChevronDown className="w-4 h-4 text-zinc-400 animate-bounce" />
              </div>
            </div>
          </div>

        </aside>

        {/* Data Table */}
        <div className="flex-grow">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-zinc-500 border-b border-zinc-200 pb-4">
            <span>{filtered.length} Ergebnis(se)</span>
            <button onClick={resetFilters} className="hover:text-zinc-950 transition-colors uppercase tracking-widest cursor-pointer underline decoration-zinc-300 underline-offset-4">Reset Query</button>
          </div>

          <div className="overflow-x-auto border border-zinc-200 rounded-sm bg-white shadow-sm">
            <table className="w-full text-left font-mono text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50 uppercase text-xs tracking-widest text-zinc-500 font-bold">
                  <th className="px-5 py-4 font-normal">ID</th>
                  <th className="px-5 py-4 font-normal">Marke</th>
                  <th className="px-5 py-4 font-normal min-w-[200px]">Produkt</th>
                  <th className="px-5 py-4 font-normal">Preis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {filtered.map(item => (
                  <tr key={item.id} className="hover:bg-zinc-50 transition-colors group">
                    <td className="px-5 py-4 text-blue-700 font-bold">.0{item.id}</td>
                    <td className="px-5 py-4 text-zinc-900">{item.brand}</td>
                    <td className="px-5 py-4 text-zinc-700 font-sans font-medium line-clamp-1 border-b-0">{item.name}</td>
                    <td className="px-5 py-4 text-zinc-600">{item.priceLevel}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-5 py-12 text-center text-zinc-500">Keine Datensätze gefunden</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
