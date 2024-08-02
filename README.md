### Task Management App

This is a Task Management App built with React, Redux Toolkit, Context API, and Material-UI. It provides functionalities for task management, real-time updates, progress scoring, user authentication, and profile management.

## Features

1. **Task Management:**
   - Add, edit, and delete tasks.
   - Each task includes a title, description, due date, and status (To Do, In Progress, Done).

2. **Real-Time Deadline Updates:**
   - Display remaining time dynamically.
   - Update time every second.

3. **Filtering and Sorting:**
   - Filter tasks by due date and status.
   - Sort tasks by soonest and latest deadlines.

4. **Progress Scoring:**
   - Track task completion with scoring.
   - Display progress in a dedicated card.

5. **User Authentication:**
   - Registration with fields: Name, email, phone, password, and confirm password.
   - Store data in local storage with Base64 encoding for passwords.
   - Login with email and password.

6. **Profile Management:**
   - Upload and display profile picture.
   - Display profile picture in the navigation bar.

7. **Additional Features:**
   - Search bar to filter tasks by title.
   - Notifications for task actions.

8. **State Management:**
   - Use Redux Toolkit for global state.
   - Use Context API for component-specific state.

9. **User Interface:**
   - Design with Material-UI.
   - Ensure responsiveness and accessibility.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:ImSandeepyadav/Task-Management.git
   cd task-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## File Structure

```plaintext
task-management-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── app/
│   │   ├── store.js
│   ├── components/
│   │   ├── AddTaskForm.js
│   │   ├── Filter.js
│   │   ├── LoginForm.js
│   │   ├── Notifications.js
│   │   ├── ProfilePicture.js
│   │   ├── ProgressScore.js
│   │   ├── RegisterForm.js
│   │   ├── SearchBar.js
│   │   ├── Task.js
│   │   ├── TaskList.js
│   ├── features/
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   ├── filter/
│   │   │   ├── filterSlice.js
│   │   ├── notifications/
│   │   │   ├── notificationsSlice.js
│   │   ├── profile/
│   │   │   ├── profileSlice.js
│   │   ├── progress/
│   │   │   ├── progressSlice.js
│   │   ├── search/
│   │   │   ├── searchSlice.js
│   │   ├── tasks/
│   │   │   ├── tasksSlice.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Components

### AddTaskForm

A form for adding new tasks.

### Filter

Component for filtering tasks by status.

### LoginForm

Form for user login.

### Notifications

Displays notifications for task actions.

### ProfilePicture

Component for uploading and displaying the profile picture.

### ProgressScore

Displays the user's progress score.

### RegisterForm

Form for user registration.

### SearchBar

Search bar to filter tasks by title.

### Task

Component representing a single task.

### TaskList

List of tasks.

## Redux Slices

### authSlice

Handles user authentication state.

### filterSlice

Manages the task filtering state.

### notificationsSlice

Handles notifications for task actions.

### profileSlice

Manages the user profile state.

### progressSlice

Tracks user progress scoring.

### searchSlice

Handles the search query state.

### tasksSlice

Manages the tasks state.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.
