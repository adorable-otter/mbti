import styled from 'styled-components';

const DescriptionCard = () => {
  return (
    <Wrap>
      <Title>성격 유형 검사</Title>
      <p>자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.</p>
    </Wrap>
  );
};

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 2px;
  background-color: white;
`;

export default DescriptionCard;
