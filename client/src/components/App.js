import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SurveyCreate from "./surveys/SurveyCreate";
import SurveyEdit from "./surveys/SurveyEdit";
import SurveyDelete from "./surveys/SurveyDelete";
import SurveyList from "./surveys/SurveyList";
import SurveyShow from "./surveys/SurveyShow";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={SurveyList} />
            <Route path="/surveys/new" exact component={SurveyCreate} />
            <Route path="/surveys/edit" exact component={SurveyEdit} />
            <Route path="/surveys/delete" exact component={SurveyDelete} />
            <Route path="/surveys/show" exact component={SurveyShow} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
