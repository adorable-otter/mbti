import styled from 'styled-components';
import DescriptionCard from '../components/main/DescriptionCard';
import { contentMaxWidth } from '../styles/common';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Wrap>
      <Title>무료 성격 테스트</Title>
      <SubTitle>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</SubTitle>
      <DescriptionCards>
        <DescriptionCard title={'성격 유형 검사'} description={'자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.'}/>
        <DescriptionCard title={'성격 유형 이해'} description={'다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.'}/>
        <DescriptionCard title={'팀 평가'} description={'팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.'}/>
      </DescriptionCards>
      <Link to={'/test'}>
        <MoveButton>내 성격 알아보러 가기</MoveButton>
      </Link>
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
