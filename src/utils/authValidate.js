const EMAIL_RULE = /.*@.*/;
const PASSWORD_LENGTH = 8;

const authValidate = (values) => {
  const errors = {};

  // 이메일 유효성 검사
  if (values.email === '') errors.email = '이메일을 입력해주세요';
  else if (!EMAIL_RULE.test(values.email))
    errors.email = '올바르지 않은 이메일입니다.';

  // 비밀번호 유효성 검사
  if (values.password === '') errors.password = '비밀번호를 입력해주세요';
  else if (values.password.length < PASSWORD_LENGTH)
    errors.password = `비밀번호는 ${PASSWORD_LENGTH}자 이상이어야 합니다.`;

  return errors;
};

export default authValidate;
