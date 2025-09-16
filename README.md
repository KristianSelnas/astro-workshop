# 🚀 Astro + Unpoly Workshop 🌟

## ✨ Kom i gang

Følg disse stegene for å sette opp prosjektet og starte utviklingsserveren:

1.  **Klon repoet og installer avhengigheter:**
    ```sh
    git clone git@github.com:KristianSelnas/astro-workshop.git
    cd astro-workshop
    npm install
    ```
2.  **Start utviklingsserveren:**
    ```sh
    npm run dev
    ```
3.  **Åpne i nettleseren:** Gå til [http://localhost:4321](http://localhost:4321).
4.  **Anbefalt verktøy:**
    Installer Astro-plugin for din foretrukne IDE (f.eks. Visual Studio Code, IntelliJ IDEA) for best utviklingsopplevelse.

## 📚 Workshop-oppgaver

### 🔭 1. Grunnleggende Astro

Lær deg det grunnleggende i Astro og hvordan sidenavigasjon fungerer.

1.  **Endre forsideinnhold:** Åpne `src/pages/index.astro` og endre teksten på forsiden (f.eks. overskrift eller innhold).
2.  **Forstå Layouts:** Åpne layout-komponenten (`src/layouts/BaseLayout.astro`) og observer at layouts i Astro er vanlige komponenter med en `<slot/>` for å rendre barn.
3.  **Lag en ny side:** Opprett `about.astro` i `src/pages` med f.eks. en overskrift og litt tekst.
4.  **Navigasjon uten Unpoly:** Naviger mellom forsiden (/) og den nye about-siden (/about) og observer at hele siden lastes på nytt hver gang.

> **💡 Tips:** Styling i Astro er lokalt scopet i komponenter. Hvis du legger en `<style>`-blokk i en komponent, vil stylingen kun gjelde lokalt i den komponenten.

### 🧩 2. Komponenter i Astro

Bygg gjenbrukbare komponenter for å strukturere koden din.

1.  **Menykomponent:** Opprett en menykomponent `Menu.astro` i `src/components`. Legg inn lenker til forsiden og about-siden. Ta i bruk meny-komponenten i `BaseLayout.astro`.
2.  **Dynamisk tittel:** Endre tittelen på about-siden ved hjelp av `title` prop'en til `BaseLayout`.
3.  **Enkel Hello-komponent:** Lag en enkel komponent `Hello.astro` i `/components` med prop `name`. Bruk denne på forsiden og about-siden med ulike navn.

### 🌐 3. Dynamiske ruter og datahenting

Lær hvordan du håndterer dynamiske URL-er og henter data.

1.  **Opprett dynamisk rute:** Opprett filen `[id].astro` i `src/pages/ansatte/`.
2.  **Hent ansattdata:** Hent ut en ansatt fra databasen basert på ID fra request-URL-en.
3.  **Vis ansattinformasjon:** Vis navn, tittel og e-post for den ansatte.

> **💡 Tips:** Request-parametre kan hentes ut fra `Astro.params`.
>
> **🔍 Sjekk ut:** `fetchEmployeeById` i [`employee-service.ts`](src/utils/employee-service.ts).

### 🏝️ 4. React-integrasjon med Astro Islands

Integrer interaktive React-komponenter sømløst i Astro.

1.  **Installer React-integrasjon:** Installer Astros React-integrasjon (svar Ja på alle spørsmålene):
    ```sh
    npx astro add react
    ```
2.  **Forstå ReactCounter:** Åpne `components/ReactCounter.tsx`. Hvordan forventer du at denne komponenten skal fungere?
3.  **Legg til ReactCounter:** Legg inn `<ReactCounter>`-komponenten på en Astro-side. Fungerer komponenten slik du antok?
4.  **Hydrering av komponenter:** Ta en kikkk på [Astros dokumentasjon om hydrering](https://docs.astro.build/en/guides/framework-components/#hydrating-interactive-components) og se om du får komponenten til å fungere slik du forventer.

### ⚡ 5. Astro Client-side Routing

Opplev raskere navigasjon med Astros innebygde klientruting.

1.  **Aktiver ClientRouter:** Åpne `src/layouts/BaseLayout.astro` og legg til `<ClientRouter>` i `<head>`.
    ```astro
    import { ClientRouter } from "astro:transitions";
    ```
2.  **Test navigasjon:** Naviger mellom forskjellige sider og legg merke til at du nå slipper full sideoppdatering – bare innholdet skiftes raskt ut.

### 🔄 6. Unpoly for avansert interaktivitet

Dykk inn i Unpoly for å skape rike brukeropplevelser.

1.  **Fjern ClientRouter, aktiver Unpoly:** Åpne `src/layouts/BaseLayout.astro`. Fjern `ClientRouter` og kommenter inn Unpoly-oppsettet.
2.  **Aktiver `up-follow`:** Finn `<a>`-taggene i menyen og legg til `up-follow`, for eksempel `<a href="/about" up-follow>Om</a>`.
3.  **Test Unpoly-navigasjon:** Naviger mellom forskjellige sider og legg merke til at du nå slipper full sideoppdatering – bare innholdet skiftes raskt ut.
4.  **Animerte overganger:** Legg til `up-transition="move-left"` på lenkene i menyen for å animere overgangen mellom sidene.
5.  **Unpoly Layers:** Åpne `ansatte/index.astro`. Legg til `up-layer="new"` på "Legg til"-knappen. Klikk på knappen og se hva som skjer!
