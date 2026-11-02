# YTR AGENCY

Site one-page de YTR AGENCY : création de sites vitrines et e-commerce pour commerçants et associations, à Clichy (Île-de-France) et à distance.

## Structure

```
index.html                 Page unique (toutes les sections)
assets/css/style.css       Styles (couleurs et typographies en variables dans :root)
assets/js/main.js          Scripts et données à personnaliser
assets/img/captures/       Captures des réalisations
```

Site statique : aucune installation ni compilation. Les bibliothèques GSAP, ScrollTrigger et Lenis ainsi que les polices Inter sont chargées depuis un CDN.

## Voir le site en local

Ouvrir `index.html` dans le navigateur, ou lancer un petit serveur :

```
python3 -m http.server 8000
```

puis aller sur http://localhost:8000

## Personnaliser

Tout se trouve en haut de `assets/js/main.js` :

- `CLIENTS` : noms du bandeau de confiance
- `SECTORS` : contenu des onglets Secteurs
- `PROJECTS` : réalisations (nom, secteur, ville, lien, texte, captures)

Dans `index.html`, à compléter :

- e-mail et téléphone dans la section Contact (balises `<b></b>` vides)
- `[NUMERO]` du bouton WhatsApp (format international sans +, ex. 336XXXXXXXX)
- `[LINKEDIN]`, `[INSTAGRAM]`, `[SIRET]` dans le pied de page
- `[URL DU SITE]` et `[URL IMAGE DE PARTAGE 1200x630]` dans les balises SEO en haut du fichier
- liens Mentions légales et Politique de confidentialité

Le formulaire de devis n'envoie encore rien : brancher l'envoi dans le gestionnaire `submit` de `main.js` (Formspree, Netlify Forms, WordPress, etc.).

## Mettre en ligne

GitHub Pages : Settings > Pages > Source : branche `main`, dossier `/ (root)`.
Le site fonctionne aussi tel quel sur Netlify, Vercel, IONOS ou OVH (dépôt des fichiers à la racine).
