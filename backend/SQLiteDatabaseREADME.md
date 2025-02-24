# SQLite Database Schema (ERD) satellites.db

## 1️⃣ Table: `profiles`
This table stores **profile-related data**.

| Column          | Data Type  | Description |
|----------------|-----------|--------------------------------------|
| `id`          | INTEGER   | Primary Key (Auto-increment) |
| `name`        | TEXT      | Unique Profile Name |
| `description` | TEXT      | Profile Description |
| `images`      | TEXT (JSON) | Stores Base64 image data |
| `uploadedFileName` | TEXT | Stores uploaded file name |

## 2️⃣ Table: `checkout_items`
This table stores **checkout section contents per profile**.

| Column      | Data Type  | Description |
|------------|-----------|--------------------------------------|
| `id`       | INTEGER   | Primary Key (Auto-increment) |
| `profile_id` | TEXT    | Foreign Key to `profiles.name` |
| `item_data` | TEXT (JSON) | Stores checkout section items |

---

## **🔄 Relationships**
- `checkout_items.profile_id` **references `profiles.name`**.
- Each **profile** can have **one set of checkout items** stored as JSON.
- `item_data` is stored **as JSON**, allowing multiple checkout items per profile.

---

## **🔹 How This Works**
- When **saving checkout items**, a row is created/updated in `checkout_items`.
- When **loading checkout items**, they are fetched using `profile_id`.

---

### **🔍 Example Queries**
#### **Insert a New Profile (Manually via SQLite shell)**
- Navigate to directory containing database file (cd (path))
- sqlite profiles.db (open the SQLite shell)
- .tables (to view tables and their columns)
- .exit

```sql
INSERT INTO profiles (name, description, images, uploadedFileName)
VALUES ('ELITE', 'Satellite profile', '[]', '');
