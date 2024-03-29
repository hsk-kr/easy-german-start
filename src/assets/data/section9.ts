import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'erraten, erforderlich, scharf, Flügel, schaffen, Nachbar, Wasch, Fledermaus, eher, Menge',
  words: [
    {
      word: 'erraten',
      desc: 'To believe or hope that something will happen.',
      examples: [
        {
          sentence: 'Können Sie erraten, was ich denke?',
          translation: 'Can you guess what I am thinking?',
        },
        {
          sentence: 'Sie versuchte zu erraten, wie alt er war.',
          translation: 'She tried to guess how old he was.',
        },
        {
          sentence: 'Wir können nur raten, was als nächstes passieren wird.',
          translation: 'We can only guess what will happen next.',
        },
        {
          sentence: 'Er hat meinen Namen auf Anhieb erraten.',
          translation: 'He guessed my name right away.',
        },
        {
          sentence: 'Ich konnte den Ausgang des Spiels nicht erraten.',
          translation: "I couldn't guess the outcome of the game.",
        },
      ],
    },
    {
      word: 'erforderlich',
      desc: 'Necessary; needed for a particular purpose.',
      examples: [
        {
          sentence: 'Es ist erforderlich, dass Sie Ihren Ausweis mitbringen.',
          translation: 'It is necessary for you to bring your ID.',
        },
        {
          sentence: 'Für die Bewerbung sind bestimmte Unterlagen erforderlich.',
          translation: 'Certain documents are required for the application.',
        },
        {
          sentence: 'Die Zustimmung aller Beteiligten ist erforderlich.',
          translation: 'The approval of all parties involved is necessary.',
        },
        {
          sentence: 'Für diesen Job sind gute Computerkenntnisse erforderlich.',
          translation: 'Good computer skills are required for this job.',
        },
        {
          sentence: 'Die erforderlichen Reparaturen werden bald durchgeführt.',
          translation: 'The necessary repairs will be carried out soon.',
        },
      ],
    },
    {
      word: 'scharf',
      desc: 'Having an edge or point that is able to cut or pierce something; intense or spicy in flavor.',
      examples: [
        {
          sentence: 'Das Messer ist sehr scharf.',
          translation: 'The knife is very sharp.',
        },
        {
          sentence: 'Er hat einen scharfen Verstand.',
          translation: 'He has a sharp mind.',
        },
        {
          sentence: 'Das Essen ist mir zu scharf.',
          translation: 'The food is too spicy for me.',
        },
        {
          sentence: 'Er hat einen scharfen Blick für Details.',
          translation: 'He has a keen eye for details.',
        },
        {
          sentence: 'Die Kritik war zu scharf.',
          translation: 'The criticism was too harsh.',
        },
      ],
    },
    {
      word: 'Flügel',
      desc: 'The flat or curved part of the body of an aircraft or of a bird that moves and produces lift when air flows around it.',
      examples: [
        {
          sentence: 'Der Vogel breitete seine Flügel aus und flog davon.',
          translation: 'The bird spread its wings and flew away.',
        },
        {
          sentence: 'Die Maschine verlor einen Flügel und stürzte ab.',
          translation: 'The plane lost a wing and crashed.',
        },
        {
          sentence:
            'Der Adler hat einen eindrucksvollen Spannweite seiner Flügel.',
          translation: 'The eagle has an impressive wingspan.',
        },
        {
          sentence: 'Die Flügel des Windrads drehten sich schnell im Wind.',
          translation: 'The wings of the windmill turned rapidly in the wind.',
        },
        {
          sentence:
            'Der Flügel des Gebäudes war architektonisch beeindruckend.',
          translation:
            'The wing of the building was architecturally impressive.',
        },
      ],
    },
    {
      word: 'schaffen',
      desc: 'To produce or create something; to achieve or accomplish something.',
      examples: [
        {
          sentence: 'Es ist wichtig, eine gute Work-Life-Balance zu schaffen.',
          translation: 'It is important to create a good work-life balance.',
        },
        {
          sentence: 'Sie schaffte es, den Marathon zu beenden.',
          translation: 'She managed to finish the marathon.',
        },
        {
          sentence:
            'Wir müssen Arbeitsplätze schaffen, um die Wirtschaft anzukurbeln.',
          translation: 'We need to create jobs to boost the economy.',
        },
        {
          sentence: 'Die Künstlerin schuf ein beeindruckendes Kunstwerk.',
          translation: 'The artist created an impressive piece of art.',
        },
        {
          sentence: 'Gemeinsam können wir das schaffen.',
          translation: 'Together, we can achieve this.',
        },
      ],
    },
    {
      word: 'Nachbar',
      desc: 'A person living next door to or very near to the speaker or person referred to.',
      examples: [
        {
          sentence: 'Unsere Nachbarn sind sehr freundlich.',
          translation: 'Our neighbors are very friendly.',
        },
        {
          sentence: 'Der Nachbar half uns, als wir Probleme hatten.',
          translation: 'The neighbor helped us when we had problems.',
        },
        {
          sentence: 'Wir haben gute Beziehungen zu unseren Nachbarn.',
          translation: 'We have good relations with our neighbors.',
        },
        {
          sentence:
            'Die Nachbarin kümmerte sich um die Pflanzen, während wir weg waren.',
          translation:
            'The neighbor took care of the plants while we were away.',
        },
        {
          sentence: 'Es ist wichtig, sich gut mit den Nachbarn zu verstehen.',
          translation: 'It is important to get along well with the neighbors.',
        },
      ],
    },
    {
      word: 'Wasch',
      desc: 'To clean something using water and usually soap.',
      examples: [
        {
          sentence: 'Sie müssen die Kleidung in der Waschmaschine waschen.',
          translation: 'You need to wash the clothes in the washing machine.',
        },
        {
          sentence: 'Vergiss nicht, deine Hände vor dem Essen zu waschen.',
          translation: "Don't forget to wash your hands before eating.",
        },
        {
          sentence: 'Ich muss das Geschirr in der Spüle waschen.',
          translation: 'I need to wash the dishes in the sink.',
        },
        {
          sentence: 'Er muss sein Auto dringend waschen.',
          translation: 'He urgently needs to wash his car.',
        },
        {
          sentence: 'Kannst du bitte den Boden waschen?',
          translation: 'Can you please wash the floor?',
        },
      ],
    },
    {
      word: 'Fledermaus',
      desc: 'A mammal capable of sustained flight and associated with the night.',
      examples: [
        {
          sentence: 'Bats are nocturnal animals.',
          translation: 'Fledermäuse sind nachtaktive Tiere.',
        },
        {
          sentence: 'Some species of bats can echolocate.',
          translation: 'Einige Arten von Fledermäusen können echolokalisieren.',
        },
        {
          sentence:
            'Bats play an important role in pollination and pest control.',
          translation:
            'Fledermäuse spielen eine wichtige Rolle bei der Bestäubung und Schädlingsbekämpfung.',
        },
        {
          sentence: 'The bat spread its wings and flew away.',
          translation:
            'Die Fledermaus breitete ihre Flügel aus und flog davon.',
        },
        {
          sentence: 'The machine lost a wing and crashed.',
          translation: 'Die Maschine verlor einen Flügel und stürzte ab.',
        },
      ],
    },
    {
      word: 'eher',
      desc: 'In preference to one alternative or the other; more readily or willingly.',
      examples: [
        {
          sentence: 'Ich würde eher zu Hause bleiben, als ins Kino zu gehen.',
          translation: 'I would rather stay at home than go to the cinema.',
        },
        {
          sentence: 'Es ist eher unwahrscheinlich, dass er heute Abend kommt.',
          translation: 'It is more unlikely that he will come tonight.',
        },
        {
          sentence: 'Ich bin eher müde als hungrig.',
          translation: 'I am more tired than hungry.',
        },
        {
          sentence: 'Sie ist eher schüchtern als extrovertiert.',
          translation: 'She is more shy than outgoing.',
        },
        {
          sentence:
            'Es ist eher zu spät als zu früh, um sich zu entschuldigen.',
          translation: 'It is more too late than too early to apologize.',
        },
      ],
    },
    {
      word: 'Menge',
      desc: 'A large number or amount of something.',
      examples: [
        {
          sentence: 'Eine große Menge Menschen versammelte sich auf dem Platz.',
          translation: 'A large crowd of people gathered in the square.',
        },
        {
          sentence:
            'Wir haben eine beträchtliche Menge Geld für das neue Projekt ausgegeben.',
          translation:
            'We spent a considerable amount of money on the new project.',
        },
        {
          sentence: 'Eine riesige Menge an Daten muss verarbeitet werden.',
          translation: 'A huge amount of data needs to be processed.',
        },
        {
          sentence:
            'Die Veranstaltung zog eine erstaunliche Menge an Besuchern an.',
          translation: 'The event attracted an amazing number of visitors.',
        },
        {
          sentence: 'Es gibt eine begrenzte Menge an Plätzen für das Konzert.',
          translation:
            'There is a limited number of seats available for the concert.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'mais, vergleichen, Gedicht, Schnur, Glocke, abhängen, Fleisch, einreiben, Rohr, berühmt',
  words: [
    {
      word: 'mais',
      desc: 'A tall cereal plant, typically yellow with edible kernels and widely grown in many varieties.',
      examples: [
        {
          sentence:
            'In vielen Ländern ist Mais ein wichtiges Grundnahrungsmittel.',
          translation: 'In many countries, corn is an important staple food.',
        },
        {
          sentence: 'Die Bauern ernteten das reif gewordene Maisfeld.',
          translation: 'The farmers harvested the matured cornfield.',
        },
        {
          sentence: 'Der Mais wird in der Futtermittelproduktion verwendet.',
          translation: 'The corn is used in animal feed production.',
        },
        {
          sentence: 'Die Kinder pflückten Maiskolben vom Feld.',
          translation: 'The children picked ears of corn from the field.',
        },
        {
          sentence: 'Das Popcorn wurde aus speziellen Maiskörnern hergestellt.',
          translation: 'The popcorn was made from special kernels of corn.',
        },
      ],
    },
    {
      word: 'vergleichen',
      desc: 'To examine in order to note similarities and differences.',
      examples: [
        {
          sentence:
            'Es ist wichtig, die Preise verschiedener Produkte zu vergleichen.',
          translation:
            'It is important to compare the prices of different products.',
        },
        {
          sentence:
            'Die Lehrerin bat die Schüler, die beiden Texte zu vergleichen.',
          translation:
            'The teacher asked the students to compare the two texts.',
        },
        {
          sentence: 'Sie verglichen die Merkmale der verschiedenen Autos.',
          translation: 'They compared the features of the different cars.',
        },
        {
          sentence:
            'Der Arzt verglich die Symptome mit denen anderer Patienten.',
          translation:
            'The doctor compared the symptoms with those of other patients.',
        },
        {
          sentence:
            'Wir können diese zwei Optionen nicht miteinander vergleichen.',
          translation: "We can't compare these two options with each other.",
        },
      ],
    },
    {
      word: 'Gedicht',
      desc: 'A piece of writing in which the expression of feelings and ideas is given intensity by particular attention to diction, rhyme, rhythm, and imagery.',
      examples: [
        {
          sentence: 'Sie schrieb ein Gedicht über die Schönheit der Natur.',
          translation: 'She wrote a poem about the beauty of nature.',
        },
        {
          sentence: 'Das Gedicht berührte die Herzen der Zuhörer.',
          translation: 'The poem touched the hearts of the listeners.',
        },
        {
          sentence: 'Er las ein Gedicht von Goethe vor.',
          translation: 'He recited a poem by Goethe.',
        },
        {
          sentence: 'Das Gedicht wurde mit einer Melodie vertont.',
          translation: 'The poem was set to music.',
        },
        {
          sentence: 'Sie gewann einen Preis für ihr Gedicht.',
          translation: 'She won an award for her poem.',
        },
      ],
    },
    {
      word: 'Schnur',
      desc: 'A thin piece of string or cord.',
      examples: [
        {
          sentence: 'Er band das Paket mit einer Schnur zu.',
          translation: 'He tied the package with a string.',
        },
        {
          sentence: 'Die Schnur war zu kurz, um den Raum zu überqueren.',
          translation: 'The cord was too short to span the room.',
        },
        {
          sentence: 'Sie benutzte eine Schnur, um die Wäsche aufzuhängen.',
          translation: 'She used a string to hang the laundry.',
        },
        {
          sentence: 'Die Kinder spielten mit einer langen Schnur im Garten.',
          translation:
            'The children played with a long piece of string in the garden.',
        },
        {
          sentence: 'Er zog die Schnur, um die Tür zu öffnen.',
          translation: 'He pulled the cord to open the door.',
        },
      ],
    },
    {
      word: 'Glocke',
      desc: 'A hollow object, typically made of metal and having the shape of a deep inverted cup widening at the lip, that sounds a clear musical note when struck, typically by means of a clapper inside.',
      examples: [
        {
          sentence: 'Die Glocke läutete zur Mittagszeit.',
          translation: 'The bell rang at noon.',
        },
        {
          sentence: 'Die Kirche hat eine große Glocke im Turm.',
          translation: 'The church has a big bell in the tower.',
        },
        {
          sentence: 'Die Glocke hing an einem Seil.',
          translation: 'The bell was hanging on a rope.',
        },
        {
          sentence:
            'Er läutete die Glocke, um die Aufmerksamkeit aller zu bekommen.',
          translation: 'He rang the bell to get everyone’s attention.',
        },
        {
          sentence: 'Die Glocke erzeugte einen lauten Klang.',
          translation: 'The bell produced a loud sound.',
        },
      ],
    },
    {
      word: 'abhängen',
      desc: 'To be controlled or determined by.',
      examples: [
        {
          sentence: 'Der Erfolg des Projekts hängt von der Teamarbeit ab.',
          translation: 'The success of the project depends on teamwork.',
        },
        {
          sentence:
            'Die Lösung dieses Rätsels hängt von Ihrer Beobachtungsgabe ab.',
          translation:
            'Solving this puzzle depends on your powers of observation.',
        },
        {
          sentence:
            'Sein Wohlbefinden hängt von einer gesunden Lebensweise ab.',
          translation: 'His well-being depends on a healthy lifestyle.',
        },
        {
          sentence:
            'Der Zeitpunkt des Treffens hängt von Ihrer Verfügbarkeit ab.',
          translation:
            'The timing of the meeting depends on your availability.',
        },
        {
          sentence:
            'Die Ernteerträge hängen stark von den Wetterbedingungen ab.',
          translation:
            'Crop yields are heavily dependent on weather conditions.',
        },
      ],
    },
    {
      word: 'Fleisch',
      desc: 'The muscular tissue of animals, typically mammals.',
      examples: [
        {
          sentence: 'Ich esse kein rotes Fleisch.',
          translation: 'I do not eat red meat.',
        },
        {
          sentence: 'Wir kaufen unser Fleisch beim Metzger um die Ecke.',
          translation: 'We buy our meat from the butcher around the corner.',
        },
        {
          sentence: 'Das Fleisch war zart und saftig.',
          translation: 'The meat was tender and juicy.',
        },
        {
          sentence: 'Vegetarier essen kein Fleisch.',
          translation: 'Vegetarians do not eat meat.',
        },
        {
          sentence: 'Sie bevorzugt Geflügelfleisch gegenüber Rindfleisch.',
          translation: 'She prefers poultry meat over beef.',
        },
      ],
    },
    {
      word: 'einreiben',
      desc: 'To apply something to a surface by rubbing.',
      examples: [
        {
          sentence:
            'Du solltest dir Sonnencreme einreiben, bevor du rausgehst.',
          translation: 'You should rub sunscreen on yourself before going out.',
        },
        {
          sentence: 'Nach dem Training rieb er sich mit einer Salbe ein.',
          translation: 'After the workout, he rubbed himself with an ointment.',
        },
        {
          sentence:
            'Die Mutter rieb dem Kind den Rücken mit ätherischem Öl ein.',
          translation: 'The mother rubbed the child’s back with essential oil.',
        },
        {
          sentence: 'Er rieb die Möbel mit einem Tuch ein, um sie zu polieren.',
          translation: 'He rubbed the furniture with a cloth to polish it.',
        },
        {
          sentence: 'Sie rieb sich die Hände an der kalten Luft warm.',
          translation:
            'She rubbed her hands together to warm them in the cold air.',
        },
      ],
    },
    {
      word: 'Rohr',
      desc: 'A tube of metal, plastic, or other material used to convey water, gas, oil, or other fluid substances.',
      examples: [
        {
          sentence: 'Das Wasser fließt durch das Rohr.',
          translation: 'The water flows through the pipe.',
        },
        {
          sentence: 'Das Rohr wurde durch Korrosion beschädigt.',
          translation: 'The pipe was damaged by corrosion.',
        },
        {
          sentence: 'Der Klempner reparierte das undichte Rohr.',
          translation: 'The plumber repaired the leaking pipe.',
        },
        {
          sentence: 'Die Wurzeln des Baumes haben das Rohr durchstoßen.',
          translation: 'The roots of the tree penetrated the pipe.',
        },
        {
          sentence: 'Das Rohr wurde verstopft und musste gereinigt werden.',
          translation: 'The pipe got clogged and needed to be cleaned.',
        },
      ],
    },
    {
      word: 'berühmt',
      desc: 'Widely known and acclaimed; famous.',
      examples: [
        {
          sentence: 'Der Schauspieler wurde durch seine Rolle im Film berühmt.',
          translation: 'The actor became famous for his role in the movie.',
        },
        {
          sentence: 'Sie ist eine berühmte Sängerin mit vielen Fans.',
          translation: 'She is a famous singer with many fans.',
        },
        {
          sentence: 'Das Restaurant ist für seine berühmte Pizza bekannt.',
          translation: 'The restaurant is famous for its pizza.',
        },
        {
          sentence: 'Der Künstler wurde nach seinem Tod berühmt.',
          translation: 'The artist became famous after his death.',
        },
        {
          sentence: 'Er war berühmt für seine großzügigen Spenden.',
          translation: 'He was famous for his generous donations.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Dollar, Strom, Angst, Blick, dünn, Dreieck, Erde, Eile, Chef, Kolonie',
  words: [
    {
      word: 'Dollar',
      desc: 'The basic monetary unit of the United States, Canada, Australia, and certain countries in the Pacific, Caribbean, Southeast Asia, Africa, and South America.',
      examples: [
        {
          sentence: 'Der Preis beträgt zwanzig Dollar.',
          translation: 'The price is twenty dollars.',
        },
        {
          sentence: 'Sie zahlte mit einem Hundert-Dollar-Schein.',
          translation: 'She paid with a hundred-dollar bill.',
        },
        {
          sentence: 'Er verdient fünfzig Dollar pro Stunde.',
          translation: 'He earns fifty dollars per hour.',
        },
        {
          sentence: 'Der Wechselkurs liegt bei einem Dollar für einen Euro.',
          translation: 'The exchange rate is one dollar for one euro.',
        },
        {
          sentence: 'Der Dollar hat gegenüber dem Euro an Wert verloren.',
          translation: 'The dollar has lost value against the euro.',
        },
      ],
    },
    {
      word: 'Strom',
      desc: 'The flow of electric charge.',
      examples: [
        {
          sentence: 'Der Stromausfall dauerte mehrere Stunden.',
          translation: 'The power outage lasted for several hours.',
        },
        {
          sentence: 'Das Haus wird durch Solarenergie mit Strom versorgt.',
          translation: 'The house is powered by solar energy.',
        },
        {
          sentence: 'Wir müssen die Stromrechnung noch bezahlen.',
          translation: 'We still need to pay the electricity bill.',
        },
        {
          sentence: 'Die Maschine benötigt viel Strom, um zu funktionieren.',
          translation: 'The machine requires a lot of power to operate.',
        },
        {
          sentence: 'Der Blitz erzeugt einen starken Strom.',
          translation: 'The lightning produces a strong current.',
        },
      ],
    },
    {
      word: 'Angst',
      desc: 'An unpleasant emotion caused by the threat of danger, pain, or harm.',
      examples: [
        {
          sentence: 'Sie hatte große Angst vor Spinnen.',
          translation: 'She had a great fear of spiders.',
        },
        {
          sentence: 'Die Kinder hatten Angst vor dem dunklen Wald.',
          translation: 'The children were afraid of the dark forest.',
        },
        {
          sentence: 'Seine Angst vor öffentlichen Reden war überwältigend.',
          translation: 'His fear of public speaking was overwhelming.',
        },
        {
          sentence: 'Die Angst vor dem Unbekannten trieb ihn an.',
          translation: 'The fear of the unknown drove him forward.',
        },
        {
          sentence:
            'Die Angst vor dem Versagen hinderte sie daran, es zu versuchen.',
          translation: 'The fear of failure prevented her from trying.',
        },
      ],
    },
    {
      word: 'Blick',
      desc: 'A view or glance.',
      examples: [
        {
          sentence: 'Von hier oben hat man einen schönen Blick auf die Stadt.',
          translation: 'From up here, you have a beautiful view of the city.',
        },
        {
          sentence: 'Sie warf ihm einen wütenden Blick zu.',
          translation: 'She gave him an angry glance.',
        },
        {
          sentence: 'Sein Blick blieb an dem Gemälde hängen.',
          translation: 'His gaze lingered on the painting.',
        },
        {
          sentence: 'Er warf einen kurzen Blick auf die Uhr.',
          translation: 'He glanced briefly at the clock.',
        },
        {
          sentence: 'Sie genoss den Blick auf das Meer.',
          translation: 'She enjoyed the view of the sea.',
        },
      ],
    },
    {
      word: 'dünn',
      desc: 'Having opposite surfaces or sides close together; not thick.',
      examples: [
        {
          sentence: 'Das Papier ist sehr dünn.',
          translation: 'The paper is very thin.',
        },
        {
          sentence: 'Sie trug eine dünnen Pullover unter ihrer Jacke.',
          translation: 'She wore a thin sweater under her jacket.',
        },
        {
          sentence: 'Die Luft dort oben ist sehr dünn.',
          translation: 'The air up there is very thin.',
        },
        {
          sentence: 'Er hat dünnere Haare als sein Bruder.',
          translation: 'He has thinner hair than his brother.',
        },
        {
          sentence: 'Die Eisschicht auf dem See ist dünn.',
          translation: 'The layer of ice on the lake is thin.',
        },
      ],
    },
    {
      word: 'Dreieck',
      desc: 'A plane figure with three straight sides and three angles.',
      examples: [
        {
          sentence: 'Das Dach hat die Form eines gleichseitigen Dreiecks.',
          translation: 'The roof has the shape of an equilateral triangle.',
        },
        {
          sentence:
            'Der Verkehrsknotenpunkt ist ein Kreisverkehr mit einem Dreieck in der Mitte.',
          translation:
            'The traffic junction is a roundabout with a triangle in the middle.',
        },
        {
          sentence: 'Wir berechneten die Fläche des Dreiecks.',
          translation: 'We calculated the area of the triangle.',
        },
        {
          sentence: 'Er falte das Papier zu einem Dreieck.',
          translation: 'He folded the paper into a triangle.',
        },
        {
          sentence:
            'Die Pyramide hat eine quadratische Basis und vier dreieckige Seiten.',
          translation:
            'The pyramid has a square base and four triangular sides.',
        },
      ],
    },
    {
      word: 'Erde',
      desc: 'The planet on which we live; the world.',
      examples: [
        {
          sentence: 'Die Erde dreht sich um die Sonne.',
          translation: 'The Earth orbits the sun.',
        },
        {
          sentence: 'Die Erde ist der dritte Planet im Sonnensystem.',
          translation: 'Earth is the third planet in the solar system.',
        },
        {
          sentence: 'Es regnet, weil die Erde feucht ist.',
          translation: 'It’s raining because the ground is wet.',
        },
        {
          sentence: 'Die Erde besteht hauptsächlich aus Wasser und Land.',
          translation: 'Earth consists mainly of water and land.',
        },
        {
          sentence: 'Der Astronaut betrachtete die Erde aus dem Weltall.',
          translation: 'The astronaut viewed Earth from space.',
        },
      ],
    },
    {
      word: 'Eile',
      desc: 'A state of urgency or haste.',
      examples: [
        {
          sentence: 'Wir waren in großer Eile, um den Zug zu erwischen.',
          translation: 'We were in a great hurry to catch the train.',
        },
        {
          sentence: 'In seiner Eile vergaß er sein Handy zu Hause.',
          translation: 'In his haste, he forgot his phone at home.',
        },
        {
          sentence: 'Sie handelte ohne Eile, um keine Fehler zu machen.',
          translation: 'She acted without haste to avoid making mistakes.',
        },
        {
          sentence: 'Die Zeit drängte, und er arbeitete mit großer Eile.',
          translation: 'Time was pressing, and he worked with great haste.',
        },
        {
          sentence:
            'In der Eile des Gefechts vergaßen sie das wichtigste Dokument.',
          translation:
            'In the heat of the moment, they forgot the most important document.',
        },
      ],
    },
    {
      word: 'Chef',
      desc: 'A person who is in charge of a department or organization; a leader or supervisor.',
      examples: [
        {
          sentence:
            'Der Chef war mit der Arbeit seiner Angestellten zufrieden.',
          translation: 'The boss was satisfied with the work of his employees.',
        },
        {
          sentence: 'Der Chef erteilte klare Anweisungen für das Projekt.',
          translation: 'The manager gave clear instructions for the project.',
        },
        {
          sentence: 'Er ist seit vielen Jahren der Chef des Unternehmens.',
          translation: "He has been the company's boss for many years.",
        },
        {
          sentence: 'Die Abteilungsleiter berichteten direkt an den Chef.',
          translation: 'The department heads reported directly to the manager.',
        },
        {
          sentence: 'Der Chef lobte die Mitarbeiter für ihre harte Arbeit.',
          translation:
            'The supervisor praised the employees for their hard work.',
        },
      ],
    },
    {
      word: 'Kolonie',
      desc: 'A group of people who settle in a new country or area but remain under the control of their native land.',
      examples: [
        {
          sentence:
            'Die britische Kolonie erlangte ihre Unabhängigkeit im Jahr 1947.',
          translation: 'The British colony gained its independence in 1947.',
        },
        {
          sentence:
            'Die Siedler gründeten eine Kolonie in dem neu entdeckten Land.',
          translation:
            'The settlers established a colony in the newly discovered land.',
        },
        {
          sentence: 'Die Kolonie wurde zum Zentrum des Handels in der Region.',
          translation: 'The colony became the center of trade in the region.',
        },
        {
          sentence:
            'Die Kolonie wurde von verschiedenen europäischen Mächten beansprucht.',
          translation: 'The colony was claimed by various European powers.',
        },
        {
          sentence:
            'Die Kolonie wuchs und gedieh unter der Führung ihrer Gründer.',
          translation:
            'The colony grew and prospered under the leadership of its founders.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Uhr, Mine, Krawatte, eingeben, Dur, frisch, Suche, senden, gelb, Pistole',
  words: [
    {
      word: 'Uhr',
      desc: 'A device for measuring and displaying time, typically in hours and minutes.',
      examples: [
        {
          sentence: 'Die Uhr an der Wand zeigt die genaue Zeit an.',
          translation: 'The clock on the wall shows the exact time.',
        },
        {
          sentence: 'Sie trug eine elegante Uhr am Handgelenk.',
          translation: 'She wore an elegant watch on her wrist.',
        },
        {
          sentence: 'Es ist Zeit, die Uhr umzustellen.',
          translation: "It's time to adjust the clock.",
        },
        {
          sentence: 'Die Uhr tickte laut in der Stille des Raumes.',
          translation: 'The clock ticked loudly in the silence of the room.',
        },
        {
          sentence: 'Die Zugfahrpläne sind an der Uhr im Bahnhof zu sehen.',
          translation:
            'The train schedules can be seen on the clock in the station.',
        },
      ],
    },
    {
      word: 'Mine',
      desc: 'An excavation in the earth for extracting coal, minerals, precious stones, etc.',
      examples: [
        {
          sentence: 'Die Mine wurde wegen Sicherheitsbedenken geschlossen.',
          translation: 'The mine was closed due to safety concerns.',
        },
        {
          sentence: 'Die Bergleute arbeiten hart in der Mine.',
          translation: 'The miners work hard in the mine.',
        },
        {
          sentence: 'Die Mine war reich an Gold und Silber.',
          translation: 'The mine was rich in gold and silver.',
        },
        {
          sentence: 'Die Mine war tief und dunkel.',
          translation: 'The mine was deep and dark.',
        },
        {
          sentence: 'Die Mine wurde für den Bergbau von Diamanten verwendet.',
          translation: 'The mine was used for diamond mining.',
        },
      ],
    },
    {
      word: 'Krawatte',
      desc: 'A long piece of cloth worn around the neck or shoulders, typically with a suit or formal wear.',
      examples: [
        {
          sentence: 'Er trug eine elegante Krawatte zu seinem Anzug.',
          translation: 'He wore an elegant tie with his suit.',
        },
        {
          sentence: 'Die Krawatte hatte ein auffälliges Muster.',
          translation: 'The tie had a striking pattern.',
        },
        {
          sentence:
            'Er zog seine Krawatte locker, nachdem er nach Hause gekommen war.',
          translation: 'He loosened his tie after coming home.',
        },
        {
          sentence: 'Die Krawatte war zu eng und drückte auf seinen Hals.',
          translation: 'The tie was too tight and pressed on his neck.',
        },
        {
          sentence: 'Er trug eine schwarze Krawatte zur Beerdigung.',
          translation: 'He wore a black tie to the funeral.',
        },
      ],
    },
    {
      word: 'eingeben',
      desc: 'To input or enter data into a computer or electronic device.',
      examples: [
        {
          sentence: 'Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein.',
          translation: 'Please enter your username and password.',
        },
        {
          sentence:
            'Sie müssen die richtigen Informationen in das Formular eingeben.',
          translation:
            'You need to enter the correct information into the form.',
        },
        {
          sentence: 'Bitte geben Sie Ihre persönlichen Daten ein.',
          translation: 'Please enter your personal information.',
        },
        {
          sentence: 'Er konnte den Code nicht richtig eingeben.',
          translation: "He couldn't enter the code correctly.",
        },
        {
          sentence:
            'Vergessen Sie nicht, Ihre Daten einzugeben, bevor Sie fortfahren.',
          translation: "Don't forget to input your data before proceeding.",
        },
      ],
    },
    {
      word: 'Dur',
      desc: 'A musical term indicating the quality of a chord that is neither major nor minor.',
      examples: [
        {
          sentence: 'Der Dur-Akkord klang harmonisch und fröhlich.',
          translation: 'The major chord sounded harmonious and cheerful.',
        },
        {
          sentence: 'Die Melodie wechselte zwischen Dur und Moll.',
          translation: 'The melody alternated between major and minor.',
        },
        {
          sentence: 'Er spielte eine Reihe von Akkorden in Dur und Moll.',
          translation: 'He played a series of chords in major and minor.',
        },
        {
          sentence:
            'Der Dur-Klang verlieh dem Lied eine optimistische Stimmung.',
          translation: 'The major sound gave the song an optimistic mood.',
        },
        {
          sentence: 'Die Komposition war hauptsächlich in Dur geschrieben.',
          translation: 'The composition was mainly written in major.',
        },
      ],
    },
    {
      word: 'frisch',
      desc: 'Newly made or obtained; not canned, frozen, or otherwise preserved.',
      examples: [
        {
          sentence: 'Sie kaufte frisches Obst und Gemüse auf dem Markt.',
          translation: 'She bought fresh fruits and vegetables at the market.',
        },
        {
          sentence: 'Das Brot wurde jeden Morgen frisch gebacken.',
          translation: 'The bread was freshly baked every morning.',
        },
        {
          sentence:
            'Er trank einen frisch gepressten Orangensaft zum Frühstück.',
          translation: 'He drank freshly squeezed orange juice for breakfast.',
        },
        {
          sentence: 'Die Luft roch nach frisch gemähtem Gras.',
          translation: 'The air smelled of freshly mowed grass.',
        },
        {
          sentence:
            'Das Restaurant verwendet nur frische Zutaten in seinen Gerichten.',
          translation:
            'The restaurant uses only fresh ingredients in its dishes.',
        },
      ],
    },
    {
      word: 'Suche',
      desc: 'The act or process of looking for someone or something.',
      examples: [
        {
          sentence:
            'Die Suche nach dem verlorenen Hund dauerte den ganzen Tag.',
          translation: 'The search for the lost dog lasted all day.',
        },
        {
          sentence:
            'Die Polizei leitete eine intensive Suche nach dem Vermissten ein.',
          translation:
            'The police initiated an intensive search for the missing person.',
        },
        {
          sentence: 'Die Suche nach Antworten führte zu neuen Fragen.',
          translation: 'The search for answers led to new questions.',
        },
        {
          sentence:
            'Die Suche nach einem Parkplatz in der Innenstadt war schwierig.',
          translation:
            'The search for a parking space in the city center was difficult.',
        },
        {
          sentence:
            'Die Suchfunktion der Website ermöglicht eine schnelle Suche.',
          translation:
            'The website’s search function allows for quick searching.',
        },
      ],
    },
    {
      word: 'senden',
      desc: 'To cause to go or be taken to a destination, especially to a distant one.',
      examples: [
        {
          sentence:
            'Er wird mir eine E-Mail senden, wenn er weitere Informationen hat.',
          translation: 'He will send me an email when he has more information.',
        },
        {
          sentence: 'Bitte senden Sie das Paket an meine Büroadresse.',
          translation: 'Please send the package to my office address.',
        },
        {
          sentence: 'Die Datei war zu groß, um per E-Mail zu senden.',
          translation: 'The file was too large to send via email.',
        },
        {
          sentence: 'Wir werden das Formular per Post senden.',
          translation: 'We will send the form by mail.',
        },
        {
          sentence: 'Sie müssen den Brief per Einschreiben senden.',
          translation: 'You need to send the letter by registered mail.',
        },
      ],
    },
    {
      word: 'gelb',
      desc: 'Of the color between green and orange in the spectrum; colored like ripe lemons or egg yolks.',
      examples: [
        {
          sentence: 'Die Sonnenblumen leuchteten in sattem Gelb.',
          translation: 'The sunflowers glowed in bright yellow.',
        },
        {
          sentence: 'Das gelbe Taxi hielt vor dem Haus.',
          translation: 'The yellow taxi stopped in front of the house.',
        },
        {
          sentence: 'Sie trug ein gelbes Kleid zur Party.',
          translation: 'She wore a yellow dress to the party.',
        },
        {
          sentence: 'Die Blätter werden im Herbst gelb.',
          translation: 'The leaves turn yellow in the fall.',
        },
        {
          sentence: 'Das gelbe Warnlicht blinkte an der Kreuzung.',
          translation: 'The yellow warning light flashed at the intersection.',
        },
      ],
    },
    {
      word: 'Pistole',
      desc: 'A handheld firearm designed to discharge a single bullet or projectile.',
      examples: [
        {
          sentence:
            'Der Detektiv zog seine Pistole und zielte auf den Verbrecher.',
          translation:
            'The detective drew his pistol and aimed at the criminal.',
        },
        {
          sentence:
            'Die Polizisten trugen ihre Pistolen in Holstern an der Hüfte.',
          translation:
            'The police officers carried their pistols in holsters on their hips.',
        },
        {
          sentence: 'Der Schütze feuerte die Pistole auf das Zielscheiben an.',
          translation: 'The shooter fired the pistol at the target.',
        },
        {
          sentence: 'Die Pistole war nicht geladen und daher nicht gefährlich.',
          translation: 'The pistol was not loaded and therefore not dangerous.',
        },
        {
          sentence:
            'Er besaß eine alte Revolverpistole aus dem 19. Jahrhundert.',
          translation: 'He owned an old 19th-century revolver pistol.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'erlauben, Druck, tot, Stelle, Wüste, Anzug, Strom, Aufzug, stiegen, ankommen',
  words: [
    {
      word: 'erlauben',
      desc: 'To give permission for something to happen or someone to do something.',
      examples: [
        {
          sentence: 'Meine Eltern erlauben mir nicht, zu spät auszugehen.',
          translation: "My parents don't allow me to stay out late.",
        },
        {
          sentence: 'Das Gesetz erlaubt das Rauchen nur an bestimmten Orten.',
          translation: 'The law only allows smoking in certain places.',
        },
        {
          sentence: 'Können Sie mir erlauben, das Fenster zu öffnen?',
          translation: 'Can you allow me to open the window?',
        },
        {
          sentence:
            'Die Lehrerin erlaubte den Schülern, das Klassenzimmer zu verlassen.',
          translation:
            'The teacher allowed the students to leave the classroom.',
        },
        {
          sentence:
            'Es ist wichtig, den Kindern zu erlauben, selbstständig zu sein.',
          translation: 'It is important to allow children to be independent.',
        },
      ],
    },
    {
      word: 'Druck',
      desc: 'The force exerted by one substance on another when the two are in contact.',
      examples: [
        {
          sentence:
            'Die Druckmessung erfolgt in Einheiten wie Pascal oder Bar.',
          translation: 'Pressure is measured in units such as Pascal or Bar.',
        },
        {
          sentence: 'Der Luftdruck beeinflusst das Wettergeschehen.',
          translation: 'Air pressure influences the weather.',
        },
        {
          sentence:
            'Der Druck in den Autoreifen muss regelmäßig überprüft werden.',
          translation:
            'The pressure in the car tires needs to be checked regularly.',
        },
        {
          sentence: 'Der Wasserdruck in den Leitungen war zu hoch.',
          translation: 'The water pressure in the pipes was too high.',
        },
        {
          sentence: 'Bei steigendem Druck sinkt der Siedepunkt des Wassers.',
          translation:
            'As pressure increases, the boiling point of water decreases.',
        },
      ],
    },
    {
      word: 'tot',
      desc: 'No longer alive; lifeless.',
      examples: [
        {
          sentence: 'Der Patient war seit Stunden tot.',
          translation: 'The patient had been dead for hours.',
        },
        {
          sentence: 'Die Pflanze war durch den Frost tot.',
          translation: 'The plant was dead from the frost.',
        },
        {
          sentence: 'Der Schauspieler spielte die Rolle eines toten Mannes.',
          translation: 'The actor played the role of a dead man.',
        },
        {
          sentence: 'Das Tier lag regungslos am Boden und war tot.',
          translation: 'The animal lay motionless on the ground and was dead.',
        },
        {
          sentence: 'Die Batterien waren tot und mussten ausgetauscht werden.',
          translation: 'The batteries were dead and needed to be replaced.',
        },
      ],
    },
    {
      word: 'Stelle',
      desc: 'A particular place or position.',
      examples: [
        {
          sentence:
            'Er zeigte auf die Stelle auf der Landkarte, an der wir uns befanden.',
          translation: 'He pointed to the spot on the map where we were.',
        },
        {
          sentence: 'Die genaue Stelle des Verbrechens war schwer zu finden.',
          translation: 'The exact spot of the crime was hard to find.',
        },
        {
          sentence: 'Er wartete an der vereinbarten Stelle auf sie.',
          translation: 'He waited for her at the agreed-upon spot.',
        },
        {
          sentence: 'Die Stelle des Unfalls wurde von der Polizei abgesperrt.',
          translation:
            'The site of the accident was cordoned off by the police.',
        },
        {
          sentence: 'An dieser Stelle war früher ein altes Gebäude.',
          translation: 'At this place, there used to be an old building.',
        },
      ],
    },
    {
      word: 'Wüste',
      desc: 'A barren area of land where little precipitation occurs and consequently living conditions are hostile for plant and animal life.',
      examples: [
        {
          sentence: 'Die Sahara ist die größte Wüste der Welt.',
          translation: 'The Sahara is the largest desert in the world.',
        },
        {
          sentence:
            'Kamelkarawanen durchqueren oft die trockenen Wüstenregionen.',
          translation: 'Camel caravans often cross the dry desert regions.',
        },
        {
          sentence: 'In der Wüste gibt es kaum Wasser.',
          translation: 'There is hardly any water in the desert.',
        },
        {
          sentence:
            'Einige Pflanzen und Tiere haben sich an das Leben in der Wüste angepasst.',
          translation:
            'Some plants and animals have adapted to life in the desert.',
        },
        {
          sentence: 'Die Hitze in der Wüste kann lebensbedrohlich sein.',
          translation: 'The heat in the desert can be life-threatening.',
        },
      ],
    },
    {
      word: 'Anzug',
      desc: 'A set of clothes made of the same material, usually including a jacket and trousers or a jacket and skirt, worn together, especially on formal occasions.',
      examples: [
        {
          sentence:
            'Er trug einen dunklen Anzug und eine Krawatte zur Hochzeit.',
          translation: 'He wore a dark suit and tie to the wedding.',
        },
        {
          sentence:
            'Im Büro muss er immer einen Anzug und eine Krawatte tragen.',
          translation: 'In the office, he always has to wear a suit and tie.',
        },
        {
          sentence:
            'Sie hat einen maßgeschneiderten Anzug für das Vorstellungsgespräch gekauft.',
          translation: 'She bought a tailored suit for the job interview.',
        },
        {
          sentence:
            'Ein schwarzer Anzug ist bei formellen Anlässen angemessen.',
          translation: 'A black suit is appropriate for formal occasions.',
        },
        {
          sentence: 'Der Anzug des Bräutigams war elegant und stilvoll.',
          translation: "The groom's suit was elegant and stylish.",
        },
      ],
    },
    {
      word: 'Strom',
      desc: 'The continuous flow of electric charge through a conductor.',
      examples: [
        {
          sentence:
            'Der Strom fließt durch die Kabel und versorgt die Geräte mit Energie.',
          translation:
            'The electricity flows through the cables and powers the devices.',
        },
        {
          sentence:
            'Ein Stromausfall führte dazu, dass die gesamte Nachbarschaft im Dunkeln saß.',
          translation:
            'A power outage resulted in the entire neighborhood sitting in darkness.',
        },
        {
          sentence:
            'Die Kinder lernten über elektrische Ströme im Physikunterricht.',
          translation:
            'The children learned about electrical currents in physics class.',
        },
        {
          sentence: 'Die Turbine wird durch den Strom des Wassers angetrieben.',
          translation: 'The turbine is powered by the flow of water.',
        },
        {
          sentence: 'Der Stromverbrauch nimmt in den Sommermonaten oft zu.',
          translation:
            'Electricity consumption often increases in the summer months.',
        },
      ],
    },
    {
      word: 'Aufzug',
      desc: 'A mechanism for raising and lowering people or goods, typically by means of a cab or platform that moves along a fixed track.',
      examples: [
        {
          sentence:
            'Wir benutzten den Aufzug, um in die oberen Stockwerke des Gebäudes zu gelangen.',
          translation:
            'We used the elevator to reach the upper floors of the building.',
        },
        {
          sentence:
            'Der Aufzug war außer Betrieb, daher mussten wir die Treppe nehmen.',
          translation:
            'The elevator was out of order, so we had to take the stairs.',
        },
        {
          sentence:
            'Im Krankenhaus gibt es einen speziellen Aufzug für Patienten auf Krankenbetten.',
          translation:
            'The hospital has a special elevator for patients on hospital beds.',
        },
        {
          sentence:
            'Bitte halten Sie die Tür des Aufzugs offen, ich komme gleich.',
          translation: 'Please hold the elevator door open, I am coming.',
        },
        {
          sentence:
            'Der Aufzug war überfüllt, also warteten wir auf den nächsten.',
          translation:
            'The elevator was crowded, so we waited for the next one.',
        },
      ],
    },
    {
      word: 'stiegen',
      desc: 'Past tense of "steigen," meaning to climb or ascend.',
      examples: [
        {
          sentence: 'Die Wanderer stiegen den steilen Berg hinauf.',
          translation: 'The hikers climbed up the steep mountain.',
        },
        {
          sentence: 'Die Preise stiegen aufgrund der erhöhten Nachfrage.',
          translation: 'Prices rose due to increased demand.',
        },
        {
          sentence: 'Die Temperaturen stiegen im Laufe des Tages stark an.',
          translation: 'Temperatures rose significantly during the day.',
        },
        {
          sentence:
            'Die Flugzeugpassagiere stiegen die Gangway hinunter und betraten das Flughafenterminal.',
          translation:
            'The airplane passengers descended the gangway and entered the airport terminal.',
        },
        {
          sentence:
            'Die Zahlen stiegen nach der Einführung des neuen Produkts rapide an.',
          translation:
            'The numbers rapidly increased after the introduction of the new product.',
        },
      ],
    },
    {
      word: 'ankommen',
      desc: 'To reach a destination or goal; to arrive.',
      examples: [
        {
          sentence: 'Der Zug wird pünktlich um 10:30 Uhr am Bahnhof ankommen.',
          translation:
            'The train will arrive at the station at 10:30 a.m. sharp.',
        },
        {
          sentence: 'Wir sind gestern Abend in London angekommen.',
          translation: 'We arrived in London last night.',
        },
        {
          sentence: 'Die Gäste werden in Kürze am Veranstaltungsort ankommen.',
          translation: 'The guests will arrive at the venue shortly.',
        },
        {
          sentence:
            'Der Flug wurde aufgrund des schlechten Wetters verspätet und wird erst morgen früh ankommen.',
          translation:
            'The flight was delayed due to bad weather and will arrive tomorrow morning.',
        },
        {
          sentence:
            'Die Pakete sind bereits angekommen und wurden an der Rezeption abgeholt.',
          translation:
            'The packages have already arrived and were picked up at the reception.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Stamm, Spur, Elternteil, Ufer, Teilung, Blatt, Substanz, begünstigen, verbinden, nach',
  words: [
    {
      word: 'Stamm',
      desc: 'The main line of descent of a family.',
      examples: [
        {
          sentence:
            'Die Ahnenforschung ermöglicht es, den eigenen Stammbaum zu erforschen.',
          translation:
            'Genealogy allows one to research their own family tree.',
        },
        {
          sentence: 'Der Stamm der Familie reicht mehrere Generationen zurück.',
          translation: 'The family lineage extends back several generations.',
        },
        {
          sentence:
            'Sie ist Mitglied des Stammes, der in dieser Region ansässig ist.',
          translation:
            'She is a member of the tribe that resides in this region.',
        },
        {
          sentence:
            'In einigen Kulturen spielen Stammesangelegenheiten eine wichtige Rolle.',
          translation:
            'In some cultures, tribal matters play an important role.',
        },
        {
          sentence: 'Der Stammvater der Familie wird oft als Gründer verehrt.',
          translation:
            'The patriarch of the family is often revered as the founder.',
        },
      ],
    },
    {
      word: 'Spur',
      desc: 'A mark or a series of marks left by the passage of someone or something.',
      examples: [
        {
          sentence:
            'Die Spuren im Schnee deuteten darauf hin, dass ein Tier vorbeigekommen war.',
          translation:
            'The tracks in the snow indicated that an animal had passed by.',
        },
        {
          sentence: 'Die Ermittler fanden Spuren des Einbrechers am Tatort.',
          translation:
            'The investigators found traces of the burglar at the crime scene.',
        },
        {
          sentence: 'Die Polizeihunde folgten der Spur des Entführers.',
          translation: 'The police dogs followed the trail of the kidnapper.',
        },
        {
          sentence:
            'Die Detektive untersuchten jede Spur, um den Täter zu identifizieren.',
          translation:
            'The detectives examined every clue to identify the perpetrator.',
        },
        {
          sentence:
            'Es gab keine Spur von Beweisen, die auf seine Schuld hindeuteten.',
          translation: 'There was no trace of evidence indicating his guilt.',
        },
      ],
    },
    {
      word: 'Elternteil',
      desc: 'A person who is a parent; a father or mother.',
      examples: [
        {
          sentence:
            'Eltern sollten gemeinsam die Verantwortung für ihre Kinder tragen.',
          translation:
            'Parents should share responsibility for their children together.',
        },
        {
          sentence:
            'Das Wohl des Kindes steht für die meisten Eltern an erster Stelle.',
          translation:
            'The well-being of the child is the top priority for most parents.',
        },
        {
          sentence:
            'Elternteile sollten stets ein offenes Ohr für ihre Kinder haben.',
          translation:
            'Parents should always have an open ear for their children.',
        },
        {
          sentence:
            'Die Elternteile arbeiteten zusammen, um die Kindererziehung zu unterstützen.',
          translation: 'The parents worked together to support child rearing.',
        },
        {
          sentence: 'Die Elternteile waren stolz auf die Erfolge ihrer Kinder.',
          translation:
            'The parents were proud of their children’s accomplishments.',
        },
      ],
    },
    {
      word: 'Ufer',
      desc: 'The land alongside or sloping down to a river or lake.',
      examples: [
        {
          sentence:
            'Wir verbrachten den Tag am Ufer des Sees und genossen die Aussicht.',
          translation:
            'We spent the day on the shore of the lake, enjoying the view.',
        },
        {
          sentence: 'Die Kinder bauten Sandburgen am Ufer des Strandes.',
          translation:
            'The children built sandcastles on the shore of the beach.',
        },
        {
          sentence:
            'Die Fischer versammelten sich am frühen Morgen am Ufer des Flusses.',
          translation:
            'The fishermen gathered at the riverbank early in the morning.',
        },
        {
          sentence:
            'Das Boot legte am Ufer an, um die Passagiere aussteigen zu lassen.',
          translation:
            'The boat docked at the shore to let the passengers disembark.',
        },
        {
          sentence:
            'Am Ufer des Flusses wuchs eine Vielzahl von Pflanzen und Bäumen.',
          translation:
            'A variety of plants and trees grew along the riverbank.',
        },
      ],
    },
    {
      word: 'Teilung',
      desc: 'The action or process of dividing something into parts.',
      examples: [
        {
          sentence:
            'Die Teilung des Kuchens erfolgte gerecht, damit jeder einen gleich großen Anteil bekam.',
          translation:
            'The division of the cake was fair so that everyone got an equal share.',
        },
        {
          sentence:
            'Die Teilung des Landes führte zu politischen Unruhen und Konflikten.',
          translation:
            'The division of the country led to political unrest and conflicts.',
        },
        {
          sentence:
            'Die Teilung der Verantwortlichkeiten machte die Arbeit effizienter.',
          translation:
            'The division of responsibilities made the work more efficient.',
        },
        {
          sentence:
            'Die Teilung des Erbes unter den Geschwistern war kompliziert.',
          translation:
            'The division of the inheritance among the siblings was complicated.',
        },
        {
          sentence:
            'Die Teilung des Raumes mit einem Vorhang schaffte Privatsphäre.',
          translation:
            'The division of the room with a curtain created privacy.',
        },
      ],
    },
    {
      word: 'Blatt',
      desc: 'A flat, thin structure that forms part of something, such as a leaf of a plant or the page of a book.',
      examples: [
        {
          sentence: 'Die Blätter des Baumes begannen im Herbst zu fallen.',
          translation: 'The leaves of the tree started to fall in autumn.',
        },
        {
          sentence: 'Ein Blatt Papier diente als Notiz für ihre Gedanken.',
          translation: 'A sheet of paper served as a note for her thoughts.',
        },
        {
          sentence:
            'Die Blätter des Buches waren mit interessanten Informationen gefüllt.',
          translation:
            'The pages of the book were filled with interesting information.',
        },
        {
          sentence: 'Das Blatt Metall war dünn und flexibel.',
          translation: 'The sheet of metal was thin and flexible.',
        },
        {
          sentence:
            'Die Blätter des Kleeblatts symbolisieren Glück und Hoffnung.',
          translation: 'The leaves of the clover symbolize luck and hope.',
        },
      ],
    },
    {
      word: 'Substanz',
      desc: 'The real physical matter of which a person or thing consists.',
      examples: [
        {
          sentence: 'Die Substanz des Gebäudes wurde durch das Feuer zerstört.',
          translation:
            'The substance of the building was destroyed by the fire.',
        },
        {
          sentence:
            'Er suchte nach einer Substanz, die das Wachstum der Pflanzen fördern würde.',
          translation:
            'He was looking for a substance that would promote plant growth.',
        },
        {
          sentence:
            'Die Substanz des Medikaments wurde in einem Labor getestet.',
          translation:
            'The substance of the medication was tested in a laboratory.',
        },
        {
          sentence: 'Es gibt keine Substanz in seinen Behauptungen.',
          translation: 'There is no substance to his claims.',
        },
        {
          sentence: 'Die Substanz des Gemäldes war von unschätzbarem Wert.',
          translation: 'The substance of the painting was invaluable.',
        },
      ],
    },
    {
      word: 'begünstigen',
      desc: 'To support or promote the interests of someone or something.',
      examples: [
        {
          sentence:
            'Die Regierung wollte Maßnahmen begünstigen, die das Wirtschaftswachstum fördern würden.',
          translation:
            'The government wanted to favor measures that would promote economic growth.',
        },
        {
          sentence: 'Sein Vater begünstigte ihn gegenüber seinen Geschwistern.',
          translation: 'His father favored him over his siblings.',
        },
        {
          sentence:
            'Das milde Klima begünstigt den Anbau von Wein in dieser Region.',
          translation:
            'The mild climate favors the cultivation of wine in this region.',
        },
        {
          sentence:
            'Die Politik begünstigte die reicheren Bevölkerungsschichten.',
          translation:
            'The policy favored the wealthier segments of the population.',
        },
        {
          sentence:
            'Die Technologie begünstigt eine schnellere und effizientere Kommunikation.',
          translation:
            'Technology favors faster and more efficient communication.',
        },
      ],
    },
    {
      word: 'verbinden',
      desc: 'To join together or link two or more things.',
      examples: [
        {
          sentence: 'Die Brücke verbindet die beiden Ufer des Flusses.',
          translation: 'The bridge connects the two banks of the river.',
        },
        {
          sentence:
            'Sie versuchte, die beiden Drähte miteinander zu verbinden.',
          translation: 'She tried to connect the two wires together.',
        },
        {
          sentence: 'Seine Reden verbinden Klarheit mit Einfühlungsvermögen.',
          translation: 'His speeches combine clarity with empathy.',
        },
        {
          sentence: 'Musik hat die Kraft, Menschen zu verbinden.',
          translation: 'Music has the power to connect people.',
        },
        {
          sentence:
            'Wir müssen die verschiedenen Teile des Projekts miteinander verbinden.',
          translation:
            'We need to connect the different parts of the project together.',
        },
      ],
    },
    {
      word: 'nach',
      desc: 'Towards a particular direction.',
      examples: [
        {
          sentence: 'Sie ging nach Hause, um sich auszuruhen.',
          translation: 'She went home to rest.',
        },
        {
          sentence: 'Die Kinder rannten nach draußen, als der Regen aufhörte.',
          translation: 'The children ran outside when the rain stopped.',
        },
        {
          sentence: 'Wir schauten nach oben und sahen die Sterne am Himmel.',
          translation: 'We looked up and saw the stars in the sky.',
        },
        {
          sentence: 'Er sehnte sich nach Abenteuer und neuen Erfahrungen.',
          translation: 'He longed for adventure and new experiences.',
        },
        {
          sentence: 'Die Katze streckte sich nach dem Vogel auf dem Ast aus.',
          translation: 'The cat reached out for the bird on the branch.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'verbringen, Akkord, Fett, froh, Original, Aktie, Station, Papa, Brot, aufladen',
  words: [
    {
      word: 'verbringen',
      desc: 'To pass or spend (time).',
      examples: [
        {
          sentence: 'Wir verbrachten den ganzen Tag am Strand.',
          translation: 'We spent the whole day at the beach.',
        },
        {
          sentence: 'Er verbringt viel Zeit mit seinen Hobbys.',
          translation: 'He spends a lot of time on his hobbies.',
        },
        {
          sentence: 'Sie verbringen jedes Jahr ihren Urlaub in den Bergen.',
          translation: 'They spend their vacation in the mountains every year.',
        },
        {
          sentence: 'Ich möchte mehr Zeit mit meiner Familie verbringen.',
          translation: 'I want to spend more time with my family.',
        },
        {
          sentence: 'Sie verbrachte ihre Kindheit in einem kleinen Dorf.',
          translation: 'She spent her childhood in a small village.',
        },
      ],
    },
    {
      word: 'Akkord',
      desc: 'A group of musical notes played or sung together to form a set sequence.',
      examples: [
        {
          sentence: 'Er spielte einen Akkord auf seiner Gitarre.',
          translation: 'He played a chord on his guitar.',
        },
        {
          sentence: 'Der Akkord klang schön und harmonisch.',
          translation: 'The chord sounded beautiful and harmonious.',
        },
        {
          sentence: 'Kannst du diesen Akkord auf dem Klavier spielen?',
          translation: 'Can you play this chord on the piano?',
        },
        {
          sentence: 'Der Song beginnt mit einem einfachen Akkord.',
          translation: 'The song starts with a simple chord.',
        },
        {
          sentence: 'Sie übte die Akkorde für ihr Konzert.',
          translation: 'She practiced the chords for her concert.',
        },
      ],
    },
    {
      word: 'Fett',
      desc: 'A natural oily or greasy substance occurring in animal bodies, especially when deposited as a layer under the skin or around certain organs.',
      examples: [
        {
          sentence: 'Dieses Fleisch hat zu viel Fett.',
          translation: 'This meat has too much fat.',
        },
        {
          sentence: 'Ich versuche, fettarme Lebensmittel zu essen.',
          translation: 'I try to eat low-fat foods.',
        },
        {
          sentence: 'Das Fett schwimmt auf der Oberfläche der Suppe.',
          translation: 'The fat floats on the surface of the soup.',
        },
        {
          sentence: 'Sie hat das Fett vom Fleisch abgeschnitten.',
          translation: 'She trimmed the fat off the meat.',
        },
        {
          sentence: 'Einige Leute verwenden tierische Fette zum Kochen.',
          translation: 'Some people use animal fats for cooking.',
        },
      ],
    },
    {
      word: 'froh',
      desc: 'Feeling or showing happiness or joy.',
      examples: [
        {
          sentence: 'Ich bin froh, dass du gekommen bist.',
          translation: 'I am glad you came.',
        },
        {
          sentence: 'Er war froh über den Erfolg seines Projekts.',
          translation: 'He was happy about the success of his project.',
        },
        {
          sentence: 'Sie war froh, als sie die gute Nachricht hörte.',
          translation: 'She was happy when she heard the good news.',
        },
        {
          sentence: 'Die Kinder waren froh, als sie das Eis bekamen.',
          translation: 'The children were happy when they got the ice cream.',
        },
        {
          sentence: 'Es macht mich froh, dich wiederzusehen.',
          translation: 'It makes me happy to see you again.',
        },
      ],
    },
    {
      word: 'Original',
      desc: 'Belonging or pertaining to the origin or beginning of something, or to a thing at its beginning.',
      examples: [
        {
          sentence: 'Dieses Gemälde ist ein Original des berühmten Künstlers.',
          translation: 'This painting is an original by the famous artist.',
        },
        {
          sentence: 'Wir hörten die Originalaufnahme des Liedes.',
          translation: 'We listened to the original recording of the song.',
        },
        {
          sentence: 'Es ist wichtig, die Originaldokumente aufzubewahren.',
          translation: 'It is important to keep the original documents.',
        },
        {
          sentence:
            'Die Originalversion des Films war viel besser als das Remake.',
          translation:
            'The original version of the movie was much better than the remake.',
        },
        {
          sentence: 'Das ist das Originalrezept meiner Großmutter.',
          translation: "That's my grandmother's original recipe.",
        },
      ],
    },
    {
      word: 'Aktie',
      desc: 'A share or financial security representing ownership in a company or corporation.',
      examples: [
        {
          sentence:
            'Er kaufte Aktien von verschiedenen Technologieunternehmen.',
          translation: 'He bought shares in various technology companies.',
        },
        {
          sentence:
            'Die Aktien des Unternehmens stiegen nach der Bekanntgabe der Gewinne.',
          translation:
            'The company’s shares rose after the announcement of the profits.',
        },
        {
          sentence: 'Sie besitzt eine beträchtliche Anzahl von Aktien.',
          translation: 'She owns a significant number of shares.',
        },
        {
          sentence:
            'Der Aktienkurs fiel nach der Veröffentlichung der schlechten Nachrichten.',
          translation:
            'The stock price fell after the release of the bad news.',
        },
        {
          sentence:
            'Sie entschied sich, Aktien als langfristige Investition zu kaufen.',
          translation: 'She decided to buy stocks as a long-term investment.',
        },
      ],
    },
    {
      word: 'Station',
      desc: 'A place where buses, trains, or other vehicles stop for passengers to get on or off.',
      examples: [
        {
          sentence: 'Die nächste Station ist Hauptbahnhof.',
          translation: 'The next station is the central station.',
        },
        {
          sentence: 'Wir trafen uns vor der U-Bahn-Station.',
          translation: 'We met in front of the subway station.',
        },
        {
          sentence: 'Die Station war überfüllt mit wartenden Passagieren.',
          translation: 'The station was crowded with waiting passengers.',
        },
        {
          sentence: 'Der Zug kam pünktlich an der Station an.',
          translation: 'The train arrived at the station on time.',
        },
        {
          sentence: 'Die Station befindet sich am Stadtrand.',
          translation: 'The station is located on the outskirts of the city.',
        },
      ],
    },
    {
      word: 'Papa',
      desc: 'Father; a term of affection for one’s father.',
      examples: [
        {
          sentence: 'Mein Papa kocht am Wochenende immer für uns.',
          translation: 'My dad always cooks for us on weekends.',
        },
        {
          sentence: 'Ich gehe mit meinem Papa zum Fußballspiel.',
          translation: 'I am going to the football match with my dad.',
        },
        {
          sentence: 'Papa, kannst du mir helfen?',
          translation: 'Dad, can you help me?',
        },
        {
          sentence: 'Zum Geburtstag habe ich meinem Papa eine Uhr geschenkt.',
          translation: 'For his birthday, I gave my dad a watch.',
        },
        {
          sentence: 'Papa liest mir jeden Abend eine Geschichte vor.',
          translation: 'Dad reads me a story every night.',
        },
      ],
    },
    {
      word: 'Brot',
      desc: 'Bread; a staple food made from flour and water and usually baked.',
      examples: [
        {
          sentence: 'Zum Frühstück esse ich immer zwei Scheiben Brot.',
          translation: 'I always eat two slices of bread for breakfast.',
        },
        {
          sentence: 'Kannst du bitte frisches Brot vom Bäcker holen?',
          translation: 'Can you please get some fresh bread from the baker?',
        },
        {
          sentence: 'Wir backen unser Brot selbst.',
          translation: 'We bake our bread ourselves.',
        },
        {
          sentence: 'Möchtest du Brot mit Butter oder Marmelade?',
          translation: 'Would you like bread with butter or jam?',
        },
        {
          sentence: 'Dieses Brot ist besonders lecker mit Käse.',
          translation: 'This bread is especially delicious with cheese.',
        },
      ],
    },
    {
      word: 'aufladen',
      desc: 'To charge; the process of adding electrical energy to a battery.',
      examples: [
        {
          sentence: 'Ich muss mein Handy aufladen, der Akku ist fast leer.',
          translation: 'I need to charge my phone, the battery is almost dead.',
        },
        {
          sentence: 'Vergiss nicht, die Kamera vor unserem Ausflug aufzuladen.',
          translation: 'Don’t forget to charge the camera before our trip.',
        },
        {
          sentence:
            'Kannst du mir das Ladegerät leihen? Ich muss meinen Laptop aufladen.',
          translation:
            'Can you lend me the charger? I need to charge my laptop.',
        },
        {
          sentence: 'Er hat sein Elektroauto über Nacht aufgeladen.',
          translation: 'He charged his electric car overnight.',
        },
        {
          sentence:
            'Wie lange dauert es, bis die Batterie vollständig aufgeladen ist?',
          translation: 'How long does it take for the battery to fully charge?',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'richtig, Leiste, Angebot, Segment, Sklave, Ente, Augenblick, Markt, Grad, besiedeln',
  words: [
    {
      word: 'richtig',
      desc: 'Proper; correct or suitable for a purpose.',
      examples: [
        {
          sentence: 'Deine Lösung ist absolut richtig.',
          translation: 'Your solution is absolutely correct.',
        },
        {
          sentence: 'Es ist wichtig, die richtige Entscheidung zu treffen.',
          translation: 'It’s important to make the right decision.',
        },
        {
          sentence: 'Ich hoffe, ich habe die richtige Richtung eingeschlagen.',
          translation: 'I hope I’ve taken the right direction.',
        },
        {
          sentence: 'Hast du das richtig verstanden?',
          translation: 'Did you understand that correctly?',
        },
        {
          sentence:
            'Sie trägt immer die richtige Kleidung für jede Gelegenheit.',
          translation: 'She always wears the proper clothes for any occasion.',
        },
      ],
    },
    {
      word: 'Leiste',
      desc: 'Bar; a long, rigid piece of wood, metal, or similar material.',
      examples: [
        {
          sentence: 'Er zog sich an der Klimmzug-Leiste hoch.',
          translation: 'He pulled himself up on the pull-up bar.',
        },
        {
          sentence: 'Die Leiste am Boden verhindert das Rutschen.',
          translation: 'The bar on the floor prevents slipping.',
        },
        {
          sentence:
            'Ich habe eine Leiste an die Wand montiert, um Bilder aufzuhängen.',
          translation: 'I mounted a bar on the wall to hang pictures.',
        },
        {
          sentence: 'Die Leiste am Fenster muss repariert werden.',
          translation: 'The bar on the window needs to be repaired.',
        },
        {
          sentence: 'Kannst du mir helfen, diese Leiste zu sägen?',
          translation: 'Can you help me saw this bar?',
        },
      ],
    },
    {
      word: 'Angebot',
      desc: 'Offer; a proposal or expression of willingness to do or provide something.',
      examples: [
        {
          sentence: 'Das Angebot im Supermarkt diese Woche ist sehr gut.',
          translation: 'The offer in the supermarket this week is very good.',
        },
        {
          sentence: 'Er hat ein Jobangebot in einer anderen Stadt bekommen.',
          translation: 'He received a job offer in another city.',
        },
        {
          sentence: 'Wir sollten das Angebot annehmen, bevor es zu spät ist.',
          translation: 'We should accept the offer before it’s too late.',
        },
        {
          sentence:
            'Das Restaurant hat ein spezielles Angebot zum Valentinstag.',
          translation:
            'The restaurant has a special offer for Valentine’s Day.',
        },
        {
          sentence:
            'Ich habe ein Angebot für dich, das du nicht ablehnen kannst.',
          translation: 'I have an offer for you that you can’t refuse.',
        },
      ],
    },
    {
      word: 'Segment',
      desc: 'Segment; a part or section of something that is somewhat separate from the rest.',
      examples: [
        {
          sentence: 'Der Markt ist in verschiedene Segmente unterteilt.',
          translation: 'The market is divided into different segments.',
        },
        {
          sentence: 'Dieses Segment der Bevölkerung ist am meisten betroffen.',
          translation: 'This segment of the population is most affected.',
        },
        {
          sentence: 'Wir fokussieren uns auf das Premium-Segment.',
          translation: 'We are focusing on the premium segment.',
        },
        {
          sentence: 'Das letzte Segment des Films war besonders emotional.',
          translation:
            'The last segment of the movie was particularly emotional.',
        },
        {
          sentence: 'Ein Orangen-Segment als Garnitur sieht immer schön aus.',
          translation: 'An orange segment as a garnish always looks nice.',
        },
      ],
    },
    {
      word: 'Sklave',
      desc: 'Slave; a person who is the legal property of another and is forced to obey them.',
      examples: [
        {
          sentence:
            'In der Antike waren Sklaven ein wichtiger Teil der Wirtschaft.',
          translation:
            'In ancient times, slaves were an important part of the economy.',
        },
        {
          sentence: 'Er fühlte sich wie ein Sklave in seinem eigenen Haus.',
          translation: 'He felt like a slave in his own house.',
        },
        {
          sentence:
            'Die Geschichte lehrt uns über die Grausamkeiten der Sklaverei.',
          translation: 'History teaches us about the cruelties of slavery.',
        },
        {
          sentence:
            'Sklaven wurden oft gezwungen, unter schrecklichen Bedingungen zu arbeiten.',
          translation:
            'Slaves were often forced to work under terrible conditions.',
        },
        {
          sentence:
            'Die Befreiung der Sklaven war ein wichtiger Schritt in der Geschichte.',
          translation:
            'The emancipation of slaves was an important step in history.',
        },
      ],
    },
    {
      word: 'Ente',
      desc: 'Duck; a waterbird with a broad blunt bill, short legs, webbed feet, and a waddling gait.',
      examples: [
        {
          sentence: 'Enten füttern im Park macht Kindern viel Spaß.',
          translation:
            'Feeding ducks in the park is a lot of fun for children.',
        },
        {
          sentence: 'Wir sahen eine Familie von Enten im Teich schwimmen.',
          translation: 'We saw a family of ducks swimming in the pond.',
        },
        {
          sentence: 'Die Ente ist ein beliebtes Motiv in Kinderbüchern.',
          translation: 'The duck is a popular motif in children’s books.',
        },
        {
          sentence: 'Enten können sowohl im Wasser als auch an Land leben.',
          translation: 'Ducks can live both in water and on land.',
        },
        {
          sentence: 'Zum Abendessen gibt es heute Ente mit Orangensauce.',
          translation: 'For dinner today, there’s duck with orange sauce.',
        },
      ],
    },
    {
      word: 'Augenblick',
      desc: 'Instant; a very short period of time.',
      examples: [
        {
          sentence: 'Warte einen Augenblick, ich bin gleich fertig.',
          translation: 'Wait a moment, I’ll be done in no time.',
        },
        {
          sentence: 'Im nächsten Augenblick war er verschwunden.',
          translation: 'The next instant, he was gone.',
        },
        {
          sentence: 'Ein Augenblick der Unachtsamkeit kann teuer werden.',
          translation: 'A moment of inattention can be costly.',
        },
        {
          sentence: 'Dieser Augenblick hat alles verändert.',
          translation: 'That instant changed everything.',
        },
        {
          sentence: 'Kannst du diesen Augenblick festhalten?',
          translation: 'Can you capture this moment?',
        },
      ],
    },
    {
      word: 'Markt',
      desc: 'Market; an area or arena in which commercial dealings are conducted.',
      examples: [
        {
          sentence: 'Wir gehen samstags immer auf den Markt.',
          translation: 'We always go to the market on Saturdays.',
        },
        {
          sentence: 'Der Markt für Bio-Lebensmittel wächst schnell.',
          translation: 'The market for organic food is growing quickly.',
        },
        {
          sentence: 'Sie hat ihr Produkt erfolgreich auf dem Markt eingeführt.',
          translation: 'She successfully introduced her product to the market.',
        },
        {
          sentence: 'Die Marktlage ist derzeit sehr volatil.',
          translation: 'The market situation is currently very volatile.',
        },
        {
          sentence: 'Auf dem Markt findet man die frischesten Zutaten.',
          translation: 'You find the freshest ingredients at the market.',
        },
      ],
    },
    {
      word: 'Grad',
      desc: 'Degree; a unit of measurement of temperature, angle, or educational achievement.',
      examples: [
        {
          sentence: 'Es sind heute 30 Grad Celsius.',
          translation: 'It is 30 degrees Celsius today.',
        },
        {
          sentence: 'Er hat einen hohen Grad an Präzision.',
          translation: 'He has a high degree of precision.',
        },
        {
          sentence: 'Sie hat ihren Mastergrad in Biologie erhalten.',
          translation: 'She received her master’s degree in biology.',
        },
        {
          sentence: 'Der Winkel beträgt genau 90 Grad.',
          translation: 'The angle is exactly 90 degrees.',
        },
        {
          sentence: 'Diese Schärfe ist mir ein paar Grad zu viel.',
          translation: 'This spiciness is a few degrees too much for me.',
        },
      ],
    },
    {
      word: 'besiedeln',
      desc: 'Populate; to inhabit or settle in a place as a community or species.',
      examples: [
        {
          sentence:
            'Menschen begannen vor Tausenden von Jahren, diesen Kontinent zu besiedeln.',
          translation:
            'Humans began to populate this continent thousands of years ago.',
        },
        {
          sentence: 'Die Insel wurde hauptsächlich von Vögeln besiedelt.',
          translation: 'The island was mainly populated by birds.',
        },
        {
          sentence: 'Sie planen, Mars in der Zukunft zu besiedeln.',
          translation: 'They plan to populate Mars in the future.',
        },
        {
          sentence:
            'Neue Arten besiedeln das kürzlich geschaffene Naturschutzgebiet.',
          translation:
            'New species are populating the recently created nature reserve.',
        },
        {
          sentence: 'Die Region wurde schnell von Siedlern besiedelt.',
          translation: 'The region was quickly settled by settlers.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'küken, liebe, Feind, antworten, Getränk, auftreten, Unterstützung, Rede, Natur, Angebot',
  words: [
    {
      word: 'küken',
      desc: 'Chick; a young bird, especially a newly hatched chicken.',
      examples: [
        {
          sentence: 'Das Küken piept, weil es Hunger hat.',
          translation: 'The chick is peeping because it is hungry.',
        },
        {
          sentence: 'Wir haben fünf Küken im Hinterhof.',
          translation: 'We have five chicks in the backyard.',
        },
        {
          sentence: 'Die Küken folgen ihrer Mutter überall hin.',
          translation: 'The chicks follow their mother everywhere.',
        },
        {
          sentence: 'Das Küken lernt, wie man Körner pickt.',
          translation: 'The chick is learning how to peck at grains.',
        },
        {
          sentence: 'Küken wachsen sehr schnell.',
          translation: 'Chicks grow very quickly.',
        },
      ],
    },
    {
      word: 'liebe',
      desc: 'Dear; a term of endearment or affection.',
      examples: [
        {
          sentence: 'Liebe Maria, ich hoffe, es geht dir gut.',
          translation: 'Dear Maria, I hope you are well.',
        },
        {
          sentence: 'Meine liebe Oma backt die besten Kuchen.',
          translation: 'My dear grandma bakes the best cakes.',
        },
        {
          sentence: 'Er schrieb ihr einen Brief: "Liebe Anna..."',
          translation: 'He wrote her a letter: "Dear Anna..."',
        },
        {
          sentence: 'Liebe ist das wichtigste Gefühl.',
          translation: 'Love is the most important feeling.',
        },
        {
          sentence: 'Ich vermisse dich, meine Liebe.',
          translation: 'I miss you, my dear.',
        },
      ],
    },
    {
      word: 'Feind',
      desc: 'Enemy; a person who is actively opposed or hostile to someone or something.',
      examples: [
        {
          sentence: 'Sie betrachteten sich als Feinde.',
          translation: 'They considered each other enemies.',
        },
        {
          sentence:
            'Im Krieg ist es schwer, Freund von Feind zu unterscheiden.',
          translation: 'In war, it is hard to distinguish friend from enemy.',
        },
        {
          sentence: 'Der Superheld kämpft gegen seinen Erzfeind.',
          translation: 'The superhero fights against his archenemy.',
        },
        {
          sentence: 'Die Angst ist oft unser größter Feind.',
          translation: 'Fear is often our greatest enemy.',
        },
        {
          sentence: 'Sie haben den Feind erfolgreich abgewehrt.',
          translation: 'They successfully repelled the enemy.',
        },
      ],
    },
    {
      word: 'antworten',
      desc: 'Reply; to say something in response to a question or statement.',
      examples: [
        {
          sentence: 'Bitte antworte auf meine Frage.',
          translation: 'Please reply to my question.',
        },
        {
          sentence: 'Er antwortete mit einem Lächeln.',
          translation: 'He replied with a smile.',
        },
        {
          sentence: 'Auf diese Kritik habe ich keine Antwort.',
          translation: 'I have no reply to that criticism.',
        },
        {
          sentence: 'Sie antwortete schnell auf die E-Mail.',
          translation: 'She replied quickly to the email.',
        },
        {
          sentence: 'Wie wirst du darauf antworten?',
          translation: 'How will you respond to that?',
        },
      ],
    },
    {
      word: 'Getränk',
      desc: 'Drink; a liquid that can be swallowed as refreshment or nourishment.',
      examples: [
        {
          sentence: 'Ein kaltes Getränk wäre jetzt schön.',
          translation: 'A cold drink would be nice now.',
        },
        {
          sentence: 'Wasser ist das gesündeste Getränk.',
          translation: 'Water is the healthiest drink.',
        },
        {
          sentence: 'Kann ich bitte ein warmes Getränk haben?',
          translation: 'Can I have a hot drink, please?',
        },
        {
          sentence: 'Das Café bietet eine Vielzahl von Getränken an.',
          translation: 'The café offers a variety of drinks.',
        },
        {
          sentence: 'Sie bestellten Getränke und Snacks.',
          translation: 'They ordered drinks and snacks.',
        },
      ],
    },
    {
      word: 'auftreten',
      desc: 'Occur; to happen or take place.',
      examples: [
        {
          sentence: 'Das Problem tritt immer wieder auf.',
          translation: 'The problem occurs over and over again.',
        },
        {
          sentence: 'Fehler können bei jedem System auftreten.',
          translation: 'Errors can occur in any system.',
        },
        {
          sentence: 'Das Ereignis tritt einmal im Jahr auf.',
          translation: 'The event occurs once a year.',
        },
        {
          sentence:
            'Sollte das Problem erneut auftreten, kontaktieren Sie uns bitte.',
          translation: 'Should the problem occur again, please contact us.',
        },
        {
          sentence: 'Komplikationen traten während der Operation auf.',
          translation: 'Complications occurred during the surgery.',
        },
      ],
    },
    {
      word: 'Unterstützung',
      desc: 'Support; assistance provided for the maintenance or promotion of something.',
      examples: [
        {
          sentence: 'Vielen Dank für Ihre Unterstützung.',
          translation: 'Thank you for your support.',
        },
        {
          sentence: 'Er erhielt viel Unterstützung von seiner Familie.',
          translation: 'He received a lot of support from his family.',
        },
        {
          sentence:
            'Die Unterstützung durch die Gemeinschaft war überwältigend.',
          translation: 'The support from the community was overwhelming.',
        },
        {
          sentence:
            'Wir bieten technische Unterstützung für unsere Produkte an.',
          translation: 'We provide technical support for our products.',
        },
        {
          sentence: 'Unterstützung für lokale Unternehmen ist wichtig.',
          translation: 'Support for local businesses is important.',
        },
      ],
    },
    {
      word: 'Rede',
      desc: 'Speech; a formal address or discourse delivered to an audience.',
      examples: [
        {
          sentence: 'Die Rede des Präsidenten war sehr inspirierend.',
          translation: 'The president’s speech was very inspiring.',
        },
        {
          sentence:
            'Er hielt eine Rede auf der Hochzeit seines besten Freundes.',
          translation: 'He gave a speech at his best friend’s wedding.',
        },
        {
          sentence: 'Die Lehrerin bat die Schüler, eine kurze Rede zu halten.',
          translation: 'The teacher asked the students to give a short speech.',
        },
        {
          sentence: 'Ihre Rede auf der Konferenz war sehr aufschlussreich.',
          translation: 'Her speech at the conference was very enlightening.',
        },
        {
          sentence: 'Nach der Rede gab es stehenden Applaus.',
          translation: 'After the speech, there was a standing ovation.',
        },
      ],
    },
    {
      word: 'Natur',
      desc: 'Nature; the phenomena of the physical world collectively, including plants, animals, the landscape, and other features and products of the earth, as opposed to humans or human creations.',
      examples: [
        {
          sentence: 'Wir sollten mehr Zeit in der Natur verbringen.',
          translation: 'We should spend more time in nature.',
        },
        {
          sentence: 'Die Schönheit der Natur ist atemberaubend.',
          translation: 'The beauty of nature is breathtaking.',
        },
        {
          sentence: 'Die Dokumentation zeigt die wilde Natur in Afrika.',
          translation: 'The documentary shows the wild nature in Africa.',
        },
        {
          sentence:
            'Naturschutz ist wichtig, um die Natur für zukünftige Generationen zu bewahren.',
          translation:
            'Conservation is important to preserve nature for future generations.',
        },
        {
          sentence: 'Die Natur hat eine heilende Wirkung auf den Menschen.',
          translation: 'Nature has a healing effect on people.',
        },
      ],
    },
    {
      word: 'Angebot',
      desc: 'Offer or range; a presentation of something for acceptance, refusal, or consideration, or a collection of goods or services available for purchase.',
      examples: [
        {
          sentence: 'Das Angebot im Geschäft war sehr gut.',
          translation: 'The offer in the store was very good.',
        },
        {
          sentence: 'Er machte ihr ein Angebot, das sie nicht ablehnen konnte.',
          translation: 'He made her an offer she couldn’t refuse.',
        },
        {
          sentence: 'Das Hotel hat ein breites Angebot an Freizeitaktivitäten.',
          translation: 'The hotel has a wide range of leisure activities.',
        },
        {
          sentence: 'Aufgrund der hohen Nachfrage wurde das Angebot erweitert.',
          translation: 'Due to high demand, the range was expanded.',
        },
        {
          sentence: 'Das Sonderangebot gilt nur für kurze Zeit.',
          translation: 'The special offer is only available for a short time.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Dampf, Bewegung, Weg, Flüssigkeit, protokollieren, gemeint, Quotient, Gebiss, Schale, Hals',
  words: [
    {
      word: 'Dampf',
      desc: 'Steam; the vapor into which water is converted when heated, forming a white mist of minute water droplets in the air.',
      examples: [
        {
          sentence: 'Der Wasserkessel auf dem Herd erzeugte viel Dampf.',
          translation: 'The kettle on the stove produced a lot of steam.',
        },
        {
          sentence: 'Wenn man Wasser kocht, entsteht Dampf.',
          translation: 'When you boil water, steam is produced.',
        },
        {
          sentence: 'Dampf kann zur Energiegewinnung genutzt werden.',
          translation: 'Steam can be used to generate energy.',
        },
        {
          sentence: 'Die heiße Dusche ließ den Raum mit Dampf füllen.',
          translation: 'The hot shower filled the room with steam.',
        },
        {
          sentence:
            'Der Dampf aus der Kaffeemaschine verbreitete einen angenehmen Geruch.',
          translation:
            'The steam from the coffee machine spread a pleasant smell.',
        },
      ],
    },
    {
      word: 'Bewegung',
      desc: 'Motion; the action or process of moving or being moved.',
      examples: [
        {
          sentence: 'Die Bewegung der Wellen war beruhigend.',
          translation: 'The motion of the waves was soothing.',
        },
        {
          sentence:
            'Physikalische Gesetze beschreiben die Bewegung von Objekten.',
          translation: 'Physical laws describe the motion of objects.',
        },
        {
          sentence: 'Er führte die Bewegung sehr langsam und präzise aus.',
          translation: 'He performed the movement very slowly and precisely.',
        },
        {
          sentence: 'Bewegung ist wichtig für die Gesundheit.',
          translation: 'Movement is important for health.',
        },
        {
          sentence: 'Die Bewegung des Mondes um die Erde dauert etwa 27 Tage.',
          translation:
            "The moon's motion around the Earth takes about 27 days.",
        },
      ],
    },
    {
      word: 'Weg',
      desc: 'Path; a way or track laid down for walking or made by continual treading.',
      examples: [
        {
          sentence: 'Der Weg durch den Wald war dunkel und unheimlich.',
          translation: 'The path through the forest was dark and eerie.',
        },
        {
          sentence:
            'Wir müssen einen neuen Weg finden, um das Problem zu lösen.',
          translation: 'We need to find a new way to solve the problem.',
        },
        {
          sentence: 'Der kürzeste Weg zwischen zwei Punkten ist eine Gerade.',
          translation:
            'The shortest path between two points is a straight line.',
        },
        {
          sentence: 'Sie verloren auf dem Weg zum Gipfel die Orientierung.',
          translation: 'They lost their way to the summit.',
        },
        {
          sentence: 'Dieser Weg wird dich zu einem alten Leuchtturm führen.',
          translation: 'This path will lead you to an old lighthouse.',
        },
      ],
    },
    {
      word: 'Flüssigkeit',
      desc: 'Liquid; a substance that flows freely but is of constant volume, having a consistency like that of water or oil.',
      examples: [
        {
          sentence:
            'Wasser ist die am häufigsten vorkommende Flüssigkeit auf der Erde.',
          translation: 'Water is the most common liquid on Earth.',
        },
        {
          sentence: 'Die Flüssigkeit muss bei Raumtemperatur gelagert werden.',
          translation: 'The liquid must be stored at room temperature.',
        },
        {
          sentence: 'Er goss die grüne Flüssigkeit in das Becherglas.',
          translation: 'He poured the green liquid into the beaker.',
        },
        {
          sentence: 'Die Flüssigkeit begann zu brodeln, als sie erhitzt wurde.',
          translation: 'The liquid began to bubble when it was heated.',
        },
        {
          sentence: 'Bitte füllen Sie die Flüssigkeit bis zur Markierung.',
          translation: 'Please fill the liquid up to the mark.',
        },
      ],
    },
    {
      word: 'protokollieren',
      desc: 'To log; the act of recording events, transactions, or observations in a systematic manner.',
      examples: [
        {
          sentence:
            'Wir müssen jeden Schritt des Experiments genau protokollieren.',
          translation:
            'We need to log every step of the experiment accurately.',
        },
        {
          sentence: 'Der IT-Support muss alle Vorfälle protokollieren.',
          translation: 'The IT support must log all incidents.',
        },
        {
          sentence: 'Es ist wichtig, Änderungen am Code zu protokollieren.',
          translation: "It's important to log changes to the code.",
        },
        {
          sentence: 'Die Temperatur wurde stündlich protokolliert.',
          translation: 'The temperature was logged hourly.',
        },
        {
          sentence:
            'Die Sicherheitskamera protokolliert alle Bewegungen im Eingangsbereich.',
          translation:
            'The security camera logs all movements in the entrance area.',
        },
      ],
    },
    {
      word: 'gemeint',
      desc: 'Meant; intended or implied.',
      examples: [
        {
          sentence: 'Was hast du damit gemeint?',
          translation: 'What did you mean by that?',
        },
        {
          sentence: 'Das war nicht so gemeint.',
          translation: "It wasn't meant that way.",
        },
        {
          sentence: 'Er hat es gut gemeint.',
          translation: 'He meant well.',
        },
        {
          sentence: 'Was ist mit dieser Aussage gemeint?',
          translation: 'What is meant by this statement?',
        },
        {
          sentence:
            'Ich habe meine Worte sorgfältig gewählt, um genau das zu sagen, was ich gemeint habe.',
          translation:
            'I chose my words carefully to say exactly what I meant.',
        },
      ],
    },
    {
      word: 'Quotient',
      desc: 'Quotient; the result of dividing one quantity by another.',
      examples: [
        {
          sentence: 'Der Quotient aus 10 geteilt durch 2 ist 5.',
          translation: 'The quotient of 10 divided by 2 is 5.',
        },
        {
          sentence:
            'Um den Quotienten zu finden, müssen wir diese Zahl durch jene teilen.',
          translation:
            'To find the quotient, we need to divide this number by that one.',
        },
        {
          sentence:
            'Der Intelligenzquotient ist ein Maß für die intellektuelle Fähigkeit.',
          translation:
            'The intelligence quotient is a measure of intellectual ability.',
        },
        {
          sentence:
            'Die Berechnung des Quotienten ist ein grundlegendes mathematisches Verfahren.',
          translation:
            'Calculating the quotient is a fundamental mathematical operation.',
        },
        {
          sentence:
            'Beim Teilen von Brüchen muss man den Kehrwert des Divisors mit dem Dividenden multiplizieren, um den Quotienten zu erhalten.',
          translation:
            'When dividing fractions, one must multiply the reciprocal of the divisor with the dividend to get the quotient.',
        },
      ],
    },
    {
      word: 'Gebiss',
      desc: 'Teeth; the set of hard, bony enamel-coated structures in the jaws of most vertebrates, used for biting and chewing.',
      examples: [
        {
          sentence:
            'Ein gesundes Gebiss ist wichtig für die allgemeine Gesundheit.',
          translation: 'Healthy teeth are important for overall health.',
        },
        {
          sentence: 'Der Zahnarzt untersuchte ihr Gebiss sorgfältig.',
          translation: 'The dentist carefully examined her teeth.',
        },
        {
          sentence: 'Einige Tiere haben ein sehr starkes Gebiss.',
          translation: 'Some animals have very strong teeth.',
        },
        {
          sentence:
            'Regelmäßige Pflege kann die Lebensdauer Ihres Gebisses verlängern.',
          translation: 'Regular care can extend the life of your teeth.',
        },
        {
          sentence:
            'Das Gebiss des Haies besteht aus mehreren Reihen scharfer Zähne.',
          translation:
            "The shark's teeth consist of several rows of sharp teeth.",
        },
      ],
    },
    {
      word: 'Schale',
      desc: 'Shell; a hard, protective outer layer created by an animal that lives in it, or the outer covering of something.',
      examples: [
        {
          sentence: 'Die Schale der Muschel war wunderschön gemustert.',
          translation: 'The shell of the mussel was beautifully patterned.',
        },
        {
          sentence: 'Er sammelte am Strand verschiedene Schalen.',
          translation: 'He collected various shells on the beach.',
        },
        {
          sentence: 'Die Schale des Eies war sehr dünn und zerbrach leicht.',
          translation: 'The eggshell was very thin and broke easily.',
        },
        {
          sentence: 'In der Schale der Nuss befinden sich die Samen.',
          translation: "The seeds are located inside the nut's shell.",
        },
        {
          sentence: 'Sie benutzte eine Schale, um die Suppe zu servieren.',
          translation: 'She used a bowl to serve the soup.',
        },
      ],
    },
    {
      word: 'Hals',
      desc: "Neck; the part of a person's or animal's body connecting the head to the rest of the body.",
      examples: [
        {
          sentence: 'Sie trug eine Kette um ihren Hals.',
          translation: 'She wore a necklace around her neck.',
        },
        {
          sentence: 'Der Schal wärmte seinen Hals an kalten Tagen.',
          translation: 'The scarf kept his neck warm on cold days.',
        },
        {
          sentence: 'Der Schwan ist bekannt für seinen langen Hals.',
          translation: 'The swan is known for its long neck.',
        },
        {
          sentence:
            'Nach dem langen Tag vor dem Computer hatte er Schmerzen im Hals.',
          translation:
            'After a long day in front of the computer, he had a pain in his neck.',
        },
        {
          sentence: 'Ein starker Hals ist wichtig für viele Sportarten.',
          translation: 'A strong neck is important for many sports.',
        },
      ],
    },
  ],
};

const section9: Section = {
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

export default section9;
