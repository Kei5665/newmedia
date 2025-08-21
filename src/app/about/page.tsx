import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CeoMessage from '@/components/about/CeoMessage';
import BusinessOverview from '@/components/about/BusinessOverview';
import Achievements from '@/components/about/Achievements';
import OurInitiatives from '@/components/about/OurInitiatives';
import MediaCoverage from '@/components/about/MediaCoverage';
import BlogCTASection from '@/components/BlogCTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ライドジョブについて',
  description:
    'RIDE JOBのビジョン・ミッションを紹介するページです。新しい価値を創造し、社会を幸せに。',
};

export default function AboutPage() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <Header />
      <BusinessOverview />
      <CeoMessage />
      <Achievements />
      <OurInitiatives />
      <MediaCoverage />
      <BlogCTASection />
      <Footer />
    </div>
  );
}


