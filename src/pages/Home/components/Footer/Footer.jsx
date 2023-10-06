import icons from '../../../../assets/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HomepageFooter = () => {
    return (
        <>
            <div className="min-[1440px]:hidden">
                <HomepageFooterMobile />
            </div>
            <div className="hidden min-[1440px]:flex">
                <HomepageFooterDesktop />
            </div>
        </>
    );
};

const HomepageFooterMobile = (props) => {
    return (
        <div
            style={{ background: 'rgba(28, 26, 45, 0.6)' }}
            className="fix bottom-0 w-screen items-center border-t-[0.5px] border-[#C6C6C6]"
        >
            <div className="flex flex-col gap-[30px] px-[20px] py-[80px] md:mx-[60px] min-[1440px]:mx-[98px] min-[1440px]:flex-row min-[1440px]:justify-between">
                <div className="flex flex-col">
                    <FooterHeading />
                </div>
                <div className="md:hidden">
                    <FooterBar />
                </div>
                <div className="flex justify-center md:!hidden">
                    <SocialCard />
                </div>
                <div className="hidden md:flex justify-between">
                    <FooterBarLeft />
                    <FooterBarRight />
                    <div className="flex flex-col gap-[10px] justify-center">
                        <div className="whitespace-nowrap font-['Roboto'] text-[16px] font-bold text-white">
                            Community
                        </div>
                        <SocialCard />
                    </div>
                </div>
                <FooterPolicy />
            </div>
        </div>
    );
};

const HomepageFooterDesktop = () => {
    return (
        <div
            style={{ background: 'rgba(28, 26, 45, 0.6)' }}
            className="fix bottom-0 w-screen items-center border-t-[0.5px] border-[#C6C6C6]"
        >
            <div className="flex flex-col gap-[30px] mx-[20px] py-[80px] md:mx-[60px] min-[1440px]:mx-[120px] min-[1440px]:flex-row min-[1440px]:justify-between">
                <div className="flex flex-col">
                    <FooterHeading />
                    <div className="min-[1440px]:flex">
                        <FooterPolicy />
                    </div>
                </div>
                <div className="flex gap-[60px]">
                    <FooterBarLeft />
                    <FooterBarRight />
                    <div className="flex flex-col gap-[10px] justify-center">
                        <div className="whitespace-nowrap font-['Roboto'] text-[16px] font-bold text-white">
                            Community
                        </div>
                        <SocialCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterBar = () => {
    return (
        <div className="flex justify-center items-center content-center gap-[60px] flex-wrap">
            <FooterBarLeft />
            <FooterBarRight />
        </div>
    );
};

const FooterBarLeft = () => {
    const itemListLeft = [
        {
            title: 'About',
            href: '#about',
        },
        {
            title: 'Features',
            href: '#features',
        },
    ];
    return (
        <div className="flex flex-col justify-center items-start gap-[20px] md:gap-[10px] min-[1440px]:gap-[16px]">
            {itemListLeft.map((item, idx) => (
                <AnchorLink
                    href={item.href}
                    key={idx}
                    className="button-navbar-hover whitespace-nowrap font-['Roboto'] text-[16px] font-bold text-white py-[12px] px-[20px] rounded-[16px]"
                >
                    <div className="text-white">{item.title}</div>
                </AnchorLink>
            ))}
        </div>
    );
};

const FooterBarRight = () => {
    const itemListRight = [
        {
            title: 'Ecosystem',
            href: '#ecosystem',
        },
        {
            title: 'Backers & Partners',
            href: '#backed',
        },
    ];
    return (
        <div className="flex flex-col justify-center items-start gap-[20px] md:gap-[10px] min-[1440px]:gap-[16px]">
            {itemListRight.map((item, idx) => (
                <AnchorLink
                    href={item.href}
                    key={idx}
                    className="button-navbar-hover whitespace-nowrap font-['Roboto'] text-[16px] font-bold text-white py-[12px] px-[20px] rounded-[16px]"
                >
                    <div className="text-white">{item.title}</div>
                </AnchorLink>
            ))}
        </div>
    );
};

const FooterHeading = (props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-[12px] md:!items-start">
            <a href="/">
                <img src={icons.offical_logo} alt="logo" className="h-[48px] w-[212.082px]" />
            </a>
            <div className="font-['Roboto'] text-[16px] font-normal leading-normal text-[#C6C6C6]">
                support@starksport.finance
            </div>
        </div>
    );
};

const FooterPolicy = () => {
    return (
        <div className="font-['Roboto'] text-[16px] font-normal leading-normal text-[#C6C6C6] text-center">
            2023 © Copyright STARKSPORT. All Rights Reserved
        </div>
    );
};

const SocialCard = () => {
    const LogoSocialItem = [
        {
            id: 'telegram',
            icon: icons.homepage.telegramFooter,
            link: 'https://t.me/starksportchanel',
        },
        {
            id: 'discord',
            icon: icons.homepage.discordFooter,
            link: 'https://discord.gg/starksport',
        },
        {
            id: 'twitter',
            icon: icons.homepage.twitterFooter,
            link: 'https://twitter.com/starkfinance',
        },
        {
            id: 'medium',
            icon: icons.homepage.mediumFooter,
            link: 'https://medium.com/@starksport',
        },
        {
            id: 'github',
            icon: icons.homepage.githubIcon,
            link: 'https://github.com/starksport-project',
        },
    ];

    return (
        <div className="inline-flex items-start justify-center gap-3">
            {LogoSocialItem.map((item) => (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                    style={{ background: 'rgba(255, 255, 255, 0.20)' }}
                    className="social-button-hover flex h-[36px] w-[36px] rounded-[16px] p-[4px] min-[375px]:h-[56px] min-[375px]:w-[56px] min-[375px]:p-[16px] md:h-[56px] md:w-[56px]"
                >
                    <img src={item.icon} alt={item.id} />
                </a>
            ))}
        </div>
    );
};

export default HomepageFooter;
