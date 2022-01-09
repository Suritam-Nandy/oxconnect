import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./auth/SignUp";
import Login from "./auth/Login";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";

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

            {/* <Route exact path="/jobs" component={Jobs} /> */}
            {/* <Route exact path="/job/:id" component={Job} /> */}

            <Route exact path="/login/:role" component={Login} />
            <Route exact path="/login" component={LoginPage} />
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
