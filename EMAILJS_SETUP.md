# Configuration EmailJS pour le Formulaire de Contact

Pour que le formulaire de contact fonctionne correctement, vous devez configurer EmailJS.

## Étapes de configuration :

### 1. Créer un compte EmailJS
- Visitez [emailjs.com](https://www.emailjs.com)
- Créez un compte gratuit

### 2. Obtenir votre Public Key
- Dans le tableau de bord EmailJS, allez dans **Account** > **General**
- Copiez votre **Public Key**

### 3. Créer un Email Service
- Allez à **Email Services**
- Cliquez sur **Create New Service**
- Sélectionnez Gmail ou un autre fournisseur
- Complétez la configuration
- Notez l'**ID du service** (SERVICE_ID)

### 4. Créer un Template Email
- Allez à **Email Templates**
- Cliquez sur **Create New Template**
- Configurez le template comme suit :
  - **To Email:** `{{to_email}}`
  - **Subject:** `{{subject}}`
  - **Body:** 
    ```
    Nom: {{from_name}}
    Email: {{from_email}}
    Sujet: {{subject}}
    
    Message:
    {{message}}
    ```
- Notez l'**ID du template** (TEMPLATE_ID)

### 5. Mettre à jour le fichier ContactForm.jsx
Remplacez dans `src/components/ContactForm.jsx` :

```javascript
// Ligne 6
emailjs.init('YOUR_PUBLIC_KEY_HERE')

// Ligne 32-33
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```

Par vos vraies clés :

```javascript
// Ligne 6
emailjs.init('votre_public_key_ici')

// Ligne 32-33
await emailjs.send('votre_service_id_ici', 'votre_template_id_ici', {
```

### 6. Mettre à jour l'email destinataire
À la ligne 40 du ContactForm.jsx, remplacez l'email destinataire :

```javascript
to_email: 'votre-email@example.com',  // Votre email
```

## Test

Une fois configuré, vous pouvez tester le formulaire via la page `/contact` de votre application.

## Notes importantes

- ✅ Le plan gratuit de EmailJS permet 200 emails par mois
- ✅ Les emails sont envoyés directement depuis le navigateur (pas de backend requis)
- ✅ Les données du formulaire ne sont pas stockées sur votre serveur
- ⚠️ Ne commitez jamais vos clés EmailJS dans le contrôle de version !

Pour plus d'informations, consultez la [documentation EmailJS](https://www.emailjs.com/docs/).
