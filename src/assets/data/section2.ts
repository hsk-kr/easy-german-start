import { Lesson, Section } from '../../types/lesson';

const lesson1: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'jeder, neu, Arbeit, Teil, nehmen, erhalten, Ort, gemacht, leben, wo',
  words: [
    {
      word: 'jeder',
      desc: "Pronoun meaning 'any' or 'every', indicating all members of a group or any individual within a group.",
      examples: [
        {
          sentence: 'Jeder sollte die Regeln kennen.',
          translation: 'Everyone should know the rules.',
        },
        {
          sentence: 'Ich habe dieses Buch in jedem Geschäft gesucht.',
          translation: 'I searched for this book in every store.',
        },
        {
          sentence: 'Jeder Mensch hat das Recht auf Bildung.',
          translation: 'Every person has the right to education.',
        },
        {
          sentence: 'Es ist wichtig, dass jeder seinen Beitrag leistet.',
          translation: "It's important that everyone contributes.",
        },
        {
          sentence: 'Jeder Tag ist eine neue Chance.',
          translation: 'Every day is a new opportunity.',
        },
      ],
    },
    {
      word: 'neu',
      desc: "Adjective meaning 'new', indicating something recently created or introduced.",
      examples: [
        {
          sentence: 'Ich habe ein neues Auto gekauft.',
          translation: 'I bought a new car.',
        },
        {
          sentence: 'Sie trägt ein neues Kleid.',
          translation: 'She is wearing a new dress.',
        },
        {
          sentence: 'Wir haben eine neue Wohnung gefunden.',
          translation: 'We found a new apartment.',
        },
        {
          sentence: 'Das ist ein neuer Film von meinem Lieblingsregisseur.',
          translation: 'This is a new movie from my favorite director.',
        },
        {
          sentence: 'Es gibt viele neue Möglichkeiten.',
          translation: 'There are many new possibilities.',
        },
      ],
    },
    {
      word: 'Arbeit',
      desc: "Noun meaning 'work' or 'job', indicating tasks or duties performed to earn money.",
      examples: [
        {
          sentence: 'Ich habe heute viel Arbeit zu erledigen.',
          translation: 'I have a lot of work to do today.',
        },
        {
          sentence: 'Sie arbeitet als Lehrerin.',
          translation: 'She works as a teacher.',
        },
        {
          sentence: 'Die Arbeit macht mir Spaß.',
          translation: 'I enjoy the work.',
        },
        {
          sentence: 'Er sucht nach einer neuen Arbeit.',
          translation: 'He is looking for a new job.',
        },
        {
          sentence: 'Die Arbeit ist sehr anspruchsvoll.',
          translation: 'The job is very demanding.',
        },
      ],
    },
    {
      word: 'Teil',
      desc: "Noun meaning 'part' or 'portion', indicating a piece or component of a whole.",
      examples: [
        {
          sentence: 'Das ist nur ein kleiner Teil des Ganzen.',
          translation: 'That is only a small part of the whole.',
        },
        {
          sentence: 'Jeder hat seinen eigenen Teil beigetragen.',
          translation: 'Everyone has contributed their own part.',
        },
        {
          sentence: 'Ich möchte an diesem Projekt teilnehmen.',
          translation: 'I want to participate in this project.',
        },
        {
          sentence: 'Dieser Teil des Buches ist besonders interessant.',
          translation: 'This part of the book is particularly interesting.',
        },
        {
          sentence: 'Die Kinder haben einen großen Teil der Kuchen gegessen.',
          translation: 'The children ate a large part of the cake.',
        },
      ],
    },
    {
      word: 'nehmen',
      desc: "Verb meaning 'to take', indicating the action of grabbing or acquiring something.",
      examples: [
        {
          sentence: 'Kannst du mir bitte ein Foto von uns nehmen?',
          translation: 'Can you please take a photo of us?',
        },
        {
          sentence: 'Ich muss meine Medikamente nehmen.',
          translation: 'I have to take my medication.',
        },
        {
          sentence: 'Sie nahm das Buch aus dem Regal.',
          translation: 'She took the book from the shelf.',
        },
        {
          sentence: 'Ich nehme immer den Zug zur Arbeit.',
          translation: 'I always take the train to work.',
        },
        {
          sentence: 'Kannst du das Buch für mich nehmen?',
          translation: 'Can you take the book for me?',
        },
      ],
    },
    {
      word: 'erhalten',
      desc: "Verb meaning 'to get' or 'to receive', indicating the action of obtaining or being given something.",
      examples: [
        {
          sentence: 'Ich habe eine Einladung zur Party erhalten.',
          translation: 'I received an invitation to the party.',
        },
        {
          sentence: 'Sie hat ein Stipendium erhalten.',
          translation: 'She got a scholarship.',
        },
        {
          sentence: 'Wir haben die Nachricht erhalten.',
          translation: 'We received the message.',
        },
        {
          sentence: 'Er hat eine Auszeichnung für seine Arbeit erhalten.',
          translation: 'He received an award for his work.',
        },
        {
          sentence: 'Sie hat eine Antwort auf ihre Frage erhalten.',
          translation: 'She got an answer to her question.',
        },
      ],
    },
    {
      word: 'Ort',
      desc: "Noun meaning 'place', indicating a specific location or position.",
      examples: [
        {
          sentence: 'Wir treffen uns an einem sicheren Ort.',
          translation: 'We are meeting at a safe place.',
        },
        {
          sentence: 'Dieser Ort ist sehr schön.',
          translation: 'This place is very beautiful.',
        },
        {
          sentence: 'Kannst du mir den Ort zeigen, an dem es passiert ist?',
          translation: 'Can you show me the place where it happened?',
        },
        {
          sentence:
            'Es ist wichtig, einen festen Ort zu haben, an dem man sich treffen kann.',
          translation: "It's important to have a fixed place to meet.",
        },
        {
          sentence: 'Dieser Ort hat eine besondere Bedeutung für mich.',
          translation: 'This place has a special meaning for me.',
        },
      ],
    },
    {
      word: 'gemacht',
      desc: "Past participle of the verb 'machen', meaning 'made' or 'done', indicating completion of an action.",
      examples: [
        {
          sentence: 'Sie hat eine selbstgemachte Karte gemacht.',
          translation: 'She made a handmade card.',
        },
        {
          sentence: 'Das Bett ist schon gemacht.',
          translation: 'The bed is already made.',
        },
        {
          sentence: 'Die Reparaturen am Haus sind endlich gemacht worden.',
          translation: 'The repairs to the house have finally been made.',
        },
        {
          sentence:
            'Er hat einen Fehler gemacht, aber er hat ihn schnell korrigiert.',
          translation: 'He made a mistake, but he corrected it quickly.',
        },
        {
          sentence: 'Wir haben heute viel gemacht.',
          translation: 'We did a lot today.',
        },
      ],
    },
    {
      word: 'leben',
      desc: "Verb meaning 'to live', indicating the state of being alive or the experience of existence.",
      examples: [
        {
          sentence: 'Sie leben in einer großen Stadt.',
          translation: 'They live in a big city.',
        },
        {
          sentence: 'Das Dorf, in dem ich aufgewachsen bin, war sehr ruhig.',
          translation: 'The village where I grew up was very quiet.',
        },
        {
          sentence: 'Er hat ein erfülltes Leben geführt.',
          translation: 'He led a fulfilling life.',
        },
        {
          sentence: 'Wie leben die Menschen in anderen Ländern?',
          translation: 'How do people live in other countries?',
        },
        {
          sentence: 'Sie leben in einem schönen Haus am Strand.',
          translation: 'They live in a beautiful house by the beach.',
        },
      ],
    },
    {
      word: 'wo',
      desc: "Adverb meaning 'where', indicating the location or place of something or someone.",
      examples: [
        {
          sentence: 'Wo bist du?',
          translation: 'Where are you?',
        },
        {
          sentence: 'Wir wissen nicht, wo er ist.',
          translation: "We don't know where he is.",
        },
        {
          sentence: 'Kannst du mir sagen, wo das nächste Restaurant ist?',
          translation: 'Can you tell me where the nearest restaurant is?',
        },
        {
          sentence: 'Ich frage mich, wo sie jetzt ist.',
          translation: 'I wonder where she is now.',
        },
        {
          sentence: 'Das ist der Park, wo wir immer spazieren gehen.',
          translation: "That's the park where we always go for a walk.",
        },
      ],
    },
  ],
};

const lesson2: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'nach, zurück, wenig, nur, Runde, Mann, Jahr, kam, zeigen, jeder',
  words: [
    {
      word: 'nach',
      desc: "Preposition and adverb meaning 'after' or 'to', indicating time or direction.",
      examples: [
        {
          sentence: 'Wir treffen uns nach der Arbeit.',
          translation: "We'll meet after work.",
        },
        {
          sentence: 'Er kommt nach dem Abendessen.',
          translation: 'He is coming after dinner.',
        },
        {
          sentence: 'Wir fahren nach Berlin.',
          translation: "We're going to Berlin.",
        },
        {
          sentence: 'Sie sehnt sich nach Liebe.',
          translation: 'She longs for love.',
        },
        {
          sentence: 'Nach dem Regen kommt die Sonne.',
          translation: 'After the rain comes the sun.',
        },
      ],
    },
    {
      word: 'zurück',
      desc: "Adverb meaning 'back' or 'backward', indicating a return to a previous position or state.",
      examples: [
        {
          sentence: 'Bitte gehen Sie zurück.',
          translation: 'Please go back.',
        },
        {
          sentence: 'Er ist zurück in seiner Heimatstadt.',
          translation: 'He is back in his hometown.',
        },
        {
          sentence: 'Das Buch gehört zurück in die Bibliothek.',
          translation: 'The book belongs back in the library.',
        },
        {
          sentence: 'Wir müssen zurück zum Anfang.',
          translation: 'We have to go back to the beginning.',
        },
        {
          sentence: 'Geh nicht zurück zu deinem Ex.',
          translation: "Don't go back to your ex.",
        },
      ],
    },
    {
      word: 'wenig',
      desc: "Adjective meaning 'little' or 'few', indicating a small amount or quantity.",
      examples: [
        {
          sentence: 'Wir haben wenig Zeit.',
          translation: 'We have little time.',
        },
        {
          sentence: 'Er hat nur wenig Geld.',
          translation: 'He has only a little money.',
        },
        {
          sentence: 'Sie hat wenig Interesse an Politik.',
          translation: 'She has little interest in politics.',
        },
        {
          sentence: 'Ein wenig Glück kann viel bewirken.',
          translation: 'A little luck can go a long way.',
        },
        {
          sentence: 'Wir haben nur wenig zu verlieren.',
          translation: 'We have little to lose.',
        },
      ],
    },
    {
      word: 'nur',
      desc: "Adverb meaning 'only' or 'just', indicating exclusivity or limitation.",
      examples: [
        {
          sentence: 'Ich möchte nur eine kleine Portion.',
          translation: 'I would like only a small portion.',
        },
        {
          sentence: 'Er hat nur eine Stunde geschlafen.',
          translation: 'He slept only one hour.',
        },
        {
          sentence: 'Das ist nur ein Beispiel.',
          translation: 'That is just an example.',
        },
        {
          sentence: 'Wir haben nur wenig Zeit.',
          translation: 'We have only a little time.',
        },
        {
          sentence: 'Es dauert nur fünf Minuten.',
          translation: 'It only takes five minutes.',
        },
      ],
    },
    {
      word: 'Runde',
      desc: "Noun meaning 'round' or 'circle', indicating a circular or rounded shape or an event involving a series of activities.",
      examples: [
        {
          sentence: 'Der Tisch hat eine runde Form.',
          translation: 'The table has a round shape.',
        },
        {
          sentence: 'Wir spielen eine Runde Karten.',
          translation: "We're playing a round of cards.",
        },
        {
          sentence: 'Das Spiel hat zwei Runden.',
          translation: 'The game has two rounds.',
        },
        {
          sentence: 'Er machte eine Runde um den Park.',
          translation: 'He took a walk around the park.',
        },
        {
          sentence: 'Die Diskussion geht in die nächste Runde.',
          translation: 'The discussion moves on to the next round.',
        },
      ],
    },
    {
      word: 'Mann',
      desc: "Noun meaning 'man' or 'husband', indicating an adult male human.",
      examples: [
        {
          sentence: 'Er ist ein guter Mann.',
          translation: 'He is a good man.',
        },
        {
          sentence: 'Der Mann arbeitet hart.',
          translation: 'The man works hard.',
        },
        {
          sentence: 'Mein Mann und ich gehen heute Abend aus.',
          translation: 'My husband and I are going out tonight.',
        },
        {
          sentence: 'Der Mann öffnete die Tür.',
          translation: 'The man opened the door.',
        },
        {
          sentence: 'Die Männer spielen Fußball im Park.',
          translation: 'The men are playing soccer in the park.',
        },
      ],
    },
    {
      word: 'Jahr',
      desc: "Noun meaning 'year', indicating a period of time consisting of 365 or 366 days.",
      examples: [
        {
          sentence: 'Wir machen eine Reise nach Spanien nächstes Jahr.',
          translation: 'We are taking a trip to Spain next year.',
        },
        {
          sentence: 'Das Jahr hat vier Jahreszeiten.',
          translation: 'The year has four seasons.',
        },
        {
          sentence:
            'Mein Geburtstag ist im Januar, also beginne ich das Jahr mit Feiern.',
          translation:
            'My birthday is in January, so I start the year with celebrations.',
        },
        {
          sentence: 'Sie hat dieses Jahr viel erreicht.',
          translation: 'She has accomplished a lot this year.',
        },
        {
          sentence: 'Das war das beste Jahr meines Lebens.',
          translation: 'That was the best year of my life.',
        },
      ],
    },
    {
      word: 'kam',
      desc: "Past tense of the verb 'kommen', meaning 'came', indicating movement towards a location.",
      examples: [
        {
          sentence: 'Er kam gestern spät nach Hause.',
          translation: 'He came home late yesterday.',
        },
        {
          sentence: 'Sie kam zu mir und fragte nach Hilfe.',
          translation: 'She came to me and asked for help.',
        },
        {
          sentence: 'Wann kam dein Paket an?',
          translation: 'When did your package arrive?',
        },
        {
          sentence: 'Der Zug kam pünktlich an.',
          translation: 'The train arrived on time.',
        },
        {
          sentence: 'Er kam nicht zur Arbeit, weil er krank war.',
          translation: "He didn't come to work because he was sick.",
        },
      ],
    },
    {
      word: 'zeigen',
      desc: "Verb meaning 'to show' or 'to display', indicating presenting something to someone visually.",
      examples: [
        {
          sentence: 'Kannst du mir bitte den Weg zeigen?',
          translation: 'Can you please show me the way?',
        },
        {
          sentence: 'Er zeigte ihr das Foto seiner Familie.',
          translation: 'He showed her the picture of his family.',
        },
        {
          sentence: 'Sie zeigte ihm die E-Mail auf ihrem Handy.',
          translation: 'She showed him the email on her phone.',
        },
        {
          sentence: 'Der Lehrer zeigt den Schülern, wie man die Aufgabe löst.',
          translation:
            'The teacher shows the students how to solve the problem.',
        },
        {
          sentence: 'Sie zeigte ihm stolz ihre Auszeichnung.',
          translation: 'She proudly showed him her award.',
        },
      ],
    },
    {
      word: 'jeder',
      desc: "Pronoun meaning 'every' or 'each', indicating every individual or all members of a group.",
      examples: [
        {
          sentence: 'Jeder Mensch hat das Recht auf Bildung.',
          translation: 'Every person has the right to education.',
        },
        {
          sentence: 'In diesem Buch gibt es etwas für jeden.',
          translation: 'In this book, there is something for everyone.',
        },
        {
          sentence: 'Jeder Tag ist eine neue Chance.',
          translation: 'Each day is a new opportunity.',
        },
        {
          sentence: 'Die Aufgaben sind für jeden Schüler gleich.',
          translation: 'The tasks are the same for every student.',
        },
        {
          sentence: 'Jeder soll seinen Beitrag leisten.',
          translation: 'Everyone should make their contribution.',
        },
      ],
    },
  ],
};

const lesson3: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'gut, mir, geben, unsere, unter, Name, sehr, durch, nur, Formular',
  words: [
    {
      word: 'gut',
      desc: "Adjective meaning 'good' or 'well', indicating positive quality or condition.",
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
          sentence: 'Das ist eine gute Idee.',
          translation: 'That is a good idea.',
        },
        {
          sentence: 'Sie spricht gut Deutsch.',
          translation: 'She speaks German well.',
        },
        {
          sentence: 'Wir hatten eine gute Zeit zusammen.',
          translation: 'We had a good time together.',
        },
      ],
    },
    {
      word: 'mir',
      desc: "Pronoun meaning 'to me' or 'for me', indicating the recipient of an action or possession.",
      examples: [
        {
          sentence: 'Kannst du das Buch mir geben?',
          translation: 'Can you give me the book?',
        },
        {
          sentence: 'Das Geschenk ist für mir.',
          translation: 'The gift is for me.',
        },
        {
          sentence: 'Sie schickt mir eine E-Mail.',
          translation: 'She is sending me an email.',
        },
        {
          sentence: 'Das gehört mir.',
          translation: 'That belongs to me.',
        },
        {
          sentence: 'Mir geht es gut.',
          translation: "I'm doing well.",
        },
      ],
    },
    {
      word: 'geben',
      desc: "Verb meaning 'to give', indicating transferring possession or performing an action for someone.",
      examples: [
        {
          sentence: 'Kannst du mir bitte etwas Geld geben?',
          translation: 'Can you please give me some money?',
        },
        {
          sentence: 'Er gibt ihr eine Blume.',
          translation: 'He gives her a flower.',
        },
        {
          sentence: 'Wir geben dem Obdachlosen etwas zu essen.',
          translation: 'We give the homeless person something to eat.',
        },
        {
          sentence: 'Sie geben dem Projekt ihre volle Unterstützung.',
          translation: 'They give their full support to the project.',
        },
        {
          sentence: 'Gib niemals auf!',
          translation: 'Never give up!',
        },
      ],
    },
    {
      word: 'unsere',
      desc: "Possessive pronoun meaning 'our', indicating possession or ownership by a group.",
      examples: [
        {
          sentence: 'Unsere Familie plant einen Ausflug.',
          translation: 'Our family is planning a trip.',
        },
        {
          sentence: 'Das ist unsere Katze.',
          translation: 'That is our cat.',
        },
        {
          sentence: 'Unsere Lehrerin ist sehr nett.',
          translation: 'Our teacher is very nice.',
        },
        {
          sentence: 'Unsere Hausaufgaben sind schon fertig.',
          translation: 'Our homework is already done.',
        },
        {
          sentence: 'Das sind unsere Kinder.',
          translation: 'Those are our children.',
        },
      ],
    },
    {
      word: 'unter',
      desc: "Preposition meaning 'under' or 'below', indicating a position beneath or lower than something else.",
      examples: [
        {
          sentence: 'Die Katze ist unter dem Tisch.',
          translation: 'The cat is under the table.',
        },
        {
          sentence: 'Die Bücher liegen unter dem Bett.',
          translation: 'The books are under the bed.',
        },
        {
          sentence: 'Das Geschenk ist unter dem Weihnachtsbaum.',
          translation: 'The gift is under the Christmas tree.',
        },
        {
          sentence: 'Wir gehen unter dem Regenschirm.',
          translation: 'We are walking under the umbrella.',
        },
        {
          sentence: 'Das ist unter meiner Würde.',
          translation: 'That is beneath my dignity.',
        },
      ],
    },
    {
      word: 'Name',
      desc: "Noun meaning 'name', indicating the word or phrase by which a person, place, or thing is known or addressed.",
      examples: [
        {
          sentence: 'Wie ist Ihr Name?',
          translation: 'What is your name?',
        },
        {
          sentence: 'Mein Name ist Anna.',
          translation: 'My name is Anna.',
        },
        {
          sentence: 'Kannst du deinen Namen buchstabieren?',
          translation: 'Can you spell your name?',
        },
        {
          sentence: 'Wir haben den Namen des Restaurants vergessen.',
          translation: 'We forgot the name of the restaurant.',
        },
        {
          sentence: 'Sein Name kommt mir bekannt vor.',
          translation: 'His name sounds familiar to me.',
        },
      ],
    },
    {
      word: 'sehr',
      desc: "Adverb meaning 'very' or 'extremely', indicating a high degree or intensity.",
      examples: [
        {
          sentence: 'Sie ist sehr glücklich über die Nachricht.',
          translation: 'She is very happy about the news.',
        },
        {
          sentence: 'Er ist sehr intelligent.',
          translation: 'He is very intelligent.',
        },
        {
          sentence: 'Das Essen ist sehr lecker.',
          translation: 'The food is very delicious.',
        },
        {
          sentence: 'Wir haben uns sehr über den Besuch gefreut.',
          translation: 'We were very happy about the visit.',
        },
        {
          sentence: 'Es war ein sehr interessanter Film.',
          translation: 'It was a very interesting movie.',
        },
      ],
    },
    {
      word: 'durch',
      desc: "Preposition and adverb meaning 'through' or 'by means of', indicating movement within a space or method of action.",
      examples: [
        {
          sentence: 'Wir fahren durch den Tunnel.',
          translation: 'We are driving through the tunnel.',
        },
        {
          sentence: 'Die Nachricht verbreitete sich durch das Internet.',
          translation: 'The message spread through the internet.',
        },
        {
          sentence: 'Ich habe das Buch in zwei Tagen durchgelesen.',
          translation: 'I read the book in two days.',
        },
        {
          sentence: 'Er erreichte das Ziel durch harte Arbeit.',
          translation: 'He achieved the goal through hard work.',
        },
        {
          sentence: 'Wir gehen durch den Park.',
          translation: "We're walking through the park.",
        },
      ],
    },
    {
      word: 'nur',
      desc: "Adverb meaning 'only' or 'just', indicating exclusivity or limitation.",
      examples: [
        {
          sentence: 'Ich möchte nur einen kleinen Kaffee.',
          translation: 'I would like just a small coffee.',
        },
        {
          sentence: 'Er hat nur ein Buch.',
          translation: 'He has only one book.',
        },
        {
          sentence: 'Das ist nur ein Beispiel.',
          translation: 'That is just an example.',
        },
        {
          sentence: 'Wir haben nur wenig Zeit.',
          translation: 'We have only a little time.',
        },
        {
          sentence: 'Es dauert nur fünf Minuten.',
          translation: 'It only takes five minutes.',
        },
      ],
    },
    {
      word: 'Formular',
      desc: "Noun meaning 'form' or 'document', indicating a structured document for collecting information or giving instruction.",
      examples: [
        {
          sentence: 'Bitte füllen Sie das Formular aus.',
          translation: 'Please fill out the form.',
        },
        {
          sentence: 'Das Formular muss unterschrieben werden.',
          translation: 'The form must be signed.',
        },
        {
          sentence: 'Sie können das Formular online ausfüllen.',
          translation: 'You can fill out the form online.',
        },
        {
          sentence: 'Das ist das Antragsformular für die Krankenversicherung.',
          translation: 'That is the application form for health insurance.',
        },
        {
          sentence: 'Das Formular ist auf Englisch.',
          translation: 'The form is in English.',
        },
      ],
    },
  ],
};

const lesson4: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'Satz, groß, denken, sagen, Hilfe, niedrig, Linie, abweichen, wiederum, Ursache',
  words: [
    {
      word: 'Satz',
      desc: "Noun meaning 'sentence', indicating a complete grammatical unit typically consisting of a subject and predicate.",
      examples: [
        {
          sentence: 'Kannst du diesen Satz übersetzen?',
          translation: 'Can you translate this sentence?',
        },
        {
          sentence: 'Sie schrieb einen langen Satz in ihr Notizbuch.',
          translation: 'She wrote a long sentence in her notebook.',
        },
        {
          sentence: 'Jeder Satz in diesem Buch ist wichtig.',
          translation: 'Every sentence in this book is important.',
        },
        {
          sentence: 'Ich verstehe den letzten Satz nicht.',
          translation: "I don't understand the last sentence.",
        },
        {
          sentence: 'Er hat den Satz richtig ausgesprochen.',
          translation: 'He pronounced the sentence correctly.',
        },
      ],
    },
    {
      word: 'groß',
      desc: "Adjective meaning 'great' or 'large', indicating a considerable size, extent, or importance.",
      examples: [
        {
          sentence: 'Das ist ein großes Haus.',
          translation: 'That is a big house.',
        },
        {
          sentence: 'Er hat eine große Familie.',
          translation: 'He has a large family.',
        },
        {
          sentence: 'Das war ein großer Fehler.',
          translation: 'That was a big mistake.',
        },
        {
          sentence: 'Sie hat einen großen Beitrag geleistet.',
          translation: 'She has made a great contribution.',
        },
        {
          sentence: 'Die Veranstaltung war ein großer Erfolg.',
          translation: 'The event was a great success.',
        },
      ],
    },
    {
      word: 'denken',
      desc: "Verb meaning 'to think', indicating the mental process of considering or forming opinions and ideas.",
      examples: [
        {
          sentence: 'Ich denke oft über die Zukunft nach.',
          translation: 'I often think about the future.',
        },
        {
          sentence: 'Was denkst du über diese Idee?',
          translation: 'What do you think about this idea?',
        },
        {
          sentence: 'Er denkt, dass es eine gute Gelegenheit ist.',
          translation: "He thinks it's a good opportunity.",
        },
        {
          sentence: 'Sie denkt, dass sie den Test bestehen wird.',
          translation: 'She thinks she will pass the test.',
        },
        {
          sentence: 'Ich denke, es wird regnen.',
          translation: 'I think it will rain.',
        },
      ],
    },
    {
      word: 'sagen',
      desc: "Verb meaning 'to say', indicating the act of expressing words verbally.",
      examples: [
        {
          sentence: 'Was hast du gerade gesagt?',
          translation: 'What did you just say?',
        },
        {
          sentence: 'Sie sagte mir, dass sie später kommen wird.',
          translation: 'She told me she will come later.',
        },
        {
          sentence: 'Er sagte nichts über das Problem.',
          translation: "He didn't say anything about the problem.",
        },
        {
          sentence: 'Kannst du das noch einmal sagen?',
          translation: 'Can you say that again?',
        },
        {
          sentence: 'Sie sagte ihm die Wahrheit.',
          translation: 'She told him the truth.',
        },
      ],
    },
    {
      word: 'Hilfe',
      desc: "Noun meaning 'help', indicating assistance or support provided to someone in need.",
      examples: [
        {
          sentence: 'Kannst du mir bitte helfen?',
          translation: 'Can you please help me?',
        },
        {
          sentence: 'Sie benötigt dringend ärztliche Hilfe.',
          translation: 'She urgently needs medical help.',
        },
        {
          sentence: 'Er bat um Hilfe, als er sich verletzte.',
          translation: 'He asked for help when he got injured.',
        },
        {
          sentence: 'Die Feuerwehr kam zur Hilfe, als das Haus brannte.',
          translation:
            'The fire department came to help when the house was burning.',
        },
        {
          sentence: 'Wir sind dankbar für deine Hilfe.',
          translation: 'We are grateful for your help.',
        },
      ],
    },
    {
      word: 'niedrig',
      desc: "Adjective meaning 'low' or 'small in height', indicating a position or level below normal.",
      examples: [
        {
          sentence: 'Die Temperatur ist heute sehr niedrig.',
          translation: 'The temperature is very low today.',
        },
        {
          sentence: 'Das Einkommen der Familie ist zu niedrig.',
          translation: "The family's income is too low.",
        },
        {
          sentence: 'Der Preis ist zu niedrig für diese Qualität.',
          translation: 'The price is too low for this quality.',
        },
        {
          sentence: 'Sie hat einen niedrigen Blutdruck.',
          translation: 'She has low blood pressure.',
        },
        {
          sentence: 'Er hat eine niedrige Stimme.',
          translation: 'He has a low voice.',
        },
      ],
    },
    {
      word: 'Linie',
      desc: "Noun meaning 'line', indicating a long, narrow mark or band.",
      examples: [
        {
          sentence: 'Sie zog eine gerade Linie auf das Papier.',
          translation: 'She drew a straight line on the paper.',
        },
        {
          sentence: 'Die Linie auf der Karte zeigt den Weg.',
          translation: 'The line on the map shows the way.',
        },
        {
          sentence: 'Die Linie an der Kasse war lang.',
          translation: 'The line at the checkout was long.',
        },
        {
          sentence: 'Er hat eine Linie im Sand gezogen.',
          translation: 'He drew a line in the sand.',
        },
        {
          sentence: 'Das Flugzeug flog in einer geraden Linie.',
          translation: 'The plane flew in a straight line.',
        },
      ],
    },
    {
      word: 'abweichen',
      desc: "Verb meaning 'to differ' or 'to deviate', indicating a deviation or variance from a standard or norm.",
      examples: [
        {
          sentence: 'Seine Meinung weicht von der Mehrheit ab.',
          translation: 'His opinion differs from the majority.',
        },
        {
          sentence:
            'Die tatsächlichen Ergebnisse können von den Prognosen abweichen.',
          translation: 'The actual results may deviate from the forecasts.',
        },
        {
          sentence: 'Der Preis kann je nach Ort abweichen.',
          translation: 'The price may vary depending on the location.',
        },
        {
          sentence: 'Seine Handlungen weichen oft von seinen Worten ab.',
          translation: 'His actions often deviate from his words.',
        },
        {
          sentence: 'Wir dürfen nicht von unserem Ziel abweichen.',
          translation: 'We must not deviate from our goal.',
        },
      ],
    },
    {
      word: 'wiederum',
      desc: "Adverb meaning 'in turn' or 'again', indicating a reciprocal or sequential action.",
      examples: [
        {
          sentence: 'Er half mir, und ich wiederum half ihm.',
          translation: 'He helped me, and in turn, I helped him.',
        },
        {
          sentence: 'Sie war beleidigt, was wiederum mich verletzte.',
          translation: 'She was offended, which in turn hurt me.',
        },
        {
          sentence: 'Er hörte zu und wiederum erzählte er seine Geschichte.',
          translation: 'He listened, and in turn, he told his story.',
        },
        {
          sentence: 'Ich gab ihm Rat, und wiederum gab er mir Rat.',
          translation: 'I gave him advice, and in turn, he gave me advice.',
        },
        {
          sentence:
            'Wir waren uns beide ähnlich, wiederum auch unterschiedlich.',
          translation: 'We were both similar, yet again different.',
        },
      ],
    },
    {
      word: 'Ursache',
      desc: "Noun meaning 'cause', indicating the reason or motive behind a particular action or event.",
      examples: [
        {
          sentence: 'Die Ursache des Unfalls wird untersucht.',
          translation: 'The cause of the accident is being investigated.',
        },
        {
          sentence:
            'Stress kann eine Ursache für gesundheitliche Probleme sein.',
          translation: 'Stress can be a cause of health problems.',
        },
        {
          sentence:
            'Die Naturkatastrophe hatte verheerende Folgen, aber die Ursache ist unklar.',
          translation:
            'The natural disaster had devastating consequences, but the cause is unclear.',
        },
        {
          sentence: 'Die Krankheit hat verschiedene Ursachen.',
          translation: 'The illness has various causes.',
        },
        {
          sentence:
            'Es ist wichtig, die Ursache des Problems zu identifizieren.',
          translation: "It's important to identify the cause of the problem.",
        },
      ],
    },
  ],
};

const lesson5: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'viel, bedeuten, vor, Umzug, Recht, Junge, alt, zu, gleich, sie',
  words: [
    {
      word: 'viel',
      desc: "Adjective or adverb meaning 'much' or 'many', indicating a large quantity or extent.",
      examples: [
        {
          sentence: 'Es gibt viel zu tun.',
          translation: 'There is much to do.',
        },
        {
          sentence: 'Sie trinkt viel Wasser.',
          translation: 'She drinks a lot of water.',
        },
        {
          sentence: 'Das war viel Arbeit.',
          translation: 'That was a lot of work.',
        },
        {
          sentence: 'Es gibt viele Menschen hier.',
          translation: 'There are many people here.',
        },
        {
          sentence: 'Er verdient viel Geld.',
          translation: 'He earns a lot of money.',
        },
      ],
    },
    {
      word: 'bedeuten',
      desc: "Verb meaning 'to mean', indicating the intention or significance of something.",
      examples: [
        {
          sentence: 'Was bedeutet dieses Wort?',
          translation: 'What does this word mean?',
        },
        {
          sentence: 'Seine Handlungen bedeuten viel für mich.',
          translation: 'His actions mean a lot to me.',
        },
        {
          sentence:
            'Du kannst nicht immer wörtlich nehmen, was jemand sagt, es könnte etwas anderes bedeuten.',
          translation:
            "You can't always take literally what someone says, it could mean something else.",
        },
        {
          sentence: 'Dieser Ring bedeutet mir sehr viel.',
          translation: 'This ring means a lot to me.',
        },
        {
          sentence:
            'Seine Abwesenheit bedeutet, dass er nicht interessiert ist.',
          translation: 'His absence means he is not interested.',
        },
      ],
    },
    {
      word: 'vor',
      desc: "Preposition meaning 'before' or 'in front of', indicating a position or time prior to the present or a specified point.",
      examples: [
        {
          sentence: 'Er war vor mir im Büro.',
          translation: 'He was in the office before me.',
        },
        {
          sentence: 'Das passierte vor vielen Jahren.',
          translation: 'That happened many years ago.',
        },
        {
          sentence: 'Sie standen vor dem Gebäude.',
          translation: 'They stood in front of the building.',
        },
        {
          sentence: 'Wir müssen das Problem vor der nächsten Sitzung lösen.',
          translation: 'We need to solve the problem before the next meeting.',
        },
        {
          sentence: 'Vor dem Essen sollten wir uns die Hände waschen.',
          translation: 'Before eating, we should wash our hands.',
        },
      ],
    },
    {
      word: 'Umzug',
      desc: "Noun meaning 'move' or 'relocation', indicating the act of changing one's residence or location.",
      examples: [
        {
          sentence: 'Unser Umzug in die neue Wohnung war stressig.',
          translation: 'Our move to the new apartment was stressful.',
        },
        {
          sentence: 'Der Umzug in ein neues Land war aufregend.',
          translation: 'The relocation to a new country was exciting.',
        },
        {
          sentence: 'Der Umzug in die Stadt hat sich gelohnt.',
          translation: 'The move to the city was worth it.',
        },
        {
          sentence: 'Wir müssen den Umzug rechtzeitig planen.',
          translation: 'We need to plan the move in time.',
        },
        {
          sentence: 'Der Umzug war eine große Veränderung für die Familie.',
          translation: 'The move was a big change for the family.',
        },
      ],
    },
    {
      word: 'Recht',
      desc: "Noun meaning 'right' or 'law', indicating legal entitlement or the opposite of left.",
      examples: [
        {
          sentence: 'Jeder hat das Recht auf eine faire Behandlung.',
          translation: 'Everyone has the right to fair treatment.',
        },
        {
          sentence: 'Er hat das Recht, seine Meinung frei zu äußern.',
          translation: 'He has the right to express his opinion freely.',
        },
        {
          sentence: 'Sie kennen Ihre Rechte als Mieter.',
          translation: 'You know your rights as a tenant.',
        },
        {
          sentence: 'Das Buch liegt auf dem Tisch ganz rechts.',
          translation: 'The book is on the table all the way to the right.',
        },
        {
          sentence: 'Du hast recht, ich lag falsch.',
          translation: 'You are right, I was wrong.',
        },
      ],
    },
    {
      word: 'Junge',
      desc: "Noun meaning 'boy', indicating a male child or young male person.",
      examples: [
        {
          sentence: 'Der Junge spielt im Park.',
          translation: 'The boy is playing in the park.',
        },
        {
          sentence: 'Der Junge ist neugierig und aktiv.',
          translation: 'The boy is curious and active.',
        },
        {
          sentence: 'Er ist ein kluger Junge.',
          translation: 'He is a clever boy.',
        },
        {
          sentence: 'Der Junge lernt schnell.',
          translation: 'The boy learns quickly.',
        },
        {
          sentence: 'Die Mutter kümmert sich um ihren kleinen Jungen.',
          translation: 'The mother takes care of her little boy.',
        },
      ],
    },
    {
      word: 'alt',
      desc: "Adjective meaning 'old', indicating a considerable age or having existed for a long time.",
      examples: [
        {
          sentence: 'Das Haus ist sehr alt.',
          translation: 'The house is very old.',
        },
        {
          sentence: 'Mein Großvater ist 90 Jahre alt.',
          translation: 'My grandfather is 90 years old.',
        },
        {
          sentence: 'Das Auto hat einen sehr alten Motor.',
          translation: 'The car has a very old engine.',
        },
        {
          sentence:
            'Die Brücke wurde vor langer Zeit gebaut und ist noch immer in gutem Zustand.',
          translation:
            'The bridge was built a long time ago and is still in good condition.',
        },
        {
          sentence: 'Er liebt es, alte Geschichten zu erzählen.',
          translation: 'He loves to tell old stories.',
        },
      ],
    },
    {
      word: 'zu',
      desc: "Preposition meaning 'to' or 'too', indicating direction, purpose, or excessiveness.",
      examples: [
        {
          sentence: 'Wir gehen zu einem Konzert.',
          translation: 'We are going to a concert.',
        },
        {
          sentence: 'Er fährt zu seiner Arbeitsstelle.',
          translation: 'He is driving to his workplace.',
        },
        {
          sentence: 'Du hast zu viel gegessen.',
          translation: 'You have eaten too much.',
        },
        {
          sentence: 'Ich habe zu viel Zeit verloren.',
          translation: 'I have lost too much time.',
        },
        {
          sentence: 'Sie ging zu ihm und umarmte ihn.',
          translation: 'She went to him and hugged him.',
        },
      ],
    },
    {
      word: 'gleich',
      desc: "Adjective or adverb meaning 'same' or 'equal', indicating similarity or immediacy.",
      examples: [
        {
          sentence: 'Wir haben die gleichen Interessen.',
          translation: 'We have the same interests.',
        },
        {
          sentence: 'Sie sind gleich groß.',
          translation: 'They are the same height.',
        },
        {
          sentence: 'Er kam gleich nach der Arbeit nach Hause.',
          translation: 'He came home right after work.',
        },
        {
          sentence: 'Ich werde gleich mit der Arbeit beginnen.',
          translation: 'I will start working right away.',
        },
        {
          sentence: 'Die Ergebnisse waren fast gleich.',
          translation: 'The results were almost the same.',
        },
      ],
    },
    {
      word: 'sie',
      desc: "Pronoun meaning 'she' or 'they', indicating female or plural subject.",
      examples: [
        {
          sentence: 'Sie geht zur Arbeit.',
          translation: 'She is going to work.',
        },
        {
          sentence: 'Sie ist meine Schwester.',
          translation: 'She is my sister.',
        },
        {
          sentence: 'Sie sind die besten Freunde.',
          translation: 'They are the best friends.',
        },
        {
          sentence: 'Sie haben das Spiel gewonnen.',
          translation: 'They won the game.',
        },
        {
          sentence: 'Sie lachten über einen Witz.',
          translation: 'They laughed at a joke.',
        },
      ],
    },
  ],
};

const lesson6: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'alle, da, wenn, nach oben, Verwendung, Ihre, Weg, über, viele, dann',
  words: [
    {
      word: 'alle',
      desc: "Pronoun meaning 'all' or 'every', indicating the entirety or total quantity of something.",
      examples: [
        {
          sentence: 'Alle sind eingeladen.',
          translation: 'All are invited.',
        },
        {
          sentence: 'Ich habe alle Bücher gelesen.',
          translation: 'I have read all the books.',
        },
        {
          sentence: 'Alle sind gekommen.',
          translation: 'Everyone has come.',
        },
        {
          sentence: 'Wir haben alle gewonnen.',
          translation: 'We all won.',
        },
        {
          sentence: 'Er kennt alle Antworten.',
          translation: 'He knows all the answers.',
        },
      ],
    },
    {
      word: 'da',
      desc: "Adverb or conjunction meaning 'there' or 'since', indicating a location or reason.",
      examples: [
        {
          sentence: 'Ich bin nicht da.',
          translation: 'I am not there.',
        },
        {
          sentence: 'Er ist da drüben.',
          translation: 'He is over there.',
        },
        {
          sentence: 'Ich gehe dorthin, wo er ist.',
          translation: 'I am going there where he is.',
        },
        {
          sentence: 'Da es regnet, bleiben wir drinnen.',
          translation: "Since it's raining, we are staying indoors.",
        },
        {
          sentence: 'Da du so freundlich bist, danke ich dir.',
          translation: 'Since you are so kind, I thank you.',
        },
      ],
    },
    {
      word: 'wenn',
      desc: "Conjunction meaning 'when' or 'if', indicating a condition or time.",
      examples: [
        {
          sentence: 'Ich bin glücklich, wenn die Sonne scheint.',
          translation: 'I am happy when the sun is shining.',
        },
        {
          sentence: 'Wenn es regnet, brauchen wir einen Regenschirm.',
          translation: 'If it rains, we need an umbrella.',
        },
        {
          sentence: 'Wenn du kommst, werde ich da sein.',
          translation: 'When you come, I will be there.',
        },
        {
          sentence: 'Was würdest du tun, wenn du gewinnen würdest?',
          translation: 'What would you do if you won?',
        },
        {
          sentence: 'Wenn ich Zeit habe, werde ich helfen.',
          translation: 'If I have time, I will help.',
        },
      ],
    },
    {
      word: 'nach oben',
      desc: "Adverbial phrase meaning 'up' or 'upward', indicating a direction or motion toward a higher position.",
      examples: [
        {
          sentence: 'Der Ball flog nach oben.',
          translation: 'The ball flew up.',
        },
        {
          sentence: 'Bitte gehen Sie die Treppe nach oben.',
          translation: 'Please go up the stairs.',
        },
        {
          sentence: 'Die Preise steigen nach oben.',
          translation: 'The prices are rising up.',
        },
        {
          sentence: 'Er schaute nach oben zum Himmel.',
          translation: 'He looked up at the sky.',
        },
        {
          sentence: 'Die Temperatur geht nach oben.',
          translation: 'The temperature is going up.',
        },
      ],
    },
    {
      word: 'Verwendung',
      desc: "Noun meaning 'use' or 'utilization', indicating the act of employing or applying something for a purpose.",
      examples: [
        {
          sentence: 'Die Verwendung von Mobiltelefonen ist weit verbreitet.',
          translation: 'The use of mobile phones is widespread.',
        },
        {
          sentence:
            'Bitte beachten Sie die richtige Verwendung dieses Werkzeugs.',
          translation: 'Please pay attention to the correct use of this tool.',
        },
        {
          sentence: 'Die Verwendung von Plastiktüten ist umweltschädlich.',
          translation: 'The use of plastic bags is environmentally harmful.',
        },
        {
          sentence:
            'Die Verwendung von Symbolen erleichtert die Kommunikation.',
          translation: 'The use of symbols facilitates communication.',
        },
        {
          sentence:
            'Die Verwendung von Chemikalien erfordert Vorsichtsmaßnahmen.',
          translation: 'The use of chemicals requires precautions.',
        },
      ],
    },
    {
      word: 'Ihre',
      desc: "Possessive pronoun meaning 'your' (formal) or 'her', indicating ownership or possession by someone.",
      examples: [
        {
          sentence: 'Ihre Arbeit ist bewundernswert.',
          translation: 'Your work is admirable.',
        },
        {
          sentence: 'Können Sie Ihre Daten bestätigen?',
          translation: 'Can you confirm your data?',
        },
        {
          sentence: 'Ihre Familie ist sehr nett.',
          translation: 'Her family is very nice.',
        },
        {
          sentence: 'Ihre Meinung ist wichtig für uns.',
          translation: 'Your opinion is important to us.',
        },
        {
          sentence: 'Ihre Entscheidung war weise.',
          translation: 'Your decision was wise.',
        },
      ],
    },
    {
      word: 'Weg',
      desc: "Noun meaning 'way' or 'path', indicating a route or method of proceeding.",
      examples: [
        {
          sentence: 'Der Weg zum Park ist schön.',
          translation: 'The way to the park is beautiful.',
        },
        {
          sentence: 'Wir haben uns auf dem Weg verlaufen.',
          translation: 'We got lost on the way.',
        },
        {
          sentence: 'Es gibt viele Wege, um sein Ziel zu erreichen.',
          translation: "There are many ways to achieve one's goal.",
        },
        {
          sentence: 'Sie kennen den besten Weg dorthin.',
          translation: 'They know the best way there.',
        },
        {
          sentence:
            'Der Weg des geringsten Widerstands ist nicht immer der beste.',
          translation: 'The path of least resistance is not always the best.',
        },
      ],
    },
    {
      word: 'über',
      desc: "Preposition or adverb meaning 'about' or 'over', indicating a spatial or informational relation.",
      examples: [
        {
          sentence: 'Er spricht über seine Reisen.',
          translation: 'He talks about his travels.',
        },
        {
          sentence: 'Das Buch liegt über dem Tisch.',
          translation: 'The book is over the table.',
        },
        {
          sentence: 'Wir sind über die Brücke gegangen.',
          translation: 'We crossed over the bridge.',
        },
        {
          sentence: 'Der Film handelt über das Leben eines Künstlers.',
          translation: 'The movie is about the life of an artist.',
        },
        {
          sentence: 'Sie trägt einen Pullover über ihrem Hemd.',
          translation: 'She wears a sweater over her shirt.',
        },
      ],
    },
    {
      word: 'viele',
      desc: "Adjective meaning 'many' or 'numerous', indicating a large quantity or number of something.",
      examples: [
        {
          sentence: 'Es gibt viele Bücher in der Bibliothek.',
          translation: 'There are many books in the library.',
        },
        {
          sentence: 'Viele Menschen besuchen den Park am Wochenende.',
          translation: 'Many people visit the park on weekends.',
        },
        {
          sentence: 'In der Stadt gibt es viele Geschäfte.',
          translation: 'There are many shops in the city.',
        },
        {
          sentence: 'Viele Studenten haben den Test bestanden.',
          translation: 'Many students passed the test.',
        },
        {
          sentence: 'Viele Länder nehmen an der Veranstaltung teil.',
          translation: 'Many countries participate in the event.',
        },
      ],
    },
    {
      word: 'dann',
      desc: "Adverb meaning 'then' or 'next', indicating a sequence of events or time.",
      examples: [
        {
          sentence: 'Wir gehen zuerst einkaufen und dann ins Kino.',
          translation: 'First, we go shopping and then to the movies.',
        },
        {
          sentence: 'Erst kommt das Frühstück, dann die Arbeit.',
          translation: 'First comes breakfast, then work.',
        },
        {
          sentence: 'Sie wusch das Geschirr und dann die Kleidung.',
          translation: 'She washed the dishes and then the clothes.',
        },
        {
          sentence:
            'Zuerst müssen wir den Vertrag unterzeichnen, dann können wir beginnen.',
          translation:
            'First, we need to sign the contract, then we can start.',
        },
        {
          sentence: 'Sie zog sich an und dann verließ sie das Haus.',
          translation: 'She got dressed and then she left the house.',
        },
      ],
    },
  ],
};

const lesson7: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'sie, schreiben, würde, wie, so, diese, sie, lange, machen, Sache',
  words: [
    {
      word: 'sie',
      desc: "Pronoun meaning 'them' or 'her', indicating a third-person plural or singular feminine subject.",
      examples: [
        {
          sentence: 'Ich sehe sie im Park.',
          translation: 'I see them in the park.',
        },
        {
          sentence: 'Sie hat sie gefragt.',
          translation: 'She has asked her.',
        },
        {
          sentence: 'Er hat sie unterstützt.',
          translation: 'He has supported them.',
        },
        {
          sentence: 'Sie hat sie zum Essen eingeladen.',
          translation: 'She has invited them for dinner.',
        },
        {
          sentence: 'Ich kenne sie seit Jahren.',
          translation: 'I have known her for years.',
        },
      ],
    },
    {
      word: 'schreiben',
      desc: "Verb meaning 'to write', indicating the act of creating text on a surface.",
      examples: [
        {
          sentence: 'Ich schreibe einen Brief an meinen Freund.',
          translation: 'I am writing a letter to my friend.',
        },
        {
          sentence: 'Er schreibt Gedichte in seiner Freizeit.',
          translation: 'He writes poems in his free time.',
        },
        {
          sentence: 'Sie schreibt ihre Gedanken in ihr Tagebuch.',
          translation: 'She writes her thoughts in her diary.',
        },
        {
          sentence: 'Wir müssen einen Bericht für die Schule schreiben.',
          translation: 'We have to write a report for school.',
        },
        {
          sentence: 'Sie schreiben die Namen auf die Liste.',
          translation: 'They are writing the names on the list.',
        },
      ],
    },
    {
      word: 'würde',
      desc: "Modal verb meaning 'would', indicating a conditional action or state.",
      examples: [
        {
          sentence: 'Ich würde gerne nach Japan reisen.',
          translation: 'I would like to travel to Japan.',
        },
        {
          sentence: 'Er würde es tun, wenn er könnte.',
          translation: 'He would do it if he could.',
        },
        {
          sentence: 'Sie würde ihn anrufen, wenn sie Zeit hätte.',
          translation: 'She would call him if she had time.',
        },
        {
          sentence: 'Wir würden gerne mehr darüber erfahren.',
          translation: 'We would like to learn more about it.',
        },
        {
          sentence: 'Sie würde es dir sagen, wenn du fragen würdest.',
          translation: 'She would tell you if you asked.',
        },
      ],
    },
    {
      word: 'wie',
      desc: "Adverb or conjunction meaning 'like' or 'how', indicating similarity or manner.",
      examples: [
        {
          sentence: 'Sie tanzt wie eine professionelle Tänzerin.',
          translation: 'She dances like a professional dancer.',
        },
        {
          sentence: 'Das schmeckt wie meine Großmutter es gemacht hat.',
          translation: 'This tastes like how my grandmother made it.',
        },
        {
          sentence: 'Wie fühlst du dich?',
          translation: 'How do you feel?',
        },
        {
          sentence: 'Wie ist das Wetter?',
          translation: 'What is the weather like?',
        },
        {
          sentence: 'Wie kann ich Ihnen helfen?',
          translation: 'How can I help you?',
        },
      ],
    },
    {
      word: 'so',
      desc: "Adverb meaning 'so' or 'thus', indicating a result or consequence.",
      examples: [
        {
          sentence: 'Er war müde, so ging er früh ins Bett.',
          translation: 'He was tired, so he went to bed early.',
        },
        {
          sentence: 'Sie ist krank, so bleibt sie zu Hause.',
          translation: 'She is sick, so she is staying home.',
        },
        {
          sentence: 'Es regnet, so nehmen wir einen Regenschirm.',
          translation: "It's raining, so we are taking an umbrella.",
        },
        {
          sentence:
            'Die Prüfung war schwer, so haben viele Studenten nicht bestanden.',
          translation: 'The exam was difficult, so many students did not pass.',
        },
        {
          sentence:
            'Er war nicht zufrieden, so hat er beschlossen zu kündigen.',
          translation: 'He was not satisfied, so he decided to resign.',
        },
      ],
    },
    {
      word: 'diese',
      desc: "Demonstrative pronoun meaning 'these', indicating specific items or persons near the speaker.",
      examples: [
        {
          sentence: 'Diese Bücher sind interessant.',
          translation: 'These books are interesting.',
        },
        {
          sentence: 'Kannst du mir diese Tasche geben?',
          translation: 'Can you give me these bags?',
        },
        {
          sentence: 'Diese Leute kenne ich nicht.',
          translation: "I don't know these people.",
        },
        {
          sentence: 'Diese Schuhe sind zu klein.',
          translation: 'These shoes are too small.',
        },
        {
          sentence: 'Diese Farben gefallen mir.',
          translation: 'I like these colors.',
        },
      ],
    },
    {
      word: 'sie',
      desc: "Pronoun meaning 'her' or 'them', indicating possession or third-person plural subject.",
      examples: [
        {
          sentence: 'Ich habe sie gestern gesehen.',
          translation: 'I saw her yesterday.',
        },
        {
          sentence: 'Sie hat ihre Eltern angerufen.',
          translation: 'She called her parents.',
        },
        {
          sentence: 'Sie haben sie um Hilfe gebeten.',
          translation: 'They asked her for help.',
        },
        {
          sentence: 'Sie hat ihnen das Buch gegeben.',
          translation: 'She gave them the book.',
        },
        {
          sentence: 'Sie hat sie zum Abendessen eingeladen.',
          translation: 'She invited them for dinner.',
        },
      ],
    },
    {
      word: 'lange',
      desc: "Adjective or adverb meaning 'long' or 'for a long time', indicating duration or extent.",
      examples: [
        {
          sentence: 'Wir haben lange auf dich gewartet.',
          translation: 'We waited for you for a long time.',
        },
        {
          sentence: 'Es dauert lange, bis der Kuchen fertig ist.',
          translation: 'It takes a long time until the cake is ready.',
        },
        {
          sentence: 'Die Reise dauerte lange.',
          translation: 'The journey lasted a long time.',
        },
        {
          sentence: 'Er hat lange geschlafen.',
          translation: 'He slept for a long time.',
        },
        {
          sentence: 'Es ist schon lange her.',
          translation: "It's been a long time.",
        },
      ],
    },
    {
      word: 'machen',
      desc: "Verb meaning 'to make' or 'to do', indicating an action or activity.",
      examples: [
        {
          sentence: 'Ich mache einen Kuchen.',
          translation: 'I am making a cake.',
        },
        {
          sentence: 'Was machst du heute Abend?',
          translation: 'What are you doing tonight?',
        },
        {
          sentence: 'Sie macht ihre Hausaufgaben.',
          translation: 'She is doing her homework.',
        },
        {
          sentence: 'Wir machen einen Spaziergang.',
          translation: 'We are taking a walk.',
        },
        {
          sentence: 'Er macht eine Pause.',
          translation: 'He is taking a break.',
        },
      ],
    },
    {
      word: 'Sache',
      desc: "Noun meaning 'thing' or 'matter', indicating an object or topic.",
      examples: [
        {
          sentence: 'Wo ist meine Sache?',
          translation: 'Where is my thing?',
        },
        {
          sentence: 'Das ist eine schwierige Sache.',
          translation: 'That is a difficult matter.',
        },
        {
          sentence: 'Wir müssen über diese Sache sprechen.',
          translation: 'We need to talk about this matter.',
        },
        {
          sentence: 'Es gibt noch viele Sachen zu erledigen.',
          translation: 'There are still many things to do.',
        },
        {
          sentence: 'Das ist nicht meine Sache.',
          translation: 'That is not my concern.',
        },
      ],
    },
  ],
};

const lesson8: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc: 'sehen, ihm, zwei, hat, suchen, mehr, Tag, könnte, gehen, kommen',
  words: [
    {
      word: 'sehen',
      desc: "Verb meaning 'to see', indicating the action of perceiving with the eyes.",
      examples: [
        {
          sentence: 'Ich sehe das Meer.',
          translation: 'I see the sea.',
        },
        {
          sentence: 'Kannst du mich sehen?',
          translation: 'Can you see me?',
        },
        {
          sentence: 'Sie sieht einen Film.',
          translation: 'She is watching a movie.',
        },
        {
          sentence: 'Wir können die Sterne sehen.',
          translation: 'We can see the stars.',
        },
        {
          sentence: 'Er sieht seinen Freund im Park.',
          translation: 'He sees his friend in the park.',
        },
      ],
    },
    {
      word: 'ihm',
      desc: "Pronoun meaning 'him', indicating a third-person singular masculine indirect object.",
      examples: [
        {
          sentence: 'Ich habe ihm ein Geschenk gegeben.',
          translation: 'I gave him a gift.',
        },
        {
          sentence: 'Sie hat ihm einen Brief geschrieben.',
          translation: 'She wrote him a letter.',
        },
        {
          sentence: 'Er hat ihm das Buch geliehen.',
          translation: 'He lent him the book.',
        },
        {
          sentence: 'Wir haben ihm geholfen.',
          translation: 'We helped him.',
        },
        {
          sentence: 'Sie hat ihm das Essen gebracht.',
          translation: 'She brought him the food.',
        },
      ],
    },
    {
      word: 'zwei',
      desc: "Number meaning 'two', indicating a quantity or count.",
      examples: [
        {
          sentence: 'Ich habe zwei Hunde.',
          translation: 'I have two dogs.',
        },
        {
          sentence: 'Wir haben zwei Kinder.',
          translation: 'We have two children.',
        },
        {
          sentence: 'Es sind zwei Äpfel übrig.',
          translation: 'There are two apples left.',
        },
        {
          sentence: 'Ich habe nur zwei Fragen.',
          translation: 'I have only two questions.',
        },
        {
          sentence: 'Er hat zwei Autos.',
          translation: 'He has two cars.',
        },
      ],
    },
    {
      word: 'hat',
      desc: "Third-person singular form of the verb 'to have', indicating possession or ownership.",
      examples: [
        {
          sentence: 'Er hat ein Haus.',
          translation: 'He has a house.',
        },
        {
          sentence: 'Sie hat eine Katze.',
          translation: 'She has a cat.',
        },
        {
          sentence: 'Es hat einen Garten.',
          translation: 'It has a garden.',
        },
        {
          sentence: 'Wir haben ein Problem.',
          translation: 'We have a problem.',
        },
        {
          sentence: 'Sie hat einen neuen Job.',
          translation: 'She has a new job.',
        },
      ],
    },
    {
      word: 'suchen',
      desc: "Verb meaning 'to look' or 'to search', indicating the action of seeking or trying to find something.",
      examples: [
        {
          sentence: 'Ich suche meine Schlüssel.',
          translation: 'I am looking for my keys.',
        },
        {
          sentence: 'Sie sucht nach einer Wohnung.',
          translation: 'She is looking for an apartment.',
        },
        {
          sentence: 'Er sucht einen Job.',
          translation: 'He is looking for a job.',
        },
        {
          sentence: 'Wir suchen nach Antworten.',
          translation: 'We are searching for answers.',
        },
        {
          sentence: 'Sie suchen nach einem Weg.',
          translation: 'They are searching for a way.',
        },
      ],
    },
    {
      word: 'mehr',
      desc: "Adverb or determiner meaning 'more', indicating a greater quantity or degree.",
      examples: [
        {
          sentence: 'Wir brauchen mehr Zeit.',
          translation: 'We need more time.',
        },
        {
          sentence: 'Er möchte mehr Geld verdienen.',
          translation: 'He wants to earn more money.',
        },
        {
          sentence: 'Es gibt mehr Leute im Park.',
          translation: 'There are more people in the park.',
        },
        {
          sentence: 'Sie möchte mehr Informationen.',
          translation: 'She wants more information.',
        },
        {
          sentence: 'Ich will mehr Bücher lesen.',
          translation: 'I want to read more books.',
        },
      ],
    },
    {
      word: 'Tag',
      desc: "Noun meaning 'day', indicating a period of time between one sunrise and the next.",
      examples: [
        {
          sentence: 'Heute ist ein schöner Tag.',
          translation: 'Today is a beautiful day.',
        },
        {
          sentence: 'Ich arbeite jeden Tag.',
          translation: 'I work every day.',
        },
        {
          sentence: 'Der Tag beginnt früh.',
          translation: 'The day starts early.',
        },
        {
          sentence: 'Wir haben den ganzen Tag Zeit.',
          translation: 'We have the whole day.',
        },
        {
          sentence: 'Der letzte Tag des Jahres.',
          translation: 'The last day of the year.',
        },
      ],
    },
    {
      word: 'könnte',
      desc: "Modal verb meaning 'could', indicating a possibility or ability in the past or present.",
      examples: [
        {
          sentence: 'Er könnte morgen kommen.',
          translation: 'He could come tomorrow.',
        },
        {
          sentence: 'Sie könnte es schaffen, wenn sie wollte.',
          translation: 'She could do it if she wanted to.',
        },
        {
          sentence: 'Es könnte eine gute Idee sein.',
          translation: 'It could be a good idea.',
        },
        {
          sentence: 'Ich könnte dir helfen, wenn du fragen würdest.',
          translation: 'I could help you if you asked.',
        },
        {
          sentence: 'Er könnte es verstehen, wenn es erklärt wird.',
          translation: 'He could understand it if it is explained.',
        },
      ],
    },
    {
      word: 'gehen',
      desc: "Verb meaning 'to go', indicating movement from one place to another.",
      examples: [
        {
          sentence: 'Ich gehe ins Kino.',
          translation: 'I am going to the cinema.',
        },
        {
          sentence: 'Sie geht jeden Morgen spazieren.',
          translation: 'She goes for a walk every morning.',
        },
        {
          sentence: 'Wir gehen zum Supermarkt.',
          translation: 'We are going to the supermarket.',
        },
        {
          sentence: 'Er geht zur Arbeit.',
          translation: 'He goes to work.',
        },
        {
          sentence: 'Sie geht in den Park.',
          translation: 'She is going to the park.',
        },
      ],
    },
    {
      word: 'kommen',
      desc: "Verb meaning 'to come', indicating movement towards a particular location.",
      examples: [
        {
          sentence: 'Ich komme aus Deutschland.',
          translation: 'I come from Germany.',
        },
        {
          sentence: 'Er kommt morgen zu Besuch.',
          translation: 'He is coming to visit tomorrow.',
        },
        {
          sentence: 'Sie kommt zum Abendessen.',
          translation: 'She is coming for dinner.',
        },
        {
          sentence: 'Wir kommen bald wieder.',
          translation: 'We will come back soon.',
        },
        {
          sentence: 'Sie kommt mit dem Zug.',
          translation: 'She is coming by train.',
        },
      ],
    },
  ],
};

const lesson9: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'tat, Anzahl, klingen, nicht, am meisten, Menschen, meine, über, wissen, Wasser',
  words: [
    {
      word: 'tat',
      desc: "Past tense of the verb 'to do', indicating an action that occurred in the past.",
      examples: [
        {
          sentence: 'Er tat, was er konnte.',
          translation: 'He did what he could.',
        },
        {
          sentence: 'Was hast du gestern getan?',
          translation: 'What did you do yesterday?',
        },
        {
          sentence: 'Sie tat es aus Liebe.',
          translation: 'She did it out of love.',
        },
        {
          sentence: 'Wir haben, was wir tun mussten, getan.',
          translation: 'We did what we had to do.',
        },
        {
          sentence: 'Es war die richtige Tat zur richtigen Zeit.',
          translation: 'It was the right action at the right time.',
        },
      ],
    },
    {
      word: 'Anzahl',
      desc: "Noun meaning 'number' or 'quantity', indicating a count or measurement.",
      examples: [
        {
          sentence: 'Die Anzahl der Teilnehmer ist begrenzt.',
          translation: 'The number of participants is limited.',
        },
        {
          sentence: 'Eine große Anzahl von Menschen kam zur Veranstaltung.',
          translation: 'A large number of people came to the event.',
        },
        {
          sentence: 'Die Anzahl der Stimmen hat sich geändert.',
          translation: 'The number of votes has changed.',
        },
        {
          sentence: 'Es gibt eine unbegrenzte Anzahl von Möglichkeiten.',
          translation: 'There are an unlimited number of possibilities.',
        },
        {
          sentence: 'Die Anzahl der Fehler muss minimiert werden.',
          translation: 'The number of errors must be minimized.',
        },
      ],
    },
    {
      word: 'klingen',
      desc: "Verb meaning 'to sound', indicating the quality of a sound or the act of producing a particular sound.",
      examples: [
        {
          sentence: 'Die Glocke klingelt.',
          translation: 'The bell rings.',
        },
        {
          sentence: 'Seine Stimme klingt fröhlich.',
          translation: 'His voice sounds happy.',
        },
        {
          sentence: 'Die Musik klingt schön.',
          translation: 'The music sounds beautiful.',
        },
        {
          sentence: 'Das klingt nach einer guten Idee.',
          translation: 'That sounds like a good idea.',
        },
        {
          sentence: 'Die Worte klingen wahr.',
          translation: 'The words sound true.',
        },
      ],
    },
    {
      word: 'nicht',
      desc: 'Adverb or particle indicating negation or denial.',
      examples: [
        {
          sentence: 'Das ist nicht wahr.',
          translation: 'That is not true.',
        },
        {
          sentence: 'Er kommt nicht.',
          translation: 'He is not coming.',
        },
        {
          sentence: 'Ich habe das nicht gesagt.',
          translation: 'I did not say that.',
        },
        {
          sentence: 'Das ist nicht richtig.',
          translation: 'That is not right.',
        },
        {
          sentence: 'Wir können nicht gehen.',
          translation: 'We cannot go.',
        },
      ],
    },
    {
      word: 'am meisten',
      desc: "Adverbial phrase meaning 'most' or 'mostly', indicating a superlative degree or majority.",
      examples: [
        {
          sentence: 'Er hat am meisten Geld.',
          translation: 'He has the most money.',
        },
        {
          sentence: 'Sie arbeitet am meisten.',
          translation: 'She works the most.',
        },
        {
          sentence: 'Das ist am meisten bekannt.',
          translation: 'That is most well-known.',
        },
        {
          sentence: 'Die Antwort liegt am meisten auf der Hand.',
          translation: 'The answer is mostly obvious.',
        },
        {
          sentence: 'Er verbringt am meisten Zeit mit seiner Familie.',
          translation: 'He spends the most time with his family.',
        },
      ],
    },
    {
      word: 'Menschen',
      desc: "Plural noun meaning 'people', indicating human beings collectively.",
      examples: [
        {
          sentence: 'Die Menschen sind unterschiedlich.',
          translation: 'People are different.',
        },
        {
          sentence: 'Die Stadt ist voller Menschen.',
          translation: 'The city is full of people.',
        },
        {
          sentence: 'Die Menschenmenge jubelte.',
          translation: 'The crowd cheered.',
        },
        {
          sentence: 'Die Menschen sind sozial.',
          translation: 'People are social.',
        },
        {
          sentence: 'Die Menschen müssen arbeiten.',
          translation: 'People have to work.',
        },
      ],
    },
    {
      word: 'meine',
      desc: "Possessive determiner meaning 'my', indicating ownership or association with the speaker.",
      examples: [
        {
          sentence: 'Das ist meine Tasche.',
          translation: 'That is my bag.',
        },
        {
          sentence: 'Meine Familie kommt aus Deutschland.',
          translation: 'My family is from Germany.',
        },
        {
          sentence: 'Meine Freunde sind hier.',
          translation: 'My friends are here.',
        },
        {
          sentence: 'Meine Meinung ist anders.',
          translation: 'My opinion is different.',
        },
        {
          sentence: 'Meine Katze ist schwarz.',
          translation: 'My cat is black.',
        },
      ],
    },
    {
      word: 'über',
      desc: "Preposition meaning 'over' or 'above', indicating a spatial or figurative position.",
      examples: [
        {
          sentence: 'Die Vögel fliegen über dem Haus.',
          translation: 'The birds are flying over the house.',
        },
        {
          sentence: 'Das Bild hängt über dem Sofa.',
          translation: 'The picture is hanging over the sofa.',
        },
        {
          sentence: 'Wir sprechen über das Wetter.',
          translation: 'We are talking about the weather.',
        },
        {
          sentence: 'Die Brücke führt über den Fluss.',
          translation: 'The bridge crosses over the river.',
        },
        {
          sentence: 'Die Nachricht verbreitet sich über das Internet.',
          translation: 'The news spreads over the internet.',
        },
      ],
    },
    {
      word: 'wissen',
      desc: "Verb meaning 'to know', indicating possession of knowledge or information.",
      examples: [
        {
          sentence: 'Ich weiß, wie man schwimmt.',
          translation: 'I know how to swim.',
        },
        {
          sentence: 'Er weiß viel über Geschichte.',
          translation: 'He knows a lot about history.',
        },
        {
          sentence: 'Sie weiß, wie man kocht.',
          translation: 'She knows how to cook.',
        },
        {
          sentence: 'Wir wissen, wo es langgeht.',
          translation: 'We know the way.',
        },
        {
          sentence: 'Sie wissen, was zu tun ist.',
          translation: 'They know what to do.',
        },
      ],
    },
    {
      word: 'Wasser',
      desc: "Noun meaning 'water', indicating the transparent, odorless, tasteless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.",
      examples: [
        {
          sentence: 'Ich trinke gerne Wasser.',
          translation: 'I like to drink water.',
        },
        {
          sentence: 'Der Fluss führt viel Wasser.',
          translation: 'The river carries a lot of water.',
        },
        {
          sentence: 'Das Wasser ist kalt.',
          translation: 'The water is cold.',
        },
        {
          sentence: 'Wir schwimmen im klaren Wasser.',
          translation: 'We swim in the clear water.',
        },
        {
          sentence: 'Wasser ist lebenswichtig.',
          translation: 'Water is vital for life.',
        },
      ],
    },
  ],
};

const lesson10: Lesson = {
  lessonTitle: '10 Common Words',
  lessonDesc:
    'als, Anruf, erste, die, können, nach unten, Seite, gewesen, jetzt, finden',
  words: [
    {
      word: 'als',
      desc: "Conjunction or comparative adverb meaning 'than' or 'as', indicating a comparison or simultaneous occurrence.",
      examples: [
        {
          sentence: 'Er ist größer als ich.',
          translation: 'He is taller than me.',
        },
        {
          sentence: 'Es ist besser als nichts.',
          translation: "It's better than nothing.",
        },
        {
          sentence: 'Sie arbeitet schneller als er.',
          translation: 'She works faster than him.',
        },
        {
          sentence: 'Das ist leichter gesagt als getan.',
          translation: "That's easier said than done.",
        },
        {
          sentence: 'Ich bin eher als er gekommen.',
          translation: 'I came earlier than him.',
        },
      ],
    },
    {
      word: 'Anruf',
      desc: "Noun meaning 'call', indicating a telephone communication or act of contacting someone by phone.",
      examples: [
        {
          sentence: 'Ich erwarte einen Anruf von ihr.',
          translation: 'I am expecting a call from her.',
        },
        {
          sentence: 'Er tätigte einen Anruf bei seinem Chef.',
          translation: 'He made a call to his boss.',
        },
        {
          sentence: 'Der Anruf war kurz.',
          translation: 'The call was short.',
        },
        {
          sentence: 'Kann ich einen Anruf tätigen?',
          translation: 'Can I make a call?',
        },
        {
          sentence: 'Der Anruf kam unerwartet.',
          translation: 'The call came unexpectedly.',
        },
      ],
    },
    {
      word: 'erste',
      desc: "Adjective meaning 'first', indicating the initial or earliest in a series or sequence.",
      examples: [
        {
          sentence: 'Das ist meine erste Erfahrung.',
          translation: 'This is my first experience.',
        },
        {
          sentence: 'Wir müssen die erste Seite lesen.',
          translation: 'We have to read the first page.',
        },
        {
          sentence: 'Das erste Auto war teuer.',
          translation: 'The first car was expensive.',
        },
        {
          sentence: 'Sie war die erste in der Schlange.',
          translation: 'She was the first in line.',
        },
        {
          sentence: 'Das erste Mal, als ich es versuchte, war es schwierig.',
          translation: 'The first time I tried it, it was difficult.',
        },
      ],
    },
    {
      word: 'die',
      desc: "Definite article meaning 'the', used to indicate a specific or previously mentioned noun.",
      examples: [
        {
          sentence: 'Das ist die Katze.',
          translation: 'That is the cat.',
        },
        {
          sentence: 'Wo ist die Bibliothek?',
          translation: 'Where is the library?',
        },
        {
          sentence: 'Ich kenne die Antwort.',
          translation: 'I know the answer.',
        },
        {
          sentence: 'Er ist der Mann, den ich suche.',
          translation: 'He is the man I am looking for.',
        },
        {
          sentence: 'Das sind die Bücher, die ich bestellt habe.',
          translation: 'Those are the books I ordered.',
        },
      ],
    },
    {
      word: 'können',
      desc: "Modal verb meaning 'may' or 'can', indicating ability, permission, or possibility.",
      examples: [
        {
          sentence: 'Ich kann schwimmen.',
          translation: 'I can swim.',
        },
        {
          sentence: 'Kannst du mir helfen?',
          translation: 'Can you help me?',
        },
        {
          sentence: 'Er kann gut singen.',
          translation: 'He can sing well.',
        },
        {
          sentence: 'Sie kann Deutsch sprechen.',
          translation: 'She can speak German.',
        },
        {
          sentence: 'Wir können morgen gehen.',
          translation: 'We can go tomorrow.',
        },
      ],
    },
    {
      word: 'nach unten',
      desc: "Adverbial phrase meaning 'down', indicating movement in a descending direction.",
      examples: [
        {
          sentence: 'Wir gehen nach unten.',
          translation: 'We are going down.',
        },
        {
          sentence: 'Das Objekt fällt nach unten.',
          translation: 'The object falls down.',
        },
        {
          sentence: 'Er klettert die Treppe nach unten.',
          translation: 'He is climbing the stairs down.',
        },
        {
          sentence: 'Das Thermometer zeigt nach unten.',
          translation: 'The thermometer points down.',
        },
        {
          sentence: 'Die Preise gehen nach unten.',
          translation: 'The prices are going down.',
        },
      ],
    },
    {
      word: 'Seite',
      desc: "Noun meaning 'side' or 'page', indicating a surface or leaf of a book or document.",
      examples: [
        {
          sentence: 'Auf welcher Seite steht das?',
          translation: 'On which side is that?',
        },
        {
          sentence: 'Die rechte Seite ist beschädigt.',
          translation: 'The right side is damaged.',
        },
        {
          sentence: 'Lesen Sie die nächste Seite.',
          translation: 'Read the next page.',
        },
        {
          sentence: 'Die Seite ist leer.',
          translation: 'The page is blank.',
        },
        {
          sentence: 'Er schrieb auf beiden Seiten des Papiers.',
          translation: 'He wrote on both sides of the paper.',
        },
      ],
    },
    {
      word: 'gewesen',
      desc: "Past participle of the verb 'sein' (to be), indicating the state of having been or existed in a particular place or condition.",
      examples: [
        {
          sentence: 'Ich bin noch nie dort gewesen.',
          translation: 'I have never been there.',
        },
        {
          sentence: 'Es ist bereits geschehen.',
          translation: 'It has already happened.',
        },
        {
          sentence: 'Wir sind gestern spät gewesen.',
          translation: 'We were late yesterday.',
        },
        {
          sentence: 'Bist du schon einmal in London gewesen?',
          translation: 'Have you ever been to London?',
        },
        {
          sentence: 'Sie sind seit Jahren verheiratet gewesen.',
          translation: 'They have been married for years.',
        },
      ],
    },
    {
      word: 'jetzt',
      desc: "Adverb meaning 'now', indicating the present moment or time.",
      examples: [
        {
          sentence: 'Ich bin jetzt fertig.',
          translation: 'I am finished now.',
        },
        {
          sentence: 'Wir müssen jetzt gehen.',
          translation: 'We have to go now.',
        },
        {
          sentence: 'Jetzt ist es zu spät.',
          translation: "Now it's too late.",
        },
        {
          sentence: 'Was machst du jetzt?',
          translation: 'What are you doing now?',
        },
        {
          sentence: 'Jetzt oder nie.',
          translation: 'Now or never.',
        },
      ],
    },
    {
      word: 'finden',
      desc: "Verb meaning 'to find', indicating the act of discovering or locating someone or something.",
      examples: [
        {
          sentence: 'Wo hast du das gefunden?',
          translation: 'Where did you find that?',
        },
        {
          sentence: 'Ich kann meine Schlüssel nicht finden.',
          translation: "I can't find my keys.",
        },
        {
          sentence: 'Sie finden den Weg nicht.',
          translation: 'They cannot find the way.',
        },
        {
          sentence: 'Ich finde es nicht gerecht.',
          translation: "I don't find it fair.",
        },
        {
          sentence: 'Hast du die Antwort gefunden?',
          translation: 'Did you find the answer?',
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
