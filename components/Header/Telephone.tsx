import { FC } from "react";
import { makeStyles } from '@mui/styles';
// import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { telephone } from "../../src/services/service_data";
import Typography from "@mui/material/Typography";

import styled from "@emotion/styled";
const Container = styled.div`
display: flex;
`;


const useStyles = makeStyles(() => ({
    root:
    {
        '& .MuiTypography-root': {
            color: 'red',
            fontWeight: '2rem',
        },
        color: 'red',
    },
}));

const Telephone: FC = (): JSX.Element => {
    const classes = useStyles();
    return (
        <Container>
            <Image src="/icons/Vector.svg" width={20} height={20} alt="telephone" />
            <Typography alignSelf="center" ml={1} classes={classes.root} className={classes.root}>
                {telephone}
            </Typography>
        </Container>
    );
};

export default Telephone;