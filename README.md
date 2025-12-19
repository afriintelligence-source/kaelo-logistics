# Kaelo Logistics Web Application

Welcome to the **Kaelo Logistics** web application! This platform is designed to provide users with seamless logistics solutions, allowing them to request shipping quotes, view services, and get in touch with the Kaelo team.

---

## 📖 Simple Guide: How to Run this App
**Who is this for?** Anyone who wants to see the website running on their computer.

### Prerequisites
Before you start, you need **Node.js** installed on your computer.
1.  Go to [nodejs.org](https://nodejs.org/).
2.  Download and install the "LTS" (Long Term Support) version.
3.  Restart your computer if asked.

### Step-by-Step Instructions

1.  **Download the Code**
    *   If you have the folder already, open it.
    *   If you are downloading from GitHub, click the green "Code" button and select "Download ZIP". Extract the ZIP file.

2.  **Open a Terminal**
    *   **Windows:** Right-click inside the project folder and select "Open in Terminal" or use Command Prompt (`cmd`) to navigate to the folder (e.g., `cd C:\Users\YourName\Desktop\kaelo-web`).
    *   **Mac/Linux:** Open Terminal and navigate to the folder.

3.  **Install Dependencies**
    *   Type the following command and press Enter:
        ```bash
        npm install
        ```
    *   Wait for it to finish downloading the necessary tools.

4.  **Run the Application**
    *   Type the following command and press Enter:
        ```bash
        npm run dev
        ```

5.  **View the Website**
    *   Open your web browser (Chrome, Edge, Safari, etc.).
    *   Go to: [http://localhost:3000](http://localhost:3000)
    *   You should see the Kaelo Logistics homepage!

---

## 🛠️ Technical Documentation (For Developers)

### Project Overview
This project is a modern web application built using **Next.js 16** (App Router) and **TypeScript**. It features a responsive UI styled with **Tailwind CSS** and integrates with **Basin** for form handling.

### Tech Stack
*   **Framework:** [Next.js 16](https://nextjs.org/) (React Framework)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Form Handling:** [React Hook Form](https://react-hook-form.com/)
*   **Backend Integration:** [Basin](https://usebasin.com/) (Form Submission)

### Key Features

#### 1. Quote Request Form (`/src/app/quote/page.tsx`)
*   **Dynamic Location Picking:** Users select Pickup and Delivery locations.
*   **Distance Calculation:** Automatically calculates straight-line distance (Haversine formula) between coordinates.
*   **Image Upload:** Supports uploading multiple package images using standard `File` objects.
*   **Form Validation:** Client-side validation using React Hook Form.
*   **Direct Submission:** Submits data (Multipart/FormData) directly to Basin, including binary image files.
*   **Success Feedback:** Displays a custom success modal upon completion.

#### 2. Services & UI Components
*   **Modular Design:** Reusable components for Navbar, Footer, Hero sections, etc.
*   **Responsive Layout:** Fully responsive design for Mobile, Tablet, and Desktop.

### Project Structure
```
kaelo-web/
├── public/              # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── api/         # API Routes (Proxy logic if needed)
│   │   ├── quote/       # Quote Page Route
│   │   ├── globals.css  # Global Tailwind styles
│   │   ├── layout.tsx   # Root Layout
│   │   └── page.tsx     # Homepage
│   └── components/      # Reusable React Components
│       ├── LocationPicker.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ...
├── package.json         # Dependencies and Scripts
├── README.md            # Project Documentation
└── tsconfig.json        # TypeScript Configuration
```

### Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `localhost:3000`. |
| `npm run build` | Builds the application for production. |
| `npm start` | Runs the built production application. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

### Configuration
*   **Basin Form ID:** Currently hardcoded in `src/app/quote/page.tsx`. For production, consider moving this to an environment variable (`NEXT_PUBLIC_BASIN_FORM_ID`).

### Deployment
The application is optimized for deployment on **Vercel**.
1.  Push code to GitHub.
2.  Import project in Vercel.
3.  Vercel will automatically detect Next.js and build the project.
