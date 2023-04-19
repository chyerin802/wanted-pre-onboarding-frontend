import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const colors = {
  main: '#4065F6',
  second: '#888888',
};

const colorStyles = css`
  ${({ color }) => {
    const selected = colors[color] ? colors[color] : color;
    return css`
      background: ${selected};
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
        `}
      ${({ letter }) =>
        letter &&
        css`
          color: ${selected};
          background: none;
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
    padding: '1.5rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
    padding: '0.8rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
    padding: '0.5rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    padding-left: ${sizes[size].padding};
    padding-right: ${sizes[size].padding};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const fullHeightStyle = css`
  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
    `}
`;

const disabledStyle = css`
  ${(props) =>
    props.disabled &&
    css`
      background: var(--light-color);
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;

  /* 크기 */
  ${sizeStyles}
  /* 색상 */ 
  ${colorStyles} 
  /* 기타 */
  ${fullWidthStyle} 
  ${fullHeightStyle} 
  
  ${disabledStyle};
`;

function Button({
  children,
  color,
  size,
  outline,
  fullWidth,
  fullHeight,
  letter,
  disabled,
  ...rest
}) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      letter={letter}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'main',
  size: 'small',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
  letter: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
