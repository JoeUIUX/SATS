# SQLite Database Schema (ERD) satellites.db

## 🗄️ Database Overview
The `satellites.db` SQLite database contains multiple tables for managing satellite profiles, test data, settings, and backgrounds for the SATS (Satellite Automated Testing System) application.

---

## 1️⃣ Table: `profiles`
This table stores **profile-related data** for satellite configurations.

| Column            | Data Type    | Constraints           | Description |
|-------------------|--------------|----------------------|-------------|
| `id`              | INTEGER      | PRIMARY KEY AUTOINCREMENT | Unique profile identifier |
| `name`            | TEXT         | UNIQUE NOT NULL      | Profile name (must be unique) |
| `description`     | TEXT         | DEFAULT 'No details provided.' | Profile description/specifications |
| `images`          | TEXT (JSON)  | DEFAULT '[]'         | Base64 encoded images as JSON array |
| `uploadedFileName`| TEXT         | DEFAULT ''           | Name of uploaded specification file |
| `model_path`      | TEXT         | DEFAULT NULL         | File path to associated .glb 3D model |

---

## 2️⃣ Table: `checkout_items`
This table stores **checkout section configurations per profile**.

| Column        | Data Type    | Constraints           | Description |
|---------------|--------------|----------------------|-------------|
| `id`          | INTEGER      | PRIMARY KEY AUTOINCREMENT | Unique checkout item set identifier |
| `profile_id`  | TEXT         | NOT NULL             | References profile name |
| `item_data`   | TEXT (JSON)  | NOT NULL             | Checkout items with selected options as JSON |

**Unique Constraint:** `UNIQUE(profile_id)` - Each profile can only have one checkout configuration.

---

## 3️⃣ Table: `app_settings`
This table stores **application-wide settings** including themes, fonts, and backgrounds.

| Column         | Data Type    | Constraints           | Description |
|----------------|--------------|----------------------|-------------|
| `id`           | INTEGER      | PRIMARY KEY AUTOINCREMENT | Unique setting identifier |
| `setting_key`  | TEXT         | UNIQUE NOT NULL      | Setting identifier (e.g., 'font', 'background') |
| `setting_value`| TEXT         | NOT NULL             | Setting value |
| `created_at`   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP | Record creation time |
| `updated_at`   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP | Record last update time |

**Common Settings:**
- `font` - Application font family
- `background` - Dark mode background image path
- `background_light` - Light mode background image path
- `backgroundColor` - Dark mode solid background color
- `backgroundColorLight` - Light mode solid background color

---

## 4️⃣ Table: `custom_backgrounds`
This table tracks **user-uploaded background images**.

| Column       | Data Type    | Constraints           | Description |
|--------------|--------------|----------------------|-------------|
| `id`         | INTEGER      | PRIMARY KEY AUTOINCREMENT | Unique background identifier |
| `name`       | TEXT         | NOT NULL             | Display name of background |
| `path`       | TEXT         | UNIQUE NOT NULL      | File path to background image |
| `is_dark_mode`| INTEGER     | DEFAULT 0            | 0=Light mode, 1=Dark mode background |
| `created_at` | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP | Upload timestamp |

---

## 5️⃣ Table: `test_results`
This table stores **historical test execution data** with simulation tracking.

| Column        | Data Type    | Constraints           | Description |
|---------------|--------------|----------------------|-------------|
| `id`          | INTEGER      | PRIMARY KEY AUTOINCREMENT | Unique test result identifier |
| `profile_id`  | TEXT         | NOT NULL             | References profile name |
| `component_id`| TEXT         | NOT NULL             | Component being tested (e.g., 'OBC-1', 'ADCS') |
| `test_type`   | TEXT         | NOT NULL             | Type of test performed |
| `test_date`   | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP | Test execution timestamp |
| `results`     | TEXT (JSON)  | NOT NULL             | Test results data as JSON |
| `status`      | TEXT         | NOT NULL             | Test status ('completed', 'error', etc.) |
| `notes`       | TEXT         | NULL                 | Optional test notes |
| `is_simulated`| INTEGER      | DEFAULT 0            | 0=Real hardware test, 1=Simulated test |

---

## 6️⃣ Table: `test_items`
This table stores **test items for the "Tests to Conduct" feature**.

| Column     | Data Type    | Constraints           | Description |
|------------|--------------|----------------------|-------------|
| `id`       | INTEGER      | PRIMARY KEY AUTOINCREMENT | Unique test item identifier |
| `test`     | TEXT         | NOT NULL             | Test description |
| `satellite`| TEXT         | NULL                 | Associated satellite/profile |
| `dateTime` | TEXT         | NULL                 | Scheduled test date/time |
| `loggedBy` | TEXT         | NULL                 | User who logged the test |

---

## 🔄 **Relationships & Constraints**

### **Foreign Key Relationships:**
- `checkout_items.profile_id` → `profiles.name` (references profile name, not ID)
- `test_results.profile_id` → `profiles.name` (references profile name, not ID)

### **Unique Constraints:**
- `profiles.name` - Each profile must have a unique name
- `checkout_items.profile_id` - Each profile can only have one checkout configuration
- `app_settings.setting_key` - Each setting can only have one value
- `custom_backgrounds.path` - Each background file path must be unique

### **JSON Data Structures:**

#### **`profiles.images`** JSON Structure:
```json
[
  {
    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "alt": "Uploaded image"
  }
]
```

#### **`checkout_items.item_data`** JSON Structure:
```json
[
  {
    "id": "1",
    "header": "OBC-1",
    "options": ["eMMC"],
    "isDropped": true,
    "checkedOptions": {
      "eMMC": true
    }
  }
]
```

#### **`test_results.results`** JSON Structure:
```json
{
  "duration": "2.45s",
  "testedOptions": ["eMMC"],
  "testData": {
    "voltage": "3.3V",
    "temperature": "25°C"
  },
  "simulated": false,
  "_simulationUsed": false
}
```

---

## 🔧 **Database Configuration**

The database is configured with the following SQLite pragmas for optimal performance and reliability:

- `PRAGMA foreign_keys = ON` - Enforces foreign key constraints
- `PRAGMA journal_mode = WAL` - Write-Ahead Logging for better concurrency
- `PRAGMA synchronous = NORMAL` - Balanced durability vs performance
- `PRAGMA busy_timeout = 5000` - 5-second timeout for locked database

---

## 🔍 **Example Queries**

### **Access Database:**
```bash
# Navigate to directory containing database file
cd /path/to/your/project

# Open SQLite shell
sqlite3 satellites.db

# View all tables
.tables

# View table schema
.schema profiles

# Exit SQLite shell
.exit
```

### **Insert a New Profile:**
```sql
INSERT INTO profiles (name, description, images, uploadedFileName, model_path)
VALUES ('ELITE-SAT', 'Advanced Earth observation satellite', '[]', 'elite_specs.docx', '/models/profile_1.glb');
```

### **Save Checkout Configuration:**
```sql
INSERT INTO checkout_items (profile_id, item_data)
VALUES ('ELITE-SAT', '[{"id":"1","header":"OBC-1","options":["eMMC"],"isDropped":true,"checkedOptions":{"eMMC":true}}]')
ON CONFLICT(profile_id) DO UPDATE SET item_data = excluded.item_data;
```

### **Query Test Results:**
```sql
-- Get all test results for a profile
SELECT * FROM test_results WHERE profile_id = 'ELITE-SAT' ORDER BY test_date DESC;

-- Get only simulated test results
SELECT * FROM test_results WHERE is_simulated = 1;

-- Get test results by component
SELECT * FROM test_results WHERE component_id = 'OBC-1' AND profile_id = 'ELITE-SAT';
```

### **Application Settings:**
```sql
-- Set application font
INSERT INTO app_settings (setting_key, setting_value)
VALUES ('font', 'Roboto, sans-serif')
ON CONFLICT(setting_key) DO UPDATE SET setting_value = excluded.setting_value;

-- Set dark mode background
INSERT INTO app_settings (setting_key, setting_value)
VALUES ('background', '/assets/curve_background.png')
ON CONFLICT(setting_key) DO UPDATE SET setting_value = excluded.setting_value;
```

### **Cleanup Operations:**
```sql
-- Remove all simulated test results
DELETE FROM test_results WHERE is_simulated = 1;

-- Clear test history for a specific profile
DELETE FROM test_results WHERE profile_id = 'ELITE-SAT';

-- Clear all test items
DELETE FROM test_items;
```

---

## 📊 **Database Maintenance**

### **Regular Maintenance Commands:**
```sql
-- Optimize database
VACUUM;

-- Analyze query performance
ANALYZE;

-- Check database integrity
PRAGMA integrity_check;

-- View database size
PRAGMA page_count;
PRAGMA page_size;
```

### **Backup & Recovery:**
```bash
# Create database backup
sqlite3 satellites.db ".backup satellites_backup.db"

# Restore from backup
sqlite3 satellites_restored.db ".restore satellites_backup.db"
```

---

## 🚀 **Performance Considerations**

- **Indexes:** Consider adding indexes on frequently queried columns:
  ```sql
  CREATE INDEX idx_test_results_profile_date ON test_results(profile_id, test_date);
  CREATE INDEX idx_test_results_component ON test_results(component_id);
  ```

- **JSON Queries:** For complex JSON queries, consider using SQLite's JSON1 extension:
  ```sql
  SELECT json_extract(results, '$.duration') as duration FROM test_results;
  ```

- **Connection Pooling:** The Flask application uses connection pooling for better performance.

- **WAL Mode:** Write-Ahead Logging is enabled for better concurrent access.

---

*This documentation reflects the current database schema as implemented in `backend_server.py` for the SATS application.*