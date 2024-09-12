### Endpoints pour la gestion des sauvegardes

### 1. POST /backups

- **Description** : Déclenche une sauvegarde manuelle pour une base de données.
- **Méthode HTTP** : `POST`
- **Corps de la requête** :

  ```json
  {
    "databaseId": "123"
  }
  ```

- **Réponse** :
  - `202 Accepted` : La sauvegarde a été déclenchée.

    ```json
    {
      "message": "Backup triggered for database ID 123"
    }
    ```

  - `404 Not Found` : La base de données spécifiée n'a pas été trouvée.

    ```json
    {
      "error": "Database not found"
    }
    ```

  - `500 Internal Server Error` : Une erreur est survenue lors du déclenchement de la sauvegarde.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

### 2. GET /backups

- **Description** : Récupère la liste de toutes les sauvegardes effectuées.
- **Méthode HTTP** : `GET`
- **Corps de la requête** : Aucun
- **Réponse** :
  - `200 OK` : Liste des sauvegardes.

    ```json
    [
      {
        "backupId": "1",
        "databaseId": "123",
        "databaseName": "my_database",
        "status": "success",
        "timestamp": "2024-09-12T12:30:00Z"
      },
      {
        "backupId": "2",
        "databaseId": "124",
        "databaseName": "test_db",
        "status": "failed",
        "timestamp": "2024-09-11T10:45:00Z"
      }
    ]
    ```

  - `500 Internal Server Error` : Une erreur est survenue lors de la récupération des sauvegardes.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

### 3. GET /backups/:backupId

- **Description** : Récupère les détails d'une sauvegarde spécifique.
- **Méthode HTTP** : `GET`
- **Paramètres d'URL** :
  - `:backupId` : L'ID de la sauvegarde à récupérer.
- **Réponse** :
  - `200 OK` : Détails de la sauvegarde.

    ```json
    {
      "backupId": "1",
      "databaseId": "123",
      "databaseName": "my_database",
      "status": "success",
      "timestamp": "2024-09-12T12:30:00Z",
      "fileLocation": "/path/to/backup/file.sql"
    }
    ```

  - `404 Not Found` : Sauvegarde non trouvée.

    ```json
    {
      "error": "Backup not found"
    }
    ```

  - `500 Internal Server Error` : Une erreur est survenue lors de la récupération des détails de la sauvegarde.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

### 4. DELETE /backups/:backupId

- **Description** : Supprime une sauvegarde spécifique.
- **Méthode HTTP** : `DELETE`
- **Paramètres d'URL** :
  - `:backupId` : L'ID de la sauvegarde à supprimer.
- **Réponse** :
  - `204 No Content` : La sauvegarde a été supprimée avec succès. Aucun contenu n'est renvoyé.
  - `404 Not Found` : Sauvegarde non trouvée.

    ```json
    {
      "error": "Backup not found"
    }
    ```

  - `500 Internal Server Error` : Une erreur est survenue lors de la suppression de la sauvegarde.

    ```json
    {
      "error": "Internal server error"
    }
    ```
