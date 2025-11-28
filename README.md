# **Voima – Take-Home Backend Feature**

### **Hydration Habit Micro-Feature**

This tiny backend feature supports one of the most important self-preservation habits for people living with Sickle Cell Disease: **hydration**.
Dehydration increases blood viscosity, which can trigger sickling and lead to painful crisis episodes. Even small, steady hydration habits make a meaningful difference — that’s why this feature focuses on helping users log hydration and receive simple, supportive insights.

---

## 🚰 **Habit Chosen: Hydration Tracking**

Hydration is one of the most clinically important and user-friendly habits to support in SCD management. It’s actionable, universal, and easy to log — making it perfect for a lightweight take-home feature.

This feature allows users to:

* **Record** a drink (in milliliters)
* **Optionally add a reference note**
* **Get insights** based on their last few entries (e.g., consistency, low average intake)

---

## 📌 **Endpoints**

### **1. Record a hydration entry**

**POST `/api/hydrate`**

**Body Example:**

```json
{
  "amount": 250,
  "reference": "Morning drink"
}
```

**Returns**

* confirmation message
* saved hydration entry

---

### **2. Get hydration insights**

**GET `/api/hydrate/insight`**

**Returns**

* last 3 hydration entries
* recent average intake
* a simple, supportive insight such as:

  * “Your average intake is low, try slightly bigger servings.”
  * “Great job staying consistent!”

---

## 🧠 **Insight Logic**

The server:

1. Fetches the **last 3 hydration entries**
2. Computes your **average intake (ml)**
3. Returns an insight such as:

* **Avg < 200ml:** encourage slightly larger drinks
* **3 consistent logs:** positive reinforcement
* **Less than 3 logs:** gentle encouragement to log more

The goal: **simple, human, helpful guidance.**

---

## 🛠 **How to Run the App**

### **1. Clone the repo**

```bash
git clone https://github.com/mustapha0705/voima-take-home.git
cd voima-take-home
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Create a `.env` file**

Add your MongoDB connection string:

```
MONGO_URI=mongodb+srv://<your-uri>
```

### **4. Start the development server**

```bash
npm run dev
```

Server runs on: **[http://localhost:6001](http://localhost:6001)**

---

## 🤝 **About the Submission**

This small feature demonstrates:

* Clear thinking
* Lightweight, clean design
* Human-centered insight logic
* Realistic implementation aligned with Voima’s mission