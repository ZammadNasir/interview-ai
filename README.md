# Interview AI

An AI-powered interview preparation platform that helps job seekers prepare for interviews by generating personalized interview reports based on their resume, self-description, and job descriptions.

## Features

- **User Authentication**: Secure registration and login system
- **Resume Upload**: Support for PDF resume uploads
- **AI-Powered Analysis**: Uses Google Gemini AI to analyze job fit and generate insights
- **Interview Questions**: Generates technical and behavioral interview questions with model answers
- **Skill Gap Analysis**: Identifies areas for improvement with severity levels
- **Preparation Roadmap**: Creates a day-by-day preparation plan
- **Match Score**: Provides a percentage match score between candidate profile and job requirements
- **Responsive UI**: Modern React-based frontend with clean, intuitive design

## Tech Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Google Gemini AI** for content generation
- **PDF parsing** with pdf-parse
- **File uploads** with Multer
- **Password hashing** with bcryptjs

### Frontend

- **React 19** with Vite
- **React Router** for navigation
- **Axios** for API calls
- **SCSS** for styling
- **ESLint** for code linting

### Development Tools

- **pnpm** for package management
- **Vite** for frontend development server
- **Puppeteer** for PDF generation

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- Google Gemini API key

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/ZammadNasir/interview-ai.git
   cd interview-ai
   ```

2. **Install dependencies**

   ```bash
   # Root dependencies (if any)
   pnpm install

   # Backend dependencies
   cd backend
   pnpm install

   # Frontend dependencies
   cd ../frontend
   pnpm install
   cd ..
   ```

3. **Environment Setup**

   Create a `.env` file in the `backend` directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_GENAI_API_KEY=your_google_gemini_api_key
   ```

4. **Start MongoDB**

   Make sure MongoDB is running on your system.

5. **Start the development servers**

   Open two terminals:

   **Terminal 1 - Backend:**

   ```bash
   cd backend
   pnpm run dev
   ```

   **Terminal 2 - Frontend:**

   ```bash
   cd frontend
   pnpm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## Usage

1. **Register/Login**: Create an account or log in to your existing account
2. **Home Page**: Fill in the job description, provide a self-description, and upload your resume (PDF format)
3. **Generate Report**: Click "Generate Report" to create your personalized interview preparation report
4. **View Report**: Access detailed interview questions, skill gaps, and preparation roadmap
5. **Review & Prepare**: Use the generated content to prepare for your interview

## API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Interview Reports

- `POST /api/interview/` - Generate new interview report (requires authentication)
- `GET /api/interview/report/:interviewId` - Get specific interview report
- `GET /api/interview/reports` - Get all user's interview reports

## Project Structure

```
interview-ai/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── interview.controller.js
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   └── file.middleware.js
│   │   ├── models/
│   │   │   ├── blacklist.model.js
│   │   │   ├── interviewRepoert.model.js
│   │   │   └── user.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── interview.routes.js
│   │   ├── services/
│   │   │   ├── ai.service.js
│   │   │   └── temp.js
│   │   └── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Loader.jsx
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── app.route.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.</content>
<parameter name="filePath">d:\Projects\interview-ai\README.md
