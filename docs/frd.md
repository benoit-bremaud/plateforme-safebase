# **Document des Exigences Fonctionnelles - SafeBase**

## **1. Introduction**

### 1.1. **Contexte**

- Présentation du projet SafeBase : expliquer le contexte dans lequel le projet s'inscrit, l'importance de la gestion des sauvegardes et des restaurations de bases de données pour les entreprises, et les défis actuels.

### 1.2. **Objectifs du Projet**

- Décrire les objectifs principaux du projet, comme la création d'une API REST pour gérer les sauvegardes et restaurations, l'automatisation des processus, et la mise en place d'une interface utilisateur simple pour l'administration des bases de données.

### 1.3. **Portée**

- Définir la portée du projet en décrivant ce qui est inclus (fonctionnalités couvertes) et ce qui est exclu (éléments hors du périmètre du projet).

### 1.4. **Définitions, Acronymes, et Abréviations**

- Fournir un glossaire des termes techniques ou spécifiques au projet pour assurer une compréhension commune au sein de l'équipe.

## **2. Exigences Fonctionnelles**

### 2.1. **Vue d'ensemble des fonctionnalités**

- Présentation générale des fonctionnalités clés que l'application doit offrir, sous forme de liste.

### 2.2. **Détail des fonctionnalités**

#### 2.2.1. **Gestion des bases de données**

- **Nom de la fonctionnalité** : Ajout et gestion des bases de données.
- **Description** : Permettre à l'utilisateur d'ajouter, modifier, et supprimer des connexions à des bases de données MySQL et PostgreSQL.
- **Entrées** : Informations de connexion à la base de données (adresse, port, identifiants, etc.).
- **Sorties** : Confirmation de l'ajout/modification/suppression, ou message d'erreur en cas d'échec.
- **Critères d'acceptation** : L'utilisateur doit pouvoir gérer ses connexions de manière sécurisée et fiable.
- **Priorité** : Élevée.

#### 2.2.2. **Automatisation des sauvegardes**

- **Nom de la fonctionnalité** : Planification et exécution automatique des sauvegardes.
- **Description** : Mise en place de tâches CRON pour effectuer des sauvegardes régulières des bases de données.
- **Entrées** : Paramètres de planification (fréquence des sauvegardes, heure, etc.).
- **Sorties** : Fichiers de sauvegarde stockés dans un répertoire sécurisé.
- **Critères d'acceptation** : Les sauvegardes doivent être réalisées selon la planification définie, sans intervention manuelle.
- **Priorité** : Élevée.

#### 2.2.3. **Gestion des versions des sauvegardes**

- **Nom de la fonctionnalité** : Historique et gestion des versions des sauvegardes.
- **Description** : Conserver un historique des versions de sauvegarde, avec la possibilité de restaurer une version spécifique.
- **Entrées** : Sélection de la version à restaurer.
- **Sorties** : Base de données restaurée à l'état de la version choisie.
- **Critères d'acceptation** : L'utilisateur doit pouvoir visualiser l'historique et choisir la version à restaurer.
- **Priorité** : Moyenne.

#### 2.2.4. **Surveillance et gestion des alertes**

- **Nom de la fonctionnalité** : Surveillance des processus et gestion des alertes.
- **Description** : Surveiller l'état des sauvegardes/restaurations et envoyer des alertes en cas de problème.
- **Entrées** : Événements système (succès ou échec des sauvegardes/restaurations).
- **Sorties** : Notifications d'alerte par email ou via une interface utilisateur.
- **Critères d'acceptation** : Les alertes doivent être envoyées immédiatement en cas d'anomalie.
- **Priorité** : Élevée.

#### 2.2.5. **Interface utilisateur**

- **Nom de la fonctionnalité** : Interface utilisateur pour la gestion de SafeBase.
- **Description** : Fournir une interface web pour permettre aux utilisateurs de gérer les sauvegardes, les restaurations, et les bases de données.
- **Entrées** : Actions de l'utilisateur via l'interface (clics, saisies, etc.).
- **Sorties** : Résultats affichés dans l'interface (confirmation d'actions, affichage de données, etc.).
- **Critères d'acceptation** : L'interface doit être intuitive, réactive, et accessible depuis différents appareils.
- **Priorité** : Moyenne.

### 2.3. **Diagrammes UML**

- **Diagramme de Cas d'Utilisation** : Montrer les interactions entre les utilisateurs et les fonctionnalités du système.
- **Diagramme de Séquence** : Décrire l'ordre des opérations dans un processus particulier (par exemple, la sauvegarde automatique).
- **Diagramme de Classes** : Représenter la structure des données et leur organisation au sein du système.

## **3. Exigences Non Fonctionnelles**

### 3.1. **Performance**

- **Exigences** : Décrire les attentes en termes de temps de réponse, capacité à gérer un grand nombre de bases de données, etc.

### 3.2. **Sécurité**

- **Exigences** : Détaillez les mesures de sécurité nécessaires, telles que l'authentification, le chiffrement des données, et la gestion des accès.

### 3.3. **Compatibilité**

- **Exigences** : Définir les plateformes et navigateurs supportés, ainsi que toute contrainte de compatibilité spécifique.

### 3.4. **Fiabilité et Disponibilité**

- **Exigences** : Spécifier les exigences de disponibilité (SLA), les tolérances aux pannes, et les mécanismes de reprise après sinistre.

## **4. Glossaire**

- Inclure une section définissant les termes techniques, les acronymes et les abréviations utilisés dans le document.

## **5. Révision et Validation**

- **Processus de validation** : Décrire comment et par qui le document des exigences fonctionnelles sera révisé et validé.
- **Signatures** : Inclure une section pour les signatures des parties prenantes validant le document.

---

### **Conseils pour la rédaction :**

1. **Collaboratif** : Si vous travaillez en équipe, utilisez un outil collaboratif comme Google Docs ou Confluence pour permettre à plusieurs personnes de contribuer et commenter le document.
2. **Itératif** : Le document doit être mis à jour régulièrement à mesure que le projet progresse et que les exigences évoluent.
3. **Clarté** : Assurez-vous que les descriptions soient précises et sans ambiguïté pour éviter toute mauvaise interprétation par les développeurs ou les parties prenantes.

Ce plan structuré vous permettra de créer un document des exigences fonctionnelles complet, servant de référence tout au long du projet. Si vous avez besoin d'exemples concrets ou d'aide pour démarrer, je suis à votre disposition !