/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#0D4A42", // Dark Green for Header and Sidebar
        background: "#FFFFFF", // White for Main Background
        card: "#F5F5F5", // Gray for User Info Background
        admin: "#2A9D8F", // Dark Green for Admin Badge
        user: "#3B82F6", // Blue for User Badge
        guest: "#9CA3AF", // Gray for Guest Badge
        border: "#E0E0E0", // Light Gray for Borders and Dividers
        mutedRed: "#D9534F", // Muted Red for Not Logged In Text
        primary: "#FFB74D", // Primary Button color for Add User
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"], 
      },
    },
  },
  plugins: [],
};
