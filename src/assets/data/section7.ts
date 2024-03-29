import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Melodie, Reise, Büro, empfangen, Reihe, Mund, genau, Zeichen, sterben, am wenigsten',
  words: [
    {
      word: 'Melodie',
      desc: "Noun meaning 'melody', a sequence of single notes that is musically satisfying.",
      examples: [
        {
          sentence:
            'Die Melodie des Liedes war so eingängig, dass sie den ganzen Tag im Kopf blieb.',
          translation:
            'The melody of the song was so catchy that it stayed in my head all day.',
        },
        {
          sentence:
            'Sie konnte die Melodie des Klaviers aus dem Nebenzimmer hören.',
          translation:
            'She could hear the melody of the piano from the next room.',
        },
        {
          sentence: 'Die Melodie des Meeres beruhigte ihre Gedanken.',
          translation: 'The melody of the sea calmed her thoughts.',
        },
        {
          sentence:
            'Die Melodie des Violinspielers verlieh der Hochzeit eine romantische Atmosphäre.',
          translation:
            'The melody of the violinist added a romantic atmosphere to the wedding.',
        },
        {
          sentence:
            'Die Melodie des Kinderliedes brachte ein Lächeln auf ihr Gesicht.',
          translation:
            "The melody of the children's song brought a smile to her face.",
        },
      ],
    },
    {
      word: 'Reise',
      desc: "Noun meaning 'trip', a journey or excursion, especially for pleasure.",
      examples: [
        {
          sentence:
            'Die Reise durch die Berge bot atemberaubende Ausblicke auf die Landschaft.',
          translation:
            'The trip through the mountains offered breathtaking views of the landscape.',
        },
        {
          sentence:
            'Ihre Reise um die Welt war eine lebensverändernde Erfahrung.',
          translation:
            'Her journey around the world was a life-changing experience.',
        },
        {
          sentence: 'Die Reise mit dem Zug war angenehm und entspannend.',
          translation: 'The journey by train was pleasant and relaxing.',
        },
        {
          sentence:
            'Ihre erste Reise ins Ausland war aufregend und voller Abenteuer.',
          translation:
            'Her first trip abroad was exciting and full of adventure.',
        },
        {
          sentence:
            'Die Reise mit der Familie war eine Gelegenheit, gemeinsame Erinnerungen zu schaffen.',
          translation:
            'The trip with the family was an opportunity to create shared memories.',
        },
      ],
    },
    {
      word: 'Büro',
      desc: "Noun meaning 'office', a room, set of rooms, or building used as a place for commercial, professional, or bureaucratic work.",
      examples: [
        {
          sentence:
            'Sie arbeitete den ganzen Tag im Büro und kam erst spät nach Hause.',
          translation:
            "She worked all day in the office and didn't come home until late.",
        },
        {
          sentence:
            'Das Büro war mit modernen Möbeln und Technologie ausgestattet.',
          translation:
            'The office was equipped with modern furniture and technology.',
        },
        {
          sentence:
            'Er hatte sein eigenes Büro im obersten Stockwerk des Gebäudes.',
          translation:
            'He had his own office on the top floor of the building.',
        },
        {
          sentence:
            'Das Büro war ein geschäftiger Ort voller Telefone, Computer und Menschen.',
          translation:
            'The office was a busy place filled with phones, computers, and people.',
        },
        {
          sentence:
            'Sie arbeitete hart, um eine Beförderung im Büro zu bekommen.',
          translation: 'She worked hard to get a promotion in the office.',
        },
      ],
    },
    {
      word: 'empfangen',
      desc: "Verb meaning 'receive', to be given, presented with, or paid (something).",
      examples: [
        {
          sentence:
            'Sie empfing einen Preis für ihre herausragenden Leistungen.',
          translation: 'She received an award for her outstanding performance.',
        },
        {
          sentence: 'Er empfing die Gäste mit einem herzlichen Lächeln.',
          translation: 'He received the guests with a warm smile.',
        },
        {
          sentence: 'Der Empfang des neuen Buches war überwältigend positiv.',
          translation:
            'The reception of the new book was overwhelmingly positive.',
        },
        {
          sentence:
            'Sie empfing einen Brief von ihrem alten Freund aus der Schule.',
          translation: 'She received a letter from her old friend from school.',
        },
        {
          sentence:
            'Er empfing eine Auszeichnung für seine langjährige Mitarbeit im Unternehmen.',
          translation:
            'He received an award for his long-standing contribution to the company.',
        },
      ],
    },
    {
      word: 'Reihe',
      desc: "Noun meaning 'row', a number of people or things in a more or less straight line.",
      examples: [
        {
          sentence:
            'Die Zuschauer saßen in Reihen und verfolgten gespannt die Vorstellung.',
          translation:
            'The audience sat in rows and watched the performance eagerly.',
        },
        {
          sentence:
            'Sie standen in einer Reihe, um ihre Tickets für das Konzert zu bekommen.',
          translation:
            'They stood in line to get their tickets for the concert.',
        },
        {
          sentence:
            'Die Bücher waren ordentlich in Reihen aufgestellt, um Platz zu sparen.',
          translation: 'The books were neatly arranged in rows to save space.',
        },
        {
          sentence:
            'Die Soldaten marschierten in einer perfekten Reihe über den Platz.',
          translation:
            'The soldiers marched in a perfect row across the square.',
        },
        {
          sentence:
            'Die Kinder saßen in einer Reihe und warteten darauf, auf die Bühne zu gehen.',
          translation: 'The children sat in a row, waiting to go on stage.',
        },
      ],
    },
    {
      word: 'Mund',
      desc: "Noun meaning 'mouth', the opening in the face used for speaking, eating, and tasting.",
      examples: [
        {
          sentence:
            'Er hatte einen süßen Geschmack im Mund nach dem Essen des Desserts.',
          translation:
            'He had a sweet taste in his mouth after eating the dessert.',
        },
        {
          sentence:
            'Sie hatte ein breites Lächeln auf den Lippen und Freude in den Augen.',
          translation: 'She had a wide smile on her lips and joy in her eyes.',
        },
        {
          sentence: 'Das Essen war so heiß, dass es ihm den Mund verbrannte.',
          translation: 'The food was so hot that it burned his mouth.',
        },
        {
          sentence:
            'Sie konnte den Geschmack des Meeres auf ihrer Zunge spüren.',
          translation: 'She could taste the flavor of the sea on her tongue.',
        },
        {
          sentence:
            'Er öffnete den Mund, um etwas zu sagen, aber keine Worte kamen heraus.',
          translation:
            'He opened his mouth to say something, but no words came out.',
        },
      ],
    },
    {
      word: 'genau',
      desc: "Adverb meaning 'exactly', used to emphasize the precision or accuracy of a statement or description.",
      examples: [
        {
          sentence: 'Das Bild hing genau in der Mitte der Wand.',
          translation: 'The picture hung exactly in the middle of the wall.',
        },
        {
          sentence:
            'Sie wusste genau, was sie sagen sollte, um ihn zu beruhigen.',
          translation: 'She knew exactly what to say to calm him down.',
        },
        {
          sentence: 'Die Uhrzeit wurde genau auf die Minute eingestellt.',
          translation: 'The time was set exactly to the minute.',
        },
        {
          sentence:
            'Er konnte genau den richtigen Moment abpassen, um das Foto zu machen.',
          translation: 'He could time it exactly right to take the picture.',
        },
        {
          sentence:
            'Der Architekt arbeitete daran, die Pläne genau nach den Vorgaben des Kunden umzusetzen.',
          translation:
            "The architect worked on implementing the plans exactly according to the client's specifications.",
        },
      ],
    },
    {
      word: 'Zeichen',
      desc: "Noun meaning 'sign', an object, quality, or event whose presence or occurrence indicates the probable presence or occurrence of something else.",
      examples: [
        {
          sentence:
            'Die dunklen Wolken waren ein Zeichen für das nahende Unwetter.',
          translation: 'The dark clouds were a sign of the approaching storm.',
        },
        {
          sentence:
            'Seine Müdigkeit war ein Zeichen dafür, dass er sich ausruhen musste.',
          translation: 'His fatigue was a sign that he needed to rest.',
        },
        {
          sentence:
            'Das Fehlen von Fußspuren war ein Zeichen dafür, dass niemand das Gebiet betreten hatte.',
          translation:
            'The absence of footprints was a sign that no one had entered the area.',
        },
        {
          sentence:
            'Die steigenden Zahlen waren ein Zeichen für das wachsende Interesse an dem Produkt.',
          translation:
            'The increasing numbers were a sign of the growing interest in the product.',
        },
        {
          sentence:
            'Der plötzliche Windstoß war ein Zeichen für den bevorstehenden Sturm.',
          translation:
            'The sudden gust of wind was a sign of the impending storm.',
        },
      ],
    },
    {
      word: 'sterben',
      desc: "Verb meaning 'die', to cease to live; undergo the complete and permanent cessation of all vital functions; become dead.",
      examples: [
        {
          sentence:
            'Die Blumen begannen zu sterben, als sie nicht genug Wasser bekamen.',
          translation:
            "The flowers began to die when they didn't get enough water.",
        },
        {
          sentence:
            'Seine Großeltern starben im hohen Alter von natürlichen Ursachen.',
          translation:
            'His grandparents died at a ripe old age of natural causes.',
        },
        {
          sentence:
            'Die Hoffnung auf Rettung starb langsam, als die Zeit verging.',
          translation: 'The hope of rescue slowly died as time passed.',
        },
        {
          sentence:
            'Der Wunsch nach Freiheit war stärker als die Angst zu sterben.',
          translation:
            'The desire for freedom was stronger than the fear of dying.',
        },
        {
          sentence:
            'Sie starb friedlich in ihrem Schlaf und hinterließ eine liebevolle Erinnerung.',
          translation:
            'She died peacefully in her sleep, leaving behind a loving memory.',
        },
      ],
    },
    {
      word: 'am wenigsten',
      desc: "Phrase meaning 'least', to the smallest extent or degree.",
      examples: [
        {
          sentence: 'Er hatte am wenigsten Erfahrung von allen Bewerbern.',
          translation: 'He had the least experience of all the applicants.',
        },
        {
          sentence:
            'Die kleinen Tiere waren am wenigsten aggressiv und am einfachsten zu zähmen.',
          translation:
            'The small animals were the least aggressive and the easiest to tame.',
        },
        {
          sentence: 'Dieses Kleid gefällt mir am wenigsten von allen.',
          translation: 'I like this dress the least out of all of them.',
        },
        {
          sentence:
            'Die letzte Aufgabe war am wenigsten anspruchsvoll und am schnellsten zu erledigen.',
          translation:
            'The last task was the least demanding and the quickest to complete.',
        },
        {
          sentence:
            'Die schüchternste Person sprach am wenigsten während des Treffens.',
          translation: 'The shyest person spoke the least during the meeting.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Ärger, Schrei, außer, schrieb, Samen, Ton, beitreten, vorschlagen, sauber, Pause',
  words: [
    {
      word: 'Ärger',
      desc: "Noun meaning 'trouble', difficulty or problems that cause distress or worry.",
      examples: [
        {
          sentence:
            'Er geriet in Ärger, als er vergaß, seine Hausaufgaben zu machen.',
          translation: 'He got into trouble when he forgot to do his homework.',
        },
        {
          sentence: 'Die Ärger der Welt schien auf ihren Schultern zu lasten.',
          translation:
            'The troubles of the world seemed to weigh on her shoulders.',
        },
        {
          sentence: 'Es gab Ärger im Büro, als die Frist verpasst wurde.',
          translation:
            'There was trouble in the office when the deadline was missed.',
        },
        {
          sentence:
            'Sie versuchte, sich aus Ärger herauszuhalten und sich auf ihre eigenen Angelegenheiten zu konzentrieren.',
          translation:
            'She tried to stay out of trouble and focus on her own affairs.',
        },
        {
          sentence:
            'Die Kinder machten Ärger, als sie alleine zu Hause gelassen wurden.',
          translation:
            'The children caused trouble when they were left home alone.',
        },
      ],
    },
    {
      word: 'Schrei',
      desc: "Noun meaning 'shout', a loud cry or yell, typically expressing pain, anger, or fear.",
      examples: [
        {
          sentence:
            'Ein Schrei der Überraschung entfuhr ihr, als sie die Nachricht erhielt.',
          translation:
            'A shout of surprise escaped her when she received the news.',
        },
        {
          sentence: 'Der Schrei des Babys weckte sie mitten in der Nacht.',
          translation: "The baby's cry woke her up in the middle of the night.",
        },
        {
          sentence:
            'Sie konnte den Schrei der Menge hören, als das Tor erzielt wurde.',
          translation:
            "She could hear the crowd's shout when the goal was scored.",
        },
        {
          sentence:
            'Ein Schrei der Wut brach aus ihm heraus, als er die schlechte Nachricht erfuhr.',
          translation:
            'A shout of anger burst from him when he heard the bad news.',
        },
        {
          sentence: 'Ein Schrei der Angst hallte durch den dunklen Wald.',
          translation: 'A shout of fear echoed through the dark forest.',
        },
      ],
    },
    {
      word: 'außer',
      desc: "Preposition meaning 'except', with the exclusion of.",
      examples: [
        {
          sentence: 'Alle waren da, außer Lisa, die krank war.',
          translation: 'Everyone was there except for Lisa, who was sick.',
        },
        {
          sentence: 'Ich habe alles gepackt, außer meinem Pass.',
          translation: 'I packed everything except for my passport.',
        },
        {
          sentence: 'Alle gingen zum Picknick, außer Tom, der arbeiten musste.',
          translation:
            'Everyone went to the picnic except for Tom, who had to work.',
        },
        {
          sentence: 'Das Geschäft war geöffnet, außer an Feiertagen.',
          translation: 'The store was open except on holidays.',
        },
        {
          sentence: 'Er hatte alle Antworten richtig, außer einer.',
          translation: 'He had all the answers correct except for one.',
        },
      ],
    },
    {
      word: 'schrieb',
      desc: "Past tense of the verb 'schreiben', meaning 'wrote', to mark letters, words, or other symbols on a surface, typically paper, with a pen, pencil, or similar implement.",
      examples: [
        {
          sentence: 'Sie schrieb einen langen Brief an ihre Freundin.',
          translation: 'She wrote a long letter to her friend.',
        },
        {
          sentence: 'Er schrieb Gedichte in seiner Freizeit.',
          translation: 'He wrote poems in his spare time.',
        },
        {
          sentence: 'Sie schrieb ihre Gedanken in ihr Tagebuch.',
          translation: 'She wrote her thoughts in her diary.',
        },
        {
          sentence: 'Er schrieb die Telefonnummer auf einen Zettel.',
          translation: 'He wrote the phone number on a piece of paper.',
        },
        {
          sentence: 'Sie schrieb den Namen des Buches auf die Liste.',
          translation: 'She wrote the name of the book on the list.',
        },
      ],
    },
    {
      word: 'Samen',
      desc: "Noun meaning 'seed', a flowering plant's unit of reproduction, capable of developing into another such plant.",
      examples: [
        {
          sentence: 'Die Gärtnerin pflanzte die Samen im Frühling.',
          translation: 'The gardener planted the seeds in the spring.',
        },
        {
          sentence: 'Die Vögel fressen die Samen aus dem Futterhäuschen.',
          translation: 'The birds eat the seeds from the bird feeder.',
        },
        {
          sentence: 'Die Blume verbreitete ihre Samen durch den Wind.',
          translation: 'The flower spread its seeds through the wind.',
        },
        {
          sentence: 'Die Samen keimten schnell im feuchten Boden.',
          translation: 'The seeds sprouted quickly in the moist soil.',
        },
        {
          sentence: 'Der Bauer säte die Samen auf dem Feld aus.',
          translation: 'The farmer sowed the seeds in the field.',
        },
      ],
    },
    {
      word: 'Ton',
      desc: "Noun meaning 'tone', the general character or attitude of a place, piece of writing, situation, etc.",
      examples: [
        {
          sentence: 'Seine Worte hatten einen freundlichen Ton.',
          translation: 'His words had a friendly tone.',
        },
        {
          sentence: 'Der Ton der Musik war beruhigend.',
          translation: 'The tone of the music was soothing.',
        },
        {
          sentence: 'Ihr Brief hatte einen aufgeregten Ton.',
          translation: 'Her letter had an excited tone.',
        },
        {
          sentence:
            'Der Ton des Gesprächs wurde ernster, als das Thema diskutiert wurde.',
          translation:
            'The tone of the conversation became more serious as the topic was discussed.',
        },
        {
          sentence: 'Der Ton des Films war düster und beklemmend.',
          translation: 'The tone of the movie was dark and oppressive.',
        },
      ],
    },
    {
      word: 'beitreten',
      desc: "Verb meaning 'to join', to become a member of a group, organization, or team.",
      examples: [
        {
          sentence:
            'Sie beschloss, dem Chor beizutreten, um ihre Gesangsfähigkeiten zu verbessern.',
          translation:
            'She decided to join the choir to improve her singing skills.',
        },
        {
          sentence: 'Er wird der Armee beitreten, um seinem Land zu dienen.',
          translation: 'He will join the army to serve his country.',
        },
        {
          sentence:
            'Sie möchte dem Fitnessstudio beitreten, um sich gesünder zu fühlen.',
          translation: 'She wants to join the gym to feel healthier.',
        },
        {
          sentence:
            'Er ist entschlossen, der politischen Partei beizutreten, die seine Ansichten am besten vertritt.',
          translation:
            'He is determined to join the political party that best represents his views.',
        },
        {
          sentence:
            'Wir laden alle interessierten Personen ein, unserem Team beizutreten.',
          translation: 'We invite all interested individuals to join our team.',
        },
      ],
    },
    {
      word: 'vorschlagen',
      desc: "Verb meaning 'to suggest', to put forward for consideration.",
      examples: [
        {
          sentence: 'Er schlug vor, am Wochenende einen Ausflug zu machen.',
          translation: 'He suggested going on a trip over the weekend.',
        },
        {
          sentence:
            'Sie schlug vor, das Treffen auf nächste Woche zu verschieben.',
          translation: 'She suggested postponing the meeting to next week.',
        },
        {
          sentence:
            'Er hat verschiedene Optionen vorgeschlagen, wie das Problem gelöst werden könnte.',
          translation:
            'He suggested various options for how the problem could be solved.',
        },
        {
          sentence:
            'Sie schlug vor, dass wir das Restaurant wechseln, da sie mit dem Service unzufrieden war.',
          translation:
            'She suggested that we change the restaurant as she was unhappy with the service.',
        },
        {
          sentence:
            'Er hat vorgeschlagen, dass wir das Projekt in kleinere Teile aufteilen, um es einfacher zu bewältigen.',
          translation:
            'He suggested that we break the project into smaller parts to make it easier to handle.',
        },
      ],
    },
    {
      word: 'sauber',
      desc: "Adjective meaning 'clean', free from dirt, marks, or unwanted matter.",
      examples: [
        {
          sentence:
            'Sie hat das Haus gründlich gereinigt, es ist jetzt sehr sauber.',
          translation:
            'She cleaned the house thoroughly; it is now very clean.',
        },
        {
          sentence: 'Die Kleidung sollte immer sauber und ordentlich sein.',
          translation: 'Clothes should always be clean and tidy.',
        },
        {
          sentence:
            'Sie machte sich die Hände sauber, bevor sie das Essen zubereitete.',
          translation: 'She cleaned her hands before preparing the food.',
        },
        {
          sentence:
            'Das Geschirr war so sauber, dass man seinen eigenen Spiegel darin sehen konnte.',
          translation:
            'The dishes were so clean that you could see your own reflection in them.',
        },
        {
          sentence: 'Er wusch das Auto, bis es makellos sauber war.',
          translation: 'He washed the car until it was spotlessly clean.',
        },
      ],
    },
    {
      word: 'Pause',
      desc: "Noun meaning 'break', a temporary rest or cessation from work or activity.",
      examples: [
        {
          sentence:
            'Sie machte eine kurze Pause, um einen Kaffee zu trinken und sich zu entspannen.',
          translation: 'She took a short break to have a coffee and relax.',
        },
        {
          sentence:
            'Wir machen normalerweise eine Mittagspause von einer Stunde.',
          translation: 'We usually take a one-hour lunch break.',
        },
        {
          sentence:
            'Er brauchte eine Pause, um neue Energie zu tanken und klar zu denken.',
          translation: 'He needed a break to recharge and think clearly.',
        },
        {
          sentence:
            'Nach einer langen Pause setzten sie ihre Arbeit mit neuer Motivation fort.',
          translation:
            'After a long break, they resumed their work with renewed motivation.',
        },
        {
          sentence:
            'Die Schüler haben eine kurze Pause zwischen den Unterrichtsstunden.',
          translation: 'The students have a short break between classes.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Dame, Hof, steigen, schlecht, Schlag, Öl, Blut, berühren, wuchs, Cent',
  words: [
    {
      word: 'Dame',
      desc: "Noun meaning 'lady', a woman with the rank of a knight.",
      examples: [
        {
          sentence: 'Die Dame trug ein elegantes Kleid und einen Hut.',
          translation: 'The lady was wearing an elegant dress and a hat.',
        },
        {
          sentence: 'Die junge Dame ging mit Anmut über den Ballsaal.',
          translation: 'The young lady moved gracefully across the ballroom.',
        },
        {
          sentence: 'Die Dame des Hauses empfing die Gäste persönlich.',
          translation: 'The lady of the house personally greeted the guests.',
        },
        {
          sentence: 'Die alte Dame fütterte die Vögel im Park.',
          translation: 'The old lady fed the birds in the park.',
        },
        {
          sentence:
            'Die Dame war für ihre Großzügigkeit und Freundlichkeit bekannt.',
          translation: 'The lady was known for her generosity and kindness.',
        },
      ],
    },
    {
      word: 'Hof',
      desc: "Noun meaning 'yard', an area of enclosed land adjoining a house.",
      examples: [
        {
          sentence: 'Die Kinder spielten im Hof des Hauses.',
          translation: 'The children played in the yard of the house.',
        },
        {
          sentence: 'Der Hof war mit Blumen und Bäumen bepflanzt.',
          translation: 'The yard was planted with flowers and trees.',
        },
        {
          sentence:
            'Der Hof diente als Treffpunkt für die Bewohner des Viertels.',
          translation:
            'The yard served as a gathering place for the neighborhood residents.',
        },
        {
          sentence: 'Die Wäsche wurde im Hof zum Trocknen aufgehängt.',
          translation: 'The laundry was hung out to dry in the yard.',
        },
        {
          sentence: 'Im Hof stand ein alter Brunnen aus Stein.',
          translation: 'In the yard stood an old stone fountain.',
        },
      ],
    },
    {
      word: 'steigen',
      desc: "Verb meaning 'to rise', to move upward, ascend.",
      examples: [
        {
          sentence: 'Die Sonne steigt jeden Morgen im Osten auf.',
          translation: 'The sun rises in the east every morning.',
        },
        {
          sentence: 'Die Preise für Lebensmittel steigen ständig.',
          translation: 'The prices of groceries are constantly rising.',
        },
        {
          sentence: 'Der Rauch stieg langsam aus dem Schornstein auf.',
          translation: 'The smoke slowly rose from the chimney.',
        },
        {
          sentence:
            'Der Mond stieg über den Horizont auf und erleuchtete die Nacht.',
          translation:
            'The moon rose above the horizon, illuminating the night.',
        },
        {
          sentence: 'Die Flugzeuge stiegen nacheinander in den Himmel auf.',
          translation: 'The planes rose into the sky, one after another.',
        },
      ],
    },
    {
      word: 'schlecht',
      desc: "Adjective meaning 'bad', of poor quality or low standard.",
      examples: [
        {
          sentence: 'Das Essen war leider schlecht und ungenießbar.',
          translation: 'Unfortunately, the food was bad and inedible.',
        },
        {
          sentence:
            'Die Straßenverhältnisse waren schlecht, sodass der Verkehr langsamer lief.',
          translation:
            'The road conditions were bad, causing traffic to move slowly.',
        },
        {
          sentence: 'Er fühlte sich den ganzen Tag über schlecht und müde.',
          translation: 'He felt bad and tired all day long.',
        },
        {
          sentence:
            'Die Nachrichten über das Wetter für das Wochenende waren schlecht.',
          translation: 'The weather forecast for the weekend was bad.',
        },
        {
          sentence:
            'Die Qualität der Arbeit war schlecht, und der Kunde war unzufrieden.',
          translation:
            'The quality of the work was bad, and the customer was unhappy.',
        },
      ],
    },
    {
      word: 'Schlag',
      desc: "Noun meaning 'blow', a heavy strike or hit with the hand or a weapon.",
      examples: [
        {
          sentence:
            'Der Boxer landete einen schweren Schlag auf seinem Gegner.',
          translation: 'The boxer landed a heavy blow on his opponent.',
        },
        {
          sentence: 'Ein lauter Schlag erschütterte das Gebäude.',
          translation: 'A loud blow shook the building.',
        },
        {
          sentence:
            'Der Schlag des Hammers auf den Nagel war deutlich zu hören.',
          translation:
            'The blow of the hammer on the nail was clearly audible.',
        },
        {
          sentence: 'Ein Schlag ins Gesicht verursachte eine Rötung.',
          translation: 'A blow to the face caused redness.',
        },
        {
          sentence:
            'Der Schlag der Trommel begleitete den Marsch der Soldaten.',
          translation:
            'The beat of the drum accompanied the march of the soldiers.',
        },
      ],
    },
    {
      word: 'Öl',
      desc: "Noun meaning 'oil', a viscous liquid derived from petroleum, especially for use as a fuel or lubricant.",
      examples: [
        {
          sentence: 'Das Auto benötigt regelmäßig einen Ölwechsel.',
          translation: 'The car needs an oil change regularly.',
        },
        {
          sentence: 'Das Öl wurde als Brennstoff für die Heizung verwendet.',
          translation: 'The oil was used as fuel for the heater.',
        },
        {
          sentence: 'Das Salatdressing bestand aus Essig und Öl.',
          translation: 'The salad dressing consisted of vinegar and oil.',
        },
        {
          sentence: 'Der Mechaniker füllte das Öl in den Motor des Fahrzeugs.',
          translation: 'The mechanic filled the oil into the vehicle engine.',
        },
        {
          sentence: 'Der Duft von frischem Olivenöl erfüllte die Küche.',
          translation: 'The scent of fresh olive oil filled the kitchen.',
        },
      ],
    },
    {
      word: 'Blut',
      desc: "Noun meaning 'blood', the red liquid that circulates in the arteries and veins of humans and other vertebrate animals, carrying oxygen to and carbon dioxide from the tissues of the body.",
      examples: [
        {
          sentence:
            'Die Wunde blutete stark, und das Blut floss über den Boden.',
          translation:
            'The wound bled heavily, and the blood flowed over the floor.',
        },
        {
          sentence: 'Das Blut wird durch das Herz in den Körper gepumpt.',
          translation: 'The blood is pumped through the heart into the body.',
        },
        {
          sentence: 'Die Analyse des Blutes ergab keine Anomalien.',
          translation: 'The blood analysis revealed no anomalies.',
        },
        {
          sentence: 'Blutspenden können Leben retten.',
          translation: 'Blood donations can save lives.',
        },
        {
          sentence: 'Die Verletzung war ernst, und er verlor viel Blut.',
          translation: 'The injury was serious, and he lost a lot of blood.',
        },
      ],
    },
    {
      word: 'berühren',
      desc: "Verb meaning 'to touch', to come into physical contact with (something) so as to perceive a slight pressure or movement.",
      examples: [
        {
          sentence: 'Er berührte sanft die Blumen im Garten.',
          translation: 'He gently touched the flowers in the garden.',
        },
        {
          sentence:
            'Die Kinder berührten die glatte Oberfläche des Sees mit ihren Händen.',
          translation:
            'The children touched the smooth surface of the lake with their hands.',
        },
        {
          sentence: 'Sie konnte die Traurigkeit in seiner Stimme berühren.',
          translation: 'She could touch the sadness in his voice.',
        },
        {
          sentence: 'Die warme Sonne berührte ihre Haut.',
          translation: 'The warm sun touched her skin.',
        },
        {
          sentence: 'Seine Worte berührten sie tief im Herzen.',
          translation: 'His words touched her deeply in the heart.',
        },
      ],
    },
    {
      word: 'wuchs',
      desc: "Verb meaning 'grew', the past tense of 'to grow', to become larger or greater over a period of time; increase.",
      examples: [
        {
          sentence: 'Die Pflanzen wuchsen schnell in dem fruchtbaren Boden.',
          translation: 'The plants grew quickly in the fertile soil.',
        },
        {
          sentence: 'Er wuchs in einem kleinen Dorf auf dem Land auf.',
          translation: 'He grew up in a small village in the countryside.',
        },
        {
          sentence: 'Die Stadt wuchs rasant und zog immer mehr Menschen an.',
          translation:
            'The city grew rapidly and attracted more and more people.',
        },
        {
          sentence:
            'Das Interesse an der Geschichte wuchs mit jedem Kapitel des Buches.',
          translation:
            'The interest in history grew with every chapter of the book.',
        },
        {
          sentence: 'Sie wuchs zu einer talentierten Musikerin heran.',
          translation: 'She grew into a talented musician.',
        },
      ],
    },
    {
      word: 'Cent',
      desc: "Noun meaning 'cent', a monetary unit of various countries, equal to one hundredth of a dollar, euro, or other decimal currency unit.",
      examples: [
        {
          sentence: 'Er hatte nur noch ein paar Cent in seiner Tasche.',
          translation: 'He only had a few cents left in his pocket.',
        },
        {
          sentence:
            'Die Preise sind in den letzten Jahren um mehrere Cent gestiegen.',
          translation: 'Prices have risen by several cents in recent years.',
        },
        {
          sentence: 'Das Wechselgeld betrug nur ein paar Cent.',
          translation: 'The change amounted to only a few cents.',
        },
        {
          sentence: 'Sie fand einen Cent auf dem Bürgersteig und hob ihn auf.',
          translation: 'She found a cent on the sidewalk and picked it up.',
        },
        {
          sentence: 'Der Artikel kostete nur fünfzig Cent.',
          translation: 'The item cost only fifty cents.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'mischen, Mannschaft, Draht, Kosten, verloren, braun, tragen, Garten, gleich, gesendet',
  words: [
    {
      word: 'mischen',
      desc: "Verb meaning 'mix', to combine or blend (different substances) so that they become homogenous.",
      examples: [
        {
          sentence:
            'Sie musste die Zutaten gut mischen, um einen gleichmäßigen Teig zu erhalten.',
          translation:
            'She had to mix the ingredients well to get a uniform dough.',
        },
        {
          sentence:
            'Er mischte verschiedene Farben, um einen neuen Farbton zu kreieren.',
          translation: 'He mixed different colors to create a new shade.',
        },
        {
          sentence: 'Wir mischen das Öl mit dem Essig für das Dressing.',
          translation: 'We mix the oil with the vinegar for the dressing.',
        },
        {
          sentence:
            'Man sollte verschiedene Sorten von Samen mischen, um eine vielfältige Blumenwiese zu erhalten.',
          translation:
            'One should mix different types of seeds to get a diverse flower meadow.',
        },
        {
          sentence:
            'Das Unternehmen mischt verschiedene Materialien, um ein neues Produkt zu entwickeln.',
          translation:
            'The company mixes different materials to develop a new product.',
        },
      ],
    },
    {
      word: 'Mannschaft',
      desc: "Noun meaning 'team', a group of people who work together, especially in sports.",
      examples: [
        {
          sentence:
            'Die Fußballmannschaft trainierte hart für das kommende Spiel.',
          translation: 'The soccer team trained hard for the upcoming game.',
        },
        {
          sentence:
            'Die Rettungsmannschaften arbeiteten zusammen, um die Verletzten zu bergen.',
          translation:
            'The rescue teams worked together to rescue the injured.',
        },
        {
          sentence:
            'Die Mannschaft war motiviert und bereit für den Wettkampf.',
          translation: 'The team was motivated and ready for the competition.',
        },
        {
          sentence:
            'Jedes Mitglied der Mannschaft hatte eine wichtige Rolle zu spielen.',
          translation: 'Each member of the team had an important role to play.',
        },
        {
          sentence: 'Die Mannschaft feierte ihren Sieg ausgelassen.',
          translation: 'The team celebrated their victory enthusiastically.',
        },
      ],
    },
    {
      word: 'Draht',
      desc: "Noun meaning 'wire', a slender, flexible thread or rod of metal.",
      examples: [
        {
          sentence: 'Er reparierte den Zaun mit einem Stück Draht.',
          translation: 'He repaired the fence with a piece of wire.',
        },
        {
          sentence: 'Der Elektriker verlegte neue Drähte in das Haus.',
          translation: 'The electrician installed new wires in the house.',
        },
        {
          sentence: 'Sie formte den Draht zu einer Skulptur.',
          translation: 'She shaped the wire into a sculpture.',
        },
        {
          sentence: 'Die Kinder bastelten mit buntem Draht.',
          translation: 'The children crafted with colorful wire.',
        },
        {
          sentence: 'Der Draht war zu dünn, um das Gewicht zu tragen.',
          translation: 'The wire was too thin to bear the weight.',
        },
      ],
    },
    {
      word: 'Kosten',
      desc: "Noun meaning 'cost', the amount that has to be paid or spent to buy or obtain something.",
      examples: [
        {
          sentence: 'Die Kosten für das Essen waren höher als erwartet.',
          translation: 'The cost of the meal was higher than expected.',
        },
        {
          sentence: 'Die Kosten für die Reparatur waren unbezahlbar.',
          translation: 'The cost of the repair was priceless.',
        },
        {
          sentence: 'Sie konnte sich die Kosten für das Auto nicht leisten.',
          translation: "She couldn't afford the cost of the car.",
        },
        {
          sentence: 'Die Kosten für das Projekt waren zu hoch.',
          translation: 'The costs for the project were too high.',
        },
        {
          sentence: 'Die Kosten für den Flug waren sehr günstig.',
          translation: 'The cost of the flight was very affordable.',
        },
      ],
    },
    {
      word: 'verloren',
      desc: "Adjective meaning 'lost', no longer possessed or retained; unable to find one's way; defeated or destroyed.",
      examples: [
        {
          sentence: 'Er fühlte sich verloren in der großen Stadt.',
          translation: 'He felt lost in the big city.',
        },
        {
          sentence:
            'Sie hatte ihre Schlüssel verloren und konnte nicht in ihr Haus kommen.',
          translation: "She'd lost her keys and couldn't get into her house.",
        },
        {
          sentence: 'Der verloren geglaubte Schatz wurde endlich gefunden.',
          translation:
            'The lost treasure that was thought to be lost was finally found.',
        },
        {
          sentence: 'Er hatte sein Herz an die verlorene Liebe verloren.',
          translation: 'He had lost his heart to the lost love.',
        },
        {
          sentence:
            'Sie fühlte sich verloren und wusste nicht, wohin sie gehen sollte.',
          translation: "She felt lost and didn't know where to go.",
        },
      ],
    },
    {
      word: 'braun',
      desc: "Adjective meaning 'brown', of a color produced by mixing red, yellow, and black, as of dark wood or rich soil.",
      examples: [
        {
          sentence:
            'Seine Haare waren braun und fielen ihm in sanften Wellen über die Schultern.',
          translation:
            'His hair was brown and fell in gentle waves over his shoulders.',
        },
        {
          sentence: 'Die Blätter des Baumes wurden im Herbst braun.',
          translation: 'The leaves of the tree turned brown in the autumn.',
        },
        {
          sentence: 'Sie trug eine braune Jacke und passende Stiefel.',
          translation: 'She wore a brown jacket and matching boots.',
        },
        {
          sentence: 'Der Hund hatte braune Flecken auf seinem Fell.',
          translation: 'The dog had brown spots on its fur.',
        },
        {
          sentence: 'Die Erde war braun und trocken nach Wochen ohne Regen.',
          translation: 'The earth was brown and dry after weeks without rain.',
        },
      ],
    },
    {
      word: 'tragen',
      desc: "Verb meaning 'to wear' or 'to carry', to support and move (someone or something) from one place to another.",
      examples: [
        {
          sentence: 'Sie trägt ein rotes Kleid zu der Party.',
          translation: 'She wears a red dress to the party.',
        },
        {
          sentence: 'Er trägt schwere Kisten in den Keller.',
          translation: 'He carries heavy boxes into the basement.',
        },
        {
          sentence: 'Die Mutter trägt ihr Baby auf dem Rücken.',
          translation: 'The mother carries her baby on her back.',
        },
        {
          sentence: 'Sie trägt eine Brille, um besser sehen zu können.',
          translation: 'She wears glasses to see better.',
        },
        {
          sentence: 'Die Arbeiter tragen Schutzhelme auf der Baustelle.',
          translation: 'The workers wear helmets on the construction site.',
        },
      ],
    },
    {
      word: 'Garten',
      desc: "Noun meaning 'garden', a piece of ground, often near a house, used for growing flowers, fruit, or vegetables.",
      examples: [
        {
          sentence: 'Der Garten blühte im Frühling mit vielen bunten Blumen.',
          translation:
            'The garden bloomed in spring with many colorful flowers.',
        },
        {
          sentence:
            'Wir verbrachten den Nachmittag im Garten und genossen die Sonne.',
          translation:
            'We spent the afternoon in the garden, enjoying the sun.',
        },
        {
          sentence:
            'Der Gemüsegarten lieferte frisches Gemüse für die Mahlzeiten.',
          translation:
            'The vegetable garden provided fresh vegetables for the meals.',
        },
        {
          sentence: 'Der Duft von Lavendel lag schwer im Garten.',
          translation: 'The scent of lavender hung heavily in the garden.',
        },
        {
          sentence:
            'Der Garten war ein ruhiger Ort zum Entspannen und Nachdenken.',
          translation:
            'The garden was a quiet place for relaxation and contemplation.',
        },
      ],
    },
    {
      word: 'gleich',
      desc: "Adverb meaning 'equal' or 'similar', having the same quantity, value, or measure as another.",
      examples: [
        {
          sentence:
            'Die beiden Schwestern sehen sich sehr ähnlich und werden oft für Zwillinge gehalten.',
          translation:
            'The two sisters look very similar and are often mistaken for twins.',
        },
        {
          sentence: 'Die Schüler haben gleich viel Zeit für die Prüfung.',
          translation:
            'The students have the same amount of time for the exam.',
        },
        {
          sentence: 'Alle Teilnehmer haben gleich gute Chancen, zu gewinnen.',
          translation: 'All participants have an equal chance of winning.',
        },
        {
          sentence:
            'Die Gruppenarbeit wurde gleich unter den Mitgliedern aufgeteilt.',
          translation: 'The group work was divided equally among the members.',
        },
        {
          sentence:
            'Die Geschwister erhielten gleich viele Geschenke zu Weihnachten.',
          translation:
            'The siblings received an equal number of gifts for Christmas.',
        },
      ],
    },
    {
      word: 'gesendet',
      desc: "Verb meaning 'sent', past participle of the verb 'send', to cause (a message, letter, package, etc.) to be conveyed or transmitted to a destination.",
      examples: [
        {
          sentence:
            'Die E-Mail wurde bereits vor zwei Tagen gesendet, aber sie hat sie noch nicht gelesen.',
          translation:
            "The email was sent two days ago, but she hasn't read it yet.",
        },
        {
          sentence:
            'Das Paket wurde gestern Abend gesendet und sollte morgen ankommen.',
          translation:
            'The package was sent last night and should arrive tomorrow.',
        },
        {
          sentence:
            'Die Nachricht wurde sofort gesendet, nachdem sie fertig geschrieben war.',
          translation:
            'The message was sent immediately after it was finished.',
        },
        {
          sentence:
            'Der Brief wurde über Luftpost gesendet, um ihn schneller zu liefern.',
          translation: 'The letter was sent by airmail to deliver it faster.',
        },
        {
          sentence:
            'Der Film wurde auf DVD gesendet, damit er überall angesehen werden kann.',
          translation:
            'The movie was sent on DVD so that it can be watched anywhere.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'wählen, fiel, passen, fließen, Messe, Bank, sammeln, sparen, Kontrolle, dezimal',
  words: [
    {
      word: 'wählen',
      desc: "Verb meaning 'choose', to pick out or select (someone or something) as being the best or most appropriate of two or more alternatives.",
      examples: [
        {
          sentence: 'Er musste zwischen den beiden Angeboten wählen.',
          translation: 'He had to choose between the two offers.',
        },
        {
          sentence: 'Sie wählte das blaue Kleid für die Party.',
          translation: 'She chose the blue dress for the party.',
        },
        {
          sentence: 'Die Jury wird den Gewinner aus allen Bewerbern wählen.',
          translation:
            'The jury will choose the winner from all the applicants.',
        },
        {
          sentence: 'Wir müssen einen neuen Vorsitzenden wählen.',
          translation: 'We need to choose a new chairman.',
        },
        {
          sentence:
            'Er wählte den Weg durch den Wald, um schneller anzukommen.',
          translation: 'He chose the path through the forest to arrive faster.',
        },
      ],
    },
    {
      word: 'fiel',
      desc: "Verb meaning 'fell', past tense of the verb 'fall', to descend from a higher to a lower place.",
      examples: [
        {
          sentence: 'Die Blätter fielen leise auf den Boden.',
          translation: 'The leaves fell softly to the ground.',
        },
        {
          sentence: 'Die Schneeflocken fielen langsam vom Himmel.',
          translation: 'The snowflakes fell slowly from the sky.',
        },
        {
          sentence: 'Die Vase fiel vom Regal und zerbrach in tausend Stücke.',
          translation:
            'The vase fell from the shelf and broke into a thousand pieces.',
        },
        {
          sentence: 'Der Regen fiel den ganzen Tag.',
          translation: 'The rain fell all day.',
        },
        {
          sentence: 'Der Baum fiel nach einem starken Sturm um.',
          translation: 'The tree fell after a strong storm.',
        },
      ],
    },
    {
      word: 'passen',
      desc: "Verb meaning 'fit', to be of the right size or shape for someone or something.",
      examples: [
        {
          sentence: 'Die Hose passt mir nicht mehr, sie ist zu eng geworden.',
          translation:
            "The pants don't fit me anymore, they've become too tight.",
        },
        {
          sentence: 'Das Kleid passt perfekt zu deinen neuen Schuhen.',
          translation: 'The dress fits perfectly with your new shoes.',
        },
        {
          sentence: 'Die Schlüssel passen nicht in das Schloss.',
          translation: 'The keys don’t fit into the lock.',
        },
        {
          sentence: 'Der Mantel passt gut zur Jacke.',
          translation: 'The coat goes well with the jacket.',
        },
        {
          sentence: 'Die Möbel passen nicht in das kleine Zimmer.',
          translation: 'The furniture doesn’t fit in the small room.',
        },
      ],
    },
    {
      word: 'fließen',
      desc: "Verb meaning 'flow', to move steadily and continuously in a current or stream.",
      examples: [
        {
          sentence: 'Das Wasser fließt ruhig und klar im Bach.',
          translation: 'The water flows calmly and clearly in the stream.',
        },
        {
          sentence: 'Die Gedanken fließen frei wie ein Fluss.',
          translation: 'Thoughts flow freely like a river.',
        },
        {
          sentence: 'Die Musik ließ die Emotionen wie ein Fluss fließen.',
          translation: 'The music let the emotions flow like a river.',
        },
        {
          sentence: 'Das Blut fließt schnell durch die Adern.',
          translation: 'The blood flows quickly through the veins.',
        },
        {
          sentence: 'Die Tränen flossen unaufhaltsam über ihre Wangen.',
          translation: 'The tears flowed uncontrollably down her cheeks.',
        },
      ],
    },
    {
      word: 'Messe',
      desc: "Noun meaning 'fair' or 'trade fair', an exhibition of goods, services, or agricultural products.",
      examples: [
        {
          sentence:
            'Die Internationale Automobil-Messe zieht jedes Jahr viele Besucher an.',
          translation:
            'The International Motor Show attracts many visitors every year.',
        },
        {
          sentence:
            'Die Messe bietet eine großartige Gelegenheit, neue Produkte kennenzulernen.',
          translation:
            'The trade fair offers a great opportunity to learn about new products.',
        },
        {
          sentence: 'Die Messe findet vom 10. bis 15. Mai statt.',
          translation: 'The fair takes place from May 10th to 15th.',
        },
        {
          sentence:
            'Sie besuchten die Buchmesse, um nach neuen Büchern zu suchen.',
          translation: 'They visited the book fair to look for new books.',
        },
        {
          sentence:
            'Die Messe war ein großer Erfolg für die teilnehmenden Unternehmen.',
          translation:
            'The trade fair was a great success for the participating companies.',
        },
      ],
    },
    {
      word: 'Bank',
      desc: "Noun meaning 'bank', an institution where money is kept for saving or commercial purposes or is invested, supplied for loans, or exchanged.",
      examples: [
        {
          sentence:
            'Er hat sein Geld auf der Bank angelegt, um Zinsen zu verdienen.',
          translation: 'He invested his money in the bank to earn interest.',
        },
        {
          sentence: 'Die Bank war an diesem Wochenende geschlossen.',
          translation: 'The bank was closed this weekend.',
        },
        {
          sentence:
            'Die Bank bot ihm einen Kredit zu günstigen Konditionen an.',
          translation: 'The bank offered him a loan at favorable terms.',
        },
        {
          sentence: 'Wir haben ein gemeinsames Konto bei der Bank.',
          translation: 'We have a joint account at the bank.',
        },
        {
          sentence:
            'Die Bank ist nur einen kurzen Spaziergang von hier entfernt.',
          translation: 'The bank is just a short walk from here.',
        },
      ],
    },
    {
      word: 'sammeln',
      desc: "Verb meaning 'collect', to bring or gather together (things, typically when scattered or widespread).",
      examples: [
        {
          sentence: 'Er sammelt Briefmarken aus verschiedenen Ländern.',
          translation: 'He collects stamps from different countries.',
        },
        {
          sentence: 'Die Kinder sammelten Muscheln am Strand.',
          translation: 'The children collected seashells on the beach.',
        },
        {
          sentence: 'Wir sammelten Geld für die Wohltätigkeitsorganisation.',
          translation: 'We collected money for the charity organization.',
        },
        {
          sentence: 'Sie sammelte Informationen über die Geschichte der Stadt.',
          translation:
            'She gathered information about the history of the city.',
        },
        {
          sentence: 'Wir sammelten uns um das Lagerfeuer.',
          translation: 'We gathered around the campfire.',
        },
      ],
    },
    {
      word: 'sparen',
      desc: "Verb meaning 'save', to keep and store up (something, especially money) for future use.",
      examples: [
        {
          sentence: 'Sie spart jeden Monat einen Teil ihres Gehalts.',
          translation: 'She saves a portion of her salary every month.',
        },
        {
          sentence: 'Wir sparen für einen Familienurlaub im nächsten Sommer.',
          translation: 'We are saving for a family vacation next summer.',
        },
        {
          sentence: 'Es ist wichtig, früh für den Ruhestand zu sparen.',
          translation: 'It is important to save for retirement early.',
        },
        {
          sentence: 'Die Regierung ermutigt die Bürger, Energie zu sparen.',
          translation: 'The government encourages citizens to save energy.',
        },
        {
          sentence:
            'Er hat sein ganzes Leben lang gespart und konnte sich jetzt ein schönes Haus leisten.',
          translation:
            'He saved all his life and could now afford a beautiful house.',
        },
      ],
    },
    {
      word: 'Kontrolle',
      desc: "Noun meaning 'control', the power to influence or direct people's behavior or the course of events.",
      examples: [
        {
          sentence: 'Die Eltern haben die Kontrolle über ihre Kinder verloren.',
          translation: 'The parents lost control over their children.',
        },
        {
          sentence: 'Die Regierung übernahm die Kontrolle über das Land.',
          translation: 'The government took control of the country.',
        },
        {
          sentence: 'Er behielt die Kontrolle über die Situation.',
          translation: 'He maintained control over the situation.',
        },
        {
          sentence:
            'Der Lehrer hatte Schwierigkeiten, die Klasse unter Kontrolle zu halten.',
          translation:
            'The teacher had trouble keeping the class under control.',
        },
        {
          sentence: 'Sie übte strenge Kontrolle über ihre Ausgaben aus.',
          translation: 'She exercised strict control over her expenses.',
        },
      ],
    },
    {
      word: 'dezimal',
      desc: "Adjective meaning 'decimal', relating to or denoting a system of numbers and arithmetic based on the number ten, tenth.",
      examples: [
        {
          sentence:
            'Das metrische System verwendet dezimale Einheiten für Längenmaße.',
          translation: 'The metric system uses decimal units for lengths.',
        },
        {
          sentence:
            'Die Dezimalzahlen werden mit einem Punkt als Dezimaltrennzeichen geschrieben.',
          translation:
            'Decimal numbers are written with a period as a decimal point.',
        },
        {
          sentence:
            'Die dezimale Darstellung erleichtert mathematische Berechnungen.',
          translation:
            'The decimal representation simplifies mathematical calculations.',
        },
        {
          sentence:
            'Der Lehrer erklärte den Schülern, wie man dezimale Brüche in Prozente umwandelt.',
          translation:
            'The teacher explained to the students how to convert decimal fractions into percentages.',
        },
        {
          sentence: 'Die Zahlen werden in einem dezimalen Format angezeigt.',
          translation: 'The numbers are displayed in a decimal format.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'Ohr, sonst, ganz, pleite, Fall, Mitte, töten, Sohn, See, Moment',
  words: [
    {
      word: 'Ohr',
      desc: "Noun meaning 'ear', the organ of hearing and balance in humans and other vertebrates, especially the external part of this.",
      examples: [
        {
          sentence: 'Sie hatte ein Piercing im linken Ohr.',
          translation: 'She had a piercing in her left ear.',
        },
        {
          sentence: 'Er flüsterte ihr etwas ins Ohr.',
          translation: 'He whispered something into her ear.',
        },
        {
          sentence: 'Die Kinder hatten eine Infektion im Ohr.',
          translation: 'The children had an infection in their ear.',
        },
        {
          sentence: 'Sie trug einen Ohrschutz, um ihr Gehör zu schützen.',
          translation: 'She wore an ear protector to protect her hearing.',
        },
        {
          sentence: 'Das Geräusch drang in seine empfindlichen Ohren.',
          translation: 'The noise pierced his sensitive ears.',
        },
      ],
    },
    {
      word: 'sonst',
      desc: "Adverb meaning 'else', used to indicate what is different or additional.",
      examples: [
        {
          sentence: 'Wenn du nicht kommst, muss ich sonst jemanden fragen.',
          translation: "If you don't come, I'll have to ask someone else.",
        },
        {
          sentence: 'Ich habe keine Zeit, sonst würde ich gerne mitkommen.',
          translation:
            "I don't have time, otherwise I would love to come along.",
        },
        {
          sentence: 'Ist da noch jemand? Sonst kann ich die Tür schließen.',
          translation: 'Is anyone else there? Otherwise, I can close the door.',
        },
        {
          sentence:
            'Ich dachte, du wolltest Tee, aber ich kann sonst Kaffee machen.',
          translation:
            'I thought you wanted tea, but otherwise I can make coffee.',
        },
        {
          sentence:
            'Hast du noch etwas anderes geplant? Sonst könnten wir zusammen ins Kino gehen.',
          translation:
            'Do you have anything else planned? Otherwise, we could go to the movies together.',
        },
      ],
    },
    {
      word: 'ganz',
      desc: "Adverb meaning 'quite', to the utmost extent; completely.",
      examples: [
        {
          sentence: 'Ich fühle mich heute ganz müde.',
          translation: 'I feel quite tired today.',
        },
        {
          sentence: 'Das war ganz schön von dir.',
          translation: 'That was quite nice of you.',
        },
        {
          sentence: 'Das ist ganz einfach.',
          translation: 'That is quite simple.',
        },
        {
          sentence: 'Wir hatten einen ganz besonderen Abend.',
          translation: 'We had a quite special evening.',
        },
        {
          sentence: 'Er war ganz überrascht von ihrem Besuch.',
          translation: 'He was quite surprised by her visit.',
        },
      ],
    },
    {
      word: 'pleite',
      desc: "Adjective meaning 'broke', having completely run out of money.",
      examples: [
        {
          sentence: 'Nach dem Urlaub war er pleite.',
          translation: 'After the vacation, he was broke.',
        },
        {
          sentence: 'Sie ist pleite und kann die Miete nicht bezahlen.',
          translation: "She is broke and can't pay the rent.",
        },
        {
          sentence: 'Wenn du so weitermachst, bist du bald pleite.',
          translation: "If you keep going like this, you'll be broke soon.",
        },
        {
          sentence:
            'Ich bin diesen Monat pleite, aber nächsten Monat werde ich wieder Geld haben.',
          translation:
            "I'm broke this month, but next month I'll have money again.",
        },
        {
          sentence: 'Er war pleite und musste sich Geld leihen.',
          translation: 'He was broke and had to borrow money.',
        },
      ],
    },
    {
      word: 'Fall',
      desc: "Noun meaning 'case', an instance of a particular situation; an example of something occurring.",
      examples: [
        {
          sentence: 'In diesem Fall müssen wir eine andere Lösung finden.',
          translation: 'In this case, we need to find another solution.',
        },
        {
          sentence: 'Im schlimmsten Fall müssen wir das Projekt abbrechen.',
          translation: "In the worst case, we'll have to cancel the project.",
        },
        {
          sentence: 'Das ist ein klarer Fall von Betrug.',
          translation: "That's a clear case of fraud.",
        },
        {
          sentence: 'Ich habe einen Fall von Lebensmittelvergiftung gemeldet.',
          translation: 'I reported a case of food poisoning.',
        },
        {
          sentence: 'Im Falle eines Notfalls sollten Sie den Notruf wählen.',
          translation:
            'In case of an emergency, you should call emergency services.',
        },
      ],
    },
    {
      word: 'Mitte',
      desc: "Noun meaning 'middle', the point or position at an equal distance from the sides, edges, or ends of something.",
      examples: [
        {
          sentence: 'Er stand in der Mitte des Raumes.',
          translation: 'He stood in the middle of the room.',
        },
        {
          sentence: 'Die Linie geht genau durch die Mitte des Kreises.',
          translation: 'The line goes right through the center of the circle.',
        },
        {
          sentence: 'Wir haben uns in der Mitte des Weges getroffen.',
          translation: 'We met in the middle of the path.',
        },
        {
          sentence: 'Der Ball landete genau in der Mitte des Tores.',
          translation: 'The ball landed right in the middle of the goal.',
        },
        {
          sentence: 'Sie erreichten die Mitte des Berges vor Sonnenuntergang.',
          translation: 'They reached the middle of the mountain before sunset.',
        },
      ],
    },
    {
      word: 'töten',
      desc: "Verb meaning 'kill', cause the death of (a person, animal, or other living thing).",
      examples: [
        {
          sentence: 'Die Jäger töten Tiere für ihr Fleisch.',
          translation: 'The hunters kill animals for their meat.',
        },
        {
          sentence: 'Der Unfall hat drei Menschen getötet.',
          translation: 'The accident killed three people.',
        },
        {
          sentence:
            'Sie versuchten, die Krankheit zu töten, indem sie Antibiotika einnahmen.',
          translation: 'They tried to kill the disease by taking antibiotics.',
        },
        {
          sentence: 'Die Schlange hat die Maus getötet und gefressen.',
          translation: 'The snake killed and ate the mouse.',
        },
        {
          sentence:
            'Er wurde getötet, als er versuchte, den Bären zu vertreiben.',
          translation: 'He was killed when he tried to drive away the bear.',
        },
      ],
    },
    {
      word: 'Sohn',
      desc: "Noun meaning 'son', a boy or man in relation to either or both of his parents.",
      examples: [
        {
          sentence:
            'Sein Sohn ist bereits erwachsen und lebt jetzt im Ausland.',
          translation: 'His son is already grown up and now lives abroad.',
        },
        {
          sentence: 'Der Sohn des Königs wird eines Tages den Thron besteigen.',
          translation: "The king's son will one day ascend the throne.",
        },
        {
          sentence:
            'Er ist stolz auf seinen Sohn, der ein begabter Musiker ist.',
          translation: 'He is proud of his son, who is a talented musician.',
        },
        {
          sentence:
            'Der Sohn folgte den Fußstapfen seines Vaters und wurde Arzt.',
          translation:
            "The son followed in his father's footsteps and became a doctor.",
        },
        {
          sentence: 'Sein Sohn wurde in derselben Stadt geboren wie er selbst.',
          translation: 'His son was born in the same city as he was.',
        },
      ],
    },
    {
      word: 'See',
      desc: "Noun meaning 'lake', a large body of water surrounded by land.",
      examples: [
        {
          sentence: 'Wir machten einen Ausflug zum See und mieteten ein Boot.',
          translation: 'We took a trip to the lake and rented a boat.',
        },
        {
          sentence:
            'Der See war so ruhig, dass man sein eigenes Echo hören konnte.',
          translation:
            'The lake was so calm that you could hear your own echo.',
        },
        {
          sentence:
            'Die Kinder spielten am Ufer des Sees und bauten Sandburgen.',
          translation:
            'The children played on the shore of the lake and built sandcastles.',
        },
        {
          sentence:
            'Im Sommer gehen viele Leute zum See, um zu schwimmen und zu angeln.',
          translation:
            'In summer, many people go to the lake to swim and fish.',
        },
        {
          sentence:
            'Der See erstreckte sich bis zum Horizont und wirkte endlos.',
          translation: 'The lake stretched to the horizon and seemed endless.',
        },
      ],
    },
    {
      word: 'Moment',
      desc: "Noun meaning 'moment', a very brief period of time.",
      examples: [
        {
          sentence: 'Warten Sie einen Moment, ich komme gleich wieder.',
          translation: "Wait a moment, I'll be right back.",
        },
        {
          sentence:
            'Dieser Moment wird für immer in meinem Gedächtnis bleiben.',
          translation: 'This moment will stay in my memory forever.',
        },
        {
          sentence: 'Kann ich einen Moment Ihrer Zeit haben?',
          translation: 'Can I have a moment of your time?',
        },
        {
          sentence: 'Ein einziger Moment kann das Leben für immer verändern.',
          translation: 'A single moment can change life forever.',
        },
        {
          sentence:
            'Es war ein magischer Moment, als sie sich das erste Mal trafen.',
          translation:
            'It was a magical moment when they met for the first time.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Maßstab, laut, Frühling, beobachten, Kind, gerade, Konsonant, Nation, Wörterbuch, milch',
  words: [
    {
      word: 'Maßstab',
      desc: 'Noun meaning "scale", a graduated range of values forming a standard for measuring.',
      examples: [
        {
          sentence: 'Die Karte hat einen Maßstab von 1:1000.',
          translation: 'The map has a scale of 1:1000.',
        },
        {
          sentence:
            'Der Maßstab des Modells stimmt nicht mit dem Original überein.',
          translation: "The scale of the model doesn't match the original.",
        },
        {
          sentence: 'Wir müssen den Maßstab des Diagramms ändern.',
          translation: 'We need to change the scale of the diagram.',
        },
        {
          sentence: 'Die Entfernung wurde auf dem Maßstab abgelesen.',
          translation: 'The distance was read on the scale.',
        },
        {
          sentence: 'Der Maßstab ist in Metern pro Zentimeter angegeben.',
          translation: 'The scale is given in meters per centimeter.',
        },
      ],
    },
    {
      word: 'laut',
      desc: 'Adjective meaning "loud", producing or capable of producing much noise.',
      examples: [
        {
          sentence: 'Die Musik war zu laut für die Nachbarn.',
          translation: 'The music was too loud for the neighbors.',
        },
        {
          sentence: 'Sie sprach laut, damit jeder sie hören konnte.',
          translation: 'She spoke loudly so that everyone could hear her.',
        },
        {
          sentence:
            'Die Explosion war so laut, dass es die Fenster erschütterte.',
          translation: 'The explosion was so loud that it shook the windows.',
        },
        {
          sentence:
            'Der laute Verkehr machte es schwierig, sich zu konzentrieren.',
          translation: 'The loud traffic made it difficult to concentrate.',
        },
        {
          sentence: 'Das laute Lachen war in der ganzen Halle zu hören.',
          translation: 'The loud laughter could be heard throughout the hall.',
        },
      ],
    },
    {
      word: 'Frühling',
      desc: 'Noun meaning "spring", the season after winter and before summer.',
      examples: [
        {
          sentence: 'Im Frühling blühen die Blumen und die Bäume werden grün.',
          translation: 'In spring, the flowers bloom and the trees turn green.',
        },
        {
          sentence:
            'Der Frühling ist meine Lieblingsjahreszeit, weil alles wieder zum Leben erwacht.',
          translation:
            'Spring is my favorite season because everything comes back to life.',
        },
        {
          sentence: 'Im Frühling genießen viele Leute Spaziergänge im Park.',
          translation: 'In spring, many people enjoy walks in the park.',
        },
        {
          sentence:
            'Wir freuen uns alle auf den Frühling nach einem kalten Winter.',
          translation: 'We all look forward to spring after a cold winter.',
        },
        {
          sentence: 'Im Frühling verbringen wir viel Zeit im Freien.',
          translation: 'In spring, we spend a lot of time outdoors.',
        },
      ],
    },
    {
      word: 'beobachten',
      desc: 'Verb meaning "observe", to notice or perceive (something) and register it as being significant.',
      examples: [
        {
          sentence:
            'Wir konnten die Vögel beobachten, wie sie ihre Nester bauten.',
          translation: 'We watched the birds as they built their nests.',
        },
        {
          sentence: 'Der Detektiv beobachtete den Verdächtigen unauffällig.',
          translation: 'The detective discreetly observed the suspect.',
        },
        {
          sentence:
            'Die Wissenschaftler beobachteten das Verhalten der Affen im Labor.',
          translation:
            'The scientists observed the behavior of the monkeys in the laboratory.',
        },
        {
          sentence: 'Sie beobachtete den Sonnenuntergang vom Balkon aus.',
          translation: 'She watched the sunset from the balcony.',
        },
        {
          sentence: 'Die Eltern beobachteten ihre Kinder beim Spielen im Park.',
          translation:
            'The parents watched their children playing in the park.',
        },
      ],
    },
    {
      word: 'Kind',
      desc: 'Noun meaning "child", a young human being below the age of puberty or below the legal age of majority.',
      examples: [
        {
          sentence: 'Das Kind lachte fröhlich und spielte im Garten.',
          translation: 'The child laughed happily and played in the garden.',
        },
        {
          sentence: 'Die Mutter brachte das Kind zur Schule.',
          translation: 'The mother took the child to school.',
        },
        {
          sentence: 'Das Kind hatte Angst vor dem dunklen Raum.',
          translation: 'The child was afraid of the dark room.',
        },
        {
          sentence: 'Das Kind umarmte seinen Teddybären fest.',
          translation: 'The child hugged its teddy bear tightly.',
        },
        {
          sentence:
            'Das Kind sang ein Lied, während es auf dem Schaukelstuhl saß.',
          translation:
            'The child sang a song while sitting on the rocking chair.',
        },
      ],
    },
    {
      word: 'gerade',
      desc: 'Adjective meaning "straight", extending or moving uniformly in one direction only without curving or bending.',
      examples: [
        {
          sentence:
            'Die Straße war lang und gerade, mit Blick auf die endlose Landschaft.',
          translation:
            'The road was long and straight, overlooking the endless landscape.',
        },
        {
          sentence: 'Die Tischplatte war glatt und gerade.',
          translation: 'The tabletop was smooth and straight.',
        },
        {
          sentence: 'Sie richtete das Gemälde gerade an der Wand aus.',
          translation: 'She straightened the painting on the wall.',
        },
        {
          sentence: 'Der Mann stand kerzengerade und salutierte.',
          translation: 'The man stood perfectly straight and saluted.',
        },
        {
          sentence: 'Das Kleid hat einen einfachen, geraden Schnitt.',
          translation: 'The dress has a simple, straight cut.',
        },
      ],
    },
    {
      word: 'Konsonant',
      desc: 'Noun meaning "consonant", a basic speech sound in which the breath is at least partly obstructed and which can be combined with a vowel to form a syllable.',
      examples: [
        {
          sentence: 'Das deutsche Alphabet hat 21 Konsonanten.',
          translation: 'The German alphabet has 21 consonants.',
        },
        {
          sentence: 'Der Buchstabe "B" ist ein Konsonant.',
          translation: 'The letter "B" is a consonant.',
        },
        {
          sentence:
            'Die Aussprache des Konsonanten "G" ist unterschiedlich in verschiedenen Wörtern.',
          translation:
            'The pronunciation of the consonant "G" varies in different words.',
        },
        {
          sentence:
            'Ein Wort muss mindestens einen Vokal oder einen Konsonanten enthalten.',
          translation:
            'A word must contain at least one vowel or one consonant.',
        },
        {
          sentence:
            'Manche Menschen finden es schwer, Konsonanten auszusprechen, die im Deutschen nicht in ihrer Muttersprache vorkommen.',
          translation:
            'Some people find it difficult to pronounce consonants that do not exist in their native language.',
        },
      ],
    },
    {
      word: 'Nation',
      desc: 'Noun meaning "nation", a large body of people united by common descent, history, culture, or language, inhabiting a particular country or territory.',
      examples: [
        {
          sentence:
            'Die Vereinigten Staaten sind eine Nation, die aus 50 Bundesstaaten besteht.',
          translation: 'The United States is a nation composed of 50 states.',
        },
        {
          sentence:
            'Die deutsche Nation feiert den Tag der Deutschen Einheit am 3. Oktober.',
          translation:
            'The German nation celebrates German Unity Day on October 3rd.',
        },
        {
          sentence:
            'Die japanische Nation hat eine reiche kulturelle Geschichte.',
          translation: 'The Japanese nation has a rich cultural history.',
        },
        {
          sentence:
            'Die indigene Nation kämpft um den Schutz ihrer traditionellen Ländereien.',
          translation:
            'The indigenous nation is fighting to protect their traditional lands.',
        },
        {
          sentence: 'Jede Nation hat ihre eigenen Bräuche und Traditionen.',
          translation: 'Every nation has its own customs and traditions.',
        },
      ],
    },
    {
      word: 'Wörterbuch',
      desc: 'Noun meaning "dictionary", a book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage.',
      examples: [
        {
          sentence:
            'Ich benutze regelmäßig ein Wörterbuch, um neue Vokabeln nachzuschlagen.',
          translation:
            'I regularly use a dictionary to look up new vocabulary.',
        },
        {
          sentence:
            'Ein Wörterbuch kann bei der Übersetzung von Fremdsprachen sehr hilfreich sein.',
          translation:
            'A dictionary can be very helpful for translating foreign languages.',
        },
        {
          sentence:
            'Das Wörterbuch enthält Definitionen, Beispiele und grammatikalische Informationen.',
          translation:
            'The dictionary contains definitions, examples, and grammatical information.',
        },
        {
          sentence:
            'Kinder können ein Bilderwörterbuch verwenden, um neue Wörter zu lernen.',
          translation:
            'Children can use a picture dictionary to learn new words.',
        },
        {
          sentence:
            'Online-Wörterbücher bieten oft eine schnellere und einfachere Möglichkeit, Wörter nachzuschlagen.',
          translation:
            'Online dictionaries often provide a faster and easier way to look up words.',
        },
      ],
    },
    {
      word: 'milch',
      desc: 'Noun meaning "milk", the white liquid produced by the mammary glands of mammals as food for their young.',
      examples: [
        {
          sentence: 'Ich trinke jeden Morgen ein Glas Milch zum Frühstück.',
          translation: 'I drink a glass of milk every morning for breakfast.',
        },
        {
          sentence: 'Die Kuh gibt täglich mehrere Liter Milch.',
          translation: 'The cow produces several liters of milk daily.',
        },
        {
          sentence: 'Milchprodukte wie Käse und Joghurt sind reich an Kalzium.',
          translation:
            'Dairy products like cheese and yogurt are rich in calcium.',
        },
        {
          sentence: 'Für Babys ist Muttermilch die beste Nahrung.',
          translation: 'For babies, breast milk is the best food.',
        },
        {
          sentence:
            'Einige Menschen haben eine Milchunverträglichkeit und können keine Milchprodukte konsumieren.',
          translation:
            'Some people have a lactose intolerance and cannot consume dairy products.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Geschwindigkeit, Verfahren, Orgel, zahlen, Alter, Abschnitt, Kleid, Wolke, Überraschung, ruhig',
  words: [
    {
      word: 'Geschwindigkeit',
      desc: "Noun meaning 'speed', the rate at which someone or something is able to move or operate.",
      examples: [
        {
          sentence: 'Die Geschwindigkeit des Autos betrug mehr als 200 km/h.',
          translation: 'The speed of the car was over 200 km/h.',
        },
        {
          sentence:
            'Die Geschwindigkeit des Internets beeinflusst die Ladezeiten von Webseiten.',
          translation:
            'The speed of the internet affects the loading times of web pages.',
        },
        {
          sentence:
            'Die Geschwindigkeit eines Projekts hängt von der Effizienz der Teammitglieder ab.',
          translation:
            'The speed of a project depends on the efficiency of the team members.',
        },
        {
          sentence:
            'Die Geschwindigkeit eines Zuges wird durch verschiedene Faktoren wie die Gleislänge und die Motorleistung bestimmt.',
          translation:
            'The speed of a train is determined by various factors such as track length and engine power.',
        },
        {
          sentence:
            'Für die Sicherheit ist es wichtig, die Geschwindigkeitsbegrenzungen auf der Straße einzuhalten.',
          translation:
            'For safety, it is important to adhere to the speed limits on the road.',
        },
      ],
    },
    {
      word: 'Verfahren',
      desc: "Noun meaning 'method', a particular way of doing something, especially a systematic or established one.",
      examples: [
        {
          sentence:
            'Das Verfahren zur Herstellung von Papier hat sich im Laufe der Zeit stark verändert.',
          translation:
            'The method for producing paper has changed significantly over time.',
        },
        {
          sentence:
            'Ein effizientes Verfahren zur Fehlerbehebung kann die Produktivität erhöhen.',
          translation:
            'An efficient method for troubleshooting can increase productivity.',
        },
        {
          sentence:
            'In der Medizin werden verschiedene Verfahren zur Diagnose und Behandlung von Krankheiten eingesetzt.',
          translation:
            'In medicine, various methods are used for diagnosing and treating illnesses.',
        },
        {
          sentence:
            'Das Verfahren zur Erlangung eines Führerscheins umfasst theoretische und praktische Prüfungen.',
          translation:
            "The process of obtaining a driver's license involves both theoretical and practical exams.",
        },
        {
          sentence:
            'Ein gutes Verfahren zur Problemlösung kann dazu beitragen, Konflikte zu vermeiden.',
          translation:
            'A good method for problem-solving can help avoid conflicts.',
        },
      ],
    },
    {
      word: 'Orgel',
      desc: "Noun meaning 'organ', a large musical instrument having rows of tuned pipes sounded by compressed air, and played using one or more keyboards to produce a wide range of musical sounds.",
      examples: [
        {
          sentence:
            'Die Orgel in der Kirche wurde von einem berühmten Orgelbauer gebaut.',
          translation:
            'The organ in the church was built by a famous organ builder.',
        },
        {
          sentence:
            'Die Orgel ist ein wichtiges Instrument in der klassischen Musik.',
          translation:
            'The organ is an important instrument in classical music.',
        },
        {
          sentence:
            'Der Organist spielte eine beeindruckende Melodie auf der Orgel während der Hochzeit.',
          translation:
            'The organist played an impressive melody on the organ during the wedding.',
        },
        {
          sentence: 'Die Orgel ist für ihre majestätischen Klänge bekannt.',
          translation: 'The organ is known for its majestic sounds.',
        },
        {
          sentence:
            'Eine große Orgel kann Tausende von Pfeifen haben, die verschiedene Töne erzeugen können.',
          translation:
            'A large organ can have thousands of pipes that can produce various tones.',
        },
      ],
    },
    {
      word: 'zahlen',
      desc: "Verb meaning 'pay', to give someone money that is owed for goods received, services rendered, or a debt incurred.",
      examples: [
        {
          sentence: 'Können Sie bitte bar zahlen?',
          translation: 'Can you please pay in cash?',
        },
        {
          sentence: 'Ich werde die Rechnung später zahlen.',
          translation: 'I will pay the bill later.',
        },
        {
          sentence: 'Sie können online mit Kreditkarte zahlen.',
          translation: 'You can pay online with a credit card.',
        },
        {
          sentence: 'Ich habe gestern die Miete für die Wohnung gezahlt.',
          translation: 'I paid the rent for the apartment yesterday.',
        },
        {
          sentence:
            'Er musste eine hohe Strafe zahlen, weil er zu schnell gefahren ist.',
          translation:
            'He had to pay a high fine because he was driving too fast.',
        },
      ],
    },
    {
      word: 'Alter',
      desc: "Noun meaning 'age', the length of time that a person has lived or a thing has existed.",
      examples: [
        {
          sentence:
            'Das Alter einer Person wird oft anhand ihres Geburtsdatums berechnet.',
          translation:
            "A person's age is often calculated based on their date of birth.",
        },
        {
          sentence:
            'Im Alter von 18 Jahren wird man in vielen Ländern volljährig.',
          translation:
            'At the age of 18, one becomes an adult in many countries.',
        },
        {
          sentence:
            'Mit zunehmendem Alter ändern sich oft die Interessen und Vorlieben einer Person.',
          translation:
            "With increasing age, a person's interests and preferences often change.",
        },
        {
          sentence:
            'Das Alter eines Baumes kann anhand seiner Jahresringe bestimmt werden.',
          translation:
            'The age of a tree can be determined by its annual rings.',
        },
        {
          sentence:
            'In einigen Kulturen wird das Alter als Zeichen der Weisheit angesehen.',
          translation: 'In some cultures, age is seen as a sign of wisdom.',
        },
      ],
    },
    {
      word: 'Abschnitt',
      desc: "Noun meaning 'section', a distinct part or portion of something written, printed, or spoken, such as a book, newspaper, or speech.",
      examples: [
        {
          sentence:
            'Der erste Abschnitt des Buches führt die Hauptfiguren ein.',
          translation:
            'The first section of the book introduces the main characters.',
        },
        {
          sentence:
            'In unserem Gespräch konzentrierten wir uns hauptsächlich auf den Abschnitt über die Finanzen.',
          translation:
            'In our discussion, we mainly focused on the section about finances.',
        },
        {
          sentence:
            'Der Abschnitt über die Geschichte des Landes war besonders interessant.',
          translation:
            "The section about the country's history was particularly interesting.",
        },
        {
          sentence:
            'Im dritten Abschnitt des Films erreicht die Handlung ihren Höhepunkt.',
          translation:
            'In the third section of the movie, the plot reaches its climax.',
        },
        {
          sentence:
            'Die Lehrerin bat die Schüler, den Abschnitt leise zu lesen.',
          translation:
            'The teacher asked the students to read the section quietly.',
        },
      ],
    },
    {
      word: 'Kleid',
      desc: "Noun meaning 'dress', a one-piece garment for a woman or girl that covers the body and extends down over the legs.",
      examples: [
        {
          sentence: 'Sie trug ein elegantes Kleid zur Party.',
          translation: 'She wore an elegant dress to the party.',
        },
        {
          sentence: 'Das Kleid hatte eine schöne Blumenmusterung.',
          translation: 'The dress had a beautiful floral pattern.',
        },
        {
          sentence: 'Das Hochzeitskleid war mit Spitze verziert.',
          translation: 'The wedding dress was adorned with lace.',
        },
        {
          sentence: 'Sie entschied sich für ein rotes Kleid für das Fest.',
          translation: 'She opted for a red dress for the celebration.',
        },
        {
          sentence:
            'Das Kleidungsstück ist nicht nur modisch, sondern auch bequem.',
          translation:
            'The garment is not only fashionable but also comfortable.',
        },
      ],
    },
    {
      word: 'Wolke',
      desc: "Noun meaning 'cloud', a visible mass of condensed water vapor floating in the atmosphere, typically high above the ground.",
      examples: [
        {
          sentence: 'Die Sonne brach durch die Wolken und erhellte den Himmel.',
          translation:
            'The sun broke through the clouds and illuminated the sky.',
        },
        {
          sentence:
            'Es gibt verschiedene Arten von Wolkenformationen, darunter Cumulus, Stratus und Cirrus.',
          translation:
            'There are different types of cloud formations, including cumulus, stratus, and cirrus.',
        },
        {
          sentence:
            'Einige Menschen glauben, dass sie Formen und Figuren in den Wolken erkennen können.',
          translation:
            'Some people believe they can see shapes and figures in the clouds.',
        },
        {
          sentence:
            'Der Himmel war bedeckt, und dunkle Wolken kündigten einen bevorstehenden Sturm an.',
          translation:
            'The sky was overcast, and dark clouds heralded an impending storm.',
        },
        {
          sentence:
            'Es war ein warmer Tag, aber eine leichte Brise trieb die Wolken vorüber.',
          translation:
            'It was a warm day, but a gentle breeze moved the clouds along.',
        },
      ],
    },
    {
      word: 'Überraschung',
      desc: "Noun meaning 'surprise', an unexpected or astonishing event, fact, or thing.",
      examples: [
        {
          sentence:
            'Sie bereiteten ihm eine Überraschungsparty zum Geburtstag vor.',
          translation: 'They prepared a surprise party for his birthday.',
        },
        {
          sentence:
            'Die Ankündigung des neuen Produkts kam für die Kunden völlig überraschend.',
          translation:
            'The announcement of the new product came as a complete surprise to the customers.',
        },
        {
          sentence:
            'Sein plötzlicher Besuch war eine angenehme Überraschung für sie.',
          translation: 'His sudden visit was a pleasant surprise for her.',
        },
        {
          sentence:
            'Die Reaktion des Publikums auf die Enthüllung war ein Ausdruck echter Überraschung.',
          translation:
            "The audience's reaction to the unveiling was a display of genuine surprise.",
        },
        {
          sentence:
            'Die Kinder können es kaum erwarten, ihre Weihnachtsgeschenke zu öffnen und die Überraschungen darin zu entdecken.',
          translation:
            "The children can't wait to open their Christmas presents and discover the surprises inside.",
        },
      ],
    },
    {
      word: 'ruhig',
      desc: "Adjective meaning 'quiet', making very little noise or sound.",
      examples: [
        {
          sentence: 'Bitte sei ruhig, ich versuche zu arbeiten.',
          translation: "Please be quiet, I'm trying to work.",
        },
        {
          sentence:
            'Die Bibliothek ist ein Ort der Ruhe, wo man in Stille lesen und lernen kann.',
          translation:
            'The library is a place of quiet where one can read and study in silence.',
        },
        {
          sentence: 'Es war eine ruhige Nacht, ohne Lärm von draußen.',
          translation: 'It was a quiet night, with no noise from outside.',
        },
        {
          sentence:
            'Der Wald ist ein ruhiger Ort, an dem man dem Gesang der Vögel lauschen kann.',
          translation:
            'The forest is a quiet place where one can listen to the singing of birds.',
        },
        {
          sentence:
            'Nach einem langen Tag sehnte sie sich nach Ruhe und Entspannung zu Hause.',
          translation:
            'After a long day, she longed for peace and relaxation at home.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Stein, winzig, Aufstieg, kühlen, Entwurf, arm, Menge, Versuch, Boden, Schlüssel',
  words: [
    {
      word: 'Stein',
      desc: "Noun meaning 'stone', a hard solid non-metallic mineral matter of which rock is made, especially as a building material.",
      examples: [
        {
          sentence: 'Er hob einen großen Stein auf und warf ihn ins Wasser.',
          translation:
            'He picked up a large stone and threw it into the water.',
        },
        {
          sentence: 'Das Haus wurde aus lokalem Stein gebaut.',
          translation: 'The house was built from local stone.',
        },
        {
          sentence: 'Der Garten war mit Steinen und Kieselsteinen dekoriert.',
          translation: 'The garden was decorated with rocks and pebbles.',
        },
        {
          sentence:
            'Die Wand war mit einem Mosaik aus bunten Steinen verziert.',
          translation: 'The wall was adorned with a mosaic of colorful stones.',
        },
        {
          sentence: 'Sie saß auf einem warmen Stein in der Sonne.',
          translation: 'She sat on a warm stone in the sun.',
        },
      ],
    },
    {
      word: 'winzig',
      desc: "Adjective meaning 'tiny', very small in size or amount.",
      examples: [
        {
          sentence: 'Ein winziger Vogel landete auf dem Fenstersims.',
          translation: 'A tiny bird landed on the windowsill.',
        },
        {
          sentence: 'Sie trug eine winzige Brosche an ihrem Kleid.',
          translation: 'She wore a tiny brooch on her dress.',
        },
        {
          sentence: 'Es gibt winzige Lebewesen, die im Boden leben.',
          translation: 'There are tiny organisms that live in the soil.',
        },
        {
          sentence:
            'Die Schrift auf dem Etikett war winzig und schwer zu lesen.',
          translation:
            'The writing on the label was tiny and difficult to read.',
        },
        {
          sentence:
            'Er verlor seine winzige Brieftasche und konnte sie nicht wiederfinden.',
          translation: "He lost his tiny wallet and couldn't find it again.",
        },
      ],
    },
    {
      word: 'Aufstieg',
      desc: "Noun meaning 'climb', the act of moving upward, especially by using the feet and sometimes the hands.",
      examples: [
        {
          sentence:
            'Der steile Aufstieg zum Gipfel war anstrengend, aber lohnenswert.',
          translation:
            'The steep climb to the summit was exhausting but rewarding.',
        },
        {
          sentence:
            'Der Aufstieg des jungen Kletterers zur Spitze des Berges dauerte mehrere Stunden.',
          translation:
            "The young climber's ascent to the top of the mountain took several hours.",
        },
        {
          sentence:
            'Sie machten einen steilen Aufstieg auf den Turm, um die Aussicht von oben zu genießen.',
          translation:
            'They made a steep climb up the tower to enjoy the view from above.',
        },
        {
          sentence:
            'Der Aufstieg des Unternehmens zu einem weltweit führenden Anbieter war ein langer Prozess.',
          translation:
            "The company's rise to become a leading global provider was a lengthy process.",
        },
        {
          sentence:
            'Der Aufstieg auf den Baum war schwierig, aber der Junge schaffte es schließlich.',
          translation:
            'The climb up the tree was difficult, but the boy managed it in the end.',
        },
      ],
    },
    {
      word: 'kühlen',
      desc: "Verb meaning 'cool', make or become cooler.",
      examples: [
        {
          sentence:
            'Sie stellte das Getränk in den Kühlschrank, um es zu kühlen.',
          translation: 'She put the drink in the fridge to cool it down.',
        },
        {
          sentence: 'Der leichte Wind kühlte die heiße Haut.',
          translation: 'The gentle breeze cooled the hot skin.',
        },
        {
          sentence: 'Er öffnete das Fenster, um den Raum zu kühlen.',
          translation: 'He opened the window to cool the room.',
        },
        {
          sentence: 'Die kühle Brise vom Meer erfrischte die Strandbesucher.',
          translation: 'The cool breeze from the sea refreshed the beachgoers.',
        },
        {
          sentence:
            'Der kühle Schatten des Baumes bot willkommene Erleichterung.',
          translation: 'The cool shade of the tree provided welcome relief.',
        },
      ],
    },
    {
      word: 'Entwurf',
      desc: "Noun meaning 'design', a plan or drawing produced to show the look and function or workings of a building, garment, or other object before it is built or made.",
      examples: [
        {
          sentence: 'Der Architekt zeichnete den Entwurf für das neue Gebäude.',
          translation: 'The architect drew up the design for the new building.',
        },
        {
          sentence:
            'Sie erstellte einen detaillierten Entwurf für ihr neues Kleid.',
          translation: 'She created a detailed design for her new dress.',
        },
        {
          sentence:
            'Der Ingenieur präsentierte den Entwurf des neuen Brückenkonzepts.',
          translation:
            'The engineer presented the design for the new bridge concept.',
        },
        {
          sentence:
            'Das Team diskutierte verschiedene Entwürfe für das Logo der Firma.',
          translation:
            'The team discussed various designs for the company logo.',
        },
        {
          sentence:
            'Der Entwurf des Gartens umfasste blühende Pflanzen und einen kleinen Teich.',
          translation:
            'The garden design included flowering plants and a small pond.',
        },
      ],
    },
    {
      word: 'arm',
      desc: "Adjective meaning 'poor', lacking sufficient money to live at a standard considered comfortable or normal in a society.",
      examples: [
        {
          sentence:
            'Die Familie lebte in einem kleinen, aber ärmlichen Haus am Rande der Stadt.',
          translation:
            'The family lived in a small but poor house on the outskirts of the city.',
        },
        {
          sentence:
            'Trotz ihrer ärmlichen Verhältnisse halfen sie anderen in Not.',
          translation:
            'Despite their poor circumstances, they helped others in need.',
        },
        {
          sentence:
            'Er wuchs in ärmlichen Verhältnissen auf, aber er kämpfte sich hoch.',
          translation:
            'He grew up in poor conditions, but he fought his way up.',
        },
        {
          sentence: 'Die arme Familie konnte sich keine Ferien leisten.',
          translation: "The poor family couldn't afford vacations.",
        },
        {
          sentence:
            'Viele Menschen in diesem Land leben in ärmlichen Verhältnissen.',
          translation: 'Many people in this country live in poor conditions.',
        },
      ],
    },
    {
      word: 'Menge',
      desc: "Noun meaning 'lot', a large amount or number of something.",
      examples: [
        {
          sentence: 'Es gab eine Menge Leute auf der Party.',
          translation: 'There were a lot of people at the party.',
        },
        {
          sentence:
            'Eine große Menge an Informationen wurde im Bericht präsentiert.',
          translation:
            'A large amount of information was presented in the report.',
        },
        {
          sentence: 'Die Kinder sammelten eine Menge Muscheln am Strand.',
          translation: 'The children collected a lot of shells on the beach.',
        },
        {
          sentence: 'Es gab eine Menge Probleme während des Bauprojekts.',
          translation:
            'There were a lot of problems during the construction project.',
        },
        {
          sentence:
            'Eine beträchtliche Menge Geld wurde für die Renovierung ausgegeben.',
          translation:
            'A considerable amount of money was spent on the renovation.',
        },
      ],
    },
    {
      word: 'Versuch',
      desc: "Noun meaning 'attempt', an effort to do or accomplish something.",
      examples: [
        {
          sentence: 'Sie unternahm mehrere Versuche, das Problem zu lösen.',
          translation: 'She made several attempts to solve the problem.',
        },
        {
          sentence:
            'Sein erster Versuch, das Gedicht auswendig zu lernen, war nicht erfolgreich.',
          translation:
            'His first attempt to memorize the poem was unsuccessful.',
        },
        {
          sentence:
            'Nach mehreren Versuchen gelang es ihm endlich, die Tür zu öffnen.',
          translation:
            'After several attempts, he finally managed to open the door.',
        },
        {
          sentence:
            'Der Versuch, den Weltrekord zu brechen, war ein ehrgeiziges Unterfangen.',
          translation:
            'The attempt to break the world record was an ambitious endeavor.',
        },
        {
          sentence:
            'Der Versuch, die Situation zu verbessern, erforderte viel Geduld und Ausdauer.',
          translation:
            'The attempt to improve the situation required a lot of patience and perseverance.',
        },
      ],
    },
    {
      word: 'Boden',
      desc: "Noun meaning 'bottom', the solid surface of the earth.",
      examples: [
        {
          sentence: 'Die Kinder spielten im Sand am Boden des Parks.',
          translation:
            'The children played in the sand on the bottom of the park.',
        },
        {
          sentence: 'Der Boden war mit bunten Blättern bedeckt.',
          translation: 'The ground was covered with colorful leaves.',
        },
        {
          sentence: 'Sie fühlte die Wärme des Bodens durch ihre Schuhe.',
          translation: 'She felt the warmth of the ground through her shoes.',
        },
        {
          sentence:
            'Das Haus wurde auf festem Boden gebaut, um Stabilität zu gewährleisten.',
          translation:
            'The house was built on solid ground to ensure stability.',
        },
        {
          sentence:
            'Die Pflanzen wurzelten tief im Boden, um Nährstoffe zu erhalten.',
          translation:
            'The plants rooted deeply in the soil to obtain nutrients.',
        },
      ],
    },
    {
      word: 'Schlüssel',
      desc: "Noun meaning 'key', a small piece of shaped metal with incisions cut to fit the wards of a particular lock, which is inserted into a lock and turned to open or close it.",
      examples: [
        {
          sentence:
            'Er steckte den Schlüssel ins Schloss und drehte ihn langsam.',
          translation:
            'He inserted the key into the lock and turned it slowly.',
        },
        {
          sentence:
            'Sie verlor ihren Haustürschlüssel und musste einen Ersatz anfertigen lassen.',
          translation:
            'She lost her front door key and had to have a replacement made.',
        },
        {
          sentence:
            'Der Schlüssel passte nicht in das Schloss und musste angepasst werden.',
          translation: "The key didn't fit the lock and needed to be adjusted.",
        },
        {
          sentence:
            'Er hielt den Schlüssel fest in seiner Hand und öffnete die Tür.',
          translation:
            'He held the key tightly in his hand and opened the door.',
        },
        {
          sentence:
            'Der Schlüssel zum Erfolg lag in harter Arbeit und Entschlossenheit.',
          translation: 'The key to success lay in hard work and determination.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Eisen, Einzel, Stick, Wohnung, zwanzig, Haut, Lächeln, Falte, Loch, springen',
  words: [
    {
      word: 'Eisen',
      desc: "Noun meaning 'iron', a strong, hard magnetic silvery-gray metal, the chemical element of atomic number 26.",
      examples: [
        {
          sentence:
            'Das Werkzeug war aus Eisen gefertigt, um es robust und langlebig zu machen.',
          translation:
            'The tool was made of iron to make it sturdy and durable.',
        },
        {
          sentence:
            'Der Bauarbeiter trug schwere Eisenstangen über die Baustelle.',
          translation:
            'The construction worker carried heavy iron bars across the construction site.',
        },
        {
          sentence:
            'Das Eisen wurde geschmolzen und in Formen gegossen, um verschiedene Gegenstände herzustellen.',
          translation:
            'The iron was melted and cast into molds to make various objects.',
        },
        {
          sentence:
            'Die Brücke wurde mit massiven Eisenstreben verstärkt, um die Stabilität zu verbessern.',
          translation:
            'The bridge was reinforced with massive iron beams to improve stability.',
        },
        {
          sentence:
            'Die alte Lokomotive war aus rostigem Eisen, aber sie funktionierte immer noch einwandfrei.',
          translation:
            'The old locomotive was made of rusty iron, but it still worked perfectly.',
        },
      ],
    },
    {
      word: 'Einzel',
      desc: "Adjective meaning 'single', separate, or individual.",
      examples: [
        {
          sentence: 'Sie kaufte nur ein einzelnes Stück Brot im Laden.',
          translation: 'She bought only a single piece of bread at the store.',
        },
        {
          sentence: 'Jede einzelne Rose im Garten wurde sorgfältig gepflegt.',
          translation:
            'Every single rose in the garden was carefully tended to.',
        },
        {
          sentence:
            'Es gab keine einzelnen Beweise, um die Anschuldigungen zu unterstützen.',
          translation:
            'There were no single pieces of evidence to support the accusations.',
        },
        {
          sentence:
            'Er lebte in einer kleinen Einzelwohnung im Zentrum der Stadt.',
          translation:
            'He lived in a small single apartment in the center of the city.',
        },
        {
          sentence:
            'Jeder einzelne Buchstabe des Alphabets hat eine einzigartige Bedeutung.',
          translation:
            'Every single letter of the alphabet has a unique meaning.',
        },
      ],
    },
    {
      word: 'Stick',
      desc: "Noun meaning 'stick', a thin piece of wood that has fallen or been cut from a tree.",
      examples: [
        {
          sentence:
            'Er schnitzte einen Stick aus einem Ast, den er im Wald gefunden hatte.',
          translation:
            'He whittled a stick from a branch he found in the forest.',
        },
        {
          sentence: 'Die Kinder sammelten Stöcke, um ein Lagerfeuer zu machen.',
          translation: 'The children gathered sticks to make a campfire.',
        },
        {
          sentence:
            'Ein kleiner Stick wurde als Proviant für die Wanderung mitgenommen.',
          translation:
            'A small stick was brought along as provisions for the hike.',
        },
        {
          sentence:
            'Der Hund jagte einem Stick hinterher, den sein Besitzer warf.',
          translation: 'The dog chased after a stick thrown by its owner.',
        },
        {
          sentence:
            'Sie benutzte einen Stick, um eine Nachricht in den Sand zu schreiben.',
          translation: 'She used a stick to write a message in the sand.',
        },
      ],
    },
    {
      word: 'Wohnung',
      desc: "Noun meaning 'flat', a set of rooms for living in, typically on one floor of a large building.",
      examples: [
        {
          sentence:
            'Die Wohnung hatte hohe Decken und große Fenster, die viel Licht hereinließen.',
          translation:
            'The flat had high ceilings and large windows that let in a lot of light.',
        },
        {
          sentence: 'Sie mieteten eine kleine Wohnung in der Innenstadt.',
          translation: 'They rented a small flat in the city center.',
        },
        {
          sentence:
            'Die Wohnung war möbliert und bereit für den Einzug der neuen Mieter.',
          translation:
            'The apartment was furnished and ready for the new tenants to move in.',
        },
        {
          sentence: 'Die Familie zog in eine geräumige Wohnung am Stadtrand.',
          translation:
            'The family moved into a spacious flat on the outskirts of town.',
        },
        {
          sentence:
            'Die Wohnung wurde renoviert und modernisiert, um den aktuellen Standards zu entsprechen.',
          translation:
            'The flat was renovated and modernized to meet current standards.',
        },
      ],
    },
    {
      word: 'zwanzig',
      desc: "Number meaning 'twenty', the number that is two more than nineteen and one less than twenty-one; 20.",
      examples: [
        {
          sentence:
            'Es dauerte zwanzig Minuten, um die Ziellinie zu erreichen.',
          translation: 'It took twenty minutes to reach the finish line.',
        },
        {
          sentence: 'Er hatte zwanzig Bücher in seinem Regal stehen.',
          translation: 'He had twenty books standing on his shelf.',
        },
        {
          sentence:
            'Sie feierten ihren zwanzigsten Hochzeitstag mit einer großen Party.',
          translation:
            'They celebrated their twentieth wedding anniversary with a big party.',
        },
        {
          sentence: 'Zwanzig Kinder nahmen an der Veranstaltung teil.',
          translation: 'Twenty children participated in the event.',
        },
        {
          sentence: 'Er fand zwanzig Euro auf der Straße.',
          translation: 'He found twenty euros on the street.',
        },
      ],
    },
    {
      word: 'Haut',
      desc: "Noun meaning 'skin', the thin layer of tissue forming the natural outer covering of the body of a person or animal.",
      examples: [
        {
          sentence:
            'Die Sonne verbrannte seine Haut und hinterließ einen roten Ausschlag.',
          translation: 'The sun burned his skin, leaving a red rash.',
        },
        {
          sentence: 'Sie hatte eine zarte Haut, die fast transparent aussah.',
          translation: 'She had delicate skin that looked almost translucent.',
        },
        {
          sentence: 'Die Haut des Elefanten war grob und faltig.',
          translation: "The elephant's skin was rough and wrinkled.",
        },
        {
          sentence: 'Er trug Handschuhe, um seine Haut vor Kälte zu schützen.',
          translation: 'He wore gloves to protect his skin from the cold.',
        },
        {
          sentence: 'Die Haut ist das größte Organ des menschlichen Körpers.',
          translation: 'Skin is the largest organ of the human body.',
        },
      ],
    },
    {
      word: 'Lächeln',
      desc: "Noun meaning 'smile', a pleased, kind, or amused facial expression, typically with the corners of the mouth turned up and the front teeth exposed.",
      examples: [
        {
          sentence:
            'Das Lächeln des kleinen Mädchens war ansteckend und verbreitete Freude in der ganzen Familie.',
          translation:
            "The little girl's smile was contagious and spread joy throughout the family.",
        },
        {
          sentence:
            'Er erwiderte ihr Lächeln und fühlte sich sofort wohler in ihrer Gesellschaft.',
          translation:
            'He returned her smile and immediately felt more comfortable in her presence.',
        },
        {
          sentence:
            'Ein herzliches Lächeln kann oft mehr sagen als tausend Worte.',
          translation: 'A warm smile can often say more than a thousand words.',
        },
        {
          sentence: 'Das Lächeln des Babys ließ alle um es herum schmelzen.',
          translation: "The baby's smile melted everyone around it.",
        },
        {
          sentence:
            'Ein freundliches Lächeln kann dazu beitragen, die Stimmung zu heben und den Tag zu verbessern.',
          translation:
            'A friendly smile can help lift the mood and brighten the day.',
        },
      ],
    },
    {
      word: 'Falte',
      desc: "Noun meaning 'crease', a line or wrinkle produced in paper, fabric, skin, etc., typically as a result of folding, pressing, or crushing.",
      examples: [
        {
          sentence:
            'Sie hatte eine Falte auf ihrer Stirn, die zeigte, dass sie oft nachdachte.',
          translation:
            'She had a crease on her forehead that showed she often thought deeply.',
        },
        {
          sentence:
            'Die Hose hatte eine scharfe Falte, die durch das Bügeln entstanden war.',
          translation:
            'The pants had a sharp crease that had been created by ironing.',
        },
        {
          sentence:
            'Das alte Buch hatte Falten auf den Seiten, die von jahrelangem Gebrauch stammten.',
          translation:
            'The old book had creases on the pages that came from years of use.',
        },
        {
          sentence: 'Die Falten um seine Augen zeigten, dass er oft lächelte.',
          translation:
            'The creases around his eyes showed that he often smiled.',
        },
        {
          sentence: 'Die Kinder falteten Papier und formten es zu Flugzeugen.',
          translation:
            'The children folded paper and shaped it into airplanes.',
        },
      ],
    },
    {
      word: 'Loch',
      desc: "Noun meaning 'hole', a hollow place in a solid body or surface.",
      examples: [
        {
          sentence: 'Sie stolperte über ein Loch im Boden und fiel hin.',
          translation: 'She tripped over a hole in the ground and fell down.',
        },
        {
          sentence:
            'Das Loch in der Wand war groß genug, um einen Vogel hindurchzulassen.',
          translation:
            'The hole in the wall was big enough to let a bird through.',
        },
        {
          sentence: 'Er grub ein Loch im Garten, um einen Baum zu pflanzen.',
          translation: 'He dug a hole in the garden to plant a tree.',
        },
        {
          sentence:
            'Das Boot hatte ein Leck und begann langsam Wasser zu bekommen.',
          translation:
            'The boat had a leak and started slowly taking on water.',
        },
        {
          sentence: 'Das Loch im Zaun war groß genug, um durchzuschlüpfen.',
          translation: 'The hole in the fence was big enough to slip through.',
        },
      ],
    },
    {
      word: 'springen',
      desc: "Verb meaning 'jump', move suddenly and quickly in a specified way.",
      examples: [
        {
          sentence:
            'Die Katze sprang geschickt über den Zaun und entkam dem Hund.',
          translation:
            'The cat leaped skillfully over the fence and escaped the dog.',
        },
        {
          sentence:
            'Er sprang vor Freude in die Luft, als er die gute Nachricht erhielt.',
          translation: 'He jumped for joy when he received the good news.',
        },
        {
          sentence: 'Die Kinder sprangen auf dem Trampolin und lachten laut.',
          translation:
            'The children jumped on the trampoline and laughed loudly.',
        },
        {
          sentence: 'Der Athlet sprang über die Hürden und gewann das Rennen.',
          translation: 'The athlete jumped over the hurdles and won the race.',
        },
        {
          sentence:
            'Das Eichhörnchen sprang von Ast zu Ast, um Nahrung zu finden.',
          translation:
            'The squirrel jumped from branch to branch to find food.',
        },
      ],
    },
  ],
};

const section7: Section = {
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

export default section7;
