# Guide de déploiement sur Vercel

## ✅ Prérequis
- Compte GitHub avec le code source
- Compte Vercel (gratuit)
- Configuration EmailJS complétée

## 🚀 Déploiement automatique

### 1. Via l'interface Vercel (Recommandé)

1. **Préparer le repository :**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Déployer sur Vercel :**
   - Visitez [vercel.com](https://vercel.com/)
   - Cliquez "New Project"
   - Importez votre repository GitHub
   - Vercel détecte automatiquement Vite

3. **Configurer les variables d'environnement :**
   - Dans les paramètres du projet Vercel
   - Onglet "Environment Variables"
   - Ajoutez :
     - `VITE_EMAILJS_SERVICE_ID` = votre_service_id
     - `VITE_EMAILJS_TEMPLATE_ID` = votre_template_id  
     - `VITE_EMAILJS_PUBLIC_KEY` = votre_public_key

4. **Redéployer :**
   - Cliquez "Redeploy" pour prendre en compte les variables

### 2. Via Vercel CLI

```bash
# Installation
npm install -g vercel

# Déploiement
vercel

# Suivez les instructions interactives
# Le projet sera automatiquement configuré
```

## 📋 Configuration automatique

Le fichier `vercel.json` configure automatiquement :
- Build command : `npm run build`
- Output directory : `dist`  
- Framework : Vite
- Dev command : `npm run dev`

## 🔧 Variables d'environnement requises

Sur Vercel, ajoutez ces variables dans les paramètres :

```
VITE_EMAILJS_SERVICE_ID=service_xat6ena
VITE_EMAILJS_TEMPLATE_ID=template_ke0wyzp  
VITE_EMAILJS_PUBLIC_KEY=rVl6JRNqp2jS-Xbb5
```

## ✨ Fonctionnalités incluses

- ✅ Site statique optimisé
- ✅ Formulaire de contact fonctionnel
- ✅ Emails vers kontakt@azizesankande.com
- ✅ Interface responsive
- ✅ Performance optimisée
- ✅ HTTPS automatique
- ✅ CDN global

## 🌐 Après déploiement

1. **Testez le formulaire** sur le site live
2. **Vérifiez** que les emails arrivent sur kontakt@azizesankande.com
3. **Configurez un domaine personnalisé** si nécessaire

Votre site sera accessible via une URL comme : `https://votre-projet.vercel.app`