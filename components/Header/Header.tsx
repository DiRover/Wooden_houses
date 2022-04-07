import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import ROUTES from '../../src/routes';

interface Props {
  links: Array<string>;
}

const Container = styled.div`
  max-width: 1495px;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  border-bottom: var(--border-wieght) solid var(--border-color);
`;

const LogoLink = styled.a`
  display: inline-flex;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const TextLink = styled.a`
  align-self: center;
`;

const Header: FC<Props> = ({ links }): JSX.Element => {
  return (
    <Container>
      <StyledHeader>
        <Link href={ROUTES.HOME} passHref>
          <LogoLink>
            <Image
              src='/icons/logo.svg'
              alt='company logo'
              width={107}
              height={107}
            />
          </LogoLink>
        </Link>
        <Nav>
          {links.map((link) => {
            return <TextLink key={link}>{link}</TextLink>;
          })}
        </Nav>
      </StyledHeader>
    </Container>
  );
};

export default Header;
