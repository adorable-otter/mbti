import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { Button, Form, Input, Title } from '../styles/authForm';
import useAuth from '../hooks/useAuth';
import { requestLogin } from '../api/auth';

const Login = () => {
  const { values, handleInputChange } = useForm('login');
  const { login } = useAuth();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const user = await requestLogin(values);
    login(user);
  };

  return (
    <Wrap>
      <Title>로그인</Title>
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
        <Button onClick={handleLoginClick}>로그인</Button>
      </Form>
      계정이 없으신가요? <Link to={'/sign-up'}>회원가입</Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: white;
  width: 40%;
  padding: 40px;
  border-radius: 8px;
`;

export default Login;
