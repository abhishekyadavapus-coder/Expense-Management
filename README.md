<div align="center">
<img width="1200" height="475" alt="Odoo Hackathon Banner" src="https://www.odoo.com/web/image/67276233-7cf9d43f/01.jpg" />
</div>

# Run and Deploy Your Application

This repository contains everything you need to run and deploy the application locally or on a server, developed and maintained by **Team CMD**.

---

## 👥 Team CMD Members

| Name                   | Role                                      |
| ---------------------- | ----------------------------------------- |
| **Abhishek Yadav**     | Backend Developer                         |
| **Anant Pratap Bisen** | Frontend Developer                        |
| **Ashutosh Shukla**    | Full Stack Developer (Backend & Frontend) |
| **Devanshi Valecha**   | UI/UX Designer                            |

---

## 🧩 Prerequisites

* **Node.js** (v18 or above)
* **npm** (v9 or above)
* **Git** (for cloning the repo)
* **Supabase Project** (for database + authentication + storage)
* **API Keys** (Exchange Rate API, OCR API if using Google Vision)

Check installation:

```bash
node -v
npm -v
git --version
```

---

## 🚀 Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-repo>.git
   cd <your-repo>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file in the root folder with:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<your-supabase-service-role-key>
   EXCHANGE_RATE_API=https://api.exchangerate-api.com/v4/latest/USD
   OCR_API_KEY=<google-vision-api-key-or-leave-empty-for-tesseract>
   ```

4. **Run locally**

   ```bash
   npm run dev
   ```

   Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Deployment

* **Vercel (Recommended)**

  1. Push your code to GitHub.
  2. Import repo into Vercel.
  3. Add environment variables in Vercel dashboard.
  4. Deploy with one click.

* **Alternative**: Dockerize and deploy on any server/cloud (AWS, Render, Railway, etc.).

---

## 📂 Project Structure

```
/frontend      # Next.js app
/backend       # Node.js/Express services
/db            # Supabase migrations & schemas
/public        # Static files & assets
```

---

## ✅ Features Recap

* Role-based Auth & Company Auto-setup
* Expense Submission with Multi-currency + OCR Receipts
* Multi-level Approval Workflows
* Configurable Approval Rules (percent/approver based)
* Admin Dashboard with Full Visibility

---

## 💡 Notes

* By default OCR runs via **Tesseract.js** (client-side). Switch to **Google Vision API** by adding your key.
* Exchange rates are refreshed from the API at runtime.
* Make sure Supabase policies (RLS) are configured correctly before production.

---
