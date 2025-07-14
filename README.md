# Tasko

A modern and intuitive task management application built with Vue.js, allowing users to create, organize, and manage their tasks efficiently.

## Features

- **User Authentication**: Complete login/register system
- **Task Management**: Create, edit, and delete tasks
- **Task Lists**: Organize tasks into customizable lists
- **User Profiles**: Manage personal information and profile settings
- **Account Management**: Change email, password, and delete account
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Instant task synchronization

## Tech Stack

- **Frontend**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ncantona/Tasko.git
   cd Tasko
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API URL**
   
   The application uses a backend API. Update the API URL in [`src/API/Url.vue`](src/API/Url.vue) if needed:
   ```javascript
   export const URL = 'https://your-api-url.com'
   ```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Key Components

- **[`useUserStore`](src/stores/useUserStore.js)**: Manages user authentication and profile data
- **[`useTaskListStore`](src/stores/useTaskListStore.js)**: Handles task list operations
- **[`usePopupStore`](src/stores/usePopupStore.js)**: Manages popup notifications
- **[`HomeView`](src/views/HomeView.vue)**: Main task management interface
- **[`ProfileView`](src/views/ProfileView.vue)**: User profile management

## Authentication

The application includes a complete authentication system:

- User registration with email validation
- Login with email and password
- JWT token-based authentication
- Protected routes for authenticated users

## API Integration

The application communicates with a backend API for:

- User authentication and management
- Task list operations
- Task CRUD operations
- Profile management

API requests are handled through Axios with automatic JWT token injection.

## Styling

The application uses Tailwind CSS for styling with a custom design system:

- Responsive design for mobile and desktop
- Custom color schemes for different task lists
- Consistent component styling
- Background image integration

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please open an issue on the GitHub repository.

## Acknowledgments

- Built with Vue.js 3 and Vite
- Styled with Tailwind CSS
- Icons from custom SVG collection
- Backend API hosted on codersbay.wien