import React from 'react';
import ReactDOM from 'react-dom';
//import { createBrowserHistory } from 'history';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import '../components/homepage.css';
import Form from '../components/app-form/Form';
import '../components/app-form/Form.css';
import Homepage from '../components/homepage';
import Notes from '../components/teacher_Access/pages/notes';
import Grade from '../components/teacher_Access/pages/grade';
import PastPapers from '../components/teacher_Access/pages/pastpapers';
import teacher_dash from '../components/teacher_Access/teacher_dash';
import studentdash from '../components/student_Access/studentdash';
import login from '../components/app-form/login';



//const hist = createBrowserHistory();

function App(){
    return(
    <>
    <Router>
      
    <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path= '/app-form/Form' exact component={Form}/>
            < Route path='/teacher_Access/pages/grade' component={Grade}/>
            < Route path='/teacher_Access/pages/notes' component={Notes}/>
           <Route path='/teacher_Access/pages/pastpapers' component={PastPapers}/>
           <Route path='/student_Access/studentdash' component={studentdash}/>
           <Route path='/teacher_Access/teacher_dash' component={teacher_dash}/>
           <Route path='/app-form/login' component={login}/>
           
            
        </Switch>
    </Router>
    </>
    );
}


export default App;