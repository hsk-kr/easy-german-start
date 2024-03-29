import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Energie, Jagd, wahrscheinlich, Bett, Bruder, Ei, Fahrt, Zelle, glauben, vielleicht',
  words: [
    {
      word: 'Energie',
      desc: "Noun meaning 'energy', the capacity for doing work, producing heat, or causing light, or the resources of a system for such activities.",
      examples: [
        {
          sentence: 'Sie fühlte sich erschöpft und hatte keine Energie mehr.',
          translation: 'She felt exhausted and had no more energy.',
        },
        {
          sentence: 'Der Windpark erzeugt saubere Energie aus Wind.',
          translation: 'The wind farm generates clean energy from wind.',
        },
        {
          sentence: 'Sie tankte neue Energie, indem sie eine Pause einlegte.',
          translation: 'She recharged her energy by taking a break.',
        },
        {
          sentence:
            'Die Sonne ist eine wichtige Quelle für erneuerbare Energie.',
          translation: 'The sun is an important source of renewable energy.',
        },
        {
          sentence: 'Er hatte genug Energie, um den ganzen Tag zu arbeiten.',
          translation: 'He had enough energy to work all day.',
        },
      ],
    },
    {
      word: 'Jagd',
      desc: "Noun meaning 'hunt', the activity of hunting wild animals or game, especially for food or sport.",
      examples: [
        {
          sentence: 'Die Jagd nach dem entkommenen Tiger dauerte mehrere Tage.',
          translation: 'The hunt for the escaped tiger lasted several days.',
        },
        {
          sentence: 'Die Jäger begannen die Jagd bei Sonnenaufgang.',
          translation: 'The hunters began the hunt at sunrise.',
        },
        {
          sentence:
            'Die Jagd nach dem seltenen Vogel war eine große Herausforderung.',
          translation: 'The hunt for the rare bird was a big challenge.',
        },
        {
          sentence: 'Die Jagd ist in einigen Ländern eine wichtige Tradition.',
          translation: 'Hunting is an important tradition in some countries.',
        },
        {
          sentence:
            'Die Jagd nach Nahrung war für unsere Vorfahren überlebenswichtig.',
          translation: 'Hunting for food was vital for our ancestors.',
        },
      ],
    },
    {
      word: 'wahrscheinlich',
      desc: "Adjective meaning 'probable', likely to happen or to be true, although not certain.",
      examples: [
        {
          sentence: 'Es ist wahrscheinlich, dass es morgen regnen wird.',
          translation: 'It is likely to rain tomorrow.',
        },
        {
          sentence:
            'Die Experten halten es für wahrscheinlich, dass sich das Klima ändern wird.',
          translation:
            'Experts consider it probable that the climate will change.',
        },
        {
          sentence: 'Es ist wahrscheinlich, dass sie den Zug verpasst hat.',
          translation: 'It is probable that she missed the train.',
        },
        {
          sentence: 'Wahrscheinlich wird er später nach Hause kommen.',
          translation: 'He will probably come home later.',
        },
        {
          sentence:
            'Die Untersuchungen deuten darauf hin, dass ein technischer Fehler die Ursache ist, aber nichts ist sicher.',
          translation:
            'The investigations suggest that a technical fault is the cause, but nothing is certain.',
        },
      ],
    },
    {
      word: 'Bett',
      desc: "Noun meaning 'bed', a piece of furniture for sleep or rest, typically a framework with a mattress and coverings.",
      examples: [
        {
          sentence:
            'Nach einem langen Tag freute sie sich auf ihr gemütliches Bett.',
          translation: 'After a long day, she looked forward to her cozy bed.',
        },
        {
          sentence: 'Er lag wach im Bett und konnte nicht einschlafen.',
          translation: "He lay awake in bed and couldn't fall asleep.",
        },
        {
          sentence: 'Das Kind schlief tief und fest in seinem Bett.',
          translation: 'The child slept soundly in his bed.',
        },
        {
          sentence:
            'Das Bett war mit weichen Kissen und einer warmen Decke gemacht.',
          translation: 'The bed was made with soft pillows and a warm blanket.',
        },
        {
          sentence:
            'Sie kuschelte sich unter die Decke und schloss die Augen im Bett.',
          translation:
            'She snuggled under the covers and closed her eyes in bed.',
        },
      ],
    },
    {
      word: 'Bruder',
      desc: "Noun meaning 'brother', a male sibling.",
      examples: [
        {
          sentence: 'Er spielte oft mit seinem kleinen Bruder im Park.',
          translation: 'He often played with his little brother in the park.',
        },
        {
          sentence: 'Ihr großer Bruder half ihr bei den Hausaufgaben.',
          translation: 'Her big brother helped her with her homework.',
        },
        {
          sentence: 'Die beiden Brüder hatten eine enge Bindung zueinander.',
          translation: 'The two brothers had a close bond with each other.',
        },
        {
          sentence: 'Sein älterer Bruder war sein Vorbild.',
          translation: 'His older brother was his role model.',
        },
        {
          sentence:
            'Die Brüder teilten sich ein Zimmer und hatten viel Spaß zusammen.',
          translation:
            'The brothers shared a room and had a lot of fun together.',
        },
      ],
    },
    {
      word: 'Ei',
      desc: "Noun meaning 'egg', the oval or round object laid by a female bird, reptile, fish, or invertebrate, usually containing a developing embryo.",
      examples: [
        {
          sentence: 'Sie kochte sich ein weiches Ei zum Frühstück.',
          translation: 'She boiled herself a soft egg for breakfast.',
        },
        {
          sentence: 'Das Huhn legte jeden Tag ein frisches Ei.',
          translation: 'The chicken laid a fresh egg every day.',
        },
        {
          sentence: 'Die Eier wurden vorsichtig in den Nestern ausgebrütet.',
          translation: 'The eggs were carefully incubated in the nests.',
        },
        {
          sentence:
            'Sie schlug das Ei auf und ließ den Inhalt in die Schüssel fallen.',
          translation:
            'She cracked the egg open and let the contents fall into the bowl.',
        },
        {
          sentence:
            'Das Omelett war mit Käse und Gemüse gefüllt und mit Eiern zubereitet.',
          translation:
            'The omelet was filled with cheese and vegetables and made with eggs.',
        },
      ],
    },
    {
      word: 'Fahrt',
      desc: "Noun meaning 'ride', a journey or excursion, especially in a vehicle.",
      examples: [
        {
          sentence: 'Die Fahrt mit dem Zug war angenehm und entspannend.',
          translation: 'The train ride was pleasant and relaxing.',
        },
        {
          sentence: 'Er machte eine Fahrt durch die malerische Landschaft.',
          translation: 'He took a ride through the picturesque landscape.',
        },
        {
          sentence:
            'Die Fahrt mit dem Fahrrad zur Arbeit dauerte nur zehn Minuten.',
          translation: 'The bike ride to work only took ten minutes.',
        },
        {
          sentence: 'Wir genossen die Fahrt im offenen Cabriolet.',
          translation: 'We enjoyed the ride in the open convertible.',
        },
        {
          sentence: 'Die Fahrt über die holprige Straße war sehr unbequem.',
          translation: 'The ride over the bumpy road was very uncomfortable.',
        },
      ],
    },
    {
      word: 'Zelle',
      desc: "Noun meaning 'cell', the smallest structural and functional unit of an organism, typically microscopic and consisting of cytoplasm and a nucleus enclosed in a membrane.",
      examples: [
        {
          sentence: 'Die Zelle ist die Grundbausteine des Lebens.',
          translation: 'The cell is the basic building block of life.',
        },
        {
          sentence: 'Der menschliche Körper besteht aus unzähligen Zellen.',
          translation: 'The human body consists of countless cells.',
        },
        {
          sentence: 'Die Zellen des Immunsystems bekämpfen Krankheiten.',
          translation: 'The cells of the immune system fight diseases.',
        },
        {
          sentence: 'Die Pflanzenzellen enthalten grüne Chloroplasten.',
          translation: 'The plant cells contain green chloroplasts.',
        },
        {
          sentence: 'Die Zelle ist die kleinste lebensfähige Einheit.',
          translation: 'The cell is the smallest viable unit.',
        },
      ],
    },
    {
      word: 'glauben',
      desc: "Verb meaning 'believe', accept that (something) is true, especially without proof.",
      examples: [
        {
          sentence: 'Sie glaubte fest an die Existenz von Außerirdischen.',
          translation: 'She firmly believed in the existence of aliens.',
        },
        {
          sentence:
            'Ich glaube, dass alles einen Sinn hat, auch wenn wir ihn nicht immer verstehen.',
          translation:
            "I believe that everything has a purpose, even if we don't always understand it.",
        },
        {
          sentence:
            'Er glaubte an die Macht der Liebe, die alle Hindernisse überwinden konnte.',
          translation:
            'He believed in the power of love that could overcome all obstacles.',
        },
        {
          sentence:
            'Sie glaubte an sich selbst und daran, dass sie alles erreichen konnte, was sie sich vornahm.',
          translation:
            'She believed in herself and that she could achieve anything she set her mind to.',
        },
        {
          sentence:
            'Wir glaubten an ein besseres Morgen und arbeiteten hart dafür.',
          translation:
            'We believed in a better tomorrow and worked hard for it.',
        },
      ],
    },
    {
      word: 'vielleicht',
      desc: "Adverb meaning 'perhaps', used to express possibility or uncertainty.",
      examples: [
        {
          sentence: 'Vielleicht kommt er später noch vorbei.',
          translation: 'Perhaps he will come by later.',
        },
        {
          sentence:
            'Vielleicht habe ich das Buch nur ausgeliehen und nicht verloren.',
          translation: 'Maybe I just borrowed the book and didn’t lose it.',
        },
        {
          sentence: 'Vielleicht sollten wir das nächste Mal früher gehen.',
          translation: 'Perhaps we should leave earlier next time.',
        },
        {
          sentence: 'Vielleicht ist es besser, wenn du dich ausruhst.',
          translation: "Maybe it's better if you rest.",
        },
        {
          sentence: 'Vielleicht wird es morgen besser sein.',
          translation: 'Maybe it will be better tomorrow.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'pflücken, plötzlich, zählen, Platz, Grund, Dauer, vertreten, Kunst, Thema, Region',
  words: [
    {
      word: 'pflücken',
      desc: "Verb meaning 'pick', take hold of and remove (a flower, fruit, or vegetable) from where it is growing.",
      examples: [
        {
          sentence: 'Sie pflückte ein paar frische Blumen aus dem Garten.',
          translation: 'She picked some fresh flowers from the garden.',
        },
        {
          sentence: 'Wir gingen in den Obstgarten, um Äpfel zu pflücken.',
          translation: 'We went to the orchard to pick apples.',
        },
        {
          sentence:
            'Er pflückte eine Handvoll Beeren und steckte sie in seinen Mund.',
          translation:
            'He picked a handful of berries and put them in his mouth.',
        },
        {
          sentence:
            'Das Kind pflückte eine Margerite und übergab sie seiner Mutter.',
          translation: 'The child picked a daisy and handed it to his mother.',
        },
        {
          sentence:
            'Sie pflückte einige Kräuter, um eine duftende Suppe zu kochen.',
          translation: 'She picked some herbs to make a fragrant soup.',
        },
      ],
    },
    {
      word: 'plötzlich',
      desc: "Adjective meaning 'sudden', occurring or done quickly and unexpectedly or without warning.",
      examples: [
        {
          sentence:
            'Ein plötzlicher Regenschauer überraschte die Spaziergänger.',
          translation: 'A sudden rain shower caught the walkers by surprise.',
        },
        {
          sentence: 'Plötzlich wurde es still, als ob jeder den Atem anhielt.',
          translation:
            'Suddenly, it became quiet as if everyone held their breath.',
        },
        {
          sentence:
            'Sie war plötzlich krank geworden und musste ins Krankenhaus gebracht werden.',
          translation:
            'She had suddenly become ill and had to be taken to the hospital.',
        },
        {
          sentence: 'Plötzlich erinnerte er sich an den Namen des Films.',
          translation: 'Suddenly, he remembered the name of the movie.',
        },
        {
          sentence:
            'Die plötzliche Veränderung des Wetters machte ihnen Sorgen.',
          translation: 'The sudden change in the weather worried them.',
        },
      ],
    },
    {
      word: 'zählen',
      desc: "Verb meaning 'count', determine the total number of (a collection of items).",
      examples: [
        {
          sentence: 'Sie begann, die Münzen auf dem Tisch zu zählen.',
          translation: 'She started counting the coins on the table.',
        },
        {
          sentence: 'Kannst du bis zehn zählen?',
          translation: 'Can you count to ten?',
        },
        {
          sentence: 'Die Kinder zählten die Tage bis zu den Ferien.',
          translation: 'The children counted the days until the holidays.',
        },
        {
          sentence:
            'Er begann zu zählen, wie viele Stunden er geschlafen hatte.',
          translation: 'He started counting how many hours he had slept.',
        },
        {
          sentence: 'Es ist schwer, die Anzahl der Sterne am Himmel zu zählen.',
          translation:
            "It's difficult to count the number of stars in the sky.",
        },
      ],
    },
    {
      word: 'Platz',
      desc: "Noun meaning 'square', an area of land that is open to the sky and is not covered by buildings.",
      examples: [
        {
          sentence:
            'Wir fanden einen schönen Platz für unser Picknick im Park.',
          translation: 'We found a nice spot for our picnic in the park.',
        },
        {
          sentence:
            'Sie reservierten einen Platz im Restaurant für das Abendessen.',
          translation: 'They reserved a table at the restaurant for dinner.',
        },
        {
          sentence:
            'Der Marktplatz war mit Menschen gefüllt, die ihre Einkäufe erledigten.',
          translation:
            'The square was filled with people doing their shopping.',
        },
        {
          sentence: 'Wir fanden einen freien Platz in der Nähe der Bühne.',
          translation: 'We found an empty space near the stage.',
        },
        {
          sentence:
            'Der Spielplatz war mit Kindern aller Altersstufen gefüllt.',
          translation: 'The playground was filled with children of all ages.',
        },
      ],
    },
    {
      word: 'Grund',
      desc: "Noun meaning 'reason', a basis or cause, as for some belief, action, fact, event, etc.",
      examples: [
        {
          sentence:
            'Sie hatte einen guten Grund, frühzeitig nach Hause zu gehen.',
          translation: 'She had a good reason to go home early.',
        },
        {
          sentence:
            'Der Hauptgrund für seinen Erfolg war harte Arbeit und Entschlossenheit.',
          translation:
            'The main reason for his success was hard work and determination.',
        },
        {
          sentence: 'Es gibt keinen vernünftigen Grund, sich Sorgen zu machen.',
          translation: 'There is no rational reason to worry.',
        },
        {
          sentence:
            'Der Grund für ihre Abwesenheit war eine dringende Angelegenheit.',
          translation: 'The reason for her absence was an urgent matter.',
        },
        {
          sentence: 'Es ist wichtig, den Grund für ihr Verhalten zu verstehen.',
          translation:
            'It is important to understand the reason for her behavior.',
        },
      ],
    },
    {
      word: 'Dauer',
      desc: "Noun meaning 'length', the time during which something continues or exists.",
      examples: [
        {
          sentence:
            'Die Dauer des Films betrug zwei Stunden und zwanzig Minuten.',
          translation:
            'The length of the movie was two hours and twenty minutes.',
        },
        {
          sentence:
            'Die Dauer der Veranstaltung wurde aufgrund des Wetters verkürzt.',
          translation:
            'The duration of the event was shortened due to the weather.',
        },
        {
          sentence:
            'Die Dauer des Projekts wurde unterschätzt, und es dauerte länger als erwartet.',
          translation:
            'The duration of the project was underestimated, and it took longer than expected.',
        },
        {
          sentence: 'Die Dauer der Reise hängt von den Verkehrsbedingungen ab.',
          translation:
            'The length of the journey depends on the traffic conditions.',
        },
        {
          sentence:
            'Die Dauer der Krankheit variiert je nach individuellem Gesundheitszustand.',
          translation:
            'The duration of the illness varies depending on individual health conditions.',
        },
      ],
    },
    {
      word: 'vertreten',
      desc: "Verb meaning 'represent', act as a substitute for (someone or something), especially on a temporary basis.",
      examples: [
        {
          sentence: 'Er vertritt den Chef während seiner Abwesenheit.',
          translation: 'He represents the boss during his absence.',
        },
        {
          sentence: 'Die Anwältin wird die Familie vor Gericht vertreten.',
          translation: 'The lawyer will represent the family in court.',
        },
        {
          sentence:
            'Die Interessen der Bürger werden durch gewählte Vertreter vertreten.',
          translation:
            'The interests of the citizens are represented by elected representatives.',
        },
        {
          sentence:
            'Ich kann Sie bei der Besprechung vertreten, wenn Sie nicht teilnehmen können.',
          translation:
            "I can represent you at the meeting if you can't attend.",
        },
        {
          sentence:
            'Die Schülervertretung kümmert sich um die Anliegen der Schüler.',
          translation:
            'The student council takes care of the concerns of the students.',
        },
      ],
    },
    {
      word: 'Kunst',
      desc: "Noun meaning 'art', the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.",
      examples: [
        {
          sentence: 'Sie studiert Kunst an der Universität.',
          translation: 'She is studying art at the university.',
        },
        {
          sentence:
            'Seine Kunstwerke wurden in renommierten Galerien ausgestellt.',
          translation: 'His artworks were exhibited in prestigious galleries.',
        },
        {
          sentence: 'Die Kunst des Schreibens erfordert Übung und Talent.',
          translation: 'The art of writing requires practice and talent.',
        },
        {
          sentence:
            'Moderne Kunst kann oft kontrovers und schwer verständlich sein.',
          translation:
            'Modern art can often be controversial and difficult to understand.',
        },
        {
          sentence: 'Die Schönheit der Kunst liegt im Auge des Betrachters.',
          translation: 'The beauty of art is in the eye of the beholder.',
        },
      ],
    },
    {
      word: 'Thema',
      desc: "Noun meaning 'subject', a topic of discourse or discussion.",
      examples: [
        {
          sentence:
            'Das Thema der Konferenz war Umweltschutz und Nachhaltigkeit.',
          translation:
            'The subject of the conference was environmental protection and sustainability.',
        },
        {
          sentence: 'Er sprach über verschiedene Themen in seinem Vortrag.',
          translation: 'He talked about various subjects in his lecture.',
        },
        {
          sentence: 'Das Buch behandelt das Thema der menschlichen Evolution.',
          translation: 'The book deals with the subject of human evolution.',
        },
        {
          sentence:
            'Die Diskussion konzentrierte sich auf das Thema der globalen Erwärmung.',
          translation:
            'The discussion focused on the subject of global warming.',
        },
        {
          sentence:
            'Das Thema des Films war die Liebe in einer postapokalyptischen Welt.',
          translation:
            'The subject of the movie was love in a post-apocalyptic world.',
        },
      ],
    },
    {
      word: 'Region',
      desc: "Noun meaning 'region', an area, especially part of a country or the world having definable characteristics but not always fixed boundaries.",
      examples: [
        {
          sentence: 'Die Weinregion ist für ihre erstklassigen Weine bekannt.',
          translation: 'The wine region is known for its excellent wines.',
        },
        {
          sentence:
            'Die östliche Region des Landes ist bergig und wenig besiedelt.',
          translation:
            'The eastern region of the country is mountainous and sparsely populated.',
        },
        {
          sentence:
            'In dieser Region herrscht ein mildes Klima das ganze Jahr über.',
          translation: 'This region enjoys a mild climate all year round.',
        },
        {
          sentence:
            'Die Region ist reich an natürlicher Schönheit und kulturellem Erbe.',
          translation:
            'The region is rich in natural beauty and cultural heritage.',
        },
        {
          sentence:
            'Die wirtschaftliche Entwicklung der Region hängt von der Landwirtschaft ab.',
          translation:
            'The economic development of the region depends on agriculture.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Größe, variieren, regeln, sprechen, Gewicht, allgemein, Eis, Materie, Kreis, Paar',
  words: [
    {
      word: 'Größe',
      desc: "Noun meaning 'size', the relative extent of something; a physical dimension or measurement.",
      examples: [
        {
          sentence: 'Die Größe des Hauses beeindruckte uns.',
          translation: 'The size of the house impressed us.',
        },
        {
          sentence: 'Er nahm die Größe des Problems nicht ernst.',
          translation: "He didn't take the size of the problem seriously.",
        },
        {
          sentence:
            'Die Größe des Raumes ermöglichte viele Nutzungsmöglichkeiten.',
          translation: 'The size of the room allowed for many uses.',
        },
        {
          sentence:
            'Sie untersuchten die Größe der Bevölkerung und ihre Auswirkungen auf die Umwelt.',
          translation:
            'They studied the size of the population and its impact on the environment.',
        },
        {
          sentence:
            'Die Größe des Bildschirms beeinflusst die Qualität des Seherlebnisses.',
          translation:
            'The size of the screen influences the quality of the viewing experience.',
        },
      ],
    },
    {
      word: 'variieren',
      desc: "Verb meaning 'vary', change or differ in size, amount, degree, or nature, typically from one thing to another.",
      examples: [
        {
          sentence: 'Die Preise können je nach Standort variieren.',
          translation: 'Prices may vary depending on the location.',
        },
        {
          sentence: 'Die Gründe für sein Verhalten variieren von Tag zu Tag.',
          translation: 'The reasons for his behavior vary from day to day.',
        },
        {
          sentence: 'Die Ergebnisse der Studie variieren je nach Stichprobe.',
          translation: 'The results of the study vary depending on the sample.',
        },
        {
          sentence: 'Die Farbe des Himmels kann im Laufe des Tages variieren.',
          translation: 'The color of the sky can vary throughout the day.',
        },
        {
          sentence: 'Die Qualität der Produkte kann stark variieren.',
          translation: 'The quality of the products can vary greatly.',
        },
      ],
    },
    {
      word: 'regeln',
      desc: "Verb meaning 'settle', settle or resolve (a dispute or disagreement).",
      examples: [
        {
          sentence: 'Wir müssen das Problem so schnell wie möglich regeln.',
          translation: 'We need to settle the problem as soon as possible.',
        },
        {
          sentence:
            'Die beiden Parteien konnten den Streit außergerichtlich regeln.',
          translation:
            'The two parties were able to settle the dispute out of court.',
        },
        {
          sentence: 'Wir müssen diese Angelegenheit auf faire Weise regeln.',
          translation: 'We need to settle this matter in a fair way.',
        },
        {
          sentence: 'Sie konnten den Konflikt friedlich regeln.',
          translation: 'They were able to settle the conflict peacefully.',
        },
        {
          sentence:
            'Es ist wichtig, Meinungsverschiedenheiten auf eine konstruktive Weise zu regeln.',
          translation:
            'It is important to settle disagreements in a constructive way.',
        },
      ],
    },
    {
      word: 'sprechen',
      desc: "Verb meaning 'speak', communicate or articulate (a specified language or dialect).",
      examples: [
        {
          sentence: 'Er spricht fließend Deutsch und Englisch.',
          translation: 'He speaks fluent German and English.',
        },
        {
          sentence: 'Sie sprach leise, damit niemand sie hören konnte.',
          translation: 'She spoke softly so that no one could hear her.',
        },
        {
          sentence:
            'Die Lehrerin sprach langsam, damit die Schüler sie verstehen konnten.',
          translation:
            'The teacher spoke slowly so that the students could understand her.',
        },
        {
          sentence: 'Er sprach über seine Erfahrungen im Ausland.',
          translation: 'He spoke about his experiences abroad.',
        },
        {
          sentence: 'Die Rednerin sprach zu einer großen Menschenmenge.',
          translation: 'The speaker spoke to a large crowd of people.',
        },
      ],
    },
    {
      word: 'Gewicht',
      desc: "Noun meaning 'weight', a body's relative mass or the quantity of matter contained by it, giving rise to a downward force; the heaviness of a person or thing.",
      examples: [
        {
          sentence: 'Das Paket hat ein Gewicht von fünf Kilogramm.',
          translation: 'The package has a weight of five kilograms.',
        },
        {
          sentence:
            'Sie hat viel Gewicht verloren und fühlt sich jetzt viel besser.',
          translation:
            'She has lost a lot of weight and now feels much better.',
        },
        {
          sentence: 'Das Gewicht des Objekts beeinflusst seine Flugbahn.',
          translation: 'The weight of the object affects its trajectory.',
        },
        {
          sentence: 'Der Arzt hat ihr geraten, auf ihr Gewicht zu achten.',
          translation: 'The doctor advised her to watch her weight.',
        },
        {
          sentence: 'Der Preis wird nach Gewicht berechnet.',
          translation: 'The price is calculated by weight.',
        },
      ],
    },
    {
      word: 'allgemein',
      desc: "Adjective meaning 'general', affecting or concerning all or most people, places, or things; widespread.",
      examples: [
        {
          sentence: 'Es herrscht allgemeines Interesse an diesem Thema.',
          translation: 'There is general interest in this topic.',
        },
        {
          sentence: 'In der Regel sind allgemeine Regeln für alle gleich.',
          translation: 'Generally, general rules apply to everyone equally.',
        },
        {
          sentence:
            'Es gibt einige allgemeine Grundsätze, die in vielen Kulturen gelten.',
          translation:
            'There are some general principles that apply in many cultures.',
        },
        {
          sentence:
            'Das allgemeine Wohlbefinden der Bevölkerung ist ein wichtiges Anliegen.',
          translation:
            'The general well-being of the population is an important concern.',
        },
        {
          sentence: 'Die allgemeine Stimmung war positiv und optimistisch.',
          translation: 'The general mood was positive and optimistic.',
        },
      ],
    },
    {
      word: 'Eis',
      desc: "Noun meaning 'ice', water frozen into a solid state, typically forming a hard, brittle crystalline structure.",
      examples: [
        {
          sentence: 'Im Winter bedeckt Eis die Oberfläche des Sees.',
          translation: 'In winter, ice covers the surface of the lake.',
        },
        {
          sentence: 'Das Eis schmilzt langsam in der warmen Sonne.',
          translation: 'The ice melts slowly in the warm sun.',
        },
        {
          sentence:
            'Die Kinder rutschten auf dem Eis des zugefrorenen Teiches.',
          translation: 'The children slid on the ice of the frozen pond.',
        },
        {
          sentence: 'Sie legte Eiswürfel in ihr Getränk, um es abzukühlen.',
          translation: 'She put ice cubes in her drink to cool it down.',
        },
        {
          sentence: 'Die Straßen waren glatt vom Eisregen.',
          translation: 'The roads were slippery from the freezing rain.',
        },
      ],
    },
    {
      word: 'Materie',
      desc: "Noun meaning 'matter', physical substance in general, as distinct from mind and spirit; (in physics) that which occupies space and possesses rest mass, especially as distinct from energy.",
      examples: [
        {
          sentence:
            'Die Untersuchung der Materie ist ein wichtiger Bereich in der Physik.',
          translation: 'The study of matter is an important area in physics.',
        },
        {
          sentence: 'Die Materie besteht aus Atomen und Molekülen.',
          translation: 'Matter consists of atoms and molecules.',
        },
        {
          sentence:
            'Es gibt verschiedene Zustände der Materie, einschließlich fest, flüssig und gasförmig.',
          translation:
            'There are different states of matter, including solid, liquid, and gaseous.',
        },
        {
          sentence:
            'Die Materie kann weder erzeugt noch zerstört werden, sondern nur in verschiedene Formen umgewandelt werden.',
          translation:
            'Matter cannot be created or destroyed, only transformed into different forms.',
        },
        {
          sentence:
            'Die Eigenschaften der Materie hängen von ihrer Zusammensetzung und Struktur ab.',
          translation:
            'The properties of matter depend on its composition and structure.',
        },
      ],
    },
    {
      word: 'Kreis',
      desc: "Noun meaning 'circle', a round plane figure whose boundary (the circumference) consists of points equidistant from a fixed point (the center).",
      examples: [
        {
          sentence: 'Sie zeichnete einen perfekten Kreis auf das Papier.',
          translation: 'She drew a perfect circle on the paper.',
        },
        {
          sentence: 'Die Kinder saßen im Kreis und hörten der Lehrerin zu.',
          translation:
            'The children sat in a circle and listened to the teacher.',
        },
        {
          sentence: 'Ein Kreis hat keinen Anfang und kein Ende.',
          translation: 'A circle has no beginning and no end.',
        },
        {
          sentence: 'Sie bildeten einen Kreis um das Lagerfeuer.',
          translation: 'They formed a circle around the campfire.',
        },
        {
          sentence: 'Der Ring war mit einem feinen Kreismuster verziert.',
          translation: 'The ring was decorated with a fine circle pattern.',
        },
      ],
    },
    {
      word: 'Paar',
      desc: "Noun meaning 'pair', two corresponding items forming a set; a couple.",
      examples: [
        {
          sentence: 'Sie kaufte ein Paar neue Schuhe.',
          translation: 'She bought a pair of new shoes.',
        },
        {
          sentence:
            'Er trug ein Paar Handschuhe, um seine Hände warm zu halten.',
          translation: 'He wore a pair of gloves to keep his hands warm.',
        },
        {
          sentence: 'Das Paar ging Hand in Hand den Strand entlang.',
          translation: 'The couple walked hand in hand along the beach.',
        },
        {
          sentence: 'Wir haben ein Paar Tickets für das Konzert gekauft.',
          translation: 'We bought a pair of tickets for the concert.',
        },
        {
          sentence: 'Das Paar heiratete in einer kleinen Kapelle auf dem Land.',
          translation:
            'The couple got married in a small chapel in the countryside.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'umfassen, Kluft, Silbe, Filz, groß, Kugel, noch, Welle, fallen, Herz',
  words: [
    {
      word: 'umfassen',
      desc: "Verb meaning 'include', to contain, to encompass, or to comprise.",
      examples: [
        {
          sentence: 'Das Paket umfasste mehrere Bücher und eine Karte.',
          translation: 'The package included several books and a map.',
        },
        {
          sentence: 'Der Bericht umfasste alle wichtigen Details des Projekts.',
          translation:
            'The report included all the important details of the project.',
        },
        {
          sentence:
            'Die Veranstaltung umfasste verschiedene Aktivitäten für Kinder und Erwachsene.',
          translation:
            'The event included various activities for children and adults.',
        },
        {
          sentence:
            'Die Diskussion umfasste verschiedene Meinungen zu dem Thema.',
          translation:
            'The discussion encompassed various opinions on the topic.',
        },
        {
          sentence:
            'Seine Arbeit umfasste die Entwicklung neuer Softwarelösungen.',
          translation:
            'His work involved the development of new software solutions.',
        },
      ],
    },
    {
      word: 'Kluft',
      desc: "Noun meaning 'divide', a deep fissure in the earth's surface; a gorge or ravine.",
      examples: [
        {
          sentence: 'Die Wanderer überquerten die Kluft mit Vorsicht.',
          translation: 'The hikers crossed the divide with caution.',
        },
        {
          sentence: 'Die Kluft zwischen den beiden Ländern war unüberbrückbar.',
          translation:
            'The divide between the two countries was insurmountable.',
        },
        {
          sentence: 'Die Kluft im Felsen war tief und gefährlich.',
          translation: 'The crevice in the rock was deep and dangerous.',
        },
        {
          sentence: 'Die Kluft in der Gesellschaft wurde immer größer.',
          translation: 'The gap in society was growing ever wider.',
        },
        {
          sentence: 'Die Kluft zwischen Arm und Reich war offensichtlich.',
          translation: 'The gap between rich and poor was evident.',
        },
      ],
    },
    {
      word: 'Silbe',
      desc: "Noun meaning 'syllable', a unit of pronunciation having one vowel sound, with or without surrounding consonants, forming the whole or a part of a word; a single, unbroken sound of a spoken word.",
      examples: [
        {
          sentence: 'Das Wort besteht aus drei Silben.',
          translation: 'The word consists of three syllables.',
        },
        {
          sentence: 'Kinder lernen normalerweise zuerst einfache Silben.',
          translation: 'Children usually learn simple syllables first.',
        },
        {
          sentence:
            'Es gibt viele Wörter mit zwei Silben in der deutschen Sprache.',
          translation:
            'There are many words with two syllables in the German language.',
        },
        {
          sentence: 'Manche Silben werden betont, andere nicht.',
          translation: 'Some syllables are stressed, others are not.',
        },
        {
          sentence:
            'Das Gedicht hat eine ungewöhnliche Anzahl von Silben pro Vers.',
          translation: 'The poem has an unusual number of syllables per line.',
        },
      ],
    },
    {
      word: 'Filz',
      desc: "Noun meaning 'felt', a fabric made of wool fibers matted together by moisture, heat, and pressure.",
      examples: [
        {
          sentence: 'Sie trug einen Hut aus Filz.',
          translation: 'She wore a felt hat.',
        },
        {
          sentence:
            'Die Möbel waren mit Filz gepolstert, um Beschädigungen zu vermeiden.',
          translation: 'The furniture was padded with felt to prevent damage.',
        },
        {
          sentence: 'Er kaufte einen Filz für die Unterseite seines Teppichs.',
          translation: 'He bought a felt for the underside of his carpet.',
        },
        {
          sentence: 'Der Filz war weich und angenehm zu berühren.',
          translation: 'The felt was soft and pleasant to touch.',
        },
        {
          sentence:
            'Die Künstlerin arbeitete gerne mit Filz für ihre Kunstprojekte.',
          translation:
            'The artist enjoyed working with felt for her art projects.',
        },
      ],
    },
    {
      word: 'groß',
      desc: "Adjective meaning 'grand', of considerable size or extent; large.",
      examples: [
        {
          sentence: 'Das Haus hatte einen großen Garten.',
          translation: 'The house had a large garden.',
        },
        {
          sentence:
            'Er hatte einen großen Hund, der ihn überallhin begleitete.',
          translation: 'He had a large dog that accompanied him everywhere.',
        },
        {
          sentence: 'Die Stadt hatte viele große Gebäude und Wolkenkratzer.',
          translation: 'The city had many large buildings and skyscrapers.',
        },
        {
          sentence:
            'Sie hatte einen großen Traum, den sie verwirklichen wollte.',
          translation: 'She had a grand dream that she wanted to fulfill.',
        },
        {
          sentence: 'Die Arbeit erforderte einen großen Zeitaufwand.',
          translation: 'The work required a large amount of time.',
        },
      ],
    },
    {
      word: 'Kugel',
      desc: "Noun meaning 'ball', a solid or hollow spherical or egg-shaped object that is typically made of metal or rubber; a round-bodied, typically bullet-shaped projectile fired from a gun.",
      examples: [
        {
          sentence: 'Die Kinder spielten mit einer großen roten Kugel im Park.',
          translation: 'The children played with a large red ball in the park.',
        },
        {
          sentence: 'Er rollte eine Kugel aus Ton auf der Töpferscheibe.',
          translation: "He rolled a ball of clay on the potter's wheel.",
        },
        {
          sentence: 'Die Kugel flog mit hoher Geschwindigkeit durch die Luft.',
          translation: 'The bullet flew through the air at high speed.',
        },
        {
          sentence:
            'Die Glaskugel reflektierte das Licht und erzeugte schöne Muster.',
          translation:
            'The glass ball reflected the light and created beautiful patterns.',
        },
        {
          sentence: 'Er schoss mit einer Kugel auf das Ziel und traf es genau.',
          translation:
            'He shot a bullet at the target and hit it right on target.',
        },
      ],
    },
    {
      word: 'noch',
      desc: "Adverb meaning 'yet', used to indicate something that is expected or hoped to happen or be the case in the future.",
      examples: [
        {
          sentence: 'Sie hatte noch nicht mit ihrem Projekt begonnen.',
          translation: 'She had not yet started on her project.',
        },
        {
          sentence:
            'Er hat noch nicht angerufen, aber ich erwarte seinen Anruf jeden Moment.',
          translation:
            "He hasn't called yet, but I expect his call any moment.",
        },
        {
          sentence: 'Die Kinder sind noch zu jung, um alleine zu reisen.',
          translation: 'The children are still too young to travel alone.',
        },
        {
          sentence:
            'Ich habe das Buch noch nicht gelesen, aber ich habe gehört, dass es sehr gut ist.',
          translation:
            "I haven't read the book yet, but I've heard it's very good.",
        },
        {
          sentence: 'Wir haben noch Zeit, um das Problem zu lösen.',
          translation: 'We still have time to solve the problem.',
        },
      ],
    },
    {
      word: 'Welle',
      desc: "Noun meaning 'wave', a long body of water curling into an arched form and breaking on the shore.",
      examples: [
        {
          sentence: 'Die Surfer warteten auf die nächste große Welle.',
          translation: 'The surfers were waiting for the next big wave.',
        },
        {
          sentence: 'Die Welle brach mit einem lauten Rauschen an Land.',
          translation: 'The wave crashed onto the shore with a loud roar.',
        },
        {
          sentence:
            'Der Tsunami erzeugte eine riesige Welle, die alles mit sich riss.',
          translation:
            'The tsunami generated a huge wave that swept everything away.',
        },
        {
          sentence: 'Die Wellen glitzerten im Sonnenlicht.',
          translation: 'The waves shimmered in the sunlight.',
        },
        {
          sentence: 'Eine Welle der Begeisterung erfasste die Menge.',
          translation: 'A wave of excitement swept through the crowd.',
        },
      ],
    },
    {
      word: 'fallen',
      desc: "Verb meaning 'to fall', to move downward, typically rapidly and freely without control, from a higher to a lower level.",
      examples: [
        {
          sentence: 'Die Blätter fallen von den Bäumen.',
          translation: 'The leaves are falling from the trees.',
        },
        {
          sentence: 'Die Vase fiel zu Boden und zerbrach in viele Stücke.',
          translation:
            'The vase fell to the ground and broke into many pieces.',
        },
        {
          sentence: 'Er stolperte und fiel die Treppe hinunter.',
          translation: 'He stumbled and fell down the stairs.',
        },
        {
          sentence: 'Die Tränen fielen leise auf ihr Gesicht.',
          translation: 'The tears fell softly onto her face.',
        },
        {
          sentence: 'Die Dunkelheit fiel rasch über die Stadt.',
          translation: 'The darkness fell quickly over the city.',
        },
      ],
    },
    {
      word: 'Herz',
      desc: "Noun meaning 'heart', the muscular organ in humans and other animals that pumps blood through the circulatory system.",
      examples: [
        {
          sentence: 'Das Herz schlägt etwa 100.000 Mal pro Tag.',
          translation: 'The heart beats about 100,000 times per day.',
        },
        {
          sentence: 'Sie spürte ihr Herz schneller schlagen, als sie ihn sah.',
          translation: 'She felt her heart beat faster when she saw him.',
        },
        {
          sentence:
            'Sein Herz war schwer, als er von der traurigen Nachricht hörte.',
          translation: 'His heart was heavy when he heard the sad news.',
        },
        {
          sentence:
            'Das Herz ist ein lebenswichtiges Organ für den menschlichen Körper.',
          translation: 'The heart is a vital organ for the human body.',
        },
        {
          sentence:
            'Sie hatte ein Herz aus Gold und half jedem, der in Not war.',
          translation: 'She had a heart of gold and helped anyone in need.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Uhr, vorhanden, schwer, Tanz, Motor, Position, Arm, breit, Segel, Material',
  words: [
    {
      word: 'Uhr',
      desc: "Noun meaning 'clock' or 'watch', a device used for measuring and indicating time, typically by hands moving over a dial.",
      examples: [
        {
          sentence: 'Die Uhr zeigt fünf Minuten vor zwölf.',
          translation: 'The clock shows five minutes to twelve.',
        },
        {
          sentence: 'Er trägt eine teure Uhr am Handgelenk.',
          translation: 'He wears an expensive watch on his wrist.',
        },
        {
          sentence: 'Die Kirchturmuhr schlägt gerade sechs Uhr.',
          translation: "The church tower clock is striking six o'clock.",
        },
        {
          sentence: 'Die digitale Uhr leuchtete in der Dunkelheit.',
          translation: 'The digital clock glowed in the darkness.',
        },
        {
          sentence: 'Sie musste auf die Uhr schauen, um die Zeit zu wissen.',
          translation: 'She had to look at the clock to know the time.',
        },
      ],
    },
    {
      word: 'vorhanden',
      desc: "Adjective meaning 'present' or 'available', existing or occurring in a place or at a time; present.",
      examples: [
        {
          sentence: 'Alle erforderlichen Materialien sind vorhanden.',
          translation: 'All the necessary materials are present.',
        },
        {
          sentence: 'Ist der Arzt zurzeit im Krankenhaus vorhanden?',
          translation: 'Is the doctor currently available at the hospital?',
        },
        {
          sentence: 'Sind ausreichend Parkplätze vorhanden?',
          translation: 'Are there enough parking spaces available?',
        },
        {
          sentence:
            'Keine besonderen Probleme sind bei der Implementierung vorhanden.',
          translation:
            'No particular problems are present in the implementation.',
        },
        {
          sentence: 'Die erforderlichen Werkzeuge waren nicht vorhanden.',
          translation: 'The necessary tools were not available.',
        },
      ],
    },
    {
      word: 'schwer',
      desc: "Adjective meaning 'heavy', of great weight; difficult to lift or move.",
      examples: [
        {
          sentence:
            'Die Kiste war zu schwer für ihn, um sie alleine zu tragen.',
          translation: 'The box was too heavy for him to carry alone.',
        },
        {
          sentence: 'Der Rucksack wurde mit jedem Schritt schwerer.',
          translation: 'The backpack became heavier with each step.',
        },
        {
          sentence:
            'Es war eine schwere Entscheidung, aber sie musste getroffen werden.',
          translation: 'It was a difficult decision, but it had to be made.',
        },
        {
          sentence:
            'Der Verlust des geliebten Haustieres war eine schwere Last für die Familie.',
          translation:
            'The loss of the beloved pet was a heavy burden for the family.',
        },
        {
          sentence:
            'Sie hatte ein schweres Buch über die Geschichte des Zweiten Weltkriegs gelesen.',
          translation:
            'She had read a heavy book on the history of World War II.',
        },
      ],
    },
    {
      word: 'Tanz',
      desc: "Noun meaning 'dance', a series of movements that match the speed and rhythm of music.",
      examples: [
        {
          sentence: 'Sie liebte es, zu lateinamerikanischer Musik zu tanzen.',
          translation: 'She loved dancing to Latin music.',
        },
        {
          sentence:
            'Der Tanz der Flamenco-Tänzer war anmutig und leidenschaftlich.',
          translation:
            'The dance of the flamenco dancers was graceful and passionate.',
        },
        {
          sentence: 'Die Hochzeitstanzfläche war voll mit fröhlichen Gästen.',
          translation: 'The wedding dance floor was filled with joyful guests.',
        },
        {
          sentence: 'Der Balletttanz erfordert Anmut, Kraft und Ausdauer.',
          translation:
            'Ballet dancing requires grace, strength, and endurance.',
        },
        {
          sentence: 'Sie nahm Tanzstunden, um ihre Fähigkeiten zu verbessern.',
          translation: 'She took dance lessons to improve her skills.',
        },
      ],
    },
    {
      word: 'Motor',
      desc: "Noun meaning 'engine', a machine that converts energy, especially in the form of fuel, into mechanical motion.",
      examples: [
        {
          sentence: 'Der Motor des Autos röhrt, als er gestartet wird.',
          translation: 'The car engine roars as it is started.',
        },
        {
          sentence: 'Der Bootsmotor lief ruhig und zuverlässig.',
          translation: 'The boat engine ran smoothly and reliably.',
        },
        {
          sentence: 'Der Zugmotor zog die Waggons über die Schienen.',
          translation:
            'The train engine pulled the carriages along the tracks.',
        },
        {
          sentence: 'Die Maschine hatte einen leistungsstarken Motor.',
          translation: 'The machine had a powerful engine.',
        },
        {
          sentence: 'Sie hörte den Klang des Motors, als das Flugzeug abhob.',
          translation:
            'She heard the sound of the engine as the plane took off.',
        },
      ],
    },
    {
      word: 'Position',
      desc: "Noun meaning 'position', the place where someone or something is located or has been put.",
      examples: [
        {
          sentence: 'Seine Position auf der Karte war nicht genau bestimmt.',
          translation: 'His position on the map was not precisely determined.',
        },
        {
          sentence: 'Der Angreifer nahm eine vorteilhafte Position ein.',
          translation: 'The attacker took up an advantageous position.',
        },
        {
          sentence: 'Ihre Position in der Firma war strategisch wichtig.',
          translation:
            'Her position in the company was strategically important.',
        },
        {
          sentence: 'Die Position des Schiffes wurde durch GPS bestimmt.',
          translation: 'The position of the ship was determined by GPS.',
        },
        {
          sentence: 'Er übernahm die Position des Teamkapitäns.',
          translation: 'He assumed the position of team captain.',
        },
      ],
    },
    {
      word: 'Arm',
      desc: "Noun meaning 'arm', the two upper limbs of the human body from the shoulder to the hand.",
      examples: [
        {
          sentence:
            'Sie hatte einen Verband um ihren verletzten Arm gewickelt.',
          translation: 'She had a bandage wrapped around her injured arm.',
        },
        {
          sentence: 'Seine Arme waren muskulös und kräftig.',
          translation: 'His arms were muscular and strong.',
        },
        {
          sentence: 'Die Kinder streckten die Arme aus, um den Ball zu fangen.',
          translation: 'The children reached out their arms to catch the ball.',
        },
        {
          sentence: 'Er legte seinen Arm um ihre Schultern und tröstete sie.',
          translation: 'He put his arm around her shoulders and comforted her.',
        },
        {
          sentence: 'Der Maler hatte eine Leinwand in seinem Arm.',
          translation: 'The painter had a canvas under his arm.',
        },
      ],
    },
    {
      word: 'breit',
      desc: "Adjective meaning 'wide' or 'broad', measuring a great distance from side to side.",
      examples: [
        {
          sentence: 'Die Straße war breit genug für zwei Fahrzeuge.',
          translation: 'The road was wide enough for two vehicles.',
        },
        {
          sentence: 'Seine Schultern waren breit und muskulös.',
          translation: 'His shoulders were broad and muscular.',
        },
        {
          sentence: 'Der Fluss wurde an dieser Stelle sehr breit.',
          translation: 'The river became very wide at this point.',
        },
        {
          sentence: 'Ein breites Lächeln erschien auf ihrem Gesicht.',
          translation: 'A broad smile appeared on her face.',
        },
        {
          sentence: 'Die Aussicht von der Klippe war atemberaubend breit.',
          translation: 'The view from the cliff was breathtakingly wide.',
        },
      ],
    },
    {
      word: 'Segel',
      desc: "Noun meaning 'sail', a piece of material extended on a mast to catch the wind and propel a boat or ship or to make a windmill work.",
      examples: [
        {
          sentence: 'Die Segel des Schiffes waren prall mit Wind gefüllt.',
          translation: 'The sails of the ship were filled taut with wind.',
        },
        {
          sentence: 'Sie lernte, wie man die Segel eines Segelbootes setzt.',
          translation: 'She learned how to set the sails of a sailboat.',
        },
        {
          sentence:
            'Die Segel waren auf dem See wie weiße Schmetterlingsflügel.',
          translation: 'The sails on the lake were like white butterfly wings.',
        },
        {
          sentence: 'Der Kapitän befehligte die Crew, die Segel zu setzen.',
          translation: 'The captain commanded the crew to set the sails.',
        },
        {
          sentence: 'Das Schiff fuhr mit vollen Segeln in den Hafen ein.',
          translation: 'The ship sailed into the harbor with full sails.',
        },
      ],
    },
    {
      word: 'Material',
      desc: "Noun meaning 'material', the substance or substances of which something is made or composed.",
      examples: [
        {
          sentence:
            'Das Material des Kleides fühlte sich angenehm auf ihrer Haut an.',
          translation: 'The material of the dress felt pleasant on her skin.',
        },
        {
          sentence: 'Die Konstruktion erforderte spezielle Materialien.',
          translation: 'The construction required special materials.',
        },
        {
          sentence:
            'Sie studierte die Eigenschaften verschiedener Materialien.',
          translation: 'She studied the properties of different materials.',
        },
        {
          sentence: 'Das Buch war aus hochwertigem Material gebunden.',
          translation: 'The book was bound in high-quality material.',
        },
        {
          sentence:
            'Die Designerin bevorzugte natürliche Materialien für ihre Mode.',
          translation:
            'The designer preferred natural materials for her fashion.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Fraktion, Wald, sitzen, Rennen, Fenster, Speicher, Sommer, Zug, Schlaf, beweisen',
  words: [
    {
      word: 'Fraktion',
      desc: "Noun meaning 'fraction', a numerical quantity that is not a whole number.",
      examples: [
        {
          sentence:
            'Die Fraktionen des Kuchens wurden gleichmäßig unter den Kindern verteilt.',
          translation:
            'The fractions of the cake were evenly distributed among the children.',
        },
        {
          sentence:
            'Die Fraktion der Opposition forderte eine Überprüfung der Gesetzesvorlage.',
          translation:
            'The opposition faction called for a review of the bill.',
        },
        {
          sentence:
            'Die Fraktionen des Parlaments konnten sich nicht auf eine gemeinsame Strategie einigen.',
          translation:
            'The factions of the parliament could not agree on a common strategy.',
        },
        {
          sentence:
            'Die Mathematiklehrerin erklärte den Schülern das Konzept der Brüche und Fraktionen.',
          translation:
            'The math teacher explained to the students the concept of fractions and fractions.',
        },
        {
          sentence:
            'Eine kleine Fraktion der Mitglieder war mit dem Vorschlag nicht einverstanden.',
          translation:
            'A small faction of the members disagreed with the proposal.',
        },
      ],
    },
    {
      word: 'Wald',
      desc: "Noun meaning 'forest', a large area covered chiefly with trees and undergrowth.",
      examples: [
        {
          sentence:
            'Sie machten einen Spaziergang durch den Wald und genossen die frische Luft.',
          translation:
            'They took a walk through the forest and enjoyed the fresh air.',
        },
        {
          sentence: 'Der Wald war im Herbst mit bunten Blättern bedeckt.',
          translation: 'The forest was covered with colorful leaves in autumn.',
        },
        {
          sentence:
            'Die Tiere des Waldes waren in der Dämmerung besonders aktiv.',
          translation:
            'The animals of the forest were particularly active at dusk.',
        },
        {
          sentence:
            'Der Wald wurde zum Schutzgebiet erklärt, um die natürliche Umgebung zu bewahren.',
          translation:
            'The forest was declared a protected area to preserve the natural environment.',
        },
        {
          sentence:
            'Die Kinder spielten Verstecken zwischen den Bäumen im Wald.',
          translation:
            'The children played hide and seek among the trees in the forest.',
        },
      ],
    },
    {
      word: 'sitzen',
      desc: "Verb meaning 'to sit', to rest with the body supported by the buttocks or thighs; be seated.",
      examples: [
        {
          sentence: 'Sie saß auf einer Bank im Park und las ein Buch.',
          translation: 'She sat on a bench in the park and read a book.',
        },
        {
          sentence:
            'Die Schüler saßen ruhig in ihren Stühlen und hörten dem Lehrer zu.',
          translation:
            'The students sat quietly in their chairs and listened to the teacher.',
        },
        {
          sentence:
            'Der alte Mann saß stundenlang auf seiner Veranda und beobachtete die Vögel.',
          translation:
            'The old man sat for hours on his porch, watching the birds.',
        },
        {
          sentence: 'Sie saßen gemeinsam am Tisch und planten ihre Reise.',
          translation: 'They sat together at the table, planning their trip.',
        },
        {
          sentence:
            'Die Katze saß auf der Fensterbank und schaute nach draußen.',
          translation: 'The cat sat on the windowsill, looking outside.',
        },
      ],
    },
    {
      word: 'Rennen',
      desc: "Noun meaning 'race', a competition between runners, horses, vehicles, boats, etc., to see which is the fastest in covering a set course.",
      examples: [
        {
          sentence: 'Das Pferderennen zog viele Zuschauer an.',
          translation: 'The horse race attracted many spectators.',
        },
        {
          sentence:
            'Der Marathonlauf war ein anspruchsvolles Rennen für die Teilnehmer.',
          translation:
            'The marathon was a challenging race for the participants.',
        },
        {
          sentence: 'Das Auto Rennen wurde von einem jungen Fahrer gewonnen.',
          translation: 'The car race was won by a young driver.',
        },
        {
          sentence: 'Das Schwimm Rennen fand im Freibad statt.',
          translation: 'The swimming race took place in the outdoor pool.',
        },
        {
          sentence: 'Die Kinder veranstalteten ein Fahrrad Rennen im Park.',
          translation: 'The children organized a bicycle race in the park.',
        },
      ],
    },
    {
      word: 'Fenster',
      desc: "Noun meaning 'window', an opening in a wall or door, usually fitted with glass in a frame to admit light or air and allow people to see out.",
      examples: [
        {
          sentence: 'Sie öffnete das Fenster, um frische Luft hereinzulassen.',
          translation: 'She opened the window to let in fresh air.',
        },
        {
          sentence: 'Das Sonnenlicht schien durch das Fenster in den Raum.',
          translation:
            'The sunlight streamed through the window into the room.',
        },
        {
          sentence:
            'Der Blick aus dem Fenster bot eine malerische Aussicht auf die Landschaft.',
          translation:
            'The view from the window offered a picturesque view of the landscape.',
        },
        {
          sentence: 'Sie schloss das Fenster, als es anfing zu regnen.',
          translation: 'She closed the window when it started to rain.',
        },
        {
          sentence:
            'Die Katze saß auf der Fensterbank und genoss die Wärme der Sonne.',
          translation:
            'The cat sat on the windowsill, enjoying the warmth of the sun.',
        },
      ],
    },
    {
      word: 'Speicher',
      desc: "Noun meaning 'store' or 'storage', a place where goods are kept for sale; a stockroom or warehouse.",
      examples: [
        {
          sentence:
            'Sie besuchte den Lebensmittel Speicher, um einige Einkäufe zu erledigen.',
          translation: 'She visited the grocery store to do some shopping.',
        },
        {
          sentence: 'Der Speicher war mit Vorräten für den Winter gefüllt.',
          translation:
            'The storage room was filled with supplies for the winter.',
        },
        {
          sentence: 'Sie fand das alte Fotoalbum auf dem Dachboden Speicher.',
          translation: 'She found the old photo album in the attic storage.',
        },
        {
          sentence:
            'Der Speicher wurde zu einem gemütlichen Raum für Spiele und Unterhaltung umgebaut.',
          translation:
            'The storage room was converted into a cozy space for games and entertainment.',
        },
        {
          sentence:
            'Die Fabrik hatte einen großen Speicher für die Lagerung von Rohstoffen.',
          translation:
            'The factory had a large storage area for storing raw materials.',
        },
      ],
    },
    {
      word: 'Sommer',
      desc: "Noun meaning 'summer', the warmest season of the year, in the northern hemisphere from June to August and in the southern hemisphere from December to February.",
      examples: [
        {
          sentence:
            'Sie verbrachten ihren Sommerurlaub in einem kleinen Ferienhaus am See.',
          translation:
            'They spent their summer vacation in a small cottage by the lake.',
        },
        {
          sentence: 'Die Kinder liebten es, im Sommer draußen zu spielen.',
          translation: 'The children loved to play outside in the summer.',
        },
        {
          sentence:
            'Die Temperaturen erreichten im Sommer oft über 30 Grad Celsius.',
          translation:
            'Temperatures often reached over 30 degrees Celsius in the summer.',
        },
        {
          sentence:
            'Im Sommer blühten die Blumen und die Natur war in voller Pracht.',
          translation:
            'In summer, the flowers bloomed, and nature was in full bloom.',
        },
        {
          sentence: 'Die Sommerabende waren lang und warm.',
          translation: 'The summer evenings were long and warm.',
        },
      ],
    },
    {
      word: 'Zug',
      desc: "Noun meaning 'train', a connected series of railway cars moved by a locomotive or by integral motors.",
      examples: [
        {
          sentence: 'Sie nahmen den Zug, um in die Stadt zu fahren.',
          translation: 'They took the train to go to the city.',
        },
        {
          sentence:
            'Der Zug hatte Verspätung wegen eines technischen Problems.',
          translation: 'The train was delayed due to a technical issue.',
        },
        {
          sentence: 'Er verpasste den Zug und musste auf den nächsten warten.',
          translation: 'He missed the train and had to wait for the next one.',
        },
        {
          sentence:
            'Der Zug raste mit hoher Geschwindigkeit durch die Landschaft.',
          translation: 'The train sped through the landscape at high speed.',
        },
        {
          sentence: 'Im Zug gab es bequeme Sitze und kostenlose Getränke.',
          translation:
            'There were comfortable seats and complimentary drinks on the train.',
        },
      ],
    },
    {
      word: 'Schlaf',
      desc: "Noun meaning 'sleep', a condition of body and mind that typically recurs for several hours every night, in which the nervous system is relatively inactive, the eyes closed, the postural muscles relaxed, and consciousness practically suspended.",
      examples: [
        {
          sentence:
            'Sie hatte eine ruhige Nacht und genoss einen erholsamen Schlaf.',
          translation: 'She had a peaceful night and enjoyed a restful sleep.',
        },
        {
          sentence:
            'Der Schlaf ist wichtig für die Erholung und Regeneration des Körpers.',
          translation:
            'Sleep is important for the recovery and regeneration of the body.',
        },
        {
          sentence:
            'Er hatte Probleme beim Einschlafen und litt unter Schlaflosigkeit.',
          translation:
            'He had trouble falling asleep and suffered from insomnia.',
        },
        {
          sentence:
            'Der tiefe Schlaf ist die Phase, in der sich der Körper am besten erholt.',
          translation:
            'Deep sleep is the phase during which the body recovers best.',
        },
        {
          sentence: 'Die Babys schliefen friedlich in ihren Wiegen.',
          translation: 'The babies slept peacefully in their cradles.',
        },
      ],
    },
    {
      word: 'beweisen',
      desc: "Verb meaning 'to prove', to demonstrate the truth or existence of (something) by evidence or argument.",
      examples: [
        {
          sentence: 'Sie konnte ihre Unschuld vor Gericht beweisen.',
          translation: 'She was able to prove her innocence in court.',
        },
        {
          sentence:
            'Die Theorie wurde durch Experimente und Beobachtungen bewiesen.',
          translation: 'The theory was proven by experiments and observations.',
        },
        {
          sentence:
            'Er wollte seinen Wert durch harte Arbeit und Erfolg beweisen.',
          translation:
            'He wanted to prove his worth through hard work and success.',
        },
        {
          sentence:
            'Das Mathematikproblem war schwierig, aber sie konnte es lösen und ihre Fähigkeiten beweisen.',
          translation:
            'The math problem was difficult, but she was able to solve it and prove her skills.',
        },
        {
          sentence:
            'Die neuen Beweise konnten die Schuld des Angeklagten nicht beweisen.',
          translation:
            'The new evidence could not prove the guilt of the defendant.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'einsam, Bein, Übung, Wand, Fang, Berg, wünschen, Himmel, Board, Freude',
  words: [
    {
      word: 'einsam',
      desc: "Adjective meaning 'lonely' or 'alone', being by oneself; lacking the presence of others.",
      examples: [
        {
          sentence:
            'Er fühlte sich einsam, als seine Freunde in den Urlaub fuhren.',
          translation: 'He felt lonely when his friends went on vacation.',
        },
        {
          sentence: 'Sie lebte einsam in einem abgelegenen Haus im Wald.',
          translation: 'She lived alone in a remote house in the forest.',
        },
        {
          sentence:
            'Der alte Mann war einsam und sehnte sich nach Gesellschaft.',
          translation: 'The old man was lonely and longed for company.',
        },
        {
          sentence:
            'Das einsame Kind spielte im Garten ohne Geschwister oder Freunde.',
          translation:
            'The lonely child played in the garden without siblings or friends.',
        },
        {
          sentence: 'Sie fand Trost in der Einsamkeit und genoss die Ruhe.',
          translation:
            'She found solace in solitude and enjoyed the tranquility.',
        },
      ],
    },
    {
      word: 'Bein',
      desc: "Noun meaning 'leg', each of the limbs on which a person or animal walks and stands.",
      examples: [
        {
          sentence: 'Er brach sich das Bein beim Skifahren.',
          translation: 'He broke his leg while skiing.',
        },
        {
          sentence: 'Das Pferd hatte starke Beine und konnte schnell rennen.',
          translation: 'The horse had strong legs and could run fast.',
        },
        {
          sentence:
            'Sie fühlte sich müde und ihre Beine schmerzten nach dem langen Spaziergang.',
          translation: 'She felt tired, and her legs hurt after the long walk.',
        },
        {
          sentence: 'Der Tisch hatte vier Beine und war stabil.',
          translation: 'The table had four legs and was sturdy.',
        },
        {
          sentence: 'Er streckte die Beine aus und lehnte sich zurück.',
          translation: 'He stretched out his legs and leaned back.',
        },
      ],
    },
    {
      word: 'Übung',
      desc: "Noun meaning 'exercise' or 'practice', activity requiring physical effort, carried out to sustain or improve health and fitness.",
      examples: [
        {
          sentence: 'Regelmäßige Übung ist wichtig, um fit zu bleiben.',
          translation: 'Regular exercise is important to stay fit.',
        },
        {
          sentence:
            'Sie machte einige Dehnübungen, um ihre Muskeln zu lockern.',
          translation:
            'She did some stretching exercises to loosen her muscles.',
        },
        {
          sentence: 'Die Kinder machten eine Übungsroutine im Sportunterricht.',
          translation:
            'The children did an exercise routine in physical education class.',
        },
        {
          sentence: 'Yoga ist eine ausgezeichnete Übung für Körper und Geist.',
          translation: 'Yoga is an excellent exercise for body and mind.',
        },
        {
          sentence: 'Sie machte täglich eine halbe Stunde aerobe Übungen.',
          translation: 'She did half an hour of aerobic exercise daily.',
        },
      ],
    },
    {
      word: 'Wand',
      desc: "Noun meaning 'wall', a continuous vertical brick or stone structure that encloses or divides an area of land.",
      examples: [
        {
          sentence: 'Sie hängte ein Bild an die Wand über dem Sofa.',
          translation: 'She hung a picture on the wall above the sofa.',
        },
        {
          sentence: 'Die alte Burg hatte massive Steinwände und hohe Türme.',
          translation:
            'The old castle had massive stone walls and tall towers.',
        },
        {
          sentence: 'Die Kinder malten bunte Bilder an die Wand ihres Zimmers.',
          translation:
            'The children painted colorful pictures on the wall of their room.',
        },
        {
          sentence: 'Die Mauer war mit Ranken von wildem Wein bedeckt.',
          translation: 'The wall was covered with tendrils of wild grapevine.',
        },
        {
          sentence:
            'Sie klopfte an die Wand, um die Aufmerksamkeit ihres Nachbarn zu bekommen.',
          translation:
            "She knocked on the wall to get her neighbor's attention.",
        },
      ],
    },
    {
      word: 'Fang',
      desc: "Noun meaning 'catch', the action of capturing or apprehending someone or something.",
      examples: [
        {
          sentence: 'Der Fischer war stolz auf seinen großen Fang.',
          translation: 'The fisherman was proud of his big catch.',
        },
        {
          sentence:
            'Die Katze machte einen geschickten Fang und fing die Maus.',
          translation: 'The cat made a skillful catch and caught the mouse.',
        },
        {
          sentence:
            'Er verpasste den Ball, aber sein Teamkollege machte den Fang und erzielte einen Punkt.',
          translation:
            'He missed the ball, but his teammate made the catch and scored a point.',
        },
        {
          sentence:
            'Der Dieb konnte entkommen, trotz des schnellen Fangs der Polizei.',
          translation:
            "The thief managed to escape despite the police's quick apprehension.",
        },
        {
          sentence: 'Das Netz fiel herunter und der Fang war verloren.',
          translation: 'The net fell down, and the catch was lost.',
        },
      ],
    },
    {
      word: 'Berg',
      desc: "Noun meaning 'mountain', a large natural elevation of the earth's surface rising abruptly from the surrounding level.",
      examples: [
        {
          sentence:
            'Sie wanderten den Berg hinauf, um die Aussicht von oben zu genießen.',
          translation:
            'They hiked up the mountain to enjoy the view from the top.',
        },
        {
          sentence:
            'Der Berg war mit Schnee bedeckt und funkelte in der Sonne.',
          translation:
            'The mountain was covered in snow and glistened in the sun.',
        },
        {
          sentence:
            'Er kletterte den steilen Berg ohne Seil oder Sicherung hoch.',
          translation: 'He climbed the steep mountain without rope or harness.',
        },
        {
          sentence:
            'Die Dorfbewohner lebten am Fuße des Berges und bewirtschafteten das Land.',
          translation:
            'The villagers lived at the foot of the mountain and cultivated the land.',
        },
        {
          sentence: 'Die Bergspitze war in den Wolken versteckt.',
          translation: 'The mountain peak was hidden in the clouds.',
        },
      ],
    },
    {
      word: 'wünschen',
      desc: "Verb meaning 'to wish' or 'to desire', to have a strong desire or longing for something.",
      examples: [
        {
          sentence: 'Ich wünsche mir Frieden auf der Welt.',
          translation: 'I wish for peace in the world.',
        },
        {
          sentence: 'Sie wünschte sich ein neues Auto zum Geburtstag.',
          translation: 'She wished for a new car for her birthday.',
        },
        {
          sentence: 'Wir wünschen Ihnen ein frohes neues Jahr!',
          translation: 'We wish you a Happy New Year!',
        },
        {
          sentence:
            'Er wünschte sich nichts sehnlicher als ein Wiedersehen mit seiner Familie.',
          translation:
            'He wished for nothing more than a reunion with his family.',
        },
        {
          sentence: 'Sie wünschte sich, dass der Regen aufhören würde.',
          translation: 'She wished for the rain to stop.',
        },
      ],
    },
    {
      word: 'Himmel',
      desc: "Noun meaning 'sky' or 'heaven', the region of the atmosphere and outer space seen from the earth's surface.",
      examples: [
        {
          sentence: 'Die Vögel flogen hoch am Himmel.',
          translation: 'The birds flew high in the sky.',
        },
        {
          sentence: 'Die Sterne leuchteten hell am klaren Nachthimmel.',
          translation: 'The stars shone brightly in the clear night sky.',
        },
        {
          sentence: 'Ein Regenbogen erschien am Himmel nach dem Gewitter.',
          translation: 'A rainbow appeared in the sky after the storm.',
        },
        {
          sentence: 'Die Sonne geht im Westen unter und färbt den Himmel rot.',
          translation: 'The sun sets in the west, coloring the sky red.',
        },
        {
          sentence: 'Die Wolken zogen schnell über den Himmel.',
          translation: 'The clouds moved quickly across the sky.',
        },
      ],
    },
    {
      word: 'Board',
      desc: "Noun meaning 'board', a long, thin, flat piece of wood or other hard material, used for floors or other building purposes.",
      examples: [
        {
          sentence: 'Sie schrieb den Plan auf das Whiteboard.',
          translation: 'She wrote the plan on the whiteboard.',
        },
        {
          sentence:
            'Die Surfer standen auf ihren Brettern und warteten auf die perfekte Welle.',
          translation:
            'The surfers stood on their boards, waiting for the perfect wave.',
        },
        {
          sentence: 'Die Handwerker nagelten die Bretter fest auf den Boden.',
          translation:
            'The carpenters nailed the boards securely to the floor.',
        },
        {
          sentence: 'Das Skateboard rollte über das Pflaster der Straße.',
          translation: 'The skateboard rolled over the pavement of the street.',
        },
        {
          sentence: 'Sie schnitt das Brot auf dem Schneidebrett.',
          translation: 'She cut the bread on the cutting board.',
        },
      ],
    },
    {
      word: 'Freude',
      desc: "Noun meaning 'joy' or 'happiness', a feeling of great pleasure and happiness.",
      examples: [
        {
          sentence:
            'Die Geburt eines Kindes ist eine Quelle unermesslicher Freude.',
          translation: 'The birth of a child is a source of immeasurable joy.',
        },
        {
          sentence:
            'Sie strahlte vor Freude, als sie die gute Nachricht erhielt.',
          translation: 'She beamed with joy when she received the good news.',
        },
        {
          sentence:
            'Die Kinder lachten vor Freude über den überraschenden Besuch.',
          translation: 'The children laughed with joy at the unexpected visit.',
        },
        {
          sentence: 'Die Musik brachte ihm große Freude und Trost.',
          translation: 'The music brought him great joy and comfort.',
        },
        {
          sentence: 'Sie tanzten vor Freude über ihren Erfolg.',
          translation: 'They danced with joy at their success.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Winter, sa, geschrieben, wilden, Instrument, gehalten, Glas, Gras, Kuh, Arbeit',
  words: [
    {
      word: 'Winter',
      desc: "Noun meaning 'winter', the coldest season of the year, in the northern hemisphere from December to February and in the southern hemisphere from June to August.",
      examples: [
        {
          sentence: 'Im Winter fallen oft Schneeflocken vom Himmel.',
          translation: 'In winter, snowflakes often fall from the sky.',
        },
        {
          sentence:
            'Der Winter in dieser Region ist besonders kalt und verschneit.',
          translation:
            'The winter in this region is particularly cold and snowy.',
        },
        {
          sentence: 'Im Winter machen wir gerne Spaziergänge im Schnee.',
          translation: 'In winter, we enjoy taking walks in the snow.',
        },
        {
          sentence:
            'Sie freuten sich auf die gemütlichen Abende am Kamin im Winter.',
          translation:
            'They looked forward to cozy evenings by the fireplace in winter.',
        },
        {
          sentence:
            'Im Winter wird die Landschaft von einer weißen Decke aus Schnee bedeckt.',
          translation:
            'In winter, the landscape is covered by a white blanket of snow.',
        },
      ],
    },
    {
      word: 'sa',
      desc: "Verb meaning 'sat', past tense of the verb 'to sit', to be in a seated position.",
      examples: [
        {
          sentence: 'Er sa auf der Bank und genoss die Sonne.',
          translation: 'He sat on the bench and enjoyed the sun.',
        },
        {
          sentence: 'Sie sa ruhig am Fenster und beobachtete die Vögel.',
          translation: 'She sat quietly by the window, watching the birds.',
        },
        {
          sentence:
            'Die Kinder saßen im Kreis und hörten der Geschichte aufmerksam zu.',
          translation:
            'The children sat in a circle and listened attentively to the story.',
        },
        {
          sentence: 'Er sa am Schreibtisch und arbeitete konzentriert.',
          translation: 'He sat at the desk and worked with concentration.',
        },
        {
          sentence: 'Die Katze sa faul auf dem Sofa und döste vor sich hin.',
          translation: 'The cat sat lazily on the sofa, dozing off.',
        },
      ],
    },
    {
      word: 'geschrieben',
      desc: "Past participle of the verb 'schreiben', meaning 'written', to mark letters, words, or other symbols on a surface, typically paper, with a pen, pencil, or similar implement.",
      examples: [
        {
          sentence:
            'Sie hatte einen langen Brief an ihre Großmutter geschrieben.',
          translation: 'She had written a long letter to her grandmother.',
        },
        {
          sentence:
            'Das Gedicht wurde von einem unbekannten Dichter geschrieben.',
          translation: 'The poem was written by an unknown poet.',
        },
        {
          sentence:
            'Der Artikel wurde von einem renommierten Journalisten geschrieben.',
          translation: 'The article was written by a renowned journalist.',
        },
        {
          sentence:
            'Sie hatte ihre Gedanken und Ideen in ihr Tagebuch geschrieben.',
          translation: 'She had written her thoughts and ideas in her diary.',
        },
        {
          sentence:
            'Das Buch wurde vor vielen Jahren von einem berühmten Autor geschrieben.',
          translation:
            'The book was written many years ago by a famous author.',
        },
      ],
    },
    {
      word: 'wilden',
      desc: "Adjective meaning 'wild', living or growing in the natural environment; not domesticated or cultivated.",
      examples: [
        {
          sentence: 'In der Wildnis leben viele wilde Tiere.',
          translation: 'Many wild animals live in the wilderness.',
        },
        {
          sentence: 'Die wilden Blumen blühten entlang des Flussufers.',
          translation: 'The wild flowers bloomed along the riverbank.',
        },
        {
          sentence: 'Wir sahen eine Herde wilder Pferde auf der Weide.',
          translation: 'We saw a herd of wild horses in the pasture.',
        },
        {
          sentence:
            'Der Nationalpark ist ein Rückzugsort für viele wilde Tiere.',
          translation:
            'The national park is a sanctuary for many wild animals.',
        },
        {
          sentence: 'Der Wald ist voller wilder Beeren und Früchte.',
          translation: 'The forest is full of wild berries and fruits.',
        },
      ],
    },
    {
      word: 'Instrument',
      desc: "Noun meaning 'instrument', a tool or implement, especially one for delicate or scientific work.",
      examples: [
        {
          sentence: 'Die Geige ist ein schönes Musikinstrument.',
          translation: 'The violin is a beautiful musical instrument.',
        },
        {
          sentence:
            'Er beherrschte mehrere Musikinstrumente, darunter auch das Klavier und die Trompete.',
          translation:
            'He mastered several musical instruments, including the piano and the trumpet.',
        },
        {
          sentence:
            'Die Wissenschaftler verwendeten spezielle Instrumente, um die Probe zu analysieren.',
          translation:
            'The scientists used special instruments to analyze the sample.',
        },
        {
          sentence:
            'Das Chirurgenbesteck enthält eine Vielzahl von Instrumenten für verschiedene Operationen.',
          translation:
            "The surgeon's kit contains a variety of instruments for different surgeries.",
        },
        {
          sentence:
            'Der Künstler arbeitete mit verschiedenen Pinseln und anderen Malutensilien.',
          translation:
            'The artist worked with various brushes and other painting instruments.',
        },
      ],
    },
    {
      word: 'gehalten',
      desc: "Past participle of the verb 'halten', meaning 'kept' or 'held', to have or retain possession of something.",
      examples: [
        {
          sentence:
            'Er hatte das Versprechen gehalten und pünktlich zum Treffen erschienen.',
          translation:
            'He had kept his promise and arrived on time for the meeting.',
        },
        {
          sentence:
            'Die Gläubigen hielten eine Kerze während der Zeremonie in den Händen.',
          translation:
            'The faithful held a candle in their hands during the ceremony.',
        },
        {
          sentence:
            'Sie hatte die Aufmerksamkeit ihres Publikums während ihres gesamten Vortrags gehalten.',
          translation:
            'She had held the attention of her audience throughout her entire presentation.',
        },
        {
          sentence:
            'Der Sammler hatte die Münzen in einem speziellen Etui gehalten.',
          translation: 'The collector had kept the coins in a special case.',
        },
        {
          sentence:
            'Die Lehrerin hatte die Klasse ruhig und diszipliniert gehalten.',
          translation: 'The teacher had kept the class calm and disciplined.',
        },
      ],
    },
    {
      word: 'Glas',
      desc: "Noun meaning 'glass', a hard, brittle substance, typically transparent or translucent, made by fusing sand with soda, lime, and sometimes other ingredients and cooling rapidly.",
      examples: [
        {
          sentence: 'Sie trank ein Glas Wasser, um sich abzukühlen.',
          translation: 'She drank a glass of water to cool down.',
        },
        {
          sentence: 'Das Fenster war aus bruchsicherem Glas gefertigt.',
          translation: 'The window was made of shatterproof glass.',
        },
        {
          sentence: 'Er trug eine Brille mit dicken Gläsern.',
          translation: 'He wore glasses with thick lenses.',
        },
        {
          sentence: 'Das Glas war mit einem feinen Muster verziert.',
          translation: 'The glass was decorated with a fine pattern.',
        },
        {
          sentence: 'Sie kaufte ein paar schöne Glasvasen für ihr Wohnzimmer.',
          translation:
            'She bought some beautiful glass vases for her living room.',
        },
      ],
    },
    {
      word: 'Gras',
      desc: "Noun meaning 'grass', vegetation consisting of typically short plants with long, narrow leaves, growing wild or cultivated on lawns and pastures.",
      examples: [
        {
          sentence: 'Die Kinder spielten fröhlich im hohen Gras.',
          translation: 'The children played happily in the tall grass.',
        },
        {
          sentence: 'Das Gras war noch mit Morgentau bedeckt.',
          translation: 'The grass was still covered with morning dew.',
        },
        {
          sentence: 'Die Kühe weideten friedlich auf der saftigen Wiese.',
          translation: 'The cows grazed peacefully in the lush pasture.',
        },
        {
          sentence: 'Er mähte den Rasen und entfernte das überflüssige Gras.',
          translation: 'He mowed the lawn and removed the excess grass.',
        },
        {
          sentence: 'Das Gras war grün und weich unter den nackten Füßen.',
          translation: 'The grass was green and soft under bare feet.',
        },
      ],
    },
    {
      word: 'Kuh',
      desc: "Noun meaning 'cow', a large domesticated herbivorous mammal with horns and cloven hoofs, domesticated for meat or milk, or as a beast of burden.",
      examples: [
        {
          sentence:
            'Die Kuh stand ruhig auf der Weide und kaute gemütlich ihr Gras.',
          translation:
            'The cow stood calmly in the pasture, chewing her grass leisurely.',
        },
        {
          sentence: 'Die Bauern melkten die Kühe zweimal täglich.',
          translation: 'The farmers milked the cows twice a day.',
        },
        {
          sentence: 'Die Kuhherde zog langsam über die grünen Hügel.',
          translation: 'The herd of cows moved slowly across the green hills.',
        },
        {
          sentence: 'Die Kuhglocken erklangen sanft in der Ferne.',
          translation: 'The cowbells rang softly in the distance.',
        },
        {
          sentence: 'Die Kuh gab reichlich Milch für die Familie.',
          translation: 'The cow provided plenty of milk for the family.',
        },
      ],
    },
    {
      word: 'Arbeit',
      desc: "Noun meaning 'work' or 'job', activity involving mental or physical effort done to achieve a purpose or result.",
      examples: [
        {
          sentence:
            'Er hatte viel Arbeit zu erledigen, bevor er in den Urlaub fahren konnte.',
          translation:
            'He had a lot of work to do before he could go on vacation.',
        },
        {
          sentence:
            'Sie war den ganzen Tag bei der Arbeit und kam erst spät nach Hause.',
          translation:
            "She was at work all day and didn't come home until late.",
        },
        {
          sentence:
            'Die Arbeit an diesem Projekt erfordert viel Geduld und Ausdauer.',
          translation:
            'Working on this project requires a lot of patience and perseverance.',
        },
        {
          sentence:
            'Die Kinder halfen ihren Eltern gerne bei der Gartenarbeit.',
          translation:
            'The children enjoyed helping their parents with the gardening work.',
        },
        {
          sentence: 'Er fand schließlich Arbeit in einem großen Unternehmen.',
          translation: 'He finally found a job at a large company.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Rand, Zeichen, Besuch, Vergangenheit, weich, Spaß, hell, Gases, Wetter, Monat',
  words: [
    {
      word: 'Rand',
      desc: "Noun meaning 'edge', the outer part or boundary of something.",
      examples: [
        {
          sentence:
            'Sie stand am Rand der Klippe und schaute auf das Meer hinunter.',
          translation:
            'She stood at the edge of the cliff, looking down at the sea below.',
        },
        {
          sentence:
            'Das Buch war an den Rändern ausgefranst von jahrelangem Gebrauch.',
          translation: 'The book was frayed along the edges from years of use.',
        },
        {
          sentence:
            'Sie lebten am Rand der Stadt, weit entfernt vom belebten Zentrum.',
          translation:
            'They lived on the outskirts of the city, far from the bustling center.',
        },
        {
          sentence:
            'Die alte Karte hatte einen dekorativen Rand um ihre Ränder.',
          translation: 'The old map had a decorative border around its edges.',
        },
        {
          sentence:
            'Er strich die Ränder des Türrahmens weiß, um zu den Wänden zu passen.',
          translation:
            'He painted the edges of the doorframe white to match the walls.',
        },
      ],
    },
    {
      word: 'Zeichen',
      desc: "Noun meaning 'sign', an object, quality, or event whose presence or occurrence indicates the probable presence or occurrence of something else.",
      examples: [
        {
          sentence:
            'Sie deutete sein Schweigen als ein Zeichen der Zustimmung.',
          translation: 'She took his silence as a sign of agreement.',
        },
        {
          sentence:
            'Die dunklen Wolken waren ein Zeichen für einen nahenden Sturm.',
          translation: 'The dark clouds were a sign of an approaching storm.',
        },
        {
          sentence:
            'Das Wiederfinden ihres verlorenen Rings war ein gutes Zeichen für den bevorstehenden Tag.',
          translation:
            'Finding her lost ring was a good sign for the day ahead.',
        },
        {
          sentence:
            'Der plötzliche Temperaturabfall war ein deutliches Zeichen dafür, dass der Winter kam.',
          translation:
            'The sudden drop in temperature was a clear sign that winter was coming.',
        },
        {
          sentence:
            'Er sah den Regenbogen als ein Zeichen der Hoffnung nach dem Sturm.',
          translation: 'He saw the rainbow as a sign of hope after the storm.',
        },
      ],
    },
    {
      word: 'Besuch',
      desc: "Noun meaning 'visit', an act of going to see someone or something or of spending time with someone.",
      examples: [
        {
          sentence:
            'Wir hatten am Wochenende einen angenehmen Besuch bei unseren Verwandten.',
          translation:
            'We had a pleasant visit with our relatives over the weekend.',
        },
        {
          sentence:
            'Sie war überrascht von dem unerwarteten Besuch ihrer alten Freundin.',
          translation:
            'She was surprised by the unexpected visit from her old friend.',
        },
        {
          sentence:
            'Die Kinder genossen ihren Besuch im Zoo, besonders das Sehen der Löwen.',
          translation:
            'The children enjoyed their visit to the zoo, especially seeing the lions.',
        },
        {
          sentence:
            'Er machte einen kurzen Besuch im Laden, um einige Lebensmittel zu besorgen.',
          translation:
            'He made a quick visit to the store to pick up some groceries.',
        },
        {
          sentence:
            'Sie planten einen Besuch im Museum, um die neue Kunstausstellung zu sehen.',
          translation:
            'They planned a visit to the museum to see the new art exhibit.',
        },
      ],
    },
    {
      word: 'Vergangenheit',
      desc: "Noun meaning 'past', the time or a period of time before the moment of speaking or writing.",
      examples: [
        {
          sentence:
            'Er konnte die Fehler der Vergangenheit nicht ändern, aber er konnte aus ihnen lernen.',
          translation:
            "He couldn't change the mistakes of the past, but he could learn from them.",
        },
        {
          sentence:
            'Ihre Kindheitserinnerungen waren mit glücklichen Momenten aus der Vergangenheit gefüllt.',
          translation:
            'Her childhood memories were filled with happy moments from the past.',
        },
        {
          sentence:
            'Der Historiker studierte die Ereignisse der Vergangenheit, um die Gegenwart besser zu verstehen.',
          translation:
            'The historian studied the events of the past to better understand the present.',
        },
        {
          sentence:
            'Sie wurde von Geistern aus ihrer Vergangenheit heimgesucht, Erinnerungen, denen sie nicht entkommen konnte.',
          translation:
            "She was haunted by ghosts from her past, memories she couldn't escape.",
        },
        {
          sentence:
            'Das alte Foto erweckte Erinnerungen an längst vergangene Zeiten.',
          translation:
            'The old photograph brought back memories of times long past.',
        },
      ],
    },
    {
      word: 'weich',
      desc: "Adjective meaning 'soft', easy to mold, cut, compress, or fold; not hard or firm to the touch.",
      examples: [
        {
          sentence:
            'Das Fell des Kätzchens war weich und flauschig beim Berühren.',
          translation: "The kitten's fur was soft and fluffy to the touch.",
        },
        {
          sentence:
            'Sie versank in den weichen Kissen des Sofas und entspannte sich.',
          translation:
            'She sank into the soft cushions of the sofa and relaxed.',
        },
        {
          sentence: 'Die Haut des Babys war glatt und weich wie Seide.',
          translation: "The baby's skin was smooth and soft as silk.",
        },
        {
          sentence:
            'Die Decke war aus weicher Wolle gemacht, perfekt, um sich an kalten Nächten warm zu halten.',
          translation:
            'The blanket was made of soft wool, perfect for keeping warm on cold nights.',
        },
        {
          sentence:
            'Der Biskuitkuchen war luftig und weich, mit einer zarten Textur.',
          translation:
            'The sponge cake was light and soft, with a delicate texture.',
        },
      ],
    },
    {
      word: 'Spaß',
      desc: "Noun meaning 'fun', enjoyment, amusement, or lighthearted pleasure.",
      examples: [
        {
          sentence:
            'Sie hatten viel Spaß auf dem Jahrmarkt, fuhren Achterbahn und spielten Spiele.',
          translation:
            'They had a lot of fun at the carnival, riding roller coasters and playing games.',
        },
        {
          sentence:
            'Ihr Lachen erfüllte den Raum, während sie zusammen scherzten und Spaß hatten.',
          translation:
            'Her laughter filled the room as they joked and had fun together.',
        },
        {
          sentence:
            'Er fand Spaß daran, Rätsel zu lösen und knifflige Probleme zu lösen.',
          translation:
            'He found enjoyment in solving puzzles and tackling tricky problems.',
        },
        {
          sentence:
            'Das Picknick im Park war eine Quelle großer Freude und Spaß für die ganze Familie.',
          translation:
            'The picnic in the park was a source of great joy and fun for the whole family.',
        },
        {
          sentence:
            'Die Kinder hatten Spaß daran, im Garten zu spielen und im Matsch zu planschen.',
          translation:
            'The children had fun playing in the garden and splashing in the mud.',
        },
      ],
    },
    {
      word: 'hell',
      desc: "Adjective meaning 'bright', giving out or reflecting a lot of light; shining.",
      examples: [
        {
          sentence: 'Die Sonne war hell am Himmel und wärmte die Erde.',
          translation: 'The sun was bright in the sky, warming the earth.',
        },
        {
          sentence: 'Die hellen Sterne leuchteten in der klaren Nacht.',
          translation: 'The bright stars shone in the clear night sky.',
        },
        {
          sentence:
            'Die Glühbirne war so hell, dass sie den ganzen Raum erleuchtete.',
          translation:
            'The light bulb was so bright that it illuminated the entire room.',
        },
        {
          sentence:
            'Sie trug ein hellblaues Kleid, das ihre Augen zum Leuchten brachte.',
          translation:
            'She wore a bright blue dress that made her eyes sparkle.',
        },
        {
          sentence: 'Der Mond war hell am Nachthimmel und erleuchtete den Weg.',
          translation:
            'The moon was bright in the night sky, lighting up the path.',
        },
      ],
    },
    {
      word: 'Gases',
      desc: "Plural noun of 'Gas', an airlike fluid substance which expands freely to fill any space available, irrespective of its quantity.",
      examples: [
        {
          sentence:
            'Das Gas in der Luft ist unsichtbar, aber lebenswichtig für alle Lebewesen.',
          translation:
            'The gas in the air is invisible but vital to all living organisms.',
        },
        {
          sentence:
            'Er arbeitete in einem Labor, das sich auf die Erforschung von Gasen spezialisiert hatte.',
          translation:
            'He worked in a laboratory that specialized in the study of gases.',
        },
        {
          sentence:
            'Die Forscher untersuchten die Eigenschaften verschiedener Gase und ihre Auswirkungen auf die Umwelt.',
          translation:
            'The researchers studied the properties of various gases and their impact on the environment.',
        },
        {
          sentence:
            'Das Auto lief mit einem Gemisch aus verschiedenen Gasen, das den Motor antreibt.',
          translation:
            'The car ran on a mixture of various gases that powered the engine.',
        },
        {
          sentence:
            'Der Techniker überprüfte die Leitungen, um sicherzustellen, dass kein Gasleck auftrat.',
          translation:
            'The technician checked the pipes to ensure that there was no gas leak.',
        },
      ],
    },
    {
      word: 'Wetter',
      desc: "Noun meaning 'weather', the state of the atmosphere at a particular place and time as regards heat, dryness, sunshine, wind, rain, etc.",
      examples: [
        {
          sentence:
            'Das Wetter war sonnig und warm, perfekt für einen Tag am Strand.',
          translation:
            'The weather was sunny and warm, perfect for a day at the beach.',
        },
        {
          sentence:
            'Die Vorhersage sagte Regen voraus, also nahm sie einen Regenschirm mit.',
          translation:
            'The forecast predicted rain, so she took an umbrella with her.',
        },
        {
          sentence:
            'Das wechselhafte Wetter machte es schwierig, zu planen, was sie unternehmen sollten.',
          translation:
            'The changeable weather made it difficult to plan what they should do.',
        },
        {
          sentence:
            'Im Frühling ändert sich das Wetter oft von einem Tag zum anderen.',
          translation:
            'In spring, the weather often changes from one day to the next.',
        },
        {
          sentence:
            'Er liebte es, das Wetter zu beobachten und vorherzusagen, was als nächstes passieren würde.',
          translation:
            'He loved watching the weather and predicting what would happen next.',
        },
      ],
    },
    {
      word: 'Monat',
      desc: "Noun meaning 'month', each of the twelve named periods into which a year is divided.",
      examples: [
        {
          sentence:
            'Sie feierten ihren Geburtstag im Januar, dem ersten Monat des Jahres.',
          translation:
            'They celebrated their birthday in January, the first month of the year.',
        },
        {
          sentence:
            'Im Februar fällt oft Schnee, und die Temperaturen sinken unter den Gefrierpunkt.',
          translation:
            'In February, snow often falls, and temperatures drop below freezing.',
        },
        {
          sentence:
            'Der März ist der Beginn des Frühlings, wenn die Blumen zu blühen beginnen und die Tage länger werden.',
          translation:
            'March is the start of spring, when flowers begin to bloom and days get longer.',
        },
        {
          sentence:
            'Sie planten ihre Hochzeit für den April, weil sie die frischen Farben und die milden Temperaturen mochten.',
          translation:
            'They planned their wedding for April because they liked the fresh colors and mild temperatures.',
        },
        {
          sentence:
            'Im Mai blühen die Bäume und die Luft ist voller Vogelgesang.',
          translation:
            'In May, the trees bloom, and the air is filled with birdsong.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Million, tragen, Finish, glücklich, hoffen, blume, kleiden, seltsam, Vorbei, Handel',
  words: [
    {
      word: 'Million',
      desc: "Noun meaning 'million', a thousand thousands, especially in the context of an amount of money.",
      examples: [
        {
          sentence:
            'Sie gewann eine Million Dollar in der Lotterie und konnte ihr Leben verändern.',
          translation:
            'She won a million dollars in the lottery and was able to change her life.',
        },
        {
          sentence:
            'Es dauerte Millionen von Jahren, bis sich das Gestein gebildet hatte.',
          translation: 'It took millions of years for the rock to form.',
        },
        {
          sentence:
            'Die Firma investierte Millionen in die Entwicklung des neuen Produkts.',
          translation:
            'The company invested millions in the development of the new product.',
        },
        {
          sentence:
            'Er träumte davon, eine Million Bücher zu verkaufen und ein Bestsellerautor zu werden.',
          translation:
            'He dreamed of selling a million books and becoming a bestselling author.',
        },
        {
          sentence:
            'Die Stadt hatte Millionen von Einwohnern und war damit eine der größten der Welt.',
          translation:
            'The city had millions of inhabitants, making it one of the largest in the world.',
        },
      ],
    },
    {
      word: 'tragen',
      desc: "Verb meaning 'bear', support the weight of; carry.",
      examples: [
        {
          sentence: 'Er trug schwere Kisten die Treppe hinauf.',
          translation: 'He carried heavy boxes up the stairs.',
        },
        {
          sentence: 'Die Mutter trug ihr Baby liebevoll in ihren Armen.',
          translation: 'The mother lovingly carried her baby in her arms.',
        },
        {
          sentence: 'Der Esel trug die Lasten des Wanderers über die Berge.',
          translation:
            "The donkey bore the hiker's burdens over the mountains.",
        },
        {
          sentence:
            'Sie trug einen roten Schal um den Hals, um sich vor der Kälte zu schützen.',
          translation:
            'She wore a red scarf around her neck to protect herself from the cold.',
        },
        {
          sentence: 'Der LKW kann bis zu fünf Tonnen Material tragen.',
          translation: 'The truck can carry up to five tons of material.',
        },
      ],
    },
    {
      word: 'Finish',
      desc: "Noun meaning 'finish', the end or conclusion of a race or competition.",
      examples: [
        {
          sentence: 'Der Athlet sprintete zum Finish und gewann das Rennen.',
          translation: 'The athlete sprinted to the finish and won the race.',
        },
        {
          sentence:
            'Sie war erschöpft, als sie die Ziellinie erreichte, aber sie hatte das Finish erreicht.',
          translation:
            'She was exhausted when she reached the finish line, but she had made it to the finish.',
        },
        {
          sentence:
            'Das Publikum jubelte, als der Läufer das Finish mit einer neuen Rekordzeit erreichte.',
          translation:
            'The crowd cheered as the runner reached the finish with a new record time.',
        },
        {
          sentence:
            'Die letzten Meter bis zum Finish waren die härtesten, aber er gab nicht auf.',
          translation:
            "The final meters to the finish were the toughest, but he didn't give up.",
        },
        {
          sentence:
            'Die Sportlerin wurde Dritte im Rennen, aber sie war stolz darauf, das Finish erreicht zu haben.',
          translation:
            'The athlete came in third in the race, but she was proud to have reached the finish.',
        },
      ],
    },
    {
      word: 'glücklich',
      desc: "Adjective meaning 'happy', feeling or showing pleasure or contentment.",
      examples: [
        {
          sentence: 'Sie war glücklich, als sie die guten Nachrichten erfuhr.',
          translation: 'She was happy when she heard the good news.',
        },
        {
          sentence:
            'Die Kinder lachten und spielten im Garten und waren glücklich.',
          translation:
            'The children laughed and played in the garden and were happy.',
        },
        {
          sentence:
            'Er fühlte sich glücklich und zufrieden, als er sein Ziel erreichte.',
          translation: 'He felt happy and content when he reached his goal.',
        },
        {
          sentence: 'Sie strahlte vor Glück, als sie ihren neuen Job bekam.',
          translation: 'She beamed with happiness when she got her new job.',
        },
        {
          sentence:
            'Die glücklichen Erinnerungen an ihre Kindheit ließen sie lächeln.',
          translation: 'The happy memories of her childhood made her smile.',
        },
      ],
    },
    {
      word: 'hoffen',
      desc: "Verb meaning 'hope', want something to happen or be the case.",
      examples: [
        {
          sentence:
            'Sie hoffte, dass das Wetter am Wochenende gut sein würde, damit sie wandern gehen könnten.',
          translation:
            'She hoped the weather would be good on the weekend so they could go hiking.',
        },
        {
          sentence:
            'Er hoffte, dass sein Team das Spiel gewinnen würde und sich für das Finale qualifizieren könnte.',
          translation:
            'He hoped his team would win the game and qualify for the final.',
        },
        {
          sentence: 'Sie hoffte auf ein Zeichen, dass alles gut gehen würde.',
          translation: 'She hoped for a sign that everything would be okay.',
        },
        {
          sentence:
            'Die Studenten hofften auf eine Verlängerung der Abgabefrist für ihre Projekte.',
          translation:
            'The students hoped for an extension of the deadline for their projects.',
        },
        {
          sentence:
            'Er hoffte, dass seine Freunde ihn auf seiner Reise begleiten würden.',
          translation:
            'He hoped his friends would accompany him on his journey.',
        },
      ],
    },
    {
      word: 'blume',
      desc: "Noun meaning 'flower', the seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla and a green calyx.",
      examples: [
        {
          sentence:
            'Der Garten war im Frühling voller Blumen in allen Farben des Regenbogens.',
          translation:
            'The garden was full of flowers in all the colors of the rainbow in spring.',
        },
        {
          sentence:
            'Sie pflückte eine duftende Blume und steckte sie in ihr Haar.',
          translation: 'She picked a fragrant flower and put it in her hair.',
        },
        {
          sentence: 'Die Blumen blühten und verströmten einen betörenden Duft.',
          translation: 'The flowers bloomed and gave off an enchanting scent.',
        },
        {
          sentence:
            'Er kaufte seiner Freundin einen Strauß roter Rosen als Zeichen seiner Liebe.',
          translation:
            'He bought his girlfriend a bouquet of red roses as a sign of his love.',
        },
        {
          sentence:
            'Die Blumenbeete waren sorgfältig angelegt und boten einen schönen Anblick.',
          translation:
            'The flower beds were carefully arranged and provided a beautiful sight.',
        },
      ],
    },
    {
      word: 'kleiden',
      desc: "Verb meaning 'dress', put clothes on (oneself or someone); attire.",
      examples: [
        {
          sentence: 'Sie kleidete sich elegant für die Abendveranstaltung.',
          translation: 'She dressed elegantly for the evening event.',
        },
        {
          sentence:
            'Die Kinder kleideten sich warm an, bevor sie nach draußen gingen.',
          translation: 'The children dressed warmly before going outside.',
        },
        {
          sentence:
            'Er kleidete sich in seinem besten Anzug für das Vorstellungsgespräch.',
          translation: 'He dressed in his best suit for the job interview.',
        },
        {
          sentence: 'Sie kleidete das Baby sorgfältig in weiche Kleidung.',
          translation: 'She dressed the baby carefully in soft clothing.',
        },
        {
          sentence:
            'Die Schauspielerin wurde von einem Team von Stylisten für die Veranstaltung gekleidet.',
          translation:
            'The actress was dressed by a team of stylists for the event.',
        },
      ],
    },
    {
      word: 'seltsam',
      desc: "Adjective meaning 'strange', unusual or surprising; difficult to understand or explain.",
      examples: [
        {
          sentence:
            'Es war seltsam, dass er plötzlich aufgehört hatte, sich zu melden.',
          translation:
            'It was strange that he had suddenly stopped getting in touch.',
        },
        {
          sentence: 'Die seltsamen Geräusche in der Nacht machten sie nervös.',
          translation: 'The strange noises at night made her nervous.',
        },
        {
          sentence:
            'Es war seltsam, dass niemand zu Hause war, als sie ankamen.',
          translation: 'It was strange that nobody was home when they arrived.',
        },
        {
          sentence:
            'Er hatte ein seltsames Gefühl, als er das verlassene Haus betrat.',
          translation:
            'He had a strange feeling as he entered the abandoned house.',
        },
        {
          sentence:
            'Die seltsame Wolkenformation am Himmel war ein untrügliches Zeichen für das bevorstehende Unwetter.',
          translation:
            'The strange cloud formation in the sky was an unmistakable sign of the impending storm.',
        },
      ],
    },
    {
      word: 'Vorbei',
      desc: "Adverb meaning 'past', finished; no longer in existence.",
      examples: [
        {
          sentence:
            'Die Ferien waren leider schon vorbei, als sie zurückkamen.',
          translation:
            'The holidays were unfortunately over when they returned.',
        },
        {
          sentence:
            'Er konnte nicht glauben, dass die Gelegenheit für immer vorbei war.',
          translation: "He couldn't believe the opportunity was gone forever.",
        },
        {
          sentence:
            'Die Zeit verging wie im Flug, und plötzlich war der Sommer vorbei.',
          translation: 'Time flew by, and suddenly the summer was over.',
        },
        {
          sentence:
            'Die Ära des alten Kinos war längst vorbei, aber die Erinnerungen daran lebten weiter.',
          translation:
            'The era of the old cinema was long gone, but the memories of it lived on.',
        },
        {
          sentence: 'Es tut mir leid, aber die Zeit für Änderungen ist vorbei.',
          translation: "I'm sorry, but the time for changes has passed.",
        },
      ],
    },
    {
      word: 'Handel',
      desc: "Noun meaning 'trade', the action of buying and selling goods and services.",
      examples: [
        {
          sentence:
            'Der Handel mit China war für das Wirtschaftswachstum des Landes entscheidend.',
          translation:
            "Trade with China was crucial for the country's economic growth.",
        },
        {
          sentence:
            'Die Regierung verhandelte einen neuen Handelsvertrag mit ihren Nachbarländern.',
          translation:
            'The government was negotiating a new trade agreement with its neighboring countries.',
        },
        {
          sentence:
            'Der Handel mit exotischen Gütern florierte im alten Hafen.',
          translation: 'Trade in exotic goods flourished in the old port.',
        },
        {
          sentence:
            'Die Expansion des Handels führte zu einer wirtschaftlichen Blütezeit.',
          translation: 'The expansion of trade led to an economic boom.',
        },
        {
          sentence:
            'Der freie Handel zwischen den Ländern war ein wichtiger Schritt zur Förderung des Friedens.',
          translation:
            'Free trade between countries was an important step in promoting peace.',
        },
      ],
    },
  ],
};

const section6: Section = {
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

export default section6;
