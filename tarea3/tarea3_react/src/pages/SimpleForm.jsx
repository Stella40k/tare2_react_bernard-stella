import React from "react";
import { useEffect } from "react";
import { useForm, useFotm } from "../hooks/useForm";

export default function SimpleForm() {
  const { form, handleChange } = useForm({
    userName: "",
    password: "",
  });
  const getFechTareas = () => {
    console.log("llamando a la api");
    console.log("guardando respuesta en un estado");
  };
  useEffect(() => {
    getFechTareas();
  }, []);
  useEffect(() => {
    console.log("modificando userName");
  }, [form.userName]);
  return (
    <>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username aqui"
          value={form.username}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password aqui"
          value={form.password}
          onChange={handleChange}
          required
        />
      </form>
    </>
  );
}
