# Park Booking App

A web application for reserving parking spots. It has several features, including vehicle type selection, spot choosing, and detailed information about the owner. Based on this information, the app generates a token that serves as the identifier for the booking. The app also includes a token removal option for discharging vehicles.

## Live preview

[parkreserve.com](https://parkreserve.netlify.app/)

## Features

- Vehicle type select option.
- Parking sopt choosing option.
- Details information about reserver
- A token will be generated when the user clicks the 'Get Token' button
- Token list will be available on the left side of panel, also token can be removed.

## Installation

Install this app with npm

1. Clone the repository:

   ```
   git clone https://github.com/Seyam08/parking-app.git
   ```

2. Navigate to the project directory:

   ```
   cd parking-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the application:

   Development version

   ```
   npm run dev
   ```

5. Open the package.json file to see all the scripts.

## Deployment

To deploy this project run

```bash
  npm run build
```

## Acknowledgements

- The Daily Routine Maker app was created as a learning exercise.
- [React](https://react.dev/) The JavaScript library used for building the user interface.
- [Redux](https://redux.js.org/) A JS library for predictable and maintainable global state management
- [Tailwind CSS](https://tailwindcss.com/) A utility-first CSS framework
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Authors

- [Seyam Hossain](https://www.github.com/Seyam08)

## Lessons Learned

- Predictable state management with Redux
- Practiced React
- Practiced designing with Tailwind.css
