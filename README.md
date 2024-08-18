# Visigoth Kings Project in React + Tailwind

## Overview
This project showcases a collection of Visigoth Kings using React and Tailwind CSS. The application features a grid layout of kings on the landing page and detailed information for each king on individual pages.


## Installation
To get started, clone the repository and install the necessary dependencies:

git clone https://github.com/your-repo/visigoth-kings.git
cd visigoth-kings
npm install


### 4. Dependencias

- **React**: Installed using Vite for a fast development environment.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **React Router DOM**: To handle navigation between the landing page and individual king pages.

You can install all dependencies by running the following command:

npm install react react-dom react-router-dom tailwindcss


### 5 Project Structure
- **Landing Page**: Displays a grid of all Visigoth Kings, styled using Tailwind CSS classes.
- **King Page**: Shows detailed information about a specific king when clicked in the navigation.
- **Dark Mode Feature**: A dark mode/light mode toggle has been implemented using the `useContext` hook in React. The toggle button, implemented as an atom within the components directory, uses `useState` to switch between dark and light modes.


## Running the Project
To start the project, use the following command:

npm run dev
This will launch the development server, and you can view the project in your browser at http://localhost:3000.
