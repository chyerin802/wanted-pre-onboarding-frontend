import styled from 'styled-components';

const ErrorText = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ErrorPage = () => {
  return <ErrorText>존재하지 않는 페이지 입니다.</ErrorText>;
};

export default ErrorPage;
