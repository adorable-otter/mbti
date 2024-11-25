import styled from 'styled-components';
import DescriptionCard from '../components/main/DescriptionCard';
import { contentMaxWidth } from '../styles/common';

const Home = () => {
  return (
    <Wrap>
      <Title>무료 성격 테스트</Title>
      <SubTitle>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</SubTitle>
      <DescriptionCards>
        <DescriptionCard />
        <DescriptionCard />
        <DescriptionCard />
      </DescriptionCards>
      <MoveButton>내 성격 알아보러 가기</MoveButton>
    </Wrap>
  );
};

const MoveButton = styled.button`
  background-color: crimson;
  color: white;
  width: 200px;
  border: none;
  border-radius: 8px;
  padding: 10px;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 30px;
`;

const DescriptionCards = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${contentMaxWidth};
`;

export default Home;
