import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import {FC, memo} from 'react';
import ROUTES from '../../src/routes';
import Telephone from './Telephone';
import CustomMenu from './CustomMenu';

interface Props {
    links: Array<string>;
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    justify-content: space-between;
    width: 700px;
`;

const TextLink = styled.a`
    align-self: center;
`;

const Header: FC<Props> = memo((): JSX.Element => {
    return (
        <StyledHeader>
            <Link href={ROUTES.HOME} passHref>
                <LogoLink>
                    <Image src="/icons/logo.svg" alt="company logo" width={107} height={107} />
                </LogoLink>
            </Link>
            <Nav>
                <TextLink>Главная</TextLink>
                <CustomMenu text="Продукция" />
                <TextLink>Строительство</TextLink>
                <TextLink>Проектирование</TextLink>
                <TextLink>Галерея</TextLink>
            </Nav>

            <Telephone />
        </StyledHeader>
    );
});

export default Header;
