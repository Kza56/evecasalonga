# Site evecasalonga.com

Site statique : aucun build, aucune dépendance. Tout ce qui est dans ce dossier se dépose tel quel à la racine de l'hébergement.

## Tester en local

    python -m http.server 8000

puis ouvrir http://localhost:8000 (un double-clic sur index.html ne suffit pas : les liens pointent vers des dossiers).

## Mise en ligne sur GitHub Pages

1. Créer un dépôt **public** (ex. `evecasalonga-site`) et y pousser le contenu de ce dossier, fichiers cachés compris (`.nojekyll`, `CNAME`) :

       git init && git add -A && git commit -m "Site Eve Casalonga"
       git branch -M main
       git remote add origin git@github.com:Kza56/evecasalonga-site.git
       git push -u origin main

2. Dépôt > Settings > Pages > Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
   Le domaine personnalisé `evecasalonga.com` est déjà déclaré par le fichier `CNAME`.
3. Recommandé : Settings du compte > Pages > « Add a domain » pour vérifier evecasalonga.com (protège contre un détournement du domaine).

## DNS, chez WordPress.com

Domaines > evecasalonga.com > Enregistrements DNS :

- désactiver / supprimer les enregistrements A par défaut de WordPress.com ;
- ajouter quatre enregistrements **A** sur la racine (`@`) :
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- ajouter un enregistrement **CNAME** : `www` vers `kza56.github.io`

Ne pas toucher aux serveurs de noms, ni aux enregistrements MX/TXT s'il y en a.

Propagation : de quelques minutes à quelques heures. Ensuite, dans Settings > Pages, cocher « Enforce HTTPS » dès que le certificat est émis.

Retour arrière : réactiver les enregistrements par défaut de WordPress.com, l'ancien site revient.

## Après la bascule

- Fiche Google de l'établissement : « Ajouter un site Web » > https://evecasalonga.com
- Google Search Console : déclarer le domaine et soumettre https://evecasalonga.com/sitemap.xml
- WordPress.com : désactiver le renouvellement automatique du plan Premium (échéance 22 avril 2027). **Garder** le renouvellement du domaine (21 mai 2027).

## Modifier le site

Les textes sont dans les fichiers `index.html` de chaque dossier. Le style est dans `assets/site.css`, les photos dans `assets/img/` (1100 px de large, JPEG).
