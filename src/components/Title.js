import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  color: rgb(64,101,246);
  font-size: 30px
  font-weight: 600;
`;

/**
 * 제목 컴포넌트 생성
 */
const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.element,
};

export default Title;
