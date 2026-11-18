// ============================================================
// DATI DEL SITO: EVENTI E NOTIZIE
// Modificare o aggiungere qui nuovi eventi e notizie!
// ============================================================

const PATTO_DATA = {
  // ------------------------------------------------------------
  // PROSSIMI EVENTI
  // ------------------------------------------------------------
  events: [
    {
      id: "ev-1",
      title: "Serata Parental Control: Pedagogia e Pratica",
      category: "Formazione", // Formazione, Territorio, Comunità
      date: "Prossimamente · In programmazione",
      time: "Ore 20:30",
      location: "Teatro di Cognola / Sala Circoscrizione Argentario",
      summary: "Come e quando usare i filtri famiglia? Una serata a due binari: confronto pedagogico (perché sì, perché no) e laboratorio pratico di configurazione su smartphone e tablet.",
      badge: "In arrivo",
      badgeType: "warning", // warning, primary, success
      actionLabel: "Dettagli & Iscrizioni",
      actionLink: "#contatti"
    },
    {
      id: "ev-2",
      title: "Pomeriggio Giochi da Tavolo & all'Aperto",
      category: "Comunità",
      date: "Sabato pomeriggio",
      time: "Dalle 15:00 alle 18:00",
      location: "Parco di Cognola / Spazio Giovani",
      summary: "Mettiamo in pratica la Regola 6: 'Creare Alternative'. Un momento per ragazzi/e e famiglie per giocare insieme, conoscersi e riscoprire il piacere delle relazioni senza schermi.",
      badge: "Ingresso Libero",
      badgeType: "success",
      actionLabel: "Partecipa",
      actionLink: "#contatti"
    },
    {
      id: "ev-3",
      title: "Tavolo di Lavoro Insegnanti e Genitori IC Comenius",
      category: "Scuola",
      date: "Incontro periodico",
      time: "Ore 17:30",
      location: "Istituto Comprensivo Comenius",
      summary: "Confronto permanente tra la comunità scolastica e il gruppo dei Patti Digitali per allineare le buone pratiche e le iniziative nelle classi primarie e secondarie di primo grado.",
      badge: "Rete Territoriale",
      badgeType: "primary",
      actionLabel: "Scopri la Rete",
      actionLink: "#territorio"
    }
  ],

  // ------------------------------------------------------------
  // NOTIZIE E AGGIORNAMENTI (Locali e Nazionali)
  // ------------------------------------------------------------
  news: [
    {
      id: "news-1",
      title: "Aperto l'angolo libri dedicato al digitale presso la Biblioteca dell'Argentario",
      type: "locale", // 'locale' oppure 'nazionale'
      categoryLabel: "Argentario & Trento",
      date: "Novembre 2026",
      summary: "Grazie alla collaborazione con la Biblioteca dell'Argentario, è ora disponibile uno scaffale speciale con letture, saggi e guide educative per genitori e ragazzi sul tema dei media digitali.",
      link: "#",
      readMoreText: "Approfondisci"
    },
    {
      id: "news-2",
      title: "Il Patto Digitale Argentario-Comenius presentato al III Meeting Nazionale",
      type: "locale",
      categoryLabel: "Argentario a Milano",
      date: "Ottobre 2026",
      summary: "L'esperienza del nostro territorio è stata portata al meeting nazionale di Milano-Bicocca come esempio di alleanza virtuosa tra genitori, scuola Comenius e Circoscrizione.",
      link: "#territorio",
      readMoreText: "Leggi la nostra storia"
    },
    {
      id: "news-3",
      title: "Patti Digitali Nazionali: cresce la rete in tutta Italia",
      type: "nazionale",
      categoryLabel: "Rete Nazionale",
      date: "Autunno 2026",
      summary: "Sempre più comunità, comuni e istituti comprensivi scelgono di adottare il patto per ritardare l'uso autonomo degli smartphone e promuovere un'educazione condivisa.",
      link: "https://pattidigitali.it/",
      isExternal: true,
      readMoreText: "Visita pattidigitali.it"
    },
    {
      id: "news-4",
      title: "La Regola 6: perché all'Argentario abbiamo scelto di 'Creare Alternative'",
      type: "locale",
      categoryLabel: "Buone Pratiche",
      date: "Settembre 2026",
      summary: "Non basta dire 'cosa non fare': per far crescere i ragazzi sereni servono spazi fisici di incontro, sport, parchi e momenti di socialità vera. Ecco le iniziative del nostro patto.",
      link: "#patto",
      readMoreText: "Scopri i 6 punti"
    }
  ]
};
