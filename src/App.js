import React from 'react'
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './components/component-style.css';




function App() {
  return (
      <BrowserRouter>

          <Switch>

              <Route path={["/courses/:layout/edit/:courseId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                     exact={true}
                     render={(props) => <CourseEditor {...props}/>} />
              <Route path="/courses" component={CourseManager} />

          </Switch>
      </BrowserRouter>

  );
}

export default App;
