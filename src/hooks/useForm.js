import { useCallback, useEffect, useState } from 'react';

/**
 * form에 대한 입력값, 에러 등의 처리를 하는 커스텀 훅
 * @param {Object} param - 초기 입력값, 유효성 검사 함수, 제출 시 실행할 함수
 * @param {Object} param.initialValues - 초기 입력값
 * @param {Function} param.validate - 입력값에 대한 유효성 검사 함수
 * @param {Function} param.onSubmit - form 제출 시 실행할 함수
 * @returns {Object} 입력값, 에러, 방문 여부, 입력값 핸들링 함수, 제출 핸들링 함수
 */
const useForm = ({ initialValues, validate, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // 입력값의 변화를 다루는 핸들링 함수
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // 현재 target에 방문했다고 표시한다.
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 모든 필드에 방문했다고 표시
    setTouched(
      Object.keys(values).reduce((touched, field) => {
        touched[field] = true;
        return touched;
      }, {})
    );

    // 현재 value 에 대해 유효성 검사를 한 결과 저장
    const errors = validate(values);

    // 아무런 에러가 존재하지 않는다면
    if (Object.keys(errors).length === 0) onSubmit(values);
    else setErrors({ ...errors });
  };

  const validator = useCallback(() => validate(values), [values, validate]);

  useEffect(() => {
    // 현재 value 에 대해 유효성 검사를 한 결과 저장
    const errors = validator();

    // 아무런 에러가 존재하지 않는다면
    if (Object.keys(errors).length === 0) setErrors({});
    else setErrors({ ...errors });
  }, [validator]);

  return {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
