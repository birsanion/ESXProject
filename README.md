# ESX Web App


## Instrucțiuni pentru rularea aplicației local

Pentru a rula aplicație local se folosește [Laravel Sail](https://laravel.com/docs/12.x/sail).

### Dependențe

- [Docker](https://docs.docker.com/engine/install/)
- composer



Instalează dependențe PHP

    $ composer install

Setează variabile de mediu

    $ cp .env.example .env

Generază cheia de aplicație

    $ php artisan key:generate

Pornește serverul

    $ ./vendor/bin/sail up -d

Rulează migrațiile

    $ ./vendor/bin/sail php artisan migrate

- Folosește credențialele din .env pentru a te conecta la baza de date

Instalează dependențe JavaScript

    $ ./vendor/bin/sail npm install

Compilează resursele Frontend

    $ ./vendor/bin/sail npm run build

Aplicația va fi accesibila la adresa [localhost:9010](localhost:9010)

Oprește serverul

    $ ./vendor/bin/sail down


## Deployment

Pentru deployment se poate folosi platforma [Laravel Forge](https://forge.laravel.com/), prin care te poți conecta la diferiți cloud providers, precum Google Cloud Platform (GCP), Amazon Web Services (AWS), etc. În plus, Forge instalează și gestionează toate instrumentele necesare pentru a construi aplicații robuste Laravel, cum ar fi Nginx, MySQL și multe altele.

## Îmbunătățiri

- Verificarea adresei de mail la crearea contului (utilizatorul primește un mail cu un link de validare)
- Posibilitatea utilizatorul sa iși recupereze / reseteze parola
