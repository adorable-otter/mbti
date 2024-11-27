import styled from 'styled-components';
import useAuth from '../hooks/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTestResult, updateTestResultVisibility } from '../api/testResults';
import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { formatDateTime } from '../utils/dateFormator';

const TestResultItem = ({ result }) => {
  const { authUser } = useAuth();
  const queryClient = useQueryClient();
  const mutationForDelete = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(['testResults']);
    },
    onError: (err) => {},
  });
  const mutationForUpdate = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(['testResults']);
    },
    onError: (err) => {},
  });
  const { userId, nickname, testResult, createAt, visible, id } = result;

  const handleVisibilityButtonClick = () => {
    console.log('🚀 ~ handleVisibilityButtonClick ~ id, !visible:', id, !visible);
    mutationForUpdate.mutate({ id, visible: !visible });
  };

  const isOwner = userId === authUser.id;

  const toggleVisibilityButton = () => {
    if (visible) {
      return <button onClick={handleVisibilityButtonClick}>비공개로 전환</button>;
    }
    return <button onClick={handleVisibilityButtonClick}>공개로 전환</button>;
  };

  const handleDeleteButtonClick = () => {
    mutationForDelete.mutate(id);
  };

  return (
    <Wrap>
      <Header>
        <Nickname>{nickname}</Nickname>
        <p>{formatDateTime(new Date(createAt))}</p>
      </Header>
      <hr />
      <Content>
        <Type>{testResult}</Type>
        <Description>{mbtiDescriptions[testResult]}</Description>
      </Content>
      {isOwner && (
        <Actions>
          {toggleVisibilityButton()}
          <DeleteButton onClick={handleDeleteButtonClick}>삭제</DeleteButton>
        </Actions>
      )}
    </Wrap>
  );
};

const Nickname = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Description = styled.p`
  line-height: 150%;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  width: 50%;
  background-color: rgb(31 41 55);
  color: #d1d5db;
  border-radius: 8px;
`;

const Actions = styled.div`
  margin-left: auto;
`;

const Type = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color: rgb(250, 204, 21);
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default TestResultItem;
