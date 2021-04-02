import React from 'react'
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './components/component-style.css';
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";




function App() {
  return (
      <BrowserRouter>

          <Switch>
              <Route path="/"
                     exact={true}
                     component={Home}/>
              <Route path={["/courses/:layout/edit/:courseId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                            "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"]}
                     exact={true}
                     render={(props) => <CourseEditor {...props}/>} />
              <Route path={["/courses/table", "/courses/grid"]}
                     exact={true}
                     component={CourseManager} />
              <Route path={"/courses/:courseId/quizzes"}
                     exact={true}
                     component={QuizzesList}/>
              <Route path={"/courses/:courseId/quizzes/:quizId"}
                     exact={true}
                     component={Quiz}/>

          </Switch>
      </BrowserRouter>

  );
}

export default App;
