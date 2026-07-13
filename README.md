# ForgeOS

Ett öppet ramverk för vetenskapliga modeller — beskriv, jämför, transformera och simulera modeller från fysik, biologi, ekonomi, AI, klimat och statistik.

## Arkitektur (5 lager)

1. **Modellrepresentation** – Model, Quantity, Equation, Observable
2. **Exekvering** – Solver, SymbolicEngine, NumericalEngine
3. **Transformation** – relationer mellan modeller
4. **Koherens** – mått på likhet mellan modeller
5. **Applikation** – API, UI, promptmotor

## Kör systemet

1. Kopiera `backend/.env.example` till `backend/.env` och fyll i dina nycklar.
2. Bygg och starta:

```bash
docker-compose up -d
```

3. Öppna http://localhost:3000 (frontend) — backend-API finns på http://localhost:8000.

## Förbättringsförslag

| Område | Förbättring |
|---|---|
| AI-integration | Bättre prompt-engineering, fler modeller |
| Databas | Supabase för användare och modeller |
| Autentisering | Inloggning med JWT |
| Prestanda | Caching med Redis |
| Fler modeller | Utöka models.yaml |
| Fler transformationer | Koppla fler fält |
| Pedagogik | Steg-för-steg-förklaringar |
| UI | Bättre mobilanpassning |
