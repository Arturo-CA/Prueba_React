import React from "react";
import UserForm from "./components/UserForm";

function App() {
  const userId = 1; // Cambia este ID según el usuario que quieras editar

  return (
    <div>
      <UserForm userId={userId} />
    </div>
  );
}

export default App;
