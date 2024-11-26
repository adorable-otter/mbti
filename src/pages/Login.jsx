import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { Button, Form, Input, Title } from '../styles/authForm';
import { login } from '../api/auth';
import { tokenStorage } from '../modules/tokenStorage';
import useAuthUserStore from '../stores/useAuthUserStore';

const Login = () => {
  const { values, handleInputChange } = useForm('login');
  const setAuthUser = useAuthUserStore((state) => state.setAuthUser);
  const navigatge = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const user = await login(values);
    tokenStorage.add(user.accessToken);
    setAuthUser(user);
    navigatge('/test');
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

export default Login;
