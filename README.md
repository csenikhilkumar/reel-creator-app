# ReelPro App

ReelPro is a full-stack web application for creating and managing short video reels.  
It is built with **Next.js**, **MongoDB**, **ImageKit** for media storage, and **NextAuth** for authentication.

---

## 🚀 Features
- **Next.js 14 (App Router)** for server-side rendering and API routes.
- **MongoDB** with Mongoose for database operations.
- **ImageKit.io** for optimized media uploads (images & videos).
- **NextAuth.js** for secure authentication (Google, Credentials, etc.).
- **Tailwind CSS** for modern and responsive UI.
- **React Hook Form** for form handling and validation.
- **Notification system** (custom provider for toast messages).

---

## 🛠️ Tech Stack
- **Frontend:** Next.js (React 18), Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** MongoDB (Mongoose ORM)
- **Media Storage:** ImageKit.io
- **Authentication:** NextAuth.js
- **Deployment:** Vercel (recommended)

---

## 📂 Project Structure
```
reelPro/
 ├── app/                 # App Router pages
 │    ├── api/            # API endpoints (Next.js server routes)
 │    ├── login/          # Login page
 │    ├── register/       # Registration page
 │    └── page.tsx        # Homepage
 ├── components/          # UI components (Headers, Upload, etc.)
 ├── models/              # Mongoose models (User, Video)
 ├── lib/                 # Database & utility functions
 ├── public/              # Static assets
 ├── styles/              # Global CSS
 ├── .env                 # Environment variables
 ├── tailwind.config.js   # Tailwind config
 ├── tsconfig.json        # TypeScript config
 └── README.md            # Project documentation
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/reelpro.git
cd reelpro
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:

```
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/reelPro
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<generate-a-random-secret>
NEXT_PUBLIC_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
PRIVATE_KEY=your_imagekit_private_key
```

### 4. Run the development server
```bash
npm run dev
```
Your app will be live at **http://localhost:3000**

---

## 📸 Image Upload with ImageKit
- The `FileUpload` component uses **ImageKit’s SDK** (`imagekitio-next`) to handle media uploads.
- Videos and images are uploaded to the `/videos` or `/images` folder respectively.

---

## 🔐 Authentication
- **NextAuth.js** is used for login & registration.
- Supports OAuth providers (Google, GitHub) and credentials login.
- Session is handled using `useSession` hook.

---

## 🗄️ Database (MongoDB)
- All video metadata and user data are stored in **MongoDB**.
- Models are defined in the `models/` folder (`User.ts`, `Video.ts`).

---

## 📦 Build for Production
```bash
npm run build
npm start
```

---

## 🧪 Testing
Add your test cases in the `__tests__` folder and run:
```bash
npm run test
```

---

## 🚀 Deployment
- **Recommended:** [Vercel](https://vercel.com/)
- Make sure to add the `.env` variables in your Vercel project.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/your-username/reelpro/issues).

---

## 📜 License
This project is licensed under the **MIT License**.

---

## ✨ Author
**Nikhil** – [GitHub](https://github.com/csenikhilkumar)