import React, { useState, useMemo } from 'react';
import { ingredientDictionary } from '../data';
import { Search } from 'lucide-react';

export function IngredientsView() {
  const [ingredientsSearchTerm, setIngredientsSearchTerm] = useState('');

  const filteredIngredientsList = useMemo(() => {
    const query = ingredientsSearchTerm.toLowerCase();
    return Object.entries(ingredientDictionary).filter(([name, data]) => {
      return query === '' || 
             name.toLowerCase().includes(query) || 
             data.category.toLowerCase().includes(query) ||
             data.description.toLowerCase().includes(query);
    });
  }, [ingredientsSearchTerm]);

  return (
    <section className="px-8 lg:px-16 pt-16 pb-12 mx-auto xl:max-w-7xl">
      <div className="max-w-3xl mb-12">
        <h1 className="font-medium text-3xl mb-6 tracking-tight leading-none text-zinc-950">
          Wirkstoff-Referenz
        </h1>
        <p className="text-base text-zinc-700 font-mono leading-relaxed">
          Ein technischer Überblick zentraler kosmetischer und dermatologischer Inhaltsstoffe (INCI).
        </p>
        <div className="relative max-w-md mt-8">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-zinc-500">
            <Search className="w-4 h-4" />
          </div>
          <input 
            type="text" 
            placeholder="Wirkstoff, Kategorie..." 
            value={ingredientsSearchTerm}
            onChange={(e) => setIngredientsSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-zinc-300 rounded-sm focus:outline-none focus:border-blue-700 outline-none transition-colors text-sm font-mono text-zinc-900 placeholder-zinc-500 shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredIngredientsList.map(([name, data]) => (
          <div key={name} className="border border-zinc-200 rounded-sm bg-white p-6 shadow-sm flex flex-col items-start hover:border-zinc-300 transition-colors">
            <div className="mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-zinc-100 text-zinc-600 rounded-sm font-bold border border-zinc-200">
                {data.category}
              </span>
            </div>
            <h3 className="text-xl font-bold font-mono text-zinc-950 mb-3">{name}</h3>
            <p className="text-base text-zinc-700 mb-6 font-normal leading-relaxed">{data.description}</p>
            
            <div className="w-full space-y-4 font-mono text-xs mt-auto border-t border-zinc-100 pt-5">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3 text-zinc-500 uppercase tracking-widest font-bold pt-1">Effekt</div>
                <div className="col-span-12 md:col-span-9 text-zinc-800 leading-relaxed">{data.effect}</div>
              </div>
              <div className="grid grid-cols-12 gap-4 border-t border-zinc-50 pt-4">
                <div className="col-span-12 md:col-span-3 text-zinc-500 uppercase tracking-widest font-bold pt-1">Dosis</div>
                <div className="col-span-12 md:col-span-9 text-zinc-800 leading-relaxed">{data.concentration}</div>
              </div>
              <div className="grid grid-cols-12 gap-4 border-t border-zinc-50 pt-4">
                <div className="col-span-12 md:col-span-3 text-zinc-500 uppercase tracking-widest font-bold pt-1">Verträglichkeit</div>
                <div className="col-span-12 md:col-span-9 text-zinc-800 leading-relaxed">{data.sideEffects}</div>
              </div>
            </div>
          </div>
        ))}

        {filteredIngredientsList.length === 0 && (
          <div className="col-span-full py-16 text-center border border-dashed border-zinc-300 text-zinc-500 font-mono text-sm bg-zinc-50 rounded-sm">
            Keine passenden Wirkstoffe gefunden.
          </div>
        )}
      </div>
      <br/>
      <br/>
    </section>
  );
}
