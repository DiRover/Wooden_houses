import {FC, memo} from 'react';
import Image from 'next/image';
import {telephone} from '../../src/services/service_data';
import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
`;

const Telephone: FC = memo((): JSX.Element => {
    return (
        <Container>
            <Image src="/icons/Vector.svg" width={20} height={20} alt="telephone" />
            <Typography alignSelf="center" ml={1}>
                {telephone}
            </Typography>
        </Container>
    );
});

export default Telephone;
