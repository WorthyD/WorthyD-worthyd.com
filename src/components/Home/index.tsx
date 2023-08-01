import { JSX } from 'react';
import HomeBody from './HomeBody';
import HomeHeader from './HomeHead';

const Home = (): JSX.Element => (
  <div className="home-component">
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
  </div>
);
export default Home;
