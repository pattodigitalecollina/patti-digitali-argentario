// ============================================================
// DATI DEL SITO: EVENTI E NOTIZIE
// Patto Digitale Argentario · Comenius
// ============================================================

const PATTO_DATA = {
  // ------------------------------------------------------------
  // PROSSIMI EVENTI (FUTURI)
  // ------------------------------------------------------------
  futureEvents: [
    {
      id: "ev-online-30nov",
      title: "Classi prime, facciamo un patto?",
      category: "Formazione & Dialogo",
      initiative: "Patto Argentario",
      isOnline: true,
      territory: "Online su ZOOM",
      date: "Lunedì 30 Novembre 2026",
      time: "Ore 20:45",
      location: "Piattaforma Zoom",
      locationBadge: "online", // 'cognola', 'povo', 'online'
      summary: "Pensato in particolare per i genitori delle classi prime della scuola primaria, ma aperto a tutta la comunità. Come educare al digitale? Quando il primo smartphone? Ha senso vietare? Spostamenti in autonomia.",
      speakers: "Daniele Cuder (MEC & Board Nazionale Patti Digitali) · Andrea Gobbi e Benedetta Bertolini (Genitori e referenti Patto Argentario)",
      zoomLink: "https://us06web.zoom.us/j/82794957513?pwd=CBBbWGe9PAed2PQCuaDUViWILKIaR2.1",
      zoomPasscode: "645405",
      posterPdf: "assets/eventi/meeting oline 30-11-26/Patto_Digitale_30_11_26_V3.pdf",
      posterImg: "assets/eventi/meeting oline 30-11-26/locandina-1.png",
      badge: "Incontro Online",
      badgeType: "warning",
      actionLabel: "Partecipa su Zoom",
      actionLink: "https://us06web.zoom.us/j/82794957513?pwd=CBBbWGe9PAed2PQCuaDUViWILKIaR2.1"
    },
    {
      id: "ev-giochi-28nov",
      title: "È la tua volta! Giochi da tavolo & Stracòt (Overcooked dal vivo)",
      category: "Giornate dell'Educare",
      initiative: "Giornate dell'Educare",
      isOnline: false,
      territory: "Cognola",
      date: "Sabato 28 Novembre 2026",
      time: "Ore 14:00 - 17:00",
      location: "Istituto Comenius, Cognola (Fascia 7-99 anni)",
      locationBadge: "cognola",
      summary: "Un pomeriggio interamente dedicato al gioco da tavolo e alla cooperazione per famiglie, ragazzi ed educatori. Highlight speciale: 'Stracòt', l'esilarante versione dal vivo di Overcooked a squadre in sfide da 8 minuti a colpi di dadi e fornelli con i volontari di Ludimus! A cura delle famiglie del Patto Argentario.",
      note: "Attività libera e gratuita con merenda offerta. È gradita la prenotazione.",
      signupLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5Nya907Gd99kCpAfuNyLZsid7UTZmsxHpq8YCGVB7QjcT1A/viewform",
      posterPdf: "assets/eventi/educare 2026/giornate_dell_educare_nov_26.pdf",
      posterImg: "assets/eventi/educare 2026/locandina-1.png",
      badge: "A Cognola",
      badgeType: "primary",
      actionLabel: "Prenota il tuo posto",
      actionLink: "https://docs.google.com/forms/d/e/1FAIpQLSf5Nya907Gd99kCpAfuNyLZsid7UTZmsxHpq8YCGVB7QjcT1A/viewform"
    },
    {
      id: "ev-coderdojo-19dic",
      title: "CoderDojo Elf Lab - Laboratori Natalizi",
      category: "Giornate dell'Educare",
      initiative: "Giornate dell'Educare",
      isOnline: false,
      territory: "Povo",
      date: "Sabato 19 Dicembre 2026",
      time: "Ore 14:30 - 16:30",
      location: "Spazio Zero a Povo, Via del Salè 1 (Fascia 7-15 anni)",
      locationBadge: "povo",
      summary: "CoderDojo Trento ti aspetta tra creatività digitale, videogiochi, biglietti luminosi, stampa e modellazione 3D ed elettronica a tema natalizio! Si può venire vestiti da elfi.",
      note: "Attività libera e gratuita con merenda offerta. Iscrizione obbligatoria.",
      signupLink: "https://www.eventbrite.it/e/registrazione-coderdojo-al-laboratorio-degli-elfi-19-dicembre-spazio-zero-povo-2002496959311",
      posterPdf: "assets/eventi/educare 2026/giornate_dell_educare_nov_26.pdf",
      posterImg: "assets/eventi/educare 2026/locandina-1.png",
      badge: "A Povo",
      badgeType: "success",
      actionLabel: "Iscriviti su Eventbrite",
      actionLink: "https://www.eventbrite.it/e/registrazione-coderdojo-al-laboratorio-degli-elfi-19-dicembre-spazio-zero-povo-2002496959311"
    }
  ],

  // ------------------------------------------------------------
  // EVENTI PASSATI
  // ------------------------------------------------------------
  pastEvents: [
    {
      id: "ev-past-14nov",
      title: "Missione: Come funziona? Laboratori di riparazione",
      category: "Giornate dell'Educare",
      territory: "Povo",
      date: "Sabato 14 Novembre 2026",
      time: "Ore 14:30 - 16:30",
      location: "Spazio Zero a Povo, Via del Salè 1",
      locationBadge: "povo",
      summary: "Due sfide per giovani curiosi: smontare ed esplorare i componenti di vecchie console retrò per capire come ripararle, e costruire meccanismi ed ingranaggi con LEGO tecnici.",
      posterPdf: "assets/eventi/educare 2026/giornate_dell_educare_nov_26.pdf",
      badge: "Svolto a Povo"
    },
    {
      id: "ev-past-10ott",
      title: "Fuori, si gioca! Giochi all'aperto",
      category: "Giornate dell'Educare",
      territory: "Cognola",
      date: "Sabato 10 Ottobre 2026",
      time: "Ore 14:00 - 17:00",
      location: "Istituto Comenius, Cognola",
      locationBadge: "cognola",
      summary: "Primo grande pomeriggio all'aria aperta alla riscoperta del gioco condiviso, animato dal gruppo Scout FSE, le famiglie del Patto Digitale Argentario-Comenius e le cooperative Geco e Kaleidoscopio. Raccolta idee per il nuovo spazio in collina.",
      posterPdf: "assets/eventi/educare 2026/giornate_dell_educare_nov_26.pdf",
      badge: "Svolto a Cognola"
    },
    {
      id: "ev-past-28feb",
      title: "Presentazione Ufficiale del Patto Digitale Argentario",
      category: "Comunità",
      territory: "Cognola",
      date: "28 Febbraio 2026",
      time: "Ore 20:30",
      location: "Teatro di Cognola",
      locationBadge: "cognola",
      summary: "La serata di battesimo del Patto di comunità con la partecipazione delle famiglie dell'Argentario, i docenti dell'IC Comenius e i rappresentanti della Circoscrizione.",
      badge: "Teatro di Cognola"
    }
  ],

  // ------------------------------------------------------------
  // NOTIZIE E AGGIORNAMENTI
  // ------------------------------------------------------------
  news: [
    {
      id: "news-1",
      title: "Aperto lo scaffale dedicato al digitale presso la Biblioteca dell'Argentario",
      type: "locale",
      categoryLabel: "Argentario & Trento",
      date: "Novembre 2026",
      summary: "Grazie alla preziosa collaborazione con la Biblioteca dell'Argentario, è attivo uno scaffale speciale con libri, saggi e guide educative per genitori, educatori e ragazzi sul tema dei media digitali e dell'equilibrio tra schermi e vita reale.",
      // Nessun pulsante 'Approfondisci' come richiesto!
      hasLink: false
    },
    {
      id: "news-campagna-smartphone",
      title: "Campagna Nazionale: 'Aspettando lo smartphone'",
      type: "nazionale",
      categoryLabel: "Iniziativa Nazionale",
      date: "Autunno 2026",
      summary: "Scopri la campagna promossa dalla rete nazionale dei Patti Digitali: strumenti, riflessioni pedagogiche e consigli pratici per supportare le famiglie nella scelta di attendere la fine della terza media prima di consegnare uno smartphone autonomo.",
      link: "https://aspettandolosmartphone.pattidigitali.it/",
      isExternal: true,
      hasLink: true,
      readMoreText: "Vai alla Campagna ↗"
    },
    {
      id: "news-2",
      title: "Il Patto Digitale Argentario-Comenius al III Meeting Nazionale a Milano",
      type: "locale",
      categoryLabel: "Argentario a Milano",
      date: "Ottobre 2026",
      summary: "L'esperienza del nostro territorio è stata portata al meeting nazionale di Milano-Bicocca come esempio di alleanza virtuosa tra genitori, scuola Comenius, Circoscrizione, cooperative e realtà locali.",
      link: "#territorio",
      hasLink: true,
      readMoreText: "Leggi la nostra rete"
    },
    {
      id: "news-3",
      title: "Patti Digitali: la rete nazionale si espande in tutta Italia",
      type: "nazionale",
      categoryLabel: "Rete Nazionale",
      date: "Autunno 2026",
      summary: "Dalle valli del Trentino a decine di comuni italiani: sempre più comunità scolastiche e territoriali scelgono patti di comunità per accompagnare con serenità le nuove generazioni nel mondo digitale.",
      link: "https://pattidigitali.it/",
      isExternal: true,
      hasLink: true,
      readMoreText: "Visita pattidigitali.it"
    }
  ]
};
