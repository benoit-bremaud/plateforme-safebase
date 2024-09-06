# **Document des Exigences Fonctionnelles - SafeBase**

## **1. Introduction**

### 1.1. **Contexte**

Dans le monde de l’entreprise, la gestion des bases de données et la sécurisation des données sont devenues des enjeux stratégiques. Les bases de données contiennent souvent des informations critiques, considérées comme des actifs majeurs pour les organisations. La perte de ces données, qu’elle soit due à une défaillance technique, une erreur humaine ou une attaque malveillante, peut entraîner des interruptions opérationnelles graves, des pertes financières importantes, voire des atteintes à la réputation de l’entreprise.

Dans ce contexte, il est indispensable de mettre en place des systèmes robustes qui assurent la sauvegarde régulière des bases de données et leur restauration en cas de besoin. Cela inclut l’automatisation des processus de sauvegarde, la gestion des versions sauvegardées, ainsi que des mécanismes de surveillance et d’alerte pour prévenir les incidents. SafeBase s'inscrit dans cette logique en proposant une solution qui permet non seulement de gérer ces sauvegardes de manière efficace, mais aussi de garantir leur accessibilité et leur intégrité.

### 1.2. **Objectifs du Projet**

Le projet SafeBase a pour objectif de développer une solution complète de gestion de la sauvegarde et de la restauration des bases de données sous la forme d’une API REST. Cette solution doit répondre aux besoins essentiels des entreprises en matière de sécurité et de continuité des données, tout en assurant une gestion simplifiée des processus de sauvegarde. Les principaux objectifs du projet sont les suivants :

- **Ajout de base de données** : Fournir une fonctionnalité permettant d'ajouter facilement une connexion à une base de données MySQL ou PostgreSQL, en configurant les informations de connexion nécessaires.
  
- **Automatisation des sauvegardes régulières** : Planifier et exécuter des sauvegardes périodiques des bases de données à l’aide de tâches CRON, en s’appuyant sur les utilitaires système tels que MySQLDump et pg_dump pour garantir la sauvegarde fiable des données.

- **Gestion des versions** : Conserver un historique des différentes versions des sauvegardes effectuées, avec la possibilité pour les utilisateurs de choisir et de restaurer une version spécifique de la base de données en cas de besoin.

- **Surveillance et alertes** : Mettre en place un système de surveillance permettant de suivre l'état des sauvegardes et restaurations en temps réel, et générer des alertes en cas de défaillance ou de problème détecté lors des processus.

- **Interface utilisateur** : Développer une interface utilisateur intuitive et simple d’utilisation, permettant aux administrateurs de gérer facilement les processus de sauvegarde et restauration, sans avoir à manipuler directement l’API ou les utilitaires en ligne de commande.

- **Intégration de tests** : Écrire des tests fonctionnels et automatisés pour vérifier le bon fonctionnement de l’API et s'assurer de l'exécution correcte des sauvegardes et restaurations, garantissant ainsi la robustesse de la solution.

- **Containérisation** : Conteneuriser l’ensemble de la solution, incluant l’API, une base de données MySQL, une base de données PostgreSQL, ainsi que le frontend, afin de faciliter le déploiement et l'exécution dans divers environnements.

L’objectif global de SafeBase est de fournir un outil sécurisé et automatisé, facile à utiliser, et permettant aux entreprises de protéger leurs données en toute simplicité, tout en minimisant les risques liés à la perte de données.

### 1.3. **Portée**

Le projet SafeBase se concentre sur le développement d'une solution complète de gestion de sauvegarde et restauration pour les bases de données MySQL et PostgreSQL. Cette solution couvre un ensemble de fonctionnalités essentielles pour garantir la sécurité, la continuité et la simplicité de gestion des bases de données.

#### Inclus dans la portée

- **Gestion des bases de données** : Ajout, modification et suppression de connexions aux bases de données MySQL et PostgreSQL via l'API REST.
- **Automatisation des sauvegardes** : Planification de sauvegardes régulières à l'aide de tâches CRON et des outils natifs MySQLDump et pg_dump pour garantir des sauvegardes fiables et programmées.
- **Gestion des versions des sauvegardes** : Historisation des versions des sauvegardes, avec la possibilité de restaurer des versions spécifiques en fonction des besoins.
- **Surveillance et alertes** : Mise en place d’un système de suivi en temps réel des processus de sauvegarde et restauration. Les alertes seront envoyées par email, via l'interface utilisateur ou générées dans les logs en cas d’échec ou de problème détecté.
- **Interface utilisateur** : Développement d’une interface web intuitive, permettant aux utilisateurs de gérer les bases de données, les sauvegardes et les restaurations sans passer par l'API ou les lignes de commande.
- **Tests fonctionnels et automatisés** : Mise en place de tests pour vérifier le bon fonctionnement des processus clés, incluant les sauvegardes, restaurations et alertes. Ces tests garantiront la robustesse du système.
- **Containérisation** : Conteneurisation de l’ensemble de la solution, incluant l’API, les bases de données MySQL et PostgreSQL, ainsi que le frontend dans des containers Docker, facilitant ainsi le déploiement et l'exécution dans divers environnements.

#### Exclus de la portée

- **Support d'autres bases de données** : SafeBase ne prendra pas en charge d'autres systèmes de gestion de bases de données, tels qu'Oracle, SQL Server ou MongoDB, dans sa version initiale.
- **Outils avancés de gestion des performances** : Le projet ne fournira pas d'outils spécifiques pour l'optimisation des performances des bases de données (par exemple, analyse des performances ou optimisation des requêtes).
- **Fonctionnalités de réplication et de haute disponibilité** : SafeBase ne prendra pas en charge la réplication des bases de données ni la gestion de la haute disponibilité dans sa version initiale.
- **Sauvegardes multi-régionales ou multi-cloud** : La gestion des sauvegardes distribuées ou multi-régionales dans des environnements cloud complexes ne fait pas partie de la portée de la version initiale de SafeBase.

#### Contraintes techniques

- **Dépendance aux outils natifs** : SafeBase s'appuie sur les outils natifs MySQLDump et pg_dump pour les sauvegardes. Ces outils, bien que robustes, présentent des limitations en termes de vitesse de traitement et de fonctionnalités avancées (par exemple, la sauvegarde incrémentielle n'est pas gérée).
- **Utilisation de Docker** : La conteneurisation via Docker est essentielle pour le bon fonctionnement de l'architecture SafeBase. Le bon fonctionnement du système nécessite donc une configuration correcte de Docker et de Docker Compose, aussi bien en local qu'en production.

#### Évolutions futures possibles

Bien que certaines fonctionnalités soient exclues de la version initiale, SafeBase pourra évoluer vers :

- **Support de bases de données supplémentaires** : Intégration future de systèmes comme MongoDB, Oracle ou SQL Server.
- **Gestion multi-cloud ou multi-régions** : Possibilité de mettre en place des sauvegardes distribuées ou multi-régionales pour améliorer la résilience des données dans des environnements complexes.
- **Rélication et haute disponibilité** : Extension du projet pour inclure des mécanismes de réplication et de haute disponibilité des bases de données.

### **1.4. Définitions, Acronymes, et Abréviations**

- **API** : Application Programming Interface. Interface permettant à deux systèmes logiciels de communiquer entre eux.
- **AES** : Advanced Encryption Standard. Algorithme de chiffrement symétrique utilisé pour protéger les données.
- **JWT** : JSON Web Token. Format de token sécurisé utilisé pour l’authentification et le contrôle d'accès.
- **RBAC** : Role-Based Access Control. Système de gestion des accès en fonction des rôles assignés aux utilisateurs.
- **SLA** : Service Level Agreement. Engagement contractuel définissant le niveau de disponibilité du service.
- **DDoS** : Distributed Denial of Service. Attaque visant à rendre un service indisponible en surchargeant ses serveurs de requêtes.
- **TLS/SSL** : Transport Layer Security / Secure Sockets Layer. Protocoles de chiffrement utilisés pour sécuriser les communications réseau.
- **SGBD** : Système de Gestion de Bases de Données. Logiciel permettant de créer, manipuler et administrer des bases de données.
- **MySQL** : Un des SGBD relationnels les plus utilisés, open-source.
- **PostgreSQL** : SGBD open-source offrant une forte conformité aux standards SQL et de riches fonctionnalités de gestion des données.
- **CI/CD** : Continuous Integration/Continuous Deployment. Méthodologie qui consiste à automatiser les tests et le déploiement d’applications pour garantir une livraison continue.
- **Docker** : Plateforme permettant de conteneuriser des applications afin de les exécuter de manière isolée dans différents environnements.
- **JSON** : JavaScript Object Notation. Format de données léger utilisé pour échanger des informations entre les systèmes.
- **REST** : Representational State Transfer. Architecture standard pour créer des services web interopérables et évolutifs.
- **SSL** : Secure Sockets Layer. Ancien protocole de sécurité réseau remplacé par TLS, mais encore utilisé dans certaines configurations pour sécuriser les communications.
- **TLS** : Transport Layer Security. Protocole de sécurité utilisé pour crypter les communications sur Internet.
- **CRON** : Outil Unix/Linux permettant d'automatiser des tâches planifiées, comme les sauvegardes régulières dans SafeBase.

## **2. Exigences Fonctionnelles**

### 2.1. **Vue d'ensemble des fonctionnalités**

SafeBase doit offrir les fonctionnalités suivantes pour répondre aux besoins de gestion de sauvegardes et restaurations des bases de données d’entreprise :

- **Ajout et gestion des bases de données** : Possibilité pour les utilisateurs d'ajouter, modifier, et supprimer des connexions à des bases de données MySQL et PostgreSQL.
  
- **Automatisation des sauvegardes** : Configuration et exécution automatique de sauvegardes périodiques des bases de données, à l’aide de tâches CRON.

- **Gestion des versions des sauvegardes** : Stockage et gestion des différentes versions des sauvegardes, avec possibilité de restaurer une version spécifique de la base de données.

- **Surveillance et gestion des alertes** : Système de suivi des processus de sauvegarde et de restauration, avec génération d’alertes en temps réel en cas d’erreur ou d’échec.

- **Interface utilisateur** : Interface web simple et intuitive pour permettre aux administrateurs de bases de données de gérer les processus sans interaction directe avec l’API ou les lignes de commande.

- **Tests automatisés** : Intégration de tests fonctionnels permettant de valider le bon fonctionnement de l’API et la réussite des processus de sauvegarde et restauration.

- **Sécurité et gestion des accès** : Authentification des utilisateurs avec des tokens sécurisés (ex. : JWT) et gestion des rôles pour assurer que seules les personnes autorisées puissent accéder aux bases de données et aux processus de sauvegarde.

- **Gestion des logs et audit** : Suivi et historisation des opérations effectuées par SafeBase (sauvegardes, restaurations, échecs, alertes), permettant une traçabilité complète pour faciliter le diagnostic des incidents et l’audit.

- **Personnalisation des notifications** : Possibilité pour les utilisateurs de personnaliser les types d'alertes qu’ils souhaitent recevoir (succès, échecs, etc.) via email ou l’interface utilisateur.

- **Support multi-instance** : Gestion de plusieurs bases de données en parallèle, avec une interface permettant de suivre et gérer chaque instance de manière individuelle.

- **Planification avancée des sauvegardes** : Option permettant de définir des stratégies de sauvegarde plus complexes (ex. : sauvegardes différentielles ou incrémentielles, rotation automatique des sauvegardes).

### 2.2. **Détail des fonctionnalités**

#### **2.2.1. Gestion des bases de données**

- **Nom de la fonctionnalité** : Ajout et gestion des bases de données.

- **Description** : Cette fonctionnalité permet aux utilisateurs d'ajouter, modifier et supprimer des connexions à des bases de données MySQL et PostgreSQL. Les utilisateurs doivent spécifier les informations de connexion nécessaires (adresse IP, port, nom de la base de données, identifiants d'authentification) afin que le système puisse interagir avec la base de données. Les connexions peuvent être modifiées ou supprimées via l'interface utilisateur ou l'API REST.

- **Entrées** :  
  - Adresse IP ou nom de domaine de l'hôte de la base de données.  
  - Port utilisé par la base de données.  
  - Nom de la base de données.  
  - Identifiants d'authentification (nom d'utilisateur, mot de passe).  
  - Type de base de données (MySQL ou PostgreSQL).

- **Sorties** :  
  - Confirmation de l'ajout, de la modification ou de la suppression de la connexion à la base de données.  
  - Message d’erreur en cas de données invalides, de connexion échouée ou d'erreur réseau (ex. : base de données inaccessible).

- **Critères d'acceptation** :  
  - L’utilisateur doit être capable d’ajouter une nouvelle connexion à une base de données avec succès.
  - L'utilisateur doit pouvoir modifier une connexion existante (ex. : changer les identifiants ou l’adresse de la base de données).
  - L’utilisateur doit être en mesure de supprimer une connexion existante.
  - Les informations de connexion doivent être validées avant soumission (ex. : format d’adresse IP, longueur des identifiants).
  - Les mots de passe et informations sensibles doivent être chiffrés avant le stockage.
  - En cas d’échec (connexion incorrecte, données invalides, erreur réseau), un message d’erreur approprié doit être renvoyé à l’utilisateur.

- **Priorité** : Élevée.

#### **2.2.2. Automatisation des sauvegardes**

- **Nom de la fonctionnalité** : Planification et exécution automatique des sauvegardes.

- **Description** : Cette fonctionnalité permet aux utilisateurs de planifier des sauvegardes régulières des bases de données MySQL et PostgreSQL via l’utilisation de tâches CRON. Le système doit permettre de configurer la fréquence des sauvegardes (quotidiennes, hebdomadaires, etc.) et d’assurer que ces dernières sont effectuées sans intervention manuelle. Les utilisateurs peuvent choisir d'inclure uniquement les données ou à la fois les données et la structure de la base de données. Les fichiers de sauvegarde seront horodatés, compressés et stockés de manière sécurisée dans un répertoire prédéfini.

- **Entrées** :  
  - Fréquence des sauvegardes (intervalle CRON).  
  - Heure et jour de la sauvegarde.  
  - Chemin de stockage pour les fichiers de sauvegarde.  
  - Option pour inclure uniquement les données ou les données avec la structure de la base de données.

- **Sorties** :  
  - Fichiers de sauvegarde horodatés et compressés stockés dans l’emplacement configuré.  
  - Logs d’exécution des tâches de sauvegarde (succès, échec, temps d’exécution).  
  - Message d’alerte en cas d’échec de la sauvegarde.

- **Critères d'acceptation** :  
  - Les sauvegardes doivent être exécutées automatiquement à la fréquence définie par l'utilisateur.
  - Les fichiers de sauvegarde doivent inclure les données et/ou la structure complète de la base de données selon l'option choisie.
  - Les sauvegardes doivent être horodatées, compressées et stockées dans un répertoire sécurisé.
  - Une rotation automatique des sauvegardes doit être mise en place pour conserver uniquement les 10 dernières sauvegardes.
  - Les utilisateurs doivent pouvoir accéder aux logs d'exécution pour vérifier le succès ou l’échec des sauvegardes.
  - En cas d’échec, une alerte doit être envoyée et enregistrée dans les logs.

- **Priorité** : Élevée.

#### **2.2.3. Gestion des versions des sauvegardes**

- **Nom de la fonctionnalité** : Historique et gestion des versions des sauvegardes.

- **Description** : Cette fonctionnalité permet aux utilisateurs de visualiser un historique des différentes versions des sauvegardes effectuées pour chaque base de données. Ils peuvent sélectionner une version spécifique à restaurer en cas de besoin. Chaque sauvegarde est horodatée pour faciliter le suivi. Les utilisateurs peuvent également télécharger une version de sauvegarde ou supprimer les anciennes versions si nécessaire pour libérer de l’espace de stockage. Il est possible de définir un nombre maximum de versions à conserver, au-delà duquel les plus anciennes versions seront supprimées automatiquement.

- **Entrées** :  
  - Sélection de la base de données.  
  - Liste des versions disponibles, incluant la date de création de chaque sauvegarde.  
  - Sélection de la version à restaurer, à télécharger ou à supprimer.  
  - Option de sauvegarder l'état actuel avant la restauration.

- **Sorties** :  
  - Confirmation de la restauration de la version sélectionnée.  
  - Confirmation de la suppression des anciennes versions ou du téléchargement.  
  - Message d’alerte en cas d’échec de la restauration, du téléchargement ou de la suppression.

- **Critères d'acceptation** :  
  - Les utilisateurs doivent être capables de visualiser l'historique des sauvegardes pour chaque base de données avec les détails (date, heure, taille).
  - Les utilisateurs doivent pouvoir sélectionner une version spécifique pour la restaurer ou la télécharger avec succès.
  - Les utilisateurs doivent pouvoir supprimer une ou plusieurs anciennes versions si nécessaire.
  - Un mécanisme doit permettre de limiter le nombre de versions conservées.
  - Avant la restauration, une option pour sauvegarder l'état actuel de la base de données doit être disponible.
  - En cas d’échec (restauration, téléchargement ou suppression impossible), un message d’erreur doit être renvoyé.

- **Priorité** : Moyenne.

#### **2.2.4. Surveillance et gestion des alertes**

- **Nom de la fonctionnalité** : Surveillance des processus et gestion des alertes.

- **Description** : Cette fonctionnalité permet de surveiller en temps réel les processus de sauvegarde et de restauration, et de générer des alertes en cas de problème (ex. : échec de sauvegarde ou de restauration). Les utilisateurs peuvent recevoir des notifications par email ou via l’interface utilisateur. Les événements critiques sont également enregistrés dans des logs pour un suivi détaillé.

- **Entrées** :  
  - Événements système (succès ou échec des sauvegardes/restaurations).  
  - Paramètres de notification (canal d'alerte préféré, adresse email).  
  - Seuil de criticité pour déclencher les alertes.

- **Sorties** :  
  - Notifications en temps réel via email ou interface utilisateur en cas d’échec.  
  - Logs détaillés des événements liés aux processus de sauvegarde/restauration.  
  - Résumé des processus réussis ou échoués.

- **Critères d'acceptation** :  
  - Le système doit surveiller les processus de sauvegarde et restauration en temps réel.  
  - En cas d’échec, une alerte doit être envoyée immédiatement via le canal choisi (email ou interface).  
  - Les utilisateurs doivent pouvoir configurer leurs préférences de notification.  
  - Tous les événements doivent être enregistrés dans les logs pour un audit ultérieur.

- **Priorité** : Élevée.

#### **2.2.5. Interface utilisateur**

- **Nom de la fonctionnalité** : Interface utilisateur pour la gestion de SafeBase.

- **Description** : L'interface utilisateur (UI) permet aux administrateurs de gérer les bases de données, les processus de sauvegarde, et les restaurations via une interface graphique intuitive. L'interface doit être réactive, simple d’utilisation, et accessible sur différents appareils (desktop, tablette, mobile). Les utilisateurs pourront visualiser l’état des sauvegardes, déclencher des sauvegardes/restaurations manuellement, consulter les logs, et configurer les alertes. Des notifications visuelles (bannières, pop-ups) doivent informer les utilisateurs des succès ou des échecs des actions effectuées, et des indicateurs de statut en temps réel afficheront l'état des processus critiques.

- **Entrées** :  
  - Actions de l’utilisateur (clics, sélection de bases de données, déclenchement de sauvegardes/restaurations, modification des paramètres d'alerte).  
  - Données d’entrée utilisateur pour la configuration des paramètres (ajout de bases de données, choix de versions à restaurer, etc.).

- **Sorties** :  
  - Affichage en temps réel des états de sauvegarde/restauration via des indicateurs de statut visuels.  
  - Résultats des actions utilisateur (confirmation de sauvegarde/restauration, messages d'erreur, logs).  
  - Interface configurable pour les alertes et paramètres de sauvegarde.  
  - Notifications visuelles en cas de succès ou d’échec des actions (sauvegarde, restauration, etc.).  
  - Option de filtrage et de recherche dans les logs par date ou état (succès, échec).

- **Critères d'acceptation** :  
  - L'interface doit permettre de gérer les bases de données et les processus de sauvegarde/restauration de manière intuitive et réactive.
  - L’UI doit être responsive et accessible depuis différents appareils (desktop, tablette, mobile).
  - Les utilisateurs doivent pouvoir visualiser l’état des processus en temps réel via des indicateurs de statut et configurer les alertes via l’interface.
  - Les actions critiques (sauvegarde, restauration) doivent être confirmées avec un retour immédiat (succès, échec) et des notifications visuelles.
  - Un mode sombre peut être disponible pour améliorer l’expérience utilisateur.

- **Priorité** : Moyenne.

#### **2.2.6. Tests automatisés**

- **Nom de la fonctionnalité** : Intégration de tests fonctionnels et automatisés.

- **Description** : Cette fonctionnalité vise à intégrer des tests automatisés pour valider le bon fonctionnement de l'API SafeBase, des processus de sauvegarde et de restauration, ainsi que de l'interface utilisateur. Ces tests incluent des tests unitaires, des tests d’intégration, des tests end-to-end (E2E), ainsi que des tests de performance pour garantir la stabilité et la robustesse de la solution. Les tests doivent être exécutés automatiquement à chaque mise à jour du code pour détecter rapidement toute régression ou anomalie.

- **Entrées** :  
  - Scénarios de tests prédéfinis couvrant les fonctionnalités principales (gestion des bases de données, sauvegarde/restauration, gestion des alertes, etc.).  
  - Scripts de tests pour l'API (CRUD, processus de sauvegarde/restauration).  
  - Scripts de tests E2E pour simuler des scénarios utilisateur dans l’interface (via des outils comme Cypress ou Selenium).  
  - Scripts de tests de charge pour vérifier la robustesse du système sous forte sollicitation.

- **Sorties** :  
  - Résultats des tests (succès ou échec) affichés dans des rapports automatisés.  
  - Logs des erreurs ou des échecs détectés lors des tests.  
  - Rapports de performance (temps de réponse, impact des sauvegardes simultanées).  
  - Détection et rapport des régressions fonctionnelles ou des vulnérabilités dans le code (ex. : sécurité).

- **Critères d'acceptation** :  
  - Les tests unitaires doivent couvrir au moins 80 % du code backend (API, gestion des sauvegardes/restaurations).  
  - Les tests d'intégration doivent valider la communication entre le frontend et le backend.  
  - Les tests E2E doivent simuler les scénarios utilisateur dans l'interface et valider les interactions critiques (gestion des bases de données, déclenchement des sauvegardes/restaurations, affichage des logs).  
  - Les tests de performance doivent valider que l’application peut supporter plusieurs opérations simultanées sans dégradation significative des performances.  
  - Les tests de sécurité doivent s’assurer que les processus critiques (authentification, accès aux bases de données) ne présentent pas de vulnérabilités majeures.  
  - Les tests doivent être exécutés automatiquement à chaque mise à jour du code (intégration continue).  
  - Les résultats des tests et des rapports de couverture de code doivent être documentés et accessibles pour permettre une analyse rapide en cas d'échec.

- **Priorité** : Élevée.

#### **2.2.7. Sécurité et gestion des accès**

- **Nom de la fonctionnalité** : Authentification et gestion des rôles utilisateurs.

- **Description** : Cette fonctionnalité assure que seules les personnes autorisées peuvent accéder aux fonctionnalités critiques de SafeBase, notamment la gestion des bases de données et les processus de sauvegarde/restauration. L’authentification se fera à l’aide de **JSON Web Tokens (JWT)** pour garantir une connexion sécurisée. Un système de gestion des rôles sera mis en place pour attribuer des privilèges différenciés aux utilisateurs (administrateurs, utilisateurs réguliers). Chaque action critique (sauvegarde, restauration, modification des connexions) sera soumise à des contrôles d'accès rigoureux.

- **Entrées** :  
  - Identifiants de connexion utilisateur (nom d'utilisateur et mot de passe).  
  - Token JWT pour vérifier l’authenticité de l’utilisateur.  
  - Rôles utilisateur (administrateur, utilisateur régulier).  
  - Requête API pour actions sensibles.

- **Sorties** :  
  - Confirmation d'authentification réussie ou échouée.  
  - Expiration du token JWT après une période définie pour renforcer la sécurité.  
  - Refus d’accès aux fonctionnalités non autorisées selon le rôle.  
  - Logs des tentatives d’accès et des actions sensibles (ajout de bases de données, sauvegardes).  
  - Notifications de connexions suspectes (nouvel appareil/emplacement).

- **Critères d'acceptation** :  
  - Authentification via tokens JWT.  
  - Contrôle strict des accès en fonction des rôles.  
  - Expiration des tokens JWT après un délai prédéfini pour forcer la reconnexion.  
  - Journalisation des actions sensibles pour audit.  
  - Notifications en cas de connexions suspectes.  
  - Session utilisateur expirée après inactivité.

- **Priorité** : Élevée.

#### **2.2.8. Gestion des logs et audit**

- **Nom de la fonctionnalité** : Gestion des logs et audit.

- **Description** : Cette fonctionnalité permet de suivre et historiser toutes les opérations effectuées via SafeBase, telles que les sauvegardes, restaurations, échecs, et alertes. Les logs enregistrent les événements critiques, y compris les tentatives de connexion et les actions des utilisateurs, afin de garantir une traçabilité complète. Ces logs sont essentiels pour le diagnostic des incidents et l’audit des opérations. Les administrateurs peuvent consulter, filtrer, et exporter ces logs, ainsi que configurer des mécanismes de rotation et de rétention pour garantir une gestion efficace de l’espace de stockage.

- **Entrées** :  
  - Événements générés par SafeBase : succès ou échec des sauvegardes/restaurations, tentatives de connexion, modifications des bases de données, alertes.  
  - Paramètres de filtrage pour consulter les logs (par date, type d'événement, utilisateur, etc.).  
  - Paramètres de configuration pour la rétention et la rotation des logs.

- **Sorties** :  
  - Logs détaillés incluant la date, l’heure, l’utilisateur, et le type d’action (succès, échec).  
  - Fichiers de logs exportables au format CSV ou JSON pour analyse externe.  
  - Rotation automatique des logs pour éviter une surcharge de stockage, avec suppression ou archivage des anciens logs.  
  - Interface de consultation avec filtres (par date, utilisateur, type d’action).  
  - Notifications d’anomalies basées sur les logs (ex. : multiples échecs de sauvegarde, tentatives de connexion échouées).  
  - Journalisation des changements de configuration importants (ex. : modification des paramètres de sauvegarde, ajout/suppression de bases de données).

- **Critères d'acceptation** :  
  - Tous les événements critiques (sauvegardes, restaurations, connexions, alertes, changements de configuration) doivent être enregistrés dans les logs.  
  - Les administrateurs doivent pouvoir consulter et filtrer les logs en fonction de critères définis.  
  - Les logs doivent pouvoir être exportés aux formats standard (CSV, JSON).  
  - Les logs doivent être automatiquement archivés après une période définie (ex. : 90 jours), avec une option pour ajuster la durée de rétention.  
  - En cas d’anomalie (ex. : échecs multiples), une notification doit être envoyée et enregistrée dans les logs.  
  - L'accès aux logs doit être restreint aux administrateurs pour garantir la confidentialité des données sensibles.

- **Priorité** : Élevée.

#### **2.2.9. Personnalisation des notifications**

- **Nom de la fonctionnalité** : Personnalisation des notifications.

- **Description** : Cette fonctionnalité permet aux utilisateurs de configurer et personnaliser les notifications qu'ils souhaitent recevoir en cas d'événements spécifiques liés aux sauvegardes, restaurations, échecs ou autres actions critiques. Les utilisateurs peuvent choisir les types d'événements, le canal de notification (email, interface utilisateur), la fréquence des notifications, et la priorisation des alertes. Les notifications peuvent être envoyées instantanément, résumées quotidiennement ou hebdomadairement. Les utilisateurs peuvent aussi consulter un historique des notifications envoyées et "mettre en veille" certaines notifications temporaires.

- **Entrées** :  
  - Sélection des événements à notifier (succès/échec des sauvegardes, restaurations, erreurs de connexion, etc.).  
  - Canal de notification préféré (email, notifications dans l’interface).  
  - Niveau de criticité des événements déclenchant une notification (ex. : échec critique uniquement, ou toutes les actions).  
  - Fréquence des notifications (instantanées, résumé quotidien ou hebdomadaire).  
  - Option de mise en veille temporaire des notifications pour certains événements.

- **Sorties** :  
  - Notifications envoyées via les canaux configurés (email, interface utilisateur).  
  - Logs des notifications envoyées (avec date, heure et type d'événement notifié).  
  - Interface permettant de gérer les préférences de notification et consulter l’historique des notifications envoyées.

- **Critères d'acceptation** :  
  - Les utilisateurs doivent pouvoir personnaliser les types d'événements pour lesquels ils souhaitent être notifiés (succès, échec, erreur critique).  
  - Les notifications doivent être envoyées via le canal configuré (email, interface utilisateur).  
  - Les utilisateurs doivent pouvoir définir la fréquence des notifications (instantanée, résumée).  
  - Les administrateurs doivent pouvoir accéder aux logs des notifications envoyées pour vérifier leur bonne transmission.  
  - La configuration des notifications doit être intuitive et accessible via l'interface utilisateur.  
  - Une option de mise en veille temporaire des notifications doit être disponible pour éviter des alertes non désirées.

- **Priorité** : Moyenne.

#### **2.2.10. Support multi-instance**

- **Nom de la fonctionnalité** : Gestion multi-instance.

- **Description** : Cette fonctionnalité permet de gérer plusieurs bases de données simultanément au sein de SafeBase. Les utilisateurs peuvent ajouter, configurer, surveiller, et effectuer des sauvegardes ou restaurations sur plusieurs bases de données MySQL et PostgreSQL en parallèle. L’interface permet de distinguer clairement chaque instance, d’afficher leur statut en temps réel (sauvegarde en cours, échec, réussite), et de gérer chaque instance de manière individuelle ou groupée. Les utilisateurs peuvent également effectuer des actions groupées sur plusieurs instances à la fois.

- **Entrées** :  
  - Liste des bases de données ajoutées (MySQL, PostgreSQL).  
  - Paramètres de connexion pour chaque instance (adresse IP, port, nom de la base, identifiants).  
  - Actions de gestion : ajout, modification, suppression, déclenchement de sauvegardes ou restaurations, configuration des alertes.  
  - Filtrage et recherche dans la liste des bases de données (par statut, nom).  
  - Configuration des notifications spécifiques par instance.

- **Sorties** :  
  - Affichage en temps réel de l’état de chaque instance (en cours de sauvegarde, en échec, restaurée).  
  - Confirmation des actions effectuées pour chaque base (sauvegarde réussie, échec de la restauration).  
  - Logs détaillés pour chaque instance avec les événements associés (sauvegardes, restaurations, alertes).  
  - Affichage des ressources utilisées par chaque base (espace disque consommé, taille des sauvegardes, fréquence des sauvegardes).

- **Critères d'acceptation** :  
  - Les utilisateurs doivent pouvoir gérer plusieurs instances de bases de données en parallèle (MySQL et PostgreSQL).  
  - L'interface doit afficher l’état en temps réel de chaque instance.  
  - Les utilisateurs doivent pouvoir filtrer et rechercher des bases de données dans la liste.  
  - Chaque instance doit pouvoir être gérée individuellement ou en groupe (sauvegarde/restauration).  
  - Les logs doivent consigner toutes les actions effectuées pour chaque base de données de manière distincte.  
  - Les utilisateurs doivent pouvoir configurer des notifications spécifiques pour chaque instance.

- **Priorité** : Moyenne.

#### **2.2.11. Planification avancée des sauvegardes**

- **Nom de la fonctionnalité** : Planification avancée des sauvegardes.

- **Description** : Cette fonctionnalité permet de définir des stratégies de sauvegarde avancées, incluant des sauvegardes complètes, différentielles ou incrémentielles. Les utilisateurs peuvent configurer des sauvegardes en fonction de leur fréquence ou de certains événements système (ex. : modification de la base de données). Une stratégie de **rotation des sauvegardes** permet de limiter l’espace utilisé en supprimant automatiquement les anciennes sauvegardes selon une politique de rétention. Chaque base de données peut être configurée individuellement pour avoir sa propre stratégie de sauvegarde.

- **Entrées** :  
  - Type de sauvegarde (complète, incrémentielle, différentielle).  
  - Fréquence et récurrence des sauvegardes (ex. : tous les jours, toutes les semaines).  
  - Déclenchement des sauvegardes basé sur des événements spécifiques (modifications de la base de données).  
  - Choix des bases de données spécifiques pour chaque stratégie de sauvegarde.  
  - Durée de rétention des sauvegardes, avec personnalisation selon le type de sauvegarde.  
  - Stratégie de rotation des sauvegardes (nombre de versions à conserver).  
  - Paramètres de planification personnalisés (ex. : sauvegarde complète quotidienne et sauvegarde incrémentielle toutes les heures).

- **Sorties** :  
  - Confirmation de la sauvegarde programmée et exécution selon les paramètres définis.  
  - Suppression automatique des anciennes sauvegardes selon la stratégie de rotation définie.  
  - Logs des sauvegardes exécutées, y compris le type de sauvegarde (complète, incrémentielle, différentielle) et la réussite ou l’échec des processus.  
  - Notifications sur l’état des sauvegardes (succès, échec) envoyées aux utilisateurs.

- **Critères d'acceptation** :  
  - Les utilisateurs doivent pouvoir configurer des sauvegardes différentielles ou incrémentielles en plus des sauvegardes complètes.  
  - Les sauvegardes peuvent être déclenchées selon un calendrier ou un événement spécifique (ex. : modification de la base).  
  - Les utilisateurs doivent pouvoir sélectionner des bases de données spécifiques pour les sauvegardes planifiées.  
  - Le système doit appliquer une stratégie de rotation automatique des sauvegardes pour conserver uniquement les versions récentes.  
  - Les logs doivent consigner toutes les sauvegardes avec le type, la date, et la réussite ou l’échec du processus.  
  - Les notifications doivent informer les utilisateurs du succès ou de l’échec des sauvegardes planifiées.

- **Priorité** : Élevée.

## **3. Exigences Non Fonctionnelles**

### **3.1. Performance**

Cette section définit les exigences de performance pour garantir que SafeBase fonctionne de manière fluide et efficace, même lorsque plusieurs bases de données sont gérées simultanément. L'objectif est de s'assurer que le système répond rapidement aux requêtes des utilisateurs et qu'il est capable de supporter une charge croissante sans perte significative de performance.

#### **Exigences**

- **Temps de réponse** : Le système doit garantir que les opérations de sauvegarde et de restauration s'exécutent dans un temps raisonnable. Les sauvegardes d'une base de données de taille moyenne (500 Mo à 1 Go) doivent être effectuées en **moins de 60 secondes**, tandis que les restaurations doivent être achevées en **moins de 120 secondes**.

- **Concurrence** : SafeBase doit pouvoir gérer plusieurs sauvegardes ou restaurations en parallèle sans affecter les performances globales du système. Le système doit pouvoir traiter simultanément au moins **5 bases de données actives**, avec une augmentation potentielle jusqu'à **10 bases** dans des conditions de charge plus élevées, sans dégradation notable du temps de réponse.

- **Scalabilité** : L'architecture de SafeBase doit être conçue de manière à pouvoir évoluer facilement pour supporter une charge croissante d'utilisateurs et de bases de données. Le système doit être capable de passer de la gestion de **5** à **50 bases de données**, sans modifications structurelles majeures, tout en maintenant des performances acceptables.

- **Utilisation des ressources** : SafeBase doit utiliser efficacement les ressources matérielles, y compris le processeur et la mémoire. Le système doit limiter l’utilisation du CPU à **50 %** maximum des capacités disponibles et de la mémoire à **60 %** maximum, même lors de charges élevées, afin de garantir que d'autres applications exécutées sur la même machine ne soient pas affectées.

- **Optimisation du stockage** : Les fichiers de sauvegarde doivent être compressés automatiquement pour minimiser l'utilisation de l'espace disque, sans compromettre la vitesse de sauvegarde et de restauration. La compression doit permettre de réduire la taille des fichiers d'au moins **50 %**, tout en garantissant un temps de sauvegarde et de restauration acceptable.

#### **Méthodes de vérification**

- **Logs avec timestamps** : Toutes les opérations de sauvegarde et de restauration doivent être enregistrées dans des logs avec des timestamps pour permettre une analyse précise des temps de réponse.
- **Benchmarking régulier** : Utiliser des outils de benchmarking comme `pgbench` pour PostgreSQL et `mysqlpump` pour MySQL afin de mesurer régulièrement les performances des sauvegardes et restaurations.
- **Surveillance en temps réel** : Mettre en place des outils de monitoring tels que **Prometheus** pour observer les temps de réponse des sauvegardes et restaurations en temps réel, et configurer des alertes en cas de dépassement des seuils définis.

### **3.2. Sécurité**

Cette section décrit les mesures de sécurité à implémenter pour garantir que les données gérées par SafeBase restent protégées, qu'il s'agisse des données en transit ou stockées, ainsi que les mécanismes de contrôle d'accès et de journalisation pour assurer une traçabilité complète des opérations critiques.

#### **Exigences**

- **Authentification sécurisée** :
  - SafeBase doit implémenter une authentification forte basée sur les **JSON Web Tokens (JWT)**. Chaque utilisateur doit être authentifié via une combinaison de nom d’utilisateur et de mot de passe sécurisés. Les sessions utilisateur doivent expirer automatiquement après **30 minutes** d'inactivité afin de réduire les risques de session non surveillée.
  
- **Chiffrement des données en transit** :
  - Toutes les communications entre les composants du système (API, frontend, bases de données) doivent être protégées par le chiffrement **TLS/SSL**. Cela garantit que les données sensibles, y compris les identifiants et les informations de sauvegarde, ne puissent pas être interceptées lors de leur transmission.

- **Chiffrement des données au repos** :
  - Les fichiers de sauvegarde générés par SafeBase doivent être chiffrés au repos, à l'aide d'un algorithme de chiffrement fort (ex. : **AES-256**). Cela garantit que les données sauvegardées sont protégées même en cas d'accès non autorisé au stockage où elles sont hébergées.

- **Gestion des accès** :
  - SafeBase doit intégrer un système de contrôle d'accès basé sur les **rôles** (RBAC - Role-Based Access Control). Seuls les administrateurs doivent pouvoir ajouter, supprimer ou modifier les bases de données, tandis que les utilisateurs réguliers auront des privilèges restreints. Chaque action doit être validée en fonction des permissions de l’utilisateur connecté.
  
- **Protection contre les attaques** :
  - SafeBase doit être conçu pour résister aux attaques courantes, notamment :
    - **Attaques par force brute** : Limiter le nombre de tentatives de connexion avant de verrouiller temporairement l’accès au compte utilisateur.
    - **Injection SQL** : S'assurer que toutes les requêtes vers les bases de données soient paramétrées correctement afin d'éviter les attaques par injection.
    - **Attaques DDoS** : Mettre en place des mesures pour limiter les requêtes par IP, afin de se prémunir contre les attaques de type déni de service distribué (DDoS).

- **Journalisation des accès** :
  - Toutes les tentatives de connexion (réussies ou échouées), ainsi que les actions sensibles (ajout de base de données, déclenchement de sauvegardes/restaurations), doivent être enregistrées dans les **logs d’audit**. Ces logs doivent inclure l'horodatage, l'identité de l'utilisateur, et l'action effectuée. Les logs doivent être conservés pendant au moins **90 jours** pour assurer un suivi complet et permettre des audits de sécurité.

- **Notifications de sécurité** :
  - SafeBase doit notifier automatiquement les administrateurs en cas de détection d'une activité suspecte (tentatives de connexion répétées échouées, modifications non autorisées des paramètres de sécurité). Ces notifications doivent être envoyées par email ou via l'interface d'alerte en temps réel.

#### **Méthodes de vérification**

- **Tests de pénétration** : Des tests de pénétration doivent être régulièrement effectués pour évaluer la robustesse des mesures de sécurité mises en place et identifier les éventuelles vulnérabilités.
- **Audit des logs** : Les logs doivent être régulièrement analysés pour détecter d'éventuelles anomalies, telles que des tentatives de connexion échouées répétées ou des actions suspectes.
- **Monitoring des attaques** : Utiliser des outils de surveillance pour identifier des comportements anormaux qui pourraient signaler des attaques en cours, et générer des alertes lorsque des seuils prédéfinis sont atteints.
- **Tests automatisés de sécurité** : Intégrer des tests de sécurité dans le pipeline de développement (ex. : tests d'injection SQL ou tests d'authentification) pour s'assurer que les nouvelles mises à jour ne compromettent pas la sécurité du système.

### **3.3. Compatibilité**

Cette section décrit les exigences en matière de compatibilité pour SafeBase. L'application doit pouvoir fonctionner sur différentes plateformes et être accessible via plusieurs navigateurs et systèmes de gestion de bases de données, tout en assurant une expérience utilisateur fluide et cohérente.

#### **Exigences** :

- **Compatibilité avec les systèmes d'exploitation** :  
  - SafeBase doit être compatible avec les principaux systèmes d'exploitation, incluant :
    - **Linux (Ubuntu 20.04 et versions ultérieures)**.
    - **Windows Server 2016 et versions ultérieures**.
    - **macOS (versions actuelles et récentes)**.
  - L'application doit fonctionner sans nécessiter de modifications spécifiques pour chaque système d'exploitation supporté.

- **Compatibilité des bases de données** :  
  - SafeBase doit supporter les versions courantes de **MySQL** et **PostgreSQL**, notamment :
    - **MySQL** : Version **5.7** et ultérieure.
    - **PostgreSQL** : Version **12** et ultérieure.
  - Les fonctionnalités telles que les sauvegardes, restaurations, et gestion des connexions doivent fonctionner de manière fluide avec ces versions.

- **Compatibilité avec les navigateurs** :  
  - L'interface utilisateur de SafeBase doit être compatible avec les principaux navigateurs web, et assurer une expérience utilisateur fluide sur les versions actuelles et récentes (N-1). Les navigateurs supportés incluent :
    - **Google Chrome** : Version **90** et ultérieure.
    - **Mozilla Firefox** : Version **85** et ultérieure.
    - **Microsoft Edge** : Version **90** et ultérieure.
    - **Safari** : Version **14** et ultérieure.
  - L'interface doit s'adapter aux différentes résolutions d’écran et aux plateformes mobiles et desktop.

- **Compatibilité avec les API REST** :  
  - SafeBase doit fournir une **API RESTful** standard, respectant les bonnes pratiques et permettant une intégration avec des outils et services tiers. Les réponses doivent être formatées en **JSON** pour assurer une interopérabilité maximale avec d'autres systèmes.
  - L'API doit être compatible avec des outils d'intégration continue, tels que **Jenkins** ou **GitLab CI**, pour automatiser les tâches de test et de déploiement.

- **Compatibilité avec Docker** :  
  - L'ensemble du système doit être conteneurisé à l'aide de **Docker**, garantissant ainsi une compatibilité maximale lors des déploiements sur différents environnements. Le fichier `docker-compose.yml` doit assurer l'orchestration des services nécessaires (backend, frontend, MySQL, PostgreSQL).
  - Les conteneurs doivent fonctionner de manière fluide sur des environnements Docker conformes aux standards, tels que **Docker Desktop** (Windows, macOS) et **Docker Engine** (Linux).

#### **Méthodes de vérification** :

- **Tests de compatibilité multi-plateformes** :  
  - Effectuer des tests sur toutes les plateformes supportées (Linux, Windows, macOS) pour s'assurer que SafeBase fonctionne correctement sur chacun des systèmes d'exploitation sans modifications supplémentaires.
  
- **Tests cross-navigateurs** :  
  - L'interface utilisateur doit être testée à l'aide d'outils de test de compatibilité tels que **BrowserStack** ou **Selenium** pour vérifier le bon fonctionnement sur les versions supportées des navigateurs.

- **Tests d'intégration des API** :  
  - Utiliser des outils tels que **Postman** ou **Insomnia** pour valider que les API RESTful respectent les normes, en termes de format de réponse (JSON), de compatibilité et d'interopérabilité avec d'autres systèmes.

- **Validation Docker** :  
  - Vérifier le bon fonctionnement des conteneurs sur des environnements Docker Desktop et Docker Engine, avec des tests de déploiement multi-plateformes pour garantir une compatibilité maximale.

### **3.4. Fiabilité et Disponibilité**

Cette section décrit les exigences liées à la disponibilité et à la résilience de SafeBase. Il est essentiel que le système fonctionne de manière continue, avec des mécanismes en place pour gérer les interruptions et garantir une reprise rapide après une panne. Ces exigences garantissent que SafeBase offre un haut niveau de fiabilité, avec un temps d’arrêt minimal et une disponibilité maximale.

#### **Exigences** :

- **SLA (Service Level Agreement)** :
  - SafeBase doit garantir une disponibilité d’au moins **99.9 %**, ce qui correspond à un maximum de **8 heures d’indisponibilité** par an.
  - Les interruptions planifiées (ex. : maintenance) doivent être limitées à des plages horaires définies, avec un préavis d'au moins **24 heures** aux utilisateurs.

- **Tolérance aux pannes** :
  - SafeBase doit être capable de continuer à fonctionner en cas de panne partielle du système. Si une base de données spécifique rencontre une panne, les autres bases de données doivent continuer à fonctionner normalement.
  - Des mécanismes de **redémarrage automatique** doivent être mis en place pour les processus de sauvegarde ou de restauration en cas d'interruption (ex. : perte temporaire de connexion à une base de données).

- **Reprise après sinistre** :
  - SafeBase doit inclure une solution de reprise après sinistre qui permet de minimiser la perte de données et le temps de récupération après une panne majeure. Les données sauvegardées doivent être stockées de manière redondante sur plusieurs serveurs ou dans le cloud.
  - La stratégie de reprise après sinistre doit inclure des sauvegardes fréquentes des données critiques (ex. : toutes les **24 heures**) et des points de restauration récents pour garantir une reprise rapide.

- **Redondance** :
  - Les bases de données critiques doivent être dupliquées sur plusieurs serveurs (via une solution de **réplication de bases de données**). Cela garantit qu'en cas de panne d'un serveur, les bases de données peuvent toujours être consultées à partir d'un autre serveur actif.
  - La configuration doit également inclure des services de **load balancing** pour répartir la charge entre plusieurs serveurs et éviter la surcharge d’un seul serveur.

- **Monitoring et alertes** :
  - SafeBase doit intégrer un système de **surveillance active** qui détecte les anomalies, telles que des baisses de performance, des échecs de sauvegarde, ou des interruptions de service.
  - Les administrateurs doivent recevoir des **alertes en temps réel** en cas de détection de panne ou d'interruption, via email ou une interface de gestion des alertes.
  - Les métriques de performance (temps de réponse, disponibilité) doivent être collectées et affichées dans un tableau de bord pour un suivi constant de l'état du système.

#### **Méthodes de vérification** :

- **Tests de charge et de tolérance aux pannes** :
  - Des tests de charge doivent être effectués pour vérifier que le système peut gérer une forte demande sans interruption.
  - Simuler des pannes de serveur pour vérifier que le système continue de fonctionner correctement grâce aux mécanismes de redondance.

- **Tests de reprise après sinistre** :
  - Des tests réguliers doivent être effectués pour vérifier que les sauvegardes peuvent être restaurées rapidement en cas de sinistre, et que le point de restauration le plus récent est accessible.

- **Surveillance continue** :
  - Utiliser des outils de surveillance comme **Prometheus** et **Grafana** pour collecter les métriques en temps réel et générer des alertes en cas d'anomalie.

### **Glossaire**

- **Authentification sécurisée** : Processus de vérification de l’identité d’un utilisateur pour garantir qu’il est autorisé à accéder aux ressources ou fonctionnalités protégées de SafeBase.
  
- **Chiffrement des données** : Technique utilisée pour protéger les données en les rendant illisibles à quiconque n'a pas la clé de déchiffrement. SafeBase utilise le chiffrement pour sécuriser les données en transit (via TLS) et au repos (via AES-256).

- **Compression des sauvegardes** : Technique utilisée pour réduire la taille des fichiers de sauvegarde en éliminant les données redondantes, tout en conservant l'intégrité des données sauvegardées.

- **Docker** : Technologie permettant de créer des conteneurs qui isolent des applications et leurs dépendances dans un environnement reproductible. SafeBase utilise Docker pour la conteneurisation de son API, ses bases de données et son interface utilisateur.

- **Gestion des accès** : Contrôle permettant de définir quels utilisateurs ou rôles ont le droit d'accéder ou de modifier certaines parties du système. SafeBase applique une gestion des accès basée sur les rôles (RBAC).

- **Gestion des versions des sauvegardes** : Fonctionnalité qui permet de stocker et d'organiser plusieurs versions d'une base de données sauvegardée, avec la possibilité de restaurer une version spécifique en cas de besoin.

- **Journalisation (logs)** : Processus d'enregistrement des événements du système, incluant les opérations de sauvegarde, restauration, tentatives de connexion, et autres actions sensibles, pour permettre une traçabilité complète et faciliter les audits.

- **Monitoring** : Système de surveillance en temps réel permettant de détecter les anomalies dans le fonctionnement de SafeBase, telles que les échecs de sauvegarde ou de restauration. Des alertes sont générées et transmises aux administrateurs.

- **Notification** : Système permettant d’informer les utilisateurs des événements critiques liés aux sauvegardes ou restaurations, comme les succès ou échecs de ces processus. SafeBase offre des notifications via email ou dans l’interface utilisateur.

- **Planification des sauvegardes** : Processus qui permet de configurer des sauvegardes régulières et automatiques en définissant des intervalles de temps via CRON. Cette planification est essentielle pour garantir la régularité des sauvegardes sans intervention manuelle.

- **Réplication des bases de données** : Processus consistant à dupliquer les données entre plusieurs serveurs afin de garantir leur haute disponibilité et permettre une tolérance aux pannes.

- **Restaurer une sauvegarde** : Action qui consiste à rétablir une base de données à partir d'un fichier de sauvegarde, permettant ainsi de retrouver l'état de la base de données à un moment donné.

- **Rotation des sauvegardes** : Méthode qui consiste à supprimer ou archiver les anciennes versions des sauvegardes pour libérer de l'espace et ne conserver que les versions les plus récentes.

- **Sauvegarde complète** : Sauvegarde de l'intégralité d'une base de données, y compris sa structure et ses données.

- **Sauvegarde différentielle** : Sauvegarde qui ne contient que les données modifiées depuis la dernière sauvegarde complète, permettant de réduire l'espace de stockage utilisé tout en offrant des temps de restauration plus rapides qu'une sauvegarde incrémentielle.

- **Sauvegarde incrémentielle** : Sauvegarde qui ne capture que les données modifiées depuis la dernière sauvegarde (complète ou incrémentielle), ce qui permet d’économiser de l’espace de stockage.

- **Scalabilité** : Capacité de SafeBase à évoluer pour gérer un nombre croissant d’utilisateurs ou de bases de données sans dégradation des performances.

- **Système de gestion de bases de données (SGBD)** : Logiciel qui permet de créer, manipuler, et administrer des bases de données. SafeBase prend en charge MySQL et PostgreSQL.

- **Tolérance aux pannes** : Capacité de SafeBase à continuer de fonctionner correctement même en cas de défaillance d'un composant du système, grâce à des mécanismes de redondance et de réplication.

- **Traçabilité** : Capacité à suivre toutes les actions effectuées dans le système (sauvegardes, restaurations, connexions, modifications) via des logs, afin de pouvoir auditer le système en cas d'incident.

Voici la version finale de la section **5. Révision et Validation** intégrant l'utilisation des outils GitHub pour réaliser les révisions et validations :

---

## **5. Révision et Validation**

Cette section décrit les étapes et les outils utilisés pour réviser et valider le document des exigences fonctionnelles de SafeBase. Le processus s'appuie sur GitHub pour garantir une traçabilité complète et une collaboration efficace entre les parties prenantes.

### **5.1. Processus de validation**

Le processus de validation suit les étapes suivantes :

1. **Révision interne par l'équipe de développement** :  
   - Avant d’être soumis aux parties prenantes, le document est examiné par l’équipe de développement. Chaque membre effectue une première révision pour vérifier la faisabilité, la cohérence, et la complétude des exigences.

2. **Gestion des révisions via GitHub** :
   - Une branche dédiée (ex. : `revision-1`) est créée pour les révisions internes. Chaque membre de l’équipe peut proposer des modifications via des commits sur cette branche. 
   - Une **Pull Request (PR)** est ensuite ouverte pour demander une révision des parties prenantes externes. Les parties prenantes peuvent commenter les lignes du document, proposer des modifications ou approuver directement les changements. 
   - Si des changements sont demandés, la PR est mise à jour jusqu’à obtention de l’approbation finale.

3. **Révision par les parties prenantes** :  
   - Les parties prenantes incluent les responsables métiers, techniques, et de sécurité. Chaque partie prenante reçoit une notification sur GitHub et dispose de **X jours** pour soumettre ses commentaires via la PR.
   - Les responsables métiers valident les aspects fonctionnels, tandis que l’équipe technique examine les spécifications techniques et l’équipe sécurité valide les exigences liées à la sécurité.

4. **Réunion de validation** :  
   - Une réunion avec toutes les parties prenantes est organisée pour discuter des points soulevés lors de la révision. Si des modifications sont convenues, elles sont intégrées à la branche `revision-1` avant la validation finale.

5. **Validation finale et fusion** :  
   - Une fois les modifications approuvées, la Pull Request est fusionnée dans la branche principale (`main`). Cette fusion officialise la version finale du document.
   - Un tag ou une **release** est créé sur GitHub pour marquer la validation officielle du document (ex. : `v1.0`).

### **5.2. Utilisation des outils GitHub**

GitHub offre plusieurs outils pour faciliter la collaboration et la validation :

- **Branches et Pull Requests** : Chaque révision majeure du document se fait sur une branche dédiée. Les modifications sont soumises via une PR, permettant aux parties prenantes de réviser et d'approuver les changements.
- **Historique des commits** : Toutes les modifications sont traçables via les commits. Cela permet de revenir à une version antérieure si nécessaire.
- **Signatures numériques via les Pull Requests** : Les parties prenantes utilisent l'option **Approve** dans GitHub pour valider les modifications. Cela remplace les signatures physiques et assure la traçabilité des validations.
- **Releases** : Une fois le document validé, une release est créée pour marquer la version finale et figer les modifications à une version spécifique (ex. : `v1.0`).

### **5.3. Signatures**

Une fois le document validé, les parties prenantes signent la version finale via GitHub. Voici la liste des parties prenantes impliquées dans la validation :

| Nom                       | Rôle                                 | Signature          | Date           |
|----------------------------|--------------------------------------|--------------------|----------------|
| [Nom du responsable métier] | Responsable métier                   | Validation GitHub  | [Date]         |
| [Nom du responsable technique] | Responsable technique               | Validation GitHub  | [Date]         |
| [Nom du chef de projet]     | Chef de projet                       | Validation GitHub  | [Date]         |
| [Nom de l'équipe de sécurité] | Responsable sécurité                | Validation GitHub  | [Date]         |
| [Nom de l'équipe de développement] | Représentant de l’équipe développement | Validation GitHub  | [Date]         |

---

### Outils GitHub utilisés pour la révision et validation :

1. **Branches pour isoler les révisions**.
2. **Pull Requests (PR)** pour soumettre, réviser, et approuver les modifications.
3. **Historique des commits** pour garantir la traçabilité des modifications.
4. **Approvals dans les PRs** pour les signatures numériques des parties prenantes.
5. **Releases** pour marquer les versions finales validées.

---
