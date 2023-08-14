import MainLayout from '@/layouts';
import SkillSets from '@/components/SkillSets';
import SEO from '@/components/SEO';
import { Includes } from '@/components/Includes';

export default function SkillSet() {
  return (
    <MainLayout>
      {/* <Helmet title={`Index | ${config.website.title}`} /> */}
      <SkillSets />
    </MainLayout>
  );
}
export const Head = () => (
  <>
    <SEO />
    <Includes />
  </>
);
