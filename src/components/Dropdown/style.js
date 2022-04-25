import styled from 'styled-components';
import { COLOR } from '../../constants/style';

const Container = styled.div`
  width: 300px;
  position: relative;
`;

const SelectedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.6rem;
  border: 1px solid ${COLOR.BORDER};
  border-radius: 3px;
  cursor: pointer;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const MenuWrapper = styled.div`
  width: 100%;
  height: 360px;
  margin-top: 1rem;
  border: 1px solid ${COLOR.BORDER};
  border-radius: 3px;
  position: relative;
  padding: 3px 0;
`;

const SearchForm = styled.div`
  position: relative;
  display: flex;
  alig-items: center;
  height: 15%;
  border: none;
  border-bottom: 1px solid ${COLOR.BORDER};

  & > input {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: none;
    padding-right: 0.6rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${COLOR.TEXT_DISABLE};
    }
  }
`;

const SearchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  font-size: 1.1rem;
  cursor: default;
`;

const MenuList = styled.ul`
  max-height: 85%;
  list-style: none;
  padding: 0.3rem 2rem;
  overflow-y: auto;
  cursor: pointer;

  & > li {
    padding: 0.3rem 0;
  }
`;

const NoResultMsg = styled.span`
  display: block;
  margin-top: 1rem;
  cursor: default;
`;

export {
  Container,
  SelectedWrapper,
  MenuWrapper,
  SearchForm,
  SearchIcon,
  MenuList,
  NoResultMsg,
};
