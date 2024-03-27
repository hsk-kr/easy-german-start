import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Kopf, stehen, besitzen, Seite, sollte, Land, gefunden, Antwort, Schule, wachsen',
  words: [
    {
      word: 'Kopf',
      desc: "Noun meaning 'head', indicating the upper part of the human body containing the brain, eyes, ears, nose, and mouth.",
      examples: [
        {
          sentence: 'Sie hatte Kopfschmerzen.',
          translation: 'She had a headache.',
        },
        {
          sentence: 'Er nickte mit dem Kopf.',
          translation: 'He nodded his head.',
        },
        {
          sentence: 'Sie schüttelte den Kopf.',
          translation: 'She shook her head.',
        },
        {
          sentence: 'Die Idee kam ihm in den Kopf.',
          translation: 'The idea came into his head.',
        },
        {
          sentence: 'Der Ball traf ihn am Kopf.',
          translation: 'The ball hit him on the head.',
        },
      ],
    },
    {
      word: 'stehen',
      desc: "Verb meaning 'to stand', indicating the upright position of a person or thing on a surface with the support of the feet or base.",
      examples: [
        {
          sentence: 'Er stand am Fenster.',
          translation: 'He stood by the window.',
        },
        {
          sentence: 'Das Buch steht auf dem Tisch.',
          translation: 'The book is standing on the table.',
        },
        {
          sentence: 'Die Statue steht im Park.',
          translation: 'The statue stands in the park.',
        },
        {
          sentence: 'Sie standen in einer Reihe.',
          translation: 'They stood in a line.',
        },
        {
          sentence: 'Er kann nicht still stehen.',
          translation: "He can't stand still.",
        },
      ],
    },
    {
      word: 'besitzen',
      desc: "Verb meaning 'to own' or 'to possess', indicating the state of having something as one's own property.",
      examples: [
        {
          sentence: 'Er besitzt ein großes Haus.',
          translation: 'He owns a large house.',
        },
        {
          sentence: 'Sie besitzen viele Bücher.',
          translation: 'They possess many books.',
        },
        {
          sentence: 'Ich besitze kein Auto.',
          translation: "I don't own a car.",
        },
        {
          sentence: 'Er besitzt eine wertvolle Sammlung.',
          translation: 'He possesses a valuable collection.',
        },
        {
          sentence: 'Das Unternehmen besitzt viele Filialen.',
          translation: 'The company owns many branches.',
        },
      ],
    },
    {
      word: 'Seite',
      desc: "Noun meaning 'page' or 'side', indicating one side of a sheet of paper or the written or printed content on it.",
      examples: [
        {
          sentence: 'Sie blätterte die Seiten des Buches um.',
          translation: 'She flipped through the pages of the book.',
        },
        {
          sentence: 'Die Informationen stehen auf Seite fünf.',
          translation: 'The information is on page five.',
        },
        {
          sentence: 'Ich lese die Seite noch einmal.',
          translation: 'I am reading the page again.',
        },
        {
          sentence: 'Wir schreiben auf beiden Seiten des Papiers.',
          translation: 'We write on both sides of the paper.',
        },
        {
          sentence: 'Die Seite ist leer.',
          translation: 'The page is blank.',
        },
      ],
    },
    {
      word: 'sollte',
      desc: "Modal verb meaning 'should', indicating an obligation, recommendation, or expectation.",
      examples: [
        {
          sentence: 'Du solltest früher ins Bett gehen.',
          translation: 'You should go to bed earlier.',
        },
        {
          sentence: 'Sie sollte mehr Wasser trinken.',
          translation: 'She should drink more water.',
        },
        {
          sentence: 'Wir sollten uns beeilen.',
          translation: 'We should hurry up.',
        },
        {
          sentence: 'Er sollte seine Hausaufgaben machen.',
          translation: 'He should do his homework.',
        },
        {
          sentence: 'Sie sollten nicht so laut sprechen.',
          translation: "They shouldn't speak so loudly.",
        },
      ],
    },
    {
      word: 'Land',
      desc: "Noun meaning 'country' or 'land', indicating a distinct territorial area or nation.",
      examples: [
        {
          sentence: 'Deutschland ist ein schönes Land.',
          translation: 'Germany is a beautiful country.',
        },
        {
          sentence: 'Wir besuchten verschiedene Länder in Europa.',
          translation: 'We visited different countries in Europe.',
        },
        {
          sentence: 'Sie leben in einem kleinen Land.',
          translation: 'They live in a small country.',
        },
        {
          sentence: 'Das Land ist weit und flach.',
          translation: 'The land is vast and flat.',
        },
        {
          sentence: 'Es ist ein reiches Land.',
          translation: 'It is a wealthy country.',
        },
      ],
    },
    {
      word: 'gefunden',
      desc: "Past participle of the verb 'finden' (to find), indicating the act of discovering or locating someone or something.",
      examples: [
        {
          sentence: 'Er hat den Schlüssel gefunden.',
          translation: 'He has found the key.',
        },
        {
          sentence: 'Sie haben eine Lösung gefunden.',
          translation: 'They have found a solution.',
        },
        {
          sentence: 'Ich habe meinen Freund nicht gefunden.',
          translation: "I didn't find my friend.",
        },
        {
          sentence: 'Wir haben das verlorene Buch gefunden.',
          translation: 'We found the lost book.',
        },
        {
          sentence: 'Sie hat das versteckte Geschenk gefunden.',
          translation: 'She found the hidden gift.',
        },
      ],
    },
    {
      word: 'Antwort',
      desc: "Noun meaning 'answer' or 'response', indicating a reply to a question, statement, or situation.",
      examples: [
        {
          sentence: 'Er gab eine kluge Antwort.',
          translation: 'He gave a smart answer.',
        },
        {
          sentence: 'Die Antwort war einfach.',
          translation: 'The answer was simple.',
        },
        {
          sentence: 'Ich warte noch auf deine Antwort.',
          translation: 'I am still waiting for your answer.',
        },
        {
          sentence: 'Sie wusste keine Antwort auf die Frage.',
          translation: "She didn't know an answer to the question.",
        },
        {
          sentence: 'Seine Antwort überraschte mich.',
          translation: 'His answer surprised me.',
        },
      ],
    },
    {
      word: 'Schule',
      desc: "Noun meaning 'school', indicating an institution for educating children or adolescents.",
      examples: [
        {
          sentence: 'Er geht jeden Tag zur Schule.',
          translation: 'He goes to school every day.',
        },
        {
          sentence: 'Meine Schule ist groß.',
          translation: 'My school is big.',
        },
        {
          sentence: 'Die Schule beginnt um 8 Uhr.',
          translation: "School starts at 8 o'clock.",
        },
        {
          sentence: 'Sie ist eine Lehrerin an unserer Schule.',
          translation: 'She is a teacher at our school.',
        },
        {
          sentence: 'Die Kinder spielen auf dem Schulhof.',
          translation: 'The children play in the schoolyard.',
        },
      ],
    },
    {
      word: 'wachsen',
      desc: "Verb meaning 'to grow', indicating the process of increasing in size, quantity, or degree.",
      examples: [
        {
          sentence: 'Die Pflanzen wachsen schnell.',
          translation: 'The plants grow quickly.',
        },
        {
          sentence: 'Kinder wachsen schnell.',
          translation: 'Children grow fast.',
        },
        {
          sentence: 'Das Unternehmen wächst stetig.',
          translation: 'The company is growing steadily.',
        },
        {
          sentence: 'Die Bevölkerung wächst kontinuierlich.',
          translation: 'The population is growing continuously.',
        },
        {
          sentence: 'Sein Interesse am Thema wächst.',
          translation: 'His interest in the subject is growing.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Studie, noch, lernen, Anlage, Abdeckung, Lebensmittel, Sonne, vier, zwischen, Zustand',
  words: [
    {
      word: 'Studie',
      desc: "Noun meaning 'study', indicating a detailed investigation or analysis of a subject, often conducted to gather information or to examine a particular phenomenon.",
      examples: [
        {
          sentence: 'Die Studie zeigt interessante Ergebnisse.',
          translation: 'The study shows interesting results.',
        },
        {
          sentence: 'Er führte eine umfassende Studie durch.',
          translation: 'He conducted a comprehensive study.',
        },
        {
          sentence: 'Die Studie wurde von Experten durchgeführt.',
          translation: 'The study was conducted by experts.',
        },
        {
          sentence: 'Die Studie befasst sich mit verschiedenen Aspekten.',
          translation: 'The study deals with various aspects.',
        },
        {
          sentence: 'Ich habe eine neue Studie veröffentlicht.',
          translation: 'I have published a new study.',
        },
      ],
    },
    {
      word: 'noch',
      desc: "Adverb meaning 'still', indicating a continuation of a situation or condition without change.",
      examples: [
        {
          sentence: 'Er ist noch hier.',
          translation: 'He is still here.',
        },
        {
          sentence: 'Das Problem besteht noch.',
          translation: 'The problem still exists.',
        },
        {
          sentence: 'Es ist noch nicht zu spät.',
          translation: "It's still not too late.",
        },
        {
          sentence: 'Sie sind noch nicht angekommen.',
          translation: "They haven't arrived yet.",
        },
        {
          sentence: 'Die Arbeit ist noch nicht fertig.',
          translation: 'The work is not finished yet.',
        },
      ],
    },
    {
      word: 'lernen',
      desc: "Verb meaning 'to learn', indicating the acquisition of knowledge or skills through study, experience, or instruction.",
      examples: [
        {
          sentence: 'Sie lernt Deutsch.',
          translation: 'She is learning German.',
        },
        {
          sentence: 'Er lernt schnell.',
          translation: 'He learns quickly.',
        },
        {
          sentence: 'Kinder lernen durch Spielen.',
          translation: 'Children learn through play.',
        },
        {
          sentence: 'Ich lerne gerne neue Dinge.',
          translation: 'I enjoy learning new things.',
        },
        {
          sentence: 'Sie lernen voneinander.',
          translation: 'They learn from each other.',
        },
      ],
    },
    {
      word: 'Anlage',
      desc: "Noun meaning 'plant' or 'facility', indicating a building, structure, or area equipped for a particular purpose or activity.",
      examples: [
        {
          sentence: 'Die Fabrik ist eine große Anlage.',
          translation: 'The factory is a large plant.',
        },
        {
          sentence: 'Die Anlage produziert Strom.',
          translation: 'The plant produces electricity.',
        },
        {
          sentence: 'Die Forschungsanlage ist hochtechnisiert.',
          translation: 'The research facility is high-tech.',
        },
        {
          sentence: 'Die Anlage ist rund um die Uhr in Betrieb.',
          translation: 'The facility operates around the clock.',
        },
        {
          sentence: 'Die Anlage liegt am Flussufer.',
          translation: 'The plant is located on the riverbank.',
        },
      ],
    },
    {
      word: 'Abdeckung',
      desc: "Noun meaning 'cover' or 'coverage', indicating a layer or material used to protect or conceal something.",
      examples: [
        {
          sentence: 'Die Abdeckung des Buches war beschädigt.',
          translation: 'The cover of the book was damaged.',
        },
        {
          sentence: 'Die Plane dient als Abdeckung.',
          translation: 'The tarpaulin serves as a cover.',
        },
        {
          sentence: 'Die Abdeckung des Pools wurde entfernt.',
          translation: 'The cover of the pool was removed.',
        },
        {
          sentence: 'Die Abdeckung schützt vor Regen.',
          translation: 'The cover protects from rain.',
        },
        {
          sentence: 'Die Versicherung bietet umfassende Abdeckung.',
          translation: 'The insurance provides comprehensive coverage.',
        },
      ],
    },
    {
      word: 'Lebensmittel',
      desc: "Noun meaning 'food' or 'groceries', indicating items consumed to provide nourishment for the body.",
      examples: [
        {
          sentence: 'Wir kaufen Lebensmittel im Supermarkt.',
          translation: 'We buy food at the supermarket.',
        },
        {
          sentence:
            'Frische Lebensmittel sind wichtig für eine gesunde Ernährung.',
          translation: 'Fresh food is important for a healthy diet.',
        },
        {
          sentence: 'Er arbeitet in der Lebensmittelindustrie.',
          translation: 'He works in the food industry.',
        },
        {
          sentence: 'Die Lebensmittel waren abgelaufen.',
          translation: 'The groceries had expired.',
        },
        {
          sentence: 'Wir haben genug Lebensmittel für die Woche gekauft.',
          translation: 'We bought enough food for the week.',
        },
      ],
    },
    {
      word: 'Sonne',
      desc: "Noun meaning 'sun', indicating the star around which the Earth revolves, providing light and warmth to the planet.",
      examples: [
        {
          sentence: 'Die Sonne scheint hell am Himmel.',
          translation: 'The sun shines brightly in the sky.',
        },
        {
          sentence: 'Sie liebt es, in der Sonne zu liegen.',
          translation: 'She loves to lie in the sun.',
        },
        {
          sentence: 'Die Sonne geht langsam unter.',
          translation: 'The sun is setting slowly.',
        },
        {
          sentence: 'Wir genießen die warme Sonne.',
          translation: 'We enjoy the warm sun.',
        },
        {
          sentence: 'Die Sonne bringt Energie auf die Erde.',
          translation: 'The sun brings energy to the Earth.',
        },
      ],
    },
    {
      word: 'vier',
      desc: "Adjective and numeral meaning 'four', indicating the number that comes after three and before five.",
      examples: [
        {
          sentence: 'Es sind vier Personen in der Gruppe.',
          translation: 'There are four people in the group.',
        },
        {
          sentence: 'Der Tisch hat vier Beine.',
          translation: 'The table has four legs.',
        },
        {
          sentence: 'Das Konzert beginnt um vier Uhr.',
          translation: "The concert starts at four o'clock.",
        },
        {
          sentence: 'Sie hat vier Geschwister.',
          translation: 'She has four siblings.',
        },
        {
          sentence: 'Wir haben vier Fenster im Wohnzimmer.',
          translation: 'We have four windows in the living room.',
        },
      ],
    },
    {
      word: 'zwischen',
      desc: "Preposition and adverb meaning 'between' or 'among', indicating the position or relationship of two or more things in relation to each other.",
      examples: [
        {
          sentence: 'Das Buch liegt zwischen den anderen Büchern.',
          translation: 'The book lies between the other books.',
        },
        {
          sentence: 'Sie steht zwischen ihren Freunden.',
          translation: 'She stands between her friends.',
        },
        {
          sentence: 'Der Fluss fließt zwischen den Bergen.',
          translation: 'The river flows between the mountains.',
        },
        {
          sentence: 'Wir sitzen zwischen den beiden Tischen.',
          translation: 'We sit between the two tables.',
        },
        {
          sentence: 'Die Entscheidung liegt zwischen diesen beiden Optionen.',
          translation: 'The decision lies between these two options.',
        },
      ],
    },
    {
      word: 'Zustand',
      desc: "Noun meaning 'condition' or 'state', indicating the physical or mental state or situation of someone or something.",
      examples: [
        {
          sentence: 'Der Zustand des Patienten hat sich verbessert.',
          translation: "The patient's condition has improved.",
        },
        {
          sentence: 'Sie ist in einem schlechten Zustand.',
          translation: 'She is in a bad condition.',
        },
        {
          sentence: 'Die Maschine ist in gutem Zustand.',
          translation: 'The machine is in good condition.',
        },
        {
          sentence: 'Ich bin in einem glücklichen Zustand.',
          translation: 'I am in a happy state.',
        },
        {
          sentence: 'Der Zustand der Straße ist schlecht.',
          translation: 'The state of the road is poor.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'halten, Auge, nie, letzte, lassen, Gedanken, Stadt, Baum, überqueren, Bauernhof',
  words: [
    {
      word: 'halten',
      desc: "Verb meaning 'to keep' or 'to hold', indicating the action of maintaining possession or control of something.",
      examples: [
        {
          sentence: 'Bitte halten Sie das für mich.',
          translation: 'Please hold this for me.',
        },
        {
          sentence: 'Er hält das Buch in der Hand.',
          translation: 'He is holding the book in his hand.',
        },
        {
          sentence: 'Der Hund hält den Knochen im Maul.',
          translation: 'The dog is keeping the bone in its mouth.',
        },
        {
          sentence: 'Die Mutter hält ihr Baby fest.',
          translation: 'The mother is holding her baby tightly.',
        },
        {
          sentence: 'Wir müssen uns an die Regeln halten.',
          translation: 'We must keep to the rules.',
        },
      ],
    },
    {
      word: 'Auge',
      desc: "Noun meaning 'eye', indicating the organ of sight in humans and animals.",
      examples: [
        {
          sentence: 'Er hat blaue Augen.',
          translation: 'He has blue eyes.',
        },
        {
          sentence: 'Sie hat schöne Augen.',
          translation: 'She has beautiful eyes.',
        },
        {
          sentence: 'Das Auge ist das Fenster zur Seele.',
          translation: 'The eye is the window to the soul.',
        },
        {
          sentence: 'Das verletzte Auge muss behandelt werden.',
          translation: 'The injured eye must be treated.',
        },
        {
          sentence: 'Er schloss die Augen und entspannte sich.',
          translation: 'He closed his eyes and relaxed.',
        },
      ],
    },
    {
      word: 'nie',
      desc: "Adverb meaning 'never', indicating at no time or not ever.",
      examples: [
        {
          sentence: 'Ich werde dich nie vergessen.',
          translation: 'I will never forget you.',
        },
        {
          sentence: 'Er kommt nie zu spät.',
          translation: 'He never arrives late.',
        },
        {
          sentence: 'Das ist noch nie passiert.',
          translation: 'That has never happened before.',
        },
        {
          sentence: 'Sie hat nie gelogen.',
          translation: 'She has never lied.',
        },
        {
          sentence: 'Wir werden uns nie einigen.',
          translation: 'We will never agree.',
        },
      ],
    },
    {
      word: 'letzte',
      desc: "Adjective meaning 'last', indicating the final in a series, sequence, or time.",
      examples: [
        {
          sentence: 'Der letzte Zug ist abgefahren.',
          translation: 'The last train has left.',
        },
        {
          sentence: 'Das war meine letzte Chance.',
          translation: 'That was my last chance.',
        },
        {
          sentence: 'Er war der letzte, der ankam.',
          translation: 'He was the last one to arrive.',
        },
        {
          sentence: 'Das ist meine letzte Antwort.',
          translation: 'This is my final answer.',
        },
        {
          sentence: 'Ich habe das letzte Stück Kuchen genommen.',
          translation: 'I took the last piece of cake.',
        },
      ],
    },
    {
      word: 'lassen',
      desc: "Verb meaning 'to let' or 'to allow', indicating the action of permitting or enabling someone or something to do something.",
      examples: [
        {
          sentence: 'Kannst du mich bitte hereinlassen?',
          translation: 'Can you please let me in?',
        },
        {
          sentence: 'Sie lässt ihre Kinder draußen spielen.',
          translation: 'She lets her children play outside.',
        },
        {
          sentence: 'Wir lassen ihn wissen, wenn wir ankommen.',
          translation: "We'll let him know when we arrive.",
        },
        {
          sentence: 'Ich lasse dich nicht allein.',
          translation: "I won't leave you alone.",
        },
        {
          sentence: 'Er lässt den Hund im Garten laufen.',
          translation: 'He lets the dog run in the garden.',
        },
      ],
    },
    {
      word: 'Gedanken',
      desc: "Noun meaning 'thought', indicating the process or activity of thinking, or an idea or opinion produced by thinking.",
      examples: [
        {
          sentence: 'Ich kann nicht aufhören, an dich zu denken.',
          translation: "I can't stop thinking about you.",
        },
        {
          sentence: 'Seine Gedanken sind woanders.',
          translation: 'His thoughts are elsewhere.',
        },
        {
          sentence: 'Sie hat gute Gedanken zu dem Thema.',
          translation: 'She has good thoughts on the subject.',
        },
        {
          sentence: 'Ich muss meine Gedanken sortieren.',
          translation: 'I need to sort out my thoughts.',
        },
        {
          sentence: 'Der Gedanke kam mir plötzlich.',
          translation: 'The thought came to me suddenly.',
        },
      ],
    },
    {
      word: 'Stadt',
      desc: "Noun meaning 'city', indicating a large and permanent human settlement with extensive systems for housing, transportation, commerce, and entertainment.",
      examples: [
        {
          sentence: 'Berlin ist eine große Stadt.',
          translation: 'Berlin is a big city.',
        },
        {
          sentence: 'Sie lebt in der Stadtmitte.',
          translation: 'She lives in the city center.',
        },
        {
          sentence: 'Die Stadt hat eine reiche Geschichte.',
          translation: 'The city has a rich history.',
        },
        {
          sentence: 'Die Stadt ist nachts besonders schön.',
          translation: 'The city is especially beautiful at night.',
        },
        {
          sentence: 'Die Stadt bietet viele Möglichkeiten.',
          translation: 'The city offers many opportunities.',
        },
      ],
    },
    {
      word: 'Baum',
      desc: "Noun meaning 'tree', indicating a large plant with a trunk, branches, and leaves, growing in nature, typically producing wood and seeds.",
      examples: [
        {
          sentence: 'Der Baum spendet Schatten.',
          translation: 'The tree provides shade.',
        },
        {
          sentence: 'Der Apfelbaum trägt viele Früchte.',
          translation: 'The apple tree bears many fruits.',
        },
        {
          sentence: 'Der Baum steht im Garten.',
          translation: 'The tree stands in the garden.',
        },
        {
          sentence: 'Ein Eichhörnchen klettert den Baum hinauf.',
          translation: 'A squirrel climbs up the tree.',
        },
        {
          sentence: 'Im Herbst verlieren die Bäume ihre Blätter.',
          translation: 'In autumn, the trees lose their leaves.',
        },
      ],
    },
    {
      word: 'überqueren',
      desc: "Verb meaning 'to cross', indicating the action of moving from one side of something (e.g., a road, river, or bridge) to the other.",
      examples: [
        {
          sentence: 'Sie überquerten die Straße vorsichtig.',
          translation: 'They crossed the road carefully.',
        },
        {
          sentence: 'Wir müssen den Fluss überqueren, um dorthin zu gelangen.',
          translation: 'We have to cross the river to get there.',
        },
        {
          sentence: 'Der Wanderweg überquert den Berg.',
          translation: 'The hiking trail crosses the mountain.',
        },
        {
          sentence: 'Die Brücke ermöglicht es uns, den Fluss zu überqueren.',
          translation: 'The bridge allows us to cross the river.',
        },
        {
          sentence:
            'Der Fußgängerüberweg ist sicher zum Überqueren der Straße.',
          translation: 'The pedestrian crossing is safe for crossing the road.',
        },
      ],
    },
    {
      word: 'Bauernhof',
      desc: "Noun meaning 'farm', indicating a piece of land used for cultivating crops, raising animals, and other agricultural activities.",
      examples: [
        {
          sentence: 'Sie leben auf einem Bauernhof auf dem Land.',
          translation: 'They live on a farm in the countryside.',
        },
        {
          sentence: 'Der Bauernhof produziert frische Milch und Eier.',
          translation: 'The farm produces fresh milk and eggs.',
        },
        {
          sentence:
            'Der Bauernhof hat eine große Scheune für die Lagerung von Heu.',
          translation: 'The farm has a large barn for storing hay.',
        },
        {
          sentence: 'Wir besuchten einen Bauernhof und sahen die Tiere.',
          translation: 'We visited a farm and saw the animals.',
        },
        {
          sentence: 'Der Bauernhof liegt in der Nähe des Dorfes.',
          translation: 'The farm is located near the village.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'schwer, Beginn, Macht, Geschichte, Säge, weit, Meer, ziehen, links, spät',
  words: [
    {
      word: 'schwer',
      desc: "Adjective meaning 'hard' or 'difficult', indicating something that requires a lot of effort or strength to accomplish.",
      examples: [
        {
          sentence: 'Das ist eine schwierige Aufgabe.',
          translation: 'That is a difficult task.',
        },
        {
          sentence: 'Der Test war sehr schwer.',
          translation: 'The test was very hard.',
        },
        {
          sentence: 'Sie hat es schwer, sich zu entscheiden.',
          translation: 'She finds it hard to make a decision.',
        },
        {
          sentence: 'Das Training war ziemlich schwer.',
          translation: 'The training was quite hard.',
        },
        {
          sentence: 'Es ist schwer, die Wahrheit zu akzeptieren.',
          translation: 'It is hard to accept the truth.',
        },
      ],
    },
    {
      word: 'Beginn',
      desc: "Noun meaning 'start' or 'beginning', indicating the initial stage or point of something.",
      examples: [
        {
          sentence: 'Der Beginn des Films war vielversprechend.',
          translation: 'The beginning of the movie was promising.',
        },
        {
          sentence: 'Der Beginn des Jahres ist immer eine hektische Zeit.',
          translation: 'The start of the year is always a busy time.',
        },
        {
          sentence:
            'Wir sollten pünktlich zum Beginn der Veranstaltung dort sein.',
          translation: 'We should be there on time for the start of the event.',
        },
        {
          sentence: 'Der Beginn einer Reise ist aufregend.',
          translation: 'The beginning of a journey is exciting.',
        },
        {
          sentence: 'Am Beginn des Buches gibt es eine Einführung.',
          translation:
            'At the beginning of the book, there is an introduction.',
        },
      ],
    },
    {
      word: 'Macht',
      desc: "Noun meaning 'might' or 'power', indicating the ability or strength to do something.",
      examples: [
        {
          sentence: 'Die Macht der Natur ist beeindruckend.',
          translation: 'The power of nature is impressive.',
        },
        {
          sentence: 'Er hat politische Macht.',
          translation: 'He has political power.',
        },
        {
          sentence: 'Mit großer Macht kommt große Verantwortung.',
          translation: 'With great power comes great responsibility.',
        },
        {
          sentence: 'Die Macht des Geldes ist allgegenwärtig.',
          translation: 'The might of money is ubiquitous.',
        },
        {
          sentence: 'Sie hat die Macht, Entscheidungen zu treffen.',
          translation: 'She has the might to make decisions.',
        },
      ],
    },
    {
      word: 'Geschichte',
      desc: "Noun meaning 'story' or 'history', indicating a narrative of events that have happened or are imagined to have happened.",
      examples: [
        {
          sentence: 'Die Geschichte handelt von einem tapferen Ritter.',
          translation: 'The story is about a brave knight.',
        },
        {
          sentence: 'Sie studiert Geschichte an der Universität.',
          translation: 'She is studying history at the university.',
        },
        {
          sentence: 'Die Geschichte des alten Ägypten ist faszinierend.',
          translation: 'The history of ancient Egypt is fascinating.',
        },
        {
          sentence:
            'Die Geschichte wurde von Generation zu Generation weitergegeben.',
          translation:
            'The story was passed down from generation to generation.',
        },
        {
          sentence: 'Das Buch erzählt die Geschichte einer mutigen Frau.',
          translation: 'The book tells the story of a brave woman.',
        },
      ],
    },
    {
      word: 'Säge',
      desc: "Noun meaning 'saw', indicating a tool with a toothed edge used for cutting hard substances, typically wood or metal.",
      examples: [
        {
          sentence: 'Er benutzt die Säge, um das Holz zu schneiden.',
          translation: 'He uses the saw to cut the wood.',
        },
        {
          sentence: 'Die Säge ist sehr scharf.',
          translation: 'The saw is very sharp.',
        },
        {
          sentence: 'Wir brauchen eine elektrische Säge für diese Arbeit.',
          translation: 'We need an electric saw for this job.',
        },
        {
          sentence: 'Die Säge hat einen Holzgriff.',
          translation: 'The saw has a wooden handle.',
        },
        {
          sentence: 'Sie sägt das Brett in zwei Teile.',
          translation: 'She saws the plank into two pieces.',
        },
      ],
    },
    {
      word: 'weit',
      desc: "Adjective and adverb meaning 'far' or 'distant', indicating a considerable distance in space or time.",
      examples: [
        {
          sentence: 'Das nächste Geschäft ist nicht weit entfernt.',
          translation: 'The nearest shop is not far away.',
        },
        {
          sentence: 'Wir müssen eine weite Strecke zurücklegen.',
          translation: 'We have to travel a long distance.',
        },
        {
          sentence: 'Er wohnt weit weg von hier.',
          translation: 'He lives far away from here.',
        },
        {
          sentence: 'Das Ziel liegt noch weit vor uns.',
          translation: 'The destination is still far ahead of us.',
        },
        {
          sentence: 'Wir können nicht so weit gehen.',
          translation: "We can't go that far.",
        },
      ],
    },
    {
      word: 'Meer',
      desc: "Noun meaning 'sea', indicating a large body of salt water that covers much of the earth's surface.",
      examples: [
        {
          sentence: 'Im Sommer fahren wir gerne ans Meer.',
          translation: 'In summer, we like to go to the sea.',
        },
        {
          sentence: 'Das Meer ist heute sehr ruhig.',
          translation: 'The sea is very calm today.',
        },
        {
          sentence: 'Die Kinder spielen am Strand am Meer.',
          translation: 'The children play on the beach by the sea.',
        },
        {
          sentence: 'Die Möwen fliegen über das Meer.',
          translation: 'The seagulls fly over the sea.',
        },
        {
          sentence: 'Es gibt viele verschiedene Tiere im Meer.',
          translation: 'There are many different animals in the sea.',
        },
      ],
    },
    {
      word: 'ziehen',
      desc: "Verb meaning 'to pull' or 'to move', indicating the action of exerting force on something to cause it to move toward the person or thing doing the action.",
      examples: [
        {
          sentence: 'Sie zog die Tür zu.',
          translation: 'She pulled the door closed.',
        },
        {
          sentence: 'Er zog den Koffer über den Boden.',
          translation: 'He dragged the suitcase along the floor.',
        },
        {
          sentence: 'Die Lokomotive zieht den Zug.',
          translation: 'The locomotive pulls the train.',
        },
        {
          sentence: 'Der Wind zieht die Wolken am Himmel.',
          translation: 'The wind moves the clouds in the sky.',
        },
        {
          sentence: 'Die Eltern zogen die Kinder an der Hand.',
          translation: 'The parents led the children by the hand.',
        },
      ],
    },
    {
      word: 'links',
      desc: "Adjective and adverb meaning 'left' or 'on the left side', indicating the direction or position that is opposite of right.",
      examples: [
        {
          sentence: 'Das Museum befindet sich auf der linken Seite der Straße.',
          translation: 'The museum is located on the left side of the street.',
        },
        {
          sentence: 'Biegen Sie an der nächsten Kreuzung links ab.',
          translation: 'Turn left at the next intersection.',
        },
        {
          sentence:
            'Die linke Hand ist normalerweise die nicht dominante Hand.',
          translation: 'The left hand is usually the non-dominant hand.',
        },
        {
          sentence: 'Die Kinder sitzen links vom Lehrer.',
          translation: 'The children are sitting to the left of the teacher.',
        },
        {
          sentence: 'Links von uns ist der Wald.',
          translation: 'To the left of us is the forest.',
        },
      ],
    },
    {
      word: 'spät',
      desc: "Adjective and adverb meaning 'late' or 'after the usual or expected time', indicating a time that is past the usual or expected time.",
      examples: [
        {
          sentence: 'Es ist schon sehr spät, wir sollten nach Hause gehen.',
          translation: 'It is already very late, we should go home.',
        },
        {
          sentence: 'Er kommt immer zu spät zur Arbeit.',
          translation: 'He always comes to work late.',
        },
        {
          sentence: 'Die Veranstaltung begann später als geplant.',
          translation: 'The event started later than planned.',
        },
        {
          sentence: 'Sie war gestern bis spät in die Nacht wach.',
          translation: 'She was awake until late at night yesterday.',
        },
        {
          sentence: 'Die Züge fahren auch spät am Abend.',
          translation: 'The trains also run late in the evening.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'laufen, unterlassen Sie, während, Presse, Schließen, Nacht, realen, Leben, wenige, Norden',
  words: [
    {
      word: 'laufen',
      desc: "Verb meaning 'to run', indicating the action of moving swiftly on foot.",
      examples: [
        {
          sentence: 'Er läuft jeden Morgen im Park.',
          translation: 'He runs in the park every morning.',
        },
        {
          sentence: 'Sie lief schnell, um den Bus zu erwischen.',
          translation: 'She ran fast to catch the bus.',
        },
        {
          sentence: 'Die Kinder laufen um das Haus herum.',
          translation: 'The children run around the house.',
        },
        {
          sentence: 'Sie läuft einen Marathon.',
          translation: 'She is running a marathon.',
        },
        {
          sentence: 'Das Pferd läuft über die Wiese.',
          translation: 'The horse runs across the meadow.',
        },
      ],
    },
    {
      word: 'unterlassen Sie',
      desc: "Expression meaning 'don't', used to instruct someone not to do something.",
      examples: [
        {
          sentence: 'Bitte unterlassen Sie lautes Sprechen in der Bibliothek.',
          translation: "Please don't speak loudly in the library.",
        },
        {
          sentence: 'Unterlassen Sie es, während des Fluges aufzustehen.',
          translation: "Don't stand up during the flight.",
        },
        {
          sentence:
            'Unterlassen Sie es, das Sicherheitspersonal zu beleidigen.',
          translation: "Don't insult the security personnel.",
        },
        {
          sentence: 'Sie sollten unterlassen, die Tür zu schlagen.',
          translation: 'You should refrain from slamming the door.',
        },
        {
          sentence: 'Unterlassen Sie es, Ihren Müll hier zu hinterlassen.',
          translation: "Please don't leave your trash here.",
        },
      ],
    },
    {
      word: 'während',
      desc: "Preposition meaning 'while' or 'during', indicating a period of time in which something occurs.",
      examples: [
        {
          sentence: 'Sie liest, während sie Frühstück macht.',
          translation: 'She reads while she makes breakfast.',
        },
        {
          sentence: 'Während des Sommers gehen wir oft schwimmen.',
          translation: 'We often go swimming during the summer.',
        },
        {
          sentence: 'Sie arbeitete, während die anderen schliefen.',
          translation: 'She worked while the others slept.',
        },
        {
          sentence: 'Während des Films sprachen die Leute nicht.',
          translation: "People didn't talk during the movie.",
        },
        {
          sentence: 'Er schreibt, während er Musik hört.',
          translation: 'He writes while listening to music.',
        },
      ],
    },
    {
      word: 'Presse',
      desc: "Noun meaning 'press', indicating the media organizations collectively, especially newspapers and journalists.",
      examples: [
        {
          sentence: 'Die Presse berichtete über das Ereignis.',
          translation: 'The press reported on the event.',
        },
        {
          sentence: 'Die Presse war bei der Pressekonferenz anwesend.',
          translation: 'The press was present at the press conference.',
        },
        {
          sentence:
            'Die internationale Presse interessierte sich für die Geschichte.',
          translation: 'The international press was interested in the story.',
        },
        {
          sentence:
            'Die Pressefreiheit ist ein wichtiges Prinzip in der Demokratie.',
          translation: 'Press freedom is an important principle in democracy.',
        },
        {
          sentence: 'Die Presse hat den Skandal aufgedeckt.',
          translation: 'The press uncovered the scandal.',
        },
      ],
    },
    {
      word: 'Schließen',
      desc: "Verb meaning 'to close' or 'to shut', indicating the action of moving something to cover or block an opening.",
      examples: [
        {
          sentence: 'Bitte schließen Sie die Tür hinter sich.',
          translation: 'Please close the door behind you.',
        },
        {
          sentence: 'Er schloss das Buch und legte es weg.',
          translation: 'He closed the book and put it away.',
        },
        {
          sentence: 'Sie schloss die Fenster, bevor sie ging.',
          translation: 'She closed the windows before leaving.',
        },
        {
          sentence: 'Der Laden schließt um 18 Uhr.',
          translation: 'The shop closes at 6 p.m.',
        },
        {
          sentence: 'Er schließt die Augen und schläft ein.',
          translation: 'He closes his eyes and falls asleep.',
        },
      ],
    },
    {
      word: 'Nacht',
      desc: "Noun meaning 'night', indicating the period of darkness between sunset and sunrise.",
      examples: [
        {
          sentence: 'Die Sterne leuchten am Himmel in der Nacht.',
          translation: 'The stars shine in the sky at night.',
        },
        {
          sentence: 'Wir gehen gerne nachts spazieren.',
          translation: 'We like to go for walks at night.',
        },
        {
          sentence: 'Die Straßen sind in der Nacht ruhig.',
          translation: 'The streets are quiet at night.',
        },
        {
          sentence: 'Er arbeitet oft bis spät in die Nacht.',
          translation: 'He often works late into the night.',
        },
        {
          sentence: 'Die Eule ist ein nachtaktiver Vogel.',
          translation: 'The owl is a nocturnal bird.',
        },
      ],
    },
    {
      word: 'realen',
      desc: "Adjective meaning 'real' or 'actual', indicating something that exists objectively and is not imaginary.",
      examples: [
        {
          sentence: 'Die Gefahr ist real, nicht eingebildet.',
          translation: 'The danger is real, not imagined.',
        },
        {
          sentence: 'Er hat einen realen Einfluss auf die Entscheidungen.',
          translation: 'He has a real influence on the decisions.',
        },
        {
          sentence: 'Die realen Kosten sind höher als erwartet.',
          translation: 'The actual costs are higher than expected.',
        },
        {
          sentence: 'Es gibt reale Probleme, die gelöst werden müssen.',
          translation: 'There are real problems that need to be solved.',
        },
        {
          sentence:
            'Die realen Auswirkungen der Entscheidung sind noch nicht bekannt.',
          translation: 'The real effects of the decision are not yet known.',
        },
      ],
    },
    {
      word: 'Leben',
      desc: "Noun meaning 'life', indicating the condition that distinguishes animals and plants from inorganic matter, characterized by growth, reproduction, and the ability to react to stimuli.",
      examples: [
        {
          sentence: 'Das Leben auf dem Land ist ruhiger als in der Stadt.',
          translation: 'Life in the countryside is quieter than in the city.',
        },
        {
          sentence: 'Sie führt ein glückliches und erfülltes Leben.',
          translation: 'She leads a happy and fulfilling life.',
        },
        {
          sentence: 'Das Leben besteht aus Höhen und Tiefen.',
          translation: 'Life consists of ups and downs.',
        },
        {
          sentence: 'Sie hat ihr Leben der Kunst gewidmet.',
          translation: 'She has dedicated her life to art.',
        },
        {
          sentence: 'Das Leben auf der Erde ist vielfältig und erstaunlich.',
          translation: 'Life on Earth is diverse and amazing.',
        },
      ],
    },
    {
      word: 'wenige',
      desc: "Adjective and pronoun meaning 'few' or 'a few', indicating a small number or amount of something.",
      examples: [
        {
          sentence: 'Nur wenige Menschen waren anwesend.',
          translation: 'Only a few people were present.',
        },
        {
          sentence: 'Es gibt nur wenige Änderungen in diesem Bericht.',
          translation: 'There are only a few changes in this report.',
        },
        {
          sentence: 'Nur wenige Tage bleiben bis zur Deadline.',
          translation: 'Only a few days remain until the deadline.',
        },
        {
          sentence: 'Einige haben viel, aber wenige haben genug.',
          translation: 'Some have a lot, but few have enough.',
        },
        {
          sentence: 'Nur wenige haben das Experiment überlebt.',
          translation: 'Only a few survived the experiment.',
        },
      ],
    },
    {
      word: 'Norden',
      desc: "Noun meaning 'north', indicating the direction toward the point on the horizon where the sun appears to rise when at its highest point in the sky.",
      examples: [
        {
          sentence: 'Sie reisten in den Norden, um Polarlichter zu sehen.',
          translation: 'They traveled to the north to see the Northern Lights.',
        },
        {
          sentence: 'Die meisten Zugvögel fliegen im Winter in den Norden.',
          translation: 'Most migratory birds fly north in the winter.',
        },
        {
          sentence: 'Die Kompassnadel zeigt immer nach Norden.',
          translation: 'The compass needle always points north.',
        },
        {
          sentence: 'Die Sonne steht im Sommer weiter im Norden.',
          translation: 'The sun is farther north in the summer.',
        },
        {
          sentence:
            'Der Norden Deutschlands ist für seine Küstenlandschaften bekannt.',
          translation:
            'The north of Germany is known for its coastal landscapes.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Buch, tragen, nahm, Wissenschaft, essen, Zimmer, Freund, begann, Idee, Fisch',
  words: [
    {
      word: 'Buch',
      desc: "Noun meaning 'book', a written or printed work consisting of pages glued or sewn together along one side and bound in covers.",
      examples: [
        {
          sentence: 'Sie liest gerne Bücher in ihrer Freizeit.',
          translation: 'She enjoys reading books in her free time.',
        },
        {
          sentence: 'Das Buch enthält viele interessante Informationen.',
          translation: 'The book contains a lot of interesting information.',
        },
        {
          sentence: 'Er kaufte ein neues Buch in der Buchhandlung.',
          translation: 'He bought a new book at the bookstore.',
        },
        {
          sentence: 'Das Buch wurde zum Bestseller.',
          translation: 'The book became a bestseller.',
        },
        {
          sentence: 'Sie schrieb ihren Namen in das Buch.',
          translation: 'She wrote her name in the book.',
        },
      ],
    },
    {
      word: 'tragen',
      desc: "Verb meaning 'to carry' or 'to bear', indicating the action of supporting the weight of something and moving it from one place to another.",
      examples: [
        {
          sentence: 'Sie trägt schwere Einkaufstaschen.',
          translation: 'She carries heavy shopping bags.',
        },
        {
          sentence: 'Er trägt seinen Rucksack auf dem Rücken.',
          translation: 'He carries his backpack on his back.',
        },
        {
          sentence: 'Die Lastwagen tragen Waren in die Stadt.',
          translation: 'The trucks carry goods into the city.',
        },
        {
          sentence: 'Sie trägt das Baby auf ihren Armen.',
          translation: 'She carries the baby in her arms.',
        },
        {
          sentence: 'Die Flugzeuge tragen Passagiere um die Welt.',
          translation: 'The airplanes carry passengers around the world.',
        },
      ],
    },
    {
      word: 'nahm',
      desc: "Past tense of the verb 'nehmen', meaning 'took', indicating the action of physically moving or lifting something from one place to another.",
      examples: [
        {
          sentence: 'Sie nahm das Buch aus dem Regal.',
          translation: 'She took the book from the shelf.',
        },
        {
          sentence: 'Er nahm den Schlüssel vom Tisch.',
          translation: 'He took the key from the table.',
        },
        {
          sentence: 'Sie nahm ihre Jacke und ging hinaus.',
          translation: 'She took her jacket and went out.',
        },
        {
          sentence: 'Er nahm eine Münze aus seiner Tasche.',
          translation: 'He took a coin from his pocket.',
        },
        {
          sentence: 'Sie nahm das Geschenk mit Freude an.',
          translation: 'She accepted the gift with joy.',
        },
      ],
    },
    {
      word: 'Wissenschaft',
      desc: "Noun meaning 'science', a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe.",
      examples: [
        {
          sentence: 'Die Wissenschaft hat viele Fortschritte gemacht.',
          translation: 'Science has made many advances.',
        },
        {
          sentence: 'Er studiert Wissenschaft an der Universität.',
          translation: 'He studies science at the university.',
        },
        {
          sentence: 'Die Wissenschaftler arbeiten an neuen Entdeckungen.',
          translation: 'The scientists are working on new discoveries.',
        },
        {
          sentence: 'Wissenschaft und Technologie gehen Hand in Hand.',
          translation: 'Science and technology go hand in hand.',
        },
        {
          sentence:
            'Die Kinder experimentieren gerne in der Wissenschaftsklasse.',
          translation: 'The children enjoy experimenting in science class.',
        },
      ],
    },
    {
      word: 'essen',
      desc: "Verb meaning 'to eat', indicating the action of consuming food.",
      examples: [
        {
          sentence: 'Sie essen zusammen zu Abend.',
          translation: 'They eat dinner together.',
        },
        {
          sentence: 'Er isst gerne Pizza zum Mittagessen.',
          translation: 'He likes to eat pizza for lunch.',
        },
        {
          sentence: 'Wir essen oft gemeinsam in diesem Restaurant.',
          translation: 'We often eat together at this restaurant.',
        },
        {
          sentence: 'Sie isst gesundes Essen für ihre Gesundheit.',
          translation: 'She eats healthy food for her health.',
        },
        {
          sentence:
            'Er isst gerne exotische Gerichte aus verschiedenen Ländern.',
          translation:
            'He enjoys eating exotic dishes from different countries.',
        },
      ],
    },
    {
      word: 'Zimmer',
      desc: "Noun meaning 'room', indicating a space enclosed by walls within a building, typically with a floor and ceiling.",
      examples: [
        {
          sentence: 'Das Wohnzimmer ist ein gemütlicher Raum.',
          translation: 'The living room is a cozy space.',
        },
        {
          sentence: 'Sie hat ihr eigenes Zimmer im Haus.',
          translation: 'She has her own room in the house.',
        },
        {
          sentence: 'Das Hotelzimmer war sauber und komfortabel.',
          translation: 'The hotel room was clean and comfortable.',
        },
        {
          sentence: 'Wir treffen uns im Besprechungsraum.',
          translation: 'We meet in the meeting room.',
        },
        {
          sentence: 'Das Schlafzimmer ist der beste Raum zum Ausruhen.',
          translation: 'The bedroom is the best room for resting.',
        },
      ],
    },
    {
      word: 'Freund',
      desc: "Noun meaning 'friend', indicating a person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations.",
      examples: [
        {
          sentence: 'Sie ist seit der Kindheit meine beste Freundin.',
          translation: 'She has been my best friend since childhood.',
        },
        {
          sentence: 'Er ist ein enger Freund meiner Familie.',
          translation: 'He is a close friend of my family.',
        },
        {
          sentence: 'Sie hat viele Freunde in der Schule.',
          translation: 'She has many friends at school.',
        },
        {
          sentence: 'Wir sind gute Freunde und machen viel zusammen.',
          translation: 'We are good friends and do a lot together.',
        },
        {
          sentence: 'Er ist ein treuer Freund, der immer für mich da ist.',
          translation: 'He is a loyal friend who is always there for me.',
        },
      ],
    },
    {
      word: 'begann',
      desc: "Past tense of the verb 'beginnen', meaning 'began', indicating the action of starting or commencing something.",
      examples: [
        {
          sentence: 'Sie begann mit dem Studium der Medizin.',
          translation: 'She began studying medicine.',
        },
        {
          sentence: 'Das Konzert begann pünktlich um 20 Uhr.',
          translation: 'The concert began promptly at 8 p.m.',
        },
        {
          sentence: 'Er begann ein neues Kapitel in seinem Leben.',
          translation: 'He began a new chapter in his life.',
        },
        {
          sentence: 'Die Sonne begann langsam unterzugehen.',
          translation: 'The sun began to set slowly.',
        },
        {
          sentence: 'Sie begann mit einem Lächeln auf ihrem Gesicht.',
          translation: 'She began with a smile on her face.',
        },
      ],
    },
    {
      word: 'Idee',
      desc: "Noun meaning 'idea', indicating a thought or suggestion as to a possible course of action.",
      examples: [
        {
          sentence: 'Sie hatte eine großartige Idee für ein neues Projekt.',
          translation: 'She had a great idea for a new project.',
        },
        {
          sentence: 'Die Idee wurde von allen begrüßt.',
          translation: 'The idea was welcomed by everyone.',
        },
        {
          sentence:
            'Er hatte eine brillante Idee, wie das Problem gelöst werden könnte.',
          translation:
            'He had a brilliant idea of how the problem could be solved.',
        },
        {
          sentence: 'Die Idee, das Unternehmen zu erweitern, wurde diskutiert.',
          translation: 'The idea of expanding the business was discussed.',
        },
        {
          sentence: 'Wir sollten diese Idee weiterverfolgen.',
          translation: 'We should pursue this idea further.',
        },
      ],
    },
    {
      word: 'Fisch',
      desc: "Noun meaning 'fish', indicating a limbless cold-blooded vertebrate animal with gills and fins living wholly in water.",
      examples: [
        {
          sentence: 'Sie mag gerne gegrillten Fisch zum Abendessen.',
          translation: 'She likes grilled fish for dinner.',
        },
        {
          sentence: 'Der Fisch schwamm schnell im klaren Wasser.',
          translation: 'The fish swam quickly in the clear water.',
        },
        {
          sentence: 'Wir haben frischen Fisch vom Markt gekauft.',
          translation: 'We bought fresh fish from the market.',
        },
        {
          sentence: 'Die Kinder fütterten die Fische im Teich.',
          translation: 'The children fed the fish in the pond.',
        },
        {
          sentence: 'Der Fluss ist voller bunter Fische.',
          translation: 'The river is full of colorful fish.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'berg, Stopp, einmal, Basis, hören, Pferd, Schnitt, sicher, beobachten, Farbe',
  words: [
    {
      word: 'berg',
      desc: "Noun referring to a large natural elevation of the earth's surface rising abruptly from the surrounding level; a mountain.",
      examples: [
        {
          sentence: 'Der Mount Everest ist der höchste Berg der Welt.',
          translation: 'Mount Everest is the tallest mountain in the world.',
        },
        {
          sentence: 'Wir wandern gerne in den Bergen.',
          translation: 'We enjoy hiking in the mountains.',
        },
        {
          sentence: 'Der Berggipfel war mit Schnee bedeckt.',
          translation: 'The mountain peak was covered with snow.',
        },
        {
          sentence: 'Es gibt viele Wanderwege in den Bergen.',
          translation: 'There are many hiking trails in the mountains.',
        },
        {
          sentence: 'Sie können die Stadt vom Berg aus sehen.',
          translation: 'You can see the city from the mountain.',
        },
      ],
    },
    {
      word: 'Stopp',
      desc: 'Noun indicating the act of ceasing movement or operation; a halt or pause.',
      examples: [
        {
          sentence:
            'Der Zug machte einen kurzen Stopp, um Passagiere einzuladen.',
          translation: 'The train made a brief stop to pick up passengers.',
        },
        {
          sentence:
            'Bitte machen Sie einen Stopp, damit wir etwas essen können.',
          translation:
            'Please make a stop so that we can grab something to eat.',
        },
        {
          sentence: 'Der Verkehr kam an einer roten Ampel zum Stopp.',
          translation: 'The traffic came to a stop at a red light.',
        },
        {
          sentence: 'Wir machten einen Stopp, um die Aussicht zu genießen.',
          translation: 'We made a stop to enjoy the view.',
        },
        {
          sentence: 'Der Fahrer machte einen Stopp, um sich auszuruhen.',
          translation: 'The driver made a stop to rest.',
        },
      ],
    },
    {
      word: 'einmal',
      desc: "Adverb indicating 'once', referring to a single occasion or instance.",
      examples: [
        {
          sentence:
            'Ich habe das Buch einmal gelesen und es hat mir sehr gefallen.',
          translation: 'I read the book once, and I really liked it.',
        },
        {
          sentence:
            'Ich habe einmal versucht, Klavier zu spielen, aber es war nicht mein Ding.',
          translation: "I tried playing the piano once, but it wasn't for me.",
        },
        {
          sentence:
            'Wir waren einmal in Paris und haben den Eiffelturm besichtigt.',
          translation: 'We were once in Paris and visited the Eiffel Tower.',
        },
        {
          sentence: 'Er hat mir einmal geholfen, als ich Probleme hatte.',
          translation: 'He helped me once when I was having trouble.',
        },
        {
          sentence: 'Ich werde dich noch einmal fragen, ob du kommen möchtest.',
          translation: 'I will ask you again once if you want to come.',
        },
      ],
    },
    {
      word: 'Basis',
      desc: 'Noun indicating the fundamental principles or groundwork of something; the foundation or starting point.',
      examples: [
        {
          sentence: 'Die Basis einer erfolgreichen Beziehung ist Vertrauen.',
          translation: 'The foundation of a successful relationship is trust.',
        },
        {
          sentence: 'Die Firma hat eine solide finanzielle Basis.',
          translation: 'The company has a solid financial foundation.',
        },
        {
          sentence: 'Der Vertrag dient als Basis für unsere Zusammenarbeit.',
          translation:
            'The contract serves as the basis for our collaboration.',
        },
        {
          sentence:
            'Wir müssen zuerst die Grundlagen verstehen, bevor wir weitermachen können.',
          translation:
            'We need to understand the basics first before we can proceed.',
        },
        {
          sentence:
            'Der Mathematikunterricht baut auf den Grundlagen der Addition und Subtraktion auf.',
          translation:
            'Math class builds upon the basics of addition and subtraction.',
        },
      ],
    },
    {
      word: 'hören',
      desc: "Verb meaning 'to perceive or apprehend by the ear'; to listen.",
      examples: [
        {
          sentence: 'Ich kann die Vögel draußen hören.',
          translation: 'I can hear the birds outside.',
        },
        {
          sentence: 'Kannst du mich hören?',
          translation: 'Can you hear me?',
        },
        {
          sentence: 'Er hat sie weinen gehört.',
          translation: 'He heard her crying.',
        },
        {
          sentence: 'Sie hört gerne Musik, während sie arbeitet.',
          translation: 'She likes to listen to music while she works.',
        },
        {
          sentence: 'Wir haben die Nachrichten im Radio gehört.',
          translation: 'We listened to the news on the radio.',
        },
      ],
    },
    {
      word: 'Pferd',
      desc: 'Noun referring to a large hoofed mammal, typically used for riding, racing, and to carry and pull loads.',
      examples: [
        {
          sentence: 'Das Pferd galoppierte über die Wiese.',
          translation: 'The horse galloped across the meadow.',
        },
        {
          sentence: 'Sie ritt auf einem schwarzen Pferd.',
          translation: 'She rode on a black horse.',
        },
        {
          sentence: 'Die Bauern benutzten das Pferd, um den Wagen zu ziehen.',
          translation: 'The farmers used the horse to pull the wagon.',
        },
        {
          sentence: 'Ein Pferd kann sehr schnell laufen.',
          translation: 'A horse can run very fast.',
        },
        {
          sentence: 'Er pflegte Pferde auf seiner Ranch zu züchten.',
          translation: 'He used to breed horses on his ranch.',
        },
      ],
    },
    {
      word: 'Schnitt',
      desc: 'Noun indicating the act or result of cutting, typically with a sharp tool or object.',
      examples: [
        {
          sentence: 'Sie machte einen sauberen Schnitt mit der Schere.',
          translation: 'She made a clean cut with the scissors.',
        },
        {
          sentence: 'Der Gärtner machte einen Schnitt in den Baumstamm.',
          translation: 'The gardener made a cut into the tree trunk.',
        },
        {
          sentence: 'Die Köchin machte einen Schnitt in das Fleisch.',
          translation: 'The chef made a cut in the meat.',
        },
        {
          sentence: 'Der Schnitt war nicht gerade.',
          translation: "The cut wasn't straight.",
        },
        {
          sentence: 'Sie zeigte ihm den Schnitt in ihrer Hand.',
          translation: 'She showed him the cut on her hand.',
        },
      ],
    },
    {
      word: 'sicher',
      desc: "Adjective meaning 'free from danger or risk'; not likely to be harmed or lost.",
      examples: [
        {
          sentence: 'Die Tür war sicher verriegelt.',
          translation: 'The door was securely locked.',
        },
        {
          sentence: 'Sie fühlte sich sicher in seiner Gegenwart.',
          translation: 'She felt safe in his presence.',
        },
        {
          sentence: 'Das Haus wurde sicher vor Dieben geschützt.',
          translation: 'The house was securely protected from thieves.',
        },
        {
          sentence: 'Der Fahrer hielt das Auto sicher unter Kontrolle.',
          translation: 'The driver kept the car securely under control.',
        },
        {
          sentence: 'Wir können sicher sein, dass er pünktlich sein wird.',
          translation: 'We can be sure that he will be on time.',
        },
      ],
    },
    {
      word: 'beobachten',
      desc: "Verb meaning 'to observe or watch attentively over a period of time'.",
      examples: [
        {
          sentence: 'Die Kinder beobachteten die Vögel im Garten.',
          translation: 'The children watched the birds in the garden.',
        },
        {
          sentence:
            'Er beobachtete den Sonnenuntergang von seinem Fenster aus.',
          translation: 'He observed the sunset from his window.',
        },
        {
          sentence: 'Die Wissenschaftler beobachteten das Verhalten der Affen.',
          translation: 'The scientists observed the behavior of the monkeys.',
        },
        {
          sentence:
            'Die Detektive beobachteten den Verdächtigen aus der Ferne.',
          translation: 'The detectives watched the suspect from a distance.',
        },
        {
          sentence:
            'Sie beobachteten die Wolken, während sie auf dem Gras lagen.',
          translation: 'They watched the clouds while lying on the grass.',
        },
      ],
    },
    {
      word: 'Farbe',
      desc: 'Noun indicating the property possessed by an object of producing different sensations on the eye as a result of the way the object reflects or emits light.',
      examples: [
        {
          sentence: 'Welche Farbe hat dein Auto?',
          translation: 'What color is your car?',
        },
        {
          sentence:
            'Ich liebe die Farbe des Himmels während des Sonnenuntergangs.',
          translation: 'I love the color of the sky during sunset.',
        },
        {
          sentence:
            'Sie mischte verschiedene Farben, um das perfekte Grün zu erhalten.',
          translation: 'She mixed different colors to get the perfect green.',
        },
        {
          sentence: 'Das Bild war in lebendigen Farben gemalt.',
          translation: 'The picture was painted in vibrant colors.',
        },
        {
          sentence: 'Die Farbe der Blätter änderte sich im Herbst.',
          translation: 'The color of the leaves changed in the autumn.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Gesicht, Holz, Haupt, geöffnet, scheinen, zusammen, nächste, weiß, Kinder, Start',
  words: [
    {
      word: 'Gesicht',
      desc: "Noun referring to the front part of a person's head, where the eyes, nose, and mouth are located.",
      examples: [
        {
          sentence: 'Sie hat ein hübsches Gesicht.',
          translation: 'She has a pretty face.',
        },
        {
          sentence: 'Sein Gesicht strahlte vor Glück.',
          translation: 'His face beamed with happiness.',
        },
        {
          sentence: 'Das Gesicht des Kindes war mit Schokolade verschmiert.',
          translation: "The child's face was smeared with chocolate.",
        },
        {
          sentence: 'Er konnte die Angst in ihrem Gesicht sehen.',
          translation: 'He could see the fear on her face.',
        },
        {
          sentence: 'Sie drehte sich weg, um ihr Gesicht zu verbergen.',
          translation: 'She turned away to hide her face.',
        },
      ],
    },
    {
      word: 'Holz',
      desc: 'Noun indicating the hard fibrous material that forms the main substance of the trunk or branches of a tree or shrub.',
      examples: [
        {
          sentence: 'Das Tischlergeschäft verwendet viel Holz für ihre Möbel.',
          translation:
            'The carpentry shop uses a lot of wood for their furniture.',
        },
        {
          sentence: 'Wir machten ein Feuer mit trockenem Holz.',
          translation: 'We made a fire with dry wood.',
        },
        {
          sentence: 'Die Skulptur war aus massivem Holz geschnitzt.',
          translation: 'The sculpture was carved from solid wood.',
        },
        {
          sentence: 'Der Boden war mit Holzdielen bedeckt.',
          translation: 'The floor was covered with wooden planks.',
        },
        {
          sentence: 'Das Haus hatte Holzbalken an der Decke.',
          translation: 'The house had wooden beams on the ceiling.',
        },
      ],
    },
    {
      word: 'Haupt',
      desc: "Adjective indicating 'most important', or the leading element of something.",
      examples: [
        {
          sentence: 'Die Hauptstadt ist das politische Zentrum des Landes.',
          translation:
            'The capital city is the political center of the country.',
        },
        {
          sentence: 'Das Hauptproblem ist die Arbeitslosigkeit.',
          translation: 'The main problem is unemployment.',
        },
        {
          sentence: 'Sie konzentrierte sich auf die Hauptaufgabe.',
          translation: 'She focused on the main task.',
        },
        {
          sentence: 'Der Hauptgrund für das Treffen war die Budgetplanung.',
          translation: 'The main reason for the meeting was budget planning.',
        },
        {
          sentence: 'Er nahm eine Hauptrolle in dem Film ein.',
          translation: 'He took a leading role in the movie.',
        },
      ],
    },
    {
      word: 'geöffnet',
      desc: 'Adjective indicating that something is not closed or sealed; accessible.',
      examples: [
        {
          sentence: 'Das Fenster war geöffnet, um frische Luft hereinzulassen.',
          translation: 'The window was open to let in fresh air.',
        },
        {
          sentence: 'Das Geschäft ist täglich von 9 bis 5 Uhr geöffnet.',
          translation: 'The store is open daily from 9 to 5.',
        },
        {
          sentence: 'Der Brief war bereits geöffnet, als er ankam.',
          translation: 'The letter was already opened when it arrived.',
        },
        {
          sentence: 'Das Museum ist für die Öffentlichkeit geöffnet.',
          translation: 'The museum is open to the public.',
        },
        {
          sentence: 'Die Tür war weit geöffnet.',
          translation: 'The door was wide open.',
        },
      ],
    },
    {
      word: 'scheinen',
      desc: "Verb indicating 'to appear or give the impression of being something'.",
      examples: [
        {
          sentence: 'Die Sonne schien hell am Himmel.',
          translation: 'The sun shone brightly in the sky.',
        },
        {
          sentence:
            'Es scheint, als ob sie heute nicht zur Arbeit kommen wird.',
          translation: "It seems like she won't come to work today.",
        },
        {
          sentence: 'Er scheint ein netter Kerl zu sein.',
          translation: 'He seems like a nice guy.',
        },
        {
          sentence: 'Der Erfolg scheint ihr zu folgen.',
          translation: 'Success seems to follow her.',
        },
        {
          sentence: 'Es scheint, dass sie die Antwort nicht kennt.',
          translation: "It seems that she doesn't know the answer.",
        },
      ],
    },
    {
      word: 'zusammen',
      desc: "Adverb indicating 'in company or in association with others'.",
      examples: [
        {
          sentence: 'Wir gingen zusammen zum Park.',
          translation: 'We went to the park together.',
        },
        {
          sentence: 'Die Kinder spielten zusammen im Garten.',
          translation: 'The children played together in the garden.',
        },
        {
          sentence: 'Wir arbeiteten den ganzen Tag zusammen.',
          translation: 'We worked together all day.',
        },
        {
          sentence: 'Sie standen zusammen vor dem Gebäude.',
          translation: 'They stood together in front of the building.',
        },
        {
          sentence: 'Wir fuhren zusammen in den Urlaub.',
          translation: 'We went on vacation together.',
        },
      ],
    },
    {
      word: 'nächste',
      desc: "Adjective indicating 'nearest in space or time'.",
      examples: [
        {
          sentence: 'Der nächste Bus kommt in zehn Minuten.',
          translation: 'The next bus arrives in ten minutes.',
        },
        {
          sentence: 'Er wohnt im nächsten Haus.',
          translation: 'He lives in the next house.',
        },
        {
          sentence: 'Das nächste Treffen ist am Mittwoch.',
          translation: 'The next meeting is on Wednesday.',
        },
        {
          sentence: 'Wir sehen uns nächsten Monat.',
          translation: "We'll see each other next month.",
        },
        {
          sentence: 'Sie sitzt in der nächsten Reihe.',
          translation: "She's sitting in the next row.",
        },
      ],
    },
    {
      word: 'weiß',
      desc: 'Adjective indicating the color of snow or milk; the opposite of black.',
      examples: [
        {
          sentence: 'Das Haus hatte ein weißes Dach.',
          translation: 'The house had a white roof.',
        },
        {
          sentence: 'Sie trug ein weißes Kleid zur Party.',
          translation: 'She wore a white dress to the party.',
        },
        {
          sentence: 'Der Schnee war strahlend weiß.',
          translation: 'The snow was gleaming white.',
        },
        {
          sentence: 'Er malte die Wand mit weißer Farbe.',
          translation: 'He painted the wall with white paint.',
        },
        {
          sentence: 'Ihre Zähne waren blendend weiß.',
          translation: 'Her teeth were dazzling white.',
        },
      ],
    },
    {
      word: 'Kinder',
      desc: 'Plural noun referring to young human beings below the age of puberty.',
      examples: [
        {
          sentence: 'Die Kinder spielten im Park.',
          translation: 'The children played in the park.',
        },
        {
          sentence: 'Sie las ihren Kindern eine Gute-Nacht-Geschichte vor.',
          translation: 'She read a bedtime story to her children.',
        },
        {
          sentence: 'Die Kinder lachten laut.',
          translation: 'The children laughed loudly.',
        },
        {
          sentence: 'Die Kinder gingen zur Schule.',
          translation: 'The children went to school.',
        },
        {
          sentence: 'Die Kinder rannten im Garten herum.',
          translation: 'The children ran around in the garden.',
        },
      ],
    },
    {
      word: 'Start',
      desc: 'Noun indicating the beginning or the point in time or space at which something begins.',
      examples: [
        {
          sentence: 'Der Start des Rennens war aufregend.',
          translation: 'The start of the race was exciting.',
        },
        {
          sentence: 'Wir machen einen neuen Start.',
          translation: "We're making a fresh start.",
        },
        {
          sentence: 'Der Start des Films verzögerte sich um einige Minuten.',
          translation: 'The start of the movie was delayed by a few minutes.',
        },
        {
          sentence: 'Sie hatte einen guten Start in den Tag.',
          translation: 'She had a good start to the day.',
        },
        {
          sentence: 'Das war ein vielversprechender Start.',
          translation: 'That was a promising start.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'bekam, gehen, Beispiel, erleichtern, Papier, Gruppe, immer, Musik, diejenigen, beide',
  words: [
    {
      word: 'bekam',
      desc: "Past tense of 'get'; received or acquired something.",
      examples: [
        {
          sentence: 'Ich bekam einen Brief von meinem Freund.',
          translation: 'I got a letter from my friend.',
        },
        {
          sentence: 'Er bekam eine Belohnung für seine Bemühungen.',
          translation: 'He got a reward for his efforts.',
        },
        {
          sentence: 'Sie bekam einen Preis für ihre Leistung.',
          translation: 'She got a prize for her performance.',
        },
        {
          sentence: 'Wir bekamen ein Geschenk zur Hochzeit.',
          translation: 'We got a wedding gift.',
        },
        {
          sentence: 'Sie bekam eine Antwort auf ihre Frage.',
          translation: 'She got an answer to her question.',
        },
      ],
    },
    {
      word: 'gehen',
      desc: "Verb indicating 'to move or travel; to walk'.",
      examples: [
        {
          sentence: 'Sie ging zur Arbeit.',
          translation: 'She went to work.',
        },
        {
          sentence: 'Er ging langsam den Weg entlang.',
          translation: 'He walked slowly along the path.',
        },
        {
          sentence: 'Wir gingen durch den Park.',
          translation: 'We walked through the park.',
        },
        {
          sentence: 'Sie ging schnell die Treppe hinauf.',
          translation: 'She walked quickly up the stairs.',
        },
        {
          sentence: 'Er ging zum Bahnhof, um sie abzuholen.',
          translation: 'He went to the train station to pick her up.',
        },
      ],
    },
    {
      word: 'Beispiel',
      desc: 'Noun indicating an instance or illustration of something.',
      examples: [
        {
          sentence: 'Hier ist ein Beispiel für seine Arbeit.',
          translation: 'Here is an example of his work.',
        },
        {
          sentence: 'Kannst du mir ein Beispiel geben?',
          translation: 'Can you give me an example?',
        },
        {
          sentence: 'Das ist ein gutes Beispiel für Teamarbeit.',
          translation: 'That is a good example of teamwork.',
        },
        {
          sentence: 'Er erklärte die Regel mit einem einfachen Beispiel.',
          translation: 'He explained the rule with a simple example.',
        },
        {
          sentence: 'Sie zeigte uns ein Beispiel für kreatives Schreiben.',
          translation: 'She showed us an example of creative writing.',
        },
      ],
    },
    {
      word: 'erleichtern',
      desc: "Verb indicating 'to make something easier or more bearable'.",
      examples: [
        {
          sentence: 'Die Technologie erleichtert die Kommunikation.',
          translation: 'Technology makes communication easier.',
        },
        {
          sentence: 'Die Medikamente erleichtern die Schmerzen.',
          translation: 'The medication eases the pain.',
        },
        {
          sentence: 'Eine gute Anleitung kann das Lernen erleichtern.',
          translation: 'Good instructions can facilitate learning.',
        },
        {
          sentence: 'Ein freundliches Lächeln kann Spannungen erleichtern.',
          translation: 'A friendly smile can ease tensions.',
        },
        {
          sentence: 'Entspannungstechniken können Stress erleichtern.',
          translation: 'Relaxation techniques can alleviate stress.',
        },
      ],
    },
    {
      word: 'Papier',
      desc: 'Noun indicating a material manufactured in thin sheets from the pulp of wood or other fibrous substances.',
      examples: [
        {
          sentence: 'Das Gedicht wurde auf einem Stück Papier geschrieben.',
          translation: 'The poem was written on a piece of paper.',
        },
        {
          sentence: 'Er reichte dem Lehrer sein Papier ein.',
          translation: 'He handed in his paper to the teacher.',
        },
        {
          sentence: 'Das Buch war auf dickem Papier gedruckt.',
          translation: 'The book was printed on thick paper.',
        },
        {
          sentence: 'Sie machte Notizen auf einem leeren Blatt Papier.',
          translation: 'She made notes on a blank sheet of paper.',
        },
        {
          sentence: 'Die Urkunde wurde auf speziellem Papier gedruckt.',
          translation: 'The certificate was printed on special paper.',
        },
      ],
    },
    {
      word: 'Gruppe',
      desc: 'Noun referring to a number of people or things that are located, gathered, or classed together.',
      examples: [
        {
          sentence: 'Die Gruppe bestand aus Studenten und Professoren.',
          translation: 'The group consisted of students and professors.',
        },
        {
          sentence: 'Die Kinder bildeten eine kleine Gruppe im Park.',
          translation: 'The children formed a small group in the park.',
        },
        {
          sentence:
            'Die Mitarbeiter trafen sich als Gruppe, um Ideen auszutauschen.',
          translation: 'The employees gathered as a group to exchange ideas.',
        },
        {
          sentence: 'Die Band spielte vor einer großen Gruppe von Zuschauern.',
          translation:
            'The band performed in front of a large group of spectators.',
        },
        {
          sentence: 'Die Gruppe diskutierte verschiedene Möglichkeiten.',
          translation: 'The group discussed various options.',
        },
      ],
    },
    {
      word: 'immer',
      desc: "Adverb indicating 'at all times; constantly'.",
      examples: [
        {
          sentence: 'Sie war immer freundlich zu allen.',
          translation: 'She was always friendly to everyone.',
        },
        {
          sentence: 'Die Sonne scheint fast immer hier.',
          translation: 'The sun shines almost always here.',
        },
        {
          sentence: 'Er ist immer pünktlich.',
          translation: 'He is always on time.',
        },
        {
          sentence: 'Sie trägt immer ihre Lieblingskette.',
          translation: 'She always wears her favorite necklace.',
        },
        {
          sentence: 'Wir können uns immer auf ihn verlassen.',
          translation: 'We can always rely on him.',
        },
      ],
    },
    {
      word: 'Musik',
      desc: 'Noun referring to organized sound in harmonious patterns, typically with melody, rhythm, and often lyrics.',
      examples: [
        {
          sentence: 'Sie hört gerne klassische Musik.',
          translation: 'She enjoys listening to classical music.',
        },
        {
          sentence: 'Die Band spielte laute Musik auf der Bühne.',
          translation: 'The band played loud music on the stage.',
        },
        {
          sentence: 'Er studiert Musiktheorie an der Universität.',
          translation: 'He is studying music theory at the university.',
        },
        {
          sentence: 'Sie hat eine vielseitige Musiksammlung.',
          translation: 'She has a diverse music collection.',
        },
        {
          sentence: 'Die Musik im Film erzeugte eine emotionale Atmosphäre.',
          translation: 'The music in the film created an emotional atmosphere.',
        },
      ],
    },
    {
      word: 'diejenigen',
      desc: 'Pronoun indicating specific people or things.',
      examples: [
        {
          sentence: 'Diejenigen, die früh kommen, bekommen die besten Plätze.',
          translation: 'Those who come early get the best seats.',
        },
        {
          sentence:
            'Wir haben diejenigen ausgewählt, die am besten geeignet sind.',
          translation: 'We have chosen those who are most suitable.',
        },
        {
          sentence: 'Diejenigen, die sich beeilen, werden belohnt.',
          translation: 'Those who hurry will be rewarded.',
        },
        {
          sentence:
            'Diejenigen, die nicht teilnehmen können, müssen sich abmelden.',
          translation: 'Those who cannot attend must inform us.',
        },
        {
          sentence:
            'Er hat diejenigen eingeladen, die er als Freunde betrachtet.',
          translation: 'He has invited those whom he considers friends.',
        },
      ],
    },
    {
      word: 'beide',
      desc: "Adjective indicating 'two persons or things together; both'.",
      examples: [
        {
          sentence: 'Sie mögen beide denselben Film.',
          translation: 'They both like the same movie.',
        },
        {
          sentence: 'Beide Kandidaten haben gute Chancen zu gewinnen.',
          translation: 'Both candidates have good chances of winning.',
        },
        {
          sentence:
            'Beide Geschwister haben sich für denselben Beruf entschieden.',
          translation: 'Both siblings have chosen the same profession.',
        },
        {
          sentence: 'Sie haben beide dieselbe Meinung zu diesem Thema.',
          translation: 'They both have the same opinion on this topic.',
        },
        {
          sentence: 'Die beiden Teams sind in der Endrunde des Wettbewerbs.',
          translation: 'Both teams are in the final round of the competition.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Marke, oft, Schreiben, bis, Meile, Fluss, Auto, Füße, Pflege, zweite',
  words: [
    {
      word: 'Marke',
      desc: 'Noun indicating a symbol or design used to identify a product or company.',
      examples: [
        {
          sentence: 'Die Marke auf dem Produkt zeigt seine Qualität an.',
          translation: 'The mark on the product indicates its quality.',
        },
        {
          sentence: 'Er sammelt Briefmarken aus verschiedenen Ländern.',
          translation: 'He collects stamps from different countries.',
        },
        {
          sentence:
            'Diese Marke ist weltweit bekannt für ihre zuverlässigen Produkte.',
          translation:
            'This brand is globally recognized for its reliable products.',
        },
        {
          sentence:
            'Die Marke auf dem Etikett zeigt den Hersteller des Kleidungsstücks an.',
          translation:
            'The mark on the label indicates the manufacturer of the garment.',
        },
        {
          sentence:
            'Es gibt viele Marken von Schokolade, aber diese ist meine Lieblingsmarke.',
          translation:
            'There are many brands of chocolate, but this one is my favorite brand.',
        },
      ],
    },
    {
      word: 'oft',
      desc: 'Adverb indicating frequency, occurring frequently or repeatedly.',
      examples: [
        {
          sentence: 'Sie geht oft spazieren, besonders am Wochenende.',
          translation: 'She often goes for a walk, especially on weekends.',
        },
        {
          sentence: 'Wir treffen uns oft zum Mittagessen in der Kantine.',
          translation: 'We often meet for lunch in the cafeteria.',
        },
        {
          sentence: 'Er vergisst oft, seine Schlüssel mitzunehmen.',
          translation: 'He often forgets to take his keys with him.',
        },
        {
          sentence:
            'Sie ruft ihre Eltern oft an, um sich nach ihrem Befinden zu erkundigen.',
          translation:
            'She often calls her parents to ask about their well-being.',
        },
        {
          sentence: 'Es regnet in dieser Stadt oft im Sommer.',
          translation: 'It often rains in this city in the summer.',
        },
      ],
    },
    {
      word: 'Schreiben',
      desc: "Verb meaning 'to write', to compose text on a surface using an instrument like a pen or keyboard.",
      examples: [
        {
          sentence:
            'Ich schreibe jeden Tag in mein Tagebuch, um meine Gedanken festzuhalten.',
          translation: 'I write in my diary every day to record my thoughts.',
        },
        {
          sentence: 'Sie muss einen Bericht für die Arbeit schreiben.',
          translation: 'She has to write a report for work.',
        },
        {
          sentence:
            'Wir haben einen Brief an unsere Großeltern geschrieben, um ihnen von unserem Urlaub zu erzählen.',
          translation:
            'We wrote a letter to our grandparents to tell them about our vacation.',
        },
        {
          sentence: 'Er schreibt Gedichte in seiner Freizeit.',
          translation: 'He writes poems in his free time.',
        },
        {
          sentence: 'Die Kinder schreiben Weihnachtskarten an ihre Freunde.',
          translation: 'The children write Christmas cards to their friends.',
        },
      ],
    },
    {
      word: 'bis',
      desc: 'Preposition indicating a point in time or the event mentioned does not happen or will not happen before the stated time.',
      examples: [
        {
          sentence:
            'Wir müssen warten, bis der Zug ankommt, bevor wir einsteigen können.',
          translation:
            'We have to wait until the train arrives before we can board.',
        },
        {
          sentence: 'Bleib hier, bis ich zurückkomme.',
          translation: 'Stay here until I come back.',
        },
        {
          sentence: 'Du musst im Supermarkt bleiben, bis ich dich abhole.',
          translation:
            'You have to stay in the supermarket until I pick you up.',
        },
        {
          sentence: 'Sie üben jeden Tag Klavier, bis sie perfekt sind.',
          translation:
            'They practice the piano every day until they are perfect.',
        },
        {
          sentence: 'Es dauerte bis Mitternacht, bis sie nach Hause kam.',
          translation: 'It was midnight until she came home.',
        },
      ],
    },
    {
      word: 'Meile',
      desc: 'Noun indicating a unit of linear measurement equal to 5,280 feet or 1,760 yards.',
      examples: [
        {
          sentence: 'Die Stadt ist ungefähr 10 Meilen von hier entfernt.',
          translation: 'The city is about 10 miles away from here.',
        },
        {
          sentence: 'Er läuft jeden Morgen drei Meilen zum Fitnessstudio.',
          translation: 'He runs three miles to the gym every morning.',
        },
        {
          sentence: 'Die Autobahn erstreckt sich über viele Meilen.',
          translation: 'The highway extends over many miles.',
        },
        {
          sentence: 'Sie segelten die letzten Meilen bis zum Hafen.',
          translation: 'They sailed the last miles to the harbor.',
        },
        {
          sentence:
            'Wir wanderten durch den Wald, der mehrere Meilen lang war.',
          translation:
            'We hiked through the forest, which was several miles long.',
        },
      ],
    },
    {
      word: 'Fluss',
      desc: 'Noun referring to a natural flowing watercourse, typically with fresh water.',
      examples: [
        {
          sentence:
            'Der Fluss schlängelt sich durch die Landschaft und bietet malerische Aussichten.',
          translation:
            'The river winds through the landscape, offering picturesque views.',
        },
        {
          sentence:
            'Es gibt viele Fische im Fluss, die für Angler attraktiv sind.',
          translation:
            'There are many fish in the river that are attractive to anglers.',
        },
        {
          sentence:
            'Die Kinder bauten ein Floß und ließen es den Fluss hinuntertreiben.',
          translation:
            'The children built a raft and let it drift down the river.',
        },
        {
          sentence: 'Der Fluss ist im Winter oft zugefroren.',
          translation: 'The river is often frozen in winter.',
        },
        {
          sentence: 'Wir haben ein Picknick am Ufer des Flusses gemacht.',
          translation: 'We had a picnic on the bank of the river.',
        },
      ],
    },
    {
      word: 'Auto',
      desc: 'Noun referring to a motor vehicle used for transportation.',
      examples: [
        {
          sentence:
            'Er fuhr mit dem Auto zur Arbeit, da es schneller als der Bus war.',
          translation: 'He drove to work by car as it was faster than the bus.',
        },
        {
          sentence: 'Wir mieteten ein Auto für unseren Roadtrip durch Europa.',
          translation: 'We rented a car for our road trip through Europe.',
        },
        {
          sentence:
            'Das Auto benötigt dringend eine Inspektion, da es Probleme mit dem Motor hat.',
          translation:
            'The car urgently needs an inspection as it has issues with the engine.',
        },
        {
          sentence: 'Sie liebt ihr neues Auto, besonders die Farbe.',
          translation: 'She loves her new car, especially the color.',
        },
        {
          sentence:
            'Das Auto wurde in einer Garage geparkt, um es vor dem schlechten Wetter zu schützen.',
          translation:
            'The car was parked in a garage to protect it from the bad weather.',
        },
      ],
    },
    {
      word: 'Füße',
      desc: 'Plural noun referring to the lower extremity of the leg below the ankle.',
      examples: [
        {
          sentence:
            'Sie massierte ihre müden Füße nach einem langen Tag auf den Beinen.',
          translation:
            'She massaged her tired feet after a long day on her feet.',
        },
        {
          sentence: 'Die Schuhe drückten seine Füße und verursachten Blasen.',
          translation: 'The shoes were tight on his feet and caused blisters.',
        },
        {
          sentence:
            'Er ging barfuß über den sandigen Boden und spürte den feinen Sand zwischen seinen Zehen.',
          translation:
            'He walked barefoot on the sandy ground, feeling the fine sand between his toes.',
        },
        {
          sentence:
            'Die Kinder planschten im Wasser und hatten Sand an ihren Füßen.',
          translation:
            'The children splashed in the water and had sand on their feet.',
        },
        {
          sentence:
            'Er setzte sich auf die Bank und legte die müden Füße hoch.',
          translation: 'He sat on the bench and put his tired feet up.',
        },
      ],
    },
    {
      word: 'Pflege',
      desc: 'Noun referring to the process of providing care for someone or something.',
      examples: [
        {
          sentence:
            'Sie arbeitet in der Altenpflege und betreut ältere Menschen in ihrem Zuhause.',
          translation:
            'She works in elderly care, looking after older people in their homes.',
        },
        {
          sentence:
            'Die Pflanzen benötigen regelmäßige Pflege, damit sie gesund bleiben.',
          translation: 'The plants require regular care to keep them healthy.',
        },
        {
          sentence:
            'Er kümmert sich liebevoll um sein Haustier und gibt ihm täglich Futter und Wasser.',
          translation:
            'He takes loving care of his pet, feeding it and giving it water every day.',
        },
        {
          sentence:
            'Die Möbel erfordern eine spezielle Pflege, um ihren Glanz zu erhalten.',
          translation:
            'The furniture requires special care to maintain its shine.',
        },
        {
          sentence:
            'Die Kinder wurden von ihrer Großmutter in ihrer Abwesenheit betreut.',
          translation:
            'The children were looked after by their grandmother in her absence.',
        },
      ],
    },
    {
      word: 'zweite',
      desc: 'Ordinal number indicating the position in a sequence, coming after the first.',
      examples: [
        {
          sentence: 'Sie gewann den zweiten Platz im Wettbewerb.',
          translation: 'She won second place in the competition.',
        },
        {
          sentence: 'Es war das zweite Mal, dass sie den Film gesehen hat.',
          translation: 'It was the second time she watched the movie.',
        },
        {
          sentence:
            'Er las das Buch zum zweiten Mal und bemerkte dabei neue Details.',
          translation:
            'He read the book for the second time and noticed new details.',
        },
        {
          sentence:
            'Der zweite Absatz des Artikels erläutert die Methodik der Studie.',
          translation:
            'The second paragraph of the article explains the methodology of the study.',
        },
        {
          sentence: 'Seine zweite Frau ist Lehrerin.',
          translation: 'His second wife is a teacher.',
        },
      ],
    },
  ],
};

const section2: Section = {
  sectionName: 'Common 100 German Words',
  lessons: [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
    lesson9,
    lesson10,
  ],
};

export default section2;
