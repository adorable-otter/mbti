import styled from 'styled-components';

const DescriptionCard = ({ title, description }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <p>{description}</p>
    </Wrap>
  );
};

const Title = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 2px;
  background-color: white;
`;

export default DescriptionCard;
