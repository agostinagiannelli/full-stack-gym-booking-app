# Appointment Management Full Stack App

This is a full stack application for managing appointments. Users can schedule appointments on specific dates and times. Authentication is required for booking appointments; anonymous or invited guests cannot schedule appointments.

## Technologies

* Frontend: JS, React
* Backend: Typescript, Express, TypeORM, PostgreSQL

## Description

This application provides a user-friendly interface for managing appointments. Users can register and log in to their accounts to schedule appointments for their desired date and time. The application ensures that only authenticated users can book appointments, maintaining privacy and security.

## Instructions

To use the app, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/agostinagiannelli/full-stack-gym-booking-app.git
```

2. Navigate to the project directory.

```bash
cd full-stack-gym-appointments-project
```

3. Install dependencies for both the frontend and backend.

```bash
cd frontend
npm install
cd ../backend
npm install
```

4. Set up the PostgreSQL database.

- Create a PostgreSQL database and note down the credentials (database name, username, password).
- Create the database connection configuration in the backend's `.env` file using `.env.example` as reference.

5. Start the backend server.

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

6. Start the frontend development server.

```bash
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

8. Access the application in your web browser at `http://localhost:5173`.

9. Sign up for an account or log in if you already have one.

10. Navigate to the appointment booking section, select a date and time, and schedule your appointment.

## License

Agostina Giannelli (https://github.com/agostinagiannelli)
