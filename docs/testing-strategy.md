# Stratégie de Tests**

## **1. Introduction**

    - **Objectif :**  
      Décrire la stratégie de test adoptée pour assurer la qualité du code et la robustesse du système.
    - **Portée :**  
      Couvrir les tests unitaires, d’intégration, end-to-end (E2E), et les tests de charge.

### **2. Types de Tests**

### **2.1. Tests Unitaires**

    - **Portée :**  
      Tests isolés des composants backend (routes, services) et frontend (composants Angular).
    - **Outils utilisés :**  
      **Jest** pour les tests unitaires.
    - **Cibles :**  
      - Routes CRUD backend (Fastify).
      - Services backend (sauvegardes, CRON).
      - Composants Angular (formulaires, tableau de bord).

### **2.2. Tests d'Intégration**

    - **Portée :**  
      Vérifier l'interaction entre le backend et la base de données (MySQL) et entre le backend et le frontend.
    - **Outils utilisés :**  
      **Jest** pour simuler l’intégration avec l’API REST.

### **2.3. Tests End-to-End (E2E)**

    - **Portée :**  
      Tester des scénarios utilisateur complets du frontend (Angular) jusqu’au backend (Fastify).
    - **Outils utilisés :**  
      **Cypress** pour les scénarios utilisateurs.
    - **Cibles :**  
      - Gestion des bases de données (CRUD).
      - Déclenchement des sauvegardes.
      - Gestion des alertes et des notifications.

### **2.4. Tests de Charge et de Performance**

    - **Portée :**  
      Simuler des requêtes massives pour tester la capacité du système sous forte charge.
    - **Outils utilisés :**  
      **Artillery** ou **Gatling**.

## **3. Plan d’Exécution des Tests**

    - **Priorité des tests :**  
      - Tests unitaires d’abord.
      - Tests d’intégration ensuite.
      - Tests end-to-end (E2E) enfin.
    - **Roadmap des tests :**  
      Définir un calendrier ou un ordre de priorités pour l'exécution des tests.

## **4. Résultats des Tests**

    - **Couverture de code :**  
      Présenter les métriques de couverture obtenues pour les tests unitaires et E2E.
    - **Résultats globaux :**

  
      Synthèse des erreurs détectées et corrigées lors des tests.

## **5. Conclusion**

    - Synthèse des résultats et recommandations pour les futures étapes de tests.