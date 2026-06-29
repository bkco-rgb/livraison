# BK Pochette Congo — Application de livraisons (PWA)

Application installable pour trier et livrer les commandes par zone.
Elle s'enregistre **dans la mémoire du téléphone** et fonctionne **hors connexion** une fois installée.

## Contenu du dossier
- `index.html` — l'application
- `manifest.json` — rend l'app installable
- `sw.js` — permet le fonctionnement hors connexion
- `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` — icônes de l'app

⚠️ **Garde tous ces fichiers ensemble, dans le même dossier.** Ne renomme pas `index.html`.

---

## Mettre en ligne sur GitHub Pages (gratuit)

1. Crée un compte sur https://github.com (si tu n'en as pas).
2. Clique sur **New repository**. Nom : par exemple `bk-livraisons`. Coche **Public**. Valide.
3. Dans le dépôt : bouton **Add file → Upload files**. Glisse **tous** les fichiers de ce dossier (index.html, manifest.json, sw.js et les 3 icônes). Puis **Commit changes**.
4. Onglet **Settings → Pages**. Sous *Build and deployment*, **Source : Deploy from a branch**, **Branch : main** (dossier `/root`). Clique **Save**.
5. Attends 1–2 minutes. GitHub affiche une adresse du type :
   `https://TON-NOM.github.io/bk-livraisons/`
6. Ouvre cette adresse dans le navigateur du téléphone.

---

## Installer sur l'écran d'accueil (Android / Chrome)

1. Ouvre l'adresse dans **Chrome**.
2. Menu **⋮** (en haut à droite) → **Ajouter à l'écran d'accueil** (ou une bannière « Installer l'application » apparaît).
3. Confirme. Une icône **BK** apparaît sur l'écran d'accueil et s'ouvre en plein écran, comme une vraie application.

Sur iPhone (Safari) : bouton **Partager** → **Sur l'écran d'accueil**.

---

## Sauvegarde de tes données (important)

Tes commandes sont enregistrées **sur ce téléphone uniquement**. Elles ne se synchronisent pas
toutes seules entre plusieurs appareils. Pour ne rien perdre :

- **💾 Sauvegarder** : télécharge un fichier de sauvegarde (`.json`). Garde-le quelque part (Drive, e-mail…).
- **↪ Restaurer** : recharge une sauvegarde (utile sur un nouveau téléphone, ou après un effacement).
- **Excel (CSV)** : exporte les commandes du moment pour ta comptabilité (s'ouvre dans Excel).

Fais une sauvegarde régulièrement, surtout avant « Tout effacer ».

---

## Mettre à jour l'application plus tard
Si je te livre une nouvelle version, remplace simplement `index.html` (et au besoin `sw.js` en
changeant `bk-pochette-v1` en `bk-pochette-v2`) dans le dépôt GitHub. L'app se mettra à jour
au prochain lancement avec connexion.

---

## Transformer en APK (optionnel)
Une fois l'app en ligne, va sur https://www.pwabuilder.com, colle ton adresse
`https://TON-NOM.github.io/bk-livraisons/`, et suis les étapes pour générer un fichier `.apk` Android.
