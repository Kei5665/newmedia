import type { Metadata } from 'next';
import Script from 'next/script';
import { LP_CSS, LP_HTML, LP_JS } from './content';

const OG_IMAGE = '/media/entry/gulliver/newgraduate/assets/hero-car.jpg';

export const metadata: Metadata = {
  title: '2027年新卒｜鈑金塗装職（BP職）募集｜Gulliver（株式会社IDOM）｜RIDE JOB',
  description:
    '未経験から、プロの板金塗装技術者へ。プライム上場「Gulliver」の2027年新卒採用。月給24万円（固定残業代含む・超過分別途支給）・賞与年2回・年間休日120日・ほぼ全員が2年目で月給28万円超。まずは会社説明会へ。',
  robots: { index: false, follow: true },
  openGraph: {
    title: '好きな仕事で、未来を描け。｜2027新卒 鈑金塗装職｜Gulliver',
    description:
      '未経験からプロの技術者へ。プライム上場Gulliverの2027新卒。月給24万円（固定残業代含む・超過分別途支給）・賞与年2回・ほぼ全員が2年目で月給28万円超。会社説明会 受付中！',
    images: [OG_IMAGE],
    type: 'website',
  },
};

export default function GulliverNewGraduateLP() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LP_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: LP_HTML }} />
      <Script id="bp-lp-script" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: LP_JS }} />
    </>
  );
}
