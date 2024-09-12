# SafeBase API - Restauration des Bases de Données

Ce document décrit les endpoints REST pour la restauration des bases de données dans SafeBase. Ces endpoints permettent de déclencher une restauration à partir d'une sauvegarde existante et de vérifier l'état de la restauration.

---

## Endpoints

### 1. POST /backups/:backupId/restore

- **Description** : Déclenche une restauration pour une base de données à partir d'une sauvegarde spécifiée.
- **Méthode HTTP** : `POST`
- **Paramètres d'URL** :
  - `:backupId` : L'ID de la sauvegarde à utiliser pour la restauration.
- **Corps de la requête** : Aucun
- **Réponse** :
  - `202 Accepted` : La restauration a été déclenchée.

    ```json
    {
      "message": "Database restoration triggered for backup ID 1"
    }
    ```

  - `404 Not Found` : La sauvegarde spécifiée n'a pas été trouvée.

    ```json
    {
      "error": "Backup not found"
    }
    ```

  - `500 Internal Server Error` : Erreur lors du déclenchement de la restauration.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

### 2. GET /backups/:backupId/restore/status

- **Description** : Vérifie le statut de la restauration d'une base de données.
- **Méthode HTTP** : `GET`
- **Paramètres d'URL** :
  - `:backupId` : L'ID de la sauvegarde pour laquelle vérifier le statut de la restauration.
- **Corps de la requête** : Aucun
- **Réponse** :
  - `200 OK` : Statut de la restauration en cours ou terminé.

    ```json
    {
      "backupId": "1",
      "databaseId": "123",
      "databaseName": "my_database",
      "restoreStatus": "in_progress",  // Statut possible: in_progress, completed, failed
      "timestamp": "2024-09-12T12:30:00Z"
    }
    ```

  - `404 Not Found` : Sauvegarde ou restauration introuvable.

    ```json
    {
      "error": "Restoration not found"
    }
    ```

  - `500 Internal Server Error` : Erreur interne lors de la vérification du statut.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

## Notes supplémentaires

- **Asynchrone** : La restauration est un processus asynchrone, et le serveur accepte la requête avant la fin de l'opération.
- **Validation des données** : Il est essentiel de vérifier l'existence de la sauvegarde avant de déclencher une restauration.
- **Gestion des erreurs** : Les messages d'erreur doivent être explicites pour diagnostiquer facilement les problèmes (sauvegarde introuvable, erreur de restauration, etc.).

