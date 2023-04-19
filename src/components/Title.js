import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  color: var(--main-color);
  font-size: 30px;
  font-weight: 700;
`;

/**
 * 제목 컴포넌트 생성
 */
const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
