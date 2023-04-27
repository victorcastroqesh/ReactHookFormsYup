import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import DisplayForm from "./pages/DisplayForm";


export default function Routes() {
  return (
    //essa const Switch é o que vai fazer a navegação entre as páginas
    <Switch>
      {/*essa const Route é o que vai definir a rota e o que vai ser renderizado na tela*/}
      <Route path="/" element={<Form />} />
      <Route path="/displayform" element={<DisplayForm />}/>
    </Switch>
  );
}
