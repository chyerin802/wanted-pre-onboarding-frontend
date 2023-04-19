import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgb(225, 226, 227);
  gap: 0.375rem;
  padding: 0.625rem 0.875rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const TextInput = ({ ...attr }) => {
  return <StyledInput {...attr}></StyledInput>;
};

TextInput.propTypes = {
  type: PropTypes.string,
};

export default TextInput;
