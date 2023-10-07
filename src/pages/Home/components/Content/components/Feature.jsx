import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';

export default function Feature() {
    return (
        <div className="relative flex flex-col gap-[30px] md:mx-[98px] min-[1200px]:gap-[80px]">
            <HeaderComponent title="FEATURES" subTitle="OUR FEATURES" />
            <FeatureCard />
            <div id="features" className="absolute top-[-200px]"></div>
        </div>
    );
}

const FeatureCard = () => {
    const featureCardItems = [
        {
            icon: icons.homepage.kyc2,
            title: 'Public / Private Sale',
            subtitle: 'Commit your funds to get IDO tokens from projects',
        },
        {
            icon: icons.homepage.kyc3,
            title: 'Airdrop',
            subtitle: 'Claim your airdrop allocations from projects',
        },
        {
            icon: icons.homepage.kyc4,
            title: 'Locking',
            subtitle: 'Support token vesting schedule in token sales',
        },
        {
            icon: icons.homepage.kyc1,
            title: 'KYC Project',
            subtitle: 'Take the safety of our investors very seriously',
        },
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-[30px] min-[1200px]:grid min-[1200px]:grid-cols-2 min-[1200px]:max-w-[1200px] min-[1200px]:gap-[40px] min-[1440px]:grid min-[1440px]:grid-cols-4">
            {featureCardItems.map((item, idx) => (
                <div
                    className="relative flex h-[345px] w-[350px] items-end md:max-w-[309px] min-[1200px]:max-w-[270px]"
                    key={idx}
                >
                    <div className="card-hover relative flex justify-center">
                        <img
                            src={icons.homepage.featureCard}
                            alt="banner"
                            className="rounded-[24px] md:rounded-[16px]"
                        />
                        <div className="absolute bottom-[80px] flex h-[230px] w-[318px] flex-col items-center justify-center gap-[36px]">
                            <div className="test h-[180px] w-[180px]">
                                <img src={item.icon} alt="banner" />
                            </div>
                            <div className="inline-flex flex-col items-center gap-[12px]">
                                <div className="text-center font-['Roboto'] text-[16px] font-bold text-white md:text-[20px]">
                                    {item.title}
                                </div>
                                <div className="text-center font-['Roboto'] text-[14px] font-normal text-[#C6C6C6] md:max-w-[268px] md:text-[16px] min-[1200px]:px-[20px]">
                                    {item.subtitle}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
