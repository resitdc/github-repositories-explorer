# GitHub Repositories Explorer

![GitHub Repositories Explorer](/public/project-screenshot.png)

GitHub Repositories Explorer is a React TypeScript application that allows users to explore GitHub users and their repos. This application utilizes various technologies such as React, TypeScript, SASS, Formik, Yup, Redux and Axios.

## Features

- **User Search**: Users can search for GitHub users by entering keywords in the search bar. The application provides real-time suggestions as the user types.
- **User Listing**: The search results are displayed as a list, showing the github username.
- **Repository Listing**: Each user list that is clicked will display all repository lists from that user (public only).

## Installation

Follow the steps below to install and run the GitHub Repositories Explorer application locally.

1. Clone the repository:

```bash
git clone https://github.com/resitdc/github-repositories-explorer.git
```

2. Navigate to the project directory:

```bash
cd github-repositories-explorer
```

3. Install the dependencies using npm:

```bash
npm install
```

## Usage

After completing the installation steps, you can run the application using the following command:

```bash
npm start
```

This will start the development server and open the application in your default web browser. If the browser does not open automatically, navigate to [http://localhost:3000](http://localhost:3000) to access the application.

## Dependencies

The GitHub Repositories Explorer application relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
- SASS: CSS extension language for styling.
- Formik: Form library for React applications.
- Yup: JavaScript schema builder for value parsing and validation.
- Redux: Predictable state container for JavaScript apps.
- Axios: Promise-based HTTP client for the browser and Node.js.

## Project Structure

The application follows the Atomic Design methodology, organizing components into different layers based on their complexity and reusability. The structure of the project is as follows:

```
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── ...
│   │   └── styles/
│   │   │   └── ...
│   ├── components/
│   │   ├── atoms/
│   │   │   └── ...
│   │   ├── molecules/
│   │   │   └── ...
│   │   └── organisms/
│   │   │   └── ...
│   ├── interface/
│   │   └── github
│   │   │   └── index.ts
│   ├── pages/
│   │   ├── Error/
│   │   │   └── index.ts
│   │   └── Home/
│   │   │   └── index.ts
│   └── plugins/
│   │   └── api/
│   │   │   ├── repos/
│   │   │   │   └── index.ts
│   │   │   ├── users/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── axios/
│   │   │   ├── errorResponseHandler.ts
│   │   │   └── index.ts
│   │   └── redux/
│   │   │   ├── actions/
│   │   │   │   └── ...
│   │   │   ├── reducers/
│   │   │   │   └── ...
│   │   │   └── store/
│   │   │   │   └── ...
│   │   └── router/
│   │   │   └── index.tsx
│   └── ...
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

# Credits

This project is developed by [Restu D. Cahyo](http://resitdc.id/).

Connect with me:

- LinkedIn: [Restu D. Cahyo](https://www.linkedin.com/in/resitdc/)
- Instagram: [resitdc](https://www.instagram.com/resitdc/)
- Website: [resitdc.id](http://resitdc.id/)
- Email: restu@resitdc.id

Feel free to reach out to me if you have any questions, suggestions, or collaboration opportunities.
