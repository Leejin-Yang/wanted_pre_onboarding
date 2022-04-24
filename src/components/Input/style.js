import styled from 'styled-components';

const Container = styled.div`
  margin-top: 50px;
  position: relative;

  & > div:first-of-type {
    margin-bottom: 1.2rem;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > label {
    font-size: 0.8rem;
    padding-left: 4px;
    margin-bottom: 4px;
    color: #868e96;
  }

  & > input {
    width: 360px;
    padding: 0.8rem;
    font-size: 1.1rem;
    background-color: #f8f9fa;
    border: 1px solid #ced4da;
    border-radius: 3px;
    color: #495057;

    &::placeholder {
      color: #ced4da;
    }
  }
`;

const ValidMsg = styled.span`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 4px;
`;

const ValidIcon = styled.span`
  position: absolute;
  left: 90%;
  top: 28px;
  font-size: 1.4rem;
  cursor: default;
`;

const ViewButton = styled.button`
  position: absolute;
  left: 90%;
  top: 28px;
  font-size: 1.4rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export { Container, FormWrapper, ValidMsg, ValidIcon, ViewButton };
