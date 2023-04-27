import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import DisplayForm from "./pages/DisplayForm";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Form />} />
      <Route path="/displayform" element={<DisplayForm />}/>
    </Switch>
  );
}
