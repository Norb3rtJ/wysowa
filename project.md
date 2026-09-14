# Projekt strony: sprzedaż działki budowlanej w Wysowej-Zdroju

## Założenie robocze
Przygotowałem szkielet pod **statyczną stronę ofertową** `HTML + CSS + JS`, bo analizowana strona referencyjna (`patryk.maryniok.pl/opel/`) ma właśnie taki charakter: jedna długa strona sprzedażowa, bez CMS i bez rozbudowanego zaplecza.

To jest najbezpieczniejszy punkt startu:
- prosty hosting,
- szybkie ładowanie,
- pełna kontrola nad układem,
- brak niepotrzebnej złożoności.

## Szkielet projektu
Docelowy układ katalogów:

```text
/
├── index.html
├── project.md
├── assets/
│   ├── documents/
│   ├── icons/
│   └── images/
│       ├── gallery/
│       ├── hero/
│       └── location/
├── content/
│   └── offer.json
├── docs/
├── scripts/
│   └── main.js
└── styles/
    └── main.css
```

### Rola katalogów
- `index.html` - główny szkielet strony.
- `assets/images/hero` - zdjęcia główne, np. ujęcie lotnicze działki lub widok na okolicę.
- `assets/images/gallery` - galeria zdjęć działki, drogi dojazdowej, otoczenia, panoram, mediów, granic.
- `assets/images/location` - mapy, rzuty, szkice granic, zrzuty z geoportalu.
- `assets/documents` - PDF-y: mapka ewidencyjna, MPZP/WZ, numer KW, warunki zabudowy, media.
- `assets/icons` - ikony pomocnicze.
- `content/offer.json` - wszystkie dane oferty w jednym miejscu.
- `styles/main.css` - cała warstwa wizualna.
- `scripts/main.js` - interakcje: reveal on scroll, sticky header, modale galerii, kopiowanie danych.
- `docs` - materiały pomocnicze: treści, checklisty, notatki, wersje robocze.

## Analiza strony referencyjnej

### 1. Struktura sekcji
Strona referencyjna ma bardzo czytelny układ typu `single-offer landing page`.

Kolejność sekcji:
1. `Header`
2. `Hero`
3. `Oferta / podsumowanie`
4. `Specyfikacja`
5. `Stan i historia`
6. `Galeria`
7. `Kontakt / domknięcie`
8. `Footer`
9. `Modale` dla osi czasu i galerii

### 2. Co dokładnie jest na stronie referencyjnej

#### Header
- przyklejony do góry,
- ma logo / wordmark,
- ma prostą nawigację po anchorach,
- ma wyeksponowany kontakt telefoniczny,
- po scrollu zmienia wygląd: tło staje się bardziej zwarte i lekko rozmyte.

#### Hero
- pełnoekranowy pierwszy ekran,
- bardzo mocne zdjęcie główne,
- duży nagłówek w 2 liniach,
- 4 szybkie parametry na dole sekcji,
- klimat premium i „produktowy”.

#### Sekcja „Oferta”
- krótkie wejście tekstowe,
- 3-4 najważniejsze argumenty sprzedażowe,
- sekcja działa jak szybki elevator pitch.

#### Sekcja „Specyfikacja”
- lewa kolumna: twarde dane,
- prawa kolumna: lista cech / zalet,
- niżej dodatkowe pasy informacyjne i bloki pogłębiające temat,
- referencyjna strona rozbudowuje ten obszar bardzo mocno.

#### Sekcja „Stan i historia”
- opis aktualnego stanu,
- sekcja rozwijana `details/summary`,
- raport PDF,
- oś czasu z historią.

#### Galeria
- siatka zdjęć o zróżnicowanych proporcjach,
- kliknięcie otwiera modal,
- zdjęcia mają podpisy i numerację.

#### Kontakt
- finalny blok domykający sprzedaż,
- ponownie pokazana cena,
- telefon, e-mail, lokalizacja,
- prosty CTA bez formularza.

### 3. Styl wizualny strony referencyjnej

#### Kierunek artystyczny
- ciemny, premium, techniczny,
- dużo czerni i grafitu,
- czerwony akcent kolorystyczny,
- cienkie linie, siatki, blury, poświaty,
- estetyka „high-end brochure”.

#### Typografia
- font główny: `Manrope`,
- font pomocniczy / techniczny: `DM Mono`,
- wielkie nagłówki,
- uppercase w nawigacji i etykietach,
- duży kontrast między headline a danymi pomocniczymi.

#### Layout
- szeroki kontener,
- sekcje o dużym oddechu,
- układ oparty na gridzie,
- mocne kontrasty: duże formy + drobne techniczne etykiety.

#### Interakcje
- reveal on scroll,
- sticky header,
- modal galerii,
- modal osi czasu,
- kopiowanie wybranej wartości przyciskiem.

## Co warto przenieść 1:1 do strony działki
- logikę długiej strony sprzedażowej,
- układ `hero -> argumenty -> specyfikacja -> dokumenty -> galeria -> kontakt`,
- wyeksponowanie najważniejszych parametrów nad foldem,
- prostą nawigację po sekcjach,
- galerię w formie siatki z powiększeniem,
- sekcję dokumentów do pobrania,
- wyraźny panel kontaktowy na końcu.

## Czego nie kopiować 1:1
Nie warto przenosić sekcji stricte samochodowych:
- systemy asystujące,
- napęd i dane eksploatacyjne auta,
- Euro NCAP,
- historia CEP w obecnej formie.

To trzeba zastąpić sekcjami właściwymi dla działki.

## Proponowana struktura Twojej strony

### 1. Hero
Cel: od razu sprzedać lokalizację i potencjał.

Powinno się tu znaleźć:
- nazwa oferty, np. `Działka budowlana / Wysowa-Zdrój`,
- 3-4 kluczowe liczby,
- cena,
- lokalizacja,
- mocne zdjęcie lotnicze albo panoramiczne.

Szybkie parametry w hero:
- powierzchnia,
- przeznaczenie,
- dojazd,
- cena.

### 2. Sekcja „Dlaczego ta działka”
Zamiast opisu auta:
- krótki opis działki,
- największe atuty,
- 4 wyróżniki.

Przykład wyróżników:
- widok i otoczenie,
- status budowlany,
- media lub ich bliskość,
- dojazd całoroczny.

### 3. Sekcja „Specyfikacja”
To będzie odpowiednik sekcji technicznej auta.

Lewa kolumna:
- powierzchnia,
- numer działki,
- obręb,
- szerokość i długość,
- kształt,
- nachylenie terenu,
- dojazd,
- media,
- stan prawny,
- MPZP lub WZ.

Prawa kolumna:
- co można tu realnie zbudować,
- dla kogo ta działka jest dobra,
- walory inwestycyjne,
- walory prywatne / rekreacyjne.

### 4. Sekcja „Lokalizacja”
Tego brakuje w referencji, ale dla działki jest krytyczne.

Powinna zawierać:
- mapę,
- odległości do ważnych punktów,
- opis otoczenia,
- komunikację i dojazd.

### 5. Sekcja „Dokumenty i stan prawny”
To odpowiednik historii pojazdu.

Tu powinny być:
- księga wieczysta lub informacja o stanie prawnym,
- MPZP / WZ,
- mapa ewidencyjna,
- uzbrojenie terenu,
- informacje o granicach,
- ewentualne ograniczenia.

Jeśli chcesz zachować klimat osi czasu, można zamiast CEP zrobić:
- historia przygotowania działki,
- uzyskane dokumenty,
- kolejne etapy formalne.

### 6. Sekcja „Galeria”
Powinna pokazywać:
- widoki z działki,
- granice,
- drogę dojazdową,
- sąsiedztwo,
- ukształtowanie terenu,
- zdjęcia z drona,
- mapki poglądowe.

### 7. Sekcja „Otoczenie i potencjał”
To nowa sekcja, której w referencji nie ma, ale dla działki ma sens.

Można tu pokazać:
- uzdrowiskowy charakter Wysowej-Zdroju,
- bliskość szlaków, lasów, stoków, granicy,
- potencjał pod dom prywatny, drugi dom albo inwestycję turystyczną.

### 8. Sekcja „Kontakt”
Na końcu:
- cena,
- telefon,
- e-mail,
- lokalizacja,
- CTA do obejrzenia działki na miejscu.

## Proponowany kierunek stylu dla Twojej strony
Nie kopiowałbym czerwono-czarnego klimatu auta 1:1.

Dla działki w Wysowej-Zdroju lepszy będzie kierunek:
- głęboka zieleń,
- ciepły piaskowy / kamienny beż,
- złamana biel,
- ciemny grafit tylko pomocniczo,
- delikatne linie topograficzne zamiast motoryzacyjnej siatki.

### Styl, który proponuję
- premium, ale bardziej naturalny niż techniczny,
- duże zdjęcia, dużo powietrza,
- nagłówki mocne, ale mniej agresywne,
- klimat „spokojna inwestycja / miejsce do życia”, nie „maszyna / osiągi”.

## Minimalny zakres treści potrzebny do zbudowania właściwej strony
Żeby przejść z analizy do pełnego projektu, będą potrzebne:
- powierzchnia działki,
- cena,
- dokładna lokalizacja,
- numer działki lub dane ewidencyjne,
- status budowlany,
- informacje o mediach,
- dojazd,
- zdjęcia,
- dokumenty do pokazania lub pobrania,
- dane kontaktowe.

## Wniosek
Strona referencyjna jest bardzo dobrym wzorem pod względem:
- kolejności sekcji,
- sposobu prowadzenia użytkownika,
- eksponowania najważniejszych danych,
- jakości prezentacji oferty.

Dla działki trzeba jednak zmienić język wizualny z „motoryzacyjnego premium” na „nieruchomość premium w krajobrazie”.
