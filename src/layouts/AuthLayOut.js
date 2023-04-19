import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from 'components/Title';

const AuthContainer = styled.div`
  form {
    margin: 1rem 0 0.5rem 0;
    > button {
      margin-top: 2rem;
    }
  }

  .auth-link {
    display: flex;
    justify-content: center;

    button {
    }
  }
`;

const AuthLayOut = ({ title, children }) => {
  return (
    <AuthContainer>
      <Title>{title}</Title>
      {children}
    </AuthContainer>
  );
};

AuthLayOut.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default AuthLayOut;
