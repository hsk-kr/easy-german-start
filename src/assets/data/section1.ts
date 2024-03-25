import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'wie, ich, seine, dass, er, war, für, auf, sind, mit',
  words: [
    {
      word: 'wie',
      desc: 'Used for inquiries or comparisons.',
      examples: [
        {
          sentence: 'Wie geht es dir?',
          translation: 'How are you?',
        },
        {
          sentence: 'Wie alt bist du?',
          translation: 'How old are you?',
        },
        {
          sentence: 'Wie viel kostet das?',
          translation: 'How much does that cost?',
        },
        {
          sentence: 'Wie ist das möglich?',
          translation: 'How is that possible?',
        },
        {
          sentence: 'Wie findest du das Essen?',
          translation: 'How do you find the food?',
        },
      ],
    },
    {
      word: 'ich',
      desc: 'First-person singular pronoun.',
      examples: [
        {
          sentence: 'Ich bin müde.',
          translation: 'I am tired.',
        },
        {
          sentence: 'Ich liebe dich.',
          translation: 'I love you.',
        },
        {
          sentence: 'Ich esse gerne Pizza.',
          translation: 'I like eating pizza.',
        },
        {
          sentence: 'Ich bin der Chef.',
          translation: 'I am the boss.',
        },
        {
          sentence: 'Ich habe Hunger.',
          translation: 'I am hungry.',
        },
      ],
    },
    {
      word: 'seine',
      desc: 'Indicates possession by a male subject.',
      examples: [
        {
          sentence: 'Das ist seine Katze.',
          translation: 'That is his cat.',
        },
        {
          sentence: 'Seine Familie ist groß.',
          translation: 'His family is large.',
        },
        {
          sentence: 'Seine Eltern sind nett.',
          translation: 'His parents are nice.',
        },
        {
          sentence: 'Seine Wohnung ist schön.',
          translation: 'His apartment is beautiful.',
        },
        {
          sentence: 'Seine Tasche ist schwer.',
          translation: 'His bag is heavy.',
        },
      ],
    },
    {
      word: 'dass',
      desc: 'Introduces subordinate clauses, indicating cause or reason.',
      examples: [
        {
          sentence: 'Ich glaube, dass er Recht hat.',
          translation: 'I believe that he is right.',
        },
        {
          sentence: 'Er sagt, dass er kommen wird.',
          translation: 'He says that he will come.',
        },
        {
          sentence: 'Sie denkt, dass es stimmt.',
          translation: "She thinks that it's true.",
        },
        {
          sentence: 'Wir wissen, dass es schwer ist.',
          translation: "We know that it's difficult.",
        },
        {
          sentence: 'Er erzählt mir, dass er gewonnen hat.',
          translation: 'He tells me that he won.',
        },
      ],
    },
    {
      word: 'er',
      desc: 'Third-person singular masculine pronoun.',
      examples: [
        {
          sentence: 'Er ist mein Bruder.',
          translation: 'He is my brother.',
        },
        {
          sentence: 'Er hat eine Katze.',
          translation: 'He has a cat.',
        },
        {
          sentence: 'Er geht zur Arbeit.',
          translation: 'He goes to work.',
        },
        {
          sentence: 'Er ist intelligent.',
          translation: 'He is intelligent.',
        },
        {
          sentence: 'Er spielt Fußball.',
          translation: 'He plays soccer.',
        },
      ],
    },
    {
      word: 'war',
      desc: "Past tense form of the verb 'sein' (to be), describing past actions or states.",
      examples: [
        {
          sentence: 'Es war schön gestern.',
          translation: 'It was nice yesterday.',
        },
        {
          sentence: 'War das lustig?',
          translation: 'Was that funny?',
        },
        {
          sentence: 'Das war nicht geplant.',
          translation: "That wasn't planned.",
        },
        {
          sentence: 'Es war kalt letzte Nacht.',
          translation: 'It was cold last night.',
        },
        {
          sentence: 'War er hier?',
          translation: 'Was he here?',
        },
      ],
    },
    {
      word: 'für',
      desc: 'Preposition expressing purpose, destination, or beneficiaries.',
      examples: [
        {
          sentence: 'Das Geschenk ist für dich.',
          translation: 'The gift is for you.',
        },
        {
          sentence: 'Ich gehe für einen Spaziergang.',
          translation: 'I am going for a walk.',
        },
        {
          sentence: 'Das ist für später.',
          translation: "That's for later.",
        },
        {
          sentence: 'Sie ist für die Prüfung bereit.',
          translation: 'She is ready for the exam.',
        },
        {
          sentence: 'Das ist nur für dich.',
          translation: "That's just for you.",
        },
      ],
    },
    {
      word: 'auf',
      desc: 'Preposition indicating location or movement onto a surface or place.',
      examples: [
        {
          sentence: 'Das Buch liegt auf dem Tisch.',
          translation: 'The book is on the table.',
        },
        {
          sentence: 'Sie wartet auf den Bus.',
          translation: 'She is waiting for the bus.',
        },
        {
          sentence: 'Wir gehen auf eine Reise.',
          translation: 'We are going on a trip.',
        },
        {
          sentence: 'Die Kinder spielen auf dem Spielplatz.',
          translation: 'The children are playing on the playground.',
        },
        {
          sentence: 'Ich warte auf eine Antwort.',
          translation: 'I am waiting for a response.',
        },
      ],
    },
    {
      word: 'sind',
      desc: "Present tense form of the verb 'sein' (to be), used with plural subjects.",
      examples: [
        {
          sentence: 'Sie sind meine Freunde.',
          translation: 'They are my friends.',
        },
        {
          sentence: 'Wo sind die Schlüssel?',
          translation: 'Where are the keys?',
        },
        {
          sentence: 'Die Blumen sind schön.',
          translation: 'The flowers are beautiful.',
        },
        {
          sentence: 'Wir sind müde.',
          translation: 'We are tired.',
        },
        {
          sentence: 'Die Bücher sind auf dem Tisch.',
          translation: 'The books are on the table.',
        },
      ],
    },
    {
      word: 'mit',
      desc: 'Preposition indicating association or accompaniment.',
      examples: [
        {
          sentence: 'Ich gehe mit meinen Freunden ins Kino.',
          translation: 'I am going to the cinema with my friends.',
        },
        {
          sentence: 'Kannst du mir mit den Hausaufgaben helfen?',
          translation: 'Can you help me with the homework?',
        },
        {
          sentence: 'Er kommt mit dem Zug.',
          translation: 'He is coming by train.',
        },
        {
          sentence: 'Ich habe einen Termin mit dem Arzt.',
          translation: 'I have an appointment with the doctor.',
        },
        {
          sentence: 'Wir essen Pizza mit Käse.',
          translation: 'We eat pizza with cheese.',
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'sie, sein, bei, ein, haben, dies, aus, durch, heiß, Wort',
  words: [
    {
      word: 'sie',
      desc: 'Third-person plural pronoun, referring to a group of people or objects.',
      examples: [
        {
          sentence: 'Sie kommen aus Deutschland.',
          translation: 'They come from Germany.',
        },
        {
          sentence: 'Sie trinken Kaffee.',
          translation: 'They drink coffee.',
        },
        {
          sentence: 'Sie sind meine Freunde.',
          translation: 'They are my friends.',
        },
        {
          sentence: 'Was machen sie?',
          translation: 'What are they doing?',
        },
        {
          sentence: 'Sie haben viele Bücher.',
          translation: 'They have many books.',
        },
      ],
    },
    {
      word: 'sein',
      desc: "Infinitive form of the verb 'to be', indicating existence, identity, or qualities.",
      examples: [
        {
          sentence: 'Ich bin müde.',
          translation: 'I am tired.',
        },
        {
          sentence: 'Er ist Arzt.',
          translation: 'He is a doctor.',
        },
        {
          sentence: 'Das ist mein Auto.',
          translation: 'That is my car.',
        },
        {
          sentence: 'Wir sind glücklich.',
          translation: 'We are happy.',
        },
        {
          sentence: 'Sie sind groß.',
          translation: 'They are tall.',
        },
      ],
    },
    {
      word: 'bei',
      desc: 'Preposition indicating location, relationship, or association.',
      examples: [
        {
          sentence: 'Ich bin bei der Arbeit.',
          translation: 'I am at work.',
        },
        {
          sentence: 'Er ist bei seiner Familie.',
          translation: 'He is with his family.',
        },
        {
          sentence: 'Sie arbeitet bei einer Bank.',
          translation: 'She works at a bank.',
        },
        {
          sentence: 'Das Buch ist bei mir.',
          translation: 'The book is with me.',
        },
        {
          sentence: 'Wir sind bei Freunden eingeladen.',
          translation: "We are invited to friends' place.",
        },
      ],
    },
    {
      word: 'ein',
      desc: "Indefinite article and numeral 'one', used to indicate a single item or quantity.",
      examples: [
        {
          sentence: 'Ich habe ein Buch.',
          translation: 'I have one book.',
        },
        {
          sentence: 'Das ist ein Hund.',
          translation: 'That is a dog.',
        },
        {
          sentence: 'Ich habe eine Idee.',
          translation: 'I have one idea.',
        },
        {
          sentence: 'Es gibt nur einen Weg.',
          translation: 'There is only one way.',
        },
        {
          sentence: 'Das ist ein schönes Haus.',
          translation: 'That is a beautiful house.',
        },
      ],
    },
    {
      word: 'haben',
      desc: "Verb meaning 'to have', indicating possession or ownership.",
      examples: [
        {
          sentence: 'Ich habe einen Bruder.',
          translation: 'I have a brother.',
        },
        {
          sentence: 'Er hat einen Hund.',
          translation: 'He has a dog.',
        },
        {
          sentence: 'Wir haben viele Freunde.',
          translation: 'We have many friends.',
        },
        {
          sentence: 'Sie haben Geld.',
          translation: 'They have money.',
        },
        {
          sentence: 'Ich habe keine Zeit.',
          translation: 'I have no time.',
        },
      ],
    },
    {
      word: 'dies',
      desc: "Demonstrative pronoun and adjective, meaning 'this'.",
      examples: [
        {
          sentence: 'Dies ist mein Haus.',
          translation: 'This is my house.',
        },
        {
          sentence: 'Dieses Buch ist interessant.',
          translation: 'This book is interesting.',
        },
        {
          sentence: 'Ich mag diese Stadt.',
          translation: 'I like this city.',
        },
        {
          sentence: 'Dieser Film ist langweilig.',
          translation: 'This movie is boring.',
        },
        {
          sentence: 'Dieses Problem ist schwer.',
          translation: 'This problem is difficult.',
        },
      ],
    },
    {
      word: 'aus',
      desc: 'Preposition indicating origin, source, or material.',
      examples: [
        {
          sentence: 'Ich komme aus Deutschland.',
          translation: 'I come from Germany.',
        },
        {
          sentence: 'Das Buch ist aus Papier.',
          translation: 'The book is made of paper.',
        },
        {
          sentence: 'Er ist aus Holz.',
          translation: 'It is made of wood.',
        },
        {
          sentence: 'Die Idee kommt aus diesem Buch.',
          translation: 'The idea comes from this book.',
        },
        {
          sentence: 'Die Früchte sind aus dem Garten.',
          translation: 'The fruits are from the garden.',
        },
      ],
    },
    {
      word: 'durch',
      desc: 'Preposition indicating movement through or by means of something.',
      examples: [
        {
          sentence: 'Ich gehe durch den Park.',
          translation: 'I walk through the park.',
        },
        {
          sentence: 'Sie reisen durch Europa.',
          translation: 'They travel through Europe.',
        },
        {
          sentence: 'Das Licht dringt durch das Fenster.',
          translation: 'The light shines through the window.',
        },
        {
          sentence: 'Er kommt durch die Tür.',
          translation: 'He comes through the door.',
        },
        {
          sentence: 'Die Nachrichten verbreiten sich durch das Internet.',
          translation: 'The news spreads through the internet.',
        },
      ],
    },
    {
      word: 'heiß',
      desc: "Adjective meaning 'hot', indicating high temperature.",
      examples: [
        {
          sentence: 'Das Essen ist heiß.',
          translation: 'The food is hot.',
        },
        {
          sentence: 'Es ist heute sehr heiß.',
          translation: 'It is very hot today.',
        },
        {
          sentence: 'Die Sonne ist sehr heiß.',
          translation: 'The sun is very hot.',
        },
        {
          sentence: 'Die Suppe ist zu heiß zum Essen.',
          translation: 'The soup is too hot to eat.',
        },
        {
          sentence: 'Die Tasse ist heiß.',
          translation: 'The cup is hot.',
        },
      ],
    },
    {
      word: 'Wort',
      desc: "Noun meaning 'word', representing a unit of language.",
      examples: [
        {
          sentence: 'Das ist ein schwieriges Wort.',
          translation: 'That is a difficult word.',
        },
        {
          sentence: 'Sie kennt viele Wörter.',
          translation: 'She knows many words.',
        },
        {
          sentence: 'Kannst du dieses Wort erklären?',
          translation: 'Can you explain this word?',
        },
        {
          sentence: 'Er schreibt gerne neue Wörter auf.',
          translation: 'He likes to write down new words.',
        },
        {
          sentence: 'Das ist ein wichtiges Wort.',
          translation: 'That is an important word.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'aber, was, einige, ist, es, Sie, oder, hatte, die, von',
  words: [
    {
      word: 'aber',
      desc: 'Conjunction used to introduce a contrasting statement or idea.',
      examples: [
        {
          sentence: 'Er ist müde, aber glücklich.',
          translation: 'He is tired, but happy.',
        },
        {
          sentence: 'Ich möchte gehen, aber ich muss arbeiten.',
          translation: 'I want to go, but I have to work.',
        },
        {
          sentence: 'Ich bin klein, aber stark.',
          translation: 'I am small, but strong.',
        },
        {
          sentence: 'Sie ist alt, aber fit.',
          translation: 'She is old, but fit.',
        },
        {
          sentence: 'Das Essen ist einfach, aber lecker.',
          translation: 'The food is simple, but delicious.',
        },
      ],
    },
    {
      word: 'was',
      desc: 'Interrogative pronoun used to inquire about something.',
      examples: [
        {
          sentence: 'Was machst du?',
          translation: 'What are you doing?',
        },
        {
          sentence: 'Was ist das?',
          translation: 'What is that?',
        },
        {
          sentence: 'Was möchten Sie trinken?',
          translation: 'What would you like to drink?',
        },
        {
          sentence: 'Was hast du gestern gegessen?',
          translation: 'What did you eat yesterday?',
        },
        {
          sentence: 'Was bedeutet dieses Wort?',
          translation: 'What does this word mean?',
        },
      ],
    },
    {
      word: 'einige',
      desc: "Indefinite pronoun meaning 'some', used to refer to an unspecified quantity.",
      examples: [
        {
          sentence: 'Ich habe einige Bücher.',
          translation: 'I have some books.',
        },
        {
          sentence: 'Einige Leute mögen Kaffee.',
          translation: 'Some people like coffee.',
        },
        {
          sentence: 'Es gibt einige Probleme.',
          translation: 'There are some problems.',
        },
        {
          sentence: 'Einige Blumen sind rot.',
          translation: 'Some flowers are red.',
        },
        {
          sentence: 'Ich habe einige Ideen.',
          translation: 'I have some ideas.',
        },
      ],
    },
    {
      word: 'ist',
      desc: "Third-person singular form of the verb 'sein' (to be), indicating a state or condition.",
      examples: [
        {
          sentence: 'Er ist krank.',
          translation: 'He is sick.',
        },
        {
          sentence: 'Das ist schön.',
          translation: 'That is beautiful.',
        },
        {
          sentence: 'Sie ist glücklich.',
          translation: 'She is happy.',
        },
        {
          sentence: 'Es ist spät.',
          translation: 'It is late.',
        },
        {
          sentence: 'Das ist interessant.',
          translation: 'That is interesting.',
        },
      ],
    },
    {
      word: 'es',
      desc: "Pronoun meaning 'it', used to represent a non-human subject or object.",
      examples: [
        {
          sentence: 'Es regnet.',
          translation: 'It is raining.',
        },
        {
          sentence: 'Es ist kalt draußen.',
          translation: 'It is cold outside.',
        },
        {
          sentence: 'Es gibt viele Bücher.',
          translation: 'There are many books.',
        },
        {
          sentence: 'Es schneit.',
          translation: 'It is snowing.',
        },
        {
          sentence: 'Es ist dunkel.',
          translation: 'It is dark.',
        },
      ],
    },
    {
      word: 'Sie',
      desc: "Formal pronoun meaning 'you' (singular), used in polite or formal contexts.",
      examples: [
        {
          sentence: 'Können Sie mir helfen?',
          translation: 'Can you help me?',
        },
        {
          sentence: 'Wie geht es Ihnen?',
          translation: 'How are you?',
        },
        {
          sentence: 'Können Sie das bitte wiederholen?',
          translation: 'Can you please repeat that?',
        },
        {
          sentence: 'Haben Sie einen Moment?',
          translation: 'Do you have a moment?',
        },
        {
          sentence: 'Können Sie das erklären?',
          translation: 'Can you explain that?',
        },
      ],
    },
    {
      word: 'oder',
      desc: "Conjunction meaning 'or', used to present alternative options or choices.",
      examples: [
        {
          sentence: 'Möchtest du Tee oder Kaffee?',
          translation: 'Would you like tea or coffee?',
        },
        {
          sentence: 'Ist das rot oder blau?',
          translation: 'Is that red or blue?',
        },
        {
          sentence: 'Möchten Sie den Film heute sehen oder morgen?',
          translation: 'Would you like to watch the movie today or tomorrow?',
        },
        {
          sentence: 'Ist es heiß oder kalt?',
          translation: 'Is it hot or cold?',
        },
        {
          sentence: 'Bist du müde oder wach?',
          translation: 'Are you tired or awake?',
        },
      ],
    },
    {
      word: 'hatte',
      desc: "Past tense form of the verb 'haben' (to have), indicating past possession or action.",
      examples: [
        {
          sentence: 'Ich hatte gestern viel Spaß.',
          translation: 'I had a lot of fun yesterday.',
        },
        {
          sentence: 'Sie hatte früher lange Haare.',
          translation: 'She used to have long hair.',
        },
        {
          sentence: 'Er hatte das Buch verloren.',
          translation: 'He had lost the book.',
        },
        {
          sentence: 'Wir hatten eine tolle Zeit zusammen.',
          translation: 'We had a great time together.',
        },
        {
          sentence: 'Ich hatte Hunger, aber kein Essen.',
          translation: 'I was hungry, but had no food.',
        },
      ],
    },
    {
      word: 'die',
      desc: "Definite article 'the' (feminine form), used to indicate specific nouns.",
      examples: [
        {
          sentence: 'Das ist die Katze.',
          translation: 'That is the cat.',
        },
        {
          sentence: 'Die Sonne scheint.',
          translation: 'The sun is shining.',
        },
        {
          sentence: 'Ich lese die Zeitung.',
          translation: 'I am reading the newspaper.',
        },
        {
          sentence: 'Wo ist die Tasche?',
          translation: 'Where is the bag?',
        },
        {
          sentence: 'Die Blume blüht.',
          translation: 'The flower is blooming.',
        },
      ],
    },
    {
      word: 'von',
      desc: 'Preposition indicating origin, source, or possession.',
      examples: [
        {
          sentence: 'Das ist ein Geschenk von meinem Bruder.',
          translation: 'That is a gift from my brother.',
        },
        {
          sentence: 'Ich komme von der Arbeit.',
          translation: 'I am coming from work.',
        },
        {
          sentence: 'Das Buch von Goethe ist berühmt.',
          translation: 'The book by Goethe is famous.',
        },
        {
          sentence: 'Wir haben Nachrichten von ihnen erhalten.',
          translation: 'We have received news from them.',
        },
        {
          sentence: 'Der Film von Spielberg war großartig.',
          translation: 'The movie by Spielberg was great.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'zu, und, ein, bei, wir, können, aus, andere, waren, die',
  words: [
    {
      word: 'zu',
      desc: 'Preposition indicating direction, purpose, or destination.',
      examples: [
        {
          sentence: 'Ich gehe zu meinem Freund.',
          translation: "I am going to my friend's place.",
        },
        {
          sentence: 'Sie fahren zu der Schule.',
          translation: 'They are driving to the school.',
        },
        {
          sentence: 'Wir gehen zum Supermarkt.',
          translation: 'We are going to the supermarket.',
        },
        {
          sentence: 'Er geht zu seinem Arzt.',
          translation: 'He is going to his doctor.',
        },
        {
          sentence: 'Ich möchte zu Hause sein.',
          translation: 'I want to be at home.',
        },
      ],
    },
    {
      word: 'und',
      desc: 'Conjunction connecting words, phrases, or clauses to indicate addition or continuation.',
      examples: [
        {
          sentence: 'Er und ich gehen zusammen.',
          translation: 'He and I are going together.',
        },
        {
          sentence: 'Das ist rot und blau.',
          translation: 'That is red and blue.',
        },
        {
          sentence: 'Sie liest und schreibt gerne.',
          translation: 'She likes reading and writing.',
        },
        {
          sentence: 'Wir essen Brot und Käse.',
          translation: 'We eat bread and cheese.',
        },
        {
          sentence: 'Er ist jung und talentiert.',
          translation: 'He is young and talented.',
        },
      ],
    },
    {
      word: 'ein',
      desc: "Indefinite article and numeral 'one', used to indicate a single item or quantity.",
      examples: [
        {
          sentence: 'Ich habe ein Buch.',
          translation: 'I have one book.',
        },
        {
          sentence: 'Das ist ein Hund.',
          translation: 'That is a dog.',
        },
        {
          sentence: 'Ich habe eine Idee.',
          translation: 'I have one idea.',
        },
        {
          sentence: 'Es gibt nur einen Weg.',
          translation: 'There is only one way.',
        },
        {
          sentence: 'Das ist ein schönes Haus.',
          translation: 'That is a beautiful house.',
        },
      ],
    },
    {
      word: 'bei',
      desc: 'Preposition indicating location, relationship, or association.',
      examples: [
        {
          sentence: 'Ich bin bei der Arbeit.',
          translation: 'I am at work.',
        },
        {
          sentence: 'Er ist bei seiner Familie.',
          translation: 'He is with his family.',
        },
        {
          sentence: 'Sie arbeitet bei einer Bank.',
          translation: 'She works at a bank.',
        },
        {
          sentence: 'Das Buch ist bei mir.',
          translation: 'The book is with me.',
        },
        {
          sentence: 'Wir sind bei Freunden eingeladen.',
          translation: "We are invited to friends' place.",
        },
      ],
    },
    {
      word: 'wir',
      desc: 'First-person plural pronoun.',
      examples: [
        {
          sentence: 'Wir gehen ins Kino.',
          translation: 'We are going to the cinema.',
        },
        {
          sentence: 'Wir essen gerne Pizza.',
          translation: 'We like eating pizza.',
        },
        {
          sentence: 'Wir sind müde.',
          translation: 'We are tired.',
        },
        {
          sentence: 'Wir spielen Fußball.',
          translation: 'We play football.',
        },
        {
          sentence: 'Wir haben viel Spaß.',
          translation: 'We have a lot of fun.',
        },
      ],
    },
    {
      word: 'können',
      desc: 'Modal verb indicating ability, possibility, or permission.',
      examples: [
        {
          sentence: 'Ich kann schwimmen.',
          translation: 'I can swim.',
        },
        {
          sentence: 'Sie kann Deutsch sprechen.',
          translation: 'She can speak German.',
        },
        {
          sentence: 'Wir können das machen.',
          translation: 'We can do that.',
        },
        {
          sentence: 'Er kann gut kochen.',
          translation: 'He can cook well.',
        },
        {
          sentence: 'Sie können das Buch lesen.',
          translation: 'They can read the book.',
        },
      ],
    },
    {
      word: 'aus',
      desc: 'Preposition indicating origin, source, or material.',
      examples: [
        {
          sentence: 'Ich komme aus Deutschland.',
          translation: 'I come from Germany.',
        },
        {
          sentence: 'Das Buch ist aus Papier.',
          translation: 'The book is made of paper.',
        },
        {
          sentence: 'Er ist aus Holz.',
          translation: 'It is made of wood.',
        },
        {
          sentence: 'Die Idee kommt aus diesem Buch.',
          translation: 'The idea comes from this book.',
        },
        {
          sentence: 'Die Früchte sind aus dem Garten.',
          translation: 'The fruits are from the garden.',
        },
      ],
    },
    {
      word: 'andere',
      desc: "Adjective meaning 'other', used to refer to something different or additional.",
      examples: [
        {
          sentence: 'Es gibt noch andere Möglichkeiten.',
          translation: 'There are other options.',
        },
        {
          sentence: 'Kannst du mir ein anderes Buch empfehlen?',
          translation: 'Can you recommend another book to me?',
        },
        {
          sentence: 'Das ist ein anderer Film.',
          translation: 'That is another movie.',
        },
        {
          sentence: 'Wir müssen andere Lösungen finden.',
          translation: 'We need to find other solutions.',
        },
        {
          sentence: 'Er hat andere Interessen.',
          translation: 'He has other interests.',
        },
      ],
    },
    {
      word: 'waren',
      desc: "Past tense form of the verb 'sein' (to be), used with plural subjects.",
      examples: [
        {
          sentence: 'Sie waren gestern hier.',
          translation: 'They were here yesterday.',
        },
        {
          sentence: 'Die Blumen waren schön.',
          translation: 'The flowers were beautiful.',
        },
        {
          sentence: 'Die Häuser waren alt.',
          translation: 'The houses were old.',
        },
        {
          sentence: 'Wir waren gestern im Kino.',
          translation: 'We were at the cinema yesterday.',
        },
        {
          sentence: 'Die Tiere waren im Wald.',
          translation: 'The animals were in the forest.',
        },
      ],
    },
    {
      word: 'die',
      desc: "Definite article and demonstrative pronoun meaning 'the', used with feminine nouns or as a relative pronoun.",
      examples: [
        {
          sentence: 'Das ist die Frau.',
          translation: 'That is the woman.',
        },
        {
          sentence: 'Die Sonne scheint.',
          translation: 'The sun is shining.',
        },
        {
          sentence: 'Die Kinder spielen im Park.',
          translation: 'The children are playing in the park.',
        },
        {
          sentence: 'Ich kenne die Antwort nicht.',
          translation: "I don't know the answer.",
        },
        {
          sentence: 'Die Bücher sind auf dem Tisch.',
          translation: 'The books are on the table.',
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'tun, ihre, Zeit, wenn, werden, wie, sagte, ein, jeder, sagen',
  words: [
    {
      word: 'tun',
      desc: "Verb meaning 'to do' or 'to act'.",
      examples: [
        {
          sentence: 'Was tun Sie beruflich?',
          translation: 'What do you do for a living?',
        },
        {
          sentence: 'Er tut alles für seine Familie.',
          translation: 'He does everything for his family.',
        },
        {
          sentence: 'Was willst du jetzt tun?',
          translation: 'What do you want to do now?',
        },
        {
          sentence: 'Sie tun immer so, als ob sie alles wüssten.',
          translation: 'They always act as if they know everything.',
        },
        {
          sentence: 'Ich weiß nicht, was ich tun soll.',
          translation: "I don't know what to do.",
        },
      ],
    },
    {
      word: 'ihre',
      desc: "Possessive determiner meaning 'their' (feminine form).",
      examples: [
        {
          sentence: 'Das sind ihre Bücher.',
          translation: 'Those are their books.',
        },
        {
          sentence: 'Ihre Familie ist sehr nett.',
          translation: 'Their family is very nice.',
        },
        {
          sentence: 'Haben Sie ihre Jacke gesehen?',
          translation: 'Have you seen their jacket?',
        },
        {
          sentence: 'Ihre Kinder gehen in dieselbe Schule.',
          translation: 'Their children go to the same school.',
        },
        {
          sentence: 'Ihre Meinungen sind unterschiedlich.',
          translation: 'Their opinions are different.',
        },
      ],
    },
    {
      word: 'Zeit',
      desc: "Noun meaning 'time'.",
      examples: [
        {
          sentence: 'Ich habe keine Zeit.',
          translation: 'I have no time.',
        },
        {
          sentence: 'Es ist Zeit zu gehen.',
          translation: "It's time to go.",
        },
        {
          sentence: 'Die Zeit vergeht schnell.',
          translation: 'Time flies.',
        },
        {
          sentence: 'Er verbringt viel Zeit mit seiner Familie.',
          translation: 'He spends a lot of time with his family.',
        },
        {
          sentence: 'Wir haben noch genug Zeit.',
          translation: 'We still have enough time.',
        },
      ],
    },
    {
      word: 'wenn',
      desc: "Conjunction meaning 'if' or 'when', used to introduce a conditional clause.",
      examples: [
        {
          sentence: 'Was machst du, wenn es regnet?',
          translation: 'What do you do if it rains?',
        },
        {
          sentence: 'Wenn ich Zeit habe, gehe ich spazieren.',
          translation: 'When I have time, I go for a walk.',
        },
        {
          sentence: 'Wenn du kommst, bin ich nicht zu Hause.',
          translation: "If you come, I won't be home.",
        },
        {
          sentence: 'Was machst du, wenn du müde bist?',
          translation: "What do you do when you're tired?",
        },
        {
          sentence: 'Wenn er Zeit hat, ruft er dich an.',
          translation: 'If he has time, he will call you.',
        },
      ],
    },
    {
      word: 'werden',
      desc: 'Auxiliary verb indicating future tense or passive voice.',
      examples: [
        {
          sentence: 'Was wirst du morgen machen?',
          translation: 'What will you do tomorrow?',
        },
        {
          sentence: 'Er wird Arzt.',
          translation: 'He will become a doctor.',
        },
        {
          sentence: 'Die Blumen werden gegossen.',
          translation: 'The flowers are being watered.',
        },
        {
          sentence: 'Wann werden die Ergebnisse bekannt gegeben?',
          translation: 'When will the results be announced?',
        },
        {
          sentence: 'Was wird passieren, wenn es regnet?',
          translation: 'What will happen if it rains?',
        },
      ],
    },
    {
      word: 'wie',
      desc: "Adverb meaning 'how' or 'as'.",
      examples: [
        {
          sentence: 'Wie geht es dir?',
          translation: 'How are you?',
        },
        {
          sentence: 'Wie ist das möglich?',
          translation: 'How is that possible?',
        },
        {
          sentence: 'Er sieht aus wie sein Vater.',
          translation: 'He looks like his father.',
        },
        {
          sentence: 'Wie alt bist du?',
          translation: 'How old are you?',
        },
        {
          sentence: 'Wie viel kostet das?',
          translation: 'How much does it cost?',
        },
      ],
    },
    {
      word: 'sagte',
      desc: "Past tense form of the verb 'sagen' (to say), used with third-person singular subjects.",
      examples: [
        {
          sentence: 'Er sagte, er würde später kommen.',
          translation: 'He said he would come later.',
        },
        {
          sentence: 'Sie sagte, sie sei nicht interessiert.',
          translation: "She said she wasn't interested.",
        },
        {
          sentence: 'Der Lehrer sagte, dass wir eine Prüfung haben werden.',
          translation: 'The teacher said that we would have an exam.',
        },
        {
          sentence: 'Er sagte, er könne mir helfen.',
          translation: 'He said he could help me.',
        },
        {
          sentence: 'Sie sagte, sie sei müde.',
          translation: 'She said she was tired.',
        },
      ],
    },
    {
      word: 'ein',
      desc: "Indefinite article and numeral 'one', used to indicate a single item or quantity.",
      examples: [
        {
          sentence: 'Er hat ein Auto.',
          translation: 'He has one car.',
        },
        {
          sentence: 'Ich möchte ein Eis.',
          translation: 'I want an ice cream.',
        },
        {
          sentence: 'Das ist ein Haus.',
          translation: 'That is a house.',
        },
        {
          sentence: 'Er hat ein neues Buch.',
          translation: 'He has a new book.',
        },
        {
          sentence: 'Sie hat ein Problem.',
          translation: 'She has a problem.',
        },
      ],
    },
    {
      word: 'jeder',
      desc: "Pronoun meaning 'each' or 'every', used to refer to every member of a group.",
      examples: [
        {
          sentence: 'Jeder Student muss diese Prüfung bestehen.',
          translation: 'Every student must pass this exam.',
        },
        {
          sentence: 'Jeder Tag ist eine neue Chance.',
          translation: 'Every day is a new opportunity.',
        },
        {
          sentence: 'Jeder von uns hat seine eigenen Träume.',
          translation: 'Each of us has our own dreams.',
        },
        {
          sentence: 'Jeder sollte sein Bestes geben.',
          translation: 'Everyone should do their best.',
        },
        {
          sentence: 'Jeder Mensch hat seine Stärken und Schwächen.',
          translation: 'Every person has their strengths and weaknesses.',
        },
      ],
    },
    {
      word: 'sagen',
      desc: "Verb meaning 'to tell' or 'to say'.",
      examples: [
        {
          sentence: 'Was hast du gesagt?',
          translation: 'What did you say?',
        },
        {
          sentence: 'Ich möchte dir etwas sagen.',
          translation: 'I want to tell you something.',
        },
        {
          sentence: 'Er sagte, er sei nicht interessiert.',
          translation: "He said he wasn't interested.",
        },
        {
          sentence: 'Sie sagte mir alles.',
          translation: 'She told me everything.',
        },
        {
          sentence: 'Was würdest du sagen?',
          translation: 'What would you say?',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'tut, Satz, drei, wollen, Luft, gut, auch, spielen, klein, Ende',
  words: [
    {
      word: 'tut',
      desc: "Third-person singular form of the verb 'to do', indicating an action performed by someone or something.",
      examples: [
        {
          sentence: 'Er tut seine Hausaufgaben.',
          translation: 'He does his homework.',
        },
        {
          sentence: 'Sie tut gerne Gutes für andere.',
          translation: 'She likes to do good for others.',
        },
        {
          sentence: 'Der Hund tut, als ob er schläft.',
          translation: 'The dog pretends to sleep.',
        },
        {
          sentence: 'Es tut mir leid.',
          translation: "I'm sorry.",
        },
        {
          sentence: 'Er tut alles für seine Familie.',
          translation: 'He does everything for his family.',
        },
      ],
    },
    {
      word: 'Satz',
      desc: "Noun meaning 'sentence' or 'phrase', consisting of a group of words that expresses a complete thought.",
      examples: [
        {
          sentence: 'Das ist ein Satz.',
          translation: 'This is a sentence.',
        },
        {
          sentence: 'Können Sie diesen Satz übersetzen?',
          translation: 'Can you translate this sentence?',
        },
        {
          sentence: 'Sie hat den Satz wiederholt.',
          translation: 'She repeated the sentence.',
        },
        {
          sentence: 'Der erste Satz ist immer wichtig.',
          translation: 'The first sentence is always important.',
        },
        {
          sentence: 'Kannst du diesen Satz vervollständigen?',
          translation: 'Can you complete this sentence?',
        },
      ],
    },
    {
      word: 'drei',
      desc: 'Numeral representing the number three.',
      examples: [
        {
          sentence: 'Ich habe drei Äpfel.',
          translation: 'I have three apples.',
        },
        {
          sentence: 'Das sind drei Bücher.',
          translation: 'Those are three books.',
        },
        {
          sentence: 'Wir haben drei Kinder.',
          translation: 'We have three children.',
        },
        {
          sentence: 'Es sind drei Tage übrig.',
          translation: 'There are three days left.',
        },
        {
          sentence: 'Er hat drei Brüder.',
          translation: 'He has three brothers.',
        },
      ],
    },
    {
      word: 'wollen',
      desc: "Verb meaning 'to want' or 'to desire'.",
      examples: [
        {
          sentence: 'Was willst du trinken?',
          translation: 'What do you want to drink?',
        },
        {
          sentence: 'Ich will nach Hause gehen.',
          translation: 'I want to go home.',
        },
        {
          sentence: 'Was wollen Sie zum Abendessen?',
          translation: 'What do you want for dinner?',
        },
        {
          sentence: 'Er will ein neues Auto kaufen.',
          translation: 'He wants to buy a new car.',
        },
        {
          sentence: 'Sie wollen im Sommer reisen.',
          translation: 'They want to travel in summer.',
        },
      ],
    },
    {
      word: 'Luft',
      desc: "Noun meaning 'air', the invisible gaseous substance surrounding the earth.",
      examples: [
        {
          sentence: 'Die Luft ist frisch.',
          translation: 'The air is fresh.',
        },
        {
          sentence: 'Atme tief Luft ein.',
          translation: 'Breathe in deeply.',
        },
        {
          sentence: 'Die Luftqualität ist wichtig.',
          translation: 'Air quality is important.',
        },
        {
          sentence: 'Die Vögel fliegen in der Luft.',
          translation: 'The birds fly in the air.',
        },
        {
          sentence: 'Es gibt viel Luftverschmutzung in der Stadt.',
          translation: 'There is a lot of air pollution in the city.',
        },
      ],
    },
    {
      word: 'gut',
      desc: "Adjective meaning 'good' or 'well', indicating a positive quality or state.",
      examples: [
        {
          sentence: 'Das Essen schmeckt gut.',
          translation: 'The food tastes good.',
        },
        {
          sentence: 'Er ist ein guter Freund.',
          translation: 'He is a good friend.',
        },
        {
          sentence: 'Wir haben eine gute Zeit.',
          translation: 'We are having a good time.',
        },
        {
          sentence: 'Gute Besserung!',
          translation: 'Get well soon!',
        },
        {
          sentence: 'Das ist eine gute Idee.',
          translation: 'That is a good idea.',
        },
      ],
    },
    {
      word: 'auch',
      desc: "Adverb meaning 'also' or 'too', indicating similarity or addition.",
      examples: [
        {
          sentence: 'Ich möchte auch etwas.',
          translation: 'I would like something too.',
        },
        {
          sentence: 'Das ist auch schön.',
          translation: 'That is nice too.',
        },
        {
          sentence: 'Er ist auch dort.',
          translation: 'He is also there.',
        },
        {
          sentence: 'Wir können auch gehen.',
          translation: 'We can also go.',
        },
        {
          sentence: 'Das ist auch richtig.',
          translation: 'That is also correct.',
        },
      ],
    },
    {
      word: 'spielen',
      desc: "Verb meaning 'to play', engaging in activity for enjoyment or recreation.",
      examples: [
        {
          sentence: 'Die Kinder spielen im Park.',
          translation: 'The children play in the park.',
        },
        {
          sentence: 'Er spielt gerne Fußball.',
          translation: 'He likes playing football.',
        },
        {
          sentence: 'Wir spielen Brettspiele.',
          translation: 'We play board games.',
        },
        {
          sentence: 'Sie spielen Musikinstrumente.',
          translation: 'They play musical instruments.',
        },
        {
          sentence: 'Die Katzen spielen miteinander.',
          translation: 'The cats play with each other.',
        },
      ],
    },
    {
      word: 'klein',
      desc: "Adjective meaning 'small' or 'little', indicating a size or quantity that is not large.",
      examples: [
        {
          sentence: 'Das ist ein kleines Haus.',
          translation: 'That is a small house.',
        },
        {
          sentence: 'Er hat kleine Hände.',
          translation: 'He has small hands.',
        },
        {
          sentence: 'Das Kind trägt kleine Schuhe.',
          translation: 'The child wears small shoes.',
        },
        {
          sentence: 'Ich suche eine kleine Tasche.',
          translation: "I'm looking for a small bag.",
        },
        {
          sentence: 'Das ist ein kleines Problem.',
          translation: 'That is a small problem.',
        },
      ],
    },
    {
      word: 'Ende',
      desc: "Noun meaning 'end' or 'termination', indicating the final part of something.",
      examples: [
        {
          sentence: 'Das ist das Ende des Buches.',
          translation: 'That is the end of the book.',
        },
        {
          sentence: 'Am Ende des Films waren alle glücklich.',
          translation: 'At the end of the movie, everyone was happy.',
        },
        {
          sentence: 'Wir nähern uns dem Ende des Jahres.',
          translation: 'We are approaching the end of the year.',
        },
        {
          sentence: 'Es gibt kein Ende für die Möglichkeiten.',
          translation: 'There is no end to the possibilities.',
        },
        {
          sentence: 'Alles hat ein Ende, nur die Wurst hat zwei.',
          translation: 'Everything has an end, only the sausage has two.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'setzen, Zuhause, lesen, Hand, Hafen, groß, buchstabieren, hinzufügen, auch, Lande',
  words: [
    {
      word: 'setzen',
      desc: "Verb meaning 'to put' or 'to place'.",
      examples: [
        {
          sentence: 'Kannst du dich hier setzen?',
          translation: 'Can you sit here?',
        },
        {
          sentence: 'Er setzt das Buch auf den Tisch.',
          translation: 'He puts the book on the table.',
        },
        {
          sentence: 'Sie setzt sich gerne auf die Bank.',
          translation: 'She likes to sit on the bench.',
        },
        {
          sentence: 'Setz die Tasse bitte in die Spülmaschine.',
          translation: 'Please put the cup in the dishwasher.',
        },
        {
          sentence: 'Wir setzen uns an den Tisch.',
          translation: 'We sit down at the table.',
        },
      ],
    },
    {
      word: 'Zuhause',
      desc: "Noun meaning 'home', the place where one lives or resides.",
      examples: [
        {
          sentence: 'Ich bin gerne zuhause.',
          translation: 'I like being at home.',
        },
        {
          sentence: 'Wo ist dein Zuhause?',
          translation: 'Where is your home?',
        },
        {
          sentence: 'Ich fühle mich hier wie zuhause.',
          translation: 'I feel at home here.',
        },
        {
          sentence: 'Sie ist heute zuhause geblieben.',
          translation: 'She stayed at home today.',
        },
        {
          sentence: 'Wir treffen uns bei mir zuhause.',
          translation: 'We are meeting at my home.',
        },
      ],
    },
    {
      word: 'lesen',
      desc: "Verb meaning 'to read', to interpret and understand written or printed information.",
      examples: [
        {
          sentence: 'Ich lese gerne Bücher.',
          translation: 'I like to read books.',
        },
        {
          sentence: 'Kannst du das lesen?',
          translation: 'Can you read this?',
        },
        {
          sentence: 'Er liest die Zeitung jeden Morgen.',
          translation: 'He reads the newspaper every morning.',
        },
        {
          sentence: 'Sie liest ein interessantes Buch.',
          translation: 'She is reading an interesting book.',
        },
        {
          sentence: 'Wir lesen die Anweisungen sorgfältig.',
          translation: 'We read the instructions carefully.',
        },
      ],
    },
    {
      word: 'Hand',
      desc: "Noun meaning 'hand', indicating the body part at the end of the arm used for grasping, holding, and manipulating objects.",
      examples: [
        {
          sentence: 'Er hielt das Buch in seiner Hand.',
          translation: 'He held the book in his hand.',
        },
        {
          sentence: 'Sie wusch ihre Hände vor dem Essen.',
          translation: 'She washed her hands before eating.',
        },
        {
          sentence: 'Das Kind legte die Münze in die Hand des Bettlers.',
          translation: "The child placed the coin in the beggar's hand.",
        },
        {
          sentence: 'Er streckte seine Hand aus, um zu helfen.',
          translation: 'He reached out his hand to help.',
        },
        {
          sentence: 'Sie schrieb einen Brief von Hand.',
          translation: 'She wrote a letter by hand.',
        },
      ],
    },
    {
      word: 'Hafen',
      desc: "Noun meaning 'port' or 'harbor', a place where ships dock to load and unload cargo.",
      examples: [
        {
          sentence: 'Der Hafen ist sehr geschäftig.',
          translation: 'The port is very busy.',
        },
        {
          sentence: 'Das Schiff liegt im Hafen.',
          translation: 'The ship is in the harbor.',
        },
        {
          sentence: 'Der Hafen ist ein wichtiger Handelsplatz.',
          translation: 'The harbor is an important trading place.',
        },
        {
          sentence: 'Wir haben den Hafen erreicht.',
          translation: 'We have reached the port.',
        },
        {
          sentence: 'Der Hafen von Hamburg ist einer der größten in Europa.',
          translation: 'The port of Hamburg is one of the largest in Europe.',
        },
      ],
    },
    {
      word: 'groß',
      desc: "Adjective meaning 'large' or 'big', indicating a considerable size or quantity.",
      examples: [
        {
          sentence: 'Das ist ein großes Haus.',
          translation: 'That is a large house.',
        },
        {
          sentence: 'Er hat große Pläne.',
          translation: 'He has big plans.',
        },
        {
          sentence: 'Die Stadt hat eine große Bevölkerung.',
          translation: 'The city has a large population.',
        },
        {
          sentence: 'Es ist ein großer Unterschied.',
          translation: "It's a big difference.",
        },
        {
          sentence: 'Das ist ein großes Problem.',
          translation: 'That is a big problem.',
        },
      ],
    },
    {
      word: 'buchstabieren',
      desc: "Verb meaning 'to spell', to orally recite the letters that form a word in their proper sequence.",
      examples: [
        {
          sentence: 'Können Sie das bitte buchstabieren?',
          translation: 'Can you please spell that?',
        },
        {
          sentence: 'Er hat seinen Namen buchstabiert.',
          translation: 'He spelled his name.',
        },
        {
          sentence: 'Kannst du dieses Wort richtig buchstabieren?',
          translation: 'Can you spell this word correctly?',
        },
        {
          sentence: 'Das Kind kann schon seinen Namen buchstabieren.',
          translation: 'The child can already spell his name.',
        },
        {
          sentence: "Buchstabiere 'Schmetterling'.",
          translation: "Spell 'butterfly'.",
        },
      ],
    },
    {
      word: 'hinzufügen',
      desc: "Verb meaning 'to add' or 'to include', to combine or join something to another.",
      examples: [
        {
          sentence: 'Sie sollten etwas Salz hinzufügen.',
          translation: 'You should add some salt.',
        },
        {
          sentence: 'Bitte fügen Sie mich Ihrer Mailingliste hinzu.',
          translation: 'Please add me to your mailing list.',
        },
        {
          sentence: 'Kann ich Ihnen etwas hinzufügen?',
          translation: 'Can I add something for you?',
        },
        {
          sentence: 'Sie hat Zucker zum Kaffee hinzugefügt.',
          translation: 'She added sugar to the coffee.',
        },
        {
          sentence: 'Ich möchte etwas Farbe hinzufügen.',
          translation: 'I want to add some color.',
        },
      ],
    },
    {
      word: 'auch',
      desc: "Adverb meaning 'also' or 'too', indicating similarity or addition.",
      examples: [
        {
          sentence: 'Ich möchte auch etwas.',
          translation: 'I would like something too.',
        },
        {
          sentence: 'Das ist auch schön.',
          translation: 'That is nice too.',
        },
        {
          sentence: 'Er ist auch dort.',
          translation: 'He is also there.',
        },
        {
          sentence: 'Wir können auch gehen.',
          translation: 'We can also go.',
        },
        {
          sentence: 'Das ist auch richtig.',
          translation: 'That is also correct.',
        },
      ],
    },
    {
      word: 'hier',
      desc: "Adverb meaning 'here', indicating a location or position.",
      examples: [
        {
          sentence: 'Ich bin hier.',
          translation: 'I am here.',
        },
        {
          sentence: 'Das Buch liegt hier.',
          translation: 'The book is here.',
        },
        {
          sentence: 'Komm her und setz dich hier hin.',
          translation: 'Come here and sit down here.',
        },
        {
          sentence: 'Wir treffen uns hier.',
          translation: 'We are meeting here.',
        },
        {
          sentence: 'Hier ist dein Kaffee.',
          translation: 'Here is your coffee.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'hier, muss, groß, hoch, so, folgen, Akt, warum, fragen, Männer',
  words: [
    {
      word: 'hier',
      desc: 'Adverb indicating a location or position.',
      examples: [
        {
          sentence: 'Ich bin hier.',
          translation: 'I am here.',
        },
        {
          sentence: 'Das Buch liegt hier.',
          translation: 'The book is here.',
        },
        {
          sentence: 'Komm her und setz dich hier hin.',
          translation: 'Come here and sit down here.',
        },
        {
          sentence: 'Wir treffen uns hier.',
          translation: 'We are meeting here.',
        },
        {
          sentence: 'Hier ist dein Kaffee.',
          translation: 'Here is your coffee.',
        },
      ],
    },
    {
      word: 'muss',
      desc: "Modal verb meaning 'must' or 'have to', indicating necessity or obligation.",
      examples: [
        {
          sentence: 'Ich muss zur Arbeit gehen.',
          translation: 'I must go to work.',
        },
        {
          sentence: 'Du musst deine Hausaufgaben machen.',
          translation: 'You must do your homework.',
        },
        {
          sentence: 'Sie muss pünktlich sein.',
          translation: 'She must be on time.',
        },
        {
          sentence: 'Wir müssen uns beeilen.',
          translation: 'We must hurry.',
        },
        {
          sentence: 'Sie müssen das Formular ausfüllen.',
          translation: 'They must fill out the form.',
        },
      ],
    },
    {
      word: 'groß',
      desc: "Adjective meaning 'big' or 'large', indicating a considerable size or quantity.",
      examples: [
        {
          sentence: 'Das ist ein großes Haus.',
          translation: 'That is a big house.',
        },
        {
          sentence: 'Er hat große Pläne.',
          translation: 'He has big plans.',
        },
        {
          sentence: 'Die Stadt hat eine große Bevölkerung.',
          translation: 'The city has a large population.',
        },
        {
          sentence: 'Es ist ein großer Unterschied.',
          translation: "It's a big difference.",
        },
        {
          sentence: 'Das ist ein großes Problem.',
          translation: 'That is a big problem.',
        },
      ],
    },
    {
      word: 'hoch',
      desc: "Adjective and adverb meaning 'high' or 'tall', indicating a great distance upward.",
      examples: [
        {
          sentence: 'Die Berge sind sehr hoch.',
          translation: 'The mountains are very high.',
        },
        {
          sentence: 'Er springt sehr hoch.',
          translation: 'He jumps very high.',
        },
        {
          sentence: 'Das Flugzeug fliegt hoch über den Wolken.',
          translation: 'The airplane flies high above the clouds.',
        },
        {
          sentence: 'Die Preise sind in letzter Zeit sehr hoch.',
          translation: 'Prices have been very high lately.',
        },
        {
          sentence: 'Das ist ein sehr hoher Turm.',
          translation: 'That is a very tall tower.',
        },
      ],
    },
    {
      word: 'so',
      desc: "Adverb meaning 'so' or 'such', used to indicate a degree or extent.",
      examples: [
        {
          sentence: 'Das ist so schön.',
          translation: 'That is so beautiful.',
        },
        {
          sentence: 'Es ist so heiß heute.',
          translation: 'It is so hot today.',
        },
        {
          sentence: 'Sie hat eine so nette Stimme.',
          translation: 'She has such a nice voice.',
        },
        {
          sentence: 'Er war so freundlich zu mir.',
          translation: 'He was so kind to me.',
        },
        {
          sentence: 'Warum bist du so traurig?',
          translation: 'Why are you so sad?',
        },
      ],
    },
    {
      word: 'folgen',
      desc: "Verb meaning 'to follow', to come or go after or behind someone or something.",
      examples: [
        {
          sentence: 'Bitte folgen Sie mir.',
          translation: 'Please follow me.',
        },
        {
          sentence: 'Die Kinder folgen ihren Eltern.',
          translation: 'The children follow their parents.',
        },
        {
          sentence: 'Die Tiere folgen dem Pfad.',
          translation: 'The animals follow the trail.',
        },
        {
          sentence: 'Wir folgen dem Fluss.',
          translation: 'We are following the river.',
        },
        {
          sentence: 'Die Soldaten folgen dem Befehl.',
          translation: 'The soldiers follow the command.',
        },
      ],
    },
    {
      word: 'Akt',
      desc: "Noun meaning 'act' or 'action', indicating a deed or process.",
      examples: [
        {
          sentence: 'Der erste Akt des Stücks beginnt.',
          translation: 'The first act of the play begins.',
        },
        {
          sentence: 'Ein Akt der Freundlichkeit kann viel bewirken.',
          translation: 'An act of kindness can make a big difference.',
        },
        {
          sentence: 'Die Regierung hat einen Akt erlassen.',
          translation: 'The government has issued an act.',
        },
        {
          sentence: 'Das war ein mutiger Akt.',
          translation: 'That was a brave act.',
        },
        {
          sentence: 'Sie hat den Akt der Geburt überlebt.',
          translation: 'She survived the act of birth.',
        },
      ],
    },
    {
      word: 'warum',
      desc: "Adverb meaning 'why', used to inquire about reasons or causes.",
      examples: [
        {
          sentence: 'Warum hast du das getan?',
          translation: 'Why did you do that?',
        },
        {
          sentence: 'Ich verstehe nicht, warum er das gesagt hat.',
          translation: "I don't understand why he said that.",
        },
        {
          sentence: 'Warum bist du so spät gekommen?',
          translation: 'Why did you come so late?',
        },
        {
          sentence: 'Kannst du mir sagen, warum sie gegangen ist?',
          translation: 'Can you tell me why she left?',
        },
        {
          sentence: 'Ich frage mich, warum das passiert ist.',
          translation: 'I wonder why that happened.',
        },
      ],
    },
    {
      word: 'fragen',
      desc: "Verb meaning 'to ask', to seek information or answers by inquiring.",
      examples: [
        {
          sentence: 'Kann ich dich etwas fragen?',
          translation: 'Can I ask you something?',
        },
        {
          sentence: 'Ich habe den Lehrer um Hilfe gefragt.',
          translation: 'I asked the teacher for help.',
        },
        {
          sentence: 'Frag ihn, ob er kommen will.',
          translation: 'Ask him if he wants to come.',
        },
        {
          sentence: 'Ich frage mich, ob das wahr ist.',
          translation: "I wonder if that's true.",
        },
        {
          sentence: 'Er hat mich nach meinem Namen gefragt.',
          translation: 'He asked me for my name.',
        },
      ],
    },
    {
      word: 'Männer',
      desc: "Noun meaning 'men', indicating male individuals or people of the masculine gender.",
      examples: [
        {
          sentence: 'Die Männer trafen sich zum Pokerabend.',
          translation: 'The men gathered for poker night.',
        },
        {
          sentence: 'Es gibt mehr Männer als Frauen in diesem Raum.',
          translation: 'There are more men than women in this room.',
        },
        {
          sentence: 'Die Männer waren aufgeregt für das Fußballspiel.',
          translation: 'The men were excited for the soccer game.',
        },
        {
          sentence: 'Männer und Frauen haben unterschiedliche Bedürfnisse.',
          translation: 'Men and women have different needs.',
        },
        {
          sentence: 'Die Männer in der Familie waren alle groß.',
          translation: 'The men in the family were all tall.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Veränderung, ging, Licht, Art, aus, müssen, Haus, Bild, versuchen, uns',
  words: [
    {
      word: 'Veränderung',
      desc: "Noun meaning 'change' or 'alteration', indicating the act or process of making something different.",
      examples: [
        {
          sentence: 'Die Veränderung des Wetters war drastisch.',
          translation: 'The change in the weather was drastic.',
        },
        {
          sentence: 'Wir müssen uns an die Veränderung gewöhnen.',
          translation: 'We must get used to the change.',
        },
        {
          sentence: 'Veränderung ist oft eine gute Sache.',
          translation: 'Change is often a good thing.',
        },
        {
          sentence: 'Es ist Zeit für eine Veränderung.',
          translation: "It's time for a change.",
        },
        {
          sentence: 'Die Veränderung der Politik war unvermeidlich.',
          translation: 'The change in politics was inevitable.',
        },
      ],
    },
    {
      word: 'ging',
      desc: "Past tense of the verb 'to go', indicating movement from one place to another.",
      examples: [
        {
          sentence: 'Er ging zum Supermarkt, um Lebensmittel zu kaufen.',
          translation: 'He went to the supermarket to buy groceries.',
        },
        {
          sentence: 'Sie ging gestern Abend ins Kino.',
          translation: 'She went to the movies last night.',
        },
        {
          sentence: 'Wir gingen durch den Park und genossen die Natur.',
          translation: 'We walked through the park and enjoyed the nature.',
        },
        {
          sentence: 'Ich ging zur Arbeit, als es zu regnen begann.',
          translation: 'I was going to work when it started to rain.',
        },
        {
          sentence: 'Er ging langsam die Treppe hinauf.',
          translation: 'He went slowly up the stairs.',
        },
      ],
    },
    {
      word: 'Licht',
      desc: "Noun meaning 'light', indicating illumination or the natural agent that makes things visible.",
      examples: [
        {
          sentence: 'Das Licht der Sonne scheint durch das Fenster.',
          translation: 'The sunlight shines through the window.',
        },
        {
          sentence: 'Kannst du bitte das Licht einschalten?',
          translation: 'Can you please turn on the light?',
        },
        {
          sentence: 'Es war dunkel, aber das Licht der Laterne half uns.',
          translation: 'It was dark, but the light of the lantern helped us.',
        },
        {
          sentence: 'Das Licht der Kerzen erzeugt eine gemütliche Atmosphäre.',
          translation: 'The light of the candles creates a cozy atmosphere.',
        },
        {
          sentence: 'Das Licht der Sterne erleuchtete den Nachthimmel.',
          translation: 'The light of the stars illuminated the night sky.',
        },
      ],
    },
    {
      word: 'Art',
      desc: "Noun meaning 'kind' or 'type', indicating a category or classification.",
      examples: [
        {
          sentence: 'Welche Art von Musik hörst du gerne?',
          translation: 'What kind of music do you like to listen to?',
        },
        {
          sentence: 'Es gibt viele verschiedene Arten von Hunden.',
          translation: 'There are many different types of dogs.',
        },
        {
          sentence: 'Diese Art von Verhalten ist inakzeptabel.',
          translation: 'This kind of behavior is unacceptable.',
        },
        {
          sentence: 'Die Art und Weise, wie er spricht, gefällt mir.',
          translation: 'I like the way he talks.',
        },
        {
          sentence: 'Es gibt keine andere Art, das zu tun.',
          translation: 'There is no other way to do it.',
        },
      ],
    },
    {
      word: 'aus',
      desc: "Preposition and adverb meaning 'off' or 'out', indicating movement away from the inside of something.",
      examples: [
        {
          sentence: 'Er ging aus dem Haus.',
          translation: 'He went out of the house.',
        },
        {
          sentence: 'Das Wasser ist aus der Flasche geflossen.',
          translation: 'The water flowed out of the bottle.',
        },
        {
          sentence: 'Die Katze sprang aus dem Fenster.',
          translation: 'The cat jumped out of the window.',
        },
        {
          sentence: 'Ich nahm das Buch aus der Tasche.',
          translation: 'I took the book out of the bag.',
        },
        {
          sentence: 'Die Kinder kamen aus dem Wald.',
          translation: 'The children came out of the forest.',
        },
      ],
    },
    {
      word: 'müssen',
      desc: "Modal verb meaning 'must' or 'need to', indicating necessity or obligation.",
      examples: [
        {
          sentence: 'Ich muss früh aufstehen, um zur Arbeit zu gehen.',
          translation: 'I must get up early to go to work.',
        },
        {
          sentence: 'Du musst das Formular ausfüllen, um teilzunehmen.',
          translation: 'You need to fill out the form to participate.',
        },
        {
          sentence: 'Wir müssen uns beeilen, sonst verpassen wir den Zug.',
          translation: 'We must hurry, or we will miss the train.',
        },
        {
          sentence: 'Sie muss die Hausaufgaben bis morgen machen.',
          translation: 'She must do the homework by tomorrow.',
        },
        {
          sentence: 'Die Kinder müssen um 8 Uhr im Bett sein.',
          translation: "The children must be in bed by 8 o'clock.",
        },
      ],
    },
    {
      word: 'Haus',
      desc: "Noun meaning 'house', indicating a building where people live.",
      examples: [
        {
          sentence: 'Wir haben ein neues Haus gekauft.',
          translation: 'We bought a new house.',
        },
        {
          sentence: 'Das Haus hat einen großen Garten.',
          translation: 'The house has a big garden.',
        },
        {
          sentence: 'Sie wohnen in einem alten Haus.',
          translation: 'They live in an old house.',
        },
        {
          sentence: 'Das Haus steht am Ende der Straße.',
          translation: 'The house is at the end of the street.',
        },
        {
          sentence: 'Unser Haus ist sehr gemütlich.',
          translation: 'Our house is very cozy.',
        },
      ],
    },
    {
      word: 'Bild',
      desc: "Noun meaning 'picture' or 'image', indicating a representation of a person, object, or scene.",
      examples: [
        {
          sentence: 'Das Bild hängt an der Wand.',
          translation: 'The picture is hanging on the wall.',
        },
        {
          sentence: 'Ich habe ein schönes Bild von meinem Hund.',
          translation: 'I have a nice picture of my dog.',
        },
        {
          sentence: 'Das Bild zeigt eine Landschaft.',
          translation: 'The image shows a landscape.',
        },
        {
          sentence: 'Er hat ein Bild seiner Familie in seinem Büro.',
          translation: 'He has a picture of his family in his office.',
        },
        {
          sentence: 'Das ist ein abstraktes Bild.',
          translation: 'That is an abstract picture.',
        },
      ],
    },
    {
      word: 'versuchen',
      desc: "Verb meaning 'to try' or 'to attempt', indicating an effort to do something.",
      examples: [
        {
          sentence: 'Ich werde versuchen, pünktlich zu sein.',
          translation: 'I will try to be on time.',
        },
        {
          sentence: 'Kannst du es bitte versuchen?',
          translation: 'Can you please try it?',
        },
        {
          sentence: 'Wir sollten es zumindest versuchen.',
          translation: 'We should at least try.',
        },
        {
          sentence: 'Er versucht, ein besserer Mensch zu sein.',
          translation: 'He is trying to be a better person.',
        },
        {
          sentence: 'Sie hat versucht, ihm zu helfen.',
          translation: 'She tried to help him.',
        },
      ],
    },
    {
      word: 'uns',
      desc: "Pronoun meaning 'us', indicating the speaker and one or more other people.",
      examples: [
        {
          sentence: 'Können Sie uns helfen?',
          translation: 'Can you help us?',
        },
        {
          sentence: 'Wir freuen uns auf das Wochenende.',
          translation: 'We are looking forward to the weekend.',
        },
        {
          sentence: 'Er hat uns zum Abendessen eingeladen.',
          translation: 'He invited us to dinner.',
        },
        {
          sentence: 'Wir sollten uns beeilen.',
          translation: 'We should hurry.',
        },
        {
          sentence: 'Sie hat uns ihre Pläne erklärt.',
          translation: 'She explained her plans to us.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'wieder, Tier, Punkt, Mutter, Welt, in der Nähe von, bauen, selbst, Erde, Vater',
  words: [
    {
      word: 'wieder',
      desc: "Adverb meaning 'again', indicating repetition or a return to a previous state.",
      examples: [
        {
          sentence: 'Wir sehen uns wieder nächste Woche.',
          translation: "We'll see each other again next week.",
        },
        {
          sentence: 'Kannst du das bitte wiederholen?',
          translation: 'Can you please repeat that?',
        },
        {
          sentence: 'Sie hat das Buch wieder gelesen.',
          translation: 'She read the book again.',
        },
        {
          sentence: 'Er ist wieder gesund.',
          translation: 'He is healthy again.',
        },
        {
          sentence: 'Es passiert immer wieder.',
          translation: 'It happens again and again.',
        },
      ],
    },
    {
      word: 'Tier',
      desc: "Noun meaning 'animal', indicating a living organism that is not a plant or human.",
      examples: [
        {
          sentence: 'Der Zoo hat viele verschiedene Tierarten.',
          translation: 'The zoo has many different species of animals.',
        },
        {
          sentence: 'Das ist ein gefährliches Tier.',
          translation: 'That is a dangerous animal.',
        },
        {
          sentence: 'Unser Haustier ist ein Hund.',
          translation: 'Our pet is a dog.',
        },
        {
          sentence: 'Es gibt viele wilde Tiere im Dschungel.',
          translation: 'There are many wild animals in the jungle.',
        },
        {
          sentence: 'Der Tiger ist ein Raubtier.',
          translation: 'The tiger is a predator.',
        },
      ],
    },
    {
      word: 'Punkt',
      desc: "Noun meaning 'point', indicating a specific moment or location.",
      examples: [
        {
          sentence: 'Ich habe den Punkt nicht verstanden.',
          translation: "I didn't understand the point.",
        },
        {
          sentence: 'Der Punkt, den du angesprochen hast, ist wichtig.',
          translation: 'The point you raised is important.',
        },
        {
          sentence: 'An diesem Punkt müssen wir eine Entscheidung treffen.',
          translation: 'At this point, we need to make a decision.',
        },
        {
          sentence: 'Sie haben den Punkt klar gemacht.',
          translation: 'They made the point clear.',
        },
        {
          sentence: 'Wir sind an einem kritischen Punkt angelangt.',
          translation: 'We have reached a critical point.',
        },
      ],
    },
    {
      word: 'Mutter',
      desc: "Noun meaning 'mother', indicating a female parent.",
      examples: [
        {
          sentence: 'Meine Mutter kocht das beste Essen.',
          translation: 'My mother cooks the best food.',
        },
        {
          sentence: 'Die Mutter kümmert sich um ihre Kinder.',
          translation: 'The mother takes care of her children.',
        },
        {
          sentence: 'Sie ist eine liebevolle Mutter.',
          translation: 'She is a loving mother.',
        },
        {
          sentence:
            'Die Mutter liest ihren Kindern eine Gute-Nacht-Geschichte vor.',
          translation: 'The mother reads a bedtime story to her children.',
        },
        {
          sentence: 'Meine Mutter ist meine beste Freundin.',
          translation: 'My mother is my best friend.',
        },
      ],
    },
    {
      word: 'Welt',
      desc: "Noun meaning 'world', indicating the planet Earth or the entirety of human existence.",
      examples: [
        {
          sentence: 'Die Welt dreht sich um die Sonne.',
          translation: 'The world revolves around the sun.',
        },
        {
          sentence: 'Es gibt so viel zu entdecken in dieser Welt.',
          translation: 'There is so much to discover in this world.',
        },
        {
          sentence: 'Die Welt ist ein wunderschöner Ort.',
          translation: 'The world is a beautiful place.',
        },
        {
          sentence: 'Wir leben in einer globalisierten Welt.',
          translation: 'We live in a globalized world.',
        },
        {
          sentence: 'Die Weltbevölkerung wächst ständig.',
          translation: 'The world population is constantly growing.',
        },
      ],
    },
    {
      word: 'in der Nähe von',
      desc: "Prepositional phrase meaning 'near', indicating proximity to a location.",
      examples: [
        {
          sentence: 'Das Restaurant ist in der Nähe von meinem Haus.',
          translation: 'The restaurant is near my house.',
        },
        {
          sentence: 'Wir wohnen in der Nähe von einem Park.',
          translation: 'We live near a park.',
        },
        {
          sentence: 'Der Bahnhof ist in der Nähe von unserem Hotel.',
          translation: 'The train station is near our hotel.',
        },
        {
          sentence: 'Es gibt einen Supermarkt in der Nähe von hier.',
          translation: 'There is a supermarket near here.',
        },
        {
          sentence: 'Wir suchen einen Parkplatz in der Nähe von dem Museum.',
          translation: 'We are looking for a parking space near the museum.',
        },
      ],
    },
    {
      word: 'bauen',
      desc: "Verb meaning 'to build' or 'to construct', indicating the creation of a structure or object.",
      examples: [
        {
          sentence: 'Sie bauen ein neues Haus.',
          translation: 'They are building a new house.',
        },
        {
          sentence: 'Wir planen, eine Brücke zu bauen.',
          translation: 'We plan to build a bridge.',
        },
        {
          sentence: 'Die Firma baut eine neue Fabrik.',
          translation: 'The company is building a new factory.',
        },
        {
          sentence: 'Er baut ein Regal für das Wohnzimmer.',
          translation: 'He is building a shelf for the living room.',
        },
        {
          sentence: 'Die Arbeiter bauen die Straße wieder auf.',
          translation: 'The workers are rebuilding the road.',
        },
      ],
    },
    {
      word: 'selbst',
      desc: "Adverb meaning 'self' or 'itself', indicating that the action is performed by the subject or the subject itself.",
      examples: [
        {
          sentence: 'Er hat das Buch selbst geschrieben.',
          translation: 'He wrote the book himself.',
        },
        {
          sentence: 'Sie hat das Problem selbst gelöst.',
          translation: 'She solved the problem herself.',
        },
        {
          sentence: 'Ich habe das Essen selbst gekocht.',
          translation: 'I cooked the food myself.',
        },
        {
          sentence: 'Die Kinder haben die Karten selbst gemalt.',
          translation: 'The children painted the cards themselves.',
        },
        {
          sentence: 'Das Auto fährt selbst.',
          translation: 'The car drives itself.',
        },
      ],
    },
    {
      word: 'Erde',
      desc: "Noun meaning 'earth', indicating the third planet from the sun or the soil or ground.",
      examples: [
        {
          sentence: 'Die Erde ist unser Zuhause.',
          translation: 'Earth is our home.',
        },
        {
          sentence: 'Pflanzen wachsen im Boden der Erde.',
          translation: 'Plants grow in the soil of the earth.',
        },
        {
          sentence: 'Die Erde dreht sich um die Sonne.',
          translation: 'The earth revolves around the sun.',
        },
        {
          sentence: 'Der Weltraumforscher erforscht die Geheimnisse der Erde.',
          translation: 'The space explorer explores the secrets of the earth.',
        },
        {
          sentence: 'Die Erde ist der einzige Planet, auf dem Leben existiert.',
          translation: 'Earth is the only planet where life exists.',
        },
      ],
    },
    {
      word: 'Vater',
      desc: "Noun meaning 'father', indicating a male parent.",
      examples: [
        {
          sentence: 'Mein Vater ist Ingenieur.',
          translation: 'My father is an engineer.',
        },
        {
          sentence: 'Der Vater spielt Fußball mit seinem Sohn.',
          translation: 'The father plays soccer with his son.',
        },
        {
          sentence: 'Er ist ein liebevoller Vater.',
          translation: 'He is a loving father.',
        },
        {
          sentence:
            'Der Vater liest seinem Kind eine Gute-Nacht-Geschichte vor.',
          translation: 'The father reads a bedtime story to his child.',
        },
        {
          sentence: 'Mein Vater ist mein Vorbild.',
          translation: 'My father is my role model.',
        },
      ],
    },
  ],
};

const section1: Section = {
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

export default section1;
