# Note It Down - Frontend

A modern React-based frontend application for a note-taking system. Built with Vite for fast development and optimized builds, featuring a clean UI with full CRUD functionality for managing notes.

## 🚀 Features

- **Modern React 19** with functional components and hooks
- **Vite Build Tool** for fast development and optimized production builds
- **Axios HTTP Client** for API communication
- **Context API** for state management across components
- **Responsive Design** with custom CSS styling
- **Real-time Updates** with automatic UI refresh after operations
- **Form Validation** with error handling and user feedback
- **Modal Dialogs** for delete confirmations
- **Inline Editing** with seamless view/edit mode switching

## 🛠️ Tech Stack

- **React 19.1.1** - Modern JavaScript library for building user interfaces
- **Vite 7.1.7** - Next-generation frontend build tool
- **Axios 1.4.0** - Promise-based HTTP client for API requests
- **ESLint** - Code linting and formatting
- **CSS3** - Custom styling with modern CSS features

## 🎨 UI Components

### Core Components

- **App.jsx** - Main application component with context provider
- **AddNote** - Form component for creating new notes
- **NoteList** - Container for displaying all notes
- **Note** - Individual note component with view/edit/delete functionality
- **NoteViewer** - Read-only note display
- **NoteEditor** - Inline editing interface
- **DeleteModal** - Confirmation dialog for note deletion

### Component Architecture

```
App
├── AddNote (Create new notes)
└── NoteList
    └── Note (Individual note)
        ├── NoteViewer (Display mode)
        ├── NoteEditor (Edit mode)
        └── DeleteModal (Delete confirmation)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd NID_Frontend
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   ```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://127.0.0.1:8000
VITE_APP_NAME=Note It Down
```

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be accessible in the browser.

### API Integration

The frontend communicates with the backend API at `http://127.0.0.1:8000` by default. Update the `VITE_API_URL` environment variable to point to your backend server.

## 🎯 Key Features Implementation

### State Management

- **React Context**: `NoteListUpdateFunctionContext` provides state update function across components
- **useState Hook**: Manages notes list and component-specific state
- **useEffect Hook**: Handles API calls and side effects

### API Communication

- **Axios Integration**: All HTTP requests handled through Axios
- **Error Handling**: Proper error handling for API failures
- **Loading States**: UI feedback during API operations

### Form Handling

- **Prevent Default**: `e.preventDefault()` prevents page refresh on form submission
- **Controlled Components**: All form inputs are controlled by React state
- **Real-time Validation**: Immediate feedback on form errors

## 🔧 Development Experience

### Setup Journey

1. **Package Management**

   - Chose Yarn over npm for better performance and reliability
   - Installed Axios for API communication: `yarn add axios@1.4.0`

2. **Project Structure**

   - Followed component-based architecture
   - Organized components in logical folders with index.js exports
   - Separated styles into individual CSS files

3. **State Management Learning**

   - Implemented React Context for sharing state between components
   - Learned proper use of useState and useEffect hooks
   - Understood component communication patterns

4. **API Integration**
   - Connected frontend to FastAPI backend
   - Implemented CRUD operations with proper error handling
   - Learned about CORS and cross-origin requests

### Technical Challenges Overcome

1. **Environment Variables**

   - Initially used incorrect `env.API_URL` syntax
   - Learned Vite's `import.meta.env.VITE_*` pattern
   - Implemented proper environment variable handling

2. **Form Submission**

   - Understood the importance of `e.preventDefault()` in React forms
   - Learned to handle form submission with Axios instead of native form behavior
   - Implemented proper form validation and error states

3. **Component Communication**

   - Used React Context to share state update functions
   - Implemented proper prop drilling and component composition
   - Learned about component lifecycle and re-rendering

4. **API Error Handling**
   - Implemented proper error handling for API failures
   - Added user feedback for validation errors
   - Learned about HTTP status codes and error responses

### Key Learnings

- **Modern React Patterns**: Functional components, hooks, and context API
- **Build Tools**: Vite's fast development server and optimized builds
- **HTTP Client**: Axios for API communication and error handling
- **State Management**: Context API for component communication
- **Form Handling**: Controlled components and validation in React
- **Development Workflow**: Hot reloading, linting, and build optimization

## 📁 Project Structure

```
NID_Frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── AddNote/
│   │   │   ├── AddNote.jsx
│   │   │   ├── AddNote.styles.css
│   │   │   └── index.js
│   │   └── NoteList/
│   │       ├── NoteList.jsx
│   │       ├── NoteList.styles.css
│   │       ├── Note/
│   │       │   ├── Note.jsx
│   │       │   ├── Note.styles.css
│   │       │   ├── NoteViewer.jsx
│   │       │   ├── NoteEditor.jsx
│   │       │   ├── DeleteModal.jsx
│   │       │   ├── DeleteModal.styles.css
│   │       │   └── index.js
│   │       └── index.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   └── utility.styles.css
├── package.json
├── vite.config.js
├── eslint.config.js
└── yarn.lock
```

## 🎨 Styling

- **Custom CSS**: All components have dedicated stylesheets
- **Utility Classes**: Shared utility styles in `utility.styles.css`
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern CSS**: Flexbox, Grid, and modern CSS features

## 🔄 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `yarn lint`
5. Test your changes
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Related Projects

- [NID_API](../NID_API) - Backend FastAPI server
