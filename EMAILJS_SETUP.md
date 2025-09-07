# Configuration EmailJS pour le formulaire de contact

## Étapes de configuration

1. **Créer un compte EmailJS**
   - Visitez https://www.emailjs.com/
   - Créez un compte gratuit

2. **Configurer un service email**
   - Dans le dashboard EmailJS, allez dans "Email Services"
   - Ajoutez un nouveau service (Gmail, Outlook, etc.)
   - Notez votre **Service ID**

3. **Créer un template d'email**
   - Allez dans "Email Templates"
   - Créez un nouveau template avec les variables suivantes :
     - `{{from_name}}` - Nom complet du contact
     - `{{customer_email}}` - Email du contact
     - `{{reply_to}}` - Email de réponse (même que customer_email)
     - `{{phone}}` - Téléphone du contact
     - `{{service_type}}` - Type de service demandé
     - `{{message}}` - Message du contact
   - **IMPORTANT :** Dans les paramètres du template :
     - **From Email :** kontakt@azizesankande.com (votre adresse)
     - **From Name :** Demande de Contact
     - **Reply To :** {{reply_to}} (l'email du client pour pouvoir répondre)
     - **To Email :** kontakt@azizesankande.com
   - Notez votre **Template ID**

4. **Obtenir la clé publique**
   - Allez dans "Account" > "General"
   - Copiez votre **Public Key**

5. **Configurer les variables d'environnement**
   - Copiez le fichier `.env.example` vers `.env`
   - Remplacez les valeurs par vos vraies clés EmailJS :
     ```
     VITE_EMAILJS_SERVICE_ID=votre_service_id
     VITE_EMAILJS_TEMPLATE_ID=votre_template_id
     VITE_EMAILJS_PUBLIC_KEY=votre_public_key
     ```

## Exemple de template EmailJS

**Sujet :** Nouvelle demande de contact - {{service_type}}

**Corps du message :**
```
Nouvelle demande de contact reçue :

Nom : {{from_name}}
Email : {{customer_email}}
Téléphone : {{phone}}
Service demandé : {{service_type}}

Message :
{{message}}

---
Email envoyé automatiquement depuis le site web.
Répondez directement à cet email pour contacter le client.
```

**Email de destination :** kontakt@azizesankande.com

## Test

Une fois configuré, testez le formulaire de contact sur votre site pour vous assurer que les emails arrivent bien sur kontakt@azizesankande.com.