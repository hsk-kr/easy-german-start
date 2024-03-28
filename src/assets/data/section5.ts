import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Einheit, Macht, Stadt, fein, sicher, fliegen, fallen, führen, Schrei, dunkel',
  words: [
    {
      word: 'Einheit',
      desc: "Noun meaning 'unit', a single thing or person.",
      examples: [
        {
          sentence: 'Die Familie ist eine Einheit.',
          translation: 'The family is a unit.',
        },
        {
          sentence: 'Der Staat besteht aus verschiedenen Einheiten.',
          translation: 'The state consists of different units.',
        },
        {
          sentence: 'Die Einheit der Gruppe war beeindruckend.',
          translation: 'The unity of the group was impressive.',
        },
        {
          sentence: 'Das Team arbeitete zusammen als eine Einheit.',
          translation: 'The team worked together as one unit.',
        },
        {
          sentence: 'Die Lehrer bilden eine Einheit in der Schule.',
          translation: 'The teachers form a unit in the school.',
        },
      ],
    },
    {
      word: 'Macht',
      desc: "Noun meaning 'power', the ability or capacity to do something or act in a particular way.",
      examples: [
        {
          sentence: 'Die Regierung hat die Macht, Gesetze zu erlassen.',
          translation: 'The government has the power to enact laws.',
        },
        {
          sentence: 'Die Macht des Königs war absolut.',
          translation: 'The king`s power was absolute.',
        },
        {
          sentence: 'Die Macht des Sturms war erschreckend.',
          translation: 'The power of the storm was frightening.',
        },
        {
          sentence: 'Die Macht der Natur ist unbestreitbar.',
          translation: 'The power of nature is undeniable.',
        },
        {
          sentence: 'Sie nutzte ihre Macht, um Gutes zu tun.',
          translation: 'She used her power to do good.',
        },
      ],
    },
    {
      word: 'Stadt',
      desc: "Noun meaning 'town', a place where people live, consisting of streets and buildings.",
      examples: [
        {
          sentence: 'Die Stadt ist bekannt für ihre historische Altstadt.',
          translation: 'The town is known for its historic old town.',
        },
        {
          sentence: 'Er zog in die Stadt, um dort zu studieren.',
          translation: 'He moved to the town to study there.',
        },
        {
          sentence: 'Die Stadt war in der Nacht sehr ruhig.',
          translation: 'The town was very quiet at night.',
        },
        {
          sentence: 'Die Stadt wuchs schnell und zog viele Einwohner an.',
          translation: 'The town grew rapidly and attracted many residents.',
        },
        {
          sentence: 'Sie spazierten durch die belebten Straßen der Stadt.',
          translation: 'They walked through the bustling streets of the town.',
        },
      ],
    },
    {
      word: 'fein',
      desc: "Adjective meaning 'fine', of very high quality.",
      examples: [
        {
          sentence: 'Der Wein hatte einen feinen Geschmack.',
          translation: 'The wine had a fine flavor.',
        },
        {
          sentence: 'Das Restaurant servierte feine Speisen.',
          translation: 'The restaurant served fine cuisine.',
        },
        {
          sentence: 'Die Seide fühlte sich fein und glatt an.',
          translation: 'The silk felt fine and smooth.',
        },
        {
          sentence: 'Sie trug einen feinen Anzug zu der Veranstaltung.',
          translation: 'She wore a fine suit to the event.',
        },
        {
          sentence: 'Die feinen Details machten den Unterschied aus.',
          translation: 'The fine details made the difference.',
        },
      ],
    },
    {
      word: 'sicher',
      desc: "Adjective meaning 'certain', free from doubt or uncertainty.",
      examples: [
        {
          sentence:
            'Ich bin mir sicher, dass wir den Zug rechtzeitig erreichen werden.',
          translation: `I'm certain that we will catch the train on time.`,
        },
        {
          sentence: 'Sie war sich sicher, dass sie die Prüfung bestehen würde.',
          translation: 'She was certain she would pass the exam.',
        },
        {
          sentence: 'Es war sicher, dass sie sich treffen würden.',
          translation: 'It was certain they would meet.',
        },
        {
          sentence: 'Die Antwort auf die Frage war nicht sicher.',
          translation: 'The answer to the question was not certain.',
        },
        {
          sentence: 'Er fühlte sich sicher in seiner Entscheidung.',
          translation: 'He felt certain about his decision.',
        },
      ],
    },
    {
      word: 'fliegen',
      desc: "Verb meaning 'fly', move through the air using wings or other propulsion.",
      examples: [
        {
          sentence: 'Die Vögel fliegen südwärts im Winter.',
          translation: 'The birds fly south in the winter.',
        },
        {
          sentence: 'Er lernt, wie man ein Flugzeug fliegt.',
          translation: 'He is learning how to fly an airplane.',
        },
        {
          sentence: 'Die Zeit verging, während sie über den Wolken flogen.',
          translation: 'Time passed as they flew above the clouds.',
        },
        {
          sentence: 'Die Kraniche beginnen, nach Süden zu fliegen.',
          translation: 'The cranes start to fly south.',
        },
        {
          sentence: 'Das Flugzeug wird morgen früh nach London fliegen.',
          translation: 'The plane will fly to London tomorrow morning.',
        },
      ],
    },
    {
      word: 'fallen',
      desc: "Verb meaning 'fall', move downward, typically rapidly and freely without control, from a higher to a lower level.",
      examples: [
        {
          sentence: 'Die Blätter fallen von den Bäumen im Herbst.',
          translation: 'The leaves fall from the trees in autumn.',
        },
        {
          sentence: 'Sie ließ das Buch fallen, als sie einschlief.',
          translation: 'She dropped the book as she fell asleep.',
        },
        {
          sentence: 'Die Tränen fielen auf den Boden.',
          translation: 'The tears fell onto the floor.',
        },
        {
          sentence: 'Er fiel auf die Knie und betete.',
          translation: 'He fell to his knees and prayed.',
        },
        {
          sentence: 'Die Schneeflocken fallen leise auf die Erde.',
          translation: 'The snowflakes fall softly to the ground.',
        },
      ],
    },
    {
      word: 'führen',
      desc: "Verb meaning 'lead', cause (a person or animal) to go with one by holding them by the hand, a halter, a rope, etc. while moving forward.",
      examples: [
        {
          sentence: 'Die Lehrerin führte die Kinder sicher über die Straße.',
          translation: 'The teacher led the children safely across the street.',
        },
        {
          sentence:
            'Er wurde zu einem Raum geführt, wo er auf seinen Termin warten konnte.',
          translation:
            'He was led to a room where he could wait for his appointment.',
        },
        {
          sentence: 'Der Hund wurde an der Leine geführt.',
          translation: 'The dog was led on a leash.',
        },
        {
          sentence:
            'Er führte sie durch den Park und zeigte ihr die Sehenswürdigkeiten.',
          translation: 'He led her through the park and showed her the sights.',
        },
        {
          sentence: 'Die Straße führt direkt zum Bahnhof.',
          translation: 'The road leads directly to the train station.',
        },
      ],
    },
    {
      word: 'Schrei',
      desc: "Noun meaning 'cry', a loud, sharp, piercing vocal sound.",
      examples: [
        {
          sentence: 'Der Schrei des Babys durchbrach die Stille der Nacht.',
          translation: "The baby's cry broke the silence of the night.",
        },
        {
          sentence: 'Sie hörte einen Schrei aus der Ferne.',
          translation: 'She heard a cry from afar.',
        },
        {
          sentence: 'Ein lauter Schrei ertönte aus dem Wald.',
          translation: 'A loud cry came from the forest.',
        },
        {
          sentence: 'Der Schrei des Adlers war im ganzen Tal zu hören.',
          translation: "The eagle's cry could be heard throughout the valley.",
        },
        {
          sentence:
            'Der Schrei der Möwen begleitete sie auf ihrem Spaziergang am Strand.',
          translation:
            'The cry of the seagulls accompanied them on their walk along the beach.',
        },
      ],
    },
    {
      word: 'dunkel',
      desc: "Adjective meaning 'dark', having little or no light.",
      examples: [
        {
          sentence: 'Es war dunkel im Zimmer, also machte sie das Licht an.',
          translation: 'It was dark in the room, so she turned on the light.',
        },
        {
          sentence: 'Die Nacht war dunkel und voller Sterne.',
          translation: 'The night was dark and full of stars.',
        },
        {
          sentence: 'Er trug dunkle Kleidung, um sich zu tarnen.',
          translation: 'He wore dark clothing to blend in.',
        },
        {
          sentence: 'Die Straße war dunkel und unheimlich.',
          translation: 'The street was dark and eerie.',
        },
        {
          sentence: 'Die Wolken verdunkelten den Himmel und es wurde dunkel.',
          translation: 'The clouds darkened the sky and it became dark.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Maschine, note, warten, Plan, Abbildung, Stern, Kasten, Nomen, Feld, Rest',
  words: [
    {
      word: 'Maschine',
      desc: "Noun meaning 'machine', a mechanical or electrical device that performs a task.",
      examples: [
        {
          sentence: 'Die Maschine produziert Autos in der Fabrik.',
          translation: 'The machine produces cars in the factory.',
        },
        {
          sentence: 'Er reparierte die defekte Maschine.',
          translation: 'He repaired the broken machine.',
        },
        {
          sentence: 'Die Waschmaschine wäscht die Kleidung automatisch.',
          translation: 'The washing machine washes clothes automatically.',
        },
        {
          sentence: 'Die Maschine macht seltsame Geräusche.',
          translation: 'The machine is making strange noises.',
        },
        {
          sentence: 'Sie bediente die Maschine mit großer Sorgfalt.',
          translation: 'She operated the machine with great care.',
        },
      ],
    },
    {
      word: 'note',
      desc: "Noun meaning 'note', a brief record of facts, topics, or thoughts, written down as an aid to memory.",
      examples: [
        {
          sentence: 'He took notes during the lecture.',
          translation: 'Er machte während der Vorlesung Notizen.',
        },
        {
          sentence: 'She left a note on the kitchen counter.',
          translation: 'Sie hinterließ einen Zettel auf der Küchentheke.',
        },
        {
          sentence: 'I wrote down some notes for the meeting.',
          translation: 'Ich habe ein paar Notizen für das Treffen gemacht.',
        },
        {
          sentence: 'He found a handwritten note in his jacket pocket.',
          translation:
            'Er fand einen handgeschriebenen Zettel in seiner Jackentasche.',
        },
        {
          sentence: 'She passed me a note during class.',
          translation: 'Sie reichte mir während des Unterrichts einen Zettel.',
        },
      ],
    },
    {
      word: 'warten',
      desc: "Verb meaning 'to wait', stay where one is or delay action until a particular time or event.",
      examples: [
        {
          sentence: 'Sie musste lange auf den Bus warten.',
          translation: 'She had to wait a long time for the bus.',
        },
        {
          sentence: 'Er wartete geduldig auf seine Freundin.',
          translation: 'He patiently waited for his girlfriend.',
        },
        {
          sentence: 'Die Kinder warten ungeduldig auf Weihnachten.',
          translation: 'The children are waiting impatiently for Christmas.',
        },
        {
          sentence: 'Wir müssen auf den nächsten Zug warten.',
          translation: 'We have to wait for the next train.',
        },
        {
          sentence: 'Sie warteten am Flughafen auf ihre Ankunft.',
          translation: 'They waited at the airport for her arrival.',
        },
      ],
    },
    {
      word: 'Plan',
      desc: "Noun meaning 'plan', a detailed proposal for doing or achieving something.",
      examples: [
        {
          sentence: 'She outlined her plan for the project.',
          translation: 'Sie skizzierte ihren Plan für das Projekt.',
        },
        {
          sentence: 'We need to come up with a plan of action.',
          translation: 'Wir müssen einen Aktionsplan entwickeln.',
        },
        {
          sentence: 'The company has a five-year strategic plan.',
          translation:
            'Das Unternehmen hat einen fünfjährigen strategischen Plan.',
        },
        {
          sentence: 'His plan was to travel around the world.',
          translation: 'Sein Plan war es, um die Welt zu reisen.',
        },
        {
          sentence:
            'They discussed the contingency plan in case of emergencies.',
          translation:
            'Sie besprachen den Notfallplan für den Fall von Notfällen.',
        },
      ],
    },
    {
      word: 'Abbildung',
      desc: "Noun meaning 'figure', a picture or diagram that explains or decorates.",
      examples: [
        {
          sentence: 'The book contains many illustrations and figures.',
          translation: 'Das Buch enthält viele Abbildungen und Grafiken.',
        },
        {
          sentence: 'The diagram is a helpful illustration of the process.',
          translation:
            'Das Diagramm ist eine hilfreiche Abbildung des Prozesses.',
        },
        {
          sentence: 'She drew an accurate figure of the animal.',
          translation: 'Sie zeichnete eine genaue Abbildung des Tieres.',
        },
        {
          sentence: 'The scientific paper includes several figures and charts.',
          translation:
            'Das wissenschaftliche Papier enthält mehrere Abbildungen und Diagramme.',
        },
        {
          sentence: 'The textbook has detailed figures to aid understanding.',
          translation:
            'Das Lehrbuch enthält detaillierte Abbildungen zur Unterstützung des Verständnisses.',
        },
      ],
    },
    {
      word: 'Stern',
      desc: "Noun meaning 'star', a fixed luminous point in the night sky that is a large, remote incandescent body like the sun.",
      examples: [
        {
          sentence: 'We gazed at the stars on a clear night.',
          translation: 'Wir starrten an einem klaren Abend auf die Sterne.',
        },
        {
          sentence: 'The constellation Orion contains many bright stars.',
          translation: 'Das Sternbild Orion enthält viele helle Sterne.',
        },
        {
          sentence: 'She wished upon a shooting star.',
          translation: 'Sie wünschte sich einen Sternschnuppen.',
        },
        {
          sentence: 'The star shone brightly in the night sky.',
          translation: 'Der Stern leuchtete hell am Nachthimmel.',
        },
        {
          sentence: 'He studied the stars with a telescope.',
          translation: 'Er studierte die Sterne mit einem Teleskop.',
        },
      ],
    },
    {
      word: 'Kasten',
      desc: "Noun meaning 'box', a container with a flat base and sides, typically square or rectangular and having a lid.",
      examples: [
        {
          sentence: 'Er packte seine Sachen in einen Karton.',
          translation: 'He packed his belongings into a cardboard box.',
        },
        {
          sentence:
            'Sie fand eine kleine hölzerne Kiste, die auf dem Dachboden versteckt war.',
          translation: 'She found a small wooden box hidden in the attic.',
        },
        {
          sentence:
            'Die Lieferung enthielt eine große Kiste, die mit zerbrechlichen Gegenständen gefüllt war.',
          translation:
            'The delivery contained a large crate filled with fragile items.',
        },
        {
          sentence:
            'Sie kaufte eine dekorative Schachtel, um ihren Schmuck aufzubewahren.',
          translation: 'She bought a decorative box to store her jewelry.',
        },
        {
          sentence: 'Er trug die schwere Kiste die Treppe hinauf.',
          translation: 'He carried the heavy box up the stairs.',
        },
      ],
    },
    {
      word: 'Nomen',
      desc: "Noun meaning 'noun', a word (other than a pronoun) used to identify any of a class of people, places, or things common noun, or to name a particular one of these proper noun.",
      examples: [
        {
          sentence:
            'In dem Satz "Der Hund bellte", ist das Wort "Hund" ein Nomen.',
          translation:
            'In the sentence, "The dog barked," the word "dog" is a noun.',
        },
        {
          sentence:
            'Gemeinnamen wie "Buch" und "Auto" beziehen sich auf allgemeine Objekte.',
          translation:
            'Common nouns like "book" and "car" refer to general objects.',
        },
        {
          sentence:
            'Eigennamen wie "Berlin" und "Michael" beziehen sich auf bestimmte Personen, Orte oder Dinge.',
          translation:
            'Proper nouns like "Berlin" and "Michael" refer to specific people, places, or things.',
        },
        {
          sentence: 'Ein Nomen kann Singular- oder Pluralformen haben.',
          translation: 'A noun can have singular or plural forms.',
        },
        {
          sentence:
            'Der Lehrer unterrichtet Grammatik und verwendet dabei viele Nomen.',
          translation:
            'The teacher teaches grammar and uses many nouns in the process.',
        },
      ],
    },
    {
      word: 'Feld',
      desc: "Noun meaning 'field', an area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.",
      examples: [
        {
          sentence: 'Auf dem Feld wuchsen viele Maispflanzen.',
          translation: 'Many corn plants grew in the field.',
        },
        {
          sentence: 'Sie trieben ihre Kühe auf die Weide auf dem Feld.',
          translation: 'They grazed their cows in the pasture in the field.',
        },
        {
          sentence:
            'Der Bauer pflügte das Feld, um es für die Aussaat vorzubereiten.',
          translation:
            'The farmer plowed the field to prepare it for planting.',
        },
        {
          sentence: 'Das Feld war mit wilden Blumen bedeckt.',
          translation: 'The field was covered with wildflowers.',
        },
        {
          sentence: 'Die Kinder spielten Fußball auf dem Feld hinter dem Haus.',
          translation:
            'The children played soccer in the field behind the house.',
        },
      ],
    },
    {
      word: 'Rest',
      desc: "Noun meaning 'rest', the part that is left after everything else has been dealt with.",
      examples: [
        {
          sentence: 'Er aß den Rest seines Mittagessens.',
          translation: 'He ate the rest of his lunch.',
        },
        {
          sentence: 'Die Gäste tranken den Rest des Weins.',
          translation: 'The guests drank the rest of the wine.',
        },
        {
          sentence: 'Ich werde den Rest des Tages im Garten verbringen.',
          translation: 'I will spend the rest of the day in the garden.',
        },
        {
          sentence: 'Die Katze schlief den Rest des Nachmittags.',
          translation: 'The cat slept the rest of the afternoon.',
        },
        {
          sentence:
            'Wir verbrachten den Rest des Abends damit, Filme anzusehen.',
          translation: 'We spent the rest of the evening watching movies.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'richtig, fähig, Pfund, getan, Schönheit, Antriebs, stand, enthalten, Front, lehren',
  words: [
    {
      word: 'richtig',
      desc: "Adjective meaning 'correct', in accordance with fact or truth; free from error; accurate.",
      examples: [
        {
          sentence: 'Die Antwort auf die Frage ist richtig.',
          translation: 'The answer to the question is correct.',
        },
        {
          sentence: 'Er gab mir die richtige Richtung.',
          translation: 'He gave me the correct direction.',
        },
        {
          sentence: 'Das ist die richtige Lösung für das Problem.',
          translation: 'That is the correct solution to the problem.',
        },
        {
          sentence: 'Sie traf die richtige Entscheidung.',
          translation: 'She made the correct decision.',
        },
        {
          sentence: 'Das ist der richtige Weg nach Hause.',
          translation: 'That is the correct way home.',
        },
      ],
    },
    {
      word: 'fähig',
      desc: "Adjective meaning 'able', having the necessary power, skill, resources, or qualifications to do something.",
      examples: [
        {
          sentence: 'Er ist fähig, die Aufgabe zu erledigen.',
          translation: 'He is able to do the task.',
        },
        {
          sentence: 'Sie ist fähig, große Verantwortung zu übernehmen.',
          translation: 'She is capable of taking on great responsibility.',
        },
        {
          sentence: 'Das Team ist fähig, Herausforderungen zu bewältigen.',
          translation: 'The team is capable of overcoming challenges.',
        },
        {
          sentence: 'Sie ist fähig, schwierige Entscheidungen zu treffen.',
          translation: 'She is capable of making difficult decisions.',
        },
        {
          sentence: 'Er ist fähig, unter Druck zu arbeiten.',
          translation: 'He is capable of working under pressure.',
        },
      ],
    },
    {
      word: 'Pfund',
      desc: "Noun meaning 'pound', a unit of weight in the imperial system equal to 16 ounces (453.592 grams).",
      examples: [
        {
          sentence: 'Ein Pfund sind 16 Unzen.',
          translation: 'One pound is 16 ounces.',
        },
        {
          sentence: 'Wie viele Pfund wiegt dieses Paket?',
          translation: 'How many pounds does this package weigh?',
        },
        {
          sentence: 'Das Steak kostet 10 Pfund.',
          translation: 'The steak costs 10 pounds.',
        },
        {
          sentence: 'Ich habe ein Pfund Butter gekauft.',
          translation: 'I bought a pound of butter.',
        },
        {
          sentence: 'Sie hat in einem Monat 5 Pfund abgenommen.',
          translation: 'She lost 5 pounds in a month.',
        },
      ],
    },
    {
      word: 'getan',
      desc: "Past participle of the verb 'tun', meaning 'done', performed or completed as an action.",
      examples: [
        {
          sentence: 'Die Arbeit ist getan.',
          translation: 'The work is done.',
        },
        {
          sentence: 'Wir haben alles getan, was wir konnten.',
          translation: 'We have done everything we could.',
        },
        {
          sentence: 'Er hat sein Bestes getan, um zu helfen.',
          translation: 'He did his best to help.',
        },
        {
          sentence: 'Die Entscheidung ist bereits getroffen worden.',
          translation: 'The decision has already been made.',
        },
        {
          sentence: 'Das Experiment ist erfolgreich getan worden.',
          translation: 'The experiment has been successfully done.',
        },
      ],
    },
    {
      word: 'Schönheit',
      desc: "Noun meaning 'beauty', a combination of qualities, such as shape, color, or form, that pleases the aesthetic senses, especially the sight.",
      examples: [
        {
          sentence: 'Die Schönheit der Natur ist überwältigend.',
          translation: 'The beauty of nature is overwhelming.',
        },
        {
          sentence: 'Sie bewunderte die Schönheit des Sonnenuntergangs.',
          translation: 'She admired the beauty of the sunset.',
        },
        {
          sentence: 'Das Gemälde strahlt eine unbeschreibliche Schönheit aus.',
          translation: 'The painting radiates an indescribable beauty.',
        },
        {
          sentence: 'Die Schönheit dieses Ortes ist atemberaubend.',
          translation: 'The beauty of this place is breathtaking.',
        },
        {
          sentence: 'Sie ist für ihre Anmut und Schönheit bekannt.',
          translation: 'She is known for her grace and beauty.',
        },
      ],
    },
    {
      word: 'Antriebs',
      desc: "Noun meaning 'drive', the force or energy that causes a machine to operate.",
      examples: [
        {
          sentence: 'Der Elektromotor erzeugt den Antrieb für das Fahrzeug.',
          translation:
            'The electric motor generates the drive for the vehicle.',
        },
        {
          sentence: 'Ohne Antrieb würde das Auto nicht fahren können.',
          translation: 'Without drive, the car would not be able to move.',
        },
        {
          sentence: 'Der Antrieb der Maschine erfolgt durch einen Riemen.',
          translation: 'The drive of the machine is provided by a belt.',
        },
        {
          sentence: 'Die Kraftübertragung erfolgt über den Antriebsstrang.',
          translation: 'The power is transmitted through the drive train.',
        },
        {
          sentence: 'Der Antrieb wird durch eine hydraulische Pumpe erzeugt.',
          translation: 'The drive is generated by a hydraulic pump.',
        },
      ],
    },
    {
      word: 'stand',
      desc: "Verb meaning 'stood', past tense of the verb 'stand', to be in or maintain an upright position, supported by one's feet.",
      examples: [
        {
          sentence: 'Er stand am Fenster und schaute hinaus.',
          translation: 'He stood at the window and looked out.',
        },
        {
          sentence: 'Die Statue stand im Zentrum des Platzes.',
          translation: 'The statue stood in the center of the square.',
        },
        {
          sentence: 'Die Bücher standen ordentlich im Regal.',
          translation: 'The books were neatly arranged on the shelf.',
        },
        {
          sentence: 'Die Uhr stand still und zeigte die falsche Zeit an.',
          translation: 'The clock stood still and showed the wrong time.',
        },
        {
          sentence: 'Sie standen im Kreis und diskutierten.',
          translation: 'They stood in a circle and discussed.',
        },
      ],
    },
    {
      word: 'enthalten',
      desc: "Verb meaning 'to contain', to have something as a component part; include.",
      examples: [
        {
          sentence: 'Das Paket enthielt eine Überraschung.',
          translation: 'The package contained a surprise.',
        },
        {
          sentence: 'Die Liste enthielt alle notwendigen Informationen.',
          translation: 'The list contained all the necessary information.',
        },
        {
          sentence: 'Die Zutaten sind in dem Rezept enthalten.',
          translation: 'The ingredients are included in the recipe.',
        },
        {
          sentence: 'Der Bericht enthielt viele interessante Details.',
          translation: 'The report contained many interesting details.',
        },
        {
          sentence: 'Die Mappe enthält wichtige Dokumente.',
          translation: 'The folder contains important documents.',
        },
      ],
    },
    {
      word: 'Front',
      desc: "Noun meaning 'front', the side or part of an object that presents itself to view or that is normally seen or used first; the most forward part of something.",
      examples: [
        {
          sentence: 'Die Soldaten marschierten an der Front entlang.',
          translation: 'The soldiers marched along the front.',
        },
        {
          sentence: 'Die Front des Gebäudes war mit großen Fenstern versehen.',
          translation:
            'The front of the building was equipped with large windows.',
        },
        {
          sentence: 'Die Front des Autos wurde bei dem Unfall beschädigt.',
          translation: 'The front of the car was damaged in the accident.',
        },
        {
          sentence:
            'Die Front des Hauses war mit einem schönen Garten gestaltet.',
          translation:
            'The front of the house was landscaped with a beautiful garden.',
        },
        {
          sentence:
            'Die Front des Geschäfts war mit einem großen Schild versehen.',
          translation: 'The front of the store was adorned with a large sign.',
        },
      ],
    },
    {
      word: 'lehren',
      desc: "Verb meaning 'to teach', to impart knowledge or instruct someone as to how to do something; to give lessons to.",
      examples: [
        {
          sentence: 'Die Lehrerin lehrt Mathematik an der Grundschule.',
          translation:
            'The teacher teaches mathematics at the elementary school.',
        },
        {
          sentence: 'Die Universität lehrt verschiedene Fachrichtungen.',
          translation: 'The university teaches various disciplines.',
        },
        {
          sentence: 'Der Trainer lehrt die Spieler neue Taktiken.',
          translation: 'The coach teaches the players new tactics.',
        },
        {
          sentence: 'Eltern lehren ihre Kinder wichtige Lebenslektionen.',
          translation: 'Parents teach their children important life lessons.',
        },
        {
          sentence: 'Das Buch lehrt uns, Geduld zu haben.',
          translation: 'The book teaches us to have patience.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Woche, Finale, gab, grün, oh, schnell, entwickeln, Ozean, warme, kostenlos',
  words: [
    {
      word: 'Woche',
      desc: "Noun meaning 'week', a period of seven days.",
      examples: [
        {
          sentence: 'Wir treffen uns nächste Woche zum Mittagessen.',
          translation: 'We are meeting for lunch next week.',
        },
        {
          sentence: 'Die Prüfung findet am Ende der Woche statt.',
          translation: 'The exam takes place at the end of the week.',
        },
        {
          sentence: 'Wir gehen jedes Wochenende ins Kino.',
          translation: 'We go to the movies every weekend.',
        },
        {
          sentence: 'Die Woche beginnt am Montag und endet am Sonntag.',
          translation: 'The week starts on Monday and ends on Sunday.',
        },
        {
          sentence: 'Wir haben letzte Woche viel gearbeitet.',
          translation: 'We worked a lot last week.',
        },
      ],
    },
    {
      word: 'Finale',
      desc: "Noun meaning 'final', the last game or match in a sports competition that will decide the overall winner.",
      examples: [
        {
          sentence: 'Das Finale des Wettbewerbs fand im Stadion statt.',
          translation:
            'The final of the competition took place in the stadium.',
        },
        {
          sentence: 'Die Mannschaft hat das Finale gewonnen.',
          translation: 'The team won the final.',
        },
        {
          sentence: 'Das Finale war ein aufregendes Spiel.',
          translation: 'The final was an exciting game.',
        },
        {
          sentence: 'Die Zuschauer waren gespannt auf das Finale.',
          translation: 'The spectators were eager for the final.',
        },
        {
          sentence: 'Der Sieger des Finales erhielt einen Pokal.',
          translation: 'The winner of the final received a trophy.',
        },
      ],
    },
    {
      word: 'gab',
      desc: "Verb meaning 'gave', past tense of the verb 'geben', to freely transfer the possession of something to someone.",
      examples: [
        {
          sentence: 'Er gab ihr einen Blumenstrauß zum Geburtstag.',
          translation: 'He gave her a bouquet of flowers for her birthday.',
        },
        {
          sentence: 'Sie gab ihm ein Geschenk zur Hochzeit.',
          translation: 'She gave him a gift for the wedding.',
        },
        {
          sentence: 'Die Mutter gab dem Kind einen Kuss auf die Stirn.',
          translation: 'The mother gave the child a kiss on the forehead.',
        },
        {
          sentence: 'Er gab dem Obdachlosen etwas Geld.',
          translation: 'He gave some money to the homeless person.',
        },
        {
          sentence: 'Der Lehrer gab den Schülern Hausaufgaben auf.',
          translation: 'The teacher gave homework to the students.',
        },
      ],
    },
    {
      word: 'grün',
      desc: "Adjective meaning 'green', of the color between blue and yellow in the spectrum; colored like grass or emeralds.",
      examples: [
        {
          sentence: 'Die Blätter der Bäume werden im Frühling grün.',
          translation: 'The leaves of the trees turn green in spring.',
        },
        {
          sentence: 'Das Gras auf der Wiese ist grün.',
          translation: 'The grass in the meadow is green.',
        },
        {
          sentence: 'Die Ampel springt auf grün um.',
          translation: 'The traffic light changes to green.',
        },
        {
          sentence: 'Die Augen des Mädchens waren grün wie Smaragde.',
          translation: "The girl's eyes were green like emeralds.",
        },
        {
          sentence: 'Der grüne Tee ist sehr gesund.',
          translation: 'Green tea is very healthy.',
        },
      ],
    },
    {
      word: 'oh',
      desc: "Interjection expressing 'oh', used to express a range of emotions including surprise, disappointment, or relief.",
      examples: [
        {
          sentence: 'Oh, das habe ich vergessen!',
          translation: 'Oh, I forgot about that!',
        },
        {
          sentence: 'Oh, das ist aber schade.',
          translation: 'Oh, that is too bad.',
        },
        {
          sentence: 'Oh, das ist ja eine Überraschung!',
          translation: 'Oh, what a surprise!',
        },
        {
          sentence: 'Oh, das klingt interessant.',
          translation: 'Oh, that sounds interesting.',
        },
        {
          sentence: 'Oh, ich bin so erleichtert!',
          translation: 'Oh, I am so relieved!',
        },
      ],
    },
    {
      word: 'schnell',
      desc: "Adjective meaning 'quick', moving or capable of moving at high speed; fast.",
      examples: [
        {
          sentence: 'Das Auto fuhr schnell die Straße entlang.',
          translation: 'The car quickly drove along the road.',
        },
        {
          sentence: 'Der Sprinter war sehr schnell im Rennen.',
          translation: 'The sprinter was very fast in the race.',
        },
        {
          sentence: 'Das Flugzeug erreichte schnell seine maximale Höhe.',
          translation: 'The airplane quickly reached its maximum altitude.',
        },
        {
          sentence: 'Der Expresszug war ein schnelles Verkehrsmittel.',
          translation: 'The express train was a fast mode of transportation.',
        },
        {
          sentence: 'Der Läufer war so schnell, dass er die anderen überholte.',
          translation: 'The runner was so fast that he overtook the others.',
        },
      ],
    },
    {
      word: 'entwickeln',
      desc: "Verb meaning 'to develop', to grow or cause to grow and become more mature, advanced, or elaborate.",
      examples: [
        {
          sentence:
            'Die Stadt entwickelt sich schnell zu einem wirtschaftlichen Zentrum.',
          translation:
            'The city is rapidly developing into an economic center.',
        },
        {
          sentence: 'Das Unternehmen entwickelt innovative Technologien.',
          translation: 'The company develops innovative technologies.',
        },
        {
          sentence: 'Die Kinder entwickeln sich körperlich und geistig.',
          translation: 'The children are developing physically and mentally.',
        },
        {
          sentence: 'Die Idee entwickelte sich zu einem erfolgreichen Projekt.',
          translation: 'The idea developed into a successful project.',
        },
        {
          sentence:
            'Die Pflanze entwickelte sich prächtig unter den idealen Bedingungen.',
          translation: 'The plant thrived under the ideal conditions.',
        },
      ],
    },

    {
      word: 'Ozean',
      desc: "Noun meaning 'ocean', a very large expanse of sea, in particular each of the main areas into which the sea is divided",
      examples: [
        {
          sentence: 'Der Pazifische Ozean ist der größte Ozean der Erde.',
          translation: 'The Pacific Ocean is the largest ocean on Earth.',
        },
        {
          sentence: 'Das Tauchen im Ozean ist ein faszinierendes Erlebnis.',
          translation: 'Diving in the ocean is a fascinating experience.',
        },
        {
          sentence: 'Viele Tiere leben in den Tiefen des Ozeans.',
          translation: 'Many animals live in the depths of the ocean.',
        },
        {
          sentence: 'Der Atlantische Ozean trennt Europa von Amerika.',
          translation: 'The Atlantic Ocean separates Europe from America.',
        },
        {
          sentence: 'Die Ozeane bedecken den größten Teil der Erdoberfläche.',
          translation: "The oceans cover the majority of the Earth's surface.",
        },
      ],
    },
    {
      word: 'warme',
      desc: "Adjective meaning 'warm', having or showing enthusiasm, affection, or kindness.",
      examples: [
        {
          sentence: 'Sie begrüßte ihn mit einer warmen Umarmung.',
          translation: 'She greeted him with a warm hug.',
        },
        {
          sentence: 'Seine Worte waren voller warmer Wünsche.',
          translation: 'His words were full of warm wishes.',
        },
        {
          sentence: 'Wir genossen das warme Feuer im Kamin.',
          translation: 'We enjoyed the warm fire in the fireplace.',
        },
        {
          sentence: 'Die Sonne spendete warmes Licht.',
          translation: 'The sun gave off warm light.',
        },
        {
          sentence:
            'Der Tee war eine willkommene Abkühlung an diesem warmen Tag.',
          translation: 'The tea was a welcome refreshment on this warm day.',
        },
      ],
    },
    {
      word: 'kostenlos',
      desc: "Adjective meaning 'free', given or available without charge.",
      examples: [
        {
          sentence: 'Das Essen im Restaurant war kostenlos.',
          translation: 'The food at the restaurant was free.',
        },
        {
          sentence: 'Die App kann kostenlos heruntergeladen werden.',
          translation: 'The app can be downloaded for free.',
        },
        {
          sentence: 'Der Eintritt zum Konzert war kostenlos.',
          translation: 'The admission to the concert was free.',
        },
        {
          sentence: 'Es gab kostenloses WLAN im Hotel.',
          translation: 'There was free Wi-Fi at the hotel.',
        },
        {
          sentence: 'Die Broschüren werden kostenlos verteilt.',
          translation: 'The brochures are distributed for free.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Minute, stark, besondere, Geist, hinter, klar, Schwanz, produzieren, Tatsache, Raum',
  words: [
    {
      word: 'Minute',
      desc: "Noun meaning 'minute', a period of time equal to sixty seconds or a sixtieth of an hour.",
      examples: [
        {
          sentence: 'Ich werde in einer Minute zurück sein.',
          translation: 'I will be back in a minute.',
        },
        {
          sentence: 'Die Präsentation dauerte nur zehn Minuten.',
          translation: 'The presentation lasted only ten minutes.',
        },
        {
          sentence:
            'Sie kam im letzten Moment, buchstäblich in letzter Minute.',
          translation:
            'She arrived at the last moment, literally in the last minute.',
        },
        {
          sentence: 'Das Flugzeug wird in wenigen Minuten landen.',
          translation: 'The plane will land in a few minutes.',
        },
        {
          sentence: 'Er sprach eine Minute lang mit dem Lehrer.',
          translation: 'He spoke with the teacher for a minute.',
        },
      ],
    },
    {
      word: 'stark',
      desc: "Adjective meaning 'strong', possessing the power and ability to perform a physically demanding task or withstand great force or pressure.",
      examples: [
        {
          sentence: 'Er ist stark genug, um das Gewicht alleine zu heben.',
          translation: 'He is strong enough to lift the weight by himself.',
        },
        {
          sentence: 'Die Mannschaft hat eine starke Verteidigung.',
          translation: 'The team has a strong defense.',
        },
        {
          sentence:
            'Sie zeigte eine starke Entschlossenheit, ihr Ziel zu erreichen.',
          translation: 'She showed strong determination to achieve her goal.',
        },
        {
          sentence:
            'Das Unternehmen erlebte ein starkes Wachstum in diesem Quartal.',
          translation: 'The company experienced strong growth this quarter.',
        },
        {
          sentence: 'Sie hat eine starke Persönlichkeit und beeindruckt jeden.',
          translation: 'She has a strong personality and impresses everyone.',
        },
      ],
    },
    {
      word: 'besondere',
      desc: "Adjective meaning 'special', better, greater, or otherwise different from what is usual.",
      examples: [
        {
          sentence: 'Dies ist ein besonderer Tag für uns alle.',
          translation: 'This is a special day for all of us.',
        },
        {
          sentence: 'Das ist ein ganz besonderer Moment in meinem Leben.',
          translation: 'This is a very special moment in my life.',
        },
        {
          sentence: 'Sie hat eine besondere Gabe, Menschen zu beruhigen.',
          translation: 'She has a special gift for calming people down.',
        },
        {
          sentence: 'Sie machte einen besonderen Kuchen für ihren Geburtstag.',
          translation: 'She made a special cake for her birthday.',
        },
        {
          sentence: 'Dieses Buch hat eine besondere Bedeutung für mich.',
          translation: 'This book has a special meaning for me.',
        },
      ],
    },
    {
      word: 'Geist',
      desc: "Noun meaning 'mind', the element of a person that enables them to be aware of the world and their experiences, to think, and to feel; the faculty of consciousness and thought.",
      examples: [
        {
          sentence: 'Er hatte einen klaren Geist trotz seines hohen Alters.',
          translation: 'He had a clear mind despite his old age.',
        },
        {
          sentence: 'Die Meditation hilft, den Geist zu beruhigen.',
          translation: 'Meditation helps to calm the mind.',
        },
        {
          sentence: 'Sie ist eine intelligente Frau mit einem scharfen Geist.',
          translation: 'She is an intelligent woman with a sharp mind.',
        },
        {
          sentence: 'Der Geist ist willig, aber das Fleisch ist schwach.',
          translation: 'The spirit is willing, but the flesh is weak.',
        },
        {
          sentence: 'Sein Geist war voller Ideen und Kreativität.',
          translation: 'His mind was full of ideas and creativity.',
        },
      ],
    },
    {
      word: 'hinter',
      desc: "Preposition meaning 'behind', at or to the far side of something.",
      examples: [
        {
          sentence: 'Der Schlüssel steckt hinter der Tür.',
          translation: 'The key is behind the door.',
        },
        {
          sentence: 'Er versteckte sich hinter einem Baum.',
          translation: 'He hid behind a tree.',
        },
        {
          sentence: 'Die Sonne geht hinter den Bergen unter.',
          translation: 'The sun sets behind the mountains.',
        },
        {
          sentence: 'Sie standen hinter dem Erfolg des Projekts.',
          translation: 'They were behind the success of the project.',
        },
        {
          sentence: 'Die Wahrheit liegt oft hinter den Worten verborgen.',
          translation: 'The truth is often hidden behind the words.',
        },
      ],
    },

    {
      word: 'klar',
      desc: "Adjective meaning 'clear', easily perceived or understood; obvious.",
      examples: [
        {
          sentence: 'Die Anweisungen waren klar und einfach zu befolgen.',
          translation: 'The instructions were clear and easy to follow.',
        },
        {
          sentence: 'Es war ein klarer Tag mit blauem Himmel.',
          translation: 'It was a clear day with a blue sky.',
        },
        {
          sentence: 'Sie hatte klare Vorstellungen von ihrer Zukunft.',
          translation: 'She had clear ideas about her future.',
        },
        {
          sentence: 'Die Absicht hinter seinen Worten war klar.',
          translation: 'The intention behind his words was clear.',
        },
        {
          sentence: 'Er sprach mit klarer Stimme und Überzeugung.',
          translation: 'He spoke with a clear voice and conviction.',
        },
      ],
    },
    {
      word: 'Schwanz',
      desc: "Noun meaning 'tail', the hindmost part of an animal, especially when extended beyond the rest of the body.",
      examples: [
        {
          sentence: 'Der Hund wedelte freudig mit dem Schwanz.',
          translation: 'The dog wagged its tail happily.',
        },
        {
          sentence: 'Die Katze duckte sich und hielt ihren Schwanz fest.',
          translation: 'The cat crouched down, holding its tail tightly.',
        },
        {
          sentence: 'Der Pfau zeigte stolz sein prächtiges Schwanzgefieder.',
          translation:
            'The peacock proudly displayed its magnificent tail feathers.',
        },
        {
          sentence: 'Der Fuchs schleicht sich mit gesenktem Schwanz davon.',
          translation: 'The fox sneaks away with its tail lowered.',
        },
        {
          sentence:
            'Das Eichhörnchen nutzte seinen Schwanz zum Ausbalancieren.',
          translation: 'The squirrel used its tail to balance.',
        },
      ],
    },
    {
      word: 'produzieren',
      desc: "Verb meaning 'produce', to make or manufacture from components or raw materials.",
      examples: [
        {
          sentence: 'Die Fabrik produziert täglich tausende von Autos.',
          translation: 'The factory produces thousands of cars daily.',
        },
        {
          sentence: 'Das Land produziert große Mengen an Getreide.',
          translation: 'The country produces large quantities of grain.',
        },
        {
          sentence: 'Die Firma produziert hochwertige Möbel aus Holz.',
          translation: 'The company produces high-quality wooden furniture.',
        },
        {
          sentence: 'Die Bäckerei produziert frisches Brot und Gebäck.',
          translation: 'The bakery produces fresh bread and pastries.',
        },
        {
          sentence: 'Diese Fabrik produziert umweltfreundliche Verpackungen.',
          translation:
            'This factory produces environmentally friendly packaging.',
        },
      ],
    },
    {
      word: 'Tatsache',
      desc: "Noun meaning 'fact', a thing that is known or proved to be true.",
      examples: [
        {
          sentence:
            'Es ist eine Tatsache, dass Rauchen gesundheitsschädlich ist.',
          translation: 'It is a fact that smoking is harmful to health.',
        },
        {
          sentence:
            'Die Tatsache, dass er nicht gekommen ist, überraschte uns.',
          translation: "The fact that he didn't come surprised us.",
        },
        {
          sentence:
            'Es ist eine allgemein akzeptierte Tatsache, dass Wasser nass ist.',
          translation: 'It is a universally accepted fact that water is wet.',
        },
        {
          sentence: 'Die Tatsache, dass er lügt, ist offensichtlich.',
          translation: 'The fact that he is lying is obvious.',
        },
        {
          sentence: 'Die Tatsache seiner Abwesenheit war bemerkenswert.',
          translation: 'The fact of his absence was noteworthy.',
        },
      ],
    },
    {
      word: 'Raum',
      desc: "Noun meaning 'space', a continuous area or expanse that is free, available, or unoccupied.",
      examples: [
        {
          sentence: 'Der Raum war mit Möbeln überfüllt.',
          translation: 'The room was crowded with furniture.',
        },
        {
          sentence: 'Es gibt nicht genug Raum für alle Gäste.',
          translation: 'There is not enough space for all the guests.',
        },
        {
          sentence: 'Sie brauchte mehr Raum, um ihre Ideen umzusetzen.',
          translation: 'She needed more space to implement her ideas.',
        },
        {
          sentence: 'Der Raum war voller Menschen und Gespräche.',
          translation: 'The space was full of people and conversations.',
        },
        {
          sentence: 'Es war ein großer Raum mit hohen Decken.',
          translation: 'It was a large space with high ceilings.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'gehört, beste, Stunde, besser, wahr, während, hundert, fünf, merken, Schritt',
  words: [
    {
      word: 'gehört',
      desc: "Verb meaning 'heard', past participle of the verb 'hear'.",
      examples: [
        {
          sentence: 'Ich habe ihn gehört, als er das Zimmer betrat.',
          translation: 'I heard him when he entered the room.',
        },
        {
          sentence: 'Die Musik konnte in der Ferne gehört werden.',
          translation: 'The music could be heard in the distance.',
        },
        {
          sentence:
            'Das Geräusch des Regens gehört zu den entspannendsten Klängen.',
          translation: 'The sound of rain is one of the most relaxing sounds.',
        },
        {
          sentence: 'Hast du das Gerücht gehört?',
          translation: 'Have you heard the rumor?',
        },
        {
          sentence: 'Sie hat die Nachricht gehört, aber nicht geglaubt.',
          translation: "She heard the news but didn't believe it.",
        },
      ],
    },
    {
      word: 'beste',
      desc: "Adjective meaning 'best', superlative form of 'good'.",
      examples: [
        {
          sentence: 'Das ist der beste Kuchen, den ich je gegessen habe.',
          translation: "That's the best cake I've ever eaten.",
        },
        {
          sentence: 'Sie ist die beste Lehrerin an dieser Schule.',
          translation: 'She is the best teacher at this school.',
        },
        {
          sentence: 'Die beste Zeit, um einzukaufen, ist am Morgen.',
          translation: 'The best time to shop is in the morning.',
        },
        {
          sentence: 'Es ist die beste Entscheidung für unser Team.',
          translation: 'It is the best decision for our team.',
        },
        {
          sentence: 'Sie trägt ihr bestes Kleid für die Feier.',
          translation: 'She is wearing her best dress for the party.',
        },
      ],
    },
    {
      word: 'Stunde',
      desc: "Noun meaning 'hour', a period of time equal to a twenty-fourth part of a day and night.",
      examples: [
        {
          sentence: 'Die Stunde hat sechzig Minuten.',
          translation: 'An hour has sixty minutes.',
        },
        {
          sentence: 'Der Flug dauert ungefähr zwei Stunden.',
          translation: 'The flight lasts about two hours.',
        },
        {
          sentence: 'Die Sonne scheint sechzehn Stunden am Tag.',
          translation: 'The sun shines for sixteen hours a day.',
        },
        {
          sentence: 'Die Vorlesung dauerte drei Stunden.',
          translation: 'The lecture lasted for three hours.',
        },
        {
          sentence: 'Er wartete eine Stunde auf ihren Anruf.',
          translation: 'He waited for an hour for her call.',
        },
      ],
    },
    {
      word: 'besser',
      desc: "Adjective or adverb meaning 'better', comparative form of 'good'.",
      examples: [
        {
          sentence: 'Es ist besser, spät als nie zu kommen.',
          translation: 'It is better to come late than never.',
        },
        {
          sentence: 'Das zweite Buch war besser als das erste.',
          translation: 'The second book was better than the first one.',
        },
        {
          sentence: 'Der Kaffee schmeckt besser mit Milch.',
          translation: 'The coffee tastes better with milk.',
        },
        {
          sentence: 'Es wird immer besser, je mehr du übst.',
          translation: 'It gets better and better the more you practice.',
        },
        {
          sentence:
            'Es ist besser, etwas zu versuchen, als es überhaupt nicht zu tun.',
          translation:
            'It is better to try something than not to do it at all.',
        },
      ],
    },
    {
      word: 'wahr',
      desc: "Adjective meaning 'true', conforming to reality or fact.",
      examples: [
        {
          sentence: 'Das ist eine wahre Geschichte, die mir passiert ist.',
          translation: "That's a true story that happened to me.",
        },
        {
          sentence: 'Er sagte nichts als die reine Wahrheit.',
          translation: 'He spoke nothing but the plain truth.',
        },
        {
          sentence: 'Es ist wahr, dass Übung perfekt macht.',
          translation: 'It is true that practice makes perfect.',
        },
        {
          sentence: 'Es ist schwer zu glauben, aber es ist wahr.',
          translation: 'It is hard to believe, but it is true.',
        },
        {
          sentence:
            'Sie konnte kaum glauben, dass ihr Traum wahr geworden ist.',
          translation: 'She could hardly believe her dream had come true.',
        },
      ],
    },
    {
      word: 'während',
      desc: "Preposition meaning 'during', indicating a period of time in which an action takes place.",
      examples: [
        {
          sentence: 'Er arbeitet während des Tages und schläft nachts.',
          translation: 'He works during the day and sleeps at night.',
        },
        {
          sentence: 'Während des Sommers verbringen sie viel Zeit am Strand.',
          translation:
            'During the summer, they spend a lot of time at the beach.',
        },
        {
          sentence: 'Ich habe die Hausaufgaben während der Pause erledigt.',
          translation: 'I did the homework during the break.',
        },
        {
          sentence: 'Während der Vorlesung war sie sehr aufmerksam.',
          translation: 'She was very attentive during the lecture.',
        },
        {
          sentence: 'Sie lernte Spanisch, während sie im Ausland war.',
          translation: 'She learned Spanish while she was abroad.',
        },
      ],
    },
    {
      word: 'hundert',
      desc: "Number meaning 'hundred', the number equivalent to ten times ten.",
      examples: [
        {
          sentence: 'Er hat hundert Euro in bar bezahlt.',
          translation: 'He paid a hundred euros in cash.',
        },
        {
          sentence: 'Es gibt hundert Seiten in diesem Buch.',
          translation: 'There are a hundred pages in this book.',
        },
        {
          sentence: 'Sie haben bereits hundert Kilometer zurückgelegt.',
          translation: 'They have already traveled a hundred kilometers.',
        },
        {
          sentence: 'Hundert Jahre sind ein Jahrhundert.',
          translation: 'A hundred years is a century.',
        },
        {
          sentence: 'Hundert Prozent der Teilnehmer waren zufrieden.',
          translation: 'A hundred percent of the participants were satisfied.',
        },
      ],
    },
    {
      word: 'fünf',
      desc: "Number meaning 'five', the number equivalent to one more than four.",
      examples: [
        {
          sentence: 'Es gibt fünf Kontinente auf der Erde.',
          translation: 'There are five continents on Earth.',
        },
        {
          sentence: 'Sie hat fünf Bücher in einer Woche gelesen.',
          translation: 'She read five books in one week.',
        },
        {
          sentence: 'Es sind fünf Personen in der Familie.',
          translation: 'There are five people in the family.',
        },
        {
          sentence: 'Das Konzert beginnt um fünf Uhr abends.',
          translation: 'The concert starts at five o’clock in the evening.',
        },
        {
          sentence: 'Er hat fünf Jahre in dieser Firma gearbeitet.',
          translation: 'He has worked in this company for five years.',
        },
      ],
    },
    {
      word: 'merken',
      desc: "Verb meaning 'to remember' or 'to notice'.",
      examples: [
        {
          sentence: 'Kannst du dir das Datum merken?',
          translation: 'Can you remember the date?',
        },
        {
          sentence: 'Ich muss mir das Passwort merken.',
          translation: 'I need to remember the password.',
        },
        {
          sentence: 'Er hat sich den Namen des Buches gemerkt.',
          translation: 'He remembered the name of the book.',
        },
        {
          sentence: 'Ich habe bemerkt, dass du dich verändert hast.',
          translation: 'I noticed that you have changed.',
        },
        {
          sentence: 'Er konnte sich die Route nicht merken.',
          translation: 'He couldn’t remember the route.',
        },
      ],
    },
    {
      word: 'Schritt',
      desc: "Noun meaning 'step', a movement made by lifting one foot and putting it down in a different place.",
      examples: [
        {
          sentence: 'Sie machte einen großen Schritt nach vorne.',
          translation: 'She took a big step forward.',
        },
        {
          sentence: 'Er folgte ihr Schritt für Schritt.',
          translation: 'He followed her step by step.',
        },
        {
          sentence: 'Es war ein wichtiger Schritt für ihre Karriere.',
          translation: 'It was an important step for her career.',
        },
        {
          sentence: 'Sie nahm die Treppe in einem einzigen Schritt.',
          translation: 'She took the stairs in a single step.',
        },
        {
          sentence: 'Wir müssen Schritt für Schritt vorgehen.',
          translation: 'We need to proceed step by step.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'früh, halten, Westen, Boden, Interesse, erreichen, schnell, Verbum, singen, hören',
  words: [
    {
      word: 'früh',
      desc: "Adjective meaning 'early', happening or done before the usual or expected time.",
      examples: [
        {
          sentence: 'Er steht jeden Morgen früh auf.',
          translation: 'He gets up early every morning.',
        },
        {
          sentence: 'Wir trafen uns am frühsten Morgen.',
          translation: 'We met on the earliest morning.',
        },
        {
          sentence: 'Es ist noch zu früh, um anzufangen.',
          translation: 'It is still too early to start.',
        },
        {
          sentence: 'Sie kam früh zu ihrer Verabredung.',
          translation: 'She arrived early for her appointment.',
        },
        {
          sentence: 'Die Blumen blühen früh im Frühling.',
          translation: 'The flowers bloom early in spring.',
        },
      ],
    },
    {
      word: 'halten',
      desc: "Verb meaning 'to hold', to grasp or grip something tightly.",
      examples: [
        {
          sentence: 'Er hielt das Buch fest in seinen Händen.',
          translation: 'He held the book tightly in his hands.',
        },
        {
          sentence: 'Kannst du mir bitte die Tür halten?',
          translation: 'Can you please hold the door for me?',
        },
        {
          sentence: 'Sie hielt die Schachtel vorsichtig.',
          translation: 'She held the box carefully.',
        },
        {
          sentence: 'Er hielt seine Rede vor einem großen Publikum.',
          translation: 'He delivered his speech in front of a large audience.',
        },
        {
          sentence: 'Sie hielt seinen Blick für einen Moment fest.',
          translation: 'She held his gaze for a moment.',
        },
      ],
    },
    {
      word: 'Westen',
      desc: "Noun meaning 'west', the direction towards the point of the horizon where the sun sets.",
      examples: [
        {
          sentence: 'Die Sonne geht im Westen unter.',
          translation: 'The sun sets in the west.',
        },
        {
          sentence: 'Wir fuhren in Richtung Westen.',
          translation: 'We drove towards the west.',
        },
        {
          sentence: 'Der Wind kam aus dem Westen.',
          translation: 'The wind came from the west.',
        },
        {
          sentence: 'Im Westen liegt ein großes Waldgebiet.',
          translation: 'There is a large forest area in the west.',
        },
        {
          sentence: 'Die Temperaturen sind im Westen höher.',
          translation: 'Temperatures are higher in the west.',
        },
      ],
    },
    {
      word: 'Boden',
      desc: "Noun meaning 'ground', the solid surface of the earth.",
      examples: [
        {
          sentence: 'Er lag auf dem Boden und ruhte sich aus.',
          translation: 'He lay on the ground and rested.',
        },
        {
          sentence: 'Die Blumen wachsen im Boden.',
          translation: 'The flowers grow in the ground.',
        },
        {
          sentence: 'Sie fand eine Münze auf dem Boden.',
          translation: 'She found a coin on the ground.',
        },
        {
          sentence: 'Die Kinder spielten auf dem sandigen Boden.',
          translation: 'The children played on the sandy ground.',
        },
        {
          sentence: 'Die Katze lief über den gefrorenen Boden.',
          translation: 'The cat ran across the frozen ground.',
        },
      ],
    },
    {
      word: 'Interesse',
      desc: "Noun meaning 'interest', the feeling of wanting to know or learn about something.",
      examples: [
        {
          sentence: 'Sie zeigte großes Interesse an der Geschichte.',
          translation: 'She showed great interest in history.',
        },
        {
          sentence: 'Er hatte ein starkes Interesse an Kunst.',
          translation: 'He had a strong interest in art.',
        },
        {
          sentence: 'Das Thema weckte mein Interesse.',
          translation: 'The topic sparked my interest.',
        },
        {
          sentence: 'Sie verlor das Interesse an der Diskussion.',
          translation: 'She lost interest in the discussion.',
        },
        {
          sentence: 'Das Buch weckte ihr Interesse für die Natur.',
          translation: 'The book sparked her interest in nature.',
        },
      ],
    },
    {
      word: 'erreichen',
      desc: "Verb meaning 'to reach', to arrive at a place, especially after a journey.",
      examples: [
        {
          sentence: 'Sie erreichte den Gipfel des Berges.',
          translation: 'She reached the summit of the mountain.',
        },
        {
          sentence: 'Wir werden bald unser Ziel erreichen.',
          translation: 'We will soon reach our destination.',
        },
        {
          sentence: 'Er konnte seinen Freund telefonisch erreichen.',
          translation: 'He was able to reach his friend by phone.',
        },
        {
          sentence: 'Es ist schwer, ein hohes Ziel zu erreichen.',
          translation: 'It is difficult to reach a high goal.',
        },
        {
          sentence: 'Die Nachricht erreichte uns gestern Abend.',
          translation: 'The message reached us last night.',
        },
      ],
    },
    {
      word: 'schnell',
      desc: "Adjective meaning 'fast', moving or capable of moving at high speed.",
      examples: [
        {
          sentence: 'Das Auto fuhr schnell die Straße entlang.',
          translation: 'The car quickly drove along the road.',
        },
        {
          sentence: 'Er ist ein schneller Läufer.',
          translation: 'He is a fast runner.',
        },
        {
          sentence: 'Sie fand eine schnelle Lösung für das Problem.',
          translation: 'She found a quick solution to the problem.',
        },
        {
          sentence: 'Die Zeit verging schnell.',
          translation: 'Time passed quickly.',
        },
        {
          sentence: 'Er gab eine schnelle Antwort auf die Frage.',
          translation: 'He gave a quick answer to the question.',
        },
      ],
    },
    {
      word: 'Verbum',
      desc: "Noun meaning 'verb', a word used to describe an action, state, or occurrence.",
      examples: [
        {
          sentence: 'Das Verb steht im Infinitiv.',
          translation: 'The verb is in the infinitive form.',
        },
        {
          sentence: 'Sie lernte die Konjugation von Verben.',
          translation: 'She learned the conjugation of verbs.',
        },
        {
          sentence: 'Das Verbum ist eine wichtige Wortart in der Grammatik.',
          translation: 'The verb is an important part of speech in grammar.',
        },
        {
          sentence: 'Erklär bitte die Bedeutung dieses Verbs.',
          translation: 'Please explain the meaning of this verb.',
        },
        {
          sentence: 'Das deutsche Verb kann verschiedene Zeitformen haben.',
          translation: 'The German verb can have different tenses.',
        },
      ],
    },
    {
      word: 'singen',
      desc: "Verb meaning 'to sing', to make musical sounds with the voice, usually producing words.",
      examples: [
        {
          sentence: 'Die Vögel singen in den Bäumen.',
          translation: 'The birds sing in the trees.',
        },
        {
          sentence: 'Sie singt gerne in einem Chor.',
          translation: 'She likes to sing in a choir.',
        },
        {
          sentence: 'Er sang ein Lied für seine Freundin.',
          translation: 'He sang a song for his girlfriend.',
        },
        {
          sentence: 'Kinder singen oft, wenn sie glücklich sind.',
          translation: 'Children often sing when they are happy.',
        },
        {
          sentence: 'Sie sang die Nationalhymne mit großer Begeisterung.',
          translation: 'She sang the national anthem with great enthusiasm.',
        },
      ],
    },
    {
      word: 'hören',
      desc: "Verb meaning 'to listen', to pay attention to sound, to perceive with the ear.",
      examples: [
        {
          sentence: 'Sie hörte die Musik aus dem Nachbarhaus.',
          translation: 'She heard the music from the neighboring house.',
        },
        {
          sentence: 'Er hörte die Vögel am Morgen singen.',
          translation: 'He heard the birds singing in the morning.',
        },
        {
          sentence: 'Wir können die Wellen des Meeres hören.',
          translation: 'We can hear the waves of the sea.',
        },
        {
          sentence: 'Kannst du mich gut hören?',
          translation: 'Can you hear me well?',
        },
        {
          sentence: 'Die Kinder hörten gespannt der Geschichte zu.',
          translation: 'The children listened eagerly to the story.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'sechs, Tabelle, Reise, weniger, Morgen, zehn, einfach, mehrere, Vokal, auf',
  words: [
    {
      word: 'sechs',
      desc: "Number meaning 'six', the quantity or amount equal to half a dozen.",
      examples: [
        {
          sentence: 'Es sind sechs Tage in einer Woche.',
          translation: 'There are six days in a week.',
        },
        {
          sentence: 'Er hat sechs Äpfel gekauft.',
          translation: 'He bought six apples.',
        },
        {
          sentence: 'Das Kind ist sechs Jahre alt.',
          translation: 'The child is six years old.',
        },
        {
          sentence: 'Wir haben sechs Gäste zum Abendessen eingeladen.',
          translation: 'We invited six guests for dinner.',
        },
        {
          sentence: 'Sie brauchte sechs Stunden, um den Roman zu lesen.',
          translation: 'She needed six hours to read the novel.',
        },
      ],
    },
    {
      word: 'Tabelle',
      desc: "Noun meaning 'table', a systematic arrangement of data, typically in rows and columns.",
      examples: [
        {
          sentence: 'Er erstellte eine Tabelle mit den Verkaufszahlen.',
          translation: 'He created a table with the sales figures.',
        },
        {
          sentence: 'Die Lehrerin projizierte eine Tabelle an die Wand.',
          translation: 'The teacher projected a table onto the wall.',
        },
        {
          sentence:
            'In der Tabelle sind die Ergebnisse übersichtlich dargestellt.',
          translation: 'The results are presented clearly in the table.',
        },
        {
          sentence: 'Bitte füllen Sie die leeren Felder in der Tabelle aus.',
          translation: 'Please fill in the empty fields in the table.',
        },
        {
          sentence:
            'Die Tabelle zeigt den Vergleich der verschiedenen Produkte.',
          translation:
            'The table shows the comparison of the various products.',
        },
      ],
    },
    {
      word: 'Reise',
      desc: "Noun meaning 'travel', the act of going from one place to another, typically over a considerable distance.",
      examples: [
        {
          sentence: 'Sie planten eine Reise nach Europa.',
          translation: 'They planned a trip to Europe.',
        },
        {
          sentence: 'Die lange Reise war anstrengend, aber lohnenswert.',
          translation: 'The long journey was tiring but worthwhile.',
        },
        {
          sentence: 'Wir haben eine lange Reise vor uns.',
          translation: 'We have a long journey ahead of us.',
        },
        {
          sentence: 'Die Reise mit dem Zug war angenehm und entspannend.',
          translation: 'The journey by train was pleasant and relaxing.',
        },
        {
          sentence: 'Die Reise dauerte länger als erwartet.',
          translation: 'The journey lasted longer than expected.',
        },
      ],
    },
    {
      word: 'weniger',
      desc: "Adjective meaning 'less', a smaller amount of; not as much.",
      examples: [
        {
          sentence: 'Er hat weniger Geld als sein Bruder.',
          translation: 'He has less money than his brother.',
        },
        {
          sentence: 'Es gibt weniger Menschen als zuvor.',
          translation: 'There are fewer people than before.',
        },
        {
          sentence: 'Die Antwort war weniger kompliziert als erwartet.',
          translation: 'The answer was less complicated than expected.',
        },
        {
          sentence: 'Sie braucht weniger Zeit, um die Aufgabe zu erledigen.',
          translation: 'She needs less time to complete the task.',
        },
        {
          sentence: 'Ich habe weniger Hunger als gestern.',
          translation: 'I am less hungry than yesterday.',
        },
      ],
    },
    {
      word: 'Morgen',
      desc: "Noun meaning 'morning', the period of time between midnight and noon, especially from sunrise to noon.",
      examples: [
        {
          sentence: 'Guten Morgen! Wie geht es Ihnen heute?',
          translation: 'Good morning! How are you today?',
        },
        {
          sentence: 'Jeden Morgen gehe ich eine Stunde joggen.',
          translation: 'Every morning I go jogging for an hour.',
        },
        {
          sentence: 'Der Morgen beginnt mit einer Tasse Kaffee.',
          translation: 'The morning starts with a cup of coffee.',
        },
        {
          sentence: 'Am Morgen ist die Luft frisch und kühl.',
          translation: 'In the morning, the air is fresh and cool.',
        },
        {
          sentence: 'Der Morgen ist meine Lieblingszeit des Tages.',
          translation: 'Morning is my favorite time of the day.',
        },
      ],
    },
    {
      word: 'zehn',
      desc: "Number meaning 'ten', the quantity or amount equal to the product of two and five.",
      examples: [
        {
          sentence: 'Es sind zehn Finger an den Händen.',
          translation: 'There are ten fingers on the hands.',
        },
        {
          sentence: 'Das Kind wird in zehn Minuten fertig sein.',
          translation: 'The child will be ready in ten minutes.',
        },
        {
          sentence: 'Zehn Jahre sind eine lange Zeit.',
          translation: 'Ten years is a long time.',
        },
        {
          sentence: 'Er gab mir zehn Euro für die Hilfe.',
          translation: 'He gave me ten euros for the help.',
        },
        {
          sentence: 'Das Buch besteht aus zehn Kapiteln.',
          translation: 'The book consists of ten chapters.',
        },
      ],
    },
    {
      word: 'einfach',
      desc: "Adjective meaning 'simple', easily understood or done; presenting no difficulty.",
      examples: [
        {
          sentence: 'Die Lösung des Problems ist ganz einfach.',
          translation: 'The solution to the problem is quite simple.',
        },
        {
          sentence: 'Es ist einfach, die Anleitung zu befolgen.',
          translation: 'It is easy to follow the instructions.',
        },
        {
          sentence: 'Die Aufgabe war einfacher als erwartet.',
          translation: 'The task was easier than expected.',
        },
        {
          sentence: 'Sie hat eine einfache Antwort auf die Frage.',
          translation: 'She has a simple answer to the question.',
        },
        {
          sentence: 'Die Bedienung des Geräts ist sehr einfach.',
          translation: 'The operation of the device is very simple.',
        },
      ],
    },
    {
      word: 'mehrere',
      desc: "Adjective meaning 'several', more than two but not many.",
      examples: [
        {
          sentence: 'Es gibt mehrere Möglichkeiten, das Problem zu lösen.',
          translation: 'There are several ways to solve the problem.',
        },
        {
          sentence: 'Wir haben mehrere Bücher über dieses Thema gelesen.',
          translation: 'We have read several books on this topic.',
        },
        {
          sentence: 'Er traf sich mit mehreren Freunden im Park.',
          translation: 'He met with several friends in the park.',
        },
        {
          sentence: 'Sie hat mehrere Sprachen fließend gesprochen.',
          translation: 'She spoke several languages fluently.',
        },
        {
          sentence:
            'Der Film erhielt mehrere Auszeichnungen bei verschiedenen Festivals.',
          translation:
            'The movie received several awards at various festivals.',
        },
      ],
    },
    {
      word: 'Vokal',
      desc: "Noun meaning 'vowel', a speech sound produced with a comparatively open configuration of the vocal tract.",
      examples: [
        {
          sentence:
            'Das deutsche Alphabet enthält die Vokale A, E, I, O und U.',
          translation:
            'The German alphabet contains the vowels A, E, I, O, and U.',
        },
        {
          sentence:
            'Der Lehrer erklärte die Unterschiede zwischen Vokalen und Konsonanten.',
          translation:
            'The teacher explained the differences between vowels and consonants.',
        },
        {
          sentence: 'In vielen Sprachen gibt es mehr Vokale als Konsonanten.',
          translation:
            'In many languages, there are more vowels than consonants.',
        },
        {
          sentence:
            'Die Aussprache dieses Vokals ist schwierig für Nicht-Muttersprachler.',
          translation:
            'The pronunciation of this vowel is difficult for non-native speakers.',
        },
        {
          sentence: 'Die Betonung liegt auf dem zweiten Vokal des Wortes.',
          translation: 'The stress is on the second vowel of the word.',
        },
      ],
    },
    {
      word: 'auf',
      desc: "Preposition meaning 'on' or 'onto', indicating location or direction.",
      examples: [
        {
          sentence: 'Das Buch liegt auf dem Tisch.',
          translation: 'The book is on the table.',
        },
        {
          sentence: 'Sie stellte die Tasse auf den Schrank.',
          translation: 'She put the cup onto the cupboard.',
        },
        {
          sentence: 'Er ging auf die Straße, um frische Luft zu schnappen.',
          translation: 'He went onto the street to get some fresh air.',
        },
        {
          sentence: 'Die Kinder spielten auf dem Rasen.',
          translation: 'The children played on the lawn.',
        },
        {
          sentence: 'Wir fahren auf die Autobahn, um schneller voranzukommen.',
          translation: 'We drive onto the highway to make faster progress.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Krieg, legen, gegen, Muster, schleppend, Zentrum, Liebe, Person, Geld, dienen',
  words: [
    {
      word: 'Krieg',
      desc: "Noun meaning 'war', a state of armed conflict between different countries or different groups within a country.",
      examples: [
        {
          sentence: 'Der Krieg dauerte mehrere Jahre und forderte viele Opfer.',
          translation:
            'The war lasted for several years and claimed many casualties.',
        },
        {
          sentence: 'Die Erinnerungen an den Krieg sind immer noch lebendig.',
          translation: 'The memories of the war are still vivid.',
        },
        {
          sentence: 'Sie verlor ihren Vater im Krieg.',
          translation: 'She lost her father in the war.',
        },
        {
          sentence: 'Der Krieg hinterließ tiefe Wunden in der Gesellschaft.',
          translation: 'The war left deep scars on society.',
        },
        {
          sentence: 'Die Regierung erklärte dem Nachbarland den Krieg.',
          translation:
            'The government declared war on the neighboring country.',
        },
      ],
    },
    {
      word: 'legen',
      desc: "Verb meaning 'lay', to put down gently or carefully.",
      examples: [
        {
          sentence: 'Sie legte die Blumen auf den Tisch.',
          translation: 'She laid the flowers on the table.',
        },
        {
          sentence: 'Er legte seine Hand auf ihre Schulter.',
          translation: 'He placed his hand on her shoulder.',
        },
        {
          sentence:
            'Der Arbeiter legte die Ziegelsteine in einer geraden Linie.',
          translation: 'The worker laid the bricks in a straight line.',
        },
        {
          sentence: 'Sie legte das Buch auf das Regal.',
          translation: 'She put the book on the shelf.',
        },
        {
          sentence: 'Er legte den Grundstein für sein neues Unternehmen.',
          translation: 'He laid the foundation for his new business.',
        },
      ],
    },
    {
      word: 'gegen',
      desc: "Preposition meaning 'against', in opposition to.",
      examples: [
        {
          sentence: 'Sie kämpften gegen die feindliche Armee.',
          translation: 'They fought against the enemy army.',
        },
        {
          sentence:
            'Die Demonstranten protestierten gegen die Regierungspolitik.',
          translation:
            'The protesters demonstrated against the government policy.',
        },
        {
          sentence: 'Er ist gegen Tierversuche aus ethischen Gründen.',
          translation: 'He is against animal testing for ethical reasons.',
        },
        {
          sentence: 'Die Mannschaft spielte gegen den amtierenden Meister.',
          translation: 'The team played against the reigning champion.',
        },
        {
          sentence: 'Sie sprach sich öffentlich gegen Rassismus aus.',
          translation: 'She publicly spoke out against racism.',
        },
      ],
    },
    {
      word: 'Muster',
      desc: "Noun meaning 'pattern', a repeated decorative design.",
      examples: [
        {
          sentence: 'Das Tuch hatte ein schönes Blumenmuster.',
          translation: 'The fabric had a beautiful floral pattern.',
        },
        {
          sentence: 'Er zeichnete das Muster auf das Papier.',
          translation: 'He drew the pattern on the paper.',
        },
        {
          sentence: 'Das Muster der Tapete passte gut zum Rest des Zimmers.',
          translation:
            'The pattern of the wallpaper matched well with the rest of the room.',
        },
        {
          sentence: 'Sie studierte die Muster der Wolken am Himmel.',
          translation: 'She studied the patterns of the clouds in the sky.',
        },
        {
          sentence: 'Das Muster wiederholte sich alle fünf Zentimeter.',
          translation: 'The pattern repeated every five centimeters.',
        },
      ],
    },
    {
      word: 'schleppend',
      desc: "Adjective meaning 'slow', progressing at a slow pace.",
      examples: [
        {
          sentence: 'Der Bau des neuen Gebäudes verlief schleppend.',
          translation:
            'The construction of the new building progressed slowly.',
        },
        {
          sentence: 'Die Verhandlungen zogen sich schleppend hin.',
          translation: 'The negotiations proceeded slowly.',
        },
        {
          sentence: 'Der Zug kam aufgrund einer Panne schleppend voran.',
          translation: 'The train made slow progress due to a breakdown.',
        },
        {
          sentence: 'Das Projekt geriet in eine schleppende Phase.',
          translation: 'The project entered a sluggish phase.',
        },
        {
          sentence: 'Der Fluss floss schleppend durch das Tal.',
          translation: 'The river flowed slowly through the valley.',
        },
      ],
    },
    {
      word: 'Zentrum',
      desc: "Noun meaning 'center', the middle point or part.",
      examples: [
        {
          sentence: 'Das Stadtzentrum war voller Menschen und Geschäfte.',
          translation: 'The city center was bustling with people and shops.',
        },
        {
          sentence: 'Der Park liegt im Zentrum der Stadt.',
          translation: 'The park is located in the center of the city.',
        },
        {
          sentence: 'Das Herz ist das Zentrum des menschlichen Körpers.',
          translation: 'The heart is the center of the human body.',
        },
        {
          sentence: 'Sie setzten sich in das Zentrum des Raumes.',
          translation: 'They sat in the center of the room.',
        },
        {
          sentence: 'Die Sonne steht im Zentrum unseres Sonnensystems.',
          translation: 'The sun is at the center of our solar system.',
        },
      ],
    },
    {
      word: 'Liebe',
      desc: "Noun meaning 'love', an intense feeling of deep affection.",
      examples: [
        {
          sentence: 'Die Liebe zwischen den beiden war unbeschreiblich.',
          translation: 'The love between them was indescribable.',
        },
        {
          sentence: 'Er gestand ihr seine Liebe unter dem Sternenhimmel.',
          translation: 'He confessed his love to her under the starry sky.',
        },
        {
          sentence: 'Die Mutter umarmte ihr Kind voller Liebe.',
          translation: 'The mother hugged her child with full of love.',
        },
        {
          sentence:
            'Die Liebe zu Büchern begleitete sie ihr ganzes Leben lang.',
          translation:
            'The love for books accompanied her throughout her life.',
        },
        {
          sentence: 'Die Liebe zur Musik war in seiner Stimme zu hören.',
          translation: 'The love for music was evident in his voice.',
        },
      ],
    },
    {
      word: 'Person',
      desc: "Noun meaning 'person', an individual human being.",
      examples: [
        {
          sentence: 'Die Veranstaltung ist für jede Person offen.',
          translation: 'The event is open to every person.',
        },
        {
          sentence: 'Eine Person mit guten Manieren wird respektiert.',
          translation: 'A person with good manners is respected.',
        },
        {
          sentence: 'Sie ist eine sehr freundliche Person.',
          translation: 'She is a very friendly person.',
        },
        {
          sentence: 'Jede Person hat das Recht auf freie Meinungsäußerung.',
          translation: 'Every person has the right to freedom of expression.',
        },
        {
          sentence: 'Die Polizei befragte jede Person im Raum.',
          translation: 'The police questioned every person in the room.',
        },
      ],
    },
    {
      word: 'Geld',
      desc: "Noun meaning 'money', a medium of exchange in the form of coins and banknotes.",
      examples: [
        {
          sentence: 'Sie hat viel Geld auf ihrem Bankkonto.',
          translation: 'She has a lot of money in her bank account.',
        },
        {
          sentence: 'Geld kann viele Türen öffnen.',
          translation: 'Money can open many doors.',
        },
        {
          sentence: 'Er verdient sein Geld als Schauspieler.',
          translation: 'He earns his money as an actor.',
        },
        {
          sentence: 'Geld allein macht nicht glücklich, aber es hilft.',
          translation: "Money alone doesn't make you happy, but it helps.",
        },
        {
          sentence: 'Sie zählte ihr Geld, um sicherzugehen, dass es stimmt.',
          translation: 'She counted her money to make sure it was correct.',
        },
      ],
    },
    {
      word: 'dienen',
      desc: "Verb meaning 'serve', to perform duties or services for.",
      examples: [
        {
          sentence: 'Er diente seinem Land als Soldat.',
          translation: 'He served his country as a soldier.',
        },
        {
          sentence: 'Die Organisation dient der Förderung der Bildung.',
          translation: 'The organization serves the promotion of education.',
        },
        {
          sentence: 'Der Kellner diente den Gästen mit einem Lächeln.',
          translation: 'The waiter served the guests with a smile.',
        },
        {
          sentence: 'Sie entschied sich, ihrem Volk zu dienen.',
          translation: 'She decided to serve her people.',
        },
        {
          sentence: 'Der Arzt dient der Gesundheit seiner Patienten.',
          translation: 'The doctor serves the health of his patients.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'erscheinen, Straße, Karte, regen, Regel, regieren, ziehen, Kälte, Hinweis, Stimme',
  words: [
    {
      word: 'erscheinen',
      desc: "Verb meaning 'appear', to become visible or noticeable, especially without apparent cause.",
      examples: [
        {
          sentence: 'Die Sonne erscheint am Morgen.',
          translation: 'The sun appears in the morning.',
        },
        {
          sentence: 'Es erscheint, als ob niemand zu Hause ist.',
          translation: 'It appears as if nobody is at home.',
        },
        {
          sentence: 'Der Dieb erschien aus dem Nichts und verschwand wieder.',
          translation:
            'The thief appeared out of nowhere and disappeared again.',
        },
        {
          sentence: 'Das Schiff erschien am Horizont.',
          translation: 'The ship appeared on the horizon.',
        },
        {
          sentence: 'Die Sterne erscheinen in der klaren Nacht.',
          translation: 'The stars appear in the clear night.',
        },
      ],
    },
    {
      word: 'Straße',
      desc: "Noun meaning 'road', a public thoroughfare, especially in a city or town.",
      examples: [
        {
          sentence: 'Die Straße war mit Autos verstopft.',
          translation: 'The road was jammed with cars.',
        },
        {
          sentence: 'Sie überquerten die Straße bei der Fußgängerampel.',
          translation: 'They crossed the road at the pedestrian light.',
        },
        {
          sentence: 'Die Straße führte durch den Wald.',
          translation: 'The road led through the forest.',
        },
        {
          sentence: 'Die alte Straße war mit Kopfsteinpflaster bedeckt.',
          translation: 'The old road was paved with cobblestones.',
        },
        {
          sentence: 'Die Straße war wegen Bauarbeiten gesperrt.',
          translation: 'The road was closed due to construction work.',
        },
      ],
    },
    {
      word: 'Karte',
      desc: "Noun meaning 'map', a diagrammatic representation of an area of land or sea showing physical features, cities, roads, etc.",
      examples: [
        {
          sentence: 'Er studierte die Karte, um den Weg zu finden.',
          translation: 'He studied the map to find the way.',
        },
        {
          sentence:
            'Die Karte zeigt alle wichtigen Sehenswürdigkeiten der Stadt.',
          translation: 'The map shows all the important sights of the city.',
        },
        {
          sentence: 'Eine detaillierte Karte ist für Wanderer unerlässlich.',
          translation: 'A detailed map is essential for hikers.',
        },
        {
          sentence: 'Die Karte ist veraltet und zeigt nicht mehr alle Straßen.',
          translation:
            'The map is outdated and no longer shows all the streets.',
        },
        {
          sentence: 'Sie malte eine Karte von ihrer Fantasiewelt.',
          translation: 'She drew a map of her fantasy world.',
        },
      ],
    },
    {
      word: 'regen',
      desc: "Noun meaning 'rain', moisture condensed from the atmosphere that falls visibly in separate drops.",
      examples: [
        {
          sentence: 'Der Regen fiel sanft auf die Erde.',
          translation: 'The rain fell gently on the earth.',
        },
        {
          sentence: 'Ein warmer Regen erfrischte die Luft.',
          translation: 'A warm rain refreshed the air.',
        },
        {
          sentence: 'Der Regen prasselte gegen das Fenster.',
          translation: 'The rain pattered against the window.',
        },
        {
          sentence: 'Nach dem Regen erschien ein Regenbogen am Himmel.',
          translation: 'After the rain, a rainbow appeared in the sky.',
        },
        {
          sentence: 'Der Regen brachte Erleichterung nach der Hitze.',
          translation: 'The rain brought relief after the heat.',
        },
      ],
    },
    {
      word: 'Regel',
      desc: "Noun meaning 'rule', one of a set of explicit or understood regulations or principles governing conduct or procedure within a particular area of activity.",
      examples: [
        {
          sentence: 'Sie folgte den Regeln des Spiels.',
          translation: 'She followed the rules of the game.',
        },
        {
          sentence: 'Die wichtigste Regel ist, ehrlich zu sein.',
          translation: 'The most important rule is to be honest.',
        },
        {
          sentence: 'Die Regeln wurden sorgfältig festgelegt und überprüft.',
          translation: 'The rules were carefully established and reviewed.',
        },
        {
          sentence: 'Er brach die Regeln und wurde disqualifiziert.',
          translation: 'He broke the rules and was disqualified.',
        },
        {
          sentence:
            'Die Schule hat klare Regeln für das Verhalten der Schüler.',
          translation:
            'The school has clear rules for the behavior of the students.',
        },
      ],
    },
    {
      word: 'regieren',
      desc: "Verb meaning 'govern', to control, rule, or direct by influence or authority.",
      examples: [
        {
          sentence: 'Der Präsident regiert das Land mit einer starken Hand.',
          translation: 'The president governs the country with a strong hand.',
        },
        {
          sentence: 'Die Königin regiert seit vielen Jahren über ihr Reich.',
          translation: 'The queen has ruled over her realm for many years.',
        },
        {
          sentence: 'Eine demokratisch gewählte Regierung regiert das Land.',
          translation:
            'A democratically elected government governs the country.',
        },
        {
          sentence: 'Die Stadt wird von einem Stadtrat regiert.',
          translation: 'The city is governed by a city council.',
        },
        {
          sentence:
            'Sie regierten das Land nach den Grundsätzen der Gerechtigkeit.',
          translation:
            'They governed the country according to the principles of justice.',
        },
      ],
    },
    {
      word: 'ziehen',
      desc: "Verb meaning 'pull', to exert force to move something towards or with oneself by the application of steady force.",
      examples: [
        {
          sentence: 'Sie zog das schwere Sofa über den Teppich.',
          translation: 'She pulled the heavy sofa across the carpet.',
        },
        {
          sentence: 'Er zog den Vorhang zur Seite und ließ das Licht herein.',
          translation: 'He drew the curtain aside and let the light in.',
        },
        {
          sentence: 'Sie zog das Seil fest, um das Tor zu schließen.',
          translation: 'She pulled the rope tight to close the gate.',
        },
        {
          sentence: 'Die Kinder zogen den Schlitten den Hügel hinauf.',
          translation: 'The children pulled the sled up the hill.',
        },
        {
          sentence:
            'Sie zog an meinem Ärmel, um meine Aufmerksamkeit zu erregen.',
          translation: 'She pulled at my sleeve to get my attention.',
        },
      ],
    },
    {
      word: 'Kälte',
      desc: "Noun meaning 'cold', the quality or condition of having a low temperature, especially when caused by a reduction in heat.",
      examples: [
        {
          sentence: 'Die Kälte des Winters drang durch die Fenster.',
          translation: 'The cold of winter seeped through the windows.',
        },
        {
          sentence:
            'Sie zog sich einen Mantel an, um sich vor der Kälte zu schützen.',
          translation: 'She put on a coat to protect herself from the cold.',
        },
        {
          sentence:
            'Die Kälte des Wassers war erfrischend nach einem langen Spaziergang.',
          translation:
            'The coldness of the water was refreshing after a long walk.',
        },
        {
          sentence: 'Die Kälte draußen ließ sie zittern.',
          translation: 'The cold outside made her shiver.',
        },
        {
          sentence: 'Die Kälte der Antarktis ist extrem und lebensfeindlich.',
          translation:
            'The cold of Antarctica is extreme and inhospitable to life.',
        },
      ],
    },
    {
      word: 'Hinweis',
      desc: "Noun meaning 'hint', a slight or indirect indication or suggestion.",
      examples: [
        {
          sentence:
            'Er gab uns einen Hinweis, wie wir das Problem lösen könnten.',
          translation: 'He gave us a hint on how we could solve the problem.',
        },
        {
          sentence: 'Ein deutlicher Hinweis wurde am Eingang angebracht.',
          translation: 'A clear hint was posted at the entrance.',
        },
        {
          sentence:
            'Es gab einige Hinweise darauf, dass er die Wahrheit verbarg.',
          translation: 'There were some hints that he was hiding the truth.',
        },
        {
          sentence:
            'Die Ermittler fanden Hinweise, die auf eine Verbindung hinwiesen.',
          translation:
            'The investigators found clues pointing to a connection.',
        },
        {
          sentence: 'Der Hinweis führte sie zu einem verborgenen Schatz.',
          translation: 'The clue led them to a hidden treasure.',
        },
      ],
    },
    {
      word: 'Stimme',
      desc: "Noun meaning 'voice', the sound produced in a person's larynx and uttered through the mouth, as speech or song.",
      examples: [
        {
          sentence: 'Ihre Stimme war sanft und beruhigend.',
          translation: 'Her voice was gentle and soothing.',
        },
        {
          sentence: 'Seine Stimme zitterte vor Aufregung.',
          translation: 'His voice trembled with excitement.',
        },
        {
          sentence: 'Die Stimme des Sängers füllte den Raum.',
          translation: "The singer's voice filled the room.",
        },
        {
          sentence: 'Ihre Stimme war so laut, dass alle sie hören konnten.',
          translation: 'Her voice was so loud that everyone could hear her.',
        },
        {
          sentence:
            'Seine Stimme war voller Emotionen, als er die Worte sprach.',
          translation: 'His voice was full of emotion as he spoke the words.',
        },
      ],
    },
  ],
};

const section5: Section = {
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

export default section5;
