# **Système de Surveillance des Bases de Données**

## **1. Introduction**

- **Objectif :**  
    Présenter le fonctionnement du système de surveillance en temps réel pour les bases de données dans SafeBase.
- **Portée :**  
    Décrire les bases de données surveillées, la manière dont les vérifications sont effectuées, et les résultats attendus.

## **2. Architecture du Système de Surveillance**

- **Composants du système :**  
  - **Backend (Fastify)** : Service de surveillance exécuté en arrière-plan pour surveiller les bases de données.
  - **Tâches CRON** : Programmées pour vérifier régulièrement l’état des bases de données.
  - **Frontend (Angular)** : Affichage des résultats dans le tableau de bord.
- **Diagramme de flux :**  
    Utiliser un diagramme de séquence ou un schéma illustrant les interactions entre les composants de surveillance.

## **3. Vérifications effectuées**

- **Connexion aux bases de données :**  
    Décrire comment et quand l’état de connexion des bases de données est vérifié.
- **Statut des sauvegardes :**  
    Vérification de la réussite ou de l’échec des dernières sauvegardes.
- **Périodicité des vérifications :**  
    Expliquer les intervalles de vérification (ex. : toutes les heures via CRON).

## **4. Interprétation des Résultats**

- **Statuts possibles :**  
  - **Actif :** La base de données est disponible et fonctionnelle.
  - **Inactif :** Problème de connexion ou base de données non disponible.
  - **Erreur :** Une erreur critique est survenue (ex. : échec de sauvegarde).
- **Affichage dans l’interface :**  
    Décrire l’utilisation des couleurs et icônes dans le tableau de bord pour représenter ces statuts.

## **5. Configuration des Tâches CRON**

- **Exemple de configuration :**  
    Présenter un exemple de fichier de configuration CRON utilisé pour planifier les vérifications de surveillance.
- **Personnalisation :**  
    Expliquer comment modifier les intervalles et la fréquence de surveillance.

## **6. Conclusion**

- Récapitulatif du rôle du système de surveillance et des résultats obtenus dans SafeBase.

