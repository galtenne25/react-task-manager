# React Task Manager 📝

A modern, responsive, and fully functional Task Manager application built with **React 19** and **Vite**. This project demonstrates core React concepts including state management, component architecture, props drilling, and side effects with LocalStorage.

## ✨ Features

* **Create Tasks:** Add new tasks with a text description.
* **Read & Monitor:** View all tasks, or filter by 'Active' and 'Completed'.
* **Update:**
    * **Toggle Status:** Mark tasks as completed or active.
    * **Edit Mode:** Double-click or use the "Edit" button to modify existing tasks.
* **Delete:** Remove specific tasks or use "Clear Completed" to cleanup the list.
* **Persistence:** All data is saved automatically to the browser's `LocalStorage`.
* **Responsive Design:** Styled with modern CSS for a clean look on any device.

## 🛠️ Tech Stack

* **Framework:** React 19 (Functional Components, Hooks)
* **Build Tool:** Vite
* **Styling:** CSS3 (Custom properties, Flexbox)
* **State Management:** React `useState` & `useEffect` (No external libraries used)

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites
* Node.js (v16 or higher)
* npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USER/react-task-manager.git
    cd react-task-manager
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Component Structure

The application follows a component-based architecture with **Single Responsibility Principle**:

1.  **`App.jsx`** (Smart / Container Component)
    * **Responsibility:** Manages the global state (`tasks`, `filter`), handles business logic (`addTask`, `deleteTask`, `toggleTask`, `editTask`), and manages data persistence with `LocalStorage`.

2.  **`Header.jsx`**
    * **Responsibility:** Renders the application title and the input form for adding new tasks. Handles form validation (preventing empty tasks).

3.  **`TodoList.jsx`**
    * **Responsibility:** Acts as a list container. It receives the filtered tasks and renders a list of `TodoItem` components. Handles the "Empty State" message.

4.  **`TodoItem.jsx`**
    * **Responsibility:** Renders a single task. Handles the display logic (strikethrough for completed), the edit mode (input switching), and individual task actions (toggle, delete, save).

5.  **`Footer.jsx`**
    * **Responsibility:** Displays the "Items left" counter, renders filter buttons (All/Active/Completed), and the "Clear Completed" action.

## 🐛 Known Issues / Limitations

* **LocalStorage:** Data is stored in the browser's LocalStorage. Clearing the browser cache or opening the app in Incognito mode will reset the data.
* **Edit Mode:** Currently, you must press "Save" or Enter to persist changes in edit mode.

---
**Created by Gal Tenne © 2026**
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Technologies Used

- React
- Vite
- CSS

## License

This project is licensed under the MIT License.