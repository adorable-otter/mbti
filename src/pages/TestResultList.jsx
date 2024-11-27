import { useQuery } from '@tanstack/react-query';
import { getTestResults } from '../api/testResults';
import TestResultItem from '../components/TestResultItem';
import styled from 'styled-components';
import useAuthUserStore from '../stores/useAuthUserStore';

const TestResultList = () => {
  const { data: testResults } = useQuery({
    queryKey: ['testResults'],
    queryFn: getTestResults,
  });
  const authUser = useAuthUserStore((state) => state.authUser);

  return (
    <Wrap>
      {testResults
        ?.filter((result) => result.visible === true || result.userId === authUser.id)
        .map((result) => (
          <TestResultItem key={result.id} result={result} />
        ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 25px;
`;

export default TestResultList;
