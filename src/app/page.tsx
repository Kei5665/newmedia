import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import NewTopHeroSection from "@/components/NewTopHeroSection";
import CompanyInterviewSection from "@/components/CompanyInterviewSection";
import NewCategorySection from "@/components/NewCategorySection";
import NewJobSection from "@/components/NewJobSection";
import NewInterviewSection from "@/components/NewInterviewSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <Breadcrumbs />
      <NewTopHeroSection />
      <CompanyInterviewSection />
      <NewCategorySection />
      <NewJobSection />
      <NewInterviewSection />
      <Footer />
    </div>
  );
}
