# Stratégie de Tests pour SafeBase

Ce document décrit la stratégie de tests pour SafeBase, en utilisant **Jest** pour les tests unitaires du backend et **Cypress** pour les tests end-to-end. Les tests assurent que le backend fonctionne comme prévu et que l’intégration avec le frontend est fluide.

---

## 1. Mettre en place Jest pour les Tests Unitaires du Backend

### a. Installation de Jest

Jest est utilisé pour les tests unitaires sur le backend. Installez Jest avec les dépendances pour TypeScript :

```bash
npm install --save-dev jest ts-jest @types/jest
```

### b. Configuration de Jest

Créez un fichier **`jest.config.js`** pour configurer Jest avec TypeScript :

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
```

### c. Exemple de Test Unitaire pour un Endpoint Fastify

Cet exemple montre comment tester un endpoint Fastify qui récupère une liste d'utilisateurs :

**Fichier** : `src/tests/users.test.ts`

```typescript
import fastify from 'fastify';
import routes from '../routes/users';

describe('GET /users', () => {
  let app;

  beforeAll(() => {
    app = fastify();
    app.register(routes);
  });

  afterAll(() => {
    app.close();
  });

  test('should return a list of users', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/users',
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual([{ id: 1, name: 'John Doe' }]);
  });
});
```

---

## 2. Configurer Cypress pour les Tests End-to-End

### a. Installation de Cypress

Cypress est utilisé pour effectuer des tests end-to-end sur le frontend. Installez Cypress avec la commande suivante :

```bash
npm install --save-dev cypress
```

### b. Ouverture et configuration

Pour initialiser Cypress dans le projet et créer les fichiers de base :

```bash
npx cypress open
```

Cela générera un répertoire **`cypress/`** dans lequel vous pouvez écrire les tests end-to-end.

### c. Exemple de Test End-to-End

Voici un exemple pour tester la page de gestion des sauvegardes (backups) dans SafeBase :

**Fichier de test** : `cypress/integration/backup.spec.ts`

```javascript
describe('Backup management', () => {
  it('should display a list of backups', () => {
    cy.visit('http://localhost:3000/backups');
    cy.contains('Backups List');
    cy.get('.backup-item').should('have.length.at.least', 1);
  });

  it('should trigger a new backup', () => {
    cy.visit('http://localhost:3000/backups');
    cy.contains('Trigger Backup').click();
    cy.contains('Backup in progress').should('be.visible');
  });
});
```

---

## 3. Écrire des Tests Unitaires pour les Endpoints Fastify

Les tests unitaires sont écrits pour vérifier chaque endpoint du backend de manière isolée. Voici un exemple de test pour un endpoint de sauvegarde :

**Fichier de test** : `src/tests/backup.test.ts`

```typescript
import fastify from 'fastify';
import backupRoutes from '../routes/backup';

describe('POST /backup', () => {
  let app;

  beforeAll(() => {
    app = fastify();
    app.register(backupRoutes);
  });

  afterAll(() => {
    app.close();
  });

  test('should trigger a backup successfully', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/backup',
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Backup started' });
  });
});
```

---

## 4. Planifier des Tests End-to-End Critiques

Les tests end-to-end doivent vérifier les fonctionnalités critiques de SafeBase. Voici un plan pour les tests principaux :

### Scénario 1 : Lister les sauvegardes

- Vérifier que la page des sauvegardes affiche les sauvegardes existantes.

### Scénario 2 : Déclencher une nouvelle sauvegarde

- Vérifier que l'utilisateur peut déclencher une sauvegarde et voir l'état de la progression.

### Scénario 3 : Restaurer une base de données

- Vérifier que l'utilisateur peut restaurer une base de données à partir d'une sauvegarde existante.

---

## Conclusion

Cette stratégie de tests permet de couvrir les différents aspects critiques de SafeBase à l’aide de **Jest** pour les tests unitaires et **Cypress** pour les tests end-to-end. Ces tests garantissent que le backend Fastify et son intégration avec le frontend fonctionnent comme prévu.

---

### Récapitulatif

- **Jest** est utilisé pour les tests unitaires sur le backend, avec un exemple de configuration et de test.
- **Cypress** est configuré pour les tests end-to-end, avec des exemples de tests pour la gestion des sauvegardes.
- Un plan de tests end-to-end a été défini pour couvrir les cas critiques du projet.
