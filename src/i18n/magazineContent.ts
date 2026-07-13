import { Lang } from './translations';

export interface Article {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
}

export interface Feature {
  title: string;
  subtitle: string | null;
  body: string[];
  image: string;
  quote?: string;
  pullquote?: string;
  callout?: { title: string; text: string };
}

export interface MagazineContent {
  articles: Article[];
  features: Feature[];
  brands: string[];
}

const brands = [
  'Weishäupl', 'Weisselberg kitchen and interior', 'Eggersmann Kitchen',
  'V-zug', 'Quint wein', 'Bookbinders', 'Stone Soap Spa',
  'Mads Nørgaard', 'Lakor', 'Rikke Falkow', 'Veroni Salumi', 'The Artisan Copenhagen',
];

const da: MagazineContent = {
  articles: [
    {
      id: 'focacceria',
      label: 'Nyt focaccia i Rørvig',
      title: 'Plus Eins åbner nyt focacceria i Rørvig',
      body: 'Snart slår Plus Eins dørene op til et helt nyt focacceria i Rørvig. Her bliver der bagt focaccia efter traditioner hentet fra Syditalien, serveret med udvalgte delikatesser, vine og oste, der er skabt med samme kompromisløse tilgang til smag og kvalitet, som Plus Eins er kendt for.',
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'buffelost',
      label: 'Lokalt produceret bøffelost i Odsherred',
      title: 'Tillid i Danmark',
      body: 'Plus Eins vil skrive Danmarks historie med lokal produceret bøffelost fra egne bøfler i Odsherred. Bøflerne vil komme til at gå på marker i Odsherred omgivet af vind, græs og den særlige ro, som Odsherred byder på.',
      image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  features: [
    {
      title: 'Velkommen til Plus Eins!',
      subtitle: 'Forår 2026',
      body: [
        'Vi, Inger og Johannes, har sammen skabt konceptboutiqen Plus Eins. Et univers, der bygger på italiensk og tysk madkultur, godt håndværk, interiør og bolig; kvalitet og gode oplevelser. Hos os er \'Det lille ekstra\' i centrum – deraf det tyske navn Plus Eins.',
        'Vi er gået sammen om at skabe et univers af alt det, vi holder af. Vi har store ambitioner og vi vil skabe et helt særligt sted, hvor du kan finde lækre og anvendelige produkter, hvor kvaliteten er højsædet.',
        'Vi går nu ind i vores 2. sæson og vi glæder os til at byde jer velkomne i vores univers med god kaffe, lækker tysk vin, delikate italienske specialiter og skønne livsstilsprodukter.',
      ],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Håndlavede udendørsmøbler fra Weishäupl',
      subtitle: 'German Design Award Winner 2025',
      body: [
        'Weishäupl vandt i 2025 prisen \'German Design Award Winner 2025\' og det er ikke tilfældigt. For hos Weishäupl er filosofien simpel: klassisk håndværk skal være robust, slidstærkt og gennemført med finesse.',
        'Weishäupl er derfor ikke bare udstyr til haven. Det er et statement om, at udendørsliv også kan være smukt, gennemført og langtidsholdbart. Hos Plus Eins forhandler vi Weishäupls udsøgte møbler og parasoller.',
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      callout: {
        title: 'Vidste du?',
        text: 'Hos Plus Eins kan du få speciallavet din Weishäupl parasol efter egne ønsker og selv vælge stel, farve, og stof? Ring for et personligt tilbud på +45 57 61 25 00.',
      },
    },
    {
      title: 'Den danske kultur af tillid',
      subtitle: null,
      body: [
        'Tillid har altid været dybt forankret i den danske kultur. Tillid står som en hjørnesten i hvordan danskere naturligt begår sig i samfundet med hinanden.',
        'Hos Plus Eins er tillid et stort tema. Det er nemlig en kerneværdi for os at vise kunderne tillid og det afspejler sig især i den måde, vi serverer vores vin på. Vores gæster får nemlig serveret flaskerne i en vogn, så de kan servicere sig selv uden opsyn.',
        '"Vi vidste ikke, hvor meget vi havde drukket, så vi rundede beløbet op for at være sikre på, at vi betalte det hele." — En af vores gæster.',
      ],
      image: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      quote: '"Tillid eller tiltro er en følelse og er dét fænomen, som viser sig ved, at et individ har en forventning om eller tro på, at et andet individ er pålideligt."',
    },
    {
      title: 'Et partnerskab med Quint Wein',
      subtitle: 'Mosel, Tyskland',
      body: [
        'Hos Plus Eins har vi ikke et stort udvalg af forskellige vine. Vi kan lide at holde det enkelt, og vi udvælger gerne vores samarbejdspartnere med omhu til vores produktsortiment.',
        'Derfor er vi stolte af at have et partnerskab med Quint Wein fra Tyskland. Vinmarkerne ligger i byen Wintrich i hjertet af Mosel, hvor stejle skråninger og en særlig skiferjord giver de bedste betingelser for vinen.',
      ],
      image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Rikke Falkow',
      subtitle: 'Fra værkstedet til Rørvig',
      body: [
        'I 1995 grundlagde Rikke Falkow firmaet Ultimo Design, der siden blev til virksomheden RIKKE FALKOW. Ambitionen var at vige væk fra trends og sæsonbetonede "musthaves", men derimod at lave et bevidst opgør mod hurtig mode og forbrugskultur.',
        'Shakerne skabte møbler og genstande der var tænkt til at holde i generationer. Deres arbejde var præget af naturmaterialer, oprigtighed og et formsprog så enkelt, at det stadig fremstår både tidløst og moderne idag.',
        'I dag ligger Rikke Falkows showroom i Rørvig – et sted med kultur og historie der passer brandets identitet.',
      ],
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      pullquote: 'Der er ikke pynt; og der er ingen overdesignede detaljer. Der er kun funktion, proportioner, og holdbarhed.',
    },
    {
      title: 'Veroni Salumi & Salumeria at Plus Eins',
      subtitle: 'Siden 1925',
      body: [
        'Italiensk salami er noget helt særligt – den er kendt for sin intense smag og farve samt den lidt tørre tekstur. Hos Plus Eins har vi ægte, italiensk salami lavet af lufttørret svinekød efter traditionelle metoder fra det velrenomerede firma Veroni Salumi.',
        'Hjertet i Plus Eins er vores Salumeria. I Salumeriaet finder du et bredt udvalg af pølser, og skinke, serveret med oliven, tomatsmør og surdejsbrød, sammen med kølige vine fra Tyskland og traditionelle oste fra Italien.',
      ],
      image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  brands,
};

const en: MagazineContent = {
  articles: [
    {
      id: 'focacceria',
      label: 'New focaccia in Rørvig',
      title: 'Plus Eins opens a new focacceria in Rørvig',
      body: 'Plus Eins will soon open the doors to a brand new focacceria in Rørvig. Here, focaccia will be baked according to traditions from Southern Italy, served with selected delicacies, wines and cheeses — crafted with the same uncompromising approach to taste and quality that defines Plus Eins.',
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'buffelost',
      label: 'Locally produced buffalo cheese in Odsherred',
      title: 'Trust in Denmark',
      body: 'Plus Eins will write a chapter of Danish history with locally produced buffalo mozzarella from our own buffalo in Odsherred. The animals will roam the fields of Odsherred surrounded by wind, grass and the particular stillness that defines this remarkable region.',
      image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  features: [
    {
      title: 'Welcome to Plus Eins!',
      subtitle: 'Spring 2026',
      body: [
        'Together, Inger and Johannes have created the concept boutique Plus Eins — a universe built on Italian and German food culture, fine craftsmanship, interior and home; quality and wonderful experiences. At the heart of what we do is \'the little extra\' — which is precisely what the German name Plus Eins means.',
        'We have come together to create a universe of everything we love. We have great ambitions and want to build something truly special — a place where you can find beautiful, useful products where quality is never compromised.',
        'We are now entering our second season and look forward to welcoming you into our universe — with good coffee, fine German wine, delicate Italian specialities and beautiful lifestyle products.',
      ],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Handmade outdoor furniture by Weishäupl',
      subtitle: 'German Design Award Winner 2025',
      body: [
        'In 2025, Weishäupl won the German Design Award — and it comes as no surprise. The philosophy at Weishäupl is simple: classic craftsmanship must be robust, durable and executed with finesse.',
        'Weishäupl is therefore not simply garden furniture. It is a statement that outdoor living can be beautiful, refined and built to last. At Plus Eins we carry Weishäupl\'s distinguished furniture and parasols.',
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      callout: {
        title: 'Did you know?',
        text: 'At Plus Eins you can have your Weishäupl parasol custom made to your own specifications — choose the frame, colour and fabric yourself. Call for a personal quote on +45 57 61 25 00.',
      },
    },
    {
      title: 'The Danish culture of trust',
      subtitle: null,
      body: [
        'Trust has always been deeply embedded in Danish culture — a cornerstone of how Danes naturally move through society together.',
        'At Plus Eins, trust is a central theme and a core value. It is reflected above all in the way we serve wine. Our guests receive their bottles on a trolley so they can help themselves without any supervision.',
        '"We weren\'t sure how much we had drunk, so we rounded up the bill to make sure we paid for everything." — One of our guests.',
      ],
      image: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      quote: '"Trust or faith is a feeling — the phenomenon of an individual holding an expectation or belief that another individual is reliable."',
    },
    {
      title: 'A partnership with Quint Wein',
      subtitle: 'Moselle, Germany',
      body: [
        'At Plus Eins we do not carry a large selection of different wines. We like to keep things simple, and we choose our partners with great care.',
        'We are therefore proud to have a partnership with Quint Wein from Germany. The vineyards are situated in the village of Wintrich in the heart of the Moselle, where steep slopes and a distinctive slate soil create the finest conditions for the vine.',
      ],
      image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Rikke Falkow',
      subtitle: 'From the workshop to Rørvig',
      body: [
        'In 1995, Rikke Falkow founded the company Ultimo Design, which later became the brand RIKKE FALKOW. The ambition was to move away from trends and seasonal must-haves — a deliberate break with fast fashion and consumer culture.',
        'The Shakers created furniture and objects designed to last for generations. Their work was marked by natural materials, honesty and a formal language so simple it remains both timeless and modern today.',
        'Rikke Falkow\'s showroom is now in Rørvig — a place with culture and history that suits the identity of the brand perfectly.',
      ],
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      pullquote: 'There is no decoration; no over-designed details. There is only function, proportion and durability.',
    },
    {
      title: 'Veroni Salumi & Salumeria at Plus Eins',
      subtitle: 'Since 1925',
      body: [
        'Italian salami is something truly special — known for its intense flavour and colour, as well as its slightly firm texture. At Plus Eins we carry authentic Italian salami made from air-dried pork by the highly respected firm Veroni Salumi, following traditional methods.',
        'The heart of Plus Eins is our Salumeria. Here you will find a broad selection of cured meats and hams, served with olives, tomato butter and sourdough bread, alongside cool wines from Germany and traditional cheeses from Italy.',
      ],
      image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  brands,
};

const de: MagazineContent = {
  articles: [
    {
      id: 'focacceria',
      label: 'Neues Focaccia in Rørvig',
      title: 'Plus Eins eröffnet ein neues Focacceria in Rørvig',
      body: 'Plus Eins wird bald die Türen zu einem brandneuen Focacceria in Rørvig öffnen. Hier wird Focaccia nach Traditionen aus Süditalien gebacken, serviert mit ausgewählten Delikatessen, Weinen und Käse — mit demselben kompromisslosen Anspruch an Geschmack und Qualität, für den Plus Eins bekannt ist.',
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 'buffelost',
      label: 'Lokal produzierter Büffelkäse in Odsherred',
      title: 'Vertrauen in Dänemark',
      body: 'Plus Eins wird ein Kapitel dänischer Geschichte schreiben — mit lokal produziertem Büffelmozzarella von eigenen Büffeln in Odsherred. Die Tiere werden auf Feldern in Odsherred grasen, umgeben von Wind, Gras und der besonderen Stille, die diese Region auszeichnet.',
      image: 'https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  features: [
    {
      title: 'Willkommen bei Plus Eins!',
      subtitle: 'Frühjahr 2026',
      body: [
        'Gemeinsam haben Inger und Johannes die Konzeptboutique Plus Eins ins Leben gerufen — ein Universum, das auf italienischer und deutscher Esskultur, feinem Handwerk, Interior und Wohnen aufbaut; Qualität und schönen Erlebnissen. Im Mittelpunkt steht bei uns das „kleine Extra" — daher der deutsche Name Plus Eins.',
        'Wir haben uns zusammengetan, um ein Universum aus allem zu schaffen, was wir lieben. Wir haben große Ambitionen und möchten einen ganz besonderen Ort schaffen, an dem man wunderschöne und nützliche Produkte findet, bei denen Qualität stets an erster Stelle steht.',
        'Wir gehen nun in unsere zweite Saison und freuen uns darauf, Sie in unserem Universum willkommen zu heißen — mit gutem Kaffee, feinem deutschen Wein, delikaten italienischen Spezialitäten und wunderschönen Lifestyleprodukten.',
      ],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Handgefertigte Outdoormöbel von Weishäupl',
      subtitle: 'German Design Award Winner 2025',
      body: [
        '2025 gewann Weishäupl den German Design Award — und das ist kein Zufall. Die Philosophie bei Weishäupl ist einfach: klassisches Handwerk muss robust, langlebig und mit Finesse ausgeführt sein.',
        'Weishäupl ist daher nicht nur Gartenausstattung. Es ist ein Statement, dass Outdoor-Leben schön, durchdacht und dauerhaft sein kann. Bei Plus Eins führen wir Weishäupls erlesene Möbel und Sonnenschirme.',
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      callout: {
        title: 'Wussten Sie?',
        text: 'Bei Plus Eins können Sie Ihren Weishäupl-Sonnenschirm nach eigenen Wünschen anfertigen lassen — Gestell, Farbe und Stoff selbst wählen. Rufen Sie uns für ein persönliches Angebot an: +45 57 61 25 00.',
      },
    },
    {
      title: 'Die dänische Vertrauenskultur',
      subtitle: null,
      body: [
        'Vertrauen ist seit jeher tief in der dänischen Kultur verwurzelt — ein Eckpfeiler dafür, wie Dänen natürlich miteinander im gesellschaftlichen Leben umgehen.',
        'Bei Plus Eins ist Vertrauen ein zentrales Thema und ein Grundwert. Es spiegelt sich vor allem in der Art und Weise wider, wie wir Wein servieren: Unsere Gäste erhalten die Flaschen auf einem Wagen, damit sie sich ohne Aufsicht selbst bedienen können.',
        '„Wir wussten nicht, wie viel wir getrunken hatten, also haben wir den Betrag aufgerundet, um sicher zu gehen, dass wir alles bezahlt haben." — Einer unserer Gäste.',
      ],
      image: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      quote: '„Vertrauen oder Zutrauen ist ein Gefühl — jenes Phänomen, das sich zeigt, wenn ein Individuum die Erwartung oder den Glauben hegt, dass ein anderes Individuum verlässlich ist."',
    },
    {
      title: 'Eine Partnerschaft mit Quint Wein',
      subtitle: 'Mosel, Deutschland',
      body: [
        'Bei Plus Eins haben wir kein großes Sortiment verschiedener Weine. Wir schätzen Einfachheit und wählen unsere Partner mit großer Sorgfalt.',
        'Daher sind wir stolz auf unsere Partnerschaft mit Quint Wein aus Deutschland. Die Weinberge liegen im Dorf Wintrich im Herzen der Mosel, wo steile Hänge und ein besonderer Schieferboden die besten Bedingungen für den Wein schaffen.',
      ],
      image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Rikke Falkow',
      subtitle: 'Vom Atelier nach Rørvig',
      body: [
        '1995 gründete Rikke Falkow das Unternehmen Ultimo Design, das später zur Marke RIKKE FALKOW wurde. Die Ambition war es, sich von Trends und saisonalen Must-haves zu lösen — ein bewusster Bruch mit Fast Fashion und Konsumkultur.',
        'Die Shaker schufen Möbel und Objekte, die für Generationen gedacht waren. Ihre Arbeit war geprägt von Naturmaterialien, Aufrichtigkeit und einer Formensprache, die so schlicht ist, dass sie heute noch zeitlos und modern erscheint.',
        'Heute befindet sich Rikke Falkows Showroom in Rørvig — einem Ort mit Kultur und Geschichte, der zur Identität der Marke passt.',
      ],
      image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1200',
      pullquote: 'Kein Dekor, keine überdesignten Details. Nur Funktion, Proportionen und Beständigkeit.',
    },
    {
      title: 'Veroni Salumi & Salumeria bei Plus Eins',
      subtitle: 'Seit 1925',
      body: [
        'Italienische Salami ist etwas ganz Besonderes — bekannt für ihren intensiven Geschmack und ihre Farbe sowie die leicht feste Textur. Bei Plus Eins führen wir echte, italienische Salami aus luftgetrocknetem Schweinefleisch nach traditionellen Methoden des renommierten Unternehmens Veroni Salumi.',
        'Das Herz von Plus Eins ist unsere Salumeria. Hier finden Sie eine breite Auswahl an Wurst- und Schinkenwaren, serviert mit Oliven, Tomatenbutter und Sauerteigbrot, dazu kühle Weine aus Deutschland und traditionelle Käsesorten aus Italien.',
      ],
      image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ],
  brands,
};

export const magazineContent: Record<Lang, MagazineContent> = { da, en, de };
