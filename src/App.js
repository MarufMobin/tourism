import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyPrivateRoute from './components/MyPrivateRoute/MyPrivateRoute';
import PrivateTwo from './components/PrivateTwo/PrivateTwo';
import Booking from './components/Home/Booking/Booking';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Registration from './components/Registration/Registration';
import Try from './Try/Try';
import Trips from './components/Trips/Trips';
import ManageUser from './components/ManageUser/ManageUser';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/manageuser">
              <ManageUser></ManageUser>
            </PrivateRoute>
            <Route exact path="/trips">
              <Trips></Trips>
            </Route>
            <PrivateRoute exact path="/privateone">
              <MyPrivateRoute></MyPrivateRoute>
            </PrivateRoute>
            <PrivateRoute exact path="/privatetwo">
              <PrivateTwo></PrivateTwo>
            </PrivateRoute>
            <PrivateRoute path="/datas/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
