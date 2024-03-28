import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'genug, Ebene, Mädchen, üblich, jung, bereit, oben, je, rot, Liste',
  words: [
    {
      word: 'genug',
      desc: 'Adjective or adverb indicating a sufficient or adequate quantity or degree.',
      examples: [
        {
          sentence: 'Haben Sie genug Geld für das Ticket?',
          translation: 'Do you have enough money for the ticket?',
        },
        {
          sentence: 'Das Essen war genug für alle Gäste.',
          translation: 'The food was enough for all the guests.',
        },
        {
          sentence: 'Ich habe genug Zeit, um den Bericht zu beenden.',
          translation: 'I have enough time to finish the report.',
        },
        {
          sentence: 'Wir haben genug Platz für alle deine Sachen.',
          translation: 'We have enough space for all your things.',
        },
        {
          sentence: 'Bist du sicher, dass das genug ist?',
          translation: "Are you sure that's enough?",
        },
      ],
    },
    {
      word: 'Ebene',
      desc: 'Noun referring to a flat, level, or even surface.',
      examples: [
        {
          sentence: 'Die Ebene erstreckte sich bis zum Horizont.',
          translation: 'The plain extended to the horizon.',
        },
        {
          sentence:
            'Wir wanderten über die Ebene und genossen die weite Aussicht.',
          translation: 'We hiked across the plain and enjoyed the wide view.',
        },
        {
          sentence:
            'Diese Landschaft ist bekannt für ihre ausgedehnten Ebenen.',
          translation: 'This landscape is known for its vast plains.',
        },
        {
          sentence: 'Der Bauernhof liegt in einer flachen Ebene.',
          translation: 'The farm is located in a flat plain.',
        },
        {
          sentence:
            'Die Ebene bot ideale Bedingungen für den Anbau von Getreide.',
          translation: 'The plain offered ideal conditions for growing crops.',
        },
      ],
    },
    {
      word: 'Mädchen',
      desc: 'Noun referring to a female child or young woman.',
      examples: [
        {
          sentence: 'Das Mädchen spielte fröhlich im Garten.',
          translation: 'The girl played happily in the garden.',
        },
        {
          sentence: 'Sie ist ein kluges Mädchen, das gerne liest.',
          translation: 'She is a smart girl who enjoys reading.',
        },
        {
          sentence: 'Das Mädchen trägt ein schönes Kleid zu der Feier.',
          translation: 'The girl is wearing a beautiful dress to the party.',
        },
        {
          sentence: 'Meine kleine Schwester ist ein fröhliches Mädchen.',
          translation: 'My little sister is a cheerful girl.',
        },
        {
          sentence: 'Das Mädchen lachte über den Witz ihres Bruders.',
          translation: "The girl laughed at her brother's joke.",
        },
      ],
    },
    {
      word: 'üblich',
      desc: 'Adjective indicating something that is usual, common, or customary.',
      examples: [
        {
          sentence: 'Es ist üblich, dass sie spät zur Arbeit kommt.',
          translation: 'It is usual for her to arrive late to work.',
        },
        {
          sentence: 'Es ist üblich, dass sie jeden Morgen joggt.',
          translation: 'It is common for her to jog every morning.',
        },
        {
          sentence:
            'Es ist üblich, dass sie an Wochenenden Zeit mit ihrer Familie verbringt.',
          translation:
            'It is customary for her to spend time with her family on weekends.',
        },
        {
          sentence:
            'Es ist üblich, dass sie Tee trinkt, bevor sie ins Bett geht.',
          translation: 'It is usual for her to drink tea before going to bed.',
        },
        {
          sentence: 'Es ist üblich, dass sie am Sonntag ausschläft.',
          translation: 'It is customary for her to sleep in on Sundays.',
        },
      ],
    },
    {
      word: 'jung',
      desc: 'Adjective describing someone or something as being young in age or having youthful characteristics.',
      examples: [
        {
          sentence:
            'Die jungen Schüler waren aufgeregt, den Ausflug zu machen.',
          translation:
            'The young students were excited to go on the field trip.',
        },
        {
          sentence: 'Die jungen Bäume wurden gerade erst gepflanzt.',
          translation: 'The young trees were just planted.',
        },
        {
          sentence: 'Er ist ein talentierter junger Musiker.',
          translation: 'He is a talented young musician.',
        },
        {
          sentence: 'In unserer Jugend waren wir sehr abenteuerlustig.',
          translation: 'In our youth, we were very adventurous.',
        },
        {
          sentence: 'Das junge Paar verliebte sich während ihres Studiums.',
          translation: 'The young couple fell in love during their studies.',
        },
      ],
    },
    {
      word: 'bereit',
      desc: 'Adjective or adverb indicating readiness, willingness, or preparedness.',
      examples: [
        {
          sentence: 'Er ist bereit, Verantwortung zu übernehmen.',
          translation: 'He is ready to take responsibility.',
        },
        {
          sentence: 'Die Mannschaft war bereit für das entscheidende Spiel.',
          translation: 'The team was ready for the crucial game.',
        },
        {
          sentence:
            'Sie ist immer bereit zu helfen, wenn jemand Unterstützung braucht.',
          translation:
            'She is always ready to help when someone needs support.',
        },
        {
          sentence: 'Bist du bereit für die Präsentation?',
          translation: 'Are you ready for the presentation?',
        },
        {
          sentence:
            'Die Schüler waren bereit für die Prüfung, nachdem sie hart gearbeitet hatten.',
          translation:
            'The students were ready for the exam after working hard.',
        },
      ],
    },
    {
      word: 'oben',
      desc: 'Adverb or preposition indicating a location or position at or to a higher place.',
      examples: [
        {
          sentence: 'Die Schlüssel liegen oben auf dem Tisch.',
          translation: 'The keys are on top of the table.',
        },
        {
          sentence: 'Wir gingen die Treppe hinauf und kamen oben an.',
          translation: 'We walked up the stairs and arrived at the top.',
        },
        {
          sentence: 'Der Ball landete auf dem Dach des Hauses.',
          translation: 'The ball landed on top of the house.',
        },
        {
          sentence: 'Das Büro des Chefs ist oben im Gebäude.',
          translation: "The boss's office is upstairs in the building.",
        },
        {
          sentence: 'Die Kinder spielen oben auf dem Hügel.',
          translation: 'The children are playing up on the hill.',
        },
      ],
    },
    {
      word: 'je',
      desc: "Adverb indicating 'ever' or 'at any time'.",
      examples: [
        {
          sentence: 'Das ist das beste Buch, das ich je gelesen habe.',
          translation: "That's the best book I've ever read.",
        },
        {
          sentence: 'Das Restaurant war so schlecht wie je zuvor.',
          translation: 'The restaurant was as bad as ever.',
        },
        {
          sentence: 'Er arbeitet härter als je zuvor.',
          translation: 'He works harder than ever before.',
        },
        {
          sentence:
            'Das war eine der interessantesten Reisen, die ich je gemacht habe.',
          translation:
            "That was one of the most interesting trips I've ever taken.",
        },
        {
          sentence: 'Es war einfacher als je zuvor, den Computer zu bedienen.',
          translation: 'It was easier than ever before to use the computer.',
        },
      ],
    },
    {
      word: 'rot',
      desc: 'Adjective referring to the color red.',
      examples: [
        {
          sentence: 'Das ist mein neues rotes Kleid.',
          translation: 'This is my new red dress.',
        },
        {
          sentence: 'Die Blumen blühen in einem leuchtenden Rot.',
          translation: 'The flowers bloom in a bright red.',
        },
        {
          sentence: 'Die Ampel ist rot, also müssen wir anhalten.',
          translation: 'The traffic light is red, so we must stop.',
        },
        {
          sentence: 'Seine Wangen wurden rot vor Verlegenheit.',
          translation: 'His cheeks turned red with embarrassment.',
        },
        {
          sentence: 'Der Apfel war saftig und rot.',
          translation: 'The apple was juicy and red.',
        },
      ],
    },
    {
      word: 'Liste',
      desc: 'Noun referring to a series of items written down, typically in a particular order.',
      examples: [
        {
          sentence: 'Ich habe eine Liste von Dingen, die ich erledigen muss.',
          translation: 'I have a list of things I need to do.',
        },
        {
          sentence: 'Bitte schreibe deinen Namen auf die Liste.',
          translation: 'Please write your name on the list.',
        },
        {
          sentence: 'Die Liste der Zutaten für das Rezept war lang.',
          translation: 'The list of ingredients for the recipe was long.',
        },
        {
          sentence: 'Können Sie mir eine Liste der verfügbaren Optionen geben?',
          translation: 'Can you give me a list of the available options?',
        },
        {
          sentence: 'Ich habe alle Artikel auf meiner Einkaufsliste gefunden.',
          translation: 'I found all the items on my shopping list.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'obwohl, fühlen, Vortrag, Vogel, bald, Körper, Hund, Familie, direkt, Pose',
  words: [
    {
      word: 'obwohl',
      desc: 'Conjunction indicating a contrast or concession.',
      examples: [
        {
          sentence: 'Sie wollte gehen, obwohl sie krank war.',
          translation: 'She wanted to go, although she was sick.',
        },
        {
          sentence: 'Er ist müde, obwohl er früh ins Bett gegangen ist.',
          translation: 'He is tired, although he went to bed early.',
        },
        {
          sentence: 'Obwohl es regnete, gingen sie spazieren.',
          translation: 'Although it was raining, they went for a walk.',
        },
        {
          sentence: 'Sie lachte, obwohl sie traurig war.',
          translation: 'She laughed, although she was sad.',
        },
        {
          sentence: 'Er blieb zu Hause, obwohl er eingeladen wurde.',
          translation: 'He stayed home, although he was invited.',
        },
      ],
    },
    {
      word: 'fühlen',
      desc: 'Verb indicating the perception or experience of emotions, sensations, or physical contact.',
      examples: [
        {
          sentence:
            'Sie fühlt sich glücklich, wenn sie Zeit mit ihrer Familie verbringt.',
          translation: 'She feels happy when she spends time with her family.',
        },
        {
          sentence: 'Ich fühle die Wärme der Sonne auf meiner Haut.',
          translation: 'I feel the warmth of the sun on my skin.',
        },
        {
          sentence: 'Er fühlt Trauer über den Verlust seines Freundes.',
          translation: 'He feels sadness over the loss of his friend.',
        },
        {
          sentence: 'Sie fühlt sich entspannt, wenn sie Musik hört.',
          translation: 'She feels relaxed when she listens to music.',
        },
        {
          sentence: 'Ich fühle mich einsam, wenn ich alleine bin.',
          translation: 'I feel lonely when I am alone.',
        },
      ],
    },
    {
      word: 'Vortrag',
      desc: 'Noun referring to a talk, lecture, or presentation.',
      examples: [
        {
          sentence:
            'Der Professor hielt einen interessanten Vortrag über die Geschichte der Mathematik.',
          translation:
            'The professor gave an interesting lecture on the history of mathematics.',
        },
        {
          sentence: 'Sie bereitete sich gründlich auf ihren Vortrag vor.',
          translation: 'She prepared thoroughly for her presentation.',
        },
        {
          sentence:
            'Der Vortrag dauerte eine Stunde und beinhaltete eine Frage-und-Antwort-Runde.',
          translation:
            'The talk lasted for an hour and included a question-and-answer session.',
        },
        {
          sentence: 'Die Schüler hörten aufmerksam dem Vortrag des Gastes zu.',
          translation:
            "The students listened attentively to the guest's lecture.",
        },
        {
          sentence:
            'Er hielt einen Vortrag über die Auswirkungen des Klimawandels auf die Ozeane.',
          translation:
            'He gave a presentation on the effects of climate change on the oceans.',
        },
      ],
    },
    {
      word: 'Vogel',
      desc: 'Noun referring to a bird, a warm-blooded vertebrate with feathers and wings.',
      examples: [
        {
          sentence: 'Die Kinder fütterten die Vögel im Park.',
          translation: 'The children fed the birds in the park.',
        },
        {
          sentence: 'Ein bunter Vogel landete auf dem Fensterbrett.',
          translation: 'A colorful bird landed on the windowsill.',
        },
        {
          sentence: 'Die Vögel zwitscherten fröhlich im Baum.',
          translation: 'The birds chirped happily in the tree.',
        },
        {
          sentence: 'Ein kleiner Vogel baute sein Nest im Garten.',
          translation: 'A small bird built its nest in the garden.',
        },
        {
          sentence: 'Die Vögel fliegen in den Süden, wenn der Winter kommt.',
          translation: 'The birds fly south when winter comes.',
        },
      ],
    },
    {
      word: 'bald',
      desc: 'Adverb indicating a short time into the future, soon.',
      examples: [
        {
          sentence: 'Wir werden bald zu Hause sein.',
          translation: 'We will be home soon.',
        },
        {
          sentence: 'Der Sommer ist bald vorbei.',
          translation: 'Summer is almost over.',
        },
        {
          sentence: 'Bald beginnt die Schule wieder.',
          translation: 'School starts again soon.',
        },
        {
          sentence: 'Bald wird es dunkel draußen.',
          translation: 'It will be dark outside soon.',
        },
        {
          sentence: 'Wir sehen uns bald wieder.',
          translation: "We'll see each other again soon.",
        },
      ],
    },
    {
      word: 'Körper',
      desc: 'Noun referring to the physical structure or anatomy of a person or animal.',
      examples: [
        {
          sentence:
            'Der Körper braucht ausreichend Schlaf, um sich zu erholen.',
          translation: 'The body needs enough sleep to recover.',
        },
        {
          sentence: 'Regelmäßige Bewegung ist gut für den Körper.',
          translation: 'Regular exercise is good for the body.',
        },
        {
          sentence: 'Sie hat eine Verletzung am Oberkörper.',
          translation: 'She has an injury to her upper body.',
        },
        {
          sentence: 'Der Körper besteht aus vielen verschiedenen Organen.',
          translation: 'The body consists of many different organs.',
        },
        {
          sentence: 'Die Krankheit betrifft den ganzen Körper.',
          translation: 'The illness affects the entire body.',
        },
      ],
    },
    {
      word: 'Hund',
      desc: 'Noun referring to a domesticated carnivorous mammal, commonly kept as a pet or for work.',
      examples: [
        {
          sentence: 'Der Hund bellte, als der Postbote kam.',
          translation: 'The dog barked when the mailman arrived.',
        },
        {
          sentence: 'Sie hat einen kleinen Hund namens Max.',
          translation: 'She has a small dog named Max.',
        },
        {
          sentence: 'Der Hund lief fröhlich im Garten herum.',
          translation: 'The dog ran happily around the garden.',
        },
        {
          sentence: 'Die Kinder spielten mit dem Hund im Park.',
          translation: 'The children played with the dog in the park.',
        },
        {
          sentence: 'Der Hund war sehr loyal und schützte sein Herrchen.',
          translation: 'The dog was very loyal and protected its master.',
        },
      ],
    },
    {
      word: 'Familie',
      desc: 'Noun referring to a group of people related by blood, marriage, or adoption.',
      examples: [
        {
          sentence: 'Die ganze Familie versammelte sich zum Abendessen.',
          translation: 'The whole family gathered for dinner.',
        },
        {
          sentence:
            'Sie verbrachten die Ferien bei ihrer Familie auf dem Land.',
          translation:
            'They spent the holidays with their family in the countryside.',
        },
        {
          sentence: 'Die Familie feierte gemeinsam den Geburtstag der Oma.',
          translation: "The family celebrated Grandma's birthday together.",
        },
        {
          sentence:
            'Unsere Familie hat einen Familienausflug in den Zoo gemacht.',
          translation: 'Our family went on a family trip to the zoo.',
        },
        {
          sentence: 'Familie ist das Wichtigste im Leben.',
          translation: 'Family is the most important thing in life.',
        },
      ],
    },
    {
      word: 'direkt',
      desc: 'Adjective or adverb indicating a straight path or immediate proximity.',
      examples: [
        {
          sentence: 'Die Apotheke ist direkt gegenüber dem Supermarkt.',
          translation: 'The pharmacy is directly across from the supermarket.',
        },
        {
          sentence: 'Das Hotel liegt direkt am Strand.',
          translation: 'The hotel is right on the beach.',
        },
        {
          sentence: 'Die Wohnung befindet sich direkt im Zentrum der Stadt.',
          translation:
            'The apartment is located right in the center of the city.',
        },
        {
          sentence: 'Die Schule liegt direkt neben dem Park.',
          translation: 'The school is located right next to the park.',
        },
        {
          sentence: 'Er sagte mir direkt, dass er nicht kommen würde.',
          translation: "He told me straightaway that he wouldn't come.",
        },
      ],
    },
    {
      word: 'Pose',
      desc: 'Noun referring to a particular position or posture, especially in art or photography.',
      examples: [
        {
          sentence: 'Der Künstler bat das Modell, eine Pose einzunehmen.',
          translation: 'The artist asked the model to strike a pose.',
        },
        {
          sentence: 'Sie posierten vor dem Denkmal für ein Foto.',
          translation: 'They posed in front of the monument for a photo.',
        },
        {
          sentence: 'Die Statue zeigt eine majestätische Pose.',
          translation: 'The statue depicts a majestic pose.',
        },
        {
          sentence:
            'Der Fotograf leitete das Model an, verschiedene Posen auszuprobieren.',
          translation:
            'The photographer instructed the model to try different poses.',
        },
        {
          sentence: 'Er konnte die Pose des Modells perfekt nachzeichnen.',
          translation: "He could perfectly draw the model's pose.",
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'verlassen, Lied, messen, Tür, Produkt, schwarz, kurz, Zahl, Klasse, Wind',
  words: [
    {
      word: 'verlassen',
      desc: 'Verb meaning to depart from, abandon, or forsake.',
      examples: [
        {
          sentence:
            'Sie mussten das Land verlassen und in ein neues Land ziehen.',
          translation: 'They had to leave the country and move to a new one.',
        },
        {
          sentence: 'Nach dem Streit verließ er wütend das Zimmer.',
          translation: 'After the argument, he angrily left the room.',
        },
        {
          sentence:
            'Sie verlassen die Firma, um eine neue Karriere zu beginnen.',
          translation: 'They are leaving the company to start a new career.',
        },
        {
          sentence:
            'Die Stadt wurde von den Bewohnern verlassen, als der Krieg ausbrach.',
          translation:
            'The city was abandoned by its residents when the war broke out.',
        },
        {
          sentence: 'Er fühlte sich von seinen Freunden verlassen.',
          translation: 'He felt abandoned by his friends.',
        },
      ],
    },
    {
      word: 'Lied',
      desc: 'Noun referring to a musical composition, typically with lyrics and melody.',
      examples: [
        {
          sentence: 'Sie sang ein trauriges Lied über die Liebe.',
          translation: 'She sang a sad song about love.',
        },
        {
          sentence: 'Das Lied war sehr eingängig und wurde ein Hit.',
          translation: 'The song was very catchy and became a hit.',
        },
        {
          sentence: 'Er komponierte ein neues Lied für das Konzert.',
          translation: 'He composed a new song for the concert.',
        },
        {
          sentence: 'Die Band spielte ihre beliebtesten Lieder auf der Bühne.',
          translation: 'The band played their most popular songs on stage.',
        },
        {
          sentence: 'Das Lied erinnerte sie an ihre Kindheit.',
          translation: 'The song reminded her of her childhood.',
        },
      ],
    },
    {
      word: 'messen',
      desc: 'Verb meaning to determine the size, amount, or degree of something.',
      examples: [
        {
          sentence: 'Er maß die Entfernung zwischen den beiden Punkten.',
          translation: 'He measured the distance between the two points.',
        },
        {
          sentence: 'Die Waage misst das Gewicht genau.',
          translation: 'The scale measures the weight accurately.',
        },
        {
          sentence: 'Das Thermometer misst die Temperatur.',
          translation: 'The thermometer measures the temperature.',
        },
        {
          sentence: 'Der Architekt maß die Abmessungen des Raums.',
          translation: 'The architect measured the dimensions of the room.',
        },
        {
          sentence: 'Sie maß ihre Fähigkeiten und erkannte ihre Stärken.',
          translation: 'She measured her skills and recognized her strengths.',
        },
      ],
    },
    {
      word: 'Tür',
      desc: 'Noun referring to a hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle.',
      examples: [
        {
          sentence: 'Sie klopfte an die Tür, aber niemand antwortete.',
          translation: 'She knocked on the door, but no one answered.',
        },
        {
          sentence:
            'Die Tür war verschlossen, und sie konnte nicht hineingehen.',
          translation: "The door was locked, and she couldn't go in.",
        },
        {
          sentence: 'Die Tür zum Badezimmer war offen.',
          translation: 'The door to the bathroom was open.',
        },
        {
          sentence: 'Er öffnete die Tür und trat in den Raum ein.',
          translation: 'He opened the door and entered the room.',
        },
        {
          sentence: 'Sie schloss die Tür hinter sich und ging hinaus.',
          translation: 'She closed the door behind her and went out.',
        },
      ],
    },
    {
      word: 'Produkt',
      desc: 'Noun referring to something produced or manufactured, typically for sale.',
      examples: [
        {
          sentence:
            'Das Unternehmen hat ein neues Produkt auf den Markt gebracht.',
          translation: 'The company has launched a new product on the market.',
        },
        {
          sentence:
            'Der Ingenieur arbeitet an der Entwicklung des neuen Produkts.',
          translation:
            'The engineer is working on the development of the new product.',
        },
        {
          sentence:
            'Das Produkt wurde sorgfältig getestet, bevor es freigegeben wurde.',
          translation:
            'The product was carefully tested before being released.',
        },
        {
          sentence:
            'Kundenrezensionen können bei der Entscheidung für ein Produkt hilfreich sein.',
          translation:
            'Customer reviews can be helpful in deciding on a product.',
        },
        {
          sentence:
            'Das Unternehmen produziert hochwertige Produkte zu erschwinglichen Preisen.',
          translation:
            'The company produces high-quality products at affordable prices.',
        },
      ],
    },
    {
      word: 'schwarz',
      desc: 'Adjective describing the color black.',
      examples: [
        {
          sentence: 'Sie trug ein schwarzes Kleid zur Party.',
          translation: 'She wore a black dress to the party.',
        },
        {
          sentence: 'Die Katze hatte schwarzes Fell.',
          translation: 'The cat had black fur.',
        },
        {
          sentence: 'Er kaufte schwarze Schuhe, um sie zur Arbeit zu tragen.',
          translation: 'He bought black shoes to wear to work.',
        },
        {
          sentence: 'Das Auto war schwarz lackiert.',
          translation: 'The car was painted black.',
        },
        {
          sentence: 'Der Himmel war schwarz und voller Sterne.',
          translation: 'The sky was black and full of stars.',
        },
      ],
    },
    {
      word: 'kurz',
      desc: 'Adjective describing a small length or duration.',
      examples: [
        {
          sentence: 'Das Meeting dauerte nur kurze Zeit.',
          translation: 'The meeting lasted only a short time.',
        },
        {
          sentence: 'Sie trug ein kurzes Kleid für die Party.',
          translation: 'She wore a short dress to the party.',
        },
        {
          sentence: 'Er schrieb einen kurzen Brief an seine Freundin.',
          translation: 'He wrote a short letter to his girlfriend.',
        },
        {
          sentence: 'Der Film war nur 10 Minuten lang.',
          translation: 'The movie was only 10 minutes long.',
        },
        {
          sentence: 'Die Antwort war kurz und klar.',
          translation: 'The answer was short and clear.',
        },
      ],
    },
    {
      word: 'Zahl',
      desc: 'Noun describing a mathematical number or quantity.',
      examples: [
        {
          sentence: 'Die Zahl 10 ist eine gerade Zahl.',
          translation: 'The number 10 is an even number.',
        },
        {
          sentence: 'Er lernte, die Zahlen von 1 bis 100 zu zählen.',
          translation: 'He learned to count the numbers from 1 to 100.',
        },
        {
          sentence: 'Die Telefonnummer besteht aus einer Reihe von Zahlen.',
          translation: 'The phone number consists of a series of numbers.',
        },
        {
          sentence:
            'Die Zahl der Teilnehmer an der Veranstaltung stieg weiter an.',
          translation:
            'The number of participants in the event continued to rise.',
        },
        {
          sentence: 'Der Lehrer fragte nach der Summe der Zahlen.',
          translation: 'The teacher asked for the sum of the numbers.',
        },
      ],
    },
    {
      word: 'Klasse',
      desc: 'Noun describing a group of students in a school.',
      examples: [
        {
          sentence: 'Die Klasse besteht aus 25 Schülern und Schülerinnen.',
          translation: 'The class consists of 25 students.',
        },
        {
          sentence: 'Sie war die Klassenbeste in Mathematik.',
          translation: 'She was the top student in math class.',
        },
        {
          sentence: 'Die Lehrerin hielt eine Stunde in der Klasse ab.',
          translation: 'The teacher conducted a lesson in the classroom.',
        },
        {
          sentence: 'Die Klasse machte einen Ausflug in das Naturkundemuseum.',
          translation:
            'The class took a field trip to the natural history museum.',
        },
        {
          sentence: 'Die Klasse diskutierte über das Thema Umweltschutz.',
          translation:
            'The class discussed the topic of environmental protection.',
        },
      ],
    },
    {
      word: 'Wind',
      desc: 'Noun describing the movement of air.',
      examples: [
        {
          sentence: 'Der Wind blies stark und brachte kühle Luft.',
          translation: 'The wind blew strongly and brought cool air.',
        },
        {
          sentence: 'Sie segelten mit dem Wind über das Meer.',
          translation: 'They sailed with the wind across the sea.',
        },
        {
          sentence:
            'Die Windgeschwindigkeit wurde in Kilometern pro Stunde gemessen.',
          translation: 'The wind speed was measured in kilometers per hour.',
        },
        {
          sentence:
            'Der Wind drehte sich und änderte die Richtung des Drachens.',
          translation:
            'The wind shifted and changed the direction of the kite.',
        },
        {
          sentence: 'Der Wind spielte mit den Blättern der Bäume.',
          translation: 'The wind played with the leaves of the trees.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Frage, passieren, vollständig, Schiff, Bereich, Hälfte, Stein, bestellen, Feuer, Süden',
  words: [
    {
      word: 'Frage',
      desc: 'Noun describing an inquiry or interrogative sentence.',
      examples: [
        {
          sentence: 'Er stellte eine Frage zum Thema Politik.',
          translation: 'He asked a question about politics.',
        },
        {
          sentence:
            'Die Lehrerin beantwortete geduldig alle Fragen der Schüler.',
          translation:
            "The teacher patiently answered all the students' questions.",
        },
        {
          sentence: 'Die Frage nach dem Sinn des Lebens beschäftigte ihn.',
          translation: 'The question about the meaning of life troubled him.',
        },
        {
          sentence:
            'Die Frage nach der Zukunft der Wirtschaft war Gegenstand der Diskussion.',
          translation:
            'The question about the future of the economy was the subject of discussion.',
        },
        {
          sentence: 'Er konnte die Frage nicht richtig beantworten.',
          translation: "He couldn't answer the question correctly.",
        },
      ],
    },
    {
      word: 'passieren',
      desc: 'Verb meaning to occur or to take place.',
      examples: [
        {
          sentence: 'Der Unfall passierte auf der Autobahn.',
          translation: 'The accident happened on the highway.',
        },
        {
          sentence: 'Es ist wichtig zu verstehen, was in der Welt passiert.',
          translation:
            'It is important to understand what is happening in the world.',
        },
        {
          sentence: 'Die Prüfung passierte ohne Probleme.',
          translation: 'The exam went smoothly.',
        },
        {
          sentence: 'Wie konnte das passieren?',
          translation: 'How could that happen?',
        },
        {
          sentence: 'Es kann jederzeit etwas Unerwartetes passieren.',
          translation: 'Something unexpected can happen at any time.',
        },
      ],
    },
    {
      word: 'vollständig',
      desc: 'Adjective meaning complete or fully.',
      examples: [
        {
          sentence: 'Das Projekt war vollständig abgeschlossen.',
          translation: 'The project was fully completed.',
        },
        {
          sentence: 'Sie las den Text vollständig bis zum Ende.',
          translation: 'She read the text completely to the end.',
        },
        {
          sentence: 'Die Antwort war vollständig und umfassend.',
          translation: 'The answer was complete and comprehensive.',
        },
        {
          sentence: 'Der Raum war vollständig leer.',
          translation: 'The room was completely empty.',
        },
        {
          sentence: 'Er war vollständig mit der Aufgabe beschäftigt.',
          translation: 'He was fully occupied with the task.',
        },
      ],
    },
    {
      word: 'Schiff',
      desc: 'Noun describing a large boat or vessel for transportation on water.',
      examples: [
        {
          sentence: 'Das Schiff segelte über das Meer.',
          translation: 'The ship sailed across the sea.',
        },
        {
          sentence: 'Das Kreuzfahrtschiff legte im Hafen an.',
          translation: 'The cruise ship docked in the harbor.',
        },
        {
          sentence: 'Das Schiff transportierte Waren über den Fluss.',
          translation: 'The ship transported goods across the river.',
        },
        {
          sentence: 'Die Piraten kaperten das Handelsschiff.',
          translation: 'The pirates seized the merchant ship.',
        },
        {
          sentence: 'Das Schiff war für eine lange Reise ausgerüstet.',
          translation: 'The ship was equipped for a long journey.',
        },
      ],
    },
    {
      word: 'Bereich',
      desc: 'Noun describing an area or field.',
      examples: [
        {
          sentence:
            'Der Bereich der Medizin hat sich in den letzten Jahren stark entwickelt.',
          translation:
            'The field of medicine has developed significantly in recent years.',
        },
        {
          sentence: 'Dieser Bereich des Parks ist für Picknicks reserviert.',
          translation: 'This area of the park is reserved for picnics.',
        },
        {
          sentence: 'Sie arbeitet im Bereich der IT.',
          translation: 'She works in the field of IT.',
        },
        {
          sentence: 'Im Bereich der Bildung gibt es viele Herausforderungen.',
          translation: 'There are many challenges in the field of education.',
        },
        {
          sentence:
            'Die Firma ist in einem breiten Bereich von Geschäftstätigkeiten tätig.',
          translation:
            'The company is involved in a wide range of business activities.',
        },
      ],
    },
    {
      word: 'Hälfte',
      desc: 'Noun describing one of two equal parts.',
      examples: [
        {
          sentence: 'Er teilte den Kuchen in zwei Hälften.',
          translation: 'He divided the cake into two halves.',
        },
        {
          sentence: 'Die Hälfte der Arbeit war bereits erledigt.',
          translation: 'Half of the work was already done.',
        },
        {
          sentence: 'Sie hatte nur noch die Hälfte des Geldes übrig.',
          translation: 'She only had half of the money left.',
        },
        {
          sentence: 'Die Hälfte der Bevölkerung stimmte dem Vorschlag zu.',
          translation: 'Half of the population agreed with the proposal.',
        },
        {
          sentence: 'Sie wachte erst in der zweiten Hälfte des Films auf.',
          translation: 'She only woke up in the second half of the movie.',
        },
      ],
    },
    {
      word: 'Stein',
      desc: 'Noun describing a small piece of rock or mineral.',
      examples: [
        {
          sentence: 'Er sammelte bunte Steine am Strand.',
          translation: 'He collected colorful stones on the beach.',
        },
        {
          sentence: 'Der Stein war scharf und konnte verletzen.',
          translation: 'The stone was sharp and could cause injury.',
        },
        {
          sentence: 'Sie legte den Stein auf den Boden.',
          translation: 'She put the stone on the ground.',
        },
        {
          sentence: 'Der Stein fiel von der Mauer.',
          translation: 'The stone fell from the wall.',
        },
        {
          sentence: 'Der Stein bildete eine natürliche Grenze.',
          translation: 'The stone formed a natural boundary.',
        },
      ],
    },
    {
      word: 'bestellen',
      desc: 'Verb meaning to order or arrange.',
      examples: [
        {
          sentence: 'Sie bestellte eine Pizza zum Abendessen.',
          translation: 'She ordered a pizza for dinner.',
        },
        {
          sentence: 'Er bestellte Bücher im Internet.',
          translation: 'He ordered books online.',
        },
        {
          sentence: 'Wir haben einen Tisch im Restaurant bestellt.',
          translation: 'We ordered a table at the restaurant.',
        },
        {
          sentence: 'Kannst du bitte ein Taxi bestellen?',
          translation: 'Can you please order a taxi?',
        },
        {
          sentence: 'Die Firma bestellte neue Büromöbel.',
          translation: 'The company ordered new office furniture.',
        },
      ],
    },
    {
      word: 'Feuer',
      desc: 'Noun describing the hot, glowing gas that is usually produced by burning.',
      examples: [
        {
          sentence: 'Sie saß gemütlich vor dem Feuer.',
          translation: 'She sat cozily in front of the fire.',
        },
        {
          sentence: 'Das Feuer wärmte die kalte Nacht.',
          translation: 'The fire warmed the cold night.',
        },
        {
          sentence: 'Wir machten ein Feuer im Kamin.',
          translation: 'We made a fire in the fireplace.',
        },
        {
          sentence: 'Das Feuer zerstörte das alte Gebäude.',
          translation: 'The fire destroyed the old building.',
        },
        {
          sentence: 'Sie kochte Suppe über dem Feuer.',
          translation: 'She cooked soup over the fire.',
        },
      ],
    },
    {
      word: 'Süden',
      desc: 'Noun describing the direction towards the south.',
      examples: [
        {
          sentence: 'Der Kompass zeigte nach Süden.',
          translation: 'The compass pointed south.',
        },
        {
          sentence: 'Im Sommer fliegen viele Vögel in den Süden.',
          translation: 'In summer, many birds fly south.',
        },
        {
          sentence:
            'Wir fuhren in den Süden, um dem kalten Wetter zu entkommen.',
          translation: 'We traveled south to escape the cold weather.',
        },
        {
          sentence: 'Das Land erstreckt sich über den Süden des Kontinents.',
          translation: 'The country extends over the south of the continent.',
        },
        {
          sentence: 'Sie träumte von einem Urlaub im Süden.',
          translation: 'She dreamed of a vacation in the south.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Problem, Stück, sagte, wusste, passieren, seit, obere, ganze, König, Straße',
  words: [
    {
      word: 'Problem',
      desc: 'Noun describing a difficulty or challenge.',
      examples: [
        {
          sentence: 'Sie hatten ein Problem mit dem Auto.',
          translation: 'They had a problem with the car.',
        },
        {
          sentence: 'Das war ein ernsthaftes Problem.',
          translation: 'That was a serious problem.',
        },
        {
          sentence: 'Das Problem wurde schnell gelöst.',
          translation: 'The problem was quickly solved.',
        },
        {
          sentence: 'Wir müssen das Problem angehen.',
          translation: 'We need to address the problem.',
        },
        {
          sentence: 'Das Problem tritt häufig auf.',
          translation: 'The problem occurs frequently.',
        },
      ],
    },
    {
      word: 'Stück',
      desc: 'Noun referring to a piece or part of something.',
      examples: [
        {
          sentence: 'Er nahm ein Stück Kuchen.',
          translation: 'He took a piece of cake.',
        },
        {
          sentence: 'Ein Stück Papier lag auf dem Tisch.',
          translation: 'A piece of paper was lying on the table.',
        },
        {
          sentence: 'Das ist ein wertvolles Stück Kunst.',
          translation: "That's a valuable piece of art.",
        },
        {
          sentence: 'Ein Stück Holz wurde als Brennholz verwendet.',
          translation: 'A piece of wood was used as firewood.',
        },
        {
          sentence: 'Sie brauchen ein Stück Draht, um das zu reparieren.',
          translation: 'You need a piece of wire to fix that.',
        },
      ],
    },
    {
      word: 'sagte',
      desc: "Past tense of the verb 'sagen' meaning 'to say'.",
      examples: [
        {
          sentence: 'Er sagte, er würde später kommen.',
          translation: 'He said he would come later.',
        },
        {
          sentence: 'Sie sagte mir alles.',
          translation: 'She told me everything.',
        },
        {
          sentence: 'Was hat er gesagt?',
          translation: 'What did he say?',
        },
        {
          sentence: 'Sie sagte mir, dass sie es nicht tun würde.',
          translation: "She told me she wouldn't do it.",
        },
        {
          sentence: 'Er sagte nichts.',
          translation: "He didn't say anything.",
        },
      ],
    },
    {
      word: 'wusste',
      desc: "Past tense of the verb 'wissen' meaning 'to know'.",
      examples: [
        {
          sentence: 'Sie wusste nicht, dass er kommt.',
          translation: "She didn't know he was coming.",
        },
        {
          sentence: 'Ich wusste das schon lange.',
          translation: 'I knew that for a long time.',
        },
        {
          sentence: 'Er wusste die Antwort nicht.',
          translation: "He didn't know the answer.",
        },
        {
          sentence: 'Sie wussten nicht, was sie tun sollten.',
          translation: "They didn't know what to do.",
        },
        {
          sentence: 'Ich habe es geahnt, aber ich wusste es nicht sicher.',
          translation: "I suspected it, but I didn't know for sure.",
        },
      ],
    },
    {
      word: 'passieren',
      desc: "Verb meaning 'to happen' or 'to occur'.",
      examples: [
        {
          sentence: 'Was ist passiert?',
          translation: 'What happened?',
        },
        {
          sentence: 'Das kann jedem passieren.',
          translation: 'That can happen to anyone.',
        },
        {
          sentence: 'Es ist nichts passiert.',
          translation: 'Nothing happened.',
        },
        {
          sentence: 'Das darf nicht passieren.',
          translation: 'That must not happen.',
        },
        {
          sentence: 'Wie konnte das passieren?',
          translation: 'How could that happen?',
        },
      ],
    },
    {
      word: 'seit',
      desc: "Preposition meaning 'since' or 'for' when indicating time.",
      examples: [
        {
          sentence: 'Er arbeitet seit vielen Jahren in diesem Unternehmen.',
          translation: 'He has been working at this company for many years.',
        },
        {
          sentence: 'Wir wohnen seit 2010 in dieser Stadt.',
          translation: 'We have been living in this city since 2010.',
        },
        {
          sentence: 'Seit dem Unfall fährt er nicht mehr Auto.',
          translation: 'Since the accident, he no longer drives a car.',
        },
        {
          sentence: 'Seit gestern regnet es ununterbrochen.',
          translation: 'It has been raining continuously since yesterday.',
        },
        {
          sentence: 'Seit einer Stunde warte ich hier.',
          translation: 'I have been waiting here for an hour.',
        },
      ],
    },
    {
      word: 'obere',
      desc: "Adjective meaning 'upper' or 'top'.",
      examples: [
        {
          sentence: 'Die obere Etage des Gebäudes ist noch im Bau.',
          translation:
            'The upper floor of the building is still under construction.',
        },
        {
          sentence: 'Die obere Taste funktioniert nicht.',
          translation: 'The top button is not working.',
        },
        {
          sentence: 'Der obere Rand des Bildschirms ist beschädigt.',
          translation: 'The top edge of the screen is damaged.',
        },
        {
          sentence: 'Der obere Teil des Berges war in Wolken gehüllt.',
          translation: 'The upper part of the mountain was shrouded in clouds.',
        },
        {
          sentence: 'Das obere Fach des Schranks ist leer.',
          translation: 'The upper compartment of the cupboard is empty.',
        },
      ],
    },
    {
      word: 'ganze',
      desc: "Adjective meaning 'whole' or 'entire'.",
      examples: [
        {
          sentence: 'Er hat das ganze Buch an einem Tag gelesen.',
          translation: 'He read the whole book in one day.',
        },
        {
          sentence: 'Die ganze Stadt war in Feierstimmung.',
          translation: 'The whole city was in a festive mood.',
        },
        {
          sentence: 'Das ganze Wochenende verbrachten sie am Strand.',
          translation: 'They spent the entire weekend at the beach.',
        },
        {
          sentence: 'Das ganze Jahr über war das Wetter ungewöhnlich warm.',
          translation:
            'The weather was unusually warm throughout the whole year.',
        },
        {
          sentence: 'Das ganze Problem könnte vermieden werden.',
          translation: 'The whole problem could be avoided.',
        },
      ],
    },
    {
      word: 'König',
      desc: "Noun meaning 'king', a male monarch.",
      examples: [
        {
          sentence: 'Der König regierte das Land mit Weisheit und Güte.',
          translation: 'The king ruled the country with wisdom and kindness.',
        },
        {
          sentence:
            'Der König und die Königin wurden von der Bevölkerung verehrt.',
          translation: 'The king and queen were revered by the population.',
        },
        {
          sentence: 'Der König trug eine prächtige Krone auf dem Kopf.',
          translation: 'The king wore a magnificent crown on his head.',
        },
        {
          sentence:
            'Die Geschichte erzählt von einem tapferen König und seinem mutigen Sohn.',
          translation:
            'The story tells of a brave king and his courageous son.',
        },
        {
          sentence: 'Das Schloss war einst die Residenz des Königs.',
          translation: 'The castle was once the residence of the king.',
        },
      ],
    },
    {
      word: 'Straße',
      desc: "Noun meaning 'street' or 'road', a public thoroughfare.",
      examples: [
        {
          sentence: 'Die Straße war mit Autos verstopft.',
          translation: 'The street was congested with cars.',
        },
        {
          sentence: 'Er überquerte die Straße an der Ampel.',
          translation: 'He crossed the street at the traffic light.',
        },
        {
          sentence: 'Die Straße war mit Kopfsteinpflaster gepflastert.',
          translation: 'The road was paved with cobblestones.',
        },
        {
          sentence: 'Die Hauptstraße war mit Geschäften gesäumt.',
          translation: 'The main street was lined with shops.',
        },
        {
          sentence: 'An dieser Straße befinden sich viele Restaurants.',
          translation: 'There are many restaurants on this street.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Zoll, multiplizieren, nichts, Kurs, bleiben, Rad, voll, Kraft, blau, Objekt',
  words: [
    {
      word: 'Zoll',
      desc: "Noun meaning 'inch', a unit of measurement equal to 1/12 of a foot or 2.54 centimeters.",
      examples: [
        {
          sentence: 'Die Breite des Bildes beträgt 10 Zoll.',
          translation: 'The width of the picture is 10 inches.',
        },
        {
          sentence: 'Das Brett ist drei Zoll dick.',
          translation: 'The board is three inches thick.',
        },
        {
          sentence: 'Das Gerät misst 15 Zoll in der Länge.',
          translation: 'The device measures 15 inches in length.',
        },
        {
          sentence: 'Die Skulptur ist nur wenige Zoll groß.',
          translation: 'The sculpture is only a few inches tall.',
        },
        {
          sentence: 'Der Bildschirm hat eine Diagonale von 20 Zoll.',
          translation: 'The screen has a diagonal of 20 inches.',
        },
      ],
    },
    {
      word: 'multiplizieren',
      desc: "Verb meaning 'to multiply', perform the mathematical operation of finding the total of a number multiplied by another number.",
      examples: [
        {
          sentence:
            'Um das Produkt zu berechnen, müssen Sie zwei Zahlen multiplizieren.',
          translation:
            'To calculate the product, you need to multiply two numbers.',
        },
        {
          sentence:
            'In der Mathematik können Sie Zahlen multiplizieren und dividieren.',
          translation: 'In mathematics, you can multiply and divide numbers.',
        },
        {
          sentence:
            'Sie müssen die Zahlen miteinander multiplizieren, um das Ergebnis zu erhalten.',
          translation:
            'You need to multiply the numbers together to get the result.',
        },
        {
          sentence: 'Können Sie 5 mal 5 multiplizieren?',
          translation: 'Can you multiply 5 by 5?',
        },
        {
          sentence:
            'Der Lehrer fragte die Schüler, die Zahlen zu multiplizieren.',
          translation:
            'The teacher asked the students to multiply the numbers.',
        },
      ],
    },
    {
      word: 'nichts',
      desc: "Pronoun meaning 'nothing', not anything; no single thing.",
      examples: [
        {
          sentence: 'Es gibt nichts in der Box.',
          translation: 'There is nothing in the box.',
        },
        {
          sentence: 'Die Antwort auf die Frage war nichts.',
          translation: 'The answer to the question was nothing.',
        },
        {
          sentence: 'Er hat nichts gesagt.',
          translation: "He didn't say anything.",
        },
        {
          sentence: 'Sie hat nichts in der Handtasche.',
          translation: 'She has nothing in her handbag.',
        },
        {
          sentence: 'Nichts ist unmöglich, wenn man es versucht.',
          translation: 'Nothing is impossible if you try.',
        },
      ],
    },
    {
      word: 'Kurs',
      desc: "Noun meaning 'course', a series of lectures or lessons in a particular subject, leading to an examination or qualification.",
      examples: [
        {
          sentence: 'Ich besuche einen Deutschkurs.',
          translation: 'I am attending a German course.',
        },
        {
          sentence: 'Der Kurs dauert sechs Wochen.',
          translation: 'The course lasts for six weeks.',
        },
        {
          sentence: 'Sie hat den Kurs erfolgreich abgeschlossen.',
          translation: 'She has successfully completed the course.',
        },
        {
          sentence: 'Wir müssen einen Kurs in Erster Hilfe machen.',
          translation: 'We have to take a first aid course.',
        },
        {
          sentence: 'Der Kurs beginnt morgen um 9 Uhr.',
          translation: "The course starts tomorrow at 9 o'clock.",
        },
      ],
    },
    {
      word: 'bleiben',
      desc: "Verb meaning 'to stay', remain in the same place or position.",
      examples: [
        {
          sentence: 'Ich werde zu Hause bleiben.',
          translation: 'I will stay at home.',
        },
        {
          sentence: 'Bleiben Sie ruhig!',
          translation: 'Stay calm!',
        },
        {
          sentence: 'Er bleibt für zwei Wochen in London.',
          translation: 'He is staying in London for two weeks.',
        },
        {
          sentence: 'Kannst du länger bleiben?',
          translation: 'Can you stay longer?',
        },
        {
          sentence: 'Die Blumen bleiben frisch, wenn man sie in Wasser stellt.',
          translation: 'The flowers stay fresh if you put them in water.',
        },
      ],
    },
    {
      word: 'Rad',
      desc: "Noun meaning 'wheel', a circular object that revolves on an axle and is fixed below a vehicle or other object to enable it to move easily over the ground.",
      examples: [
        {
          sentence: 'Das Fahrrad hat zwei Räder.',
          translation: 'The bicycle has two wheels.',
        },
        {
          sentence: 'Das Auto hat einen platten Reifen.',
          translation: 'The car has a flat tire.',
        },
        {
          sentence: 'Das Rad dreht sich schnell.',
          translation: 'The wheel is spinning fast.',
        },
        {
          sentence: 'Das Wagenrad ist aus Holz.',
          translation: 'The cartwheel is made of wood.',
        },
        {
          sentence: 'Die Maschine hat viele Zahnräder.',
          translation: 'The machine has many gears.',
        },
      ],
    },
    {
      word: 'voll',
      desc: "Adjective meaning 'full', containing or holding as much or as many as possible; having no empty space.",
      examples: [
        {
          sentence: 'Die Flasche ist voll mit Wasser.',
          translation: 'The bottle is full of water.',
        },
        {
          sentence: 'Der Bus war voll von Menschen.',
          translation: 'The bus was full of people.',
        },
        {
          sentence: 'Ihr Magen war nach dem Essen voll.',
          translation: 'Her stomach was full after eating.',
        },
        {
          sentence: 'Die Straßen waren voller Autos.',
          translation: 'The streets were full of cars.',
        },
        {
          sentence: 'Die Party war voller Spaß.',
          translation: 'The party was full of fun.',
        },
      ],
    },
    {
      word: 'Kraft',
      desc: "Noun meaning 'force' or 'power'.",
      examples: [
        {
          sentence:
            'Die Maschine hat genug Kraft, um schwere Lasten zu bewegen.',
          translation: 'The machine has enough force to move heavy loads.',
        },
        {
          sentence: 'Die Naturgewalten zeigen ihre Kraft während des Sturms.',
          translation:
            'The forces of nature show their power during the storm.',
        },
        {
          sentence: 'Sie benutzte ihre ganze Kraft, um die Tür zu öffnen.',
          translation: 'She used all her strength to open the door.',
        },
        {
          sentence:
            'Die Physik erklärt die Bewegung von Objekten mithilfe von Kräften.',
          translation: 'Physics explains the motion of objects using forces.',
        },
        {
          sentence: 'Sie gewann das Rennen mit großer Kraft.',
          translation: 'She won the race with great power.',
        },
      ],
    },
    {
      word: 'blau',
      desc: "Adjective meaning 'blue', having the color like that of a clear unclouded sky.",
      examples: [
        {
          sentence: 'Der Himmel war heute Morgen blau und klar.',
          translation: 'The sky was blue and clear this morning.',
        },
        {
          sentence: 'Sein Auto ist blau, aber meins ist rot.',
          translation: 'His car is blue, but mine is red.',
        },
        {
          sentence: 'Sie trug ein hübsches blau-weiß gestreiftes Kleid.',
          translation: 'She was wearing a pretty blue-and-white striped dress.',
        },
        {
          sentence: 'Das Wasser des Sees war tiefblau und ruhig.',
          translation: 'The water of the lake was deep blue and calm.',
        },
        {
          sentence: 'Die Augen des Kindes waren hellblau wie der Himmel.',
          translation: "The child's eyes were bright blue like the sky.",
        },
      ],
    },
    {
      word: 'Objekt',
      desc: "Noun meaning 'object', a material thing that can be seen and touched.",
      examples: [
        {
          sentence: 'Er stellte das Objekt auf den Tisch.',
          translation: 'He placed the object on the table.',
        },
        {
          sentence: 'Das Objekt war schwer und kalt.',
          translation: 'The object was heavy and cold.',
        },
        {
          sentence: 'Das Objekt hatte eine ungewöhnliche Form.',
          translation: 'The object had an unusual shape.',
        },
        {
          sentence: 'Sie untersuchten das Objekt mit einem Mikroskop.',
          translation: 'They examined the object with a microscope.',
        },
        {
          sentence: 'Das Objekt hatte einen hohen materiellen Wert.',
          translation: 'The object had a high material value.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'entscheiden, Oberfläche, tief, Mond, Insel, Fuß, System, beschäftigt, Prüfung, Rekord',
  words: [
    {
      word: 'entscheiden',
      desc: "Verb meaning 'to decide', make a choice from a number of alternatives.",
      examples: [
        {
          sentence: 'Sie muss sich zwischen zwei Jobs entscheiden.',
          translation: 'She has to decide between two jobs.',
        },
        {
          sentence: 'Es ist schwer, sich zu entscheiden, was ich machen soll.',
          translation: "It's hard to decide what I should do.",
        },
        {
          sentence: 'Sie hat sich dazu entschieden, ins Ausland zu ziehen.',
          translation: 'She has decided to move abroad.',
        },
        {
          sentence: 'Wir müssen uns schnell entscheiden.',
          translation: 'We need to decide quickly.',
        },
        {
          sentence: 'Ich kann mich nicht entscheiden, was ich bestellen soll.',
          translation: "I can't decide what to order.",
        },
      ],
    },
    {
      word: 'Oberfläche',
      desc: "Noun meaning 'surface', the outside part or uppermost layer of something.",
      examples: [
        {
          sentence: 'Die Oberfläche des Sees war glatt wie ein Spiegel.',
          translation: 'The surface of the lake was smooth as a mirror.',
        },
        {
          sentence: 'Die Oberfläche des Tisches war aus Holz.',
          translation: 'The surface of the table was made of wood.',
        },
        {
          sentence: 'Die Oberfläche des Planeten ist von Kratern bedeckt.',
          translation: 'The surface of the planet is covered with craters.',
        },
        {
          sentence: 'Sie malte ein Bild auf die Oberfläche der Leinwand.',
          translation: 'She painted a picture on the surface of the canvas.',
        },
        {
          sentence: 'Die Oberfläche der Straße war glatt und eben.',
          translation: 'The surface of the road was smooth and even.',
        },
      ],
    },
    {
      word: 'tief',
      desc: "Adjective meaning 'deep', extending far down from the top or surface.",
      examples: [
        {
          sentence: 'Der See ist an dieser Stelle sehr tief.',
          translation: 'The lake is very deep at this point.',
        },
        {
          sentence: 'Er hat eine tiefe Stimme.',
          translation: 'He has a deep voice.',
        },
        {
          sentence: 'Das Wasser war zu tief, um zu schwimmen.',
          translation: 'The water was too deep to swim.',
        },
        {
          sentence: 'Sie machten einen tiefen Eindruck auf mich.',
          translation: 'They made a deep impression on me.',
        },
        {
          sentence: 'Das Loch war viel tiefer als erwartet.',
          translation: 'The hole was much deeper than expected.',
        },
      ],
    },
    {
      word: 'Mond',
      desc: "Noun meaning 'moon', the natural satellite of the earth, visible (chiefly at night) by reflected light from the sun.",
      examples: [
        {
          sentence: 'Der Mond scheint hell am Nachthimmel.',
          translation: 'The moon shines brightly in the night sky.',
        },
        {
          sentence: 'Der Mond hat keine eigene Lichtquelle.',
          translation: 'The moon has no light of its own.',
        },
        {
          sentence: 'Die Astronauten landeten auf dem Mond.',
          translation: 'The astronauts landed on the moon.',
        },
        {
          sentence: 'Sie betrachteten den Mond durch ein Teleskop.',
          translation: 'They observed the moon through a telescope.',
        },
        {
          sentence: 'Der Vollmond ist eine beeindruckende Erscheinung.',
          translation: 'The full moon is an impressive sight.',
        },
      ],
    },
    {
      word: 'Insel',
      desc: "Noun meaning 'island', a piece of land surrounded by water.",
      examples: [
        {
          sentence: 'Die Inseln sind von kristallklarem Wasser umgeben.',
          translation: 'The islands are surrounded by crystal-clear water.',
        },
        {
          sentence: 'Die Insel ist bekannt für ihre weißen Sandstrände.',
          translation: 'The island is known for its white sandy beaches.',
        },
        {
          sentence: 'Sie bauten eine Hütte auf der Insel.',
          translation: 'They built a hut on the island.',
        },
        {
          sentence: 'Die Insel hat eine reiche Tierwelt.',
          translation: 'The island has a rich wildlife.',
        },
        {
          sentence: 'Wir machten einen Ausflug zu einer benachbarten Insel.',
          translation: 'We took a trip to a neighboring island.',
        },
      ],
    },
    {
      word: 'Fuß',
      desc: "Noun meaning 'foot', the lower extremity of the leg below the ankle, on which a person stands or walks.",
      examples: [
        {
          sentence: 'Er verletzte sich am Fuß beim Fußballspielen.',
          translation: 'He injured his foot while playing football.',
        },
        {
          sentence: 'Sie trug bequeme Schuhe an ihren Füßen.',
          translation: 'She wore comfortable shoes on her feet.',
        },
        {
          sentence: 'Der Hund leckte ihr die Füße.',
          translation: 'The dog licked her feet.',
        },
        {
          sentence: 'Die Kinder sprangen barfuß auf dem Rasen herum.',
          translation: 'The children ran barefoot on the grass.',
        },
        {
          sentence: 'Er massierte ihre müden Füße nach einem langen Tag.',
          translation: 'He massaged her tired feet after a long day.',
        },
      ],
    },
    {
      word: 'System',
      desc: "Noun meaning 'system', a set of connected things or parts forming a complex whole, in particular.",
      examples: [
        {
          sentence: 'Das neue System soll die Effizienz steigern.',
          translation: 'The new system is intended to increase efficiency.',
        },
        {
          sentence: 'Sie studiert das Bildungssystem in verschiedenen Ländern.',
          translation:
            'She studies the education system in different countries.',
        },
        {
          sentence: 'Das System ist einfach zu bedienen.',
          translation: 'The system is easy to use.',
        },
        {
          sentence: 'Wir müssen das Problem im System beheben.',
          translation: 'We need to fix the problem in the system.',
        },
        {
          sentence: 'Das Computersystem wurde aktualisiert.',
          translation: 'The computer system was updated.',
        },
      ],
    },
    {
      word: 'beschäftigt',
      desc: "Adjective meaning 'busy', having a great deal to do.",
      examples: [
        {
          sentence: 'Sie war den ganzen Tag beschäftigt.',
          translation: 'She was busy all day.',
        },
        {
          sentence: 'Er ist immer beschäftigt mit Arbeit.',
          translation: 'He is always busy with work.',
        },
        {
          sentence: 'Ich bin momentan sehr beschäftigt.',
          translation: "I'm very busy at the moment.",
        },
        {
          sentence: 'Die Straßen sind zu Stoßzeiten sehr beschäftigt.',
          translation: 'The streets are very busy during rush hours.',
        },
        {
          sentence: 'Sie fühlt sich gestresst, weil sie so beschäftigt ist.',
          translation: 'She feels stressed because she is so busy.',
        },
      ],
    },
    {
      word: 'Prüfung',
      desc: "Noun meaning 'test', an event in which a person shows that they are capable of doing or have learned something.",
      examples: [
        {
          sentence: 'Die Prüfung war schwieriger als erwartet.',
          translation: 'The test was harder than expected.',
        },
        {
          sentence: 'Sie bestand die Prüfung mit Bravour.',
          translation: 'She passed the test with flying colors.',
        },
        {
          sentence: 'Die Prüfung findet nächste Woche statt.',
          translation: 'The test will take place next week.',
        },
        {
          sentence: 'Er bereitet sich intensiv auf die Prüfung vor.',
          translation: 'He is preparing intensively for the test.',
        },
        {
          sentence: 'Die schriftliche Prüfung dauerte drei Stunden.',
          translation: 'The written test lasted three hours.',
        },
      ],
    },
    {
      word: 'Rekord',
      desc: "Noun meaning 'record', an official result or mark achieved or recognized as a maximum or best at a particular time.",
      examples: [
        {
          sentence: 'Er brach den Weltrekord im 100-Meter-Lauf.',
          translation: 'He broke the world record in the 100-meter dash.',
        },
        {
          sentence: 'Der Rekord wurde in diesem Jahr gebrochen.',
          translation: 'The record was broken this year.',
        },
        {
          sentence: 'Sie versuchte, ihren eigenen Rekord zu brechen.',
          translation: 'She tried to break her own record.',
        },
        {
          sentence: 'Der Rekordhalter wurde bei der Zeremonie geehrt.',
          translation: 'The record holder was honored at the ceremony.',
        },
        {
          sentence: 'Das Team stellte einen neuen Rekord auf.',
          translation: 'The team set a new record.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Boot, gemeinsam, goldenen, möglich, Flugzeug, statt, trocken, Wunder, Lachen, tausend',
  words: [
    {
      word: 'Boot',
      desc: "Noun meaning 'boat', a small vessel for traveling over water, propelled by oars, sails, or an engine.",
      examples: [
        {
          sentence: 'Das Boot gleitet über das ruhige Wasser.',
          translation: 'The boat glides over the calm water.',
        },
        {
          sentence: 'Wir machten eine Bootsfahrt auf dem Fluss.',
          translation: 'We went on a boat trip on the river.',
        },
        {
          sentence: 'Das Boot wurde von starken Wellen erfasst.',
          translation: 'The boat was caught by strong waves.',
        },
        {
          sentence: 'Sie besaßen ein kleines Segelboot.',
          translation: 'They owned a small sailboat.',
        },
        {
          sentence: 'Das Boot kehrte sicher zum Hafen zurück.',
          translation: 'The boat safely returned to the harbor.',
        },
      ],
    },
    {
      word: 'gemeinsam',
      desc: "Adjective meaning 'common', done, felt, or thought by two or more people in conjunction.",
      examples: [
        {
          sentence: 'Wir haben gemeinsam an dem Projekt gearbeitet.',
          translation: 'We worked on the project together.',
        },
        {
          sentence: 'Sie trafen gemeinsam eine Entscheidung.',
          translation: 'They made a decision together.',
        },
        {
          sentence: 'Wir genossen einen gemeinsamen Abendessen.',
          translation: 'We enjoyed a common dinner together.',
        },
        {
          sentence: 'Das gemeinsame Ziel war klar definiert.',
          translation: 'The common goal was clearly defined.',
        },
        {
          sentence: 'Sie waren in ihrem Wunsch nach Freiheit gemeinsam.',
          translation: 'They were united in their desire for freedom.',
        },
      ],
    },
    {
      word: 'goldenen',
      desc: "Adjective meaning 'golden', made of, relating to, or resembling gold.",
      examples: [
        {
          sentence: 'Sie trug eine Halskette mit goldenen Anhängern.',
          translation: 'She wore a necklace with golden pendants.',
        },
        {
          sentence: 'Die Sonne ging hinter den goldenen Wolken unter.',
          translation: 'The sun set behind the golden clouds.',
        },
        {
          sentence: 'Das Schloss wurde mit goldenen Verzierungen geschmückt.',
          translation: 'The castle was adorned with golden decorations.',
        },
        {
          sentence: 'Sie erhielt eine goldene Medaille für ihre Leistung.',
          translation: 'She received a golden medal for her performance.',
        },
        {
          sentence: 'Der Tempel strahlte im Licht der goldenen Sonne.',
          translation: 'The temple shone in the light of the golden sun.',
        },
      ],
    },
    {
      word: 'möglich',
      desc: "Adjective meaning 'possible', able to be done; within the power or capacity of someone or something.",
      examples: [
        {
          sentence: 'Es ist möglich, dass er später kommt.',
          translation: 'It is possible that he will come later.',
        },
        {
          sentence: 'Die Idee klang interessant, aber ist sie möglich?',
          translation: 'The idea sounded interesting, but is it possible?',
        },
        {
          sentence: 'Es ist möglich, dass es morgen regnen wird.',
          translation: 'It is possible that it will rain tomorrow.',
        },
        {
          sentence: 'Alles ist möglich, wenn man es versucht.',
          translation: 'Everything is possible if you try.',
        },
        {
          sentence: 'Der Plan war riskant, aber durchaus möglich.',
          translation: 'The plan was risky, but entirely possible.',
        },
      ],
    },
    {
      word: 'Flugzeug',
      desc: "Noun meaning 'plane', a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.",
      examples: [
        {
          sentence: 'Das Flugzeug hob sanft vom Boden ab.',
          translation: 'The plane took off smoothly from the ground.',
        },
        {
          sentence: 'Sie flogen mit dem Flugzeug nach Paris.',
          translation: 'They flew to Paris by plane.',
        },
        {
          sentence: 'Das Flugzeug landete sicher auf der Landebahn.',
          translation: 'The plane landed safely on the runway.',
        },
        {
          sentence: 'Sie hatten einen Fensterplatz im Flugzeug.',
          translation: 'They had a window seat on the plane.',
        },
        {
          sentence: 'Das Flugzeug erreichte seine maximale Flughöhe.',
          translation: 'The plane reached its maximum altitude.',
        },
      ],
    },
    {
      word: 'statt',
      desc: "Preposition meaning 'stead', in place of, or as an alternative to.",
      examples: [
        {
          sentence: 'Er ging ins Kino statt zur Arbeit.',
          translation: 'He went to the movies instead of going to work.',
        },
        {
          sentence: 'Sie entschieden sich für Pizza statt für Pasta.',
          translation: 'They opted for pizza instead of pasta.',
        },
        {
          sentence: 'Er trägt Sneaker statt formeller Schuhe.',
          translation: 'He wears sneakers instead of formal shoes.',
        },
        {
          sentence: 'Sie wählten den Bus statt des Zuges.',
          translation: 'They chose the bus instead of the train.',
        },
        {
          sentence: 'Er blieb zu Hause statt auszugehen.',
          translation: 'He stayed home instead of going out.',
        },
      ],
    },
    {
      word: 'trocken',
      desc: "Adjective meaning 'dry', free from moisture or liquid.",
      examples: [
        {
          sentence: 'Die Wäsche wurde draußen getrocknet.',
          translation: 'The laundry was dried outside.',
        },
        {
          sentence: 'Die trockene Erde brauchte dringend Regen.',
          translation: 'The dry soil desperately needed rain.',
        },
        {
          sentence: 'Seine Lippen waren trocken und rissig.',
          translation: 'His lips were dry and chapped.',
        },
        {
          sentence: 'Das Handtuch war nach dem Strandtag noch trocken.',
          translation: 'The towel was still dry after the day at the beach.',
        },
        {
          sentence: 'Die trockene Luft führte zu Hautproblemen.',
          translation: 'The dry air led to skin problems.',
        },
      ],
    },
    {
      word: 'Wunder',
      desc: "Noun meaning 'wonder', a remarkable or amazing event, phenomenon, or accomplishment.",
      examples: [
        {
          sentence: 'Es war ein Wunder, dass niemand verletzt wurde.',
          translation: 'It was a wonder that no one was injured.',
        },
        {
          sentence:
            'Das kleine Mädchen betrachtete die Welt mit kindlichem Staunen und Wunder.',
          translation:
            'The little girl looked at the world with childlike wonder.',
        },
        {
          sentence: 'Die Natur ist voller Wunder und Schönheit.',
          translation: 'Nature is full of wonders and beauty.',
        },
        {
          sentence:
            'Die Entdeckung des neuen Planeten war ein wissenschaftliches Wunder.',
          translation:
            'The discovery of the new planet was a scientific wonder.',
        },
        {
          sentence:
            'Seine Genesung nach dem Unfall galt als medizinisches Wunder.',
          translation:
            'His recovery after the accident was considered a medical wonder.',
        },
      ],
    },
    {
      word: 'Lachen',
      desc: "Noun meaning 'laugh', the expression of happiness, amusement, or pleasure in the form of sound.",
      examples: [
        {
          sentence: 'Das Lachen der Kinder erfüllte den Raum.',
          translation: 'The laughter of the children filled the room.',
        },
        {
          sentence: 'Sein Lachen war ansteckend.',
          translation: 'His laughter was contagious.',
        },
        {
          sentence: 'Sie brachen in schallendes Lachen aus.',
          translation: 'They burst into loud laughter.',
        },
        {
          sentence: 'Ein herzhaftes Lachen ist gut für die Seele.',
          translation: 'A hearty laugh is good for the soul.',
        },
        {
          sentence: 'Ihr Lachen hallte durch den Wald.',
          translation: 'Her laughter echoed through the forest.',
        },
      ],
    },
    {
      word: 'tausend',
      desc: "Numeral meaning 'thousand', the number equivalent to the product of a hundred and ten; 1,000.",
      examples: [
        {
          sentence:
            'Sie gingen durch tausend Abenteuer, um ihr Ziel zu erreichen.',
          translation:
            'They went through a thousand adventures to reach their goal.',
        },
        {
          sentence: 'Das Buch wurde in mehr als tausend Sprachen übersetzt.',
          translation:
            'The book has been translated into more than a thousand languages.',
        },
        {
          sentence: 'Sie hatte tausend Gründe, um glücklich zu sein.',
          translation: 'She had a thousand reasons to be happy.',
        },
        {
          sentence: 'Sein Lächeln war wie tausend Sonnenstrahlen.',
          translation: 'His smile was like a thousand sunbeams.',
        },
        {
          sentence:
            'Die Aussicht vom Gipfel war atemberaubend - man konnte tausende Kilometer weit sehen.',
          translation:
            'The view from the summit was breathtaking - you could see thousands of kilometers away.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'vor, lief, überprüfen, Spiel, Form, gleichsetzen, heiß, Fehl, gebracht, Wärme',
  words: [
    {
      word: 'vor',
      desc: "Adverb meaning 'ago', indicating a period of time preceding the present moment.",
      examples: [
        {
          sentence: 'Sie hat vor fünf Jahren geheiratet.',
          translation: 'She got married five years ago.',
        },
        {
          sentence: 'Wir haben das Haus vor zwei Monaten verkauft.',
          translation: 'We sold the house two months ago.',
        },
        {
          sentence: 'Die Veranstaltung fand vor einigen Tagen statt.',
          translation: 'The event took place a few days ago.',
        },
        {
          sentence: 'Er hat vor vielen Jahren in dieser Stadt gelebt.',
          translation: 'He lived in this city many years ago.',
        },
        {
          sentence: 'Das war schon vor langer Zeit.',
          translation: 'That was a long time ago.',
        },
      ],
    },
    {
      word: 'lief',
      desc: "Verb meaning 'ran', past tense of the verb 'to run'.",
      examples: [
        {
          sentence: 'Er lief schnell, um den Bus zu erwischen.',
          translation: 'He ran fast to catch the bus.',
        },
        {
          sentence: 'Das Kind lief auf den Spielplatz.',
          translation: 'The child ran to the playground.',
        },
        {
          sentence: 'Sie liefen eine lange Strecke ohne Pause.',
          translation: 'They ran a long distance without stopping.',
        },
        {
          sentence: 'Der Hund lief hinter dem Ball her.',
          translation: 'The dog ran after the ball.',
        },
        {
          sentence: 'Sie liefen um die Wette.',
          translation: 'They ran a race against each other.',
        },
      ],
    },
    {
      word: 'überprüfen',
      desc: "Verb meaning 'check', to inspect or examine something to determine its accuracy or condition.",
      examples: [
        {
          sentence:
            'Sie müssen den Bericht überprüfen, bevor Sie ihn einreichen.',
          translation: 'You need to check the report before submitting it.',
        },
        {
          sentence:
            'Er überprüfte seine Taschen, um sicherzustellen, dass er seinen Schlüssel hatte.',
          translation: 'He checked his pockets to make sure he had his key.',
        },
        {
          sentence: 'Der Techniker wird das Gerät auf Fehler überprüfen.',
          translation: 'The technician will check the device for faults.',
        },
        {
          sentence: 'Bitte überprüfen Sie Ihre Schreibweise.',
          translation: 'Please check your spelling.',
        },
        {
          sentence: 'Wir müssen die Sicherheitsmaßnahmen überprüfen.',
          translation: 'We need to review the security measures.',
        },
      ],
    },
    {
      word: 'Spiel',
      desc: "Noun meaning 'game', an activity or competitive event with rules and structure.",
      examples: [
        {
          sentence: 'Sie spielten ein spannendes Spiel Schach.',
          translation: 'They played an exciting game of chess.',
        },
        {
          sentence: 'Das Fußballspiel endete unentschieden.',
          translation: 'The soccer game ended in a tie.',
        },
        {
          sentence: 'Kinder lieben es, draußen zu spielen.',
          translation: 'Children love to play outside.',
        },
        {
          sentence: 'Das Kartenspiel dauerte bis spät in die Nacht.',
          translation: 'The card game lasted until late at night.',
        },
        {
          sentence: 'Sie gewann das Spiel durch geschicktes Taktieren.',
          translation: 'She won the game through clever maneuvering.',
        },
      ],
    },
    {
      word: 'Form',
      desc: "Noun meaning 'shape', the visible contour or configuration of something.",
      examples: [
        {
          sentence: 'Der Künstler modellierte eine perfekte Form aus Ton.',
          translation: 'The artist sculpted a perfect shape out of clay.',
        },
        {
          sentence: 'Das Gebäude hatte eine ungewöhnliche Form.',
          translation: 'The building had an unusual shape.',
        },
        {
          sentence: 'Die Wolken nahmen die Form eines Drachens an.',
          translation: 'The clouds took on the shape of a dragon.',
        },
        {
          sentence: 'Der Kuchen wurde in Herzform gebacken.',
          translation: 'The cake was baked in the shape of a heart.',
        },
        {
          sentence:
            'Die Flüssigkeit nimmt die Form des Behälters an, in dem sie sich befindet.',
          translation: 'The liquid takes the shape of the container it is in.',
        },
      ],
    },
    {
      word: 'gleichsetzen',
      desc: "Verb meaning 'equate', to consider or treat as equal or equivalent.",
      examples: [
        {
          sentence: 'Manche Menschen gleichsetzen Reichtum mit Glück.',
          translation: 'Some people equate wealth with happiness.',
        },
        {
          sentence:
            'Die Lehrerin erklärte, wie man verschiedene Einheiten miteinander gleichsetzt.',
          translation:
            'The teacher explained how to equate different units with each other.',
        },
        {
          sentence: 'Wir dürfen nicht Erfolg mit Ansehen gleichsetzen.',
          translation: "We shouldn't equate success with prestige.",
        },
        {
          sentence: 'Man kann nicht Schönheit mit Perfektion gleichsetzen.',
          translation: "You can't equate beauty with perfection.",
        },
        {
          sentence:
            'Er möchte seine Leistung nicht mit der seines Bruders gleichsetzen.',
          translation:
            "He doesn't want to equate his performance with his brother's.",
        },
      ],
    },
    {
      word: 'heiß',
      desc: "Adjective meaning 'hot', having a high degree of heat or a high temperature.",
      examples: [
        {
          sentence: `Die Suppe war zu heiß, um sie sofort zu essen.`,
          translation: `The soup was too hot to eat right away.`,
        },
        {
          sentence: `Das Bügeleisen war noch heiß.`,
          translation: `The iron was still hot.`,
        },
        {
          sentence: `Die Sonne brannte heiß auf ihre Haut.`,
          translation: `The sun beat hot on her skin.`,
        },
        {
          sentence: `Das Wasser war so heiß, dass man sich die Finger verbrannte.`,
          translation: `The water was so hot that it burned your fingers.`,
        },
        {
          sentence: `Sie goss sich ein heißes Bad ein, um sich zu entspannen.`,
          translation: `She ran a hot bath to relax.`,
        },
      ],
    },
    {
      word: 'Fehl',
      desc: "Noun meaning 'miss', a failure to hit or catch something.",
      examples: [
        {
          sentence: `Der Schuss war ein Fehl und traf nicht das Ziel.`,
          translation: `The shot was a miss and didn't hit the target.`,
        },
        {
          sentence: `Es gab einen Fehl in der Kommunikation, daher kam es zu Missverständnissen.`,
          translation: `There was a miss in communication, hence misunderstandings occurred.`,
        },
        {
          sentence: `Sein Fehl beim Wettbewerb kostete ihn den Sieg.`,
          translation: `His miss in the competition cost him the victory.`,
        },
        {
          sentence: `Sie entschuldigte sich für ihren Fehl und versprach, es wieder gutzumachen.`,
          translation: `She apologized for her miss and promised to make it right again.`,
        },
        {
          sentence: `Der Lehrer markierte die Antwort als Fehl.`,
          translation: `The teacher marked the answer as a miss.`,
        },
      ],
    },
    {
      word: 'gebracht',
      desc: "Past participle of the verb 'bringen', meaning 'brought', to carry, convey, or take something or someone to a place.",
      examples: [
        {
          sentence: `Er hatte sein Buch vergessen und bat einen Freund, es ihm zu bringen.`,
          translation: `He had forgotten his book and asked a friend to bring it to him.`,
        },
        {
          sentence: `Sie brachte ihren Hund mit zum Spaziergang.`,
          translation: `She brought her dog along for the walk.`,
        },
        {
          sentence: `Die Lieferung wurde pünktlich gebracht.`,
          translation: `The delivery was brought on time.`,
        },
        {
          sentence: `Er hatte ihr Blumen gebracht, um sich zu entschuldigen.`,
          translation: `He had brought her flowers to apologize.`,
        },
        {
          sentence: `Die Kinder hatten das Chaos ins Haus gebracht.`,
          translation: `The children had brought chaos into the house.`,
        },
      ],
    },
    {
      word: 'Wärme',
      desc: "Noun meaning 'heat', the quality or state of being warm; a high temperature.",
      examples: [
        {
          sentence: `Im Winter sehnen wir uns nach der Wärme der Sonne.`,
          translation: `In winter, we long for the warmth of the sun.`,
        },
        {
          sentence: `Die Wärme des Feuers war angenehm an einem kalten Abend.`,
          translation: `The warmth of the fire was pleasant on a cold evening.`,
        },
        {
          sentence: `Sie genoss die Wärme der heißen Quellen.`,
          translation: `She enjoyed the warmth of the hot springs.`,
        },
        {
          sentence: `Die Wärme der Umarmung ihrer Mutter ließ sie sich sicher fühlen.`,
          translation: `The warmth of her mother’s hug made her feel safe.`,
        },
        {
          sentence: `Der Raum war erfüllt von der angenehmen Wärme des Kaminfeuers.`,
          translation: `The room was filled with the pleasant warmth of the fireplace.`,
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Schnee, Reifen, bringen, ja, entfernt, füllen, Osten, malen, Sprache, unter',
  words: [
    {
      word: 'Schnee',
      desc: "Noun meaning 'snow', atmospheric water vapor frozen into ice crystals and falling in light white flakes or lying on the ground as a white layer.",
      examples: [
        {
          sentence:
            'Es hat letzte Nacht geschneit, und der Boden ist mit Schnee bedeckt.',
          translation:
            'It snowed last night, and the ground is covered with snow.',
        },
        {
          sentence:
            'Die Kinder bauten einen Schneemann aus dem frischen Schnee.',
          translation: 'The children built a snowman out of the fresh snow.',
        },
        {
          sentence:
            'Die Straßen waren vereist, nachdem der Schnee geschmolzen und wieder gefroren war.',
          translation:
            'The roads were icy after the snow had melted and refrozen.',
        },
        {
          sentence:
            'Der Schnee knirschte unter ihren Stiefeln, als sie durch den Wald gingen.',
          translation:
            'The snow crunched under their boots as they walked through the forest.',
        },
        {
          sentence:
            'Der Schnee reflektierte das Sonnenlicht und ließ alles glitzern.',
          translation:
            'The snow reflected the sunlight, making everything glitter.',
        },
      ],
    },
    {
      word: 'Reifen',
      desc: "Noun meaning 'tire', a rubber covering, typically inflated or surrounding an inflated inner tube, placed around a wheel to form a flexible contact with the road.",
      examples: [
        {
          sentence: 'Die Autoreifen müssen regelmäßig aufgepumpt werden.',
          translation: 'The car tires need to be inflated regularly.',
        },
        {
          sentence:
            'Die Reifen des Fahrrads waren platt, also musste sie Luft hinein pumpen.',
          translation:
            'The bicycle tires were flat, so she had to pump air into them.',
        },
        {
          sentence:
            'Die Spuren im Schnee zeigten, dass ein Fahrzeug mit abgefahrenen Reifen vorbeigefahren war.',
          translation:
            'The tracks in the snow indicated that a vehicle with worn tires had passed by.',
        },
        {
          sentence:
            'Sie wechselte die Reifen ihres Autos von Winter- auf Sommerreifen.',
          translation:
            'She changed the tires of her car from winter to summer tires.',
        },
        {
          sentence:
            'Der Lastwagen hatte spezielle Reifen für Fahrten im Gelände.',
          translation: 'The truck had special tires for off-road driving.',
        },
      ],
    },
    {
      word: 'bringen',
      desc: "Verb meaning 'bring', to take or carry someone or something to a place or a person.",
      examples: [
        {
          sentence: 'Kannst du mir bitte einen Kaffee bringen?',
          translation: 'Can you please bring me a coffee?',
        },
        {
          sentence:
            'Sie brachte ihren Sohn zur Schule und holte ihn später wieder ab.',
          translation: 'She brought her son to school and picked him up later.',
        },
        {
          sentence:
            'Er brachte Blumen mit, um ihr zum Geburtstag zu gratulieren.',
          translation:
            'He brought flowers to congratulate her on her birthday.',
        },
        {
          sentence:
            'Wir haben ihnen etwas zum Essen gebracht, als sie krank waren.',
          translation: 'We brought them some food when they were sick.',
        },
        {
          sentence:
            'Der Hund brachte seinen Ball und legte ihn vor die Füße seines Besitzers.',
          translation:
            'The dog brought his ball and placed it at his owner’s feet.',
        },
      ],
    },
    {
      word: 'ja',
      desc: "Adverb meaning 'yes', used to express agreement or affirmation.",
      examples: [
        {
          sentence: 'Hast du die Hausaufgaben gemacht? - Ja, habe ich.',
          translation: 'Did you do your homework? - Yes, I did.',
        },
        {
          sentence: 'Möchtest du noch einen Kuchen? - Ja, bitte.',
          translation: 'Would you like another piece of cake? - Yes, please.',
        },
        {
          sentence: 'Bist du sicher? - Ja, ich bin mir sicher.',
          translation: 'Are you sure? - Yes, I am sure.',
        },
        {
          sentence: 'Hast du das Buch gelesen? - Ja, das habe ich.',
          translation: 'Did you read the book? - Yes, I did.',
        },
        {
          sentence: 'Können wir heute ausgehen? - Ja, warum nicht?',
          translation: 'Can we go out tonight? - Yes, why not?',
        },
      ],
    },
    {
      word: 'entfernt',
      desc: "Adjective meaning 'distant', far away in space or time.",
      examples: [
        {
          sentence: 'Das Dorf liegt weit entfernt von der Stadt.',
          translation: 'The village is far away from the city.',
        },
        {
          sentence: 'Die nächste Tankstelle ist nicht weit entfernt.',
          translation: 'The nearest gas station is not far away.',
        },
        {
          sentence: 'Die Erde ist der drittentfernteste Planet von der Sonne.',
          translation: 'Earth is the third most distant planet from the sun.',
        },
        {
          sentence: 'Das Hotel war einige Kilometer vom Strand entfernt.',
          translation: 'The hotel was several kilometers away from the beach.',
        },
        {
          sentence:
            'Das Ereignis liegt bereits in der entfernten Vergangenheit.',
          translation: 'The event is already in the distant past.',
        },
      ],
    },
    {
      word: 'füllen',
      desc: "Verb meaning 'fill', to make or become full.",
      examples: [
        {
          sentence: 'Kannst du bitte mein Glas mit Wasser füllen?',
          translation: 'Can you please fill my glass with water?',
        },
        {
          sentence:
            'Er füllte den Eimer mit Sand, um einen Sandkasten zu bauen.',
          translation: 'He filled the bucket with sand to build a sandbox.',
        },
        {
          sentence: 'Sie füllte das Formular aus und reichte es ein.',
          translation: 'She filled out the form and submitted it.',
        },
        {
          sentence: 'Die Veranstaltung füllte den Saal mit Zuschauern.',
          translation: 'The event filled the hall with spectators.',
        },
        {
          sentence: 'Der Duft von frischem Brot füllte die Küche.',
          translation: 'The smell of fresh bread filled the kitchen.',
        },
      ],
    },
    {
      word: 'Osten',
      desc: "Noun meaning 'east', the direction towards the point of the horizon where the sun rises at the equinoxes.",
      examples: [
        {
          sentence: 'Wir fuhren in den Osten, um den Sonnenaufgang zu sehen.',
          translation: 'We drove to the east to see the sunrise.',
        },
        {
          sentence: 'Die Sonne geht im Osten auf und im Westen unter.',
          translation: 'The sun rises in the east and sets in the west.',
        },
        {
          sentence:
            'Der Osten des Landes ist für seine schönen Strände bekannt.',
          translation:
            'The east of the country is known for its beautiful beaches.',
        },
        {
          sentence: 'Die Stadt liegt am östlichen Ufer des Flusses.',
          translation: 'The city is situated on the eastern bank of the river.',
        },
        {
          sentence: 'Die Temperaturen im Osten waren niedriger als im Westen.',
          translation:
            'The temperatures in the east were lower than in the west.',
        },
      ],
    },
    {
      word: 'malen',
      desc: "Verb meaning 'paint', to apply color to (a surface) with a brush or other tools.",
      examples: [
        {
          sentence: 'Sie malte ein Bild von den Bergen.',
          translation: 'She painted a picture of the mountains.',
        },
        {
          sentence: 'Er malte die Wand in seinem Zimmer blau.',
          translation: 'He painted the wall in his room blue.',
        },
        {
          sentence: 'Die Künstlerin malte mit Ölfarben auf Leinwand.',
          translation: 'The artist painted with oil colors on canvas.',
        },
        {
          sentence: 'Sie malte ein Porträt ihres Hundes.',
          translation: 'She painted a portrait of her dog.',
        },
        {
          sentence: 'Der Maler malte Landschaften und Stadtbilder.',
          translation: 'The painter painted landscapes and cityscapes.',
        },
      ],
    },
    {
      word: 'Sprache',
      desc: "Noun meaning 'language', the method of human communication, either spoken or written, consisting of the use of words in a structured and conventional way.",
      examples: [
        {
          sentence: 'Deutsch ist ihre Muttersprache.',
          translation: 'German is her mother tongue.',
        },
        {
          sentence: 'Sie lernt eine neue Sprache, um im Ausland zu arbeiten.',
          translation: 'She is learning a new language to work abroad.',
        },
        {
          sentence:
            'Die Studierenden müssen eine Fremdsprache als Teil ihres Studiums lernen.',
          translation:
            'The students have to learn a foreign language as part of their studies.',
        },
        {
          sentence: 'Die Sprache der Liebe kennt keine Grenzen.',
          translation: 'The language of love knows no bounds.',
        },
        {
          sentence: 'Es gibt viele verschiedene Sprachen auf der Welt.',
          translation: 'There are many different languages in the world.',
        },
      ],
    },
    {
      word: 'unter',
      desc: "Preposition meaning 'among', situated beneath or among.",
      examples: [
        {
          sentence: 'Die Schlüssel sind unter den Büchern auf dem Tisch.',
          translation: 'The keys are among the books on the table.',
        },
        {
          sentence: 'Sie fand ihre Brieftasche unter dem Sofa.',
          translation: 'She found her wallet under the couch.',
        },
        {
          sentence: 'Er suchte unter den Steinen nach versteckten Schätzen.',
          translation: 'He searched among the rocks for hidden treasures.',
        },
        {
          sentence: 'Die Stadt liegt unter den Bergen.',
          translation: 'The city is situated beneath the mountains.',
        },
        {
          sentence: 'Wir hatten eine tolle Zeit unter Freunden.',
          translation: 'We had a great time among friends.',
        },
      ],
    },
  ],
};

const section4: Section = {
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

export default section4;
