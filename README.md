# Astro + Unpoly Workshop 🌟

Velkommen! Her skal du lære grunnleggende Astro med Unpoly for interaktive nettsider uten tung SPA.

## Kom i gang

1. Klon repoet og installer avhengigheter
   ```sh
   git clone [URL-TIL-REPO]
   cd astro-workshop
   npm install
   npm run dev
   ```
2. Åpne http://localhost:4321 i nettleseren din
3. Anbefalt: Installer Astro-plugin i Visual Studio Code, IntelliJ IDEA, e.l.

## Workshop-oppgaver

### 1. Bli kjent med Astro

1. Åpne `src/pages/index.astro` og endre teksten på forsiden (for eksempel overskrift eller innhold).
2. Åpne layout-componenten og observer at layouts i Astro er en helt ordinær komponent med en `<slot/>` for å rendre children.
3. Lag en ny side: Opprett `about.astro` i `src/pages` med f.eks. overskrift og litt tekst.
4. Naviger mellom forsiden (/) og den nye about-siden (/about) og observer at hele siden lastes på nytt hver gang.

> **Tips**
> Styling i er lokalt scopet i komponenter i Astro. Hvis du legger en `<style>`-blokk i en komponent vil stylingen kun gjelde lokalt i komponenten.

### 2. Komponenter

1. Opprett en menykomponent `Menu.astro` i `src/components`. Legg inn lenker til forsiden og about-siden. Ta i bruk meny-komponenten i `BaseLayout.astro`.
2. Endre tittelen på about-siden ved hjelp av `title` prop'en til `BaseLayout`.
3. Lag en enkel komponent `Hello.astro` under `/components`, med prop `name`. Bruk denne på forsiden og about-siden med ulike navn.

### 3. Dynamiske ruter

1. Opprett filen `[id].astro` i `src/pages/ansatte/`
2. Hent ut en ansatt fra databasen, basert på ID fra request-url'en.
3. Vis navn, tittel og e-post for den ansatte.

> **Tips**
> Request-parametre kan hentes ut fra `Astro.params`.

> **Tips**
> Sjekk ut `fetchEmployeeById` i `employee-service`.

### 4. Bruk av React island i Astro

1. Installer Astros React-integrasjon (svar Ja på alle spørsmålene):

```sh
npx astro add react
```

2. Åpne `components/ReactCounter.tsx`. Hvordan forventer du at denne kompoenten skal fungere?
3. Legg inn `<ReactCounter>`-komponenten på en Astro-side. Fungerer komponenten slik du antok?
4. Ta en kikkk på [Astros dokumentasjon](https://docs.astro.build/en/guides/framework-components/#hydrating-interactive-components) og se om du får kompnenten til å fungere slik du forventer.

### 5. Client Router

1. Åpne `src/layouts/BaseLayout.astro` og legg til `<ClientRouter>` i `<head>`.
   > import { ClientRouter } from "astro:transitions";
2. Naviger mellom forskjellige sider og legg merke til at du nå slipper full sideoppdatering – bare innholdet skiftes raskt ut.

### 6. Unpoly

1. Åpne `src/layouts/BaseLayout.astro`. Fjern ClientRouter og kommenter inn Unpoly
2. Finn `<a>`-taggene i menyen og legg til `up-follow`, for eksempel `<a href="/about" up-follow>Om</a>`.
3. Naviger mellom forskjellige sider og legg merke til at du nå slipper full sideoppdatering – bare innholdet skiftes raskt ut.
4. Legg til `up-transition="move-left"` på lenkene i menyen for å animere overgangen mellom sidene
5. Åpne `ansatte/index.astro`. Legg til `up-layer="new"`på "Legg til"-knappen. Klikk på knappen, og se hva som skjer.
