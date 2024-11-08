# Task Tracker Dashboard

This is a web-based Task Tracker application designed for managing tasks effectively. The application allows users to add, edit, delete, and track tasks with various details such as priority, status, due dates, and time spent on each task. The dashboard also includes a graph to visualize the number of tasks worked on per day.

## Features

- **Authentication**: Mock login with predefined credentials.
  - **Username**: `test`
  - **Password**: `test1234`
- **Task Management**: Users can create, edit, delete, and view tasks with details including:
  - Task title and description
  - Priority (High, Medium, Low)
  - Status (Pending, In Progress, Completed)
  - Due date
  - Time spent on each task, with the option to log time.
- **Task Filtering**: Filter tasks based on priority (High, Medium, Low) and status (Pending, In Progress, Completed).
- **Time Tracking**: Track the time spent on each task in hours and minutes.
- **Task Activity Visualization**: A graph that displays the count of tasks worked on per day, helping users understand their productivity patterns.
- **Error Handling**: User-friendly error messages for empty fields when adding tasks and invalid credentials on login.

## Assumptions

- **Authentication**: This project uses mock authentication for testing purposes. A single hardcoded user can log in using the credentials provided above.

## Technology Stack

- **React.js**: For building the user interface.
- **Redux**: For managing global state across components.
- **Tailwind CSS**: For styling the application.
- **Chart.js**: For rendering charts to visualize task data.

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/22PS/task-tracker
    cd task-tracker
    ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and navigate to http://localhost:3000 to view the Task Tracker dashboard.

3. Log in using the mock credentials:

- **Username**: `test`
- **Password**: `test1234`

### Folder Structure

- **src/components**: Contains reusable UI components like TaskCard, Filter, etc.
- **src/redux**: Includes Redux setup, actions, reducers, and store configuration.

## Project Workflow
1. **Login**: Enter the credentials to access the dashboard.
  ![image](https://github.com/user-attachments/assets/d3e2592e-2ec9-4d41-90e8-233c3a67b4a6)

2. **Add a New Task**: Click the "Add Task" button and fill in the details. All fields marked with * are required. If any required fields are empty, an error message will be displayed.
   ![image](https://github.com/user-attachments/assets/0144ad9c-7941-4b89-8970-0c6659adbab4)
   ![image](https://github.com/user-attachments/assets/735506ca-ba54-46bc-9a44-c5e1e4af3721)

3. **Edit or Delete Tasks**: Click the "Edit" or "Delete" button on each task card to update or remove tasks.
   ![image](https://github.com/user-attachments/assets/a2869d9c-6051-4034-be6e-0ac8d03c3f1f)
   ![image](https://github.com/user-attachments/assets/fffd6106-62b4-4391-abbf-b01ed8b54e65)
   ![image](https://github.com/user-attachments/assets/ca087b08-d90a-4d95-9a44-3f948a0e5a30)

4. **Track Time**: Click "Log time spent" to enter the amount of time spent on each task. The total time will be displayed on the task card.
   ![image](https://github.com/user-attachments/assets/eab00ffc-b097-41ce-b8fb-57c0d4c87a08)
   ![image](https://github.com/user-attachments/assets/9aae9914-a16e-4b00-b113-634fbc290093)

5. **Filter Tasks**: Use the filter options to display tasks based on priority and status.
   ![image](https://github.com/user-attachments/assets/f7d94ec3-424a-484c-a968-6883648d97e0)

9. **Logout**: Click the "Logout" button to log out from the dashboard.

## Error Handling

- **Empty Fields**: When adding a new task, if any mandatory fields are left empty, an error message "Field(s) missing !!" is displayed.
  ![image](https://github.com/user-attachments/assets/092a801c-3f5c-46e6-a535-7fc7a48359e3)

- **Invalid Credentials**: If incorrect login credentials are entered, an error message "Invalid credentials !!" is displayed.
  ![image](https://github.com/user-attachments/assets/4bbe0c74-b2d7-4f07-8a20-49aea7b994bf)
