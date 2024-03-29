import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Kind, acht, Dorf, treffen, Wurzel, kaufen, erhöhen, lösen, Metall, ob',
  words: [
    {
      word: 'Kind',
      desc: "Noun meaning 'child' or 'baby', a young human being below the age of puberty or below the legal age of majority.",
      examples: [
        {
          sentence: 'Das Kind spielte fröhlich im Garten.',
          translation: 'The child played happily in the garden.',
        },
        {
          sentence:
            'Sie hat ein neugeborenes Kind, das erst einen Monat alt ist.',
          translation: 'She has a newborn baby that is only one month old.',
        },
        {
          sentence: 'Das Kind lernte schnell, neue Wörter zu sprechen.',
          translation: 'The child quickly learned to speak new words.',
        },
        {
          sentence: 'Die Eltern kümmerten sich liebevoll um ihr Kind.',
          translation: 'The parents took loving care of their child.',
        },
        {
          sentence: 'Jedes Kind hat das Recht auf Bildung und Schutz.',
          translation: 'Every child has the right to education and protection.',
        },
      ],
    },
    {
      word: 'acht',
      desc: "Number meaning 'eight', the natural number following seven and preceding nine.",
      examples: [
        {
          sentence: 'Es sind acht Äpfel in der Schüssel.',
          translation: 'There are eight apples in the bowl.',
        },
        {
          sentence: 'Das Kind feiert seinen achten Geburtstag heute.',
          translation: 'The child is celebrating their eighth birthday today.',
        },
        {
          sentence: 'Die Vorstellung beginnt um acht Uhr abends.',
          translation:
            "The performance starts at eight o'clock in the evening.",
        },
        {
          sentence: 'Er brauchte acht Stunden, um das Buch zu lesen.',
          translation: 'He needed eight hours to read the book.',
        },
        {
          sentence:
            'Das Haus hat acht Zimmer, eins für jede Person in der Familie.',
          translation:
            'The house has eight rooms, one for each person in the family.',
        },
      ],
    },
    {
      word: 'Dorf',
      desc: "Noun meaning 'village', a small community or group of houses in a rural area, larger than a hamlet and usually smaller than a town.",
      examples: [
        {
          sentence: 'Das Dorf liegt malerisch zwischen den Hügeln.',
          translation: 'The village is nestled scenically among the hills.',
        },
        {
          sentence:
            'Im Dorf gibt es nur einen kleinen Laden, um Lebensmittel zu kaufen.',
          translation:
            'There is only a small shop in the village to buy groceries.',
        },
        {
          sentence: 'Die Bewohner des Dorfes kennen sich alle untereinander.',
          translation: 'The villagers all know each other.',
        },
        {
          sentence:
            'Das Dorf hat eine lange Geschichte, die bis ins Mittelalter zurückreicht.',
          translation:
            'The village has a long history dating back to the Middle Ages.',
        },
        {
          sentence:
            'Das Dorfleben ist oft ruhiger und langsamer als das Leben in der Stadt.',
          translation:
            'Village life is often quieter and slower than life in the city.',
        },
      ],
    },
    {
      word: 'treffen',
      desc: "Verb meaning 'meet', come together with (someone) intentionally or by chance.",
      examples: [
        {
          sentence:
            'Wir treffen uns heute Abend zum Abendessen in einem Restaurant.',
          translation: "We're meeting for dinner tonight at a restaurant.",
        },
        {
          sentence: 'Er traf seine alten Freunde nach vielen Jahren wieder.',
          translation: 'He met his old friends again after many years.',
        },
        {
          sentence:
            'Die beiden Geschäftspartner trafen sich, um über die Zukunft ihres Unternehmens zu sprechen.',
          translation:
            'The two business partners met to discuss the future of their company.',
        },
        {
          sentence: 'Sie traf zufällig ihren früheren Lehrer im Supermarkt.',
          translation:
            'She met her former teacher by chance at the supermarket.',
        },
        {
          sentence:
            'Die Entscheidung, sich zu treffen, wurde von beiden Seiten getroffen.',
          translation: 'The decision to meet was made by both sides.',
        },
      ],
    },
    {
      word: 'Wurzel',
      desc: "Noun meaning 'root', the part of a plant that attaches it to the ground or to a support, typically underground, conveying water and nourishment to the rest of the plant via numerous branches and fibers.",
      examples: [
        {
          sentence: 'Die Wurzeln des Baumes reichen tief in die Erde.',
          translation: "The tree's roots extend deep into the ground.",
        },
        {
          sentence:
            'Das Gemüse hat lange, fleischige Wurzeln, die tief wachsen.',
          translation: 'The vegetable has long, fleshy roots that grow deep.',
        },
        {
          sentence:
            'Die Pflanze wuchs schnell, sobald ihre Wurzeln im Boden verankert waren.',
          translation:
            'The plant grew quickly once its roots were anchored in the soil.',
        },
        {
          sentence:
            'Der Gärtner entfernte die Unkrautwurzeln, um Platz für die Blumen zu schaffen.',
          translation:
            'The gardener removed the weed roots to make space for the flowers.',
        },
        {
          sentence:
            'Die Wurzeln der Traditionen reichen weit zurück in die Vergangenheit.',
          translation: 'The roots of traditions extend far back into the past.',
        },
      ],
    },
    {
      word: 'kaufen',
      desc: "Verb meaning 'buy', obtain in exchange for payment.",
      examples: [
        {
          sentence: 'Sie kaufte ein neues Kleid für die Party.',
          translation: 'She bought a new dress for the party.',
        },
        {
          sentence: 'Ich muss noch Milch kaufen, bevor der Laden schließt.',
          translation: 'I need to buy milk before the store closes.',
        },
        {
          sentence: 'Er kaufte ein Ticket für das Konzert der Band.',
          translation: "He bought a ticket for the band's concert.",
        },
        {
          sentence: 'Die Familie kaufte ein Haus in der Nähe des Strandes.',
          translation: 'The family bought a house near the beach.',
        },
        {
          sentence: 'Sie kauften frisches Gemüse auf dem Markt.',
          translation: 'They bought fresh vegetables at the market.',
        },
      ],
    },
    {
      word: 'erhöhen',
      desc: "Verb meaning 'raise' or 'increase', make or become greater in amount, degree, or level.",
      examples: [
        {
          sentence:
            'Die Regierung erhöhte die Steuern, um mehr Einnahmen zu erzielen.',
          translation: 'The government raised taxes to generate more revenue.',
        },
        {
          sentence:
            'Die Eltern beschlossen, das Taschengeld ihrer Kinder zu erhöhen.',
          translation:
            "The parents decided to increase their children's pocket money.",
        },
        {
          sentence:
            'Der Manager erhöhte die Produktion, um die Nachfrage zu decken.',
          translation: 'The manager increased production to meet demand.',
        },
        {
          sentence:
            'Sie erhöhte ihre Fitness, indem sie regelmäßig Sport trieb.',
          translation: 'She improved her fitness by exercising regularly.',
        },
        {
          sentence:
            'Der Bericht zeigte, dass die Temperatur im Sommer um zwei Grad erhöht wurde.',
          translation:
            'The report indicated that the temperature had increased by two degrees in summer.',
        },
      ],
    },
    {
      word: 'lösen',
      desc: "Verb meaning 'solve' or 'resolve', find an answer to, explanation for, or means of effectively dealing with (a problem or mystery).",
      examples: [
        {
          sentence: 'Er konnte das Rätsel schnell lösen.',
          translation: 'He was able to solve the puzzle quickly.',
        },
        {
          sentence:
            'Der Wissenschaftler arbeitete hart daran, das Problem zu lösen.',
          translation: 'The scientist worked hard to solve the problem.',
        },
        {
          sentence:
            'Die Verhandlungsteams versuchten, den Konflikt friedlich zu lösen.',
          translation:
            'The negotiating teams tried to resolve the conflict peacefully.',
        },
        {
          sentence: 'Sie konnte das Matheproblem nicht lösen und bat um Hilfe.',
          translation:
            "She couldn't solve the math problem and asked for help.",
        },
        {
          sentence:
            'Es dauerte Stunden, bis sie das technische Problem gelöst hatten.',
          translation: 'It took hours for them to solve the technical problem.',
        },
      ],
    },
    {
      word: 'Metall',
      desc: "Noun meaning 'metal', a solid material that is typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity.",
      examples: [
        {
          sentence: 'Das Werkzeug war aus Metall und sehr langlebig.',
          translation: 'The tool was made of metal and very durable.',
        },
        {
          sentence: 'Die Statue wurde aus einem speziellen Metall gegossen.',
          translation: 'The statue was cast from a special metal.',
        },
        {
          sentence:
            'Metall ist ein wichtiger Bestandteil vieler industrieller Prozesse.',
          translation:
            'Metal is an important component in many industrial processes.',
        },
        {
          sentence: 'Das Gebäude hatte ein metallenes Dach.',
          translation: 'The building had a metal roof.',
        },
        {
          sentence: 'Er arbeitete in einer Fabrik, die Metallteile herstellte.',
          translation: 'He worked in a factory that produced metal parts.',
        },
      ],
    },
    {
      word: 'ob',
      desc: "Conjunction meaning 'whether', introducing a clause expressing a doubt or choice between alternatives.",
      examples: [
        {
          sentence: 'Ich weiß nicht, ob ich morgen kommen kann.',
          translation: "I don't know whether I can come tomorrow.",
        },
        {
          sentence:
            'Wir müssen entscheiden, ob wir den Film im Kino oder zu Hause sehen.',
          translation:
            'We have to decide whether to watch the movie at the cinema or at home.',
        },
        {
          sentence: 'Sie überlegte, ob sie den Job annehmen sollte oder nicht.',
          translation: 'She considered whether she should take the job or not.',
        },
        {
          sentence: 'Er fragte, ob sie Zeit für ein Treffen hatte.',
          translation: 'He asked whether she had time for a meeting.',
        },
        {
          sentence:
            'Wir müssen herausfinden, ob das Angebot für uns geeignet ist.',
          translation:
            'We need to find out whether the offer is suitable for us.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'drücken, sieben, Absatz, dritte, wird, Hand, Haar, beschreiben, Koch, Boden',
  words: [
    {
      word: 'drücken',
      desc: "Verb meaning 'push', exert force on (someone or something), typically with one's hand or foot.",
      examples: [
        {
          sentence:
            'Er drückte die Tür fest zu, damit sie nicht mehr offen stand.',
          translation:
            "He pushed the door tightly closed so that it wouldn't remain open.",
        },
        {
          sentence:
            'Der Arzt drückte leicht auf den Bauch, um zu prüfen, ob es schmerzhaft war.',
          translation:
            'The doctor pressed gently on the abdomen to check if it was painful.',
        },
        {
          sentence: 'Sie drückte das Baby sanft an ihre Brust.',
          translation: 'She gently pushed the baby against her chest.',
        },
        {
          sentence: 'Er drückte die Notfalltaste, um Hilfe herbeizurufen.',
          translation: 'He pressed the emergency button to call for help.',
        },
        {
          sentence:
            'Die Menge drückte gegen die Absperrung, um einen Blick auf die Parade zu erhaschen.',
          translation:
            'The crowd pushed against the barrier to catch a glimpse of the parade.',
        },
      ],
    },
    {
      word: 'sieben',
      desc: "Number representing 'seven', equivalent to the number 7.",
      examples: [
        {
          sentence: 'Sieben Tage sind eine Woche.',
          translation: 'Seven days make a week.',
        },
        {
          sentence: 'Die Uhr zeigte sieben Uhr morgens an.',
          translation: "The clock showed seven o'clock in the morning.",
        },
        {
          sentence: 'Er hatte sieben Äpfel im Korb.',
          translation: 'He had seven apples in the basket.',
        },
        {
          sentence:
            'Das Kind zählte bis sieben und konnte dann die Finger nicht mehr verwenden.',
          translation:
            "The child counted to seven and then couldn't use their fingers anymore.",
        },
        {
          sentence: 'Sieben Spieler standen auf dem Platz.',
          translation: 'Seven players were on the field.',
        },
      ],
    },
    {
      word: 'Absatz',
      desc: "Noun meaning 'paragraph', a distinct section of a piece of writing, usually dealing with a single theme and indicated by a new line, indentation, or numbering.",
      examples: [
        {
          sentence: 'Bitte lesen Sie den zweiten Absatz des Textes.',
          translation: 'Please read the second paragraph of the text.',
        },
        {
          sentence: 'Der Absatz enthält wichtige Informationen über das Thema.',
          translation:
            'The paragraph contains important information about the topic.',
        },
        {
          sentence:
            'Schreiben Sie einen kurzen Absatz über Ihre Lieblingshobbys.',
          translation: 'Write a short paragraph about your favorite hobbies.',
        },
        {
          sentence:
            'Der Absatz ist zu lang und sollte in zwei Abschnitte unterteilt werden.',
          translation:
            'The paragraph is too long and should be divided into two sections.',
        },
        {
          sentence:
            'Im letzten Absatz des Artikels wird eine Zusammenfassung der wichtigsten Punkte gegeben.',
          translation:
            'The last paragraph of the article provides a summary of the key points.',
        },
      ],
    },
    {
      word: 'dritte',
      desc: "Adjective meaning 'third', coming after the second in order.",
      examples: [
        {
          sentence:
            'Er war der dritte Kandidat, der für die Position interviewt wurde.',
          translation:
            'He was the third candidate to be interviewed for the position.',
        },
        {
          sentence: 'Das dritte Buch der Reihe war das beliebteste.',
          translation: 'The third book in the series was the most popular.',
        },
        {
          sentence: 'Sie wohnte im dritten Stock des Gebäudes.',
          translation: 'She lived on the third floor of the building.',
        },
        {
          sentence:
            'Der dritte Platz bei einem Wettkampf ist immer noch eine große Leistung.',
          translation:
            'Third place in a competition is still a great achievement.',
        },
        {
          sentence:
            'Im dritten Quartal des Jahres stiegen die Umsätze deutlich an.',
          translation:
            'Sales increased significantly in the third quarter of the year.',
        },
      ],
    },
    {
      word: 'wird',
      desc: "Conjugated form of the verb 'werden', used in the present tense for the third person singular (he, she, it).",
      examples: [
        {
          sentence: 'Das Kind wird bald sechs Jahre alt.',
          translation: 'The child will soon be six years old.',
        },
        {
          sentence: 'Der Kuchen wird im Ofen gebacken.',
          translation: 'The cake is being baked in the oven.',
        },
        {
          sentence: 'Er wird in der Schule gut betreut.',
          translation: 'He is well looked after at school.',
        },
        {
          sentence: 'Sie wird als Expertin auf ihrem Gebiet anerkannt.',
          translation: 'She is recognized as an expert in her field.',
        },
        {
          sentence: 'Der Hund wird von allen geliebt.',
          translation: 'The dog is loved by everyone.',
        },
      ],
    },
    {
      word: 'Hand',
      desc: "Noun meaning 'hand', the end part of a person's arm beyond the wrist, including the palm, fingers, and thumb.",
      examples: [
        {
          sentence:
            'Er legte seine Hand auf ihre Schulter, um sie zu beruhigen.',
          translation: 'He placed his hand on her shoulder to calm her down.',
        },
        {
          sentence:
            'Sie wusch sich gründlich die Hände, bevor sie das Essen zubereitete.',
          translation:
            'She washed her hands thoroughly before preparing the food.',
        },
        {
          sentence:
            'Die Kinder hielten sich an der Hand, während sie über die Straße gingen.',
          translation: 'The children held hands while crossing the street.',
        },
        {
          sentence: 'Er zeigte auf die Karte mit seiner Hand.',
          translation: 'He pointed at the map with his hand.',
        },
        {
          sentence: 'Sie schrieb einen Brief mit der Hand.',
          translation: 'She wrote a letter by hand.',
        },
      ],
    },
    {
      word: 'Haar',
      desc: "Noun meaning 'hair', any of the fine threadlike strands growing from the skin of humans, mammals, and some other animals.",
      examples: [
        {
          sentence: 'Sie hatte langes braunes Haar, das im Wind wehte.',
          translation: 'She had long brown hair blowing in the wind.',
        },
        {
          sentence: 'Er kämmte sein Haar, bevor er das Haus verließ.',
          translation: 'He combed his hair before leaving the house.',
        },
        {
          sentence: 'Die Katze hatte weiches, seidiges Fell.',
          translation: 'The cat had soft, silky hair.',
        },
        {
          sentence: 'Sie wusch sich die Haare jeden Morgen.',
          translation: 'She washed her hair every morning.',
        },
        {
          sentence: 'Er hatte nur noch wenige Haare auf seinem Kopf.',
          translation: 'He had only a few hairs left on his head.',
        },
      ],
    },
    {
      word: 'beschreiben',
      desc: "Verb meaning 'to describe', give a spoken or written account of someone or something that includes characteristics, qualities, or events.",
      examples: [
        {
          sentence: 'Kannst du mir bitte beschreiben, wie das Auto aussieht?',
          translation: 'Can you please describe to me what the car looks like?',
        },
        {
          sentence: 'Die Zeugin beschrieb den Täter als groß und schlank.',
          translation: 'The witness described the suspect as tall and slim.',
        },
        {
          sentence: 'Der Schriftsteller beschreibt die Szene sehr detailliert.',
          translation: 'The writer describes the scene in great detail.',
        },
        {
          sentence: 'Die Malerin beschrieb die Landschaft in kräftigen Farben.',
          translation: 'The painter described the landscape in vivid colors.',
        },
        {
          sentence: 'Kannst du mir beschreiben, wie du dich gefühlt hast?',
          translation: 'Can you describe to me how you felt?',
        },
      ],
    },
    {
      word: 'Koch',
      desc: "Noun meaning 'cook', a person who prepares and cooks food, especially as a job or a hobby.",
      examples: [
        {
          sentence: 'Der Koch bereitete ein köstliches Abendessen zu.',
          translation: 'The cook prepared a delicious dinner.',
        },
        {
          sentence:
            'Sie ist eine erfahrene Köchin und kann viele verschiedene Gerichte kochen.',
          translation:
            'She is an experienced cook and can cook many different dishes.',
        },
        {
          sentence: 'Der Koch arbeitet in einem bekannten Restaurant.',
          translation: 'The chef works in a well-known restaurant.',
        },
        {
          sentence:
            'Die Köchin hat ein neues Rezept ausprobiert und es war ein voller Erfolg.',
          translation:
            'The chef tried a new recipe, and it was a great success.',
        },
        {
          sentence: 'Der Koch verwendet frische Zutaten für seine Gerichte.',
          translation: 'The cook uses fresh ingredients for his dishes.',
        },
      ],
    },
    {
      word: 'Boden',
      desc: "Noun meaning 'floor', the lower surface of a room, on which one may walk.",
      examples: [
        {
          sentence: 'Bitte wischen Sie den Boden, er ist schmutzig.',
          translation: "Please mop the floor, it's dirty.",
        },
        {
          sentence: 'Der Boden im Wohnzimmer ist mit Teppich bedeckt.',
          translation: 'The floor in the living room is covered with carpet.',
        },
        {
          sentence: 'Die Kinder spielen auf dem Boden.',
          translation: 'The children are playing on the floor.',
        },
        {
          sentence: 'Er setzte sich auf den Boden und machte eine Pause.',
          translation: 'He sat down on the floor and took a break.',
        },
        {
          sentence: 'Der Boden in der Küche ist gefliest.',
          translation: 'The floor in the kitchen is tiled.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'entweder, Ergebnis, brennen, Hügel, sicher, Katze, Jahrhundert, betrachten, Typ, Gesetz',
  words: [
    {
      word: 'entweder',
      desc: "Adverb meaning 'either', used before the first of two (or occasionally more) alternatives that are being specified (the others being introduced by 'or').",
      examples: [
        {
          sentence:
            'Du kannst entweder Tee oder Kaffee haben, aber nicht beides.',
          translation: 'You can have either tea or coffee, but not both.',
        },
        {
          sentence:
            'Entweder gehen wir spazieren oder wir bleiben zu Hause und sehen fern.',
          translation: 'Either we go for a walk or we stay home and watch TV.',
        },
        {
          sentence: 'Entweder du hilfst mir jetzt oder ich schaffe es alleine.',
          translation: "Either you help me now or I'll manage it on my own.",
        },
        {
          sentence:
            'Entweder du gehst jetzt zur Arbeit oder du verlierst deinen Job.',
          translation: "Either you go to work now or you'll lose your job.",
        },
        {
          sentence:
            'Entweder sie entschuldigt sich oder die Freundschaft ist vorbei.',
          translation: 'Either she apologizes or the friendship is over.',
        },
      ],
    },
    {
      word: 'Ergebnis',
      desc: "Noun meaning 'result', a consequence, effect, or outcome of something.",
      examples: [
        {
          sentence:
            'Das Ergebnis der Prüfung wird nächste Woche bekannt gegeben.',
          translation: 'The result of the exam will be announced next week.',
        },
        {
          sentence: 'Das ist das Ergebnis unserer langen Bemühungen.',
          translation: "That's the result of our long efforts.",
        },
        {
          sentence: 'Das unerwartete Ergebnis überraschte alle Anwesenden.',
          translation: 'The unexpected result surprised all those present.',
        },
        {
          sentence: 'Das Ergebnis der Studie war sehr ermutigend.',
          translation: 'The result of the study was very encouraging.',
        },
        {
          sentence:
            'Das Ergebnis war eine deutliche Verbesserung der Situation.',
          translation:
            'The result was a significant improvement in the situation.',
        },
      ],
    },
    {
      word: 'brennen',
      desc: "Verb meaning 'burn', undergo combustion or be consumed in the process.",
      examples: [
        {
          sentence: 'Das Holz brennt langsam im Kamin.',
          translation: 'The wood burns slowly in the fireplace.',
        },
        {
          sentence: 'Die Kerze brannte die ganze Nacht.',
          translation: 'The candle burned all night.',
        },
        {
          sentence: 'Die Wälder brennen seit Tagen.',
          translation: 'The forests have been burning for days.',
        },
        {
          sentence: 'Das Papier fing Feuer und brannte schnell ab.',
          translation: 'The paper caught fire and burned quickly.',
        },
        {
          sentence: 'Er verbrannte sich die Hand an der heißen Pfanne.',
          translation: 'He burned his hand on the hot pan.',
        },
      ],
    },
    {
      word: 'Hügel',
      desc: "Noun meaning 'hill', a naturally raised area of land, not as high or craggy as a mountain.",
      examples: [
        {
          sentence:
            'Sie wanderten den Hügel hinauf, um die Aussicht zu genießen.',
          translation: 'They hiked up the hill to enjoy the view.',
        },
        {
          sentence: 'Der Hof lag auf einem kleinen Hügel.',
          translation: 'The farm was situated on a small hill.',
        },
        {
          sentence: 'Die Kinder rollten den steilen Hügel hinunter.',
          translation: 'The children rolled down the steep hill.',
        },
        {
          sentence: 'Der Hügel war mit wilden Blumen bedeckt.',
          translation: 'The hill was covered with wildflowers.',
        },
        {
          sentence:
            'Sie bauten ihr Haus auf einem Hügel, um eine bessere Aussicht zu haben.',
          translation:
            'They built their house on a hill to have a better view.',
        },
      ],
    },
    {
      word: 'sicher',
      desc: "Adjective meaning 'safe', protected from or not exposed to danger or risk.",
      examples: [
        {
          sentence: 'Die Kinder sind im Garten sicher und können spielen.',
          translation: 'The children are safe in the garden and can play.',
        },
        {
          sentence: 'Der Tresor bietet einen sicheren Ort für Wertsachen.',
          translation: 'The safe provides a secure place for valuables.',
        },
        {
          sentence:
            'Wir sollten sicherstellen, dass alle Passagiere angeschnallt sind.',
          translation:
            'We should make sure that all passengers are wearing seat belts.',
        },
        {
          sentence: 'Er fühlte sich sicher in seiner eigenen Wohnung.',
          translation: 'He felt safe in his own apartment.',
        },
        {
          sentence:
            'Es ist wichtig, ein sicheres Passwort für Ihr Konto zu wählen.',
          translation:
            "It's important to choose a secure password for your account.",
        },
      ],
    },
    {
      word: 'Katze',
      desc: "Noun meaning 'cat', a small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
      examples: [
        {
          sentence:
            'Die Katze schnurrte zufrieden, als sie gestreichelt wurde.',
          translation: 'The cat purred contentedly when it was stroked.',
        },
        {
          sentence: 'Unsere Katze jagt gerne Mäuse im Garten.',
          translation: 'Our cat likes to hunt mice in the garden.',
        },
        {
          sentence: 'Die Katze lag faul in der Sonne und schlief.',
          translation: 'The cat lay lazily in the sun and slept.',
        },
        {
          sentence: 'Er ließ die Katze heraus, damit sie herumlaufen konnte.',
          translation: 'He let the cat out so it could roam around.',
        },
        {
          sentence: 'Die Katze kuschelte sich auf den Schoß ihres Besitzers.',
          translation: "The cat snuggled up on its owner's lap.",
        },
      ],
    },
    {
      word: 'Jahrhundert',
      desc: "Noun meaning 'century', a period of 100 years, used in reference to dates from a particular century.",
      examples: [
        {
          sentence:
            'Das 20. Jahrhundert war von großen politischen Veränderungen geprägt.',
          translation:
            'The 20th century was marked by significant political changes.',
        },
        {
          sentence:
            'Vor mehreren Jahrhunderten gab es hier eine blühende Zivilisation.',
          translation:
            'Several centuries ago, there was a thriving civilization here.',
        },
        {
          sentence: 'Die Industrielle Revolution begann im 18. Jahrhundert.',
          translation: 'The Industrial Revolution began in the 18th century.',
        },
        {
          sentence: 'Diese Burg wurde im 12. Jahrhundert erbaut.',
          translation: 'This castle was built in the 12th century.',
        },
        {
          sentence:
            'Im Laufe des 19. Jahrhunderts erlebte die Stadt einen wirtschaftlichen Aufschwung.',
          translation:
            'Throughout the 19th century, the city experienced economic growth.',
        },
      ],
    },
    {
      word: 'betrachten',
      desc: "Verb meaning 'consider', look at attentively and thoughtfully.",
      examples: [
        {
          sentence:
            'Er betrachtete das Gemälde und versuchte, seine Bedeutung zu verstehen.',
          translation:
            'He considered the painting, trying to understand its meaning.',
        },
        {
          sentence: 'Sie betrachtete ihn einen Moment lang und lächelte dann.',
          translation: 'She looked at him for a moment and then smiled.',
        },
        {
          sentence:
            'Wir sollten die Situation aus verschiedenen Blickwinkeln betrachten.',
          translation:
            'We should consider the situation from different perspectives.',
        },
        {
          sentence:
            'Betrachten Sie die Möglichkeiten sorgfältig, bevor Sie eine Entscheidung treffen.',
          translation:
            'Consider the options carefully before making a decision.',
        },
        {
          sentence: 'Er betrachtete die Landschaft und fühlte sich friedlich.',
          translation: 'He looked at the landscape and felt peaceful.',
        },
      ],
    },
    {
      word: 'Typ',
      desc: "Noun meaning 'type', a category of people or things having common characteristics.",
      examples: [
        {
          sentence: 'Welchen Typ von Auto möchten Sie kaufen?',
          translation: 'What type of car would you like to buy?',
        },
        {
          sentence: 'Diese Software unterstützt verschiedene Dateitypen.',
          translation: 'This software supports various file types.',
        },
        {
          sentence: 'Es gibt verschiedene Typen von Fischen in diesem See.',
          translation: 'There are different types of fish in this lake.',
        },
        {
          sentence: 'Welchen Typ von Film bevorzugst du: Action oder Komödie?',
          translation: 'What type of movie do you prefer: action or comedy?',
        },
        {
          sentence: 'Er ist nicht der Typ, der gerne im Mittelpunkt steht.',
          translation: "He's not the type who likes to be in the spotlight.",
        },
      ],
    },
    {
      word: 'Gesetz',
      desc: "Noun meaning 'law', the system of rules recognized and enforced by a community or society.",
      examples: [
        {
          sentence: 'Es ist wichtig, sich an die Gesetze des Landes zu halten.',
          translation: "It's important to obey the laws of the country.",
        },
        {
          sentence:
            'Das Gesetz verbietet Diskriminierung aufgrund von Geschlecht, Rasse oder Religion.',
          translation:
            'The law prohibits discrimination based on gender, race, or religion.',
        },
        {
          sentence:
            'Ein neues Gesetz wurde verabschiedet, um die Umwelt zu schützen.',
          translation: 'A new law was passed to protect the environment.',
        },
        {
          sentence:
            'Jeder Bürger ist dazu verpflichtet, die Gesetze zu respektieren.',
          translation: 'Every citizen is obligated to respect the laws.',
        },
        {
          sentence:
            'Es gibt strenge Gesetze gegen den Handel mit gestohlenen Gütern.',
          translation:
            'There are strict laws against trafficking stolen goods.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Bit, Küste, Kopie, Ausdruck, still, hoch, Sand, Boden, Rolle, Temperatur',
  words: [
    {
      word: 'Bit',
      desc: 'A binary digit, the smallest unit of data in a computer.',
      examples: [
        {
          sentence: 'Ein Byte besteht aus 8 Bits.',
          translation: 'A byte consists of 8 bits.',
        },
        {
          sentence:
            'Die Übertragungsgeschwindigkeit wird in Bits pro Sekunde gemessen.',
          translation: 'Transmission speed is measured in bits per second.',
        },
        {
          sentence: 'Ein Bit kann entweder den Wert 0 oder 1 haben.',
          translation: 'A bit can have the value of either 0 or 1.',
        },
        {
          sentence:
            'Computer verwenden Binärzahlen, die aus einer Folge von Bits bestehen.',
          translation:
            'Computers use binary numbers composed of a sequence of bits.',
        },
        {
          sentence:
            'Die Größe des Arbeitsspeichers wird in Gigabytes oder Megabytes angegeben, wobei ein Gigabyte 8 Milliarden Bits entspricht.',
          translation:
            'The size of RAM is specified in gigabytes or megabytes, with one gigabyte equaling 8 billion bits.',
        },
      ],
    },
    {
      word: 'Küste',
      desc: 'The land beside the sea; the edge of the land.',
      examples: [
        {
          sentence: 'Wir verbrachten unseren Urlaub an der Küste.',
          translation: 'We spent our vacation on the coast.',
        },
        {
          sentence: 'Die Küste ist ein beliebtes Ziel für Touristen.',
          translation: 'The coast is a popular destination for tourists.',
        },
        {
          sentence:
            'Der Leuchtturm markiert die Stelle, an der die Küste beginnt.',
          translation: 'The lighthouse marks the point where the coast begins.',
        },
        {
          sentence: 'Sie wohnt in einem kleinen Fischerdorf an der Küste.',
          translation: 'She lives in a small fishing village on the coast.',
        },
        {
          sentence:
            'Wir machten einen Spaziergang entlang der Küste und genossen die Aussicht auf das Meer.',
          translation:
            'We took a walk along the coast and enjoyed the view of the sea.',
        },
      ],
    },
    {
      word: 'Kopie',
      desc: 'An imitation or reproduction of an original; a duplicate.',
      examples: [
        {
          sentence: 'Kannst du mir eine Kopie dieses Berichts schicken?',
          translation: 'Can you send me a copy of this report?',
        },
        {
          sentence: 'Bitte machen Sie eine Kopie Ihres Personalausweises.',
          translation: 'Please make a copy of your ID card.',
        },
        {
          sentence:
            'Ich habe eine digitale Kopie des Buches auf meinem Computer.',
          translation: 'I have a digital copy of the book on my computer.',
        },
        {
          sentence: 'Sie können eine Kopie des Vertrags anfordern.',
          translation: 'You can request a copy of the contract.',
        },
        {
          sentence:
            'Die Unterschrift auf dem Dokument muss eine echte Unterschrift sein, keine Kopie.',
          translation:
            'The signature on the document must be a real signature, not a copy.',
        },
      ],
    },
    {
      word: 'Ausdruck',
      desc: 'A word or phrase, especially one used in a particular context or by a particular person.',
      examples: [
        {
          sentence: 'Er verwendete einen unpassenden Ausdruck in seiner Rede.',
          translation: 'He used an inappropriate expression in his speech.',
        },
        {
          sentence: 'Dieser Ausdruck wird oft in der Umgangssprache verwendet.',
          translation:
            'This expression is commonly used in colloquial language.',
        },
        {
          sentence:
            'Sie hatte einen seltsamen Ausdruck im Gesicht, als sie die Nachricht hörte.',
          translation:
            'She had a strange expression on her face when she heard the news.',
        },
        {
          sentence: 'Ich verstehe nicht, was dieser Ausdruck bedeutet.',
          translation: "I don't understand what this expression means.",
        },
        {
          sentence:
            "Kannst du mir den Ausdruck 'auf Wolke sieben sein' erklären?",
          translation:
            "Can you explain to me the expression 'to be on cloud nine'?",
        },
      ],
    },
    {
      word: 'still',
      desc: "Adjective meaning 'silent' or 'not making any noise'.",
      examples: [
        {
          sentence:
            'Der Wald war so still, dass man das Rauschen des Baches hören konnte.',
          translation:
            'The forest was so still that you could hear the sound of the stream.',
        },
        {
          sentence: 'Nach dem Gewitter wurde es still und friedlich.',
          translation: 'After the thunderstorm, it became still and peaceful.',
        },
        {
          sentence: 'Sie saßen eine Weile still und genossen die Aussicht.',
          translation: 'They sat still for a while, enjoying the view.',
        },
        {
          sentence: 'Das Baby war endlich still und schlief fest ein.',
          translation: 'The baby finally became still and fell fast asleep.',
        },
        {
          sentence: 'Er blieb still und hörte aufmerksam zu.',
          translation: 'He remained still and listened attentively.',
        },
      ],
    },
    {
      word: 'hoch',
      desc: 'tall; having a great distance from bottom to top',
      examples: [
        {
          sentence:
            'Der Turm war so hoch, dass er den Himmel zu berühren schien.',
          translation: 'The tower was so tall that it seemed to touch the sky.',
        },
        {
          sentence:
            'Die Berge im Hintergrund waren mit Schnee bedeckt und ragten hoch in den Himmel.',
          translation:
            'The mountains in the background were covered with snow and rose high into the sky.',
        },
        {
          sentence:
            'Der Baum war so hoch, dass man ihn aus der Ferne sehen konnte.',
          translation:
            'The tree was so tall that you could see it from a distance.',
        },
        {
          sentence:
            'Der Hochhauskomplex war ein beeindruckendes Beispiel für modernes Design.',
          translation:
            'The high-rise complex was an impressive example of modern design.',
        },
        {
          sentence:
            'Die Brücke führte über einen tiefen Fluss und ragte hoch über das Wasser.',
          translation:
            'The bridge spanned a deep river and towered high above the water.',
        },
      ],
    },
    {
      word: 'Sand',
      desc: 'loose granular substance, typically pale yellowish brown, resulting from the erosion of siliceous and other rocks and forming a major constituent of beaches, riverbeds, the seabed, and deserts.',
      examples: [
        {
          sentence: 'Der Strand war mit feinem Sand bedeckt.',
          translation: 'The beach was covered with fine sand.',
        },
        {
          sentence: 'Die Kinder bauten Sandburgen am Strand.',
          translation: 'The children built sandcastles on the beach.',
        },
        {
          sentence: 'Die Wüste erstreckte sich endlos mit Sanddünen.',
          translation: 'The desert stretched endlessly with sand dunes.',
        },
        {
          sentence: 'Der Sand war heiß unter den nackten Füßen der Wanderer.',
          translation: 'The sand was hot beneath the bare feet of the hikers.',
        },
        {
          sentence: 'Der Wind trug den Sand über die weite Ebene.',
          translation: 'The wind carried the sand across the vast plain.',
        },
      ],
    },
    {
      word: 'Boden',
      desc: 'the solid surface of the earth',
      examples: [
        {
          sentence: 'Sie gruben ein Loch im Boden, um eine Pflanze zu setzen.',
          translation: 'They dug a hole in the ground to plant a seedling.',
        },
        {
          sentence:
            'Die Kinder spielten im Sandkasten auf dem Boden des Gartens.',
          translation:
            'The children played in the sandbox on the ground of the garden.',
        },
        {
          sentence: 'Der Boden war mit Blättern und Zweigen bedeckt.',
          translation: 'The ground was covered with leaves and twigs.',
        },
        {
          sentence: 'Das Eichhörnchen verschwand im Boden des Waldes.',
          translation:
            'The squirrel disappeared into the ground of the forest.',
        },
        {
          sentence: 'Die Blumen blühten auf dem fruchtbaren Boden des Tals.',
          translation:
            'The flowers bloomed on the fertile ground of the valley.',
        },
      ],
    },
    {
      word: 'Rolle',
      desc: 'a cylinder or cylindrical object or part that rotates on an axis.',
      examples: [
        {
          sentence:
            'Sie drückte die Rolle des Druckers, um das Papier einzuziehen.',
          translation:
            'She pressed the roller of the printer to feed in the paper.',
        },
        {
          sentence: 'Die Rolle des Rades rutschte auf dem Boden.',
          translation: "The wheel's roller slipped on the ground.",
        },
        {
          sentence:
            'Die Maschine drehte sich um ihre Rolle und druckte das Bild.',
          translation:
            'The machine rotated around its roller and printed the image.',
        },
        {
          sentence: 'Er nahm eine Rolle Papier von der Rolle ab.',
          translation: 'He took a roll of paper off the roller.',
        },
        {
          sentence:
            'Die Rolle des Schauspielers in dem Film war entscheidend für die Handlung.',
          translation: "The actor's role in the movie was crucial to the plot.",
        },
      ],
    },
    {
      word: 'Temperatur',
      desc: 'a measure of the warmth or coldness of an object or substance with reference to some standard value.',
      examples: [
        {
          sentence:
            'Die Temperatur stieg während des Tages auf über 30 Grad Celsius.',
          translation:
            'The temperature rose to over 30 degrees Celsius during the day.',
        },
        {
          sentence:
            'Die Temperatur in der Wüste kann extrem sein, besonders tagsüber.',
          translation:
            'The temperature in the desert can be extreme, especially during the day.',
        },
        {
          sentence:
            'Das Thermometer zeigte eine Temperatur von minus zehn Grad Celsius an.',
          translation:
            'The thermometer indicated a temperature of minus ten degrees Celsius.',
        },
        {
          sentence: 'Die Lufttemperatur war angenehm kühl am frühen Morgen.',
          translation:
            'The air temperature was pleasantly cool in the early morning.',
        },
        {
          sentence: 'Die Temperatur beeinflusst das Wachstum der Pflanzen.',
          translation: 'Temperature affects the growth of plants.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Finger, Industrie, Wert, Kampf, Lüge, schlagen, begeistern, natürlich, Blick, Sinn',
  words: [
    {
      word: 'Finger',
      desc: 'One of the five digits on the hand, especially one other than the thumb.',
      examples: [
        {
          sentence:
            'Sie zeigte auf den Bildschirm und berührte ihn mit ihrem Finger.',
          translation:
            'She pointed at the screen and touched it with her finger.',
        },
        {
          sentence: 'Er verletzte seinen Finger, als er die Tür zuschlug.',
          translation: 'He injured his finger when he slammed the door.',
        },
        {
          sentence: 'Sie zählte die Finger an ihrer Hand.',
          translation: 'She counted the fingers on her hand.',
        },
        {
          sentence: 'Der Ring passte perfekt um ihren Finger.',
          translation: 'The ring fit perfectly around her finger.',
        },
        {
          sentence:
            'Der Künstler malte mit seinen Fingern statt mit einem Pinsel.',
          translation:
            'The artist painted with his fingers instead of a brush.',
        },
      ],
    },
    {
      word: 'Industrie',
      desc: 'The production of goods or related services within an economy.',
      examples: [
        {
          sentence:
            'Die Automobilindustrie ist ein wichtiger Wirtschaftszweig.',
          translation:
            'The automotive industry is an important sector of the economy.',
        },
        {
          sentence:
            'Die Textilindustrie hat sich im Laufe der Jahre stark verändert.',
          translation:
            'The textile industry has undergone significant changes over the years.',
        },
        {
          sentence: 'Die Filmindustrie von Hollywood ist weltweit bekannt.',
          translation: 'The Hollywood film industry is globally recognized.',
        },
        {
          sentence: 'Die Pharmaindustrie entwickelt ständig neue Medikamente.',
          translation:
            'The pharmaceutical industry is constantly developing new drugs.',
        },
        {
          sentence:
            'Die Industrie spielt eine Schlüsselrolle in der Wirtschaft eines Landes.',
          translation: "The industry plays a key role in a country's economy.",
        },
      ],
    },
    {
      word: 'Wert',
      desc: 'The importance, worth, or usefulness of something.',
      examples: [
        {
          sentence: 'Die Kunst hat einen hohen kulturellen Wert.',
          translation: 'Art has a high cultural value.',
        },
        {
          sentence: 'Der Wert einer Sache liegt oft im Auge des Betrachters.',
          translation:
            'The value of something is often in the eye of the beholder.',
        },
        {
          sentence:
            'Die Antiquität hat einen sentimentalen Wert für die Familie.',
          translation: 'The antique has sentimental value for the family.',
        },
        {
          sentence:
            'Er schätzte den Wert der Immobilie auf mehrere Millionen Dollar.',
          translation:
            'He estimated the value of the property at several million dollars.',
        },
        {
          sentence: 'Die Freundschaft hat einen unschätzbaren Wert.',
          translation: 'Friendship has an invaluable value.',
        },
      ],
    },
    {
      word: 'Kampf',
      desc: 'A physical or verbal confrontation intended to establish dominance or resolve a disagreement.',
      examples: [
        {
          sentence:
            'Der Kampf zwischen den beiden rivalisierenden Gruppen eskalierte schnell.',
          translation:
            'The fight between the two rival groups escalated quickly.',
        },
        {
          sentence:
            'Sie führten einen erbitterten Kampf um die Vorherrschaft in der Branche.',
          translation:
            'They waged a fierce battle for dominance in the industry.',
        },
        {
          sentence: 'Der politische Kampf um die Macht dauerte Monate.',
          translation: 'The political struggle for power lasted for months.',
        },
        {
          sentence:
            'Der innere Kampf mit seinen Dämonen war schwer zu überwinden.',
          translation:
            'The inner struggle with his demons was difficult to overcome.',
        },
        {
          sentence: 'Der Kampf für Gerechtigkeit ist nie umsonst.',
          translation: 'The fight for justice is never in vain.',
        },
      ],
    },
    {
      word: 'Lüge',
      desc: 'A false statement made with intent to deceive.',
      examples: [
        {
          sentence: 'Er konnte die Lüge in ihren Augen erkennen.',
          translation: 'He could see the lie in her eyes.',
        },
        {
          sentence: 'Eine kleine Lüge kann große Auswirkungen haben.',
          translation: 'A little lie can have big consequences.',
        },
        {
          sentence: 'Die Lüge wurde bald entlarvt.',
          translation: 'The lie was soon exposed.',
        },
        {
          sentence: 'Er bedauerte zutiefst, die Lüge erzählt zu haben.',
          translation: 'He deeply regretted telling the lie.',
        },
        {
          sentence:
            'Die Wahrheit kommt immer ans Licht, selbst nach einer Lüge.',
          translation: 'The truth always comes out, even after a lie.',
        },
      ],
    },
    {
      word: 'schlagen',
      desc: 'To hit with force, typically with a hand or tool.',
      examples: [
        {
          sentence: 'Er schlug die Tür aus Versehen zu fest zu.',
          translation: 'He accidentally slammed the door too hard.',
        },
        {
          sentence: 'Sie schlug ihm sanft auf den Rücken, um ihn zu trösten.',
          translation: 'She gently patted his back to comfort him.',
        },
        {
          sentence: 'Der Sturm schlug die Wellen gegen das Ufer.',
          translation: 'The storm beat the waves against the shore.',
        },
        {
          sentence: 'Er schlug den Ball hart über das Netz.',
          translation: 'He hit the ball hard over the net.',
        },
        {
          sentence: 'Der Schlag des Uhrzeigers markierte die volle Stunde.',
          translation: 'The stroke of the clock marked the full hour.',
        },
      ],
    },
    {
      word: 'begeistern',
      desc: 'To fill someone with great excitement or enthusiasm.',
      examples: [
        {
          sentence: 'Seine Rede begeisterte die Zuhörer.',
          translation: 'His speech excited the audience.',
        },
        {
          sentence: 'Das Konzert hat das Publikum wirklich begeistert.',
          translation: 'The concert really thrilled the audience.',
        },
        {
          sentence: 'Die Idee, ins Ausland zu reisen, begeisterte sie sehr.',
          translation: 'The idea of traveling abroad excited her greatly.',
        },
        {
          sentence:
            'Die Neuigkeiten begeisterten sie so sehr, dass sie vor Freude weinte.',
          translation: 'The news excited her so much that she cried with joy.',
        },
        {
          sentence:
            'Sein Enthusiasmus für das Thema begeisterte auch die anderen.',
          translation: 'His enthusiasm for the subject excited the others too.',
        },
      ],
    },
    {
      word: 'natürlich',
      desc: 'Existing in or caused by nature; not made or caused by humankind.',
      examples: [
        {
          sentence: 'Der Wald ist ein natürlicher Lebensraum für viele Tiere.',
          translation: 'The forest is a natural habitat for many animals.',
        },
        {
          sentence:
            'Es ist natürlich, sich in der Nähe von Wasser wohl zu fühlen.',
          translation: "It's natural to feel comfortable near water.",
        },
        {
          sentence: 'Die Blumen blühen natürlich im Frühling.',
          translation: 'The flowers naturally bloom in spring.',
        },
        {
          sentence:
            'Kinder haben einen natürlichen Drang, die Welt zu erkunden.',
          translation: 'Children have a natural urge to explore the world.',
        },
        {
          sentence: 'Es ist ganz natürlich, sich manchmal traurig zu fühlen.',
          translation: "It's perfectly natural to feel sad sometimes.",
        },
      ],
    },
    {
      word: 'Blick',
      desc: 'A facial expression showing emotion or attitude.',
      examples: [
        {
          sentence: 'Sein Blick verriet seine Verwirrung.',
          translation: 'His expression betrayed his confusion.',
        },
        {
          sentence: 'Ihr Blick zeigte deutlich ihre Begeisterung.',
          translation: 'Her expression clearly showed her excitement.',
        },
        {
          sentence: 'Ein trauriger Blick lag in ihren Augen.',
          translation: 'A sad expression lay in her eyes.',
        },
        {
          sentence: 'Sein Blick veränderte sich, als er die Nachricht hörte.',
          translation: 'His expression changed when he heard the news.',
        },
        {
          sentence:
            'Der Blick auf ihr Gesicht verriet, dass sie gelogen hatte.',
          translation: 'The look on her face revealed that she had lied.',
        },
      ],
    },
    {
      word: 'Sinn',
      desc: 'The faculty of perception or apprehension through the senses or intellect.',
      examples: [
        {
          sentence:
            'Der Geruchssinn ermöglicht es uns, verschiedene Düfte wahrzunehmen.',
          translation:
            'The sense of smell allows us to perceive different scents.',
        },
        {
          sentence:
            'Der Sinn für Humor ist wichtig, um das Leben leichter zu nehmen.',
          translation:
            'A sense of humor is important to take life less seriously.',
        },
        {
          sentence:
            'Das Gehör spielt eine entscheidende Rolle in unserem Sinn für Musik.',
          translation: 'Hearing plays a crucial role in our sense of music.',
        },
        {
          sentence:
            'Der sechste Sinn bezieht sich oft auf intuitive oder paranormale Fähigkeiten.',
          translation:
            'The sixth sense often refers to intuitive or paranormal abilities.',
        },
        {
          sentence: 'Die Sinne helfen uns, die Welt um uns herum zu verstehen.',
          translation: 'The senses help us understand the world around us.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Hauptstadt, wird nicht, Stuhl, Achtung, Obst, reich, dick, Soldat, Prozess, betreiben',
  words: [
    {
      word: 'Hauptstadt',
      desc: 'The most important city or town of a country or region, usually its seat of government and administrative center.',
      examples: [
        {
          sentence: 'Berlin ist die Hauptstadt von Deutschland.',
          translation: 'Berlin is the capital of Germany.',
        },
        {
          sentence: 'Paris ist die Hauptstadt von Frankreich.',
          translation: 'Paris is the capital of France.',
        },
        {
          sentence:
            'Die Hauptstadt hat eine reiche Geschichte und viele Sehenswürdigkeiten.',
          translation: 'The capital has a rich history and many attractions.',
        },
        {
          sentence:
            'Die Hauptstadt ist das politische und wirtschaftliche Zentrum des Landes.',
          translation:
            'The capital is the political and economic center of the country.',
        },
        {
          sentence:
            'Die Hauptstadt ist bekannt für ihre kulturelle Vielfalt und ihre pulsierende Atmosphäre.',
          translation:
            'The capital is known for its cultural diversity and vibrant atmosphere.',
        },
      ],
    },
    {
      word: 'wird nicht',
      desc: "Contraction of 'will not'; expressing the future tense negation.",
      examples: [
        {
          sentence: 'Ich werde nicht zu der Party gehen.',
          translation: "I won't go to the party.",
        },
        {
          sentence: 'Die Sonne wird nicht scheinen, wenn es regnet.',
          translation: "The sun won't shine when it's raining.",
        },
        {
          sentence: 'Er wird nicht kommen, wenn er sich nicht besser fühlt.',
          translation: "He won't come if he doesn't feel better.",
        },
        {
          sentence: 'Wir werden nicht gewinnen, wenn wir nicht hart arbeiten.',
          translation: "We won't win if we don't work hard.",
        },
        {
          sentence:
            'Das Essen wird nicht schmecken, wenn es nicht richtig gewürzt ist.',
          translation:
            "The food won't taste good if it's not properly seasoned.",
        },
      ],
    },
    {
      word: 'Stuhl',
      desc: 'A piece of furniture designed for sitting on, typically with a back and four legs.',
      examples: [
        {
          sentence: 'Bitte nehmen Sie auf dem Stuhl Platz.',
          translation: 'Please take a seat on the chair.',
        },
        {
          sentence: 'Der Stuhl ist aus massivem Holz gefertigt.',
          translation: 'The chair is made of solid wood.',
        },
        {
          sentence: 'Der Stuhl ist zu niedrig für den Tisch.',
          translation: 'The chair is too low for the table.',
        },
        {
          sentence: 'Der Stuhl hat eine bequeme Polsterung.',
          translation: 'The chair has comfortable padding.',
        },
        {
          sentence: 'Der Stuhl ist neben dem Schreibtisch.',
          translation: 'The chair is next to the desk.',
        },
      ],
    },
    {
      word: 'Achtung',
      desc: 'Attention or awareness of a particular person or thing.',
      examples: [
        {
          sentence: 'Achtung! Bitte nicht berühren.',
          translation: 'Attention! Please do not touch.',
        },
        {
          sentence: 'Die Achtung vor dem Eigentum anderer ist wichtig.',
          translation: "Respect for other people's property is important.",
        },
        {
          sentence: 'Er hat wenig Achtung vor den Gefühlen anderer.',
          translation: 'He has little respect for the feelings of others.',
        },
        {
          sentence: 'Die Achtung vor der Natur sollte gefördert werden.',
          translation: 'Respect for nature should be encouraged.',
        },
        {
          sentence:
            'Das Gebäude erfordert besondere Achtung aufgrund seiner historischen Bedeutung.',
          translation:
            'The building requires special attention due to its historical significance.',
        },
      ],
    },
    {
      word: 'Obst',
      desc: 'Fruits collectively, especially those grown for human consumption.',
      examples: [
        {
          sentence: 'Er isst gerne frisches Obst zum Frühstück.',
          translation: 'He likes to eat fresh fruit for breakfast.',
        },
        {
          sentence: 'Das Obst auf dem Markt sieht sehr frisch aus.',
          translation: 'The fruit at the market looks very fresh.',
        },
        {
          sentence: 'Sie hat eine Schüssel mit Obst auf den Tisch gestellt.',
          translation: 'She put a bowl of fruit on the table.',
        },
        {
          sentence: 'Die Kinder essen gerne süßes Obst als Snack.',
          translation: 'The children like to eat sweet fruit as a snack.',
        },
        {
          sentence: 'Der Obstsalat ist eine gesunde und leckere Option.',
          translation: 'Fruit salad is a healthy and delicious option.',
        },
      ],
    },
    {
      word: 'reich',
      desc: 'Having a great deal of money, resources, or assets; wealthy.',
      examples: [
        {
          sentence: 'Er ist ein reicher Geschäftsmann.',
          translation: 'He is a wealthy businessman.',
        },
        {
          sentence: 'Das Land ist reich an natürlichen Ressourcen.',
          translation: 'The country is rich in natural resources.',
        },
        {
          sentence: 'Sie führen ein reiches und luxuriöses Leben.',
          translation: 'They lead a rich and luxurious life.',
        },
        {
          sentence:
            'Der Künstler hinterließ ein reiches Erbe an Meisterwerken.',
          translation: 'The artist left a rich legacy of masterpieces.',
        },
        {
          sentence: 'Die Geschichte des Landes ist reich an kulturellem Erbe.',
          translation: "The country's history is rich in cultural heritage.",
        },
      ],
    },
    {
      word: 'dick',
      desc: 'Having a large distance between opposite sides; not thin.',
      examples: [
        {
          sentence: 'Die Wand ist sehr dick und isoliert gut gegen Lärm.',
          translation:
            'The wall is very thick and provides good insulation against noise.',
        },
        {
          sentence: 'Der Baumstamm ist dick und robust.',
          translation: 'The tree trunk is thick and sturdy.',
        },
        {
          sentence: 'Die Schichten des Kuchens sind dick mit Sahne bedeckt.',
          translation: 'The layers of the cake are thickly covered with cream.',
        },
        {
          sentence: 'Seine Brille hat dicke Gläser.',
          translation: 'His glasses have thick lenses.',
        },
        {
          sentence: 'Das Buch hat einen dickes Hardcover.',
          translation: 'The book has a thick hardcover.',
        },
      ],
    },
    {
      word: 'Soldat',
      desc: 'A person who serves in an army; a member of an armed force.',
      examples: [
        {
          sentence: 'Der Soldat steht an der Grenze und bewacht das Land.',
          translation:
            'The soldier stands at the border and guards the country.',
        },
        {
          sentence: 'Der Soldat kämpfte tapfer für sein Land.',
          translation: 'The soldier fought bravely for his country.',
        },
        {
          sentence: 'Die Soldaten marschierten in Reih und Glied.',
          translation: 'The soldiers marched in formation.',
        },
        {
          sentence: 'Der Soldat salutierte vor seinem Kommandanten.',
          translation: 'The soldier saluted in front of his commander.',
        },
        {
          sentence: 'Die Soldaten kehrten siegreich aus dem Krieg zurück.',
          translation: 'The soldiers returned victorious from the war.',
        },
      ],
    },
    {
      word: 'Prozess',
      desc: 'A series of actions or steps taken in order to achieve a particular end.',
      examples: [
        {
          sentence:
            'Die Entwicklung eines Produkts durchläuft mehrere Phasen im Prozess.',
          translation:
            'The development of a product goes through several phases in the process.',
        },
        {
          sentence: 'Der rechtliche Prozess kann langwierig und komplex sein.',
          translation: 'The legal process can be lengthy and complex.',
        },
        {
          sentence:
            'Der Prozess der Entscheidungsfindung erfordert sorgfältige Überlegungen.',
          translation:
            'The process of decision making requires careful consideration.',
        },
        {
          sentence:
            'Sie müssen den gesamten Prozess verstehen, um erfolgreich zu sein.',
          translation:
            'You need to understand the whole process in order to be successful.',
        },
        {
          sentence: 'Der Prozess der Heilung erfordert Geduld und Zeit.',
          translation: 'The process of healing requires patience and time.',
        },
      ],
    },
    {
      word: 'betreiben',
      desc: 'To operate or control a machine, activity, or system.',
      examples: [
        {
          sentence:
            'Er betreibt eine kleine Bäckerei in der Nähe seines Hauses.',
          translation: 'He operates a small bakery near his house.',
        },
        {
          sentence:
            'Das Unternehmen betreibt mehrere Fabriken auf der ganzen Welt.',
          translation:
            'The company operates several factories around the world.',
        },
        {
          sentence: 'Sie betreiben eine effiziente Recyclinganlage.',
          translation: 'They run an efficient recycling plant.',
        },
        {
          sentence:
            'Die Regierung muss Maßnahmen ergreifen, um Korruption zu bekämpfen.',
          translation:
            'The government needs to take measures to combat corruption.',
        },
        {
          sentence: 'Der Bauernhof wird von einer Familie betrieben.',
          translation: 'The farm is operated by a family.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Praxis, trennen, schwierig, Arzt, Bitte, schützen, Mittag, Ernte, modernen, Elementes',
  words: [
    {
      word: 'Praxis',
      desc: 'The practical application or use of a knowledge or belief.',
      examples: [
        {
          sentence:
            'Er lernte die Theorie, aber er hat keine praktische Praxis.',
          translation:
            'He learned the theory, but he has no practical practice.',
        },
        {
          sentence: 'In der Praxis ist es oft schwieriger als in der Theorie.',
          translation: "In practice, it's often harder than in theory.",
        },
        {
          sentence: 'Die Firma hat eine langjährige Praxis in diesem Bereich.',
          translation: 'The company has a long-standing practice in this area.',
        },
        {
          sentence: 'Sie müssen die Theorie in die Praxis umsetzen.',
          translation: 'You need to put theory into practice.',
        },
        {
          sentence:
            'Die Praxis des Yoga bringt viele gesundheitliche Vorteile.',
          translation: 'The practice of yoga brings many health benefits.',
        },
      ],
    },
    {
      word: 'trennen',
      desc: 'To divide something into different parts or groups.',
      examples: [
        {
          sentence: 'Sie müssen den Müll trennen, um ihn zu recyceln.',
          translation: 'You need to separate the garbage to recycle it.',
        },
        {
          sentence: 'Die Wand trennt das Wohnzimmer vom Esszimmer.',
          translation:
            'The wall separates the living room from the dining room.',
        },
        {
          sentence: 'Sie trennten sich nach einer langen Beziehung.',
          translation: 'They separated after a long relationship.',
        },
        {
          sentence: 'Der Fluss trennt die beiden Länder voneinander.',
          translation: 'The river separates the two countries from each other.',
        },
        {
          sentence: 'Er trennte die Wäsche nach Farben.',
          translation: 'He separated the laundry by colors.',
        },
      ],
    },
    {
      word: 'schwierig',
      desc: 'Not easy; requiring great effort or skill to do or understand.',
      examples: [
        {
          sentence: 'Das war eine schwierige Entscheidung.',
          translation: 'That was a difficult decision.',
        },
        {
          sentence: 'Die Mathematikaufgabe war sehr schwierig.',
          translation: 'The math problem was very difficult.',
        },
        {
          sentence: 'Es ist schwierig, eine neue Sprache zu lernen.',
          translation: "It's difficult to learn a new language.",
        },
        {
          sentence: 'Der Bergpfad war steil und schwierig zu bewältigen.',
          translation:
            'The mountain trail was steep and difficult to navigate.',
        },
        {
          sentence: 'Sie hatte eine schwierige Kindheit.',
          translation: 'She had a difficult childhood.',
        },
      ],
    },
    {
      word: 'Arzt',
      desc: 'A person trained and licensed to practice medicine; a medical doctor.',
      examples: [
        {
          sentence: 'Der Arzt verschrieb ihm Medikamente gegen die Schmerzen.',
          translation: 'The doctor prescribed him medication for the pain.',
        },
        {
          sentence: 'Der Arzt machte eine gründliche Untersuchung.',
          translation: 'The doctor conducted a thorough examination.',
        },
        {
          sentence: 'Sie besuchte den Arzt wegen ihrer Halsschmerzen.',
          translation: 'She visited the doctor because of her sore throat.',
        },
        {
          sentence:
            'Der Arzt gab ihm Ratschläge zur Verbesserung seiner Gesundheit.',
          translation: 'The doctor gave him advice to improve his health.',
        },
        {
          sentence: 'Der Arzt war sehr freundlich und aufmerksam.',
          translation: 'The doctor was very friendly and attentive.',
        },
      ],
    },
    {
      word: 'Bitte',
      desc: 'An expression of polite request.',
      examples: [
        {
          sentence: 'Bitte geben Sie mir das Salz.',
          translation: 'Please pass me the salt.',
        },
        {
          sentence: 'Können Sie mir bitte helfen?',
          translation: 'Can you please help me?',
        },
        {
          sentence: 'Bitte setzen Sie sich.',
          translation: 'Please have a seat.',
        },
        {
          sentence:
            'Könnten Sie mir bitte sagen, wo das nächste Krankenhaus ist?',
          translation:
            'Could you please tell me where the nearest hospital is?',
        },
        {
          sentence: 'Bitte seien Sie pünktlich.',
          translation: 'Please be on time.',
        },
      ],
    },
    {
      word: 'schützen',
      desc: 'To keep safe from harm or danger.',
      examples: [
        {
          sentence: 'Eltern müssen ihre Kinder schützen.',
          translation: 'Parents must protect their children.',
        },
        {
          sentence:
            'Die Polizei schützte die Demonstranten vor gewalttätigen Gegnern.',
          translation:
            'The police protected the protesters from violent opponents.',
        },
        {
          sentence: 'Eine Impfung kann vor bestimmten Krankheiten schützen.',
          translation: 'A vaccination can protect against certain diseases.',
        },
        {
          sentence: 'Sie trug einen Hut, um sich vor der Sonne zu schützen.',
          translation: 'She wore a hat to protect herself from the sun.',
        },
        {
          sentence: 'Der Damm schützt das Dorf vor Überschwemmungen.',
          translation: 'The dam protects the village from flooding.',
        },
      ],
    },
    {
      word: 'Mittag',
      desc: 'The middle of the day; noon.',
      examples: [
        {
          sentence: 'Wir treffen uns um 12 Uhr mittags.',
          translation: "We're meeting at noon.",
        },
        {
          sentence: 'Ich habe um Mittag herum eine Pause.',
          translation: 'I have a break around noon.',
        },
        {
          sentence: 'Mittagessen ist die Hauptmahlzeit des Tages.',
          translation: 'Lunch is the main meal of the day.',
        },
        {
          sentence: 'Die Sonne steht um Mittag am höchsten.',
          translation: 'The sun is highest at noon.',
        },
        {
          sentence: 'Um Mittag herum ist es hier oft sehr heiß.',
          translation: "It's often very hot around noon here.",
        },
      ],
    },
    {
      word: 'Ernte',
      desc: 'The process of gathering a ripe crop from the fields.',
      examples: [
        {
          sentence: 'Die Bauern begannen mit der Ernte ihrer Felder.',
          translation: 'The farmers started harvesting their fields.',
        },
        {
          sentence: 'Die Ernte dieses Jahres war besonders reichhaltig.',
          translation: "This year's harvest was particularly abundant.",
        },
        {
          sentence: 'Die Erntezeit ist eine arbeitsreiche Zeit für die Bauern.',
          translation: 'Harvest time is a busy period for farmers.',
        },
        {
          sentence: 'Die Maschinen erleichtern die Ernte erheblich.',
          translation: 'Machines make harvesting much easier.',
        },
        {
          sentence: 'Die Ernte muss rechtzeitig eingebracht werden.',
          translation: 'The harvest must be brought in on time.',
        },
      ],
    },
    {
      word: 'modernen',
      desc: 'Relating to the present or recent times as opposed to the remote past.',
      examples: [
        {
          sentence: 'Dieses Gebäude ist ein Beispiel für modernes Design.',
          translation: 'This building is an example of modern design.',
        },
        {
          sentence: 'Moderne Technologie hat unser Leben verändert.',
          translation: 'Modern technology has changed our lives.',
        },
        {
          sentence: 'Er ist ein Experte auf dem Gebiet moderner Kunst.',
          translation: 'He is an expert in the field of modern art.',
        },
        {
          sentence: 'Die moderne Medizin hat viele Krankheiten besiegt.',
          translation: 'Modern medicine has defeated many diseases.',
        },
        {
          sentence: 'Moderne Architektur zeichnet sich durch klare Linien aus.',
          translation: 'Modern architecture is characterized by clean lines.',
        },
      ],
    },
    {
      word: 'Elementes',
      desc: 'A component or constituent of a whole or one of the parts into which a whole may be resolved by analysis.',
      examples: [
        {
          sentence: 'Wasser ist ein Element des Lebens auf der Erde.',
          translation: 'Water is an element of life on Earth.',
        },
        {
          sentence:
            'Sauerstoff ist ein wichtiger Bestandteil des Luft-Elements.',
          translation: 'Oxygen is an important component of the air element.',
        },
        {
          sentence:
            'Die chemischen Elemente sind in der Periodentafel aufgeführt.',
          translation:
            'The chemical elements are listed in the periodic table.',
        },
        {
          sentence:
            'Die Elemente Kohlenstoff und Wasserstoff sind in vielen organischen Verbindungen enthalten.',
          translation:
            'The elements carbon and hydrogen are present in many organic compounds.',
        },
        {
          sentence:
            'Feuer, Wasser, Erde und Luft sind die klassischen Elemente der antiken Philosophie.',
          translation:
            'Fire, water, earth, and air are the classical elements of ancient philosophy.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'treffen, Schüler, Ecke, Partei, Versorgung, deren, lokalisieren, Rings, Charakter, insekt',
  words: [
    {
      word: 'treffen',
      desc: 'To strike or collide with something.',
      examples: [
        {
          sentence: 'Der Ball traf ihn mitten ins Gesicht.',
          translation: 'The ball hit him right in the face.',
        },
        {
          sentence: 'Die Worte trafen sie wie ein Schlag.',
          translation: 'The words hit her like a blow.',
        },
        {
          sentence: 'Das Auto traf den Baum mit voller Wucht.',
          translation: 'The car hit the tree with full force.',
        },
        {
          sentence: 'Der Schuss traf das Ziel genau.',
          translation: 'The shot hit the target precisely.',
        },
        {
          sentence: 'Seine Aussagen treffen oft ins Schwarze.',
          translation: 'His statements often hit the mark.',
        },
      ],
    },
    {
      word: 'Schüler',
      desc: 'A person who is learning at a school.',
      examples: [
        {
          sentence: 'Die Schüler bereiten sich auf die Prüfung vor.',
          translation: 'The students are preparing for the exam.',
        },
        {
          sentence: 'Die Lehrerin gab den Schülern eine Hausaufgabe auf.',
          translation: 'The teacher assigned homework to the students.',
        },
        {
          sentence:
            'Die Schüler sitzen im Klassenzimmer und hören dem Lehrer zu.',
          translation:
            'The students are sitting in the classroom and listening to the teacher.',
        },
        {
          sentence: 'Die Schüler lernen fleißig für ihre Abschlussprüfung.',
          translation: 'The students are studying hard for their final exam.',
        },
        {
          sentence: 'Die Schüler freuen sich auf die Sommerferien.',
          translation:
            'The students are looking forward to the summer holidays.',
        },
      ],
    },
    {
      word: 'Ecke',
      desc: 'The point at which two lines or surfaces meet; an edge or corner.',
      examples: [
        {
          sentence: 'Er steht in der Ecke des Raumes.',
          translation: "He's standing in the corner of the room.",
        },
        {
          sentence: 'Die Katze versteckte sich hinter der Ecke.',
          translation: 'The cat hid behind the corner.',
        },
        {
          sentence: 'Wir wohnen an der Ecke der Straße.',
          translation: 'We live at the corner of the street.',
        },
        {
          sentence: 'Sie biegen um die Ecke und sehen das Geschäft.',
          translation: 'You turn the corner and see the store.',
        },
        {
          sentence: 'Das Buch liegt in der untersten Ecke des Regals.',
          translation: 'The book is in the bottom corner of the shelf.',
        },
      ],
    },
    {
      word: 'Partei',
      desc: 'A group of people who seek to influence public policy and government by getting its candidates elected to public office.',
      examples: [
        {
          sentence: 'Die politische Partei gewann die Wahl.',
          translation: 'The political party won the election.',
        },
        {
          sentence: 'Er ist Mitglied einer sozialistischen Partei.',
          translation: 'He is a member of a socialist party.',
        },
        {
          sentence: 'Die Partei unterstützt die Rechte der Arbeiter.',
          translation: 'The party supports the rights of workers.',
        },
        {
          sentence: 'Die Grüne Partei setzt sich für Umweltschutz ein.',
          translation:
            'The Green Party advocates for environmental protection.',
        },
        {
          sentence:
            'Die Partei hat ein neues Programm zur Arbeitsplatzsicherheit vorgestellt.',
          translation:
            'The party has introduced a new program for workplace safety.',
        },
      ],
    },
    {
      word: 'Versorgung',
      desc: 'The action of supplying a country or organization with provisions and equipment.',
      examples: [
        {
          sentence: 'Die Versorgung der Stadt mit Wasser ist gesichert.',
          translation: "The city's water supply is secure.",
        },
        {
          sentence:
            'Die Versorgung mit Nahrungsmitteln ist in einigen Regionen knapp.',
          translation: 'Food supply is scarce in some regions.',
        },
        {
          sentence:
            'Die Versorgung des Krankenhauses mit Medikamenten ist wichtig.',
          translation: "The hospital's supply of medication is important.",
        },
        {
          sentence: 'Die Versorgung der Bevölkerung mit Strom ist ausgefallen.',
          translation: "The population's supply of electricity has failed.",
        },
        {
          sentence:
            'Die Versorgung der Truppen ist in Kriegszeiten von großer Bedeutung.',
          translation:
            'Supplying the troops is of great importance in times of war.',
        },
      ],
    },
    {
      word: 'deren',
      desc: 'Belonging to or associated with people or things previously mentioned or easily identified.',
      examples: [
        {
          sentence:
            'Die Firma hat ihre Mitarbeiter belohnt, deren Leistung besonders herausragend war.',
          translation:
            'The company rewarded its employees whose performance was particularly outstanding.',
        },
        {
          sentence:
            'Viele Touristen besuchen die Stadt, deren Sehenswürdigkeiten weltberühmt sind.',
          translation:
            'Many tourists visit the city whose attractions are world-famous.',
        },
        {
          sentence:
            'Die Kinder haben ihre Hausaufgaben gemacht, deren Ergebnisse sehr gut waren.',
          translation:
            'The children did their homework, the results of which were very good.',
        },
        {
          sentence:
            'Die Firma hat neue Mitarbeiter eingestellt, deren Qualifikationen den Anforderungen entsprechen.',
          translation:
            'The company has hired new employees whose qualifications meet the requirements.',
        },
        {
          sentence:
            'Die Kunden sind sehr zufrieden mit den Produkten, deren Qualität hervorragend ist.',
          translation:
            'The customers are very satisfied with the products whose quality is excellent.',
        },
      ],
    },
    {
      word: 'lokalisieren',
      desc: 'To determine or specify the position or limits of (an area) especially by means of coordinates or a map.',
      examples: [
        {
          sentence: 'Die Polizei konnte das gestohlene Auto lokalisieren.',
          translation: 'The police were able to locate the stolen car.',
        },
        {
          sentence:
            'Das Forschungsteam versucht, die Quelle des Virus zu lokalisieren.',
          translation:
            'The research team is trying to locate the source of the virus.',
        },
        {
          sentence:
            'Es ist schwierig, das verlorene Schiff auf dem Ozean zu lokalisieren.',
          translation: "It's difficult to locate the lost ship in the ocean.",
        },
        {
          sentence:
            'Die Sensoren können die genaue Position des Flugzeugs lokalisieren.',
          translation:
            'The sensors can localize the exact position of the aircraft.',
        },
        {
          sentence:
            'Wir müssen die Leckage lokalisieren, um das Problem zu beheben.',
          translation: 'We need to locate the leak to fix the problem.',
        },
      ],
    },
    {
      word: 'Rings',
      desc: 'A small circular band, typically of precious metal, worn on a finger as an ornament or a token of marriage, engagement, or authority.',
      examples: [
        {
          sentence: 'Sie trug einen goldenen Ring an ihrem Finger.',
          translation: 'She wore a golden ring on her finger.',
        },
        {
          sentence: 'Der Diamantring war ein Geschenk ihres Verlobten.',
          translation: 'The diamond ring was a gift from her fiancé.',
        },
        {
          sentence: 'Der Ring wurde als Symbol der Treue ausgetauscht.',
          translation: 'The ring was exchanged as a symbol of fidelity.',
        },
        {
          sentence: 'Er verlor seinen Ring im Sand und suchte danach.',
          translation: 'He lost his ring in the sand and searched for it.',
        },
        {
          sentence:
            'Der Ring wurde von Generation zu Generation weitergegeben.',
          translation:
            'The ring was passed down from generation to generation.',
        },
      ],
    },
    {
      word: 'Charakter',
      desc: 'The mental and moral qualities distinctive to an individual.',
      examples: [
        {
          sentence: 'Sein Charakter war von großer Stärke und Güte geprägt.',
          translation:
            'His character was marked by great strength and goodness.',
        },
        {
          sentence: 'Der Film beleuchtet die Entwicklung des Hauptcharakters.',
          translation:
            'The movie illuminates the development of the main character.',
        },
        {
          sentence: 'Ein guter Charakter ist wichtiger als äußere Schönheit.',
          translation: 'Good character is more important than outer beauty.',
        },
        {
          sentence: 'Sie bewunderte seinen Charakter und seine Integrität.',
          translation: 'She admired his character and integrity.',
        },
        {
          sentence:
            'Die Geschichte handelt von einem Mann von zweifelhaftem Charakter.',
          translation: 'The story is about a man of questionable character.',
        },
      ],
    },
    {
      word: 'insekt',
      desc: 'A small arthropod animal that has six legs and generally one or two pairs of wings.',
      examples: [
        {
          sentence: 'Die Kinder sammelten Insekten im Garten.',
          translation: 'The children collected insects in the garden.',
        },
        {
          sentence: 'Einige Insekten können Krankheiten übertragen.',
          translation: 'Some insects can transmit diseases.',
        },
        {
          sentence: 'Der Biologe studierte die Lebensweise von Insekten.',
          translation: 'The biologist studied the lifestyle of insects.',
        },
        {
          sentence: 'Insekten spielen eine wichtige Rolle im Ökosystem.',
          translation: 'Insects play an important role in the ecosystem.',
        },
        {
          sentence: 'Das Insekt summte leise, während es um die Blumen flog.',
          translation:
            'The insect buzzed softly as it flew around the flowers.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'gefangen, Zeit, zeigen, Funk, Speiche, Atom, Mensch, Geschichte, Wirkung, elektrisch',
  words: [
    {
      word: 'gefangen',
      desc: 'Caught or captured by someone or something.',
      examples: [
        {
          sentence: 'Die Maus wurde von der Katze gefangen.',
          translation: 'The mouse was caught by the cat.',
        },
        {
          sentence: 'Der Einbrecher wurde von der Polizei gefangen genommen.',
          translation: 'The burglar was caught by the police.',
        },
        {
          sentence: 'Er war gefangen in einem Netz aus Lügen.',
          translation: 'He was caught in a web of lies.',
        },
        {
          sentence: 'Das Flugzeug wurde von der Radarstation gefangen.',
          translation: 'The airplane was caught by the radar station.',
        },
        {
          sentence: 'Der Dieb wurde auf frischer Tat gefangen.',
          translation: 'The thief was caught in the act.',
        },
      ],
    },
    {
      word: 'Zeit',
      desc: 'A period or interval in which events occur sequentially or the duration of such a period.',
      examples: [
        {
          sentence: 'Die Zeit vergeht schnell, wenn man Spaß hat.',
          translation: "Time flies when you're having fun.",
        },
        {
          sentence: 'Es ist Zeit, nach Hause zu gehen.',
          translation: "It's time to go home.",
        },
        {
          sentence: 'Die Zeit heilt alle Wunden.',
          translation: 'Time heals all wounds.',
        },
        {
          sentence: 'Es ist Zeit für Veränderungen.',
          translation: "It's time for changes.",
        },
        {
          sentence: 'Die Zeit steht niemals still.',
          translation: 'Time never stands still.',
        },
      ],
    },
    {
      word: 'zeigen',
      desc: 'To indicate or point out something; to reveal or display.',
      examples: [
        {
          sentence: 'Kannst du mir den Weg zum Bahnhof zeigen?',
          translation: 'Can you show me the way to the train station?',
        },
        {
          sentence: 'Der Zeiger auf der Karte zeigt Norden an.',
          translation: 'The pointer on the map indicates north.',
        },
        {
          sentence:
            'Er zeigte auf den Bildschirm, um sein Argument zu unterstützen.',
          translation: 'He pointed at the screen to support his argument.',
        },
        {
          sentence: 'Die Anzeige zeigt die Temperatur in Celsius an.',
          translation: 'The display indicates the temperature in Celsius.',
        },
        {
          sentence: 'Die Grafik zeigt den Anstieg der Verkaufszahlen.',
          translation: 'The graph shows the increase in sales figures.',
        },
      ],
    },
    {
      word: 'Funk',
      desc: 'A method of transmitting and receiving electromagnetic waves, especially those carrying sound messages, typically through radio stations.',
      examples: [
        {
          sentence: 'Das Auto hat ein eingebautes Funkgerät.',
          translation: 'The car has a built-in radio.',
        },
        {
          sentence: 'Der Moderator sprach über das Funkgerät.',
          translation: 'The announcer spoke over the radio.',
        },
        {
          sentence: 'Sie hörte gerne Musik im Funk.',
          translation: 'She enjoyed listening to music on the radio.',
        },
        {
          sentence: 'Das Funkgerät empfing ein Signal.',
          translation: 'The radio received a signal.',
        },
        {
          sentence: 'Die Nachricht wurde über den Funk verbreitet.',
          translation: 'The message was broadcast over the radio.',
        },
      ],
    },
    {
      word: 'Speiche',
      desc: 'One of the rods or braces connecting the hub and rim of a wheel.',
      examples: [
        {
          sentence: 'Die Speichen des Rades waren rostig.',
          translation: 'The spokes of the wheel were rusty.',
        },
        {
          sentence: 'Eine gebrochene Speiche machte das Fahrrad unbrauchbar.',
          translation: 'A broken spoke made the bicycle unusable.',
        },
        {
          sentence: 'Der Mechaniker ersetzte die defekten Speichen.',
          translation: 'The mechanic replaced the defective spokes.',
        },
        {
          sentence: 'Die Speichen des Laufrads waren gleichmäßig angeordnet.',
          translation: 'The spokes of the wheel were evenly spaced.',
        },
        {
          sentence: 'Die Speiche brach, als das Auto über einen Stein fuhr.',
          translation: 'The spoke broke when the car ran over a stone.',
        },
      ],
    },
    {
      word: 'Atom',
      desc: 'The basic unit of a chemical element, consisting of a nucleus of protons and neutrons with electrons.',
      examples: [
        {
          sentence:
            'Das Atom ist die kleinste Einheit eines chemischen Elements.',
          translation: 'The atom is the smallest unit of a chemical element.',
        },
        {
          sentence: 'Die Wissenschaftler untersuchen die Struktur des Atoms.',
          translation: 'Scientists are studying the structure of the atom.',
        },
        {
          sentence: 'Die Kernspaltung ist die Spaltung eines Atoms.',
          translation: 'Nuclear fission is the splitting of an atom.',
        },
        {
          sentence: 'Elektronen kreisen um den Kern eines Atoms.',
          translation: 'Electrons orbit the nucleus of an atom.',
        },
        {
          sentence: 'Ein Molekül besteht aus zwei oder mehr Atomen.',
          translation: 'A molecule consists of two or more atoms.',
        },
      ],
    },
    {
      word: 'Mensch',
      desc: 'A human being.',
      examples: [
        {
          sentence:
            'Der Mensch ist die einzige Spezies, die Werkzeuge herstellen kann.',
          translation: 'Humans are the only species capable of making tools.',
        },
        {
          sentence: 'Jeder Mensch hat das Recht auf Bildung.',
          translation: 'Every human has the right to education.',
        },
        {
          sentence: 'Der Mensch ist ein soziales Wesen.',
          translation: 'Man is a social being.',
        },
        {
          sentence: 'Der Mensch hat den Mond betreten.',
          translation: 'Man has walked on the moon.',
        },
        {
          sentence: 'Der Mensch ist anfällig für Krankheiten.',
          translation: 'Man is susceptible to diseases.',
        },
      ],
    },
    {
      word: 'Geschichte',
      desc: 'The study of past events, particularly in human affairs.',
      examples: [
        {
          sentence: 'Die Geschichte Europas umfasst viele Epochen.',
          translation: 'The history of Europe spans many epochs.',
        },
        {
          sentence:
            'In der Geschichte des Landes gab es viele politische Umbrüche.',
          translation:
            "The country's history has seen many political upheavals.",
        },
        {
          sentence: 'Die Geschichte wird oft von den Siegern geschrieben.',
          translation: 'History is often written by the victors.',
        },
        {
          sentence: 'Die Geschichte der Menschheit ist voller Wendepunkte.',
          translation: 'The history of humanity is full of turning points.',
        },
        {
          sentence:
            'Das Museum zeigt die Geschichte der Industrie in der Region.',
          translation:
            'The museum displays the history of industry in the region.',
        },
      ],
    },
    {
      word: 'Wirkung',
      desc: 'The way in which an action, event, or process affects someone or something.',
      examples: [
        {
          sentence: 'Die Wirkung dieser Medizin ist sofort spürbar.',
          translation: 'The effect of this medicine is immediately noticeable.',
        },
        {
          sentence:
            'Die Wirkung von Alkohol auf den Körper kann sehr schädlich sein.',
          translation: 'The impact of alcohol on the body can be very harmful.',
        },
        {
          sentence:
            'Die Wirkung von Musik auf die Stimmung ist gut dokumentiert.',
          translation: 'The effect of music on mood is well documented.',
        },
        {
          sentence:
            'Der Künstler erzielte mit seinem Gemälde eine starke Wirkung.',
          translation: 'The artist achieved a strong effect with his painting.',
        },
        {
          sentence:
            'Die Wirkung von Werbung auf das Kaufverhalten der Menschen ist umstritten.',
          translation:
            "The effect of advertising on people's buying behavior is controversial.",
        },
      ],
    },
    {
      word: 'elektrisch',
      desc: 'Relating to electricity or electric currents.',
      examples: [
        {
          sentence:
            'Das elektrische Licht hat die nächtliche Lebensweise verändert.',
          translation: 'Electric light has changed nocturnal living.',
        },
        {
          sentence: 'Die Züge fahren mit elektrischer Energie.',
          translation: 'The trains run on electric power.',
        },
        {
          sentence: 'Ein elektrischer Schlag kann gefährlich sein.',
          translation: 'An electric shock can be dangerous.',
        },
        {
          sentence: 'Moderne Autos verwenden elektrische Antriebe.',
          translation: 'Modern cars use electric propulsion.',
        },
        {
          sentence:
            'Die Installation der elektrischen Verkabelung dauerte mehrere Wochen.',
          translation:
            'The installation of the electrical wiring took several weeks.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'erwarten, Knochen, Schiene, vorstellen, bieten, zustimmen, so, sanft, Frau, Kapitän',
  words: [
    {
      word: 'erwarten',
      desc: 'To believe or hope that something will happen.',
      examples: [
        {
          sentence: 'Wir erwarten, dass die Lieferung morgen ankommt.',
          translation: 'We expect the delivery to arrive tomorrow.',
        },
        {
          sentence:
            'Die Gäste erwarten eine angenehme Erfahrung in unserem Hotel.',
          translation: 'The guests expect a pleasant experience at our hotel.',
        },
        {
          sentence: 'Ich erwarte gute Nachrichten von meinem Arzt.',
          translation: 'I expect good news from my doctor.',
        },
        {
          sentence: 'Die Eltern erwarten, dass ihre Kinder sich benehmen.',
          translation: 'The parents expect their children to behave.',
        },
        {
          sentence: 'Man sollte nicht zu viel von anderen erwarten.',
          translation: 'One should not expect too much from others.',
        },
      ],
    },
    {
      word: 'Knochen',
      desc: 'The hard, rigid form of connective tissue constituting most of the skeleton of vertebrates.',
      examples: [
        {
          sentence: 'Der Hund nagte am Knochen.',
          translation: 'The dog gnawed on the bone.',
        },
        {
          sentence: 'Sie brach sich den Armknochen beim Sturz.',
          translation: 'She broke her arm bone in the fall.',
        },
        {
          sentence: 'Die Archäologen fanden Knochenreste im Grab.',
          translation: 'The archaeologists found bone remains in the grave.',
        },
        {
          sentence: 'Der Tierarzt untersuchte den gebrochenen Knochen.',
          translation: 'The veterinarian examined the broken bone.',
        },
        {
          sentence: 'Das Steak hatte noch Knochen drin.',
          translation: 'The steak still had bones in it.',
        },
      ],
    },
    {
      word: 'Schiene',
      desc: 'A long metal or wooden piece fixed in the ground that trains travel along.',
      examples: [
        {
          sentence: 'Der Zug fuhr über die Schiene.',
          translation: 'The train traveled along the rail.',
        },
        {
          sentence: 'Die Arbeiter reparierten die Schiene.',
          translation: 'The workers repaired the rail.',
        },
        {
          sentence: 'Der Unfall wurde durch eine lose Schiene verursacht.',
          translation: 'The accident was caused by a loose rail.',
        },
        {
          sentence: 'Der Zug entgleiste aufgrund einer defekten Schiene.',
          translation: 'The train derailed due to a defective rail.',
        },
        {
          sentence: 'Die Kinder spielten auf den alten Schienen.',
          translation: 'The children played on the old rails.',
        },
      ],
    },
    {
      word: 'vorstellen',
      desc: 'To form a mental image or concept of something; to imagine.',
      examples: [
        {
          sentence: 'Können Sie sich vorstellen, wie es wäre, berühmt zu sein?',
          translation: 'Can you imagine what it would be like to be famous?',
        },
        {
          sentence: 'Ich kann mir nicht vorstellen, ohne Musik zu leben.',
          translation: "I can't imagine living without music.",
        },
        {
          sentence:
            'Er stellte sich vor, er wäre ein berühmter Schriftsteller.',
          translation: 'He imagined himself to be a famous writer.',
        },
        {
          sentence:
            'Sie konnte sich nicht vorstellen, dass er so etwas tun würde.',
          translation: "She couldn't imagine that he would do such a thing.",
        },
        {
          sentence:
            'Kannst du dir vorstellen, wie schön es hier im Sommer ist?',
          translation:
            'Can you imagine how beautiful it is here in the summer?',
        },
      ],
    },
    {
      word: 'bieten',
      desc: 'To present something for someone to accept or reject as desired.',
      examples: [
        {
          sentence: 'Das Restaurant bietet eine Vielzahl von Gerichten an.',
          translation: 'The restaurant offers a variety of dishes.',
        },
        {
          sentence: 'Wir bieten unseren Kunden einen exzellenten Service.',
          translation: 'We offer our customers excellent service.',
        },
        {
          sentence:
            'Die Firma bietet eine kostenlose Testversion ihres Produkts an.',
          translation: 'The company offers a free trial of its product.',
        },
        {
          sentence: 'Wir bieten Ihnen die Möglichkeit, Ihre Meinung zu äußern.',
          translation: 'We offer you the opportunity to express your opinion.',
        },
        {
          sentence: 'Das Theater bietet eine breite Palette von Aufführungen.',
          translation: 'The theater offers a wide range of performances.',
        },
      ],
    },
    {
      word: 'zustimmen',
      desc: 'To express agreement or acceptance.',
      examples: [
        {
          sentence: 'Die Mitglieder stimmten dem Vorschlag einstimmig zu.',
          translation: 'The members unanimously agreed to the proposal.',
        },
        {
          sentence: 'Ich stimme dir in diesem Punkt vollkommen zu.',
          translation: 'I completely agree with you on this point.',
        },
        {
          sentence: 'Können wir uns darauf einigen? Ich stimme zu.',
          translation: 'Can we agree on that? I agree.',
        },
        {
          sentence:
            'Die beiden Parteien konnten sich auf einen Kompromiss nicht einigen.',
          translation: 'The two parties could not agree on a compromise.',
        },
        {
          sentence:
            'Die Lehrer stimmten dem Vorschlag zu, die Schuluniformen abzuschaffen.',
          translation:
            'The teachers agreed to the proposal to abolish school uniforms.',
        },
      ],
    },
    {
      word: 'so',
      desc: 'In the way or manner indicated; to the same extent or degree.',
      examples: [
        {
          sentence: 'Warum hast du das gemacht? Ich wollte es so.',
          translation: 'Why did you do that? I wanted it like that.',
        },
        {
          sentence: 'Er ist nicht so intelligent wie sein Bruder.',
          translation: 'He is not as intelligent as his brother.',
        },
        {
          sentence: 'Sie hat so viel gearbeitet, um ihr Ziel zu erreichen.',
          translation: 'She worked so hard to achieve her goal.',
        },
        {
          sentence: 'Ich mag es nicht so scharf.',
          translation: "I don't like it that spicy.",
        },
        {
          sentence: 'Die Dinge sind nicht immer so, wie sie scheinen.',
          translation: 'Things are not always as they seem.',
        },
      ],
    },
    {
      word: 'sanft',
      desc: 'Having a mild, kind, or tender temperament or character.',
      examples: [
        {
          sentence: 'Das Baby schlief sanft in den Armen seiner Mutter.',
          translation: "The baby slept gently in its mother's arms.",
        },
        {
          sentence: 'Er sprach sanft zu ihr, um sie zu beruhigen.',
          translation: 'He spoke gently to her to calm her down.',
        },
        {
          sentence: 'Die sanften Hügel erstreckten sich bis zum Horizont.',
          translation: 'The gentle hills stretched to the horizon.',
        },
        {
          sentence: 'Die Musik war sanft und entspannend.',
          translation: 'The music was gentle and relaxing.',
        },
        {
          sentence: 'Die sanfte Brise trug den Duft von Blumen heran.',
          translation: 'The gentle breeze carried the scent of flowers.',
        },
      ],
    },
    {
      word: 'Frau',
      desc: 'An adult human female.',
      examples: [
        {
          sentence: 'Die Frau trug einen roten Mantel.',
          translation: 'The woman was wearing a red coat.',
        },
        {
          sentence: 'Sie ist eine intelligente und starke Frau.',
          translation: 'She is an intelligent and strong woman.',
        },
        {
          sentence: 'Die Frau des Bürgermeisters ist eine bekannte Künstlerin.',
          translation: "The mayor's wife is a well-known artist.",
        },
        {
          sentence: 'Die Frauen trafen sich zum Kaffeeklatsch.',
          translation: 'The women gathered for a coffee chat.',
        },
        {
          sentence:
            'Frauen haben das Recht, für ihre Überzeugungen einzutreten.',
          translation: 'Women have the right to stand up for their beliefs.',
        },
      ],
    },
    {
      word: 'Kapitän',
      desc: 'A person who is in charge of and directs a ship or an aircraft.',
      examples: [
        {
          sentence: 'Der Kapitän steuerte das Schiff durch den Sturm.',
          translation: 'The captain navigated the ship through the storm.',
        },
        {
          sentence: 'Der Kapitän war ein erfahrener Seemann.',
          translation: 'The captain was an experienced sailor.',
        },
        {
          sentence: 'Die Passagiere warteten auf die Anweisungen des Kapitäns.',
          translation: "The passengers waited for the captain's instructions.",
        },
        {
          sentence: 'Der Kapitän und seine Crew segelten um die Welt.',
          translation: 'The captain and his crew sailed around the world.',
        },
        {
          sentence:
            'Der Kapitän berichtete über die aktuelle Position des Schiffes.',
          translation: "The captain reported on the ship's current position.",
        },
      ],
    },
  ],
};

const section8: Section = {
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

export default section8;
