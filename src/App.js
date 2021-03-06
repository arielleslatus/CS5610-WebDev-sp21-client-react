import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './components/component-style.css';
import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import Home from "./components/home";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";
import Login from "./components/users/login";
import Register from "./components/users/register";
import Profile from "./components/users/profile";
import Scores from "./components/quizzes/scores/scores";




function App() {
  return (
      <BrowserRouter>

          <Switch>
              <Route path="/"
                     exact={true}
                     component={Home}/>
              <Route path="/login"
                     exact={true}
                     component={Login}/>
              <Route path="/register"
                     exact={true}
                     component={Register}/>
              <Route path="/profile"
                     exact={true}
                     component={Profile}/>
              <Route path="/profile/:userId"
                     exact={true}
                     component={Profile}/>
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
              <Route path={"/courses/:courseId/quizzes/:quizId/attempts"}
                     exact={true}
                     component={Scores}/>

          </Switch>
      </BrowserRouter>

  )
}

export default App;
