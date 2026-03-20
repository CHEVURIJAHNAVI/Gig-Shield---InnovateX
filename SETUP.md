# 🛡️ GigShield MERN Prototype

This is the full MERN-stack prototype for the GigShield Parametric Insurance app.

## Project Structure
- `/backend` — Node.js, Express, MongoDB (API + Models)
- `/frontend` — React.js (User Interface)

---

## 🚀 Setup Instructions

### 1️⃣ Start the Backend
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd gigshield/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running locally on port `27017` (default).
4. Start the server:
   ```bash
   npm run dev
   ```
   *You should see: `✅ MongoDB connected` and `🚀 Server running on http://localhost:5000`*

### 2️⃣ Start the Frontend
1. Open a **second** terminal and navigate to the frontend folder:
   ```bash
   cd gigshield/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL in your browser (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 🎥 Demo Execution Flow

To verify the core requirement, follow this exact flow in the app:
1. **Register**: Enter details (e.g., Ravi, Phone: 9876543210, UPI: ravi@ybl). Click continue.
2. **Select Plan**: Choose any plan (e.g., Standard Shield). Click Activate.
3. **Dashboard**: You will see your active plan and a 0 payout.
4. **Trigger (CORE FEATURE)**: Click the blue `🌧️ Simulate Heavy Rain` button.
5. **Result**: 
   - A success toast will appear ("₹170 credited...")
   - The Risk forecast changes to HIGH
   - "Income Protected" updates to ₹170
   - A new claim directly appears in your Claim History, showing a simulated Transaction ID and the "Paid" status.
