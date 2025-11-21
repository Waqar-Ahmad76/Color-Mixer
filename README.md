# 🎨 Interactive RGB Color Mixer

This is a small, focused React project designed to demonstrate core front-end concepts, specifically **React State Management (useState)** and **Event Handling**.

The application allows a user to control the Red, Green, and Blue (RGB) values of a color in real-time using range sliders.

## ✨ Features

* **Real-time Color Update:** Instantly reflects the mixed color in a dedicated preview box as sliders are adjusted.
* **Centralized State:** Manages the Red, Green, and Blue values (0-255) using `useState` in the parent component.
* **Event Handling Practice:** Utilizes the **`onChange`** event on the sliders to synchronize input values with the application state.
* **Reusable Components:** Uses a functional `Slider` component to handle each color channel, promoting component reusability.
* **Reset Functionality (Future Goal):** A perfect spot to add an `onClick` event handler to reset all values to 0.

## ⚙️ Technologies Used

* **React** (Functional Components and Hooks)
* **CSS** (For basic styling and layout)

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

You need to have Node.js installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Waqar-Ahmad76/Color-Mixer.git](https://github.com/Waqar-Ahmad76/Color-Mixer.git)
    cd your-repo-name
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```

The application will open in your browser, usually at `http://localhost:3000`.

## 📂 Project Structure

| File | Description |
| :--- | :--- |
| `src/App.jsx` | Main application component. Manages the RGB state and contains the primary event handler (`onSlide`). |
| `src/Slider.jsx` | Reusable child component for rendering a single range input slider and its current value. |
| `src/App.css` | Styling for the main layout and the color preview box. |
| `README.md` | This file. |

## 💡 Practice Points & Next Steps

This project is great for practicing the following:

* **Passing Handlers:** The `onSlide` handler is created in `App.jsx` and passed down as a prop to `Slider.jsx`.
* **Identifying Event Targets:** The handler uses `e.target.name` to identify which state setter (`setRed`, `setGreen`, etc.) to call.


