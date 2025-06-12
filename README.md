<h3 align="center">📚 Mimer Library API – Ett enkelt REST API för bibliotekshantering</h3>

---

## 📋 <a name="table">Innehåll</a>

1. 🤖 [Introduktion](#introduction)  
2. ⚙️ [Teknikstack](#tech-stack)  
3. 🔋 [Funktioner](#features)  
4. 🤸 [Snabbstart](#quick-start)  
5. 🕸️ [API Endpoints](#api-endpoints)  
6. 🙏 [Tack!](#thanks)

---

## <a name="introduction">🤖 Introduktion</a>

Det här projektet är ett REST API för ett litet bibliotek, byggt som en del av en kompetensbedömning för junior backend-utvecklare på Mimer.

API:t hanterar böcker och lån med minnesbaserad lagring – ingen databas krävs. Syftet är att visa tydlig struktur, RESTful design och bra felhantering.

---

## <a name="tech-stack">⚙️ Teknikstack</a>

- Node.js  
- Express  
- JavaScript (ES6)  
- Docker (valfritt för containerisering)  

---

## <a name="features">🔋 Funktioner</a>

- Lista böcker  
- Låna och lämna tillbaka böcker  
- Hantera användares lånade böcker  
- Validering och felhantering  
- Docker-konfiguration för enkel distribution  

---

## <a name="quick-start">🤸 Snabbstart</a>

### Klona repot:

```bash
git clone https://github.com/ditt-användarnamn/mimer-library-api.git
cd mimer-library-api
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

## <a name="api-endpoints">🕸️ API Endpoints</a>

| Metod | URL                     | Beskrivning                            |
|-------|-------------------------|--------------------------------------|
| GET   | `/v1/books`             | Lista alla böcker                     |
| POST  | `/v1/books/rent/:userId`| Låna en bok (skicka `bookId` i body) |
| GET   | `/v1/users/me/books`    | Visa lånade böcker för användaren    |
| POST  | `/v1/books/return/:bookId` | Lämna tillbaka en bok              |

---


<a name="thanks">🙏 Tack!</a>
