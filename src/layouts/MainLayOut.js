import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayOut = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

const Container = styled.div`
  background: blue;
  padding: 50px;
`;

const MainLayOut = ({ children }) => {
  return (
    <LayOut>
      <Container>{children}</Container>
    </LayOut>
  );
};

MainLayOut.propTypes = {
  children: PropTypes.element,
};

export default MainLayOut;
