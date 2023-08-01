import Layout from '../layouts';
import Resume from '../components/Resume';
import SEO from '@/components/SEO';
import { Includes } from '@/components/Includes';

const ResumePage = () => {
  return (
    <Layout>
      <div className="about-container">
        {/* <Helmet title={`Resume | ${config.website.title}`} /> */}
        <Resume></Resume>
      </div>
    </Layout>
  );
};

export default ResumePage;

export const Head = () => (
  <>
    <SEO />
    <Includes />
  </>
);
