import Footer from "@/components/common/Footer";
import NavBar from "@/components/common/Navbar";
import AchievementSection from "@/components/sections/AchievementSection";
import CalendarSection from "@/components/sections/CalendarSection";
import ClientSection from "@/components/sections/ClientSection";
import CommunitySection from "@/components/sections/CommunitySection";
import CustomerSection from "@/components/sections/CustomerSection";
import DemoSection from "@/components/sections/DemoSection";
import HeroSection from "@/components/sections/HeroSection";
import UnlockSection from "@/components/sections/UnlockSection";
import { UpdatesSection } from "@/components/sections/UpdatesSection";

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
                <CalendarSection />
                <CustomerSection />
                <UpdatesSection />
                <DemoSection />
            </div>
            <Footer />
        </main>
    );
}
