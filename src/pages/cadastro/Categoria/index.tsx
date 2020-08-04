import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import { FormDiv } from './styles';

interface IValues {
  name: string;
  description: string;
  color: string;
}

const CadastroCategoria = () => {
  const [categories, setCategories] = useState<IValues[]>([]);
  const [values, setValues] = useState<IValues>({} as IValues);

  console.log(values);
  console.log(categories);

  return (
    <PageDefault>
      <h1>Category Registration: {values.name}</h1>

      <FormDiv
        onSubmit={event => {
          event.preventDefault();
          setCategories([...categories, values]);
        }}
      >
        <FormField
          title="Category Name"
          name="name"
          type="text"
          value={values.name}
          onChange={event => setValues({ ...values, name: event.target.value })}
        />

        <FormField
          title="Description"
          name="description"
          type="textarea"
          value={values.description}
          onChange={event =>
            setValues({ ...values, description: event.target.value })
          }
        />

        <FormField
          title="Color"
          name="color"
          type="color"
          value={values.color}
          onChange={event =>
            setValues({ ...values, color: event.target.value })
          }
        />

        <button>Cadastrar</button>
      </FormDiv>

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
};

export default CadastroCategoria;
