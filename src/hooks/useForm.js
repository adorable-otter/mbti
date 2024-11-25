import { useState } from 'react';
import { initialFormStates } from '../constatnts/form';

const useForm = (name) => {
  const [values, setValues] = useState(initialFormStates[name]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFormStates[name]);
  };

  return { values, handleInputChange, resetForm };
};

export default useForm;
