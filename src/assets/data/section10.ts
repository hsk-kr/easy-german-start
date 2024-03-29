import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Sauerstoff, Zucker, Tod, ziemlich, Geschicklichkeit, Frauen, Saison, Lösung, Magnet, Silber',
  words: [
    {
      word: 'Sauerstoff',
      desc: "A vital gas that all living organisms need to breathe. It's invisible and essential for life.",
      examples: [
        {
          sentence:
            'Der Sauerstoffgehalt in der Luft ist wichtig für unsere Atmung.',
          translation:
            'The oxygen content in the air is important for our breathing.',
        },
        {
          sentence: 'Taucher nehmen Sauerstoffflaschen mit unter Wasser.',
          translation: 'Divers take oxygen tanks underwater.',
        },
        {
          sentence: 'Ohne Sauerstoff können wir nicht überleben.',
          translation: "We can't survive without oxygen.",
        },
        {
          sentence: 'Sauerstoff spielt eine zentrale Rolle in der Zellatmung.',
          translation: 'Oxygen plays a central role in cellular respiration.',
        },
        {
          sentence: 'Feuer benötigt Sauerstoff zum Brennen.',
          translation: 'Fire needs oxygen to burn.',
        },
      ],
    },
    {
      word: 'Zucker',
      desc: 'A sweet substance usually derived from sugar cane or beets, used to sweeten foods and drinks.',
      examples: [
        {
          sentence: 'Zucker wird oft zum Backen verwendet.',
          translation: 'Sugar is often used in baking.',
        },
        {
          sentence: 'Kannst du mir den Zucker reichen?',
          translation: 'Can you pass me the sugar?',
        },
        {
          sentence: 'Dieses Rezept erfordert einen Löffel Zucker.',
          translation: 'This recipe requires a spoonful of sugar.',
        },
        {
          sentence:
            'Viele Menschen versuchen, ihren Zuckerkonsum zu reduzieren.',
          translation: 'Many people try to reduce their sugar intake.',
        },
        {
          sentence: 'Zucker kommt natürlich in Früchten vor.',
          translation: 'Sugar occurs naturally in fruits.',
        },
      ],
    },
    {
      word: 'Tod',
      desc: 'The end of life; the cessation of all biological functions that sustain a living organism.',
      examples: [
        {
          sentence: 'Der Tod ist ein natürlicher Teil des Lebens.',
          translation: 'Death is a natural part of life.',
        },
        {
          sentence:
            'Viele Kulturen haben unterschiedliche Ansichten über den Tod.',
          translation: 'Many cultures have different views on death.',
        },
        {
          sentence: 'Die Nachricht von seinem Tod war ein Schock.',
          translation: 'The news of his death was a shock.',
        },
        {
          sentence: 'Forschungen zum Thema Tod und Sterben haben zugenommen.',
          translation: 'Research on death and dying has increased.',
        },
        {
          sentence:
            'Der Tod durch natürliche Ursachen tritt meist im hohen Alter ein.',
          translation: 'Death from natural causes usually occurs in old age.',
        },
      ],
    },
    {
      word: 'ziemlich',
      desc: 'A word used to express a moderate degree of something, similar to "quite" or "fairly."',
      examples: [
        {
          sentence: 'Das Ergebnis ist ziemlich beeindruckend.',
          translation: 'The result is quite impressive.',
        },
        {
          sentence: 'Er ist ziemlich groß für sein Alter.',
          translation: 'He is quite tall for his age.',
        },
        {
          sentence: 'Ich bin ziemlich sicher, dass sie kommen wird.',
          translation: 'I am fairly certain she will come.',
        },
        {
          sentence: 'Das Buch war ziemlich teuer.',
          translation: 'The book was quite expensive.',
        },
        {
          sentence: 'Sie ist ziemlich gut in Mathe.',
          translation: 'She is fairly good at math.',
        },
      ],
    },
    {
      word: 'Geschicklichkeit',
      desc: 'The ability to do something well, often requiring physical coordination or skill.',
      examples: [
        {
          sentence: 'Geschicklichkeit im Schreiben ist wichtig für diesen Job.',
          translation: 'Writing proficiency is important for this job.',
        },
        {
          sentence: 'Dieses Spiel testet deine Geschicklichkeit.',
          translation: 'This game tests your dexterity.',
        },
        {
          sentence:
            'Mit genügend Übung kann man jede Geschicklichkeit erlernen.',
          translation: 'With enough practice, any skill can be learned.',
        },
        {
          sentence: 'Seine Geschicklichkeit am Klavier ist bemerkenswert.',
          translation: 'His skill at the piano is remarkable.',
        },
        {
          sentence:
            'Feinmotorische Geschicklichkeit ist in der Chirurgie entscheidend.',
          translation: 'Fine motor skills are crucial in surgery.',
        },
      ],
    },
    {
      word: 'Frauen',
      desc: 'Adult human females, referring to gender identity and roles in society.',
      examples: [
        {
          sentence:
            'Frauen haben im Laufe der Geschichte für ihre Rechte gekämpft.',
          translation: 'Women have fought for their rights throughout history.',
        },
        {
          sentence:
            'In vielen Ländern sind Frauen jetzt in der Politik stärker vertreten.',
          translation:
            'In many countries, women are now more represented in politics.',
        },
        {
          sentence:
            'Frauen und Männer sollten gleiche Bezahlung für gleiche Arbeit erhalten.',
          translation: 'Women and men should receive equal pay for equal work.',
        },
        {
          sentence:
            'Die Gesundheitsversorgung für Frauen ist ein wichtiges Thema.',
          translation: "Women's health care is an important issue.",
        },
        {
          sentence:
            'Internationale Frauentag feiert die Errungenschaften von Frauen weltweit.',
          translation:
            "International Women's Day celebrates the achievements of women worldwide.",
        },
      ],
    },
    {
      word: 'Saison',
      desc: 'A specific time of year characterized by certain events, weather conditions, or activities.',
      examples: [
        {
          sentence: 'Fußballsaison beginnt im Herbst.',
          translation: 'Football season starts in the fall.',
        },
        {
          sentence: 'Während der Skisaison sind die Berge sehr belebt.',
          translation: 'During the ski season, the mountains are very busy.',
        },
        {
          sentence: 'Erdbeeren sind in der Saison besonders lecker.',
          translation: 'Strawberries are especially delicious in season.',
        },
        {
          sentence: 'Viele Restaurants bieten saisonale Speisekarten an.',
          translation: 'Many restaurants offer seasonal menus.',
        },
        {
          sentence: 'Die Touristensaison bringt viele Besucher in die Stadt.',
          translation: 'The tourist season brings many visitors to the city.',
        },
      ],
    },
    {
      word: 'Lösung',
      desc: 'The act or method of solving a problem or difficulty. Also refers to a liquid mixture where something is dissolved.',
      examples: [
        {
          sentence: 'Wir arbeiten an einer Lösung für das Verkehrsproblem.',
          translation: 'We are working on a solution to the traffic problem.',
        },
        {
          sentence: 'Eine friedliche Lösung ist immer vorzuziehen.',
          translation: 'A peaceful solution is always preferable.',
        },
        {
          sentence: 'Die chemische Lösung reagierte mit dem Metall.',
          translation: 'The chemical solution reacted with the metal.',
        },
        {
          sentence: 'Manchmal ist die einfachste Lösung die beste.',
          translation: 'Sometimes the simplest solution is the best.',
        },
        {
          sentence: 'Das Salz löste sich vollständig in der Lösung auf.',
          translation: 'The salt dissolved completely in the solution.',
        },
      ],
    },
    {
      word: 'Magnet',
      desc: 'An object that produces a magnetic field, attracting iron and some other metals. Also used metaphorically to describe something very attractive.',
      examples: [
        {
          sentence: 'Der Magnet zog die Eisenspäne an.',
          translation: 'The magnet attracted the iron filings.',
        },
        {
          sentence:
            'Wir benutzen Magnete, um Notizen am Kühlschrank zu befestigen.',
          translation: 'We use magnets to attach notes to the refrigerator.',
        },
        {
          sentence:
            'Das Konzert war ein Magnet für Musikfans aus der ganzen Stadt.',
          translation:
            'The concert was a magnet for music fans from all over the city.',
        },
        {
          sentence:
            'Elektromagnete spielen eine wichtige Rolle in der Elektrotechnik.',
          translation:
            'Electromagnets play an important role in electrical engineering.',
        },
        {
          sentence: 'Dieses Ferienziel ist ein wahrer Magnet für Touristen.',
          translation:
            'This holiday destination is a real magnet for tourists.',
        },
      ],
    },
    {
      word: 'Silber',
      desc: 'A precious metal with a shiny, white appearance, used in jewelry, coins, and various industrial applications.',
      examples: [
        {
          sentence: 'Silber wird oft zur Herstellung von Schmuck verwendet.',
          translation: 'Silver is often used for making jewelry.',
        },
        {
          sentence: 'Der Preis für Silber schwankt auf dem Weltmarkt.',
          translation: 'The price of silver fluctuates on the world market.',
        },
        {
          sentence:
            'Silberbesteck muss regelmäßig poliert werden, um es glänzend zu halten.',
          translation:
            'Silverware needs to be polished regularly to keep it shiny.',
        },
        {
          sentence:
            'Silber hat die höchste elektrische Leitfähigkeit aller Metalle.',
          translation:
            'Silver has the highest electrical conductivity of all metals.',
        },
        {
          sentence:
            'In der Fotografie wurde Silbernitrat verwendet, um Bilder zu entwickeln.',
          translation:
            'In photography, silver nitrate was used to develop pictures.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'danken, Zweig, Spiel, Suffix, insbesondere, Feige, ängstlich, riesig, Schwester, Stahl',
  words: [
    {
      word: 'danken',
      desc: 'To express gratitude; saying "thank you" to someone for something they have done.',
      examples: [
        {
          sentence: 'Ich möchte dir für deine Hilfe danken.',
          translation: 'I would like to thank you for your help.',
        },
        {
          sentence: 'Wir danken Ihnen für Ihre schnelle Antwort.',
          translation: 'We thank you for your quick response.',
        },
        {
          sentence: 'Nach dem Konzert dankte die Band ihrem Publikum.',
          translation: 'After the concert, the band thanked their audience.',
        },
        {
          sentence: 'Es ist wichtig, sich bei Freunden zu bedanken.',
          translation: 'It’s important to say thank you to friends.',
        },
        {
          sentence: 'Herr Müller dankte allen für die gute Zusammenarbeit.',
          translation: 'Mr. Müller thanked everyone for the good cooperation.',
        },
      ],
    },
    {
      word: 'Zweig',
      desc: 'A small branch or division of a tree or bush.',
      examples: [
        {
          sentence: 'Vögel bauen ihre Nester auf den Zweigen.',
          translation: 'Birds build their nests on the branches.',
        },
        {
          sentence: 'Ein gebrochener Zweig lag auf dem Boden.',
          translation: 'A broken branch lay on the ground.',
        },
        {
          sentence: 'Die Katze sprang von Zweig zu Zweig.',
          translation: 'The cat jumped from branch to branch.',
        },
        {
          sentence: 'Im Frühling sprießen neue Blätter an den Zweigen.',
          translation: 'In spring, new leaves sprout on the branches.',
        },
        {
          sentence: 'Der Wind ließ die Zweige sanft schwingen.',
          translation: 'The wind made the branches sway gently.',
        },
      ],
    },
    {
      word: 'Spiel',
      desc: 'An activity for amusement or entertainment, often with rules and objectives.',
      examples: [
        {
          sentence: 'Die Kinder spielten ein Spiel im Garten.',
          translation: 'The children played a game in the garden.',
        },
        {
          sentence: 'Fußball ist ein beliebtes Spiel weltweit.',
          translation: 'Football is a popular game worldwide.',
        },
        {
          sentence: 'Das Spiel endete unentschieden.',
          translation: 'The game ended in a draw.',
        },
        {
          sentence: 'Wir brauchen einen Plan und eine Strategie für das Spiel.',
          translation: 'We need a plan and a strategy for the game.',
        },
        {
          sentence: 'Sie verloren das Spiel, aber sie hatten Spaß.',
          translation: 'They lost the game, but they had fun.',
        },
      ],
    },
    {
      word: 'Suffix',
      desc: 'A letter or group of letters added to the end of a word to change its meaning or function.',
      examples: [
        {
          sentence: 'Das Suffix "-ung" verwandelt ein Verb in ein Substantiv.',
          translation: 'The suffix "-ung" turns a verb into a noun.',
        },
        {
          sentence: 'Im Deutschen gibt es viele Wörter mit dem Suffix "-keit".',
          translation:
            'In German, there are many words with the suffix "-keit".',
        },
        {
          sentence:
            'Durch Hinzufügen des Suffixes "-los" wird ein Adjektiv negiert.',
          translation: 'By adding the suffix "-los", an adjective is negated.',
        },
        {
          sentence: 'Das Suffix "-lich" bildet Adjektive aus Substantiven.',
          translation: 'The suffix "-lich" forms adjectives from nouns.',
        },
        {
          sentence:
            'Erklärungen von Suffixen helfen beim Verständnis neuer Wörter.',
          translation:
            'Explanations of suffixes help in understanding new words.',
        },
      ],
    },
    {
      word: 'insbesondere',
      desc: 'Especially or particularly; used to emphasize one thing among others.',
      examples: [
        {
          sentence: 'Das gilt insbesondere für dich.',
          translation: 'That applies especially to you.',
        },
        {
          sentence: 'Insbesondere interessiert mich die Kunstgeschichte.',
          translation: 'I am particularly interested in art history.',
        },
        {
          sentence: 'Die Regeln müssen insbesondere eingehalten werden.',
          translation: 'The rules must be followed, especially.',
        },
        {
          sentence: 'Er liebt alle seine Kinder, insbesondere den Jüngsten.',
          translation: 'He loves all his children, especially the youngest.',
        },
        {
          sentence: 'Diese Regelung betrifft insbesondere neue Mitglieder.',
          translation: 'This regulation concerns new members in particular.',
        },
      ],
    },
    {
      word: 'Feige',
      desc: 'A sweet, edible fruit of the fig tree, or the tree itself. Also used metaphorically to describe someone as cowardly.',
      examples: [
        {
          sentence: 'Ich habe Feigen im Supermarkt gekauft.',
          translation: 'I bought figs at the supermarket.',
        },
        {
          sentence: 'Feigen sind reich an Ballaststoffen.',
          translation: 'Figs are rich in fiber.',
        },
        {
          sentence:
            'Er wurde als Feige beschimpft, weil er sich nicht traute, nein zu sagen.',
          translation:
            'He was called a coward because he didn’t dare to say no.',
        },
        {
          sentence: 'In unserem Garten wächst ein Feigenbaum.',
          translation: 'A fig tree grows in our garden.',
        },
        {
          sentence: 'Die Feige symbolisiert Frieden und Wohlstand.',
          translation: 'The fig symbolizes peace and prosperity.',
        },
      ],
    },
    {
      word: 'ängstlich',
      desc: 'Feeling or showing fear or anxiety; timid.',
      examples: [
        {
          sentence: 'Sie war ängstlich vor ihrem ersten Schultag.',
          translation: 'She was anxious before her first day of school.',
        },
        {
          sentence: 'Der ängstliche Hund zitterte während des Gewitters.',
          translation: 'The anxious dog trembled during the thunderstorm.',
        },
        {
          sentence: 'Seine ängstliche Haltung machte ihn sympathisch.',
          translation: 'His anxious demeanor made him likable.',
        },
        {
          sentence: 'Ich bin ängstlich, wenn ich an Höhen denke.',
          translation: 'I feel fearful when I think about heights.',
        },
        {
          sentence: 'Ein ängstlicher Blick war in ihren Augen zu sehen.',
          translation: 'An anxious look was visible in her eyes.',
        },
      ],
    },
    {
      word: 'riesig',
      desc: 'Very large or great in size, extent, or amount.',
      examples: [
        {
          sentence: 'Der Baum im Garten ist riesig.',
          translation: 'The tree in the garden is huge.',
        },
        {
          sentence: 'Sie hatten einen riesigen Erfolg mit ihrem neuen Projekt.',
          translation: 'They had a huge success with their new project.',
        },
        {
          sentence: 'Das Universum ist unvorstellbar riesig.',
          translation: 'The universe is unimaginably huge.',
        },
        {
          sentence: 'Die Freude war riesig, als sie die Nachricht hörten.',
          translation: 'The joy was immense when they heard the news.',
        },
        {
          sentence: 'Ein riesiger Wal wurde nahe der Küste gesichtet.',
          translation: 'A huge whale was spotted near the coast.',
        },
      ],
    },
    {
      word: 'Schwester',
      desc: 'A female sibling; also used to refer to a female nurse, especially in a hospital.',
      examples: [
        {
          sentence: 'Meine Schwester ist zwei Jahre älter als ich.',
          translation: 'My sister is two years older than me.',
        },
        {
          sentence: 'Er hat vier Schwestern und keinen Bruder.',
          translation: 'He has four sisters and no brothers.',
        },
        {
          sentence: 'Die Krankenschwester half dem Patienten.',
          translation: 'The nurse helped the patient.',
        },
        {
          sentence: 'Sie und ihre Schwester sehen sich sehr ähnlich.',
          translation: 'She and her sister look very alike.',
        },
        {
          sentence: 'Die Schwestern arbeiteten gemeinsam im Garten.',
          translation: 'The sisters worked together in the garden.',
        },
      ],
    },
    {
      word: 'Stahl',
      desc: 'A hard, strong, gray or bluish-gray alloy of iron with carbon and usually other elements, used extensively as a structural and fabricating material.',
      examples: [
        {
          sentence: 'Die Brücke ist aus Stahl gebaut.',
          translation: 'The bridge is made of steel.',
        },
        {
          sentence: 'Stahl wird oft im Bauwesen verwendet.',
          translation: 'Steel is often used in construction.',
        },
        {
          sentence: 'Das Messer ist aus rostfreiem Stahl.',
          translation: 'The knife is made of stainless steel.',
        },
        {
          sentence: 'Sie testeten die Stärke des Stahls.',
          translation: 'They tested the strength of the steel.',
        },
        {
          sentence: 'Die Industrie produziert verschiedene Arten von Stahl.',
          translation: 'The industry produces various types of steel.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'diskutieren, vorwärts, ähnlich, führen, Erfahrung, Partitur, Apfel, gekauft, geführt, Tonhöhe',
  words: [
    {
      word: 'diskutieren',
      desc: 'To talk about something with someone, sharing ideas or opinions.',
      examples: [
        {
          sentence: 'Wir müssen unsere Pläne für das Projekt diskutieren.',
          translation: 'We need to discuss our plans for the project.',
        },
        {
          sentence:
            'Die Wissenschaftler diskutierten die neuesten Forschungsergebnisse.',
          translation: 'The scientists discussed the latest research findings.',
        },
        {
          sentence: 'Können wir über die Hausaufgabe diskutieren?',
          translation: 'Can we discuss the homework?',
        },
        {
          sentence: 'Die Politiker diskutierten heftig über das neue Gesetz.',
          translation: 'The politicians debated the new law vigorously.',
        },
        {
          sentence: 'Ich möchte mit dir über deine Zukunft diskutieren.',
          translation: 'I would like to discuss your future with you.',
        },
      ],
    },
    {
      word: 'vorwärts',
      desc: 'Moving or directed towards a front or ahead.',
      examples: [
        {
          sentence: 'Das Team bewegt sich vorwärts, um das Ziel zu erreichen.',
          translation: 'The team is moving forward to achieve the goal.',
        },
        {
          sentence: 'Schau nicht zurück, wir müssen vorwärts schauen.',
          translation: "Don't look back, we need to look forward.",
        },
        {
          sentence: 'Der Soldat marschierte vorwärts.',
          translation: 'The soldier marched forward.',
        },
        {
          sentence: 'Um Erfolg zu haben, müssen wir immer vorwärts denken.',
          translation: 'To be successful, we must always think ahead.',
        },
        {
          sentence: 'Der Fluss fließt stetig vorwärts.',
          translation: 'The river flows steadily onward.',
        },
      ],
    },
    {
      word: 'ähnlich',
      desc: 'Having qualities in common with something else, but not identical.',
      examples: [
        {
          sentence: 'Ihre Meinungen sind ähnlich, aber nicht gleich.',
          translation: 'Their opinions are similar, but not the same.',
        },
        {
          sentence:
            'Dieses Problem ist ähnlich dem, das wir letzte Woche gelöst haben.',
          translation:
            'This problem is similar to the one we solved last week.',
        },
        {
          sentence: 'Sie trägt ein Kleid, das ähnlich meinem ist.',
          translation: "She's wearing a dress similar to mine.",
        },
        {
          sentence:
            'Die Ergebnisse dieser Studie sind ähnlich denen früherer Forschungen.',
          translation:
            'The results of this study are similar to those of earlier research.',
        },
        {
          sentence: 'Er hat eine ähnliche Erfahrung gemacht wie du.',
          translation: 'He has had a similar experience to you.',
        },
      ],
    },
    {
      word: 'führen',
      desc: 'To guide or direct in a course.',
      examples: [
        {
          sentence: 'Er führt das Unternehmen mit großer Expertise.',
          translation: 'He leads the company with great expertise.',
        },
        {
          sentence: 'Dieser Weg führt direkt zum Strand.',
          translation: 'This path leads directly to the beach.',
        },
        {
          sentence: 'Die Polizei führte eine gründliche Untersuchung durch.',
          translation: 'The police conducted a thorough investigation.',
        },
        {
          sentence: 'Der Lehrer führte die Schüler durch das Museum.',
          translation: 'The teacher guided the students through the museum.',
        },
        {
          sentence: 'Die Beweise führen zu einem unerwarteten Verdächtigen.',
          translation: 'The evidence leads to an unexpected suspect.',
        },
      ],
    },
    {
      word: 'Erfahrung',
      desc: 'The knowledge or skill acquired by experience over a period of time.',
      examples: [
        {
          sentence: 'Jahre der Erfahrung haben ihn zu einem Experten gemacht.',
          translation: 'Years of experience have made him an expert.',
        },
        {
          sentence: 'Diese Reise war eine einmalige Erfahrung.',
          translation: 'This trip was a once-in-a-lifetime experience.',
        },
        {
          sentence: 'Aus dieser Erfahrung habe ich viel gelernt.',
          translation: 'I learned a lot from this experience.',
        },
        {
          sentence:
            'Die Erfahrung im Ausland zu arbeiten, war sehr bereichernd.',
          translation: 'The experience of working abroad was very enriching.',
        },
        {
          sentence: 'Sie teilt gerne ihre Erfahrungen mit jungen Kollegen.',
          translation:
            'She enjoys sharing her experiences with young colleagues.',
        },
      ],
    },
    {
      word: 'Partitur',
      desc: 'A written form of a musical composition; scores.',
      examples: [
        {
          sentence: 'Der Komponist schrieb die Partitur für das Orchester.',
          translation: 'The composer wrote the score for the orchestra.',
        },
        {
          sentence:
            'Sie studiert die Partitur, um sich auf ihre Rolle vorzubereiten.',
          translation: "She's studying the score to prepare for her role.",
        },
        {
          sentence:
            'Die Partitur enthält spezielle Anweisungen für die Musiker.',
          translation:
            'The score contains special instructions for the musicians.',
        },
        {
          sentence: 'Diese Partitur ist ein Meisterwerk der klassischen Musik.',
          translation: 'This score is a masterpiece of classical music.',
        },
        {
          sentence: 'Er kann die Partitur einfach vom Blatt spielen.',
          translation: 'He can play the score at sight.',
        },
      ],
    },
    {
      word: 'Apfel',
      desc: 'A fruit with a round shape and sweet taste, coming in various colors.',
      examples: [
        {
          sentence: 'Ich esse jeden Tag einen Apfel.',
          translation: 'I eat an apple every day.',
        },
        {
          sentence: 'Der Apfel fällt nicht weit vom Stamm.',
          translation: "The apple doesn't fall far from the tree.",
        },
        {
          sentence: 'Sie packte einen Apfel in ihr Mittagessen.',
          translation: 'She packed an apple in her lunch.',
        },
        {
          sentence: 'Apfelbäume blühen im Frühling wunderschön.',
          translation: 'Apple trees bloom beautifully in spring.',
        },
        {
          sentence: 'Apfelkuchen ist mein Lieblingsdessert.',
          translation: 'Apple pie is my favorite dessert.',
        },
      ],
    },
    {
      word: 'gekauft',
      desc: 'Acquired in exchange for money; purchased.',
      examples: [
        {
          sentence: 'Sie hat ein neues Auto gekauft.',
          translation: 'She bought a new car.',
        },
        {
          sentence: 'Das gekauft Haus benötigt einige Renovierungen.',
          translation: 'The bought house needs some renovations.',
        },
        {
          sentence: 'Die Tickets wurden bereits gekauft.',
          translation: 'The tickets have already been bought.',
        },
        {
          sentence: 'Er hat die Geschenke im Voraus gekauft.',
          translation: 'He bought the gifts in advance.',
        },
        {
          sentence: 'Das gekauft Spielzeug war ein großer Hit bei den Kindern.',
          translation: 'The bought toy was a big hit with the kids.',
        },
      ],
    },
    {
      word: 'geführt',
      desc: 'Directed or led by someone or something.',
      examples: [
        {
          sentence: 'Das Projekt wurde erfolgreich von ihr geführt.',
          translation: 'The project was successfully led by her.',
        },
        {
          sentence: 'Die Tour wurde von einem erfahrenen Führer geführt.',
          translation: 'The tour was guided by an experienced leader.',
        },
        {
          sentence: 'Das Unternehmen wurde in schwierigen Zeiten gut geführt.',
          translation: 'The company was well led through tough times.',
        },
        {
          sentence: 'Die Diskussion wurde von dem Moderator gekonnt geführt.',
          translation: 'The discussion was skillfully guided by the moderator.',
        },
        {
          sentence: 'Die Untersuchung wurde von der Polizei geführt.',
          translation: 'The investigation was conducted by the police.',
        },
      ],
    },
    {
      word: 'Tonhöhe',
      desc: 'The quality of a sound governed by the rate of vibrations producing it; the degree of highness or lowness of a tone.',
      examples: [
        {
          sentence: 'Die Tonhöhe des Pianos muss justiert werden.',
          translation: 'The pitch of the piano needs to be adjusted.',
        },
        {
          sentence: 'Ihre Stimme hat eine angenehme Tonhöhe.',
          translation: 'Her voice has a pleasant pitch.',
        },
        {
          sentence: 'Er kann die Tonhöhe perfekt halten.',
          translation: 'He can hold the pitch perfectly.',
        },
        {
          sentence:
            'Die Tonhöhe der Flöte unterscheidet sich von der der Klarinette.',
          translation:
            'The pitch of the flute differs from that of the clarinet.',
        },
        {
          sentence: 'Die Tonhöhe des Alarms war sehr hoch.',
          translation: 'The pitch of the alarm was very high.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Mantel, Masse, Karte, Band, Seil, Rutsch, gewinnen, träumen, Abend, Zustand',
  words: [
    {
      word: 'Mantel',
      desc: 'A long outer garment worn outdoors to keep warm or as a fashion statement.',
      examples: [
        {
          sentence: 'Sie hängte ihren Mantel an den Haken neben der Tür.',
          translation: 'She hung her coat on the hook next to the door.',
        },
        {
          sentence: 'Er trug einen schwarzen Mantel mit einem roten Schal.',
          translation: 'He wore a black coat with a red scarf.',
        },
        {
          sentence: 'Ihr neuer Mantel ist sehr dick und warm.',
          translation: 'Her new coat is very thick and warm.',
        },
        {
          sentence:
            'Vergiss nicht, deinen Mantel zu nehmen; es wird kalt draußen.',
          translation:
            "Don't forget to take your coat; it's getting cold outside.",
        },
        {
          sentence: 'Der Detektiv trug einen langen, grauen Mantel.',
          translation: 'The detective wore a long, gray coat.',
        },
      ],
    },
    {
      word: 'Masse',
      desc: 'A large amount or number of something; also refers to the physical matter of which a person or thing consists.',
      examples: [
        {
          sentence: 'Die Masse des Planeten beeinflusst seine Anziehungskraft.',
          translation: 'The mass of the planet influences its gravity.',
        },
        {
          sentence: 'Eine große Masse von Menschen versammelte sich im Park.',
          translation: 'A large mass of people gathered in the park.',
        },
        {
          sentence:
            'Die Wissenschaftler maßen die Masse des Objekts in Kilogramm.',
          translation:
            'The scientists measured the mass of the object in kilograms.',
        },
        {
          sentence: 'Er bewegte die schwere Masse mit großer Anstrengung.',
          translation: 'He moved the heavy mass with great effort.',
        },
        {
          sentence: 'Die Masse der Sonne ist enorm.',
          translation: 'The mass of the sun is enormous.',
        },
      ],
    },
    {
      word: 'Karte',
      desc: 'A piece of paper or card that gives the holder a certain right, such as to enter a place, travel by public transport, or participate in an event; also refers to a map.',
      examples: [
        {
          sentence: 'Ich habe zwei Karten für das Konzert am Samstag gekauft.',
          translation: 'I bought two tickets for the concert on Saturday.',
        },
        {
          sentence: 'Könntest du auf der Karte nachschauen, wo wir sind?',
          translation: 'Could you check on the map where we are?',
        },
        {
          sentence: 'Sie zog eine Karte aus dem Kartenspiel.',
          translation: 'She drew a card from the deck.',
        },
        {
          sentence:
            'Die Karte zeigt alle touristischen Attraktionen der Stadt.',
          translation: 'The map shows all the tourist attractions of the city.',
        },
        {
          sentence: 'Er gab ihr eine Karte zum Valentinstag.',
          translation: "He gave her a card for Valentine's Day.",
        },
      ],
    },
    {
      word: 'Band',
      desc: 'A group of musicians who play together, especially for recording or performing music.',
      examples: [
        {
          sentence: 'Das Band spielte ihre Lieblingslieder auf der Party.',
          translation: 'The band played their favorite songs at the party.',
        },
        {
          sentence: 'Sie trat einem Jazz-Band bei der Universität bei.',
          translation: 'She joined a jazz band at the university.',
        },
        {
          sentence: 'Das Band veröffentlichte ihr neues Album letzte Woche.',
          translation: 'The band released their new album last week.',
        },
        {
          sentence: 'Er träumte davon, Gitarrist in einem Rock-Band zu sein.',
          translation: 'He dreamed of being a guitarist in a rock band.',
        },
        {
          sentence: 'Das Band tourt durch Europa diesen Sommer.',
          translation: 'The band is touring Europe this summer.',
        },
      ],
    },
    {
      word: 'Seil',
      desc: 'A long, thick cord made by twisting together strands of fiber, hemp, wire, or similar materials, used for tying, pulling, fastening, or climbing.',
      examples: [
        {
          sentence: 'Der Bergsteiger sicherte sich mit einem Seil am Felsen.',
          translation: 'The climber secured himself to the rock with a rope.',
        },
        {
          sentence: 'Sie benutzten ein Seil, um das Paket zu verschnüren.',
          translation: 'They used a rope to tie up the package.',
        },
        {
          sentence: 'Das Seil der Schaukel ist sehr stark.',
          translation: "The swing's rope is very strong.",
        },
        {
          sentence:
            'Kinder sprangen über das Seil in einem Spiel von Seilspringen.',
          translation: 'Children jumped over the rope in a game of jump rope.',
        },
        {
          sentence: 'Das alte Seil riss unter dem Gewicht.',
          translation: 'The old rope broke under the weight.',
        },
      ],
    },
    {
      word: 'Rutsch',
      desc: 'An act of sliding unintentionally for a short distance, often resulting in a fall or loss of balance.',
      examples: [
        {
          sentence: 'Pass auf, der Boden ist nass und rutschig.',
          translation: 'Be careful, the floor is wet and slippery.',
        },
        {
          sentence:
            'Sie hatte einen kleinen Rutsch auf dem Eis, aber es ging ihr gut.',
          translation: 'She had a little slip on the ice, but she was okay.',
        },
        {
          sentence:
            'Der Rutsch des Kindes auf der Rutsche war schnell und aufregend.',
          translation:
            "The child's slide down the slide was quick and exciting.",
        },
        {
          sentence: 'Nach dem Rutsch stand er schnell wieder auf.',
          translation: 'After the slip, he quickly got back up.',
        },
        {
          sentence: 'Das Auto hatte einen Rutsch auf der glatten Straße.',
          translation: 'The car had a slip on the slick road.',
        },
      ],
    },
    {
      word: 'gewinnen',
      desc: 'To achieve victory in a contest or competition.',
      examples: [
        {
          sentence: 'Sie hofft, das Rennen zu gewinnen.',
          translation: 'She hopes to win the race.',
        },
        {
          sentence: 'Das Team arbeitete hart, um das Spiel zu gewinnen.',
          translation: 'The team worked hard to win the game.',
        },
        {
          sentence: 'Er gewann den ersten Preis in der Lotterie.',
          translation: 'He won the first prize in the lottery.',
        },
        {
          sentence:
            'Nach vielen Versuchen gelang es ihr endlich, das Spiel zu gewinnen.',
          translation: 'After many tries, she finally managed to win the game.',
        },
        {
          sentence: 'Sie gewannen durch Teamarbeit und Entschlossenheit.',
          translation: 'They won through teamwork and determination.',
        },
      ],
    },
    {
      word: 'träumen',
      desc: 'To experience dreams during sleep; to imagine or hope for something.',
      examples: [
        {
          sentence: 'Ich habe letzte Nacht von einem alten Freund geträumt.',
          translation: 'I dreamt about an old friend last night.',
        },
        {
          sentence: 'Sie träumt davon, eines Tages um die Welt zu reisen.',
          translation: 'She dreams of traveling around the world one day.',
        },
        {
          sentence: 'Kinder träumen oft von Abenteuern in fernen Ländern.',
          translation: 'Children often dream of adventures in faraway lands.',
        },
        {
          sentence: 'Er träumte davon, ein berühmter Schriftsteller zu werden.',
          translation: 'He dreamed of becoming a famous writer.',
        },
        {
          sentence:
            'Nach dem Film träumte ich die ganze Nacht von Weltraumreisen.',
          translation:
            'After the movie, I dreamt about space travel all night.',
        },
      ],
    },
    {
      word: 'Abend',
      desc: 'The latter part of the day and early part of the night; the period from sunset to bedtime.',
      examples: [
        {
          sentence: 'Wir haben einen ruhigen Abend zu Hause verbracht.',
          translation: 'We spent a quiet evening at home.',
        },
        {
          sentence: 'Der Himmel färbte sich rosa und lila am Abend.',
          translation: 'The sky turned pink and purple in the evening.',
        },
        {
          sentence: 'Jeden Abend liest er seiner Tochter eine Geschichte vor.',
          translation: 'Every evening, he reads a story to his daughter.',
        },
        {
          sentence: 'Das Konzert findet am Samstagabend statt.',
          translation: 'The concert takes place on Saturday evening.',
        },
        {
          sentence: 'Die Straßen sind am Freitagabend immer voll.',
          translation: 'The streets are always busy on Friday evening.',
        },
      ],
    },
    {
      word: 'Zustand',
      desc: 'The particular condition that someone or something is in at a specific time.',
      examples: [
        {
          sentence: 'Der Zustand des alten Hauses ist sehr schlecht.',
          translation: 'The condition of the old house is very poor.',
        },
        {
          sentence: 'Sie war nach dem Unfall in einem kritischen Zustand.',
          translation: 'She was in a critical condition after the accident.',
        },
        {
          sentence:
            'Der Zustand der Wirtschaft ist ein Hauptanliegen der Regierung.',
          translation:
            'The state of the economy is a major concern for the government.',
        },
        {
          sentence: 'Die Bücher waren in einem ausgezeichneten Zustand.',
          translation: 'The books were in excellent condition.',
        },
        {
          sentence: 'Er prüfte den Zustand der Ware vor dem Kauf.',
          translation:
            'He checked the condition of the goods before purchasing.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Futtermittel, Werkzeug, gesamt, Basis, Geruch, Tal, noch, doppelt, Sitz, fortsetzen',
  words: [
    {
      word: 'Futtermittel',
      desc: 'Food, especially dried hay or feed, for livestock or poultry.',
      examples: [
        {
          sentence: 'Die Bauern kaufen Futtermittel für ihre Tiere.',
          translation: 'The farmers buy feed for their animals.',
        },
        {
          sentence:
            'Die Qualität des Futtermittels beeinflusst die Gesundheit der Tiere.',
          translation:
            'The quality of the feed affects the health of the animals.',
        },
        {
          sentence: 'Wir brauchen mehr Futtermittel für die Hühner.',
          translation: 'We need more feed for the chickens.',
        },
        {
          sentence: 'Das Futtermittel sollte regelmäßig überprüft werden.',
          translation: 'The feed should be checked regularly.',
        },
        {
          sentence:
            'Es gibt verschiedene Arten von Futtermitteln für Nutztiere.',
          translation: 'There are different types of feed for livestock.',
        },
      ],
    },
    {
      word: 'Werkzeug',
      desc: 'A device or implement, especially one held in the hand, used to carry out a particular function.',
      examples: [
        {
          sentence:
            'Der Handwerker hatte eine Auswahl an Werkzeugen in seinem Werkzeugkasten.',
          translation: 'The craftsman had a selection of tools in his toolbox.',
        },
        {
          sentence: 'Ein Hammer ist ein nützliches Werkzeug für Bauarbeiten.',
          translation: 'A hammer is a useful tool for construction work.',
        },
        {
          sentence: 'Das Werkzeug muss regelmäßig gewartet werden.',
          translation: 'The tools need to be maintained regularly.',
        },
        {
          sentence:
            'Er kaufte ein neues elektrisches Werkzeug für seine Werkstatt.',
          translation: 'He bought a new electric tool for his workshop.',
        },
        {
          sentence:
            'Ohne das richtige Werkzeug kann die Reparatur schwierig sein.',
          translation: 'Without the right tools, the repair can be difficult.',
        },
      ],
    },
    {
      word: 'gesamt',
      desc: 'Whole; entire; total.',
      examples: [
        {
          sentence: 'Die gesamte Familie versammelte sich zum Abendessen.',
          translation: 'The whole family gathered for dinner.',
        },
        {
          sentence: 'Der gesamte Prozess dauerte mehrere Stunden.',
          translation: 'The entire process took several hours.',
        },
        {
          sentence:
            'Der gesamte Betrag muss bis Ende des Monats bezahlt werden.',
          translation: 'The total amount must be paid by the end of the month.',
        },
        {
          sentence: 'Wir haben die gesamte Woche an diesem Projekt gearbeitet.',
          translation: 'We worked on this project the whole week.',
        },
        {
          sentence: 'Die gesamte Mannschaft feierte den Sieg.',
          translation: 'The entire team celebrated the victory.',
        },
      ],
    },
    {
      word: 'Basis',
      desc: 'The underlying support or foundation for an idea, argument, or process.',
      examples: [
        {
          sentence:
            'Ein solides Verständnis der Mathematik ist die Basis für viele Berufe.',
          translation:
            'A solid understanding of mathematics is the basis for many professions.',
        },
        {
          sentence: 'Der Bericht bildet die Basis für weitere Diskussionen.',
          translation: 'The report forms the basis for further discussions.',
        },
        {
          sentence:
            'Die Grundlagen dieses Vertrags bilden die Basis für die Verhandlungen.',
          translation:
            'The fundamentals of this contract form the basis for the negotiations.',
        },
        {
          sentence:
            'Eine gesunde Ernährung ist die Basis für körperliche Fitness.',
          translation: 'A healthy diet is the basis for physical fitness.',
        },
        {
          sentence:
            'Das Training bildet die Basis für den Erfolg im Wettkampf.',
          translation:
            'The training forms the basis for success in competition.',
        },
      ],
    },
    {
      word: 'Geruch',
      desc: 'A distinctive smell, especially one that is pleasant.',
      examples: [
        {
          sentence:
            'Der Geruch von frisch gebackenem Brot breitete sich in der Küche aus.',
          translation:
            'The smell of freshly baked bread spread in the kitchen.',
        },
        {
          sentence: 'Der Geruch von Blumen erfüllte den Raum.',
          translation: 'The scent of flowers filled the room.',
        },
        {
          sentence: 'Ein angenehmer Geruch stieg aus der Pfanne auf.',
          translation: 'A pleasant smell rose from the pan.',
        },
        {
          sentence: 'Der Geruch von Kaffee weckte sie am Morgen.',
          translation: 'The smell of coffee woke her up in the morning.',
        },
        {
          sentence:
            'Der Geruch von frisch gemähtem Gras erinnerte ihn an seine Kindheit.',
          translation:
            'The smell of freshly cut grass reminded him of his childhood.',
        },
      ],
    },
    {
      word: 'Tal',
      desc: 'A long, narrow valley, especially one between ranges of mountains or hills.',
      examples: [
        {
          sentence: 'Das Tal war mit dichtem Nebel bedeckt.',
          translation: 'The valley was covered with thick fog.',
        },
        {
          sentence: 'Der Fluss schlängelte sich durch das Tal.',
          translation: 'The river meandered through the valley.',
        },
        {
          sentence:
            'Die Bewohner des Tals lebten hauptsächlich von der Landwirtschaft.',
          translation:
            'The residents of the valley mainly lived off agriculture.',
        },
        {
          sentence: 'Die Berge umgaben das Tal auf allen Seiten.',
          translation: 'The mountains surrounded the valley on all sides.',
        },
        {
          sentence: 'Wir wanderten durch das malerische Tal.',
          translation: 'We hiked through the picturesque valley.',
        },
      ],
    },
    {
      word: 'noch',
      desc: 'Still; yet; even.',
      examples: [
        {
          sentence: 'Ich habe noch nicht gegessen.',
          translation: 'I haven’t eaten yet.',
        },
        {
          sentence: 'Die Arbeit ist noch nicht erledigt.',
          translation: 'The work is still not done.',
        },
        {
          sentence: 'Ich habe den Film noch nicht gesehen.',
          translation: 'I haven’t seen the movie yet.',
        },
        {
          sentence: 'Wir haben noch keine Antwort erhalten.',
          translation: 'We haven’t received an answer yet.',
        },
        {
          sentence: 'Es ist noch nicht zu spät, um etwas zu ändern.',
          translation: 'It is not too late yet to change something.',
        },
      ],
    },
    {
      word: 'doppelt',
      desc: 'Twice as much or as many.',
      examples: [
        {
          sentence: 'Ich habe doppelt so viel bezahlt wie er.',
          translation: 'I paid twice as much as he did.',
        },
        {
          sentence:
            'Die Anzahl der Mitarbeiter hat sich in den letzten Jahren fast verdoppelt.',
          translation:
            'The number of employees has almost doubled in recent years.',
        },
        {
          sentence: 'Das ist doppelt so groß wie das alte Modell.',
          translation: 'That is twice as big as the old model.',
        },
        {
          sentence:
            'Die doppelte Menge an Zutaten ergab ein besseres Ergebnis.',
          translation:
            'The double amount of ingredients resulted in a better outcome.',
        },
        {
          sentence: 'Die Temperatur ist doppelt so hoch wie gestern.',
          translation: 'The temperature is twice as high as yesterday.',
        },
      ],
    },
    {
      word: 'Sitz',
      desc: 'A place where someone sits, especially in a vehicle or at a sporting event.',
      examples: [
        {
          sentence: 'Er nahm seinen Sitz im Theater ein.',
          translation: 'He took his seat in the theater.',
        },
        {
          sentence: 'Der Sitz des Unternehmens befindet sich in New York.',
          translation: 'The company’s headquarters are located in New York.',
        },
        {
          sentence: 'Ich habe einen Sitz in der ersten Reihe reserviert.',
          translation: 'I have reserved a seat in the front row.',
        },
        {
          sentence: 'Sie hatte einen Fenstersitz im Flugzeug.',
          translation: 'She had a window seat on the airplane.',
        },
        {
          sentence: 'Die Zuschauer nahmen ihre Sitze im Stadion ein.',
          translation: 'The spectators took their seats in the stadium.',
        },
      ],
    },
    {
      word: 'fortsetzen',
      desc: 'To continue or carry on an activity or process.',
      examples: [
        {
          sentence: 'Wir müssen mit dem Projekt fortsetzen.',
          translation: 'We need to continue with the project.',
        },
        {
          sentence: 'Bitte fortsetzen, wo Sie aufgehört haben.',
          translation: 'Please continue where you left off.',
        },
        {
          sentence: 'Können wir die Diskussion später fortsetzen?',
          translation: 'Can we continue the discussion later?',
        },
        {
          sentence: 'Die Verhandlungen werden morgen fortgesetzt.',
          translation: 'The negotiations will continue tomorrow.',
        },
        {
          sentence: 'Er konnte seine Arbeit nach dem Urlaub fortsetzen.',
          translation: 'He was able to resume his work after the vacation.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Block, Tabelle, Hut, verkaufen, Erfolg, Firma, subtrahieren, Veranstaltung, besondere, viel',
  words: [
    {
      word: 'Block',
      desc: 'A large solid piece of hard material, especially rock, stone, or wood.',
      examples: [
        {
          sentence:
            'Sie benutzte einen Holzblock, um zu verhindern, dass die Tür sich schließt.',
          translation:
            'She used a block of wood to stop the door from closing.',
        },
        {
          sentence: 'Die Kinder bauten mit Bausteinen einen Turm.',
          translation: 'The children built a tower with blocks.',
        },
        {
          sentence: 'Er schrieb seinen Namen auf den Betonblock.',
          translation: 'He wrote his name on the cement block.',
        },
        {
          sentence: 'Die Straße war wegen Bauarbeiten gesperrt.',
          translation: 'The road was blocked due to construction work.',
        },
        {
          sentence: 'Sie wohnen im gleichen Block wie wir.',
          translation: 'They live on the same block as us.',
        },
      ],
    },
    {
      word: 'Tabelle',
      desc: 'A systematic arrangement of data, usually in rows and columns.',
      examples: [
        {
          sentence:
            'Sie schaute in der Tabelle nach den Öffnungszeiten des Restaurants.',
          translation:
            'She consulted the table for the restaurant’s opening hours.',
        },
        {
          sentence:
            'Wir verwendeten eine Tabelle, um die Informationen zu organisieren.',
          translation: 'We used a table to organize the information.',
        },
        {
          sentence: 'Die Lehrerin schrieb den Stundenplan an die Tafel.',
          translation: 'The teacher wrote the schedule on the board.',
        },
        {
          sentence: 'Die Umrechnungskurse finden Sie in dieser Tabelle.',
          translation: 'You can find the conversion rates in this table.',
        },
        {
          sentence: 'Die Tabelle zeigt die Ergebnisse des Experiments.',
          translation: 'The table shows the results of the experiment.',
        },
      ],
    },
    {
      word: 'Hut',
      desc: 'A shaped covering for the head, typically with a crown and brim.',
      examples: [
        {
          sentence: 'Er tippte mit dem Hut, um die Damen zu begrüßen.',
          translation: 'He tipped his hat to greet the ladies.',
        },
        {
          sentence:
            'Sie trug einen breitkrempigen Hut, um ihr Gesicht vor der Sonne zu schützen.',
          translation:
            'She wore a wide-brimmed hat to protect her face from the sun.',
        },
        {
          sentence: 'Der Detektiv zog seinen Hut tiefer über die Augen.',
          translation: 'The detective pulled his hat lower over his eyes.',
        },
        {
          sentence:
            'Sie setzte ihren Lieblingshut auf und ging zur Tür hinaus.',
          translation: 'She put on her favorite hat and headed out the door.',
        },
        {
          sentence: 'Er nahm den Hut ab und kratzte sich verwirrt am Kopf.',
          translation:
            'He took off his hat and scratched his head in confusion.',
        },
      ],
    },
    {
      word: 'verkaufen',
      desc: 'To exchange a commodity for money; to offer for sale.',
      examples: [
        {
          sentence:
            'Sie verkauft handgemachten Schmuck auf dem örtlichen Markt.',
          translation: 'She sells handmade jewelry at the local market.',
        },
        {
          sentence:
            'Er plant, sein altes Auto zu verkaufen und ein neues zu kaufen.',
          translation: 'He plans to sell his old car and buy a new one.',
        },
        {
          sentence: 'Das Geschäft verkauft eine Vielzahl von Bio-Produkten.',
          translation: 'The store sells a variety of organic produce.',
        },
        {
          sentence: 'Sie verkauften ihr Haus zu einem guten Preis.',
          translation: 'They sold their house for a good price.',
        },
        {
          sentence: 'Sie verkaufte ihre Kunstwerke an einen Sammler.',
          translation: 'She sold her artwork to a collector.',
        },
      ],
    },
    {
      word: 'Erfolg',
      desc: 'The accomplishment of an aim or purpose; the attainment of fame, wealth, or social status.',
      examples: [
        {
          sentence:
            'Sein Erfolg als Schriftsteller kam nach jahrelanger harter Arbeit.',
          translation: 'His success as a writer came after years of hard work.',
        },
        {
          sentence: 'Sie erzielte großen Erfolg in ihrer Karriere.',
          translation: 'She achieved great success in her career.',
        },
        {
          sentence: 'Ihr Erfolg ist das Ergebnis von Teamarbeit.',
          translation: 'Their success is a result of teamwork.',
        },
        {
          sentence: 'Er maß seinen Erfolg am Glück seiner Familie.',
          translation:
            'He measured his success by the happiness of his family.',
        },
        {
          sentence: 'Erfolg wird nicht immer an materiellem Reichtum gemessen.',
          translation: 'Success is not always measured by material wealth.',
        },
      ],
    },
    {
      word: 'Firma',
      desc: 'A commercial organization that engages in business, typically selling goods or services.',
      examples: [
        {
          sentence: 'Sie arbeitet für ein multinationales Unternehmen.',
          translation: 'She works for a multinational company.',
        },
        {
          sentence:
            'Das Unternehmen ist auf die Entwicklung von Software spezialisiert.',
          translation: 'The company specializes in software development.',
        },
        {
          sentence: 'Er gründete nach dem Studium seine eigene Firma.',
          translation: 'He started his own company after college.',
        },
        {
          sentence: 'Die Firma hat Büros in mehreren Ländern.',
          translation: 'The firm has offices in several countries.',
        },
        {
          sentence: 'Sie gehören zu den führenden Unternehmen der Branche.',
          translation: "They're one of the leading firms in the industry.",
        },
      ],
    },
    {
      word: 'subtrahieren',
      desc: 'To remove or take away a part from a whole.',
      examples: [
        {
          sentence:
            'Um die Differenz zu finden, müssen Sie eine Zahl von der anderen subtrahieren.',
          translation:
            'In order to find the difference, you must subtract one number from the other.',
        },
        {
          sentence: 'Der Lehrer bat die Schüler, zehn von hundert abzuziehen.',
          translation:
            'The teacher asked the students to subtract ten from one hundred.',
        },
        {
          sentence: 'Wenn man drei von fünf abzieht, bleiben zwei übrig.',
          translation: 'Subtracting three from five leaves two.',
        },
        {
          sentence: 'Kannst du das Ergebnis subtrahieren und mir sagen?',
          translation: 'Can you subtract the result and tell me?',
        },
        {
          sentence: 'Die Software kann automatisch Zahlen subtrahieren.',
          translation: 'The software can automatically subtract numbers.',
        },
      ],
    },
    {
      word: 'Veranstaltung',
      desc: 'A planned public or social occasion.',
      examples: [
        {
          sentence: 'Die Veranstaltung war ein großer Erfolg.',
          translation: 'The event was a great success.',
        },
        {
          sentence: 'Wir freuen uns auf die Veranstaltung am Wochenende.',
          translation: 'We are looking forward to the event this weekend.',
        },
        {
          sentence:
            'Die Veranstaltung findet im örtlichen Gemeindezentrum statt.',
          translation: 'The event takes place at the local community center.',
        },
        {
          sentence:
            'Es wird eine spezielle Veranstaltung zum Thema Umweltschutz geben.',
          translation:
            'There will be a special event on environmental protection.',
        },
        {
          sentence:
            'Die Veranstaltung wurde aufgrund des schlechten Wetters abgesagt.',
          translation: 'The event was canceled due to bad weather.',
        },
      ],
    },
    {
      word: 'besondere',
      desc: 'Unusual or better; different from others of the same kind.',
      examples: [
        {
          sentence: 'Heute ist ein besonderer Tag für uns.',
          translation: 'Today is a special day for us.',
        },
        {
          sentence: 'Sie hat eine besondere Begabung für Musik.',
          translation: 'She has a special talent for music.',
        },
        {
          sentence:
            'Das Restaurant bietet eine Auswahl an besonderen Gerichten an.',
          translation: 'The restaurant offers a selection of special dishes.',
        },
        {
          sentence: 'Er hat eine besondere Vorliebe für klassische Literatur.',
          translation: 'He has a special preference for classical literature.',
        },
        {
          sentence: 'Wir haben ein besonderes Geschenk für dich.',
          translation: 'We have a special gift for you.',
        },
      ],
    },
    {
      word: 'viel',
      desc: 'A large amount or quantity of something.',
      examples: [
        {
          sentence: 'Es gibt viel zu tun, bevor wir abreisen können.',
          translation: 'There is a lot to do before we can leave.',
        },
        {
          sentence: 'Ich habe heute viel gelernt.',
          translation: 'I learned a lot today.',
        },
        {
          sentence: 'Er hat viel Geld in sein Unternehmen investiert.',
          translation: 'He has invested a lot of money in his company.',
        },
        {
          sentence: 'Wir haben viel gemeinsam.',
          translation: 'We have a lot in common.',
        },
        {
          sentence: 'Es gibt viele Gründe, warum Menschen reisen.',
          translation: 'There are many reasons why people travel.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'schwimmen, Begriff, Gegenteil, Frau, Schuh, Schulter, Verbreitung, arrangieren, Lager, erfinden',
  words: [
    {
      word: 'schwimmen',
      desc: 'To move through water by moving the body or parts of the body.',
      examples: [
        {
          sentence: 'Im Sommer schwimmen wir oft im See.',
          translation: 'In the summer, we often swim in the lake.',
        },
        {
          sentence: 'Kannst du schwimmen?',
          translation: 'Can you swim?',
        },
        {
          sentence: 'Sie lernte schwimmen, als sie noch sehr jung war.',
          translation: 'She learned to swim when she was very young.',
        },
        {
          sentence: 'Viele Kinder genießen es, im Pool zu schwimmen.',
          translation: 'Many children enjoy swimming in the pool.',
        },
        {
          sentence:
            'Er schwimmt gern im Meer, obwohl er keine gute Schwimmer ist.',
          translation:
            'He enjoys swimming in the sea even though he is not a good swimmer.',
        },
      ],
    },
    {
      word: 'Begriff',
      desc: 'An idea or explanation of something.',
      examples: [
        {
          sentence: 'Ich habe keinen Begriff, was sie meint.',
          translation: 'I have no idea what she means.',
        },
        {
          sentence: 'Der Begriff der Freiheit ist für jeden anders.',
          translation: 'The concept of freedom is different for everyone.',
        },
        {
          sentence:
            'Es ist wichtig, den Begriff der Gleichberechtigung zu verstehen.',
          translation: 'It is important to understand the concept of equality.',
        },
        {
          sentence:
            'Er hat einen klaren Begriff davon, wie er sein Ziel erreichen kann.',
          translation: 'He has a clear idea of how he can achieve his goal.',
        },
        {
          sentence:
            'Der Begriff "Glück" kann viele verschiedene Bedeutungen haben.',
          translation: 'The term "happiness" can have many different meanings.',
        },
      ],
    },
    {
      word: 'Gegenteil',
      desc: 'The reverse or opposite of something.',
      examples: [
        {
          sentence: 'Liebe ist das Gegenteil von Hass.',
          translation: 'Love is the opposite of hate.',
        },
        {
          sentence: 'Das Gegenteil von alt ist jung.',
          translation: 'The opposite of old is young.',
        },
        {
          sentence: 'Der Erfolg ist das Gegenteil von Misserfolg.',
          translation: 'Success is the opposite of failure.',
        },
        {
          sentence: 'Geduld ist das Gegenteil von Ungeduld.',
          translation: 'Patience is the opposite of impatience.',
        },
        {
          sentence: 'Freude ist das Gegenteil von Traurigkeit.',
          translation: 'Joy is the opposite of sadness.',
        },
      ],
    },
    {
      word: 'Frau',
      desc: 'A married woman; a woman in relation to her husband.',
      examples: [
        {
          sentence: 'Meine Frau und ich gehen heute Abend aus.',
          translation: 'My wife and I are going out tonight.',
        },
        {
          sentence: 'Sie ist eine sehr fürsorgliche Frau.',
          translation: 'She is a very caring wife.',
        },
        {
          sentence:
            'Die Frau des Bürgermeisters ist eine angesehene Persönlichkeit.',
          translation: "The mayor's wife is a respected figure.",
        },
        {
          sentence: 'Meine Frau ist eine ausgezeichnete Köchin.',
          translation: 'My wife is an excellent cook.',
        },
        {
          sentence: 'Er erzählte seiner Frau von seinem Tag bei der Arbeit.',
          translation: 'He told his wife about his day at work.',
        },
      ],
    },
    {
      word: 'Schuh',
      desc: 'A covering for the foot, typically made of leather, having a sturdy sole and not reaching above the ankle.',
      examples: [
        {
          sentence: 'Ich brauche neue Schuhe für die Arbeit.',
          translation: 'I need new shoes for work.',
        },
        {
          sentence: 'Diese Schuhe passen nicht richtig.',
          translation: "These shoes don't fit properly.",
        },
        {
          sentence:
            'Ich habe meine besten Schuhe für die Hochzeit herausgeholt.',
          translation: 'I brought out my best shoes for the wedding.',
        },
        {
          sentence: 'Sie kaufte sich ein Paar teure Designer-Schuhe.',
          translation: 'She bought herself a pair of expensive designer shoes.',
        },
        {
          sentence:
            'Meine Schuhe sind nass geworden, als ich durch den Regen lief.',
          translation: 'My shoes got wet when I walked through the rain.',
        },
      ],
    },
    {
      word: 'Schulter',
      desc: 'The upper joint of the human arm and the part of the body between this and the neck.',
      examples: [
        {
          sentence: 'Sie hatte starke Schmerzen in der Schulter.',
          translation: 'She had severe pain in her shoulder.',
        },
        {
          sentence: 'Er legte seine Hand auf ihre Schulter, um sie zu trösten.',
          translation: 'He placed his hand on her shoulder to comfort her.',
        },
        {
          sentence: 'Seine Schultern waren breit und muskulös.',
          translation: 'His shoulders were broad and muscular.',
        },
        {
          sentence: 'Der Rucksack lag schwer auf seinen Schultern.',
          translation: 'The backpack weighed heavily on his shoulders.',
        },
        {
          sentence:
            'Er zuckte mit den Schultern, um zu zeigen, dass er es nicht wusste.',
          translation:
            "He shrugged his shoulders to indicate that he didn't know.",
        },
      ],
    },
    {
      word: 'Verbreitung',
      desc: 'The action or fact of spreading something widely.',
      examples: [
        {
          sentence:
            'Die Verbreitung von Informationen ist heutzutage sehr schnell.',
          translation: 'The spread of information is very fast nowadays.',
        },
        {
          sentence: 'Die Verbreitung des Virus hat zu einer Pandemie geführt.',
          translation: 'The spread of the virus has led to a pandemic.',
        },
        {
          sentence:
            'Die Verbreitung von Gerüchten kann zu Missverständnissen führen.',
          translation: 'The spread of rumors can lead to misunderstandings.',
        },
        {
          sentence:
            'Die Verbreitung von Fake News ist ein ernsthaftes Problem.',
          translation: 'The spread of fake news is a serious problem.',
        },
        {
          sentence:
            'Die Verbreitung von Bildern über soziale Medien ist weit verbreitet.',
          translation:
            'The dissemination of images via social media is widespread.',
        },
      ],
    },
    {
      word: 'arrangieren',
      desc: 'To organize or make plans for something to happen.',
      examples: [
        {
          sentence: 'Wir müssen die Blumen für die Hochzeit arrangieren.',
          translation: 'We need to arrange the flowers for the wedding.',
        },
        {
          sentence: 'Er arrangierte ein Treffen mit dem Kunden.',
          translation: 'He arranged a meeting with the client.',
        },
        {
          sentence: 'Sie arrangierte die Möbel neu in ihrem Zimmer.',
          translation: 'She rearranged the furniture in her room.',
        },
        {
          sentence:
            'Das Hotel wird alle Details für Ihren Aufenthalt arrangieren.',
          translation: 'The hotel will arrange all the details for your stay.',
        },
        {
          sentence:
            'Sie arrangierte ein besonderes Abendessen für ihren Geburtstag.',
          translation: 'She arranged a special dinner for her birthday.',
        },
      ],
    },
    {
      word: 'Lager',
      desc: 'A place used for the storage of goods.',
      examples: [
        {
          sentence: 'Wir haben genug Lebensmittel im Lager für den Winter.',
          translation: 'We have enough food in the warehouse for the winter.',
        },
        {
          sentence: 'Das Lager ist voll mit neuen Produkten.',
          translation: 'The warehouse is full of new products.',
        },
        {
          sentence:
            'Sie müssen das Lager regelmäßig überprüfen, um den Bestand zu kontrollieren.',
          translation:
            'You need to check the warehouse regularly to control the inventory.',
        },
        {
          sentence: 'Das Lager ist gut organisiert und leicht zugänglich.',
          translation: 'The warehouse is well-organized and easily accessible.',
        },
        {
          sentence:
            'Wir haben viele Bestellungen erhalten, also müssen wir das Lager auffüllen.',
          translation:
            'We have received many orders, so we need to restock the warehouse.',
        },
      ],
    },
    {
      word: 'erfinden',
      desc: 'To create or design something that has not existed before.',
      examples: [
        {
          sentence: 'Thomas Edison erfand die Glühbirne.',
          translation: 'Thomas Edison invented the light bulb.',
        },
        {
          sentence:
            'Der Wissenschaftler arbeitet daran, ein neues Medikament zu erfinden.',
          translation: 'The scientist is working on inventing a new drug.',
        },
        {
          sentence: 'Sie erfand eine neue Art, Papier zu recyceln.',
          translation: 'She invented a new way to recycle paper.',
        },
        {
          sentence:
            'Die Firma hat eine Maschine erfunden, die die Produktion beschleunigt.',
          translation:
            'The company has invented a machine that speeds up production.',
        },
        {
          sentence:
            'Die Kinder lieben es, Geschichten über fantastische Dinge zu erfinden.',
          translation:
            'The children love inventing stories about fantastical things.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Baumwolle, geboren, bestimmen, Quart, neun, Lastwagen, Lärm, Ebene, Chance, sammeln',
  words: [
    {
      word: 'Baumwolle',
      desc: 'A soft, fluffy fiber that grows around the seeds of the cotton plant.',
      examples: [
        {
          sentence:
            'Baumwolle wird für die Herstellung von Kleidung verwendet.',
          translation: 'Cotton is used for making clothes.',
        },
        {
          sentence:
            'Der Stoff fühlt sich angenehm an, weil er aus Baumwolle ist.',
          translation:
            'The fabric feels comfortable because it is made of cotton.',
        },
        {
          sentence:
            'Baumwolle ist eine der wichtigsten Rohstoffe in der Textilindustrie.',
          translation:
            'Cotton is one of the most important raw materials in the textile industry.',
        },
        {
          sentence: 'Die Bauern ernten die Baumwolle, um sie zu verkaufen.',
          translation: 'Farmers harvest the cotton to sell it.',
        },
        {
          sentence: 'Die Bettwäsche ist aus 100% Baumwolle.',
          translation: 'The bed sheets are made of 100% cotton.',
        },
      ],
    },
    {
      word: 'geboren',
      desc: 'Brought into life by birth.',
      examples: [
        {
          sentence: 'Er wurde im Sommer 1990 geboren.',
          translation: 'He was born in the summer of 1990.',
        },
        {
          sentence: 'Das Baby wurde gestern geboren.',
          translation: 'The baby was born yesterday.',
        },
        {
          sentence: 'Sie ist in einer kleinen Stadt geboren und aufgewachsen.',
          translation: 'She was born and raised in a small town.',
        },
        {
          sentence: 'Er war ein begabtes Kind, als er geboren wurde.',
          translation: 'He was a gifted child when he was born.',
        },
        {
          sentence: 'Das Kätzchen wurde im Schuppen geboren.',
          translation: 'The kitten was born in the shed.',
        },
      ],
    },
    {
      word: 'bestimmen',
      desc: 'To decide or establish something with authority or precision.',
      examples: [
        {
          sentence: 'Wir müssen den genauen Zeitpunkt bestimmen.',
          translation: 'We need to determine the exact time.',
        },
        {
          sentence:
            'Das Wetter kann schwer vorherzusagen sein, aber wir werden unser Bestes tun, um es zu bestimmen.',
          translation:
            'The weather can be difficult to predict, but we will do our best to determine it.',
        },
        {
          sentence: 'Die Jury muss den Gewinner des Wettbewerbs bestimmen.',
          translation:
            'The jury needs to determine the winner of the competition.',
        },
        {
          sentence: 'Es ist schwierig, die Ursache des Problems zu bestimmen.',
          translation: 'It is difficult to determine the cause of the problem.',
        },
        {
          sentence: 'Die Regeln bestimmen, wie das Spiel gespielt wird.',
          translation: 'The rules determine how the game is played.',
        },
      ],
    },
    {
      word: 'Quart',
      desc: 'A unit of liquid measure equal to a quarter of a gallon or two pints.',
      examples: [
        {
          sentence: 'Er kaufte ein Quart Milch im Supermarkt.',
          translation: 'He bought a quart of milk at the supermarket.',
        },
        {
          sentence: 'Das Rezept erfordert ein Quart Wasser.',
          translation: 'The recipe calls for a quart of water.',
        },
        {
          sentence: 'Sie tranken zwei Quarts Limonade während des Picknicks.',
          translation: 'They drank two quarts of lemonade during the picnic.',
        },
        {
          sentence: 'Ein Quart Saft wurde in den Krug gegossen.',
          translation: 'A quart of juice was poured into the pitcher.',
        },
        {
          sentence: 'Er misst genau ein Quart Diesel in den Tank.',
          translation: 'He precisely measures a quart of diesel into the tank.',
        },
      ],
    },
    {
      word: 'neun',
      desc: 'The number after eight and before ten; one more than eight.',
      examples: [
        {
          sentence: 'Sie hat neun Äpfel im Korb.',
          translation: 'She has nine apples in the basket.',
        },
        {
          sentence: 'Das Buch hat neun Kapitel.',
          translation: 'The book has nine chapters.',
        },
        {
          sentence: 'Sie feiert ihren neunten Geburtstag nächsten Monat.',
          translation: "She's celebrating her ninth birthday next month.",
        },
        {
          sentence: 'Er läuft neun Meilen jeden Tag.',
          translation: 'He runs nine miles every day.',
        },
        {
          sentence: 'Das Team hat neun Spieler auf dem Feld.',
          translation: 'The team has nine players on the field.',
        },
      ],
    },
    {
      word: 'Lastwagen',
      desc: 'A large motor vehicle used for transporting goods or materials.',
      examples: [
        {
          sentence: 'Der Lastwagen lieferte die Waren pünktlich ab.',
          translation: 'The truck delivered the goods on time.',
        },
        {
          sentence: 'Der Lastwagen war mit Baumaterialien beladen.',
          translation: 'The truck was loaded with building materials.',
        },
        {
          sentence: 'Die Firma hat eine Flotte von Lastwagen.',
          translation: 'The company has a fleet of trucks.',
        },
        {
          sentence: 'Der Lastwagenfahrer machte eine Pause auf der Raststätte.',
          translation: 'The truck driver took a break at the rest area.',
        },
        {
          sentence: 'Ein großer Lastwagen rollte die Straße entlang.',
          translation: 'A big truck rolled down the road.',
        },
      ],
    },
    {
      word: 'Lärm',
      desc: 'A loud, unpleasant, or unwanted sound.',
      examples: [
        {
          sentence: 'Der Lärm der Baustelle störte die Nachbarn.',
          translation:
            'The noise from the construction site disturbed the neighbors.',
        },
        {
          sentence: 'Die lauten Motorräder machten viel Lärm.',
          translation: 'The loud motorcycles made a lot of noise.',
        },
        {
          sentence: 'Die Kinder machten Lärm im Hinterhof.',
          translation: 'The children made noise in the backyard.',
        },
        {
          sentence: 'Der Lärm des Verkehrs hielt ihn die ganze Nacht wach.',
          translation: 'The noise of the traffic kept him awake all night.',
        },
        {
          sentence: 'Der laute Lärm des Flugzeugs übertönte alles andere.',
          translation:
            'The loud noise of the airplane drowned out everything else.',
        },
      ],
    },
    {
      word: 'Ebene',
      desc: 'A flat, level surface; without slopes or hills.',
      examples: [
        {
          sentence: 'Die Landschaft war eine weite Ebene mit wenigen Bäumen.',
          translation: 'The landscape was a wide plain with few trees.',
        },
        {
          sentence: 'Wir machten ein Picknick auf der grünen Ebene.',
          translation: 'We had a picnic on the green plain.',
        },
        {
          sentence: 'Die Ebene erstreckte sich bis zum Horizont.',
          translation: 'The plain stretched out to the horizon.',
        },
        {
          sentence: 'Das Spielfeld war eine Ebene, ideal für Fußball.',
          translation: 'The playing field was a plain, perfect for soccer.',
        },
        {
          sentence: 'Die Stadt liegt auf einer Ebene zwischen zwei Bergen.',
          translation: 'The city is situated on a plain between two mountains.',
        },
      ],
    },
    {
      word: 'Chance',
      desc: 'An opportunity or possibility of doing or achieving something.',
      examples: [
        {
          sentence: 'Sie hat eine gute Chance, den Wettbewerb zu gewinnen.',
          translation: 'She has a good chance of winning the competition.',
        },
        {
          sentence: 'Nutze deine Chance, wenn sie sich bietet.',
          translation: 'Seize your chance when it presents itself.',
        },
        {
          sentence: 'Es besteht eine geringe Chance, dass es regnen wird.',
          translation: 'There is a slight chance of rain.',
        },
        {
          sentence: 'Die Chance auf Erfolg steigt mit harter Arbeit.',
          translation: 'The chance of success increases with hard work.',
        },
        {
          sentence: 'Man sollte jede Chance nutzen, um etwas Neues zu lernen.',
          translation: 'One should take every chance to learn something new.',
        },
      ],
    },
    {
      word: 'sammeln',
      desc: 'To gather together or accumulate items or things.',
      examples: [
        {
          sentence: 'Die Kinder sammelten Muscheln am Strand.',
          translation: 'The children collected shells on the beach.',
        },
        {
          sentence: 'Er sammelt Briefmarken als Hobby.',
          translation: 'He collects stamps as a hobby.',
        },
        {
          sentence: 'Wir sammelten Geld für die wohltätige Organisation.',
          translation: 'We collected money for the charitable organization.',
        },
        {
          sentence: 'Sie sammelte Informationen über das Thema.',
          translation: 'She gathered information about the topic.',
        },
        {
          sentence: 'Die Organisation sammelt Spenden für Bedürftige.',
          translation: 'The organization collects donations for the needy.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Geschäft, Stretch, werfen, Glanz, Immobilien, Spalte, Molekül, wählen, falsch, grau',
  words: [
    {
      word: 'Geschäft',
      desc: 'A place where goods or services are sold; a store or establishment.',
      examples: [
        {
          sentence: 'Die Frau geht zum Geschäft, um Kleidung zu kaufen.',
          translation: 'The woman goes to the shop to buy clothes.',
        },
        {
          sentence: 'Ich liebe es, in kleinen Geschäften zu stöbern.',
          translation: 'I love to browse in small shops.',
        },
        {
          sentence:
            'Sie arbeitet im Familienunternehmen, das ein Geschäft betreibt.',
          translation: 'She works in the family business that operates a shop.',
        },
        {
          sentence: 'Das Geschäft war heute besonders voll.',
          translation: 'The shop was particularly crowded today.',
        },
        {
          sentence:
            'Der Ladenbesitzer schloss das Geschäft pünktlich um sechs Uhr ab.',
          translation:
            "The shopkeeper closed the shop promptly at six o'clock.",
        },
      ],
    },
    {
      word: 'Stretch',
      desc: 'To extend or pull something to its full length or width; to lengthen or widen.',
      examples: [
        {
          sentence: 'Sie macht gerne Stretch-Übungen, um sich zu entspannen.',
          translation: 'She enjoys doing stretch exercises to relax.',
        },
        {
          sentence:
            'Der Yoga-Lehrer lehrte uns verschiedene Stretch-Techniken.',
          translation:
            'The yoga instructor taught us various stretch techniques.',
        },
        {
          sentence: 'Beim Aufwärmen ist es wichtig, sich gut zu strecken.',
          translation: 'When warming up, it is important to stretch well.',
        },
        {
          sentence:
            'Sie führt regelmäßig Stretch-Routinen durch, um ihre Flexibilität zu verbessern.',
          translation:
            'She regularly performs stretch routines to improve her flexibility.',
        },
        {
          sentence:
            'Das Stretching vor dem Training hilft, Verletzungen zu vermeiden.',
          translation: 'Stretching before exercise helps to prevent injuries.',
        },
      ],
    },
    {
      word: 'werfen',
      desc: 'To propel something with force through the air by a throwing motion.',
      examples: [
        {
          sentence: 'Der Junge wirft den Ball über die Mauer.',
          translation: 'The boy throws the ball over the wall.',
        },
        {
          sentence: 'Sie wirft das Papier in den Müll.',
          translation: 'She throws the paper into the trash.',
        },
        {
          sentence:
            'Der Hund bringt den Stock und wartet darauf, dass sein Herrchen ihn wirft.',
          translation:
            'The dog brings the stick and waits for its master to throw it.',
        },
        {
          sentence:
            'Er wirft einen Blick aus dem Fenster, um zu sehen, ob es regnet.',
          translation:
            "He casts a glance out the window to see if it's raining.",
        },
        {
          sentence:
            'Sie wirft die Angel aus und wartet geduldig auf einen Biss.',
          translation:
            'She casts her fishing line and patiently waits for a bite.',
        },
      ],
    },
    {
      word: 'Glanz',
      desc: 'Brightness or light that is reflected from a smooth or shiny surface; brilliance.',
      examples: [
        {
          sentence: 'Die Sonne brachte einen warmen Glanz in den Raum.',
          translation: 'The sun brought a warm glow into the room.',
        },
        {
          sentence: 'Der Glanz der Sterne erhellte die dunkle Nacht.',
          translation:
            'The brilliance of the stars illuminated the dark night.',
        },
        {
          sentence:
            'Die frisch polierten Schuhe hatten einen wunderschönen Glanz.',
          translation: 'The freshly polished shoes had a beautiful shine.',
        },
        {
          sentence: 'Der Glanz des Diamanten faszinierte sie.',
          translation: 'The brilliance of the diamond fascinated her.',
        },
        {
          sentence: 'Der Glanz des Mondes spiegelte sich im ruhigen See.',
          translation: "The moon's glow was reflected in the calm lake.",
        },
      ],
    },
    {
      word: 'Immobilien',
      desc: 'Properties or real estate, including land, buildings, and other structures.',
      examples: [
        {
          sentence: 'Sie investiert in Immobilien als langfristige Anlage.',
          translation: 'She invests in real estate as a long-term investment.',
        },
        {
          sentence: 'Der Immobilienmarkt ist derzeit sehr dynamisch.',
          translation: 'The real estate market is currently very dynamic.',
        },
        {
          sentence: 'Die Immobilienpreise steigen ständig.',
          translation: 'Real estate prices are constantly rising.',
        },
        {
          sentence: 'Er arbeitet im Immobilienbereich und kennt sich gut aus.',
          translation: 'He works in real estate and knows his stuff.',
        },
        {
          sentence:
            'Die Immobilienblase platzte und führte zu einem Wirtschaftsabschwung.',
          translation:
            'The real estate bubble burst, leading to an economic downturn.',
        },
      ],
    },
    {
      word: 'Spalte',
      desc: 'A narrow gap or fissure; a long, thin division between two parts.',
      examples: [
        {
          sentence:
            'Die Spalte zwischen den Felsen war zu schmal, um hindurchzugehen.',
          translation:
            'The gap between the rocks was too narrow to pass through.',
        },
        {
          sentence: 'Sie las den Artikel in der linken Spalte der Zeitung.',
          translation:
            'She read the article in the left column of the newspaper.',
        },
        {
          sentence: 'Der Tisch hatte eine Spalte in der Mitte.',
          translation: 'The table had a gap in the middle.',
        },
        {
          sentence:
            'Die Daten wurden in eine Excel-Tabelle eingetragen, jede in ihre eigene Spalte.',
          translation:
            'The data was entered into an Excel spreadsheet, each in its own column.',
        },
        {
          sentence:
            'Der Arbeiter musste sich durch die enge Spalte zwängen, um zur anderen Seite zu gelangen.',
          translation:
            'The worker had to squeeze through the tight gap to get to the other side.',
        },
      ],
    },
    {
      word: 'Molekül',
      desc: 'The smallest particle of a substance that retains the chemical properties of that substance; a group of atoms bonded together.',
      examples: [
        {
          sentence:
            'Wasser besteht aus zwei Wasserstoffatomen und einem Sauerstoffatom, die miteinander verbunden sind, um ein Molekül zu bilden.',
          translation:
            'Water consists of two hydrogen atoms and one oxygen atom bonded together to form a molecule.',
        },
        {
          sentence:
            'Die Forscher untersuchten die Struktur des Moleküls, um seine Eigenschaften zu verstehen.',
          translation:
            'The researchers examined the structure of the molecule to understand its properties.',
        },
        {
          sentence:
            'Kohlenstoffdioxid ist ein Molekül, das aus einem Kohlenstoffatom und zwei Sauerstoffatomen besteht.',
          translation:
            'Carbon dioxide is a molecule composed of one carbon atom and two oxygen atoms.',
        },
        {
          sentence:
            'Die Wechselwirkungen zwischen Molekülen beeinflussen die Eigenschaften eines Stoffes.',
          translation:
            'The interactions between molecules affect the properties of a substance.',
        },
        {
          sentence:
            'Die Moleküle bewegen sich ständig, was zu einer kontinuierlichen Veränderung führt.',
          translation:
            'The molecules are constantly moving, leading to continuous change.',
        },
      ],
    },
    {
      word: 'wählen',
      desc: 'To make a choice or select from a range of options.',
      examples: [
        {
          sentence: 'Sie muss zwischen zwei Angeboten wählen.',
          translation: 'She has to choose between two offers.',
        },
        {
          sentence: 'Die Kunden können aus verschiedenen Farben wählen.',
          translation: 'Customers can choose from various colors.',
        },
        {
          sentence: 'Er hat das beste Buch ausgewählt, um es zu lesen.',
          translation: 'He chose the best book to read.',
        },
        {
          sentence: 'Die Teilnehmer können ihren Favoriten wählen.',
          translation: 'Participants can choose their favorite.',
        },
        {
          sentence:
            'Wir müssen eine Entscheidung treffen und eine Richtung wählen.',
          translation: 'We need to make a decision and choose a direction.',
        },
      ],
    },
    {
      word: 'falsch',
      desc: 'Incorrect or inaccurate; not true or correct.',
      examples: [
        {
          sentence: 'Die Antwort auf die Frage war falsch.',
          translation: 'The answer to the question was wrong.',
        },
        {
          sentence: 'Er gab aus Versehen die falsche Adresse an.',
          translation: 'He accidentally gave the wrong address.',
        },
        {
          sentence: 'Die falschen Angaben führten zu Missverständnissen.',
          translation: 'The incorrect information led to misunderstandings.',
        },
        {
          sentence: 'Es ist falsch anzunehmen, dass alle Menschen gleich sind.',
          translation: 'It is wrong to assume that all people are the same.',
        },
        {
          sentence: 'Die falsche Entscheidung hatte schwerwiegende Folgen.',
          translation: 'The wrong decision had serious consequences.',
        },
      ],
    },
    {
      word: 'grau',
      desc: 'The color intermediate between black and white; a mixture of black and white.',
      examples: [
        {
          sentence: 'Der Himmel war an diesem Tag grau und bewölkt.',
          translation: 'The sky was gray and overcast that day.',
        },
        {
          sentence: 'Sein Haar begann langsam grau zu werden.',
          translation: 'His hair began to turn gray slowly.',
        },
        {
          sentence: 'Die Katze hatte ein graues Fell mit weißen Flecken.',
          translation: 'The cat had gray fur with white spots.',
        },
        {
          sentence: 'Die Mauer war mit grauer Farbe gestrichen.',
          translation: 'The wall was painted with gray paint.',
        },
        {
          sentence: 'Das graue Kleid passte gut zu ihren Augen.',
          translation: 'The gray dress complemented her eyes well.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Wiederholung, erfordern, breit, vorbereiten, Salz, Nase, mehreren, Zorn, Anspruch, Kontinent',
  words: [
    {
      word: 'Wiederholung',
      desc: 'The act of doing or saying something again; the repetition of an action, process, or event.',
      examples: [
        {
          sentence:
            'Die Wiederholung des Experiments lieferte konsistente Ergebnisse.',
          translation:
            'The repetition of the experiment yielded consistent results.',
        },
        {
          sentence:
            'Sie übte die Wiederholung der Melodie, um sie auswendig zu lernen.',
          translation:
            'She practiced the repetition of the melody to memorize it.',
        },
        {
          sentence:
            'Die ständige Wiederholung des Problems führte zu Frustration.',
          translation:
            'The constant repetition of the problem led to frustration.',
        },
        {
          sentence:
            'Die Wiederholung von Informationen kann beim Lernen helfen.',
          translation: 'Repeating information can help with learning.',
        },
        {
          sentence:
            'Die Wiederholung des Films im Fernsehen war ein großer Erfolg.',
          translation:
            'The repetition of the movie on television was a great success.',
        },
      ],
    },
    {
      word: 'erfordern',
      desc: 'To need or demand something as obligatory, necessary, or essential.',
      examples: [
        {
          sentence: 'Diese Aufgabe erfordert Geduld und Präzision.',
          translation: 'This task requires patience and precision.',
        },
        {
          sentence: 'Der Job erfordert eine umfassende Kenntnis der Software.',
          translation:
            'The job requires a comprehensive knowledge of the software.',
        },
        {
          sentence:
            'Der Plan erfordert eine sorgfältige Vorbereitung im Voraus.',
          translation: 'The plan requires careful preparation in advance.',
        },
        {
          sentence:
            'Ein erfolgreicher Abschluss erfordert harte Arbeit und Engagement.',
          translation:
            'Successful completion requires hard work and dedication.',
        },
        {
          sentence:
            'Die Reparatur erfordert spezielle Werkzeuge und Fachkenntnisse.',
          translation: 'The repair requires special tools and expertise.',
        },
      ],
    },
    {
      word: 'breit',
      desc: 'Having a large extent from side to side; wide in range or scope.',
      examples: [
        {
          sentence: 'Der Fluss war an dieser Stelle sehr breit.',
          translation: 'The river was very wide at this point.',
        },
        {
          sentence: 'Sie hat eine breite Palette von Interessen.',
          translation: 'She has a wide range of interests.',
        },
        {
          sentence: 'Die Straße war breit genug für zwei Fahrspuren.',
          translation: 'The road was wide enough for two lanes.',
        },
        {
          sentence: 'Der Markt bietet eine breite Auswahl an Produkten.',
          translation: 'The market offers a wide selection of products.',
        },
        {
          sentence: 'Seine Bücher sind für ein breites Publikum geschrieben.',
          translation: 'His books are written for a wide audience.',
        },
      ],
    },
    {
      word: 'vorbereiten',
      desc: 'To make ready or suitable in advance for a particular purpose, use, or activity.',
      examples: [
        {
          sentence:
            'Sie muss das Abendessen vorbereiten, bevor die Gäste kommen.',
          translation: 'She needs to prepare dinner before the guests arrive.',
        },
        {
          sentence:
            'Der Lehrer bereitete eine interessante Lektion für die Schüler vor.',
          translation:
            'The teacher prepared an interesting lesson for the students.',
        },
        {
          sentence: 'Die Mannschaft bereitete sich intensiv auf das Spiel vor.',
          translation: 'The team prepared intensively for the game.',
        },
        {
          sentence:
            'Sie bereitete ihre Rede gründlich vor, um sicherzustellen, dass sie überzeugend war.',
          translation:
            'She prepared her speech thoroughly to ensure it was persuasive.',
        },
        {
          sentence: 'Er bereitete sich mental auf die Herausforderung vor.',
          translation: 'He mentally prepared for the challenge.',
        },
      ],
    },
    {
      word: 'Salz',
      desc: 'A white crystalline substance consisting of sodium chloride, used in cooking and for seasoning or preserving food.',
      examples: [
        {
          sentence: 'Das Salz verleiht dem Essen Geschmack.',
          translation: 'Salt adds flavor to the food.',
        },
        {
          sentence: 'Salz wird oft als Konservierungsmittel verwendet.',
          translation: 'Salt is often used as a preservative.',
        },
        {
          sentence: 'Zu viel Salz kann gesundheitsschädlich sein.',
          translation: 'Too much salt can be harmful to health.',
        },
        {
          sentence: 'Salz wird in vielen verschiedenen Formen gewonnen.',
          translation: 'Salt is obtained in many different forms.',
        },
        {
          sentence: 'Die Salzkristalle glänzten in der Sonne.',
          translation: 'The salt crystals glistened in the sun.',
        },
      ],
    },
    {
      word: 'Nase',
      desc: 'The part of the face above the mouth, used for breathing and smelling.',
      examples: [
        {
          sentence: 'Er brach sich die Nase beim Sportunfall.',
          translation: 'He broke his nose in the sports accident.',
        },
        {
          sentence: 'Sie hat eine empfindliche Nase für Gerüche.',
          translation: 'She has a sensitive nose for smells.',
        },
        {
          sentence: 'Die Nase läuft, wenn man erkältet ist.',
          translation: 'The nose runs when one has a cold.',
        },
        {
          sentence: 'Der Hund schnüffelte neugierig mit seiner feuchten Nase.',
          translation: 'The dog sniffed curiously with its wet nose.',
        },
        {
          sentence: 'Die Sonnenbrille saß auf seiner Nase.',
          translation: 'The sunglasses sat on his nose.',
        },
      ],
    },
    {
      word: 'mehreren',
      desc: 'Belonging to or consisting of a larger number of items.',
      examples: [
        {
          sentence: 'Wir haben mehrere Optionen zur Auswahl.',
          translation: 'We have several options to choose from.',
        },
        {
          sentence: 'Der Lehrer beantwortete die Fragen mehrerer Schüler.',
          translation:
            'The teacher answered the questions of several students.',
        },
        {
          sentence: 'Er ist an mehreren Projekten gleichzeitig beteiligt.',
          translation: 'He is involved in several projects simultaneously.',
        },
        {
          sentence: 'Sie hat mehrere Bücher über das Thema gelesen.',
          translation: 'She has read several books on the subject.',
        },
        {
          sentence:
            'Die Veranstaltung wurde von mehreren Organisationen gesponsert.',
          translation: 'The event was sponsored by several organizations.',
        },
      ],
    },
    {
      word: 'Zorn',
      desc: 'A strong feeling of annoyance, displeasure, or hostility.',
      examples: [
        {
          sentence: 'Sein Zorn war deutlich in seiner Stimme zu hören.',
          translation: 'His anger was evident in his voice.',
        },
        {
          sentence: 'Sie konnte ihren Zorn nicht zurückhalten.',
          translation: "She couldn't contain her anger.",
        },
        {
          sentence:
            'Der Zorn des Königs traf diejenigen, die gegen ihn rebellierten.',
          translation:
            "The king's wrath fell upon those who rebelled against him.",
        },
        {
          sentence: 'Sie schüttelte vor Zorn die Faust.',
          translation: 'She shook her fist in anger.',
        },
        {
          sentence: 'Sein Gesicht war vor Zorn gerötet.',
          translation: 'His face was flushed with anger.',
        },
      ],
    },
    {
      word: 'Anspruch',
      desc: "A demand or request for something considered one's due.",
      examples: [
        {
          sentence:
            'Er erhebt Anspruch auf eine Entschädigung für seine Arbeit.',
          translation: 'He claims compensation for his work.',
        },
        {
          sentence: 'Der Kunde hat Anspruch auf eine Rückerstattung.',
          translation: 'The customer is entitled to a refund.',
        },
        {
          sentence: 'Die Kinder erheben Anspruch auf ihre eigenen Spielzeuge.',
          translation: 'The children claim ownership of their own toys.',
        },
        {
          sentence: 'Sie hat Anspruch auf eine angemessene Bezahlung.',
          translation: 'She is entitled to fair pay.',
        },
        {
          sentence:
            'Der Film basiert auf Ansprüchen aus der wahren Geschichte.',
          translation: 'The movie is based on claims from true events.',
        },
      ],
    },
    {
      word: 'Kontinent',
      desc: "Any of the world's main continuous expanses of land (Africa, Antarctica, Asia, Europe, North America, South America, and Australia).",
      examples: [
        {
          sentence: 'Afrika ist der zweitgrößte Kontinent der Welt.',
          translation: 'Africa is the second-largest continent in the world.',
        },
        {
          sentence:
            'Die Entdeckung eines neuen Kontinents wäre eine bahnbrechende Entwicklung.',
          translation:
            'The discovery of a new continent would be a groundbreaking development.',
        },
        {
          sentence: 'Der Nordpol befindet sich auf dem Kontinent Antarktika.',
          translation:
            'The North Pole is located on the continent of Antarctica.',
        },
        {
          sentence:
            'Der Kontinent Europa ist bekannt für seine vielfältige Kultur.',
          translation:
            'The continent of Europe is known for its diverse culture.',
        },
        {
          sentence:
            'Die Besiedlung des Kontinents begann vor Tausenden von Jahren.',
          translation:
            'The settlement of the continent began thousands of years ago.',
        },
      ],
    },
  ],
};

const section10: Section = {
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

export default section10;
