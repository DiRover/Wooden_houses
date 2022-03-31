import styled from '@emotion/styled';
import { FC, memo } from 'react';

const Container = styled.div`
  border: 1px solid black;
`;

const StyledHeader = styled.header``;

const Header: FC = memo((): JSX.Element => {
  return (
    <Container>
      <StyledHeader>Hello</StyledHeader>
    </Container>
  );
});

export default Header;
