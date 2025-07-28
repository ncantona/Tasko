# 📋 Tasko

A modern and intuitive task management application built with Vue.js, allowing users to efficiently create, organize, and manage their tasks.

## ✨ Features

### 🔐 User Authentication
- Complete login/registration system
- JWT token-based authentication

### 📝 Task Management
- Create, edit, and delete tasks
- Task status management ('Open', 'In Progress', 'Done')
- Organize tasks into customizable lists
- Color-coded task lists for better overview

### 👥 Profile & Account Management
- Manage personal profile information
- Change email and password
- Delete account
- Manage shared task lists

### 🎨 User Interface
- Responsive design for mobile and desktop
- Modern UI with Tailwind CSS
- Intuitive navigation and popup windows

### 📊 Statistics & Overview
- Progress indicators for task lists
- Task statistics per list
- Visual representation of work progress

## 🚀 Tech Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS 4.x
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **HTTP Client**: Axios
- **Build Tool**: Vite 6.x
- **Development Tools**: Vue DevTools, Vite Plugin Vue

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ncantona/Tasko.git
   cd tasko
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API URL**
   
   The application uses a backend API. The API URL is already configured in [`src/API/Url.vue`](src/API/Url.vue):
   ```javascript
   export const URL = 'https://task-list.codersbay.wien/api'
   ```

## 🚀 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🏗️ Build

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 👀 Production Build Preview

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Vue components
│   ├── Account/         # Account management components
│   ├── General/         # General UI components
│   ├── LoginRegister/   # Authentication components
│   ├── Profile/         # Profile management components
│   ├── SmallComponents/ # Reusable small components
│   ├── TasklistGeneral/ # Task list management
│   └── Tasklists/       # Task list display
├── stores/              # Pinia State Management
│   ├── useUserStore.js      # User state
│   ├── useTaskListStore.js  # Task list state
│   └── usePopupStore.js     # Popup notifications
├── views/               # Vue Router Views
├── layouts/             # Layout components
├── router/              # Vue Router configuration
├── assets/              # Static assets
│   ├── images/          # Images and icons
│   ├── fonts/           # Fonts
│   └── main.css         # Main stylesheet
└── API/                 # API configuration
```

## 🔑 Key Components

### State Management (Pinia Stores)
- **[`useUserStore`](src/stores/useUserStore.js)**: Manages user authentication and profile data
- **[`useTaskListStore`](src/stores/useTaskListStore.js)**: Handles task list operations
- **[`usePopupStore`](src/stores/usePopupStore.js)**: Manages popup notifications

### Main Views
- **[`HomeView`](src/views/HomeView.vue)**: Main task management interface
- **[`ProfileView`](src/views/ProfileView.vue)**: User profile management
- **[`LoginView`](src/views/LoginView.vue)**: Login interface
- **[`AccountView`](src/views/AccountView.vue)**: Account settings

### Layouts
- **[`LoggedInLayout`](src/layouts/LoggedInLayout.vue)**: Layout for authenticated users
- **[`LoggedOutLayout`](src/layouts/LoggedOutLayout.vue)**: Layout for non-authenticated users

## 🔐 Authentication

The application includes a complete authentication system:

- User registration with email validation
- Login with email and password
- JWT token-based authentication
- Protected routes for authenticated users
- Automatic token refresh
- Secure logout

## 🌐 API Integration

The application communicates with a backend API for:

- User authentication and management
- Task list operations (CRUD)
- Task CRUD operations
- Profile management and image upload
- Shared task lists

API requests are handled through Axios with automatic JWT token injection.

**API Endpoint**: `https://task-list.codersbay.wien/api`

## 🎨 Styling and Design

The application uses Tailwind CSS with a custom design system:

- **Responsive Design**: Optimized for mobile and desktop
- **Color System**: Custom color schemes for different task lists
- **Consistent Styling**: Uniform component design
- **Custom Fonts**: Inter font for better readability
- **Icons**: Custom SVG icon collection

## 📱 Features in Detail

### Task Management
- **Create Tasks**: Add new tasks with title and description
- **Change Status**: Switch tasks between 'Open', 'In Progress' and 'Done'
- **Edit Tasks**: Modify task titles and details
- **Delete Tasks**: Permanently remove tasks

### Task Lists
- **Create Lists**: New task lists with custom names
- **Color Coding**: Automatic color assignment based on list ID
- **Progress Display**: Visual representation of completion status
- **Share Lists**: Functionality for shared task lists
- **Delete Lists**: Remove task lists with confirmation

### Profile Management
- **Personal Data**: Edit name and personal information
- **Change Email**: Secure email address modification
- **Change Password**: Password update with validation

## 🛠️ Development and Contributing

### Setting Up Development Environment

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Commit your changes**: `git commit -am 'Add new feature'`
4. **Push the branch**: `git push origin feature/new-feature`
5. **Create a Pull Request**

### Code Standards
- ES6+ JavaScript/Vue.js 3 Composition API
- Tailwind CSS for styling
- Consistent component structure
- Responsive design principles

### Debugging
- Vue DevTools for component inspection
- Browser DevTools for network and performance analysis
- Pinia DevTools for state management

## 📦 Dependencies

### Production Dependencies
- **vue**: ^3.5.13 - Vue.js Framework
- **vue-router**: ^4.5.0 - Client-side routing
- **pinia**: ^3.0.1 - State management
- **axios**: ^1.10.0 - HTTP client

### Development Dependencies
- **vite**: ^6.3.5 - Build tool and dev server
- **@vitejs/plugin-vue**: ^5.2.3 - Vue support for Vite
- **tailwindcss**: ^4.1.11 - CSS framework
- **vite-plugin-vue-devtools**: ^7.7.2 - Vue DevTools integration

## 🔧 Configuration

### Router Configuration
- **Protected Routes**: Authentication required for `/home`, `/profile`, `/account`
- **Public Routes**: `/login`, `/register` for non-authenticated users
- **Automatic Redirects**: Based on authentication status

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **CDN**: CloudFlare, AWS CloudFront
- **Server**: Nginx, Apache

## 🔒 Security

- **JWT Tokens**: Secure authentication
- **HTTPS**: Encrypted data transmission
- **Input Validation**: Client and server-side validation
- **CORS**: Configured cross-origin requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support and Help

For support or questions:
- Open an issue in the GitHub repository
- Contact the development team

---

**Built with ❤️ for efficient task management**

*Last updated: July 2025*
