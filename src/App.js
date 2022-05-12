import React from "react";
import './App.css';
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DatingCards from "./DatingCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats"


function App() {
  return (
    <div className="App">

        <Router>

            <Switch>
                <Route path="/chat/:person">
                    <Header backButton={"/"}/>
                    <Chats />
                    <h3>Test</h3>
                </Route>
                <Route path={"/chat"}>
                    <Header backButton={"/"}/>
                    <Chats />
                </Route>
                <Route path="/">
                    <Header />
                    <DatingCards />
                    <SwipeButtons />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;


{/* Dating Cards */}
{/* Buttons below dating cards */}

{/* Chats screen */}
{/*Individual chat screen*/}
