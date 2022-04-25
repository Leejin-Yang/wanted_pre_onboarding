import styled from 'styled-components';
import { COLOR } from '../../constants/style';

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
    color: ${COLOR.TEXT_SECONDARY};
  }

  & > input {
    width: 360px;
    padding: 0.8rem;
    font-size: 1rem;
    background-color: ${COLOR.BACKGROUND_SECONDARY};
    border: 1px solid ${COLOR.BORDER};
    border-radius: 3px;

    &::placeholder {
      color: ${COLOR.TEXT_DISABLE};
    }
  }
`;

const ValidMsg = styled.span`
  color: ${COLOR.POINT_RED};
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
