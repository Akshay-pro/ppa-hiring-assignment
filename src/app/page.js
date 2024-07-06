import NavBar from "@/components/common/Navbar";
import AchievementSection from "@/components/sections/AchievementSection";
import ClientSection from "@/components/sections/ClientSection";
import CommunitySection from "@/components/sections/CommunitySection";
import HeroSection from "@/components/sections/HeroSection";
import UnlockSection from "@/components/sections/UnlockSection";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div>
          <HeroSection />
          <ClientSection />
          <CommunitySection />
          <UnlockSection />
          <AchievementSection />
      </div>
    </main>
  );
}
