import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import SignupPage from "./auth/SignupPage";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Company from "./pages/Company";
import AddJob from "./pages/AddJob";
import UpdateProfile from "./pages/UpdateProfile";
import AllJobs from "./pages/AllJobs";
import Job from "./pages/Job";
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          {/* 
  //        !will  make soon
          <Navbar /> 
          */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/company/:id" component={Company} />

            <Route exact path="/job/:id" component={Job} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addjob" component={AddJob} />
            <Route exact path="/addjob/:id" component={AddJob} />
            <Route exact path="/updateprofile/:id" component={UpdateProfile} />

            <Route exact path="/alljobs" component={AllJobs} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/signup/:role" component={Signup} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </BrowserRouter>
        {/* 
  //        !will  make soon 
  <Footer /> 
  */}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
