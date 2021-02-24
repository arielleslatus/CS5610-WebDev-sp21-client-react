import React from 'react'
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router-dom";
import './components/component-style.css';




function App() {
  return (
      <BrowserRouter>
          <Route path="/courses" render={() => <CourseManager />} />
          <Route path="/editor" render={(props) => <CourseEditor {...props}/>} />
      </BrowserRouter>

  );
}

export default App;
