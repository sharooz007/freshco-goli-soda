import { AnimatedHero } from "@/components/home/AnimatedHero";
import { MetricsBanner } from "@/components/home/MetricsBanner";
import { ProductUniverse } from "@/components/home/ProductUniverse";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { FactoryProcess } from "@/components/home/FactoryProcess";
import { LeadCaptureSection } from "@/components/home/LeadCaptureSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AnimatedHero />
      <MetricsBanner />
      <ProductUniverse />
      <RoiCalculator />
      <FactoryProcess />
      <LeadCaptureSection />
    </div>
  );
}
