import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const iFormData = {
    name: "",
    description: "",
    color: "#000",
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(iFormData);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Category Registration: {values.name}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([...categories, values]);
          setValues(iFormData);
        }}
      >
        <FormField
          title="Category Name:"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          title="Description:"
          name="description"
          type="text"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          title="Color:"
          name="color"
          type="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <p>{category.name}</p>
            <p>{category.description}</p>
            <p>{category.color}</p>
          </li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
