import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  // const iFormData = {
  //   name: '',
  //   description: '',
  //   color: '',
  // };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState();

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL).then(async respostaDoServer => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategories([...resposta]);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Category Registration: {values.name}</h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategories([...categories, values]);
          setValues(categories);
        }}
      >
        <FormField
          title="Category Name"
          name="name"
          type="text"
          value={values.name}
          onChange={event => handleChange(event)}
        />

        <FormField
          title="Description"
          name="description"
          type="textarea"
          value={values.description}
          onChange={event => handleChange(event)}
        />

        <FormField
          title="Color"
          name="color"
          type="color"
          value={values.color}
          onChange={event => handleChange(event)}
        />

        <button>Cadastrar</button>
      </form>

      {categories.length === 0 && <div>Loading ...</div>}

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
