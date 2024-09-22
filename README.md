## Kanban Board

The MERN Stack Kanban Board Application aims to pronide students with hands-on experience in building a full-stock web application using MangaDB, Express.)s, React.js, and Nodejs. The project will focus on implemanting a Kanton board, allawing users to manage tasks through different stages of completion

## Requirements

1. Backend Setup:
   • Set up Node.js and Express.js for the backend server.
   • Connect the backend to a MongoDB database using Mongoose.
2. Authentication and Authorization:
   • Implement user authentication using JWT (JSON Web Tokens).
   • Allow users to register, login, and logout.
   • Authenticate and authorize users to access certain routes and perform actions based on their role.
3. CRUD Operations:
   • Create tasks: Allow users to create new tasks on the Kanban board.
   • Read tasks: Display tasks on the board categorized by their status (e.g., to-do, in progress, done).
   • Update tasks: Enable users to move tasks between different columns on the board and update task details.
   • Delete tasks: Allow users to delete tasks from the board.
4. Role-based Access Control (RBAC):
   • Define roles such as admin and regular user.
   • Restrict certain actions (e.g., deleting tasks) to specific roles.
5. Pagination:
   • Implement pagination for handling a large number of tasks efficiently.
6. Frontend Development:
   • Set up React.js for the frontend.
   • Design the user interface for the Kanban board with drag-and-drop functionality for task movement.
   • Implement forms for creating and editing tasks.
7. Code Quality:
   • Set up coding conventions and linting rules using tools like ESLint.
   • Ensure consistent code style and formatting across the project.
8. Deployment:
   • Deploy the application to a hosting platform such as Vercel, cyclic, EC2 or Netlify.
   • Configure environment variables for sensitive information such as database credentials and JWT secret.

## Features and Functionalities

1. User Registration and Authentication:
   • Register new users with unique usernames and passwords.
   • Authenticate users using JWT tokens.
   • Handle user sessions and persist login state.
2. Kanban Board Interface:
   • Display tasks in columns representing different stages of completion (e.g., to-do, in progress, done).
   • Allow users to drag and drop tasks between columns to update their status.
3. Task Management:
   • Create new tasks with titles, descriptions, and due dates.
   • View task details and edit task information.
   • Delete tasks from the board.
4. Role-based Access Control:
   • Define roles such as admin and regular user.
   • Admins have full access to CRUD operations, while regular users have limited access.
5. Pagination:
   • Limit the number of tasks displayed on each page to improve performance.
   • Provide navigation controls for users to move between pages.
6. Error Handling and Validation:
   • Validate user input to ensure data integrity and prevent common security vulnerabilities.
   • Handle errors gracefully and provide informative error messages to users.
7. Deployment and Hosting:
   • Deploy the application to a hosting platform for public access.
   • Ensure the application is secure and scalable for production use.
8. User Experience Enhancements:
   • Implement responsive design for the frontend to support various devices.
   • Add animations and visual feedback to improve user interaction.
