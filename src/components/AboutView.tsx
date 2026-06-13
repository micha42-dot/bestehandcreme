import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function AboutView() {
  return (
    <section className="px-8 lg:px-16 pt-12 pb-24 mx-auto xl:max-w-4xl min-h-[60vh]">
      <div className="max-w-3xl">
        <h1 className="font-semibold text-3xl mb-8 tracking-tight text-zinc-950">
          Über diese Seite
        </h1>

        <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-sm shadow-sm md:flex-row md:items-start justify-between gap-8 grid grid-cols-1 md:grid-cols-2 mb-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-4">Was diese Seite ist – und was nicht</h3>
            <ul className="text-sm text-zinc-700 space-y-3 font-sans">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> privates Projekt</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> keine medizinische Beratung</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> kein Labortest</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-zinc-400" /> Affiliate-Links können vorkommen</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-4">Wie ich Handcremes einschätze</h3>
            <p className="text-xs text-zinc-600 leading-relaxed font-mono">
              Ich bewerte Handcremes nach Inhaltsstoffen, Hautgefühl, persönlicher Erfahrung, Preis-Leistung und möglichem Einsatzbereich. Besonders achte ich auf feuchtigkeitsspendende Inhaltsstoffe wie Glycerin oder Urea, rückfettende Bestandteile, Duftstoffe, Konsistenz, Einziehverhalten und darauf, ob ein Produkt eher für Alltag, Winter, rissige Hände oder empfindliche Haut geeignet ist. Nicht jede Creme wurde gleich intensiv getestet; wo eine Einschätzung nur auf Inhaltsstoffen und Herstellerangaben basiert, sollte das sichtbar gekennzeichnet sein.
            </p>
          </div>
        </div>
        
        <div className="prose prose-zinc prose-a:text-blue-600 max-w-none space-y-6 text-zinc-700 leading-relaxed font-sans text-base">
          <p>
            Hallo! Schön, dass du hier bist. 
            Diese Seite ist aus einem ganz persönlichen Problem entstanden: Ich hatte ständig trockene Hände und war genervt davon, blind irgendwelche Handcremes in der Drogerie zu kaufen, die entweder ewig klebten oder nach zehn Minuten schon wieder ein trockenes Gefühl hinterließen.
          </p>
          
          <p>
            Also habe ich angefangen, mir die Rückseiten der Tuben genauer anzusehen. Was ist da eigentlich drin? Warum funktioniert Creme A bei mir besser als Creme B? 
            Aus dieser kleinen Neugier wurde schnell eine Faszination für Inhaltsstoffe – von harmlosen Feuchtigkeitsspendern wie Glycerin und Urea bis hin zu okklusiven Stoffen wie Sheabutter oder Ceramiden.
          </p>

          <p>
            Ich sammle hier nun (meiner Meinung nach) interessante oder gut formulierte Handcremes, vergleiche ihre Inhaltsstoffe und versuche einzuordnen, für welches Hautbedürfnis sie am besten geeignet sind. Manche Produkte habe ich selbst ausführlich getestet und im Alltag im Einsatz. Andere landen hier, weil ich ihren INCI-Check (die Inhaltsstoff-Liste) besonders spannend oder vielversprechend finde.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-4 text-zinc-900">Transparenz zu den Kauf-Links (Affiliate)</h3>
          <p>
            Diese Seite ist werbefrei (es gibt keine Banner oder bezahlten Pop-Ups). 
            Um die Kosten für den Server und die Domain zu decken, nutze ich sogenannte <strong>Affiliate- oder Referral-Links</strong>.
          </p>
          <p>
            Einige der "Bei Amazon ansehen"-Buttons sind mit solchen Links versehen. Wenn du auf einen dieser Links klickst und das Produkt kaufst, erhalte ich eventuell eine kleine Provision. <strong>Für dich ändert sich der Preis dadurch nicht.</strong> 
          </p>
          <p>
            Ich ordne kein Produkt künstlich weiter oben ein oder erfinde gute Bewertungen, nur um Provisionen zu kassieren. Die Empfehlungen entstehen trotzdem aus meiner eigenen Einschätzung, meinen Erfahrungen und dem transparenten Blick auf die Inhaltsstoffe.
          </p>
        </div>
      </div>
    </section>
  );
}
