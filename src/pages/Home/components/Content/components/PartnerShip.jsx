import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';

export default function PartnerShip() {
    return (
        <div className="relative flex flex-col gap-[30px] md:gap-[40px] md:mx-[60px] min-[1200px]:mx-[120px] min-[1200px]:max-w-[1200px] min-[1200px]:gap-[80px]">
            <HeaderComponent title="PARTNERSHIP" subTitle="Our Partners & Collabs" />
            <div className="min-[1200px]:hidden">
                <ParterContentMobile />
            </div>
            <div className="hidden min-[1200px]:flex">
                <PartnerContentDesktopLagest />
            </div>
            <div id="partner" className="absolute top-[-140px]"></div>
        </div>
    );
}

const partnersFull = [
    {
        image: icons.partners.OKX,
        href: 'https://www.okx.com/',
    },
    {
        image: icons.partners.LAYERSWAP,
        href: 'https://www.layerswap.io/',
    },
    {
        image: icons.partners.ZETACHAIN,
        href: 'https://www.zetachain.com/',
    },
    {
        image: icons.partners.OPSIDE,
        href: 'https://opside.network/',
    },
    {
        image: icons.partners.TASKON,
        href: 'https://taskon.xyz/',
    },
    {
        image: icons.partners.DMAIL,
        href: 'https://dmail.ai/',
    },
    {
        image: icons.partners.DEFILAMA,
        href: 'https://defillama.com/',
    },
    {
        image: icons.partners.HASHSTACK,
        href: 'https://hashstack.finance/',
    },
    {
        image: icons.partners.GALXE,
        href: 'https://galxe.com/',
    },
    {
        image: icons.partners.SITHSWAP,
        href: 'https://sithswap.com/',
    },
    {
        image: icons.partners.TRANTOR,
        href: 'https://trantor.xyz/',
    },
    {
        image: icons.partners.CARMINE,
        href: 'https://carmine.finance/',
    },
    {
        image: icons.partners.MISES,
        href: 'https://www.mises.site/',
    },
    {
        image: icons.partners.LINKE,
        href: 'https://link3.to/',
    },
    {
        image: icons.partners.METABIT,
        href: 'http://metabitglobal.com/',
    },
    {
        image: icons.partners.BLOCKLIT,
        href: 'https://block-lit.com/',
    },
    {
        image: icons.partners.KLEINLABS,
        href: 'https://twitter.com/kleinlabsxyz',
    },
    {
        image: icons.partners.WEB3NOVA,
        href: 'https://twitter.com/theweb3nova',
    },
    {
        image: icons.partners.OXGEN,
        href: 'https://twitter.com/0xgen_io',
    },
];

const ParterContentMobile = () => {
    return (
        <>
            <div className="inline-flex flex-col items-center px-[20px]">
                <div className="flex flex-wrap items-start justify-center gap-[20px] py-[6px] md:gap-[30px]">
                    {partnersFull.map((item, idx) => (
                        <SponserCardMockup key={idx} icon={item.image} href={item.href} />
                    ))}
                </div>
            </div>
        </>
    );
};

const PartnerContentDesktopLagest = () => {
    return (
        <div className="inline-flex max-w-[1200px] flex-wrap content-center items-center justify-center gap-[40px]">
            {partnersFull.map((item, idx) => (
                <SponserCardMockup key={idx} icon={item.image} href={item.href} />
            ))}
        </div>
    );
};

const SponserCardMockup = ({ icon, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="partner-card flex h-[80px] w-[160px] items-center justify-center rounded-[16px] border-[0.5px] border-[#C6C6C6] bg-[#07051B] max-[350px]:w-[150px] md:h-[100px] md:w-[200px]"
        >
            <img src={icon} alt="partner" className="w-[120px] h-[60px] md:w-[160px] md:h-[80px]" />
        </a>
    );
};
