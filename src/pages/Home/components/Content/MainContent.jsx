import About from './components/About';
import Audit from './components/Audit';
import Backed from './components/Backed';
import Introduction from './components/BannerContent';
import Ecosystem from './components/Ecosystem';
import Feature from './components/Feature';
import OurRoadmap from './components/OurRoadmap';
import PartnerShip from './components/PartnerShip';

export default function MainContentHomepage() {
    return (
        <div className="mt-[70px] flex w-full md:mt-[96px]">
            <div className="flex w-full !flex-col items-center gap-[80px] min-[1440px]:gap-[120px] py-[60px] min-[1440px]:py-[120px]">
                <Introduction />
                <About />
                <Feature />
                <Ecosystem />
                <Audit />
                <OurRoadmap />
                {/* <Backed /> */}
                <PartnerShip />
            </div>
        </div>
    );
}
