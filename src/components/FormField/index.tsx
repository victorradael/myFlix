import React, { ChangeEventHandler } from 'react';
import {
  FormFieldWrapper,
  Label,
  Input,
  InputTextArea,
  LabelText,
} from './styles';

interface IFormField {
  name: string;
  type: string;
  title: string;

  value: string;
  onChange: ChangeEventHandler<any>;
}

const FormField = ({ name, value, onChange, type, title }: IFormField) => {
  const fieldId = `id_${name}`;
  const isTextarea = type;
  const tag = isTextarea === 'textarea' ? 'textarea' : 'input';
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        {tag === 'input' && (
          <Input
            id={fieldId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
        )}

        {tag === 'textarea' && (
          <InputTextArea
            id={fieldId}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
        <LabelText>{title}:</LabelText>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
