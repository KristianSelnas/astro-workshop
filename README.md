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

**Mål:** Bli kjent med prosjektstrukturen, filbasert ruting, og hvordan man oppretter nye sider og komponenter.

**Steg:**

1. Åpne `src/pages/index.astro` og endre teksten på forsiden (for eksempel overskrift eller innhold).
2. Åpne layout-componenten og observer at layouts i Astro er en helt ordinær komponent med en `<slot/>` for å rendre children.
3. Lag en ny side: Opprett `about.astro` i `src/pages` med f.eks. overskrift og litt tekst.
4. Naviger mellom forsiden (/) og den nye about-siden (/about) og observer at hele siden lastes på nytt hver gang.
5. Endre tittelen på about-siden ved hjelp av `title` prop'en til `BaseLayout`.
6. Opprett en menykomponent `Menu.astro` i `src/components`. Legg inn lenker til forsiden og about-siden. Ta i bruk meny-komponenten i `BaseLayout.astro`.

> **Tips**
> Styling i er lokalt scopet i komponenter i Astro. Hvis du legger en `<style>`-blokk i en komponent vil stylingen kun gjelde lokalt i komponenten.

### 2. Unpoly og sømløs navigasjon

**Mål:** Se hvordan Unpoly forbedrer sidebytter ved å gjøre de sømløse og hurtige.

**Steg:**

1. Åpne `src/layouts/BaseLayout.astro` og observer at Unpoly er lagt til.
2. Finn `<a>`-taggene i menyen og legg til `up-follow`, for eksempel `<a href="/about" up-follow>Om</a>`.
3. Naviger mellom forskjellige sider og legg merke til at du nå slipper full sideoppdatering – bare innholdet skiftes raskt ut.
4. Legg til `up-transition="move-left"` på lenkene i menyen for å animere overgangen mellom sidene

### 3. Komponenter og interaktivitet

**Mål:** Lær å bruke Astro-komponenter og forstå hvordan state fungerer sammen med Unpoly.

**Steg:**

1. Legg til `<FormCounter>`-komponenten fra `src/components/FormCounter.astro` på forsiden.
   Legg merke hvordan den oppdaterer en teller med en POST request til serveren.
2. Legg inn attributtet `up-submit` på `<form>`-elementet. Legg merke at Unpoly nå overtar requesten og oppdaterer siden.
3. Legg på `up-target="#counter-wrapper"` i tilleg til `up-submit`. Unpoly vil nå kun byttet ut innholdet i `<div id="counter-wrapper">` med responsen fra serveren.
4. Skriv ut verdien av `{count}` _utenfor_ `counter-wrapper`-div'en og se at denne verdien ikke blir oppdatert.

### 4. Bruk av React island i Astro

**Mål:** Bli kjent med island-konseptet og integrasjon med andre rammeverk

**Steg:**

1. Installer Astros React-integrasjon (svar Ja på alle spørsmålene):

```sh
npx astro add react
```

2. Åpne `components/ReactCounter.tsx`. Hvordan forventer du at denne kompoenten skal fungere?
3. Legg inn `<ReactCounter>`-komponenten på en Astro-side. Fungerer komponenten slik du antok?
4. Ta en kikkk på [Astros dokumentasjon](https://docs.astro.build/en/guides/framework-components/#hydrating-interactive-components) og se om du får kompnenten til å fungere slik du forventer.
