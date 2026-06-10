export interface Product {
  id: string;
  country: string;
  brand: string;
  name: string;
  description: string;
  tags: string[];
  priceLevel: string;
  priceJustification: string;
  ingredients: string;
  details: string[];
  icon: string;
  image: string;
  link: string;
}

export const recommendations: Product[] = [
  {
    id: "01",
    country: 'Südkorea',
    brand: 'Dr.Jart+',
    name: 'Ceramidin Moisturizing Hand Cream',
    description: "Stärkt die Hautbarriere mit einem 5-Cera-Komplex (Ceramide). Eine pragmatische Lösung für strukturell trockene oder rissige Haut, die intensiv und langanhaltend Feuchtigkeit bindet.",
    tags: ['Ceramide', 'Barriereschutz', 'Intensiv'],
    priceLevel: '€€',
    priceJustification: 'Das patentierte Ceramid-Komplex-Verfahren baut die Hautstruktur aktiv auf. Man zahlt hier für medizinisch inspirierte Barriere-Reparatur, nicht nur für oberflächliche Feuchtigkeit.',
    ingredients: 'Water, Glycerin, Cetearyl Alcohol, Cetyl Ethylhexanoate, Ethylhexyl Stearate, Glyceryl Stearate, Butylene Glycol, Ceramide NP, Ceramide AP, Ceramide AS, Ceramide NS, Ceramide EOP, Panthenol, Trehalose, Phytosphingosine, Cholesterol.',
    details: [
      "Nutzt einen patentierten 5-Cera-Komplex (Ceramide) zum langfristigen strukturellen Aufbau der Hautbarriere.",
      "Cremige Textur, die nicht fettet und keinen schmierigen Film auf Dokumenten oder Keyboards hinterlässt.",
      "Dermatologisch erprobt für extrem trockene, beanspruchte Haut (z.B. nach häufigem Händewaschen).",
      "Kommt ohne Sulfate, Parabene oder Phthalate aus."
    ],
    icon: 'sparkles',
    image: './bilder/dr_jart.jpg',
    link: 'https://amzn.to/4e9qDh5',
  },
  {
    id: "02",
    country: 'Deutschland',
    brand: 'Jean & Len',
    name: 'Silky & Rich Treatment — Rosemary & Ginger',
    description: "Eine verlässliche, vegane Handpflege mit einem würzig-frischen Profil aus Rosmarin und Ingwer. Zieht zügig ein und konzentriert sich auf das Wesentliche.",
    tags: ['Vegan', 'Würzig', 'Zieht schnell ein'],
    priceLevel: '€',
    priceJustification: 'Ein sehr gutes Preis-Leistungs-Verhältnis. Die Marke verzichtet auf teure Exoten und bietet stattdessen grundsolide vegane Basispflege zum fairen Kurs.',
    ingredients: 'Aqua, Cetearyl Alcohol, Glycerin, Dicaprylyl Carbonate, Helianthus Annuus Seed Oil, Glyceryl Stearate Citrate, Parfum, Panthenol, Rosmarinus Officinalis Leaf Extract, Zingiber Officinale Root Extract, Sodium Cetearyl Sulfate, Linalool, Limonene.',
    details: [
      "Zieht extrem schnell ein – daher optimal für den Schreibtisch oder unterwegs.",
      "Hinterlässt einen belebenden, unsüßen Unisex-Duft nach Rosmarin und Ingwer.",
      "Liefert solide Basisfeuchtigkeit, aber für raue Winterhände eventuell etwas zu leicht.",
      "Strikt vegan, ohne Parabene, Silikone oder Mikroplastik (\"Ohne Gedöns\")."
    ],
    icon: 'leaf',
    image: './bilder/jean_len_rosemary.jpg',
    link: 'https://amzn.to/3PQfbip',
  },
  {
    id: "03",
    country: 'Deutschland',
    brand: 'Jean & Len',
    name: 'Silky & Rich Treatment — Bergamot & Cedarwood',
    description: "Reichhaltige Formulierung, die trotz intensiver Pflegewirkung kein klebriges Gefühl hinterlässt. Das Duftprofil aus Bergamotte und Zedernholz wirkt erdig und unaufdringlich.",
    tags: ['Holzig', 'Frisch', 'Vegan'],
    priceLevel: '€',
    priceJustification: 'Ebenfalls starke Preis-Leistung. Das komplexe, holzige Duftprofil findet man oft erst in teureren Nischenprodukten, hier gibt es das in einem zugänglichen Format.',
    ingredients: 'Aqua, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Prunus Amygdalus Dulcis Oil, Butyrospermum Parkii Butter, Parfum, Sodium Cetearyl Sulfate, Panthenol, Citrus Aurantium Bergamia Fruit Oil, Cedrus Atlantica Bark Oil, Limonene, Linalool.',
    details: [
      "Pflegt durch die 'Silky & Rich'-Textur etwas intensiver als die Rosemary & Ginger Variante.",
      "Edler, warmer Duft nach Zedernholz mit einer frischen Spitze von Bergamotte.",
      "Braucht einen kurzen Moment zum Einziehen, hinterlässt dann aber ein weiches Hautgefühl.",
      "Ebenfalls komplett vegan und ohne irritierende Zusatzstoffe."
    ],
    icon: 'leaf',
    image: './bilder/jean_len_bergamot.jpg',
    link: 'https://amzn.to/4fwQ1je',
  },
  {
    id: "04",
    country: 'Frankreich',
    brand: "L'Occitane en Provence",
    name: 'Crème Mains Beurre de Karité',
    description: "Eine bewährte Formulierung mit 20% Sheabutter, Honig und Mandelextrakt. Sie pflegt beanspruchte Haut effektiv, zieht gut ein und verringert das Trockenheitsgefühl nachhaltig.",
    tags: ['Reichhaltig', 'Sheabutter', 'Klassiker'],
    priceLevel: '€€€',
    priceJustification: 'Die Formulierung mit satten 20% Bio-Sheabutter treibt den Preis nach oben, macht das Produkt aber auch extrem ergiebig. Eine kleine Menge reicht völlig aus.',
    ingredients: 'Aqua/Water, Butyrospermum Parkii (Shea) Butter, Glycerin, Dimethicone, Cetearyl Alcohol, Glyceryl Stearate, Linum Usitatissimum Seed Extract, Mel Extract/Honey Extract, Prunus Amygdalus Dulcis Fruit Extract, Ceteareth-33, Polyacrylamide, C13-14 Isoparaffin.',
    details: [
      "Der weltweite Bestseller der Marke – formuliert mit 20% feuchtigkeitsspendender Bio-Sheabutter.",
      "Sehr ergiebig; eine kleine, erbsengroße Menge reicht meist für beide Hände.",
      "Legt sich zunächst als spürbarer Schutzfilm auf die Haut, heilt dadurch aber auch rissige Stellen sehr effizient.",
      "Duftet klassisch, gepflegt und unaufdringlich sauber."
    ],
    icon: 'droplets',
    image: './bilder/loccitane.jpg',
    link: 'https://amzn.to/3QxWIr1',
  },
  {
    id: "05",
    country: 'Frankreich',
    brand: 'Biotherm',
    name: 'Biomains Handcreme',
    description: "Eine bewährte Anti-Aging-Handpflege, die die Haut mit Feuchtigkeit versorgt und den natürlichen Schutzfilm durch D-Panthenol stärkt.",
    tags: ['Anti-Aging', 'Feuchtigkeit', 'D-Panthenol'],
    priceLevel: '€€€',
    priceJustification: 'Das Budget fließt hier in die funktionalen Anti-Aging-Wirkstoffe (Life Plankton™, D-Panthenol). Es handelt sich um eine Kur für Hände und Nägel, nicht um eine einfache Alltagscreme.',
    ingredients: 'Aqua, Glycerin, Cetearyl Alcohol, Zea Mays Starch, Olea Europaea Fruit Oil, Panthenol, Sesamum Indicum Seed Oil, Stearic Acid, Palmitic Acid, Vitreoscilla Ferment, Sodium Cetearyl Sulfate, Parfum.',
    details: [
      "Zielt neben reiner Feuchtigkeitspflege auch auf die Prävention von Altersanzeichen und Pigmentflecken ab.",
      "Stärkt durch D-Panthenol die Nägel und pflegt die Nagelhaut intensiv mit.",
      "Zieht trotz der Formulierung zügig ein und bildet einen wasserfesten Handschuh-Effekt.",
      "Der enthaltene Life Plankton™-Extrakt wirkt beruhigend auf gereizte Hautschichten."
    ],
    icon: 'droplets',
    image: './bilder/biotherm.jpg',
    link: 'https://amzn.to/4umWcKn',
  },
  {
    id: "06",
    country: 'Deutschland',
    brand: 'Dr. Hauschka',
    name: 'Hydrating Hand Cream',
    description: "Ein Klassiker der zertifizierten Naturkosmetik, der auf Pflanzenextrakten basiert. Reguliert den Feuchtigkeitshaushalt, ohne einen schmierigen Film zu hinterlassen.",
    tags: ['Naturkosmetik', 'Botanisch', 'Alltag'],
    priceLevel: '€€',
    priceJustification: 'Die Inhaltsstoffe stammen größtenteils aus zertifiziert biodynamischem Anbau. Diese strenge Form der Naturkosmetik und die aufwändige Rohstoffbeschaffung erklären den Aufpreis.',
    ingredients: 'Water (Aqua), Alcohol, Glycerin, Althaea Officinalis Root Extract, Anthyllis Vulneraria Extract, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Cetearyl Alcohol, Beeswax (Cera Alba), Prunus Spinosa Flower Extract, Arachis Hypogaea (Peanut) Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Triticum Vulgare (Wheat) Germ Oil.',
    details: [
      "Enthält Extrakte aus Brutblatt, Wundklee und Eibischwurzel zur natürlichen Feuchtigkeitsregulierung.",
      "Zieht rasch ein und ist daher besonders praxistauglich für die Nutzung im Büro oder Alltag.",
      "Zertifizierte Naturkosmetik – konsequent frei von synthetischen Duft-, Farb- und Konservierungsstoffen.",
      "Der krautig-natürliche Duft ist dezent und verfliegt relativ schnell nach dem Auftragen."
    ],
    icon: 'leaf',
    image: './bilder/dr_hauschka.jpg',
    link: 'https://amzn.to/43gjSVP',
  },
  {
    id: "07",
    country: 'Deutschland',
    brand: 'Sebamed',
    name: 'Intensive Handcreme',
    description: "Medizinische Pflege mit pH-Wert 5,5 und Panthenol. Fokussiert sich auf die Regeneration beanspruchter Hände ohne irritierende Zusätze.",
    tags: ['pH < 5,5', 'Panthenol', 'Medizinisch'],
    priceLevel: '€',
    priceJustification: 'Ein zugängliches Apotheken- bzw. Drogerieprodukt. Der Preis geht direkt in die bewährte und hautverträgliche Formulierung ohne Marketing-Aufschlag.',
    ingredients: 'Aqua, Persea gratissima oil, Urea, Hydrogenated Olive Oil, Glycerin, Panthenol, Cetearyl Alcohol, Glyceryl Stearate Citrate, Butyrospermum parkii butter, Allantoin, Sodium Carbomer, Citric Acid, Parfum.',
    details: [
      "Stärkt den natürlichen Säureschutzmantel der Haut durch den charakteristischen pH-Wert von 5,5.",
      "Enthält Panthenol zur aktiven Förderung der Hautregeneration.",
      "Eher leichte Textur, die schnell einzieht und für den häufigen Gebrauch geeignet ist.",
      "Besonders verträglich bei sensibler und zu Irritationen neigender Haut."
    ],
    icon: 'leaf',
    image: './bilder/sebamed.jpg',
    link: 'https://amzn.to/4fwoy1c',
  },
  {
    id: "08",
    country: 'USA',
    brand: 'Neutrogena',
    name: 'Sofort einziehende Handcreme',
    description: "Auf Glycerin-Basis formulierte, leichte Handcreme, die speziell dafür entwickelt wurde, ohne Rückstände extrem schnell einzuziehen.",
    tags: ['Glycerin', 'Zieht schnell ein', 'Leicht'],
    priceLevel: '€',
    priceJustification: 'Ein pragmatisches Drogerie-Produkt ohne großen Schnickschnack. Man bezahlt für pure Funktionalität und eine verlässliche Alltagsleistung.',
    ingredients: 'Aqua, Glycerin, Paraffinum Liquidum, Isopropyl Palmitate, Petrolatum, Stearyl Alcohol, Dimethicone, Glyceryl Stearate, PEG-100 Stearate, Panthenol, Allantoin, Palmitic Acid, Stearic Acid.',
    details: [
      "Fokussiert sich auf einen leichten Schutzfilm, der nach dem Auftragen direkt abtrocknet.",
      "Gut für den Büroalltag geeignet, da Touchscreens und Tastaturen sofort wieder bedienbar sind.",
      "Spendet Feuchtigkeit hauptsächlich durch einen hohen Glycerin-Anteil.",
      "Die Pflegewirkung ist solide, für extrem beanspruchte Winterhände jedoch oft zu leicht."
    ],
    icon: 'droplets',
    image: './bilder/neutrogena.jpg',
    link: 'https://amzn.to/4fwoEpA',
  },
  {
    id: "09",
    country: 'Deutschland',
    brand: 'Eubos',
    name: 'Hand Repair & Schutz',
    description: "Eine bewährte Apothekencreme, die mit Provitamin B5 und Allantoin einen spürbaren Schutzfilm aufbaut.",
    tags: ['Apotheke', 'Schutzfilm', 'Allantoin'],
    priceLevel: '€',
    priceJustification: 'Apothekenexklusives Produkt mit verlässlicher Hautverträglichkeit und nachgewiesener Schutzwirkung. Gute Preis-Leistung angesichts der Ergiebigkeit.',
    ingredients: 'Aqua, Glycerin, Cetearyl Alcohol, Cetearyl Ethylhexanoate, Isohexadecane, Sorbitol, Alcohol, Butyrospermum Parkii (Shea) Butter, Dimethicone, Panthenol, Allantoin, Tocopheryl Acetate.',
    details: [
      "Bildet einen mikrofeinen Schmierfilm, der wie ein unsichtbarer Handschuh vor Umwelteinflüssen schützt.",
      "Allantoin und Provitamin B5 fördern aktiv die Heilung rauer, rissiger Hautpartien.",
      "Die etwas kompaktere Textur benötigt einen Moment zum Einziehen.",
      "Wird oft von Dermatologen bei irritierter Haut oder Neigung zu Ekzemen empfohlen."
    ],
    icon: 'leaf',
    image: './bilder/eubos.jpg',
    link: 'https://amzn.to/4etF152',
  },
  {
    id: "10",
    country: 'Deutschland',
    brand: 'Eucerin',
    name: 'UreaRepair 5% Urea Handcreme',
    description: "Spezialpflege mit 5% Urea zur effektiven Bindung von Feuchtigkeit. Konzipiert für extrem trockene, schuppige oder juckende Hautoberflächen.",
    tags: ['Urea', 'Medizinisch', 'Extrem trocken'],
    priceLevel: '€€',
    priceJustification: 'Der höhere Preis reflektiert die klinisch getestete Formulierung mit 5% Urea und Ceramiden, die aktiv medizinische Probleme extrem trockener Haut lindert.',
    ingredients: 'Aqua, Glycerin, Urea, Dibutyl Adipate, Glyceryl Stearate, Stearyl Alcohol, Dicaprylyl Ether, Cetearyl Alcohol, Sodium Lactate, Tapioca Starch, Glyceryl Stearate SE, Ceramide NP, Lactic Acid, Arginine HCL.',
    details: [
      "5% Urea (Harnstoff) bindet Feuchtigkeit extrem effektiv in den oberen Hautschichten.",
      "Zusätzlich enthaltene Ceramide stärken die aus dem Gleichgewicht geratene Hautbarriere.",
      "Sehr gut verträglich bei Neigung zu Neurodermitis, Psoriasis oder altersbedingter Hauttrockenheit.",
      "Zieht gut ein, hinterlässt aber ein mattes, gepflegtes Gefühl statt einer fettigen Schicht."
    ],
    icon: 'droplets',
    image: './bilder/eucerin.jpg',
    link: 'https://amzn.to/4ulOn7S',
  },
  {
    id: "11",
    country: 'Südkorea',
    brand: 'Haruharu Wonder',
    name: 'Black Bamboo Nourishing Calming Hand & Nail Cream',
    description: "Tief nährende Creme für Hände und Nagelhaut, die auf fermentiertem Schwarzbambus(-extrakten) als Antioxidans und Feuchtigkeitsspender basiert.",
    tags: ['Bambus', 'Vegan', 'Nagelhaut', 'Naturkosmetik'],
    priceLevel: '€€',
    priceJustification: 'Preispunkt entspricht einer hochwertigen koreanischen Skincare-Formulierung, die fermentierte Pflanzenextrakte statt Standard-Wasser nutzt.',
    ingredients: 'Phyllostachys Nigra Extract (Black Bamboo 50%), Water, Glycerin, Cetearyl Alcohol, Astrocaryum Murumuru Seed Butter, Caprylic/Capric Triglyceride, Sodium Hyaluronate.',
    details: [
      "Basiert auf 50% fermentiertem Schwarzbambus-Extrakt anstelle von normalem Wasser.",
      "Murumuru-Butter nährt intensiv, ohne lang auf der Haut zu stehen.",
      "Spezifische Pflege, die raue Nagelhaut nachhaltig aufweicht und einreißende Ränder minimiert.",
      "Komplett vegan, cruelty-free und ohne Parabene sowie künstliche Duftstoffe."
    ],
    icon: 'leaf',
    image: './bilder/haruharu.jpg',
    link: 'https://amzn.to/3RKoMb8',
  },
  {
    id: "12",
    country: 'Deutschland',
    brand: 'SANTE Naturkosmetik',
    name: 'Anti Aging Handcreme',
    description: "Zertifizierte Naturkosmetik mit Bio-Gänseblümchen-Extrakt und Coenzym Q10, speziell auf die Vorbeugung altersbedingter Pigmentflecken ausgerichtet.",
    tags: ['Anti-Aging', 'Naturkosmetik', 'Q10'],
    priceLevel: '€',
    priceJustification: 'Ein ausgezeichnetes Preis-Leistungs-Verhältnis für zertifizierte Bio-Naturkosmetik aus dem Drogeriebereich mit aktiven Anti-Aging Wirkstoffen wie Q10.',
    ingredients: 'Aqua, Alcohol, Glycerin, Cetearyl Alcohol, Butyrospermum Parkii Butter, Bellis Perennis (Daisy) Flower Extract, Ubiquinone (Q10), Sodium Cetearyl Sulfate.',
    details: [
      "Coenzym Q10 wirkt freien Radikalen entgegen und unterstützt die Zellerneuerung.",
      "Bio-Gänseblümchen-Extrakt hilft bei regelmäßiger Anwendung dabei, Pigment- und Altersflecken aufzuhellen.",
      "Ist relativ leicht und zieht dank eines moderaten Alkoholanteils sehr zügig und rückstandslos ein.",
      "Zu 100% zertifizierte, vegane Naturkosmetik ohne Silikone."
    ],
    icon: 'sparkles',
    image: './bilder/sante.jpg',
    link: 'https://amzn.to/4fwU7I8',
  },
  {
    id: "13",
    country: 'Italien',
    brand: 'KIKO Milano',
    name: 'Intensive Hand Cream',
    description: "Eine weiche, schnell einziehende Formulierung für den Alltagstauglichkeit, angereichert mit feuchtigkeitsspendendem Macadamiaöl.",
    tags: ['Intensivpflege', 'Macadamia', 'Alltag'],
    priceLevel: '€',
    priceJustification: 'Günstiges Basic-Produkt der italienischen Make-Up Marke. Ein solider Alltagsbegleiter, dessen Preis für die kompakte Tube fair kalkuliert ist.',
    ingredients: 'Aqua, Glycerin, Macadamia Ternifolia Seed Oil, Cetearyl Alcohol, Dimethicone, Butyrospermum Parkii Butter, Stearic Acid, Parfum, Phenoxyethanol.',
    details: [
      "Spendet angenehme Feuchtigkeit durch Macadamiaöl, ohne klebrig auf der Haut zu liegen.",
      "Das enthaltene Dimethicone (Silikon) sorgt für ein kosmetisch seidiges Gefühl nach dem Eincremen.",
      "Leicht parfümiert mit einem femininen, entspannten Duft.",
      "Ideal für die kleine Handtasche zum Auffrischen zwischendurch."
    ],
    icon: 'droplets',
    image: './bilder/kiko.jpg',
    link: 'https://amzn.to/4xjsFnK',
  },
  {
    id: "14",
    country: 'Südkorea',
    brand: 'skybottle',
    name: 'Perfumed Hand Cream',
    description: "Stark parfümierte Nischen-Handcreme (z.B. White Rain oder Starry Night), die Dufterlebnis und reichhaltige Feuchtigkeit durch Hyaluronsäure vereint.",
    tags: ['Parfümiert', 'Feuchtigkeit', 'Sheabutter'],
    priceLevel: '€€',
    priceJustification: 'Hier bezahlt man zur Hälfte für die sehr komplexe und langanhaltende Duftöl-Komposition, die oft günstiges Eau de Toilette ersetzen kann.',
    ingredients: 'Aqua, Glycerin, Butyrospermum Parkii Butter, Cetearyl Alcohol, Macadamia Seed Oil, Sodium Hyaluronate, Ceramide NP, Fragrance, Stearic Acid.',
    details: [
      "Ersetzt problemlos echtes Parfum: Die Düfte sind hochkomplex und sehr langanhaltend konzipiert.",
      "Hyaluronsäure, Sheabutter und Macadamiaöl spenden trotz des Duftfokus echte, tiefe Feuchtigkeit.",
      "Textur ist samtig und benötigt circa 1-2 Minuten zum vollständigen Einziehen.",
      "Attraktives, minimalistisches Packaging, das hochwertig am Schreibtisch wirkt."
    ],
    icon: 'sparkles',
    image: './bilder/skybottle.jpg',
    link: 'https://amzn.to/4fqWR9T',
  },
  {
    id: "15",
    country: 'Deutschland',
    brand: 'Lindesa',
    name: 'Pflege- und Schutzcreme mit Bienenwachs',
    description: "Ein echter Industrie-Arbeitsschutz-Klassiker. Zieht fast augenblicklich ein und hinterlässt durch Bienenwachs einen spürbaren, aber nicht fettenden Schutzfilm.",
    tags: ['Bienenwachs', 'Schutzfilm', 'Zieht schnell ein'],
    priceLevel: '€',
    priceJustification: 'Extrem günstig. Dies ist eine funktionale Berufs-Hautschutzcreme (oft in Handwerk oder Gastronomie genutzt), die in Großproduktion hergestellt wird.',
    ingredients: 'Aqua, Glyceryl Stearate SE, Paraffinum Liquidum, Cera Alba (Bienenwachs), Stearic Acid, Palmitic Acid, Parfum, Methylparaben.',
    details: [
      "Zieht extrem schnell ein – so formuliert, dass man danach direkt wieder Werkzeug oder Tastaturen bedienen kann.",
      "Cera Alba (Bienenwachs) schützt wie eine leichte Barriere vor Austrocknung durch häufiges Händewaschen.",
      "Ziemlich prägnanter, leicht pudriger, klassischer Cremeduft.",
      "Eher zum Schutz und für leichte Pflege als zur tiefen Regeneration extrem kaputter Hände gedacht."
    ],
    icon: 'leaf',
    image: './bilder/lindesa.jpg',
    link: 'https://amzn.to/43TYfuA',
  },
  {
    id: "16",
    country: 'Deutschland',
    brand: 'Glysolid',
    name: 'Hautbalsam',
    description: "Klassischer, hochkonzentrierter Hautbalsam mit einem extrem hohen Anteil an Glycerin und Allantoin. Komplett parfümfrei und ideal für akut rissige Hände.",
    tags: ['Glycerin', 'Allantoin', 'Extrem trocken', 'Parfümfrei'],
    priceLevel: '€',
    priceJustification: 'Sehr günstiges, bewährtes Traditionsprodukt ohne Marketing-Aufschlag. Die wasserfreie Formulierung (bzw. sehr wassersparsam) ist zudem sehr ergiebig.',
    ingredients: 'Glycerin, Aqua, Cetearyl Alcohol, Decyl Oleate, Ceteareth-12, Allantoin, Dimethicone, Sodium Cetearyl Sulfate, Ceteareth-20, Silica.',
    details: [
      "Stark okklusive Wirkung durch hohen Glycerin-Anteil, zielt auf die rasche Heilung kleiner Risse ab.",
      "Vollkommen parfümfrei und daher sehr gut für Allergiker geeignet.",
      "Textur ist eher pastös und liegt zunächst spürbar auf der Haut, heilt aber intensiv über Nacht.",
      "Der Balsam enthält kein zugesetztes Wasser in der Hauptbasis, was ihn sehr konzentriert macht."
    ],
    icon: 'droplets',
    image: './bilder/glysolid.jpg',
    link: 'https://amzn.to/43mvsyG',
  },
  {
    id: "17",
    country: 'Deutschland',
    brand: 'Salthouse',
    name: 'Therapie Totes Meer Feuchtigkeits-Handcreme',
    description: "Medizinische Pflegeformel, die Original Totes Meer Salz mit Urea und feuchtigkeitsspendendem Panthenol kombiniert, um Juckreiz zu lindern.",
    tags: ['Medizinisch', 'Urea', 'Totes Meer Salz', 'Panthenol'],
    priceLevel: '€',
    priceJustification: 'Ein solides Drogerie-/Apothekenprodukt. Totes Meer Salz als therapeutischer Zusatz bietet einen echten Mehrwert für neurodermitische Haut zu einem fairen Preis.',
    ingredients: 'Aqua, Cetearyl Alcohol, Glycerin, Urea, Glyceryl Stearate, Panthenol, Maris Sal (Dead Sea Salt), Caprylic/Capric Triglyceride, Sodium Cetearyl Sulfate.',
    details: [
      "Totes Meer Salz ist reich an Magnesium und beruhigt juckende, zu Ekzemen neigende Haut.",
      "Urea (Harnstoff) bindet zusätzlich Feuchtigkeit effizient in den tieferen Hautschichten.",
      "Als Basispflege bei Neurodermitis konzipiert und dermatologisch für problematische Haut getestet.",
      "Zieht gut ein und hinterlässt ein geschmeidiges, aber nicht klebriges Gefühl."
    ],
    icon: 'droplets',
    image: './bilder/salthouse.jpg',
    link: 'https://amzn.to/4vzdeG3',
  },
  {
    id: "18",
    country: 'Schweiz',
    brand: 'Excipial',
    name: 'Repair Sensitive Handcreme',
    description: "Spezielle Regenerationspflege für stark strapazierte Hände. Enthält pflegendes Nachtkerzenöl und Jojobaöl, das tief eindringt und die Hautbarriere über Nacht wieder aufbaut.",
    tags: ['Barriereschutz', 'Nachtkerzenöl', 'Apotheke', 'Intensiv'],
    priceLevel: '€€',
    priceJustification: 'Excipial ist eine anerkannte medizinische Dermatologie-Marke (Galderma). Der Preis rechtfertigt sich durch klinische Tests und hochwertige Lipide wie Nachtkerzenöl.',
    ingredients: 'Aqua, Behenyl Alcohol, Limnanthes Alba Seed Oil, Paraffinum Liquidum, Glycerin, Ethylhexyl Palmitate, Panthenol, Cetearyl Alcohol, Niacinamide, Squalane, Ceteth-10, Steareth-20, Dimethicone, Tocopherol.',
    details: [
      "Ideal als Intensivkur (z.B. über Nacht mit Baumwollhandschuhen) nach starker beruflicher Beanspruchung.",
      "Enthält Nachtkerzenöl, welches durch die Gamma-Linolensäure extrem entzündungshemmend und barrierestärkend wirkt.",
      "Frei von Farb- und Parfümstoffen, was eine hohe Verträglichkeit bei Kontaktdermatitis sichert.",
      "Squalane und Niacinamide unterstützen zusätzlich den Reparaturprozess der Epidermis."
    ],
    icon: 'sparkles',
    image: './bilder/excipial.jpg',
    link: 'https://amzn.to/4vDFVBI',
  },
  {
    id: "19",
    country: 'Deutschland',
    brand: 'ISANA',
    name: 'Intensiv Handcreme Urea',
    description: "Preiswerte, hochfunktionelle Rossmann-Eigenmarke mit 5% Urea und Panthenol. Löst milde Verhornungen und hydratisiert extrem trockene Hände.",
    tags: ['Urea', 'Panthenol', 'Extrem trocken', 'Vegan'],
    priceLevel: '€',
    priceJustification: 'Als Drogerie-Eigenmarke bietet ISANA hier ein fast unschlagbares Preis-Leistungs-Verhältnis für eine funktional vollkommen ausreichende 5% Urea-Formel.',
    ingredients: 'Aqua, Urea, Cetearyl Alcohol, Glycerin, Caprylic/Capric Triglyceride, Glyceryl Stearate, Panthenol, Butyrospermum Parkii Butter, Sodium Cetearyl Sulfate, Lactic Acid.',
    details: [
      "Mit 5% Urea (Harnstoff) formuliert, einem der bewährtesten Wirkstoffe zur Feuchtigkeitsbindung.",
      "Panthenol und Sheabutter ergänzen die pflegende und rückfettende Wirkung sinnvoll.",
      "Zieht für eine Urea-Creme erstaunlich gut ein und ist daher auch tagsüber nutzbar.",
      "Rezeptur ohne Mikroplastik und vollständig vegan."
    ],
    icon: 'leaf',
    image: './bilder/isana.jpg',
    link: 'https://amzn.to/4olvlNq',
  }
];

export const filterCategories = [
  'Alle',
  'Vegan',
  'Zieht schnell ein',
  'Intensivpflege',
  'Medizinisch',
  'Naturkosmetik',
  'Anti-Aging',
];

export const categoryMapping: Record<string, string[]> = {
  'Vegan': ['Vegan'],
  'Intensivpflege': ['Intensiv', 'Reichhaltig', 'Extrem trocken', 'Barriereschutz', 'Sheabutter', 'Intensivpflege'],
  'Zieht schnell ein': ['Zieht schnell ein', 'Leicht', 'Alltag'],
  'Medizinisch': ['Medizinisch', 'Apotheke', 'Urea', 'pH < 5,5', 'Panthenol', 'Allantoin'],
  'Naturkosmetik': ['Naturkosmetik', 'Botanisch'],
  'Anti-Aging': ['Anti-Aging', 'D-Panthenol', 'Q10'],
};

export interface IngredientDetails {
  description: string;
  effect: string;
  sideEffects: string;
  concentration: string;
  category: string;
}

export const ingredientDictionary: Record<string, IngredientDetails> = {
  'Ceramide': {
    description: 'Körpereigene Fette (Lipide), die die Hautbarriere stärken und Feuchtigkeitsverlust verhindern.',
    effect: 'Baut die Lipidschicht der Epidermis aktiv auf, schützt vor dem Eindringen von Schadstoffen und verringert transepidermalen Wasserverlust (TEWL).',
    sideEffects: 'Keine bekannt. Als natürlicher Bestandteil der Epidermis ist dieser Wirkstoff extrem gut verträglich und absolut reizarm.',
    concentration: 'Meist zwischen 0,1 % und 1,0 % in Kombination mit Cholesterol und Fettsäuren.',
    category: 'Barriere-Reparatur'
  },
  'Panthenol': {
    description: 'Die Vorstufe des Vitamins B5 (auch Provitamin B5 genannt). Wirkt beruhigend, feuchtigkeitsbindend und zellerneuernd.',
    effect: 'Fördert die Zellteilung und die natürliche Wundheilung, erhöht das Feuchthaltevermögen der Zellen und wirkt stark entzündungshemmend.',
    sideEffects: 'Sehr selten treten leichte Kontaktsensibilisierungen auf, gilt ansonsten als einer der am besten verträglichen Wirkstoffe der Kosmetik.',
    concentration: 'Üblich sind 1,0 % bis 5,0 % zur wirksamen Regeneration beanspruchter oder rissiger Hautzellen.',
    category: 'Heilung & Beruhigung'
  },
  'Sheabutter': {
    description: 'Ein nährstoffreiches Pflanzenfett, das aus den Früchten des afrikanischen Karitébaums extrahiert wird.',
    effect: 'Wirkt intensiv rückfettend, glättet trockene Schuppenschichten, schützt vor kalter Luft und verbessert die Elastizität der Haut spürbar.',
    sideEffects: 'An den Händen völlig unbedenklich. Kann bei extremer Akne-Neigung im Gesicht leicht komedogen (porenverstopfend) wirken.',
    concentration: 'Häufig bis zu 20,0 % in hochdosierten Salben und reichhaltigen Balsamen.',
    category: 'Okklusiver Schutz'
  },
  'Urea': {
    description: 'Harnstoff. Ein hocheffektiver Feuchthaltefaktor, der natürlicherweise im menschlichen Körper vorkommt.',
    effect: 'Zieht Feuchtigkeit an wie ein Magnet und speichert sie in der Haut. Wirkt in höheren Dosen (ab ca. 10 %) keratolytisch (hornhautlösend), glättend und antibakteriell.',
    sideEffects: 'Kann auf akut rissigen, offenen oder stark entzündeten Hautstellen (z. B. bei Neurodermitis-Schüben) kurzzeitig brennen.',
    concentration: 'Standardmäßig 5,0 % zur Hydratation oder 10,0 % zur gezielten Pflege rissiger Hornhaut.',
    category: 'Klinische Feuchtigkeitsbindung'
  },
  'Glycerin': {
    description: 'Ein körpereigener, dreiwertiger Zuckeralkohol, der in Kosmetika meist pflanzlich gewonnen wird.',
    effect: 'Dringt tief in das Stratum corneum ein, stabilisiert das Feuchtigkeitsniveau, mindert Irritationen beim Waschen und hält die Haut weich.',
    sideEffects: 'In kosmetischen Dosen vollkommen sicher. Nur bei unrealistisch reiner Anwendung (ohne Wasseranteile) feuchtigkeitsentziehend.',
    concentration: 'Standardmäßig 5,0 % bis 15,0 %; die bewährte Hydra-Basis fast jeder Handcreme.',
    category: 'Basis-Hydratation'
  },
  'Allantoin': {
    description: 'Ein natürliches Produkt des Pflanzenstoffwechsels, das reichlich in Beinwell oder Kamille vorhanden ist.',
    effect: 'Beschleunigt den Aufbau neuer Hautzellen, wirkt reizlindernd, begünstigt die wundheilende Regeneration und glättet milde Schuppen.',
    sideEffects: 'Gilt als extrem verträglich, absolut reizfrei und ist daher oft Bestandteil medizinischer Allergikerpflege.',
    concentration: 'Äußerst wirksam bereits in sehr geringen Dosen von 0,1 % und 0,5 %.',
    category: 'Heilung & Beruhigung'
  },
  'Q10': {
    description: 'Coenzym Q10 (Ubiquinon). Ein körpereigenes Enzym, das als Schlüsselakteur im zellulären Energiestoffwechsel dient.',
    effect: 'Fängt als starkes Antioxidans freie Radikale ab (z. B. durch UV-Licht) und schützt vor frühzeitiger Hautalterung und Pigmentflecken.',
    sideEffects: 'Sehr gut verträglicher Inhaltsstoff ohne bekannte systemische oder lokale Nebenwirkungen.',
    concentration: 'Laborgeprüfte Wirksamkeit meist ab einer Konzentration von 0,05 % bis 0,3 %.',
    category: 'Zellschutz & Anti-Aging'
  },
  'Macadamia': {
    description: 'Ein seidiges Pflanzenöl, gepresst aus den Nüssen der Macadamianuss, reich an Palmitoleinsäure.',
    effect: 'Besitzt eine hervorragende Spreitfähigkeit, zieht rasch ein und stärkt rissige Hautbarrieren durch sehr hautähnliche Fettsäuren.',
    sideEffects: 'Hochgradige Nussallergiker sollten in sehr seltenen Fällen eine Kreuzreaktivität abklären, ansonsten extrem hautverträglich.',
    concentration: 'Beigemischt zu circa 1,0 % bis 5,0 % zur signifikanten Steigerung des Geschmeidigkeitsgefühls.',
    category: 'Nährende Lipide'
  },
  'Bienenwachs': {
    description: 'Das von Honigbienen abgesonderte Drüsensekret, das als robustes Baumaterial für Bienenwaben dient.',
    effect: 'Formt einen dünnen, wasserfesten, aber atmungsaktiven Schutzfilm gegen Reibung, Putzmittel-Wirkung und raue Umweltbedingungen.',
    sideEffects: 'Kosmetisch völlig reizfrei. Da es ein tierisches Biorohprodukt ist, ist dieser Inhaltsstoff nicht vegan.',
    concentration: 'Typischerweise mit 0,5 % bis 3,0 % enthalten zur Stärkung der Schutzbarriere.',
    category: 'Okklusiver Schutz'
  },
  'Hyaluronsäure': {
    description: 'Ein hochmolekulares Polysaccharid, das natürlich in unserem Bindegewebe und in Zellmembranen vorkommt.',
    effect: 'Kann enorme Mengen Wasser binden (bis zum 1000-fachen des Eigengewichts), glättet die Hautoberfläche und mildert Trockenheitsfältchen.',
    sideEffects: 'Völlig frei von Risiken und Nebenwirkungen dank absoluter biologischer Identität mit dem eigenen Gewebe.',
    concentration: 'Kommt in hocheffizienten Formulierungen typischerweise mit 0,05 % bis 0,5 % zum Einsatz.',
    category: 'Basis-Hydratation'
  },
  'Murumuru-Butter': {
    description: 'Nährendes Pflanzenfett pflanzlicher Herkunft, extrahiert aus den Samen der brasilianischen Murumurupalme.',
    effect: 'Sehr reich an gesättigten Fettsäuren (Laurinsäure). Zieht dafür angenehm leicht ein, beugt Feuchtigkeitsverlust vor und lindert rissige Stellen.',
    sideEffects: 'Ein hochverträgliches und zartes Pflanzenfett. Bei Gesichtsanwendung porenverstopfend, an Händen uneingeschränkt empfohlen.',
    concentration: 'Häufig mit 1,0 % bis 5,0 % in pflegenden K-Beauty und Wellness-Formeln dosiert.',
    category: 'Nährende Lipide'
  }
};

export const allTags = Array.from(new Set(recommendations.flatMap(r => r.tags)))
  .filter(tag => !['Ceramide', 'Sheabutter', 'D-Panthenol', 'Panthenol', 'Glycerin', 'Allantoin', 'Urea', 'Bambus', 'Q10', 'Macadamia', 'Bienenwachs', 'Totes Meer Salz', 'Nachtkerzenöl'].includes(tag))
  .sort();
export const allCountries = Array.from(new Set(recommendations.map(r => r.country))).sort();
export const allIngredients = Object.keys(ingredientDictionary).sort();
