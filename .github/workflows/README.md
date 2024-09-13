# CI Workflow Documentation

## Introduction

Ce fichier décrit le fonctionnement des workflows CI pour l'intégration continue (CI) du projet SafeBase. Les workflows sont définis pour le backend et le frontend afin d'assurer que chaque modification de code est automatiquement testée et validée avant d'être fusionnée dans les branches principales.

Les workflows CI sont déclenchés automatiquement lors des événements suivants :

- **push** : Lorsqu'un développeur pousse du code sur les branches `main` ou `develop`.
- **pull_request** : Lorsqu'une pull request est ouverte ou mise à jour vers les branches `main` ou `develop`.

## Explication des fichiers CI

Le projet est organisé avec deux workflows CI distincts : un pour le **backend** et un pour le **frontend**. Ces fichiers se trouvent dans le dossier `.github/workflows/`.

### 1. **backend-ci.yml**

Le fichier `backend-ci.yml` est dédié aux tests et à la vérification de la qualité du code pour la partie **backend** (API REST avec Fastify).

#### Structure des jobs

- **backend-tests**
  - Exécution des tests unitaires.
  - Linting (vérification des conventions de style de code) avec ESLint.
  - Utilisation de Node.js version 18 pour garantir la compatibilité avec l'environnement de production.

#### Déclenchement

Le workflow est déclenché à chaque **push** ou **pull request** vers les branches `main` ou `develop`.

### 2. **frontend-ci.yml**

Le fichier `frontend-ci.yml` est dédié aux tests et à la vérification du code pour la partie **frontend** (interface utilisateur avec Angular).

#### Structure des jobs

- **frontend-tests**
  - Exécution des tests unitaires avec Angular CLI.
  - Exécution des tests end-to-end (E2E) avec Cypress, si configuré.
  - Linting (vérification des conventions de style de code) avec ESLint.
  - Utilisation de Node.js version 18 pour le frontend.

#### Déclenchement

Comme pour le backend, ce workflow est déclenché à chaque **push** ou **pull request** vers les branches `main` ou `develop`.

## Badges de statut CI

![Backend CI](https://github.com/benoit-bremaud/plateforme-safebase/actions/workflows/backend-ci.yml/badge.svg)
![Frontend CI](https://github.com/benoit-bremaud/plateforme-safebase/actions/workflows/frontend-ci.yml/badge.svg)

Ces badges indiquent l'état actuel des builds CI pour le backend et le frontend (succès ou échec).
