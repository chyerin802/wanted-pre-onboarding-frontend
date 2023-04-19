import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Title from 'components/Title';
import isLogin from 'utils/isLogin';
import Button from 'components/Button';

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 1rem;
`;

const MainPage = () => {
  return (
    <div>
      <Title>Pre-Onboarding</Title>
      {isLogin() ? (
        <LinkWrapper>
          <Link to="/todo">
            <Button size="large">Todo</Button>
          </Link>
        </LinkWrapper>
      ) : (
        <LinkWrapper>
          <Link to="/signin">
            <Button size="large">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button size="large">Sign Up</Button>
          </Link>
        </LinkWrapper>
      )}
    </div>
  );
};

export default MainPage;
