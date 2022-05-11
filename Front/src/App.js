import './App.css';
import {Home, Service, About, Contact, Privacy} from "./containers"
import {HelmetLayout} from './layouts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import SignUp from "./containers/SignUp/signUp";
import SignIn from "./containers/SignIn/signIn";


const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route path="/home">
                        <HelmetLayout title='home'>
                            <Home/>
                        </HelmetLayout>
                    </Route>
                    <Route path="/service">
                        <HelmetLayout title='service'>
                            <Service/>
                        </HelmetLayout>
                    </Route>
                    <Route path="/about">
                        <HelmetLayout title='about'>
                            <About/>
                        </HelmetLayout>
                    </Route>
                    <Route path="/contact">
                        <HelmetLayout title='contact'>
                            <Contact/>
                        </HelmetLayout>
                    </Route>
                    <Route path="/privacy">
                        <HelmetLayout title='privacy'>
                            <Privacy/>
                        </HelmetLayout>
                    </Route>
                    <Route path="/signUp">
                        <HelmetLayout title='SignUp'>
                            <SignUp />
                        </HelmetLayout>
                    </Route>
                    <Route path="/signIn">
                        <HelmetLayout title='SignIn'>
                            <SignIn />
                        </HelmetLayout>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
