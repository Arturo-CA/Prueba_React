// src/components/UserForm.js
import React, { useState } from "react";
import { getUser, updateUser } from "../api";
import { TextField, Button, Container, Typography } from "@mui/material";

const UserForm = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const fetchUser = async () => {
    if (!userId) {
      alert("Porfavor ingresar un ID de usuario");
      return;
    }

    setLoading(true);
    try {
      const userData = await getUser(userId);
      setUser(userData);
    } catch (error) {
      alert("Error al obtener los datos del usuario");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      alert("Porfavor introduzca un ID de usuario valido");
      return;
    }

    try {
      await updateUser(userId, user);
      alert("Datos de usuario actualizados");
    } catch (error) {
      alert("Error al actualizar los datos del usuario");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Editar usuario</Typography>
      <TextField
        label="User ID"
        name="userId"
        value={userId}
        onChange={handleIdChange}
        fullWidth
        margin="normal"
      />
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={fetchUser}
        disabled={loading}
      >
        Obtener Usuario
      </Button>
      {user && (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Actualizar Usuario
          </Button>
        </form>
      )}
    </Container>
  );
};

export default UserForm;
