import React from 'react'
import CourseManager from "./componenets/course-manager/course-manager";
import CourseEditor from "./componenets/course-editor/course-editor";
import { BrowserRouter, Link } from "react-router-dom";
import Route from "react-router-dom/es/Route";
import './componenets/component-style.css';




function App() {
  return (
      <BrowserRouter>
          <Route path="/courses" render={() => <CourseManager />} />
          <Route path="/editor" render={(props) => <CourseEditor {...props}/>} />
      </BrowserRouter>

  );
}

export default App;
