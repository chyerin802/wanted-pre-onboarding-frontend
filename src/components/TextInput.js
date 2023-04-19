import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: var(--second-color);
    font-weight: 600;
  }

  > input {
    width: 100%
    gap: 0.375rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid var(--light-color);
    height: 100%;
    padding: 0.675rem 0.875rem;
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
