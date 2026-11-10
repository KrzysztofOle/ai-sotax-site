# AI_SOTAX — strona informacyjna

Publiczna, statyczna strona przedstawiająca **projekt AI_SOTAX** — lokalnego asystenta wiedzy dla biura rachunkowego SOTAX.

**Zakres publikacji:** opis koncepcji, planowanych funkcji i kierunku rozwoju. Nie jest to panel aplikacji, demonstrator z dostępem do danych ani publikacja dokumentacji technicznej. Brak formularzy, analityki, bibliotek zewnętrznych, kluczy i integracji z systemem księgowym.

## Publikacja

- Zawartość strony: `docs/index.html`, `docs/styles.css`, `docs/main.js`, `docs/favicon.svg`.
- Strona jest statyczna. Plik workflow `.github/workflows/pages.yml` przygotowuje publikację przez GitHub Pages.
- W GitHub: `Settings → Pages → Build and deployment → Source: GitHub Actions`, jeśli publikacja nie jest już włączona. Alternatywnie: `Deploy from a branch → main /docs`.
- Publiczny adres po poprawnym włączeniu GitHub Pages: `https://krzysztofole.github.io/ai-sotax-site/`. Adres uznawać za aktywny dopiero po sprawdzeniu odpowiedzi HTTP i ukończonego wdrożenia.

## Zasady redakcyjne

- Nie umieszczać parametrów zabezpieczeń, infrastruktury, konfiguracji urządzeń, sekretów, wewnętrznych procedur ani informacji o klientach.
- Nie ogłaszać gotowości usługi ani dostępności dla klientów, dopóki projekt nie zostanie rzeczywiście wdrożony i zatwierdzony.
- Przed zmianą publicznego tekstu sprawdzić jego zgodność z aktualnym statusem prac.
- Żadnych zależności sieciowych w kodzie strony i żadnego połączenia z modelem AI.

Strona i AI_SOTAX to **osobne repozytoria**; strona nie publikuje żadnego prywatnego pliku projektu.
