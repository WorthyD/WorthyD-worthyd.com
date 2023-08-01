import MainLayout from '@/layouts';
import HomeComponent from '@/components/Home';
import SEO from '@/components/SEO';
import { Includes } from '@/components/Includes';

export default function Home() {
  return (
    <MainLayout>
      <div className="about-container">
        {/* <Helmet title={`Index | ${config.website.title}`} /> */}
        <HomeComponent></HomeComponent>
      </div>
    </MainLayout>
  );
}
export const Head = () => (
  <>
    <SEO />
    <Includes />
  </>
);
