# SafeBase API - Gestion des Bases de Données

Ce document décrit les endpoints REST de SafeBase pour la gestion des bases de données. Ces endpoints permettent d'ajouter, de modifier, de lister et de supprimer des bases de données.

---

## Endpoints

### 1. POST /databases

- **Description** : Ajoute une nouvelle base de données dans SafeBase.
- **Méthode HTTP** : `POST`
- **Corps de la requête** :

  ```json
  {
    "name": "my_database",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "password123"
  }
  ```

- **Réponse** :
  - `201 Created` : La base de données a été ajoutée avec succès.

    ```json
    {
      "message": "Database created successfully",
      "databaseId": "1"
    }
    ```

  - `400 Bad Request` : Les paramètres d'entrée sont manquants ou invalides.

    ```json
    {
      "error": "Invalid input"
    }
    ```

---

### 2. GET /databases

- **Description** : Récupère la liste des bases de données actuellement gérées par SafeBase.
- **Méthode HTTP** : `GET`
- **Corps de la requête** : Aucun
- **Réponse** :
  - `200 OK` : Renvoie la liste des bases de données.

    ```json
    [
      {
        "id": 1,
        "name": "my_database",
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "user": "root"
      },
      {
        "id": 2,
        "name": "test_db",
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "user": "admin"
      }
    ]
    ```

  - `500 Internal Server Error` : Erreur interne du serveur.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

### 3. PUT /databases/:id

- **Description** : Modifie les informations d'une base de données existante.
- **Méthode HTTP** : `PUT`
- **Paramètres d'URL** :
  - `:id` : L'ID de la base de données à modifier.
- **Corps de la requête** :

  ```json
  {
    "name": "updated_database",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "user": "new_user",
    "password": "new_password"
  }
  ```

- **Réponse** :
  - `200 OK` : Les informations de la base de données ont été mises à jour avec succès.

    ```json
    {
      "message": "Database updated successfully"
    }
    ```

  - `404 Not Found` : Base de données introuvable.

    ```json
    {
      "error": "Database not found"
    }
    ```

  - `400 Bad Request` : Les paramètres d'entrée sont invalides.

    ```json
    {
      "error": "Invalid input"
    }
    ```

---

### 4. DELETE /databases/:id

- **Description** : Supprime une base de données existante.
- **Méthode HTTP** : `DELETE`
- **Paramètres d'URL** :
  - `:id` : L'ID de la base de données à supprimer.
- **Réponse** :
  - `204 No Content` : La base de données a été supprimée avec succès. Aucun contenu n'est renvoyé.
  - `404 Not Found` : Base de données introuvable.

    ```json
    {
      "error": "Database not found"
    }
    ```

  - `500 Internal Server Error` : Erreur interne du serveur.

    ```json
    {
      "error": "Internal server error"
    }
    ```

---

## Notes supplémentaires

- **Sécurité** : Assurez-vous que les informations de connexion à la base de données sont sécurisées, notamment par le chiffrement des mots de passe.
- **Validation des données** : Chaque requête doit être validée pour s'assurer que les paramètres fournis sont corrects et complets.
- **Gestion des erreurs** : Les messages d'erreur doivent être explicites, indiquant clairement la nature du problème (ex. : format des données, identifiant non valide).
