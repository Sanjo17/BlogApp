/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BlogContext = createContext();

const data = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    author: "Alice Johnson",
    content:
      "Artificial Intelligence (AI) is revolutionizing web development in multiple ways. From chatbots to automation, AI tools are enhancing the capabilities of developers and enabling more interactive and intelligent user experiences. By integrating AI into web applications, developers can create systems that learn from data, provide personalized experiences, and streamline backend operations. As AI technology evolves, we can expect more advanced tools and features that will shape the future of web development.",
  },
  {
    id: 2,
    title: "Mastering JavaScript Closures",
    author: "John Smith",
    content:
      "Closures are one of the most powerful and versatile concepts in JavaScript. A closure allows a function to remember its lexical environment even after the function has finished executing. This means a function can access variables from its outer scope even after the outer function has returned. Closures are widely used in JavaScript for creating private variables, managing asynchronous code, and building powerful callbacks. Mastering closures can lead to more efficient, modular, and maintainable code in JavaScript development.",
  },
  {
    id: 3,
    title: "Django vs. Node.js: Which One to Choose?",
    author: "Emma Brown",
    content:
      "Both Django and Node.js are powerful backend frameworks that provide essential tools for building web applications. Django, built on Python, is known for its simplicity, speed, and scalability, making it an excellent choice for rapid application development. On the other hand, Node.js is an event-driven, non-blocking I/O model that makes it well-suited for real-time applications, such as chat apps and online games. Choosing between Django and Node.js depends on your project needs, the scalability of the application, and your team's familiarity with the technologies. Both frameworks have their strengths and are widely used in the industry.",
  },
  {
    id: 4,
    title: "How to Optimize Your React App",
    author: "Michael Lee",
    content:
      "Optimizing React applications is crucial for ensuring fast load times and seamless user experiences. There are several techniques that developers can use to optimize React apps, such as code splitting, lazy loading, and memoization. Code splitting allows large JavaScript bundles to be loaded only when needed, reducing the initial load time. Memoization helps by preventing unnecessary re-renders of components that haven't changed. Using the React Profiler and other debugging tools can also identify performance bottlenecks and provide insights into optimizing render cycles. By following these optimization practices, React apps can perform at their best.",
  },
  {
    id: 5,
    title: "Building a Chat App with Firebase",
    author: "Sophia Martinez",
    content:
      "Firebase offers a powerful real-time database that makes it easy to build chat applications. By leveraging Firebase's Firestore or Realtime Database, developers can quickly implement messaging features without managing their own server infrastructure. Firebase handles authentication, data syncing, and server-side logic, allowing developers to focus on the app’s frontend and user interface. You can also use Firebase Cloud Messaging to send push notifications to users. Building a chat app with Firebase is an excellent way to create real-time communication platforms with minimal setup.",
  },
  {
    id: 6,
    title: "Top 10 VS Code Extensions for Developers",
    author: "David Kim",
    content:
      "Visual Studio Code (VS Code) is one of the most popular code editors among developers, thanks to its rich ecosystem of extensions. Some of the best VS Code extensions for developers include Prettier for automatic code formatting, ESLint for linting and code quality, and GitLens for enhanced Git integration. Extensions like Live Server, Debugger for Chrome, and IntelliSense for CSS class names significantly improve the development experience. For web developers, tools like Bracket Pair Colorizer and CSS Peek offer enhanced syntax highlighting and navigation. These extensions help developers work more efficiently, improve code quality, and save time.",
  },
  {
    id: 7,
    title: "Understanding Tailwind CSS Utility Classes",
    author: "Olivia White",
    content:
      "Tailwind CSS is a utility-first CSS framework that offers a unique approach to building modern web designs. Instead of writing custom CSS for each component, developers use utility classes directly in their HTML to apply styles. This approach enables faster development, as it eliminates the need for lengthy CSS files and reduces the chances of specificity conflicts. With Tailwind CSS, you can quickly apply margins, paddings, colors, and other properties directly within the HTML markup. Additionally, Tailwind supports a responsive design system that allows you to create mobile-first layouts with ease.",
  },
  {
    id: 8,
    title: "Flutter vs. React Native: Which is Better?",
    author: "Ethan Wilson",
    content:
      "Flutter and React Native are two of the most popular frameworks for building cross-platform mobile applications. Flutter, developed by Google, uses the Dart programming language and provides a rich set of pre-designed widgets for building beautiful UIs. React Native, developed by Facebook, uses JavaScript and offers the flexibility of native components. While both frameworks enable cross-platform development, Flutter’s widget-based approach provides more control over the UI, while React Native allows for easier integration with native code. The choice between Flutter and React Native depends on your app’s design requirements, developer skill set, and project goals.",
  },
  {
    id: 9,
    title: "Building Scalable APIs with Django Rest Framework",
    author: "Isabella Harris",
    content:
      "Django Rest Framework (DRF) is a powerful toolkit for building APIs with Django. It provides a set of tools and libraries for creating RESTful APIs quickly and efficiently. DRF supports authentication, serialization, and viewsets, making it easy to handle complex data structures and implement robust security features. When building scalable APIs, it’s important to implement proper pagination, filtering, and caching to ensure optimal performance as the application grows. DRF also allows for easy integration with third-party libraries like JWT and OAuth for secure user authentication and authorization.",
  },
  {
    id: 10,
    title: "Intro to Web Accessibility: Why It Matters",
    author: "James Davis",
    content:
      "Web accessibility is crucial to ensuring that websites and applications are usable by all individuals, including those with disabilities. Accessibility features like keyboard navigation, screen readers, and contrast ratios help people with visual, auditory, and motor impairments use digital content. Following the Web Content Accessibility Guidelines (WCAG) is an essential step in creating inclusive web experiences. Web accessibility also benefits businesses by expanding their reach to a broader audience, including users with disabilities. In this post, we’ll explore the best practices for making your website accessible to everyone.",
  },
];
export const BlogProvider = ({ children }) => {
  const [blogList, setBlogList] = useState(data);

  const resetBlog = () => {
    setBlogList(data)
  }

  return (
    <BlogContext.Provider value={{ blogList, setBlogList,resetBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
