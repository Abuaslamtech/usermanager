# User Manager Pro 👥

A modern React-based user management system designed for easy administration of user roles and permissions. Built with React, TailwindCSS, and local storage for demonstration purposes.

## Overview

User Manager Pro is designed to streamline user management tasks such as adding new users, managing user roles, and tracking active user statuses. It’s suitable for small to medium-sized applications where administrators need a quick way to manage users with different permissions.

## Key Features 🚀

- User CRUD operations (Create, Read, Update, Delete)
- Role-based access control (Admin, User, Guest)
- Real-time search functionality
- Responsive mobile-first design
- Active status tracking
- User profile image management

## Tech Stack 💻

- React.js
- TailwindCSS
- React Router DOM
- React Icons
- Lucide Icons
- Local Storage

## Architecture

The application is structured around a component-based architecture with a focus on modularity and reusability. Key elements include:

- Components: Separate components for listing users, adding/deleting user information.
- State Management: Uses React's built-in useState and useEffect hooks to handle user data and real-time changes.
- Local Storage: Local storage is used to store user data temporarily

## Live Demo 🌐

[https://usersmanager.vercel.app/](https://usersmanager.vercel.app/)

## Screenshots 📸

Here are some screenshots of the application in action:

![Empty Homepage Screenshot](/src/assets/emptyhome.png)
_Homepage with empty users_

![Homepage Screenshot](/src/assets/home.png)
_Homepage showing the main features._

![Manage User Screenshot](/src/assets/manage.png)
_Page to manage registered users_

![Add User Screenshot](/src/assets/adduser.png)
_Page to register new users_

## Installation & Setup 🛠️

```bash
# Clone the repository
git clone [your-repo-link]

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

- Access the Application: Once the server is running, open http://localhost:5173 in your browser.
- Manage Users: You can add, edit, or delete users. Use the search bar to quickly find users.
- Assign Roles: From the Add new user page, you can set roles for each user.
- Change Status: Toggle user status (e.g., active or inactive) for each user.

## Limitations

- Local Storage Limitations: Since data is stored in the browser’s local storage, it is not persistent across devices or sessions.
- Authentication & Security: This demo does not include user authentication.
