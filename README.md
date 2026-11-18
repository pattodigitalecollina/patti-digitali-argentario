# Patto Digitale Argentario · Comenius (Trento)

Sito web statico e landing page ufficiale del **Patto Digitale Argentario · Comenius**.
Promosso da genitori e comunità educante per accompagnare con consapevolezza e senso critico ragazze, ragazzi e famiglie nel mondo digitale.

---

## 🚀 Come visualizzare in locale

Puoi visualizzare il sito semplicemente aprendo il file `index.html` nel tuo browser preferito, oppure avviando un server locale:

```bash
python3 -m http.server 8000
```
e aprendo `http://localhost:8000`.

---

## ✏️ Come aggiornare Eventi e Notizie

Tutti gli eventi e le news sono centralizzati in [data.js](file:///home/agobbi/Documenti/PattiDigitali/data.js):

1. **Aggiungere un Evento:**
   Apri `data.js` e aggiungi un blocco dentro `events: [ ... ]`:
   ```javascript
   {
     id: "ev-4",
     title: "Titolo Evento",
     category: "Formazione",
     date: "15 Dicembre 2026",
     time: "Ore 20:30",
     location: "Teatro di Cognola",
     summary: "Descrizione breve dell'evento...",
     badge: "In arrivo",
     badgeType: "warning", // warning, success, primary
     actionLabel: "Iscriviti",
     actionLink: "#contatti"
   }
   ```

2. **Aggiungere una News:**
   Aggiungi un blocco dentro `news: [ ... ]`:
   ```javascript
   {
     id: "news-5",
     title: "Titolo della notizia",
     type: "locale", // oppure "nazionale"
     categoryLabel: "Argentario",
     date: "Dicembre 2026",
     summary: "Breve riassunto...",
     link: "#",
     readMoreText: "Leggi tutto"
   }
   ```

*Nota:* Puoi anche semplicemente chiedere a me di aggiungere o modificare un evento, ci penso io in automatico!

---

## 🌐 Pubblicazione su GitHub & Netlify

1. Inizializzare git:
   ```bash
   git init
   git add .
   git commit -m "Prima versione landing page Patto Digitale Argentario"
   ```
2. Caricare sul proprio repository GitHub.
3. Collegare a **Netlify** (con login GitHub) per avere URL gratuito `pattidigitali-argentario.netlify.app` e form di contatto funzionante senza backend.
