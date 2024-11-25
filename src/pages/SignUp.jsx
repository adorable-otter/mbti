import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { Button, Form, Input, Title } from '../styles/authForm';

const SignUp = () => {
  const { values, handleInputChange } = useForm('signUp');

  return (
    <Wrap>
      <Title>회원가입</Title>
      <Form>
        <Input
          name={'username'}
          type={'text'}
          onChange={handleInputChange}
          value={values['username']}
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
        <Button>로그인</Button>
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
