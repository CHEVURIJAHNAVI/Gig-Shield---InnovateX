# 🛡️ GigShield — AI-Powered Parametric Income Insurance for India's Gig Delivery Workers
### DEVTrails 2026 | Phase 1 Submission

> **Protecting the invisible workforce — one delivery at a time.**

---

## 📋 Table of Contents

1. [Problem Understanding](#1-problem-understanding)
2. [Target Persona](#2-target-persona)
3. [Solution Overview](#3-solution-overview)
4. [System Workflow](#4-system-workflow-step-by-step)
5. [Parametric Triggers](#5-parametric-triggers)
6. [Weekly Premium Model](#6-weekly-premium-model)
7. [AI/ML Integration](#7-aiml-integration)
8. [Adversarial Defense & Anti-Spoofing](#8--adversarial-defense--anti-spoofing-strategy)
9. [Tech Stack](#9-tech-stack)
10. [Platform Justification](#10-platform-justification)
11. [Development Plan](#11-development-plan)
12. [Analytics Dashboard](#12-analytics-dashboard)
13. [Unique Features / Innovation](#13-unique-features--innovation)

---

## 1. Problem Understanding

### The Invisible Crisis in India's Gig Economy

India's gig delivery ecosystem employs over **12 million delivery workers** across platforms like Swiggy, Zomato, Amazon Flex, and Blinkit. These workers operate as independent contractors — meaning **zero income protection** when they cannot work.

Unlike salaried employees, gig workers:
- Earn **only when they deliver** — no orders = zero income
- Receive **no paid sick leave, no severance, no allowances**
- Face **irregular income** with no safety net during disruptions
- Are **entirely exposed** to external, uncontrollable events

### Why Income Protection Is Urgently Needed

| Factor | Impact |
|--------|--------|
| Informal employment | No employer obligation to compensate downtime |
| No savings buffer | 68% of gig workers live paycheck-to-paycheck |
| External disruptions | Frequent and unpredictable |
| Digital-first income | Highly dependent on platform availability & conditions |

### Real-World Scenarios Where Workers Lose Income

#### 🌧️ Scenario 1 — Monsoon Rain (Hyderabad, July)
Heavy rainfall exceeding 40mm/hr renders roads dangerous. The platform shows zero orders for 4–6 hours. A worker who earns ₹800/day loses **₹400–₹600** in those hours. Multiply that over 3 monsoon months = **₹18,000–₹30,000 in annual losses**.

#### 🌫️ Scenario 2 — Pollution/AQI Surge (Delhi, November)
AQI spikes above 400 (Severe+). Advisory issued to avoid outdoor work. Workers who ignore it risk their health; those who comply lose their entire day's income — approximately **₹700–₹900/day**.

#### 🌡️ Scenario 3 — Extreme Heat (Rajasthan/UP, May–June)
Temperatures exceeding 45°C lead to heat advisories and a dramatic drop in customer orders (people order less food, fewer deliveries). Worker income drops by **30–40%** during afternoon peak heat hours.

#### 🔒 Scenario 4 — Curfew / Section 144 (Any city, protest/riot situation)
Sudden curfew imposed with 2-hour notice. All deliveries halt. A worker mid-shift loses the remainder of the day's income — **₹400–₹700 per event**.

#### 📱 Scenario 5 — Platform API Outage
Swiggy's order assignment system goes down for 2–3 hours. No orders ping. The worker is active, available, logged in — but earns nothing. This is a direct **₹150–₹300 loss** per outage event.

### The Income Loss Reality

> **Studies indicate that delivery workers lose 20–30% of their monthly income** due to external disruptions alone — not performance issues.

| Disruption Type | Frequency | Income Lost per Event |
|-----------------|-----------|----------------------|
| Heavy rainfall | 15–20 days/month (monsoon) | ₹200–₹600 |
| Extreme heat | 20+ days/month (summer) | ₹150–₹400 |
| AQI alert | 5–10 days/month (winter, metro) | ₹500–₹900 |
| Curfew/bandh | 1–3 times/month | ₹500–₹1,000 |
| Platform outage | 2–4 times/month | ₹100–₹300 |

---

## 2. Target Persona

### 🛵 Persona: Ravi Kumar — Swiggy Delivery Partner

| Attribute | Details |
|-----------|---------|
| **Name** | Ravi Kumar |
| **Age** | 26 |
| **City** | Hyderabad (Kondapur zone) |
| **Platform** | Swiggy (full-time) |
| **Device** | Android smartphone (Redmi 10) |
| **Languages** | Telugu, basic Hindi |
| **Education** | 10th pass |
| **Experience** | 2.5 years on Swiggy |

### Daily Workflow

<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/89b35ea7-1727-4b00-b6f4-a1e464b07fd3" />


### Earnings Pattern

| Period | Earnings |
|--------|---------|
| Good weekday | ₹700–₹900 |
| Good weekend day | ₹900–₹1,200 |
| Rainy/disrupted day | ₹200–₹400 |
| Weekly income (avg) | ₹4,500–₹6,000 |
| Monthly income (avg) | ₹18,000–₹24,000 |

### Pain Points

- ❌ **No income on bad weather days** — "Maine sochha tha kal ₹800 kamaaunga, sirf ₹180 mile"
- ❌ **No savings cushion** — lives rent-to-rent, week-to-week
- ❌ **Traditional insurance too complex** — doesn't understand policies, can't do paperwork
- ❌ **Claim processes too slow** — needs money NOW, not in 30 days
- ❌ **No digital financial literacy support** — doesn't know about government schemes

### Risk Exposure Profile

| Risk | Frequency | Financial Impact |
|------|-----------|-----------------|
| Rain disruption | High (monsoon) | ₹200–₹600/event |
| Heat wave | High (summer) | ₹150–₹400/day |
| Curfew/bandh | Medium | ₹500–₹1,000/event |
| Platform outage | Low-Medium | ₹100–₹300/event |
| AQI spike | Medium (winter metros) | ₹400–₹900/event |

---

## 3. Solution Overview

### What is GigShield?

**GigShield** is an AI-powered **parametric income insurance platform** built specifically for India's gig delivery workers. It provides **automatic, instant income compensation** when predefined external disruption triggers are met — with **zero paperwork, zero manual claims, and near-instant UPI payouts**.

### Why Parametric Insurance Is the Perfect Fit

Traditional insurance fails gig workers because:
- Claims require documentation, waiting periods, and human reviewers
- Gig workers can't afford time or literacy barriers
- Income loss is abstract and hard to "prove"

**Parametric insurance bypasses all this:**

| Traditional Insurance | Parametric Insurance (GigShield) |
|----------------------|----------------------------------|
| File a claim manually | Trigger detected automatically |
| Wait 15–45 days | Payout within 2–4 hours |
| Prove your loss | Predefined objective thresholds |
| Complex paperwork | Zero forms needed |
| Human adjudicator | Algorithm-driven decision |

### Key Benefits

- ⚡ **Instant Payouts** — Triggered by verified data, paid via UPI/PayTM within hours
- 📋 **No Manual Claims** — Worker never needs to "apply" for a claim
- 🔍 **Full Transparency** — Worker can see exactly WHY the payout happened
- 💰 **Affordable Weekly Model** — As low as ₹30–₹80/week
- 📱 **Mobile-First Design** — Works on low-end Android devices
- 🌐 **Regional Language Support** — Telugu, Hindi, Tamil, Kannada

---

## 4. System Workflow (Step-by-Step)

```
┌──────────────────────────────────────────────────────────────────────┐
│              GIGSHIELD — FULL PLATFORM WORKFLOW                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Step 1 — User Onboarding (Day 0)

```
Ravi opens GigShield Mobile App
        ↓
Phone number OTP verification
        ↓
KYC: Aadhaar-based e-KYC (DigiLocker API) + Swiggy Partner ID
        ↓
UPI ID / Bank account linked
        ↓
Permission granted: Location (GPS), Motion sensor, App usage
        ↓
Onboarding complete → Baseline profile created
```

- Data collected: city, delivery zone, work history, device fingerprint
- Language preference selected (Telugu/Hindi/English)

---

### Step 2 — Risk Profiling (Day 0–7, adaptive)

```
AI Risk Engine analyzes:
  ├── Worker's delivery zone (historical weather, AQI data)
  ├── Work hours (peak/off-peak exposure window)
  ├── Historical disruption frequency in that zone/city
  ├── Device-level trust score (sensor data baseline)
  └── Swiggy activity pattern (orders accepted, online hours)
        ↓
Output: RISK SCORE (Low / Medium / High) + Zone Risk Index
```

---

### Step 3 — Weekly Policy Creation (Every Monday)

```
Worker receives a notification:
  "Your GigShield weekly plan is ready: ₹50/week → covers up to ₹1,000"
        ↓
Worker taps "Activate Plan" (1-click)
        ↓
₹50 auto-deducted via UPI mandate
        ↓
Policy receipt generated → stored in app
        ↓
Coverage window: Monday 00:00 → Sunday 23:59
```

- Optional: Smart Plan Suggestion AI recommends the best plan based on next-week weather forecast

---

### Step 4 — Real-Time Monitoring (Throughout the Week)

```
Every 30 minutes, Monitoring Engine polls:
  ├── OpenWeatherMap API → rainfall, temperature
  ├── CPCB AQI API → air quality index
  ├── Government/news feed → curfew/bandh alerts
  ├── Platform status API → Swiggy uptime checks
  └── Worker GPS + sensor heartbeat → active status check
        ↓
All data logged to time-series database
```

---

### Step 5 — Trigger Detection (Event-Driven)

```
Trigger Engine evaluates thresholds in real-time:
        ↓
IF (rainfall > 35mm/hr in worker's delivery pin code)
   AND (worker was active within last 60 min)
   AND (worker GPS is in affected zone)
   THEN → FLAG as TRIGGER EVENT
        ↓
Anti-Fraud Engine runs parallel:
  ├── GPS spoofing check
  ├── Behavioral consistency check
  ├── Group fraud pattern check
  └── Fraud score calculated
        ↓
IF fraud_score < threshold → APPROVE TRIGGER
IF fraud_score > threshold → SOFT FLAG (manual review queue)
```

---

### Step 6 — Automatic Claim Initiation

```
Trigger Approved → Claim record created automatically
        ↓
Income loss calculated:
  (Worker's hourly rate) × (disruption duration in hours)
        ↓
Payout amount capped at policy limit (e.g., ₹1,000/week)
        ↓
Worker notified via push + SMS:
  "GigShield detected heavy rainfall in Kondapur.
   ₹350 will be credited to your UPI ID within 2 hours."
```

---

### Step 7 — Instant Payout

```
Razorpay Payout API → Worker's UPI ID
        ↓
Transfer processed (2–4 hours, or instant in Phase 3)
        ↓
Worker receives push notification + SMS confirmation
        ↓
Payout record added to worker's dashboard
        ↓
Claim record updated → audit trail logged for compliance
```

---

## 5. Parametric Triggers

### Trigger 1 — Heavy Rainfall 🌧️

| Field | Details |
|-------|---------|
| **Data Source** | OpenWeatherMap API (current weather + forecast) |
| **Trigger Condition** | Rainfall ≥ 35mm/hr sustained for 45+ minutes in worker's active delivery pincode |
| **Coverage Window** | Event duration (min 1 hr, max 6 hrs per event) |
| **Income Loss Model** | `Lost Hours × (Weekly Earnings / Logged Active Hours)` |
| **Sample** | 2 hrs disruption × ₹85/hr = ₹170 compensated |

---

### Trigger 2 — Dangerous AQI Level 🌫️

| Field | Details |
|-------|---------|
| **Data Source** | CPCB National AQI API (city-level, station-level) |
| **Trigger Condition** | AQI > 350 (Very Poor) in worker's city for 3+ continuous hours |
| **Coverage Window** | Per day (max 1 AQI event/day payout) |
| **Income Loss Model** | Fixed compensation: 50% of average daily earnings for that day |
| **Sample** | AQI surges in Delhi → Worker avg daily = ₹750 → Payout: ₹375 |

---

### Trigger 3 — Extreme Heat Warning 🌡️

| Field | Details |
|-------|---------|
| **Data Source** | IMD API / OpenWeatherMap feels_like temperature |
| **Trigger Condition** | Temperature ≥ 44°C (feels-like) between 11 AM–4 PM in worker's city |
| **Coverage Window** | Per afternoon session (flat payment per qualifying day) |
| **Income Loss Model** | 30% of average daily earnings for the afternoon window |
| **Sample** | 44°C in Hyderabad → Avg daily ₹800 → Payout: ₹240 (for afternoon session) |

---

### Trigger 4 — Curfew / Section 144 / Bandh 🔒

| Field | Details |
|-------|---------|
| **Data Source** | Curated news NLP pipeline (Google News + local alerts RSS feed) |
| **Trigger Condition** | Government-declared curfew OR Section 144 in worker's pincode zone |
| **Coverage Window** | Duration of official curfew (verified via official order timestamp) |
| **Income Loss Model** | Full hourly compensation for curfew hours the worker was scheduled/active |
| **Sample** | 6-hour curfew → 6 hrs × ₹85/hr = ₹510 payout |

---

### Trigger 5 — Delivery Platform Outage 📵

| Field | Details |
|-------|---------|
| **Data Source** | Custom scraper on Downdetector + Swiggy status ping API |
| **Trigger Condition** | Swiggy platform outage > 90 minutes, and worker was logged in during that window |
| **Coverage Window** | Outage duration, capped at 3 hours per event |
| **Income Loss Model** | `Platform log-in duration during outage × hourly rate` |
| **Sample** | 2-hr outage, worker logged in → ₹85/hr × 2 = ₹170 payout |

---

## 6. Weekly Premium Model

### Core Principle

GigShield uses a **risk-adjusted dynamic pricing model** that calculates a personalized weekly premium every Monday morning, based on the upcoming week's predicted risk exposure.

### Premium Calculation Formula

```
Weekly Premium = Base Rate × Location Risk Multiplier × Weather Risk Score × Hours Coverage Factor
```

#### Factor Definitions

| Factor | Description | Range |
|--------|-------------|-------|
| **Base Rate** | Minimum platform-wide premium | ₹30/week |
| **Location Risk Multiplier** | Based on historical disruption frequency in pincode | 1.0x – 2.5x |
| **Weather Risk Score** | 7-day forecast risk score (AI-generated) | 0.8 – 1.8 |
| **Hours Coverage Factor** | Proportional to hours logged per week (more hours = higher potential loss) | 0.9 – 1.5 |

---

### Sample Pricing Table

| Worker Profile | Location | Weekly Hours | Estimated Risk | Weekly Premium | Max Payout |
|---------------|----------|--------------|----------------|----------------|------------|
| Ravi (Hyderabad) | Medium risk zone | 40 hrs | Moderate (Monsoon) | **₹50/week** | ₹1,000 |
| Arjun (Delhi) | High risk zone | 50 hrs | High (AQI + Winter) | **₹80/week** | ₹1,600 |
| Priya (Pune) | Low risk zone | 35 hrs | Low | **₹30/week** | ₹600 |
| Sunil (Mumbai) | High risk zone | 55 hrs | High (Monsoon + Traffic) | **₹90/week** | ₹1,800 |

---

### Plan Tiers (Simplified UX)

| Plan | Weekly Premium | Max Weekly Payout | Coverage Triggers |
|------|----------------|-------------------|------------------|
| 🟢 **Basic Shield** | ₹30 | ₹500 | Rain, Heat |
| 🔵 **Standard Shield** | ₹55 | ₹1,000 | Rain, Heat, AQI |
| 🟣 **Full Shield** | ₹90 | ₹2,000 | All 5 triggers |

> **Example:** Ravi opts for Standard Shield at ₹55/week. Heavy rain hits for 2 hours on Tuesday. GigShield auto-calculates: 2 hrs × ₹85 = **₹170 payout** — no claims, no forms.

---

### Risk Reserve Pool Model

- **20% of premiums** → Reinsurance reserve (mock reinsurer in Phase 1)
- **60% of premiums** → Claim payout pool
- **15% of premiums** → Platform operations
- **5% of premiums** → Fraud investigation & manual review

---

## 7. AI/ML Integration

### Module A — Risk Prediction Model

| Attribute | Details |
|-----------|---------|
| **Purpose** | Predict probability and severity of income disruption for a given worker in the coming week |
| **Type** | Regression (continuous risk score 0–100) |
| **Inputs** | Worker's pincode, historical weather data (7-day lookback), 7-day IMD forecast, historical disruption events in zone, worker's average active hours |
| **Outputs** | Risk Score (0–100), predicted disruption days, expected loss amount |
| **Training Data** | 3-year historical weather data (OpenWeatherMap API) + mock disruption event logs |
| **Model** | Random Forest Regressor + XGBoost ensemble |
| **Retraining Frequency** | Weekly batch retraining |

---

### Module B — Dynamic Premium Pricing Model

| Attribute | Details |
|-----------|---------|
| **Purpose** | Calculate a fair, personalized weekly premium reflecting actual exposure |
| **Type** | Regression |
| **Inputs** | Risk Score (from Module A), worker tier (hours, zone), historical claim rate, global pool health, reinsurance buffer |
| **Outputs** | Recommended weekly premium (₹) per plan tier |
| **Model** | Gradient Boosted Regression (LightGBM) |
| **Key Constraint** | Minimum premium ₹30, maximum ₹200 |

---

### Module C — Fraud Detection Model

| Attribute | Details |
|-----------|---------|
| **Purpose** | Detect fake, fabricated, or coordinated fraudulent claims |
| **Type** | Anomaly Detection + Binary Classification |
| **Inputs** | GPS coordinates, GPS speed variance, accelerometer data, app session logs, delivery platform activity, historical movement patterns, network cell tower ID, claim timing relative to trigger |
| **Outputs** | Fraud Risk Score (0–1), fraud category flag (GPS spoof / behavioral anomaly / group fraud) |
| **Model** | Isolation Forest (anomaly) + XGBoost Classifier (fraud type) |
| **Threshold** | Score < 0.3 → Auto-approve; 0.3–0.6 → Soft flag + secondary check; > 0.6 → Manual review |

---

### ML Pipeline Architecture

```
Raw Data Ingestion (Weather APIs, GPS, Sensor, Platform logs)
        ↓
Feature Engineering Service (Python, Pandas)
        ↓
    ┌───────────┐    ┌──────────────┐    ┌──────────────────┐
    │ Risk Model│    │ Pricing Model│    │ Fraud Detect Model│
    └─────┬─────┘    └──────┬───────┘    └────────┬─────────┘
          │                 │                     │
          └─────────────────┴─────────────────────┘
                            ↓
                  Decision Engine (FastAPI)
                            ↓
              Backend (Node.js) → Payout / Flag / Review
```

---
## Complete Workflow
<img width="1014" height="554" alt="image" src="https://github.com/user-attachments/assets/7fb74b33-f0bc-4b01-b178-5a97f4c127f5" />

## 8. 🚨 Adversarial Defense & Anti-Spoofing Strategy

> This section addresses the **Market Crash Scenario** — coordinated fraud by GPS-spoofing syndicates attempting to claim payouts without being in disrupted zones.

---

### A. Real Worker vs GPS Spoofer Detection

A fraudster using a GPS spoofer will broadcast a fake location inside a rain/curfew zone while physically sitting elsewhere. GigShield counters this through **multi-signal fusion** — not just location.

#### GPS Spoofing Red Flags

| Signal | Legitimate Worker | GPS Spoofer |
|--------|------------------|-------------|
| Location drift pattern | Natural, noisy movement | Perfectly static or artificial curves |
| Speed transitions | Gradual acceleration/deceleration | Instant speed jumps |
| GPS + Cell tower correlation | Both agree (±500m) | GPS says Zone A; cell tower says Zone C |
| Satellite count variance | Fluctuates naturally | Often fixed (mock GPS apps) |
| Battery usage pattern | Consistent with active delivery | Suspiciously low (fake GPS drains less) |

---

### B. Multi-Signal Behavioral Validation

Beyond GPS, GigShield captures the following data points for every active worker during a trigger window:

#### 📱 Device Sensor Data
- **Accelerometer** — Active delivery produces constant micro-vibrations (road bumps, engine vibration). A parked/indoor fraudster shows flat readings.
- **Gyroscope** — Turning patterns should match navigation behavior.
- **Barometer** — Altitude changes during movement; suspicious if flat in a zone claiming flood-level rain.
- **Ambient light sensor** — Outdoor delivery vs. indoor (baseline trained from historical patterns).

#### 🗺️ Movement Patterns
- Historical route fingerprint: Every worker has a unique zone-movement signature.
- Route deviation: Is the worker following their typical delivery zones or suddenly "teleporting" to a new zone right after the trigger fires?
- Delivery density map: Are they claiming to be in Zone A, but their last 3 months of deliveries show they only work Zone B?

#### 📦 Delivery Platform Activity
- Swiggy API logs: Was the worker accepting, rejecting, or completing orders during the trigger window?
- Order timestamps vs. trigger timing: No orders + trigger = possible fraud OR legitimate disruption (context-dependent).
- Restaurant interaction logs: Real workers interact with partners; spoofers don't.

#### ⏱️ Time Consistency
- Login-to-trigger delay: If a worker logs in exactly 5 minutes before a trigger fires in a distant zone (not their normal area), this is flagged.
- Claim clustering: Multiple workers claiming the same trigger from the same IP address or within an unusual short window are escalated.

#### 📡 Network Signals
- Cell tower triangulation cross-checked with GPS.
- Wi-Fi SSID history: If GPS says "on road in Zone A" but device shows home Wi-Fi, flag raised.

---

### C. Fraud Detection Techniques

#### 1. Anomaly Detection (Unsupervised)
- **Isolation Forest** baseline: Worker's normal behavioral signature vs. current session
- Flags workers whose sensor/GPS patterns deviate significantly during claim periods

#### 2. Pattern Recognition
- Supervised classifier trained on synthetic fraud patterns:
  - Perfect-circle GPS paths
  - Sensor silence during "active" windows
  - Instant zone changes without travel time

#### 3. Group Fraud Detection (Telegram Syndicate Attacks)
- **Graph-based analysis**: If 10+ workers from the same social cluster (device+IP+location proximity) all claim the same trigger within 30 seconds, this is flagged as **coordinated fraud**.
- Network clustering algorithm detects unusual claim groupings.
- Threshold: 3+ claims from same IP subnet within 5 minutes → automatic hold.

#### 4. Risk Scoring Pipeline

```
Per Worker, Per Trigger Event:
    ┌────────────────────────────────────────┐
    │ GPS Spoofing Score           (0–25)    │
    │ Sensor Behavioral Score      (0–25)    │
    │ Platform Activity Score      (0–25)    │
    │ Network Consistency Score    (0–25)    │
    └────────────────────────────────────────┘
                      ↓
             TOTAL FRAUD SCORE (0–100)
    0–30:   ✅ Auto-approve
    31–60:  ⚠️  Soft-flag (secondary verification)
    61–100: 🚨 Manual review queue
```

---

### D. UX Balance — Protecting Honest Workers

> **GigShield's philosophy: Assume workers are honest unless the data proves otherwise.**

#### What Happens When a Claim is Flagged?

| Fraud Score | Action | Worker Experience |
|-------------|--------|------------------|
| 0–30 | ✅ Auto-approved | Payout proceeds normally |
| 31–60 | ⚠️ Soft verification | Friendly check-in: "Confirm your location with a 10-second selfie video or tap to confirm your delivery zone." |
| 61–80 | 🔍 Secondary review | Claim held 24 hours; worker notified with timeline. No rejection. |
| 81–100 | 🚨 Manual review | Human reviewer within 48 hrs. Worker notified. Right to contest. |

#### Key UX Principles
- **No silent rejection**: Workers are always informed and given a path to resolution.
- **Soft verification first**: Selfie video, OTP confirmation, or platform activity — not interrogation.
- **Manual review as fallback**: Human review team available for edge cases.
- **Appeals mechanism**: Every flagged claim can be disputed in-app within 7 days.
- **Trust score grows over time**: Long-term verified workers earn a "Trusted Partner" badge.

---

## 9. Tech Stack

### Frontend (Mobile App)

| Component | Technology |
|-----------|-----------|
| Framework | React Native (Android-first, iOS later) |
| UI Library | React Native Paper + custom themed components |
| State Management | Redux Toolkit |
| Navigation | React Navigation v6 |
| Language | TypeScript |
| Maps | React Native Maps (Google Maps SDK) |

### Backend

| Component | Technology |
|-----------|-----------|
| API Server | Node.js + Express.js |
| Auth | JWT + OTP (Firebase Auth) |
| Task Queue | Bull.js (Redis-backed) for trigger processing |
| Rule Engine | Custom Node.js trigger evaluation engine |
| KYC Integration | DigiLocker API (Aadhaar-based e-KYC) |

### Database

| Component | Technology |
|-----------|-----------|
| Primary DB | PostgreSQL (user profiles, policies, claims) |
| Time-Series DB | InfluxDB (weather + sensor data streams) |
| Cache | Redis (session, trigger state, fraud signals) |
| Object Storage | AWS S3 / local MinIO (documents, evidence) |

### ML & AI

| Component | Technology |
|-----------|-----------|
| Language | Python 3.11 |
| ML Library | scikit-learn, XGBoost, LightGBM |
| Graph Fraud Detection | NetworkX |
| Model Serving | FastAPI (ML API endpoints) |
| Anomaly Detection | Isolation Forest (scikit-learn) |
| Training Pipeline | Jupyter Notebooks + MLflow (experiment tracking) |

### External APIs

| API | Purpose | Phase |
|-----|---------|-------|
| OpenWeatherMap API | Rain, temp, weather triggers | Phase 1 |
| CPCB AQI API | Air quality index data | Phase 1 |
| IMD API (mock) | Official weather alerts | Phase 2 |
| Google Maps / Geolocation | Zone validation, geofencing | Phase 1 |
| NewsAPI / RSS (NLP) | Curfew/bandh detection | Phase 2 |
| Swiggy Partner API (mock) | Worker activity validation | Phase 1 (mock) |
| Razorpay Payout API (sandbox) | UPI disbursements | Phase 1 |
| Firebase Cloud Messaging | Push notifications | Phase 1 |
| DigiLocker API | e-KYC / Aadhaar verification | Phase 2 |

### DevOps & Infrastructure

| Component | Technology |
|-----------|-----------|
| Hosting | AWS EC2 (backend) + S3 |
| Containerization | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Monitoring | Prometheus + Grafana |
| Logging | Winston (Node.js) + ELK Stack (Phase 2) |

---

## 10. Platform Justification

### Decision: Mobile-First Application (Android)

| Criteria | Web App | Mobile App (Android) ✅ |
|----------|---------|------------------------|
| Delivery worker device | Primarily Android phone | ✅ Native fit |
| GPS & sensor access | ❌ Limited on mobile browsers | ✅ Full access via SDK |
| Push notifications | ❌ Web push unreliable in India | ✅ FCM push always-on |
| UPI integration | ❌ Requires redirect flows | ✅ Deep-link UPI support |
| Offline support | ❌ Difficult | ✅ Local caching with React Native |
| Data efficiency | ❌ Heavy for slow connections | ✅ Optimized bundles |
| Worker comfort | ❌ URL bookmarking not habitual | ✅ Familiar app model |

**Conclusion:** Delivery workers operate entirely from their smartphones. A mobile-first React Native app (Android) is the only practical delivery mechanism for this user group. A lightweight Progressive Web App (PWA) companion will be built for admin/insurer dashboards.

---

## 11. Development Plan

### Phase 1 — Ideation & Foundation | March 4–20 (Weeks 1–2)
**Theme: "Ideate & Know Your Delivery Worker"**
> Dedicated to research, ideation, planning, and building the foundational elements of the solution.

**📅 Submission Deadline: March 20, End of Day**

#### Deliverables

**1. The Idea Document (This README)**
- [x] Persona-based scenarios and full application workflow
- [x] Weekly premium model explanation and parametric trigger definitions
- [x] Web vs. Mobile platform justification
- [x] AI/ML integration plan (premium calculation, fraud detection)
- [x] Tech stack and development plan

**2. Git Repository**
- Public GitHub/GitLab repository with `README.md`
- Same repo used for all subsequent phases

**3. 2-Minute Strategy Video**
- Publicly accessible link
- Covers: strategy, plan of execution, and minimal Phase 1 prototype scope

---

### Phase 2 — Automation & Protection | March 21 – April 4 (Weeks 3–4)
**Theme: "Protect Your Worker"**

#### Deliverables

**1. 2-Minute Demo Video** — publicly accessible link

**2. Executable Source Code showcasing:**
- ✅ Registration Process
- ✅ Insurance Policy Management
- ✅ Dynamic Premium Calculation
- ✅ Claims Management

#### Implementation Targets

| Target | Details |
|--------|---------|
| 🤖 AI Dynamic Pricing | ML model adjusts weekly premium based on hyper-local risk factors (e.g., ₹2 less/week in historically flood-safe zones; increased coverage hours via predictive weather modelling) |
| ⚡ Automated Triggers | 3–5 automated triggers using public/mock APIs (rain, AQI, heat, curfew, platform outage) |
| 🔄 Zero-Touch Claims | Seamless, automated claim process with best-in-class UX — no forms, no calls |

---

### Phase 3 — Scale & Optimise | April 5–17 (Weeks 5–6)
**Theme: "Perfect for Your Worker"**

#### Deliverables

| Deliverable | Details |
|-------------|---------|
| 🚨 Advanced Fraud Detection | GPS spoofing detection, fake weather claim identification using historical data, delivery-specific fraud patterns |
| 💸 Instant Payout System (Simulated) | Razorpay test mode / UPI simulator — worker receives lost wages instantly after trigger |
| 📊 Intelligent Dashboard — Worker | Earnings protected, active weekly coverage view |
| 📊 Intelligent Dashboard — Insurer/Admin | Loss ratios, predictive analytics on next week's likely weather/disruption claims |

#### Final Submission Package (Week 6 Judging)

| Artefact | Requirement |
|---------|-------------|
| 🎥 5-Minute Demo Video | Screen-capture walkthrough; must visually demonstrate a simulated external disruption (e.g., fake rainstorm trigger) and show automated AI claim approval + payout end-to-end |
| 📑 Final Pitch Deck (PDF) | Covers: delivery persona, AI & fraud architecture, business viability of weekly pricing model |

---

## 12. Analytics Dashboard

### 🧑 Worker Dashboard (In-App)

The worker-facing dashboard is simple, visual, and available in regional languages.

| Section | Content |
|---------|---------|
| 🛡️ This Week's Coverage | Active plan, coverage amount, days remaining |
| 💸 Payouts Received | Timeline of all payouts with trigger reason and amount |
| 📊 Income Protected (Monthly) | Total income compensated vs. total premium paid (ROI view) |
| 🌦️ Risk Forecast | "This week, there's a 70% chance of rain in your zone. Your plan covers rain." |
| 📋 Claim History | Each claim with status: Approved / Under Review / Contested |
| 🎖️ Trust Score | "Trusted Partner" badge and current fraud score tier |

---

### 🖥️ Admin / Insurer Dashboard (PWA)

| Section | Content |
|---------|---------|
| 📍 Live Risk Map | Heatmap of active disruption zones and current trigger events |
| 💰 Claims Summary | Real-time approved/pending/flagged claims count and payout volumes |
| 🚨 Fraud Queue | Flagged claims with fraud scores, sensor data, and review timeline |
| 📈 Premium Pool Health | Premium collected vs. payouts made vs. reserve ratio |
| 👥 Worker Analytics | Active policies by city, plan tier distribution, churn tracking |
| 🤖 ML Model Health | Model drift indicators, prediction accuracy over last 30 days |
| 📊 Trigger Event Log | History of all trigger events with affected workers and payout totals |

---

## 13. Unique Features / Innovation

### 🔴 Feature 1 — AI Risk Zone Map ("HeatShield Atlas")

An AI-generated, real-time map showing **delivery zone risk scores** updated every hour.

- Color-coded by risk level: 🟢 Safe → 🟡 Elevated → 🔴 High Alert
- Workers can see before starting a shift: "Zone 5 (Kondapur) is HIGH RISK today — you're covered"
- Insurers can dynamically adjust pricing for workers in hot zones
- Built using geo-clustering of weather + historical claims data

**Innovation:** No insurance platform in India currently provides workers with pre-shift risk intelligence.

---

### 🟠 Feature 2 — Smart Coverage Advisor (AI Recommendation Engine)

Every Sunday evening, the app sends a personalized notification:

> *"Ravi, next week looks risky — IMD predicts 3 heavy rain days. Upgrade from Basic to Standard Shield for just ₹25 more. Tap to upgrade."*

- ML model analyzes 7-day forecast + worker's earning history + plan tier
- Dynamically suggests upgrade/downgrade every week
- Explains reasoning in simple language: "It might rain 3 days next week"

**Innovation:** Transforms insurance from passive protection to proactive financial planning.

---

### 🟣 Feature 3 — Bhasha Voice Assistant (Regional Language AI)

An in-app voice assistant powered by a lightweight on-device NLP model:

- **Languages:** Telugu, Hindi, Tamil, Kannada, Marathi
- Workers can ask: *"Naaku ee week evvaro payout vasindaa?"* (Telugu: "Did I get any payout this week?")
- Voice-guided claim dispute: Speak to contest a flagged claim instead of filling forms
- Policy explanation in spoken language — no literacy required

**Innovation:** Addresses the #1 adoption barrier for insurance in Tier 2/3 cities — language and literacy.

---

## 🏁 Summary

| Aspect | Details |
|--------|---------|
| **Problem** | 12M delivery workers lose 20–30% income to external disruptions |
| **Solution** | Parametric AI insurance with automated triggers and UPI payouts |
| **Persona** | Swiggy delivery partner (Ravi Kumar, Hyderabad) |
| **Premium** | ₹30–₹90/week → ₹500–₹2,000 payout coverage |
| **Triggers** | Rain, AQI, heat, curfew, platform outage |
| **AI/ML** | Risk prediction, dynamic pricing, fraud detection |
| **Anti-fraud** | GPS spoofing detection, behavioral + multi-signal scoring |
| **Stack** | React Native, Node.js, PostgreSQL, Python ML, Razorpay |
| **Unique Innovation** | Risk Zone Map, Smart Coverage Advisor, Bhasha Voice AI |

---

> *Prepared for DEVTrails 2026 — Phase 1 Submission*
> *GigShield Team | March 2026*
> *"Protecting India's invisible workforce — one delivery at a time."*
