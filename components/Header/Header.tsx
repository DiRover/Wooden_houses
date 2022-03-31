import styled from '@emotion/styled';
import { FC } from 'react';

const Container = styled.div`
  border: 1px solid black;
`;

const Header: FC = ({ children }): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Header;
