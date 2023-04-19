import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayOut = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 10rem;
  width: 18rem;

  h1 {
    margin-bottom: 1rem;
  }
`;

const MainLayOut = ({ children }) => {
  return (
    <LayOut>
      <Container>{children}</Container>
    </LayOut>
  );
};

MainLayOut.propTypes = {
  children: PropTypes.node,
};

export default MainLayOut;
