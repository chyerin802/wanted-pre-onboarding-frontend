import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBox = styled.div`
  > label {
    color: rgb(136, 136, 136);
    font-weight: 600;
  }

  > input {
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid rgb(225, 226, 227);
    gap: 0.375rem;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  + .input__error-msg {
    color: #fe415c;
    font-size: 0.875rem;
  }
`;

const TextInput = ({ children }) => {
  return <InputBox>{children}</InputBox>;
};

TextInput.propTypes = {
  children: PropTypes.node,
};

export default TextInput;
