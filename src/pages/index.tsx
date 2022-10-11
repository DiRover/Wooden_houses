import type { NextPage } from 'next';
import Header from '../../components/Header/Header';
import styles from '../../styles/Home.module.css';
import { navLinks } from '../services/service_data';

interface Props {
  navLinks: Array<string>
}

const Home: NextPage<Props> = (props) => {
  const {navLinks} = props;
  return (
    <div className={styles.container}>
      <Header links={navLinks} />
    </div>
  )
}

export async function getStaticProps() {
  return {
      props: {
        navLinks
      }
  }
}


export default Home
