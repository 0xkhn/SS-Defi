import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';

export default function PartnerShip() {
    return (
        <div className="flex flex-col gap-[40px] md:mx-[60px] min-[1440px]:mx-[120px] min-[1440px]:max-w-[1200px] min-[1440px]:gap-[80px]">
            <HeaderComponent title="PARTNERSHIP" subTitle="Our Partners & Collabs" />
            <div className="min-[1440px]:hidden">
                <ParterContentMobile />
            </div>
            <div className="hidden min-[1440px]:flex">
                <PartnerContentDesktop />
            </div>
        </div>
    );
}

const partners = [
    icons.partners.HASHSTACK,
    icons.partners.GALXE,
    icons.partners.SITHSWAP,
    icons.partners.TRANTOR,
    icons.partners.CARMINE,
    icons.partners.MISES,
    icons.partners.LINKE,
    icons.partners.METABIT,
    icons.partners.TASKON,
    icons.partners.ZETACHAIN,
    icons.partners.OPSIDE,
    icons.partners.LAYERSWAP,
];

const ParterContentMobile = () => {
    return (
        <>
            <div className="inline-flex flex-col items-center px-[12px]">
                <div className="grid grid-cols-2 flex-wrap items-start justify-center gap-[20px] py-[6px] md:grid-cols-3 md:gap-6">
                    {partners.map((item, idx) => (
                        <SponserCardMockup key={idx} icon={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

const PartnerContentDesktop = () => {
    return (
        <div className="inline-flex max-w-[1200px] flex-wrap content-center items-center justify-center gap-[40px]">
            {partners.map((item, idx) => (
                <SponserCardMockup key={idx} icon={item} />
            ))}
        </div>
    );
};

const SponserCardMockup = ({ icon }) => {
    return (
        <div className="flex h-[80px] w-[165px] items-center justify-center rounded-2xl border-[0.5px] border-[#C6C6C6] bg-[#07051B] max-[350px]:w-[150px] md:h-[100px] md:w-[200px]">
            <img src={icon} alt="partner" className="w-[120px] h-[60px]" />
        </div>
    );
};
