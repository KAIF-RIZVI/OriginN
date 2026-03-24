# OriginN Portfolio & Agency Website

Welcome to the **OriginN** project! This is a premium, Awwwards-winning level portfolio and agency website. It is built using modern web development technologies to ensure high performance, beautiful 3D animations, and a fully responsive layout.

This guide is written specifically for beginners. It will walk you through exactly how this project works, how to run it on your own computer, how to edit the content, and how to publish it to the internet!

---

## 🚀 1. Getting Started (Running the Project)

This project is built using **React** (a library for building user interfaces) and **Vite** (a super-fast build tool). 

### Prerequisites
Before you start, you must have the following installed on your computer:
1. **Node.js**: Download and install it from [nodejs.org](https://nodejs.org/). (We recommend the LTS version).
2. **VS Code**: A great code editor to view and edit your files.

### Running the Website Locally
1. Open this folder (`OriginN`) in your terminal or VS Code terminal.
2. Install all the required dependencies by exactly typing:
   ```bash
   npm install
   ```
3. Start the local development server by typing:
   ```bash
   npm run dev
   ```
4. Look at the terminal output. It will give you a local link (usually `http://localhost:5173/`). Click it to open your website in the browser!

---

## 📁 2. Project Structure Explained

Here is where everything lives. If you need to change something, look here first:

* `src/App.tsx` - The main router. It controls which pages load (Home vs Service Detail vs Terms).
* `src/components/` - This folder contains all the individual building blocks of the website:
  * `Hero/` - The very first thing people see (the 3D spinning cube and main title).
  * `Services/` - The grid showing your offerings (Website, Portfolio, Domain, Logo).
  * `Pricing/` - The package tiers (₹7,499 WebUltra, etc.).
  * `Contact/` - The form where users send you messages.
* `src/pages/` - The actual full-page layouts:
  * `Home.tsx` - The main landing page.
  * `ServiceDetail.tsx` - The dynamic page that loads when you click "View Pricing" on a service.
  * `Terms.tsx` - Your legal Terms & Conditions page.
* `index.css` - The global stylesheet that controls dark mode, colors, and fonts!

---

## ✏️ 3. How to Edit the Content

You don't need to be an expert coder to change the text or prices on your website! 

### Editing the Pricing Packages
1. Open `src/components/Pricing/Pricing.tsx` (for the Home page summary) OR `src/pages/ServiceDetail.tsx` (for the detailed individual service pages).
2. Look for the `const tiers = [...]` array at the top of the file.
3. You will see the packages listed out like this:
   ```javascript
   {
     name: "WebUltra",
     price: "7,499",
     features: ["Responsive Design", "MORE AI ENHANCED LOOK", ...]
   }
   ```
4. Simply change the text inside the quotation marks `""` and save the file. Your browser will instantly update!

### Editing the Services Grid
1. Open `src/components/Services/Services.tsx`.
2. Look for the `const services = [...]` array at the top.
3. Change the `title`, `description`, or add/remove the `badge: "Trending"` to easily update what you offer.

### Changing the Hero 3D Images
1. Open `src/components/Hero/Hero.css`.
2. Look for `.cube-face`. There are 6 faces (`front`, `back`, `left`, `right`, `top`, `bottom`).
3. You can replace the `url('https://images.unsplash.com/...')` link with any new image link you want it to display on the 3D cube!

---

## 📧 4. Contact Form Setup

The contact form is fully working and requires NO backend server! It uses a free service called FormSubmit.

1. Open `src/components/Contact/Contact.tsx`.
2. Find the form tag:
   ```html
   <form action="https://formsubmit.co/your-email@example.com" method="POST">
   ```
3. **CRITICAL:** Replace `your-email@example.com` with your actual email address.
4. The first time you submit the form, FormSubmit will send you a verification email. Click the link in that email to activate the form. After that, all client messages will go straight to your inbox!

**(Anti-Spam Note):** The form has built-in honey-pot and CAPTCHA logic active to prevent bots from spamming you.

---

## 🌐 5. Deployment (Going Live!)

When you are ready to show the world, you need to "host" your website. The easiest and completely free way to do this is using **Vercel**.

1. Create a free account at [Vercel.com](https://vercel.com/).
2. Push your `OriginN` code folder to a free repository on [GitHub](https://github.com/).
3. On Vercel, click **"Add New Project"** and connect it to your GitHub repository.
4. Vercel will automatically detect that you use `Vite` and `React`.
5. Click **Deploy**.
6. In about 1 minute, Vercel will give you a live URL (e.g., `originn.vercel.app`).
7. (Optional): You can go to the Vercel project settings and link your own custom domain (like `originn.com`).

Whenever you update your code and push it to GitHub, Vercel will automatically rebuild and update your live website instantly!

---

### Need Help?
If you ever break the code and don't know how to fix it, remember you can always use the terminal to undo your changes by typing:
`git checkout -- .` (This resets all files to the last saved commit).

Enjoy building with OriginN!
