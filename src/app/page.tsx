import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewHeroSection from "@/components/NewHeroSection";
import NewsSection2 from "@/components/NewsSection2";
import CompanyInterviewSection from "@/components/CompanyInterviewSection";
import CategorySection from "@/components/CategorySection";
import JobSection from "@/components/JobSection";
import InterviewSection4 from "@/components/InterviewSection4";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <Breadcrumbs />
      <NewHeroSection />
      <CompanyInterviewSection />
      <CategorySection />
      <JobSection />
      <InterviewSection4 />
      <Footer />
    </div>
  );
}
