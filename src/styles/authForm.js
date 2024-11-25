import styled from "styled-components";

export const Button = styled.button`
  background-color: crimson;
  color: white;
  width: 50%;
  padding: 5px;
  border: none;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid lightgray;
  width: 50%;
  height: 40px;
  padding-left: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f3f3;
  margin-bottom: 20px;
  border-radius: 8px;
`;