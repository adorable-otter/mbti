import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { Button, Form, Input, Title } from '../styles/authForm';
import { useMutation } from '@tanstack/react-query';
import { register } from '../api/auth';

const SignUp = () => {
  const { values, handleInputChange } = useForm('signUp');
  const { mutate } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      // 201
      // data
      // success true
      // message 회원가입 완료
    },
    onError: (err) => {
      // 409
      // data.message 이미 존재하는 아이디
      alert(err.response.data.message);
    },
  });

  const handleRegisterButtonClick = (e) => {
    e.preventDefault();
    console.log(values);
    mutate(values);
  };

  return (
    <Wrap>
      <Title>회원가입</Title>
      <Form>
        <Input
          name={'id'}
          type={'text'}
          onChange={handleInputChange}
          value={values['id']}
          placeholder={'아이디'}
        ></Input>
        <Input
          name={'password'}
          type={'password'}
          onChange={handleInputChange}
          value={values['password']}
          placeholder={'비밀번호'}
        ></Input>
        <Input
          name={'nickname'}
          type={'text'}
          onChange={handleInputChange}
          value={values['nickname']}
          placeholder={'닉네임'}
        ></Input>
        <Button onClick={handleRegisterButtonClick}>회원가입</Button>
      </Form>
      계정이 없으신가요? <Link to={'/signUp'}>회원가입</Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: white;
  width: 40%;
  padding: 40px;
  border-radius: 8px;
`;

export default SignUp;
