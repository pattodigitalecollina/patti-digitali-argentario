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
      title: "Facciamo un patto?",
      category: "Formazione & Dialogo",
      initiative: "Patto Argentario",
      isOnline: true,
      territory: "Online su ZOOM",
      date: "Lunedì 30 Novembre 2026",
      dateIso: "2026-11-30",
      time: "Ore 20:45",
      location: "Piattaforma Zoom",
      locationBadge: "online", // 'cognola', 'povo', 'online'
      summary: "Organizzato e promosso dai rappresentanti e dalle rappresentanti delle classi prime, ma aperto a tutte e tutti. Come educare al digitale? Quando il primo smartphone? Ha senso vietare? Spostamenti in autonomia.",
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
      dateIso: "2026-11-28",
      time: "Ore 14:00 - 17:00",
      location: "Istituto Comenius, Cognola (Fascia 7-99 anni)",
      locationBadge: "cognola",
      summary: "Un pomeriggio interamente dedicato al gioco da tavolo e alla cooperazione per famiglie, ragazze, ragazzi, educatrici ed educatori. Highlight speciale: 'Stracòt', l'esilarante versione dal vivo di Overcooked a squadre in sfide da 8 minuti a colpi di dadi e fornelli con volontarie e volontari di Ludimus! A cura delle famiglie del Patto Argentario.",
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
      dateIso: "2026-12-19",
      time: "Ore 14:30 - 16:30",
      location: "Spazio Zero a Povo, Via del Salè 1 (Fascia 7-15 anni)",
      locationBadge: "povo",
      summary: "CoderDojo Trento ti aspetta tra creatività digitale, videogiochi, biglietti luminosi, stampa e modellazione 3D ed elettronica a tema natalizio! Chi vuole può venire in costume a tema elfi.",
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
      summary: "Due sfide per giovani curiose e curiosi: smontare ed esplorare i componenti di vecchie console retrò per capire come ripararle, e costruire meccanismi ed ingranaggi con LEGO tecnici.",
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
      summary: "Grazie alla preziosa collaborazione con la Biblioteca dell'Argentario, è attivo uno scaffale speciale con libri, saggi e guide educative per genitori, educatrici, educatori, ragazze e ragazzi sul tema dei media digitali e dell'equilibrio tra schermi e vita reale.",
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
  ],

  // ------------------------------------------------------------
  // DICONO DI NOI (Rassegna Stampa)
  // ------------------------------------------------------------
  press: [
    {
      id: "press-18nov",
      source: "l'Adige",
      date: "18 Novembre 2026",
      title: "Dall'impegno delle famiglie al cambiamento delle comunità",
      subtitle: "Il III meeting nazionale dei Patti Digitali a Milano Bicocca",
      summary: "Racconto del meeting nazionale alla Bicocca di Milano con testimonianze dal Trentino. L'obiettivo: creare una forte sinergia tra scuola, famiglie ed enti locali per affrontare insieme il progresso tecnologico.",
      image: "assets/press/Adige_18_11_26.jpeg"
    },
    {
      id: "press-22set",
      source: "l'Adige",
      date: "22 Settembre 2026",
      title: "Domani l'incontro alla scoperta del nuovo patto digitale",
      subtitle: "Picnic e giochi all'aperto al Parco di Martignano",
      summary: "L'invito del gruppo promotore di genitori per una giornata all'aria aperta all'insegna del gioco condiviso e del confronto tra famiglie ed educatori sui temi dell'educazione digitale.",
      image: "assets/press/Adige_22_09_26.jpeg"
    },
    {
      id: "press-09mar",
      source: "l'Adige",
      date: "9 Marzo 2026",
      title: "Sì al telefono, ma usato consapevolmente",
      subtitle: "Approvato e reso pubblico il Patto per la Circoscrizione Argentario",
      summary: "Cronaca della presentazione ufficiale al Teatro di Cognola insieme all'Istituto Comprensivo Comenius: la formazione con la dottoressa Cordella e l'avvio delle adesioni nella comunità.",
      image: "assets/press/adige_09_03_26.jpeg"
    }
  ],

  // ------------------------------------------------------------
  // PATTI DIGITALI ATTIVI IN TRENTINO (RETE PROVINCIALE)
  // 11 Patti Attivi + 1 In Avvio (Marzola)
  // ------------------------------------------------------------
  trentinoPacts: [
    {
      id: "patto-argentario",
      name: "Patto Digitale Argentario · Comenius",
      area: "Trento Est (Cognola, Martignano, Montevaccino, San Donà, Villamontagna)",
      status: "Patto Attivo",
      description: "Il nostro patto di comunità: alleanza tra famiglie dell'IC Comenius, Circoscrizione Argentario, cooperative e realtà del territorio.",
      isOurPact: true,
      hasEvent: false
    },
    {
      id: "patto-cembra",
      name: "Patti Digitali Valle di Cembra",
      area: "Valle di Cembra (Cembra Lisignago, Albiano, Giovo, Segonzano, Sover)",
      status: "Patto Attivo",
      description: "Comunità attiva con il Piano Giovani e la rassegna teatrale 'Aspettando lo smartphone, vado a teatro'.",
      hasEvent: true
    },
    {
      id: "patto-gardolo-meano",
      name: "Patto Digitale Gardolo e Meano",
      area: "Trento Nord (Circoscrizioni di Gardolo e Meano · IC Trento 7)",
      status: "Patto Attivo",
      description: "Comunità educante attiva tra scuola, consulta genitori e realtà associative territoriali.",
      hasEvent: false
    },
    {
      id: "patto-trento4",
      name: "Patto Digitale Trento 4",
      area: "Trento Sud (Madonna Bianca, Clarina, Casteller · IC Trento 4)",
      status: "Patto Attivo",
      description: "Tra le prime realtà promotrici a Trento, con linee guida condivise per famiglie e docenti.",
      hasEvent: false
    },
    {
      id: "patto-rotaliana",
      name: "Patti Digitali Rotaliana Königsberg",
      area: "Piana Rotaliana (Lavis, Mezzolombardo, Mezzocorona, Terre d'Adige, San Michele)",
      status: "Patto Attivo",
      description: "Patti territoriali promossi dal Distretto Famiglia con linee guida specifiche 0-6 e 6-14 anni.",
      hasEvent: false
    },
    {
      id: "patto-rovereto",
      name: "Patti Digitali Rovereto",
      area: "Vallagarina (Rovereto · IC Rovereto Nord e rete cittadina)",
      status: "Patto Attivo",
      description: "Comitato promotore e assemblee partecipate per l'attesa dello smartphone dopo i 14 anni.",
      hasEvent: false
    },
    {
      id: "patto-pergine",
      name: "Patto Digitale Pergine Valsugana",
      area: "Alta Valsugana (Pergine Valsugana · IC Pergine 1 e comunità)",
      status: "Patto Attivo",
      description: "Alleanza tra genitori, istituti scolastici e associazioni del territorio per il benessere digitale.",
      hasEvent: false
    },
    {
      id: "patto-bassavalsugana",
      name: "Patto Benessere Digitale Bassa Valsugana e Tesino",
      area: "Bassa Valsugana (Borgo Valsugana, Scurelle, Castel Ivano, Tesino)",
      status: "Patto Attivo",
      description: "Patto territoriale integrato con la Comunità di Valle e le scuole della Bassa Valsugana.",
      hasEvent: false
    },
    {
      id: "patto-altogarda",
      name: "Patto Digitale di Comunità Alto Garda",
      area: "Alto Garda e Ledro (Arco, Riva del Garda e Distretto Famiglia)",
      status: "Patto Attivo",
      description: "Adottato dal Comune di Arco con scuole e famiglie per posticipare lo smartphone dopo la seconda media.",
      hasEvent: false
    },
    {
      id: "patto-fiemme",
      name: "Patto Educativo Digitale Val di Fiemme",
      area: "Val di Fiemme (Cavalese, Predazzo, Comunità Territoriale di Fiemme)",
      status: "Patto Attivo",
      description: "Rete territoriale promossa con l'Istituto La Rosa Bianca, pediatri e il portale pattodigitalefiemme.it.",
      hasEvent: false
    },
    {
      id: "patto-laghi",
      name: "Patto Digitale Valle dei Laghi",
      area: "Valle dei Laghi (Vezzano, Vallelaghi, Madruzzo, Cavedine)",
      status: "Patto Attivo",
      description: "Alleanza educativa tra famiglie e istituzioni della valle per promuovere alternative e vita all'aria aperta.",
      hasEvent: false
    },
    {
      id: "patto-marzola",
      name: "Patto Digitale Marzola",
      area: "Collina Est & Vigolana (Povo, Villazzano, Vigolo Vattaro)",
      status: "In Avvio", // L'UNICO IN AVVIO!
      description: "Percorso in fase di costituzione per unire le comunità educanti dell'area Marzola e Altopiano della Vigolana.",
      isStarting: true,
      hasEvent: false
    }
  ],

  // ------------------------------------------------------------
  // PROSSIMI EVENTI NELLA PROVINCIA DI TRENTO
  // ------------------------------------------------------------
  trentinoEvents: [
    {
      id: "ev-cembra-28nov",
      title: "IT'S A MATCH! — Spettacolo Teatrale Ragazzi",
      category: "Teatro & Comunità",
      initiative: "Patti Digitali Valle di Cembra & Piano Giovani",
      territory: "Valle di Cembra",
      locationBadge: "cembra",
      date: "Sabato 28 Novembre 2026",
      dateIso: "2026-11-28",
      time: "Ore 20:30",
      location: "Teatro Comunale di Cembra (Cembra Lisignago)",
      summary: "Spettacolo teatrale della Fondazione TRG all'interno della rassegna 'Aspettando lo smartphone, vado a teatro' della Stagione Teatrale Ragazzi 2026/2027. Regia e drammaturgia di Micol Jalla con Martina Montini e Letizia Russo. Consigliato dai 10 anni (durata 60 min).",
      note: "Ingresso unico € 5 acquistabile presso la cassa del teatro la sera dell'evento o in prevendita con Trentino Spettacoli.",
      posterImg: "assets/eventi_patti_trentino/cembra_teatro_match_28nov.jpeg",
      actionLabel: "Apri Locandina Ufficiale",
      actionLink: "assets/eventi_patti_trentino/cembra_teatro_match_28nov.jpeg",
      isExternalEvent: true
    }
  ]
};
