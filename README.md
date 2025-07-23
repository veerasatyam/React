# React Learning Repository

A comprehensive guide and practice repository for learning React fundamentals, covering everything from basic concepts to advanced topics like hooks and lifecycle methods.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Components](#components)
4. [JSX and Its Rules](#jsx-and-its-rules)
5. [Create React App and Practice Components](#create-react-app-and-practice-components)
6. [Props](#props)
7. [Children in Props](#children-in-props)
8. [Events and Callbacks](#events-and-callbacks)
9. [Getting Started with State (In-Depth)](#getting-started-with-state-in-depth)
10. [Rendering](#rendering)
11. [Lifecycle Methods with useEffect](#lifecycle-methods-with-useeffect)

## Introduction

React is a powerful JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Meta and the open-source community. React allows developers to create reusable UI components and manage application state efficiently.

**Key benefits of React:**
- Component-based architecture for reusable code
- Virtual DOM for optimal performance
- Strong ecosystem and community support
- Declarative programming style
- Excellent developer tools and debugging capabilities

## Prerequisites

Before diving into React, you should have a solid understanding of:

**Required:**
- **HTML/CSS**: Understanding of web markup and styling
- **JavaScript (ES6+)**: Functions, arrow functions, destructuring, modules, promises
- **Node.js**: Version 14 or higher for package management
- **npm or yarn**: Package managers for installing dependencies

**Recommended:**
- Basic understanding of modern JavaScript concepts
- Familiarity with command line/terminal
- Code editor (VS Code recommended with React extensions)

**Installation Requirements:**
```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

## Components

Components are the building blocks of React applications. They are reusable pieces of code that return JSX elements to be rendered to the screen.

**Types of Components:**

**Functional Components (Recommended):**
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}
```

**Class Components (Legacy):**
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

## JSX and Its Rules

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It gets compiled to regular JavaScript function calls.

**JSX Rules:**

1. **Return a single parent element:**
   ```jsx
   // Correct
   return (
     <div>
       <h1>Title</h1>
       <p>Content</p>
     </div>
   );
   
   // Or use React Fragment
   return (
     <>
       <h1>Title</h1>
       <p>Content</p>
     </>
   );
   ```

2. **Use className instead of class:**
   ```jsx
   <div className="container">Content</div>
   ```

3. **Close all tags:**
   ```jsx
   <img src="image.jpg" alt="description" />
   <input type="text" />
   ```

4. **Use camelCase for attributes:**
   ```jsx
   <button onClick={handleClick}>Click me</button>
   <input onChange={handleChange} />
   ```

5. **Embed JavaScript expressions with curly braces:**
   ```jsx
   const name = "John";
   return <h1>Hello, {name}!</h1>;
   ```

## Create React App and Practice Components

**Setting up a new React project:**

```bash
# Create a new React app
npx create-react-app my-react-app

# Navigate to the project directory
cd my-react-app

# Start the development server
npm start
```

**Basic Component Practice:**

```jsx
// App.js
import React from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <Header />
      <UserCard name="John Doe" age={25} />
      <UserCard name="Jane Smith" age={30} />
    </div>
  );
}

export default App;
```

## Props

Props (short for properties) are how you pass data from parent components to child components. They are read-only and help make components reusable.

**Basic Props Usage:**
```jsx
// Parent Component
function App() {
  return <Greeting name="Alice" age={25} />;
}

// Child Component
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

// Using destructuring
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}
```

**Default Props:**
```jsx
function Greeting({ name = "Guest", age = 0 }) {
  return <h1>Hello, {name}! Age: {age}</h1>;
}
```

## Children in Props

The `children` prop is a special prop that allows you to pass components or elements between the opening and closing tags of a component.

```jsx
// Container component
function Card({ children }) {
  return (
    <div className="card">
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Card Title</h2>
      <p>This is the card content passed as children.</p>
      <button>Action Button</button>
    </Card>
  );
}
```

**Advanced Children Usage:**
```jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
```

## Events and Callbacks

React uses SyntheticEvents, which are wrappers around native DOM events. Event handlers are passed as props and typically named with "on" prefix.

**Basic Event Handling:**
```jsx
function Button() {
  const handleClick = (event) => {
    event.preventDefault();
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

**Passing Data with Events:**
```jsx
function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build an app" }
  ]);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
}
```

## Getting Started with State (In-Depth)

State allows components to manage and update their own data. In modern React, we use the `useState` hook for functional components.

**Basic State Usage:**
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**State with Objects:**
```jsx
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
      />
    </form>
  );
}
```

**State with Arrays:**
```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add Todo</button>
      
      {todos.map(todo => (
        <div key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
}
```

## Rendering

Rendering in React refers to the process of converting React elements into DOM elements that the browser can display.

**Conditional Rendering:**
```jsx
function Welcome({ user }) {
  if (user) {
    return <h1>Welcome back, {user.name}!</h1>;
  }
  return <h1>Please sign in.</h1>;
}

// Using ternary operator
function Status({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <UserDashboard /> : <LoginForm />}
    </div>
  );
}

// Using logical && operator
function Notification({ messages }) {
  return (
    <div>
      {messages.length > 0 && (
        <div>You have {messages.length} new messages</div>
      )}
    </div>
  );
}
```

**List Rendering:**
```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
}
```

**Fragment Rendering:**
```jsx
function TableRow() {
  return (
    <>
      <td>Cell 1</td>
      <td>Cell 2</td>
      <td>Cell 3</td>
    </>
  );
}
```

## Lifecycle Methods with useEffect

The `useEffect` hook allows you to perform side effects in functional components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

**Basic useEffect Usage:**
```jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect runs after every render
  useEffect(() => {
    console.log('Component rendered');
  });

  // Effect runs only once (on mount)
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array

  // Effect runs when specific values change
  useEffect(() => {
    document.title = `Data: ${data ? data.length : 0} items`;
  }, [data]); // Runs when 'data' changes

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      {data && data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

**Cleanup with useEffect:**
```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this runs once on mount

  return <div>Timer: {seconds} seconds</div>;
}
```

**Multiple useEffect Hooks:**
```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Effect for fetching user data
  useEffect(() => {
    if (userId) {
      fetchUser(userId).then(setUser);
    }
  }, [userId]);

  // Effect for fetching user posts
  useEffect(() => {
    if (userId) {
      fetchUserPosts(userId).then(setPosts);
    }
  }, [userId]);

  // Effect for updating page title
  useEffect(() => {
    if (user) {
      document.title = `${user.name}'s Profile`;
    }
    
    return () => {
      document.title = 'My App';
    };
  }, [user]);

  return (
    <div>
      {user && <h1>{user.name}</h1>}
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Getting Started

To get started with this React learning repository:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-learning-repo.git
   cd react-learning-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to see the React app running.

## Practice Exercises

Each section includes hands-on exercises to reinforce learning:

- Create your own components following the examples
- Experiment with different prop types and values
- Build small projects using state and effects
- Practice event handling with interactive elements

## Additional Resources

**Official Documentation:**
- [React Official Docs](https://reactjs.org/docs/getting-started.html)
- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)

**Recommended Learning Path:**
1. Master JavaScript ES6+ features first
2. Understand component basics and JSX
3. Practice with props and state
4. Learn hooks (useState, useEffect)
5. Build projects to apply concepts

## Contributing

Contributions are welcome! If you'd like to add examples or improve explanations:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-example`)
3. Add your improvements
4. Commit your changes (`git commit -m 'Add new component example'`)
5. Push to the branch (`git push origin feature/new-example`)
6. Open a Pull Request

For questions or suggestions about this React learning repository:

- Create an issue in this repository
- Email: satyamsvs788@gmail.comm
