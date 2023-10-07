import { HeaderComponent } from './HeaderComponent';

export default function Backed() {
    return (
        <div className="linear-background flex flex-col gap-[30px] md:gap-[60px] md:mx-[60px] min-[1200px]:mx-[98px] min-[1200px]:max-w-[1244px] min-[1200px]:gap-20 min-[1200px]:rounded-3xl min-[1200px]:border-[0.5px] min-[1200px]:border-[#C6C6C6] min-[1200px]:px-[42px] min-[1200px]:py-20">
            <HeaderComponent title="BACKED" subTitle="Our Backers & Investors" />
            <BackedContent />
        </div>
    );
}

const BackedContent = () => {
    return (
        <>
            <div className="md:hidden">
                <BackedContentMobile />
            </div>
            <div className="hidden md:flex min-[1200px]:hidden">
                <BackedContentMd />
            </div>
            <div className="hidden min-[1200px]:flex">
                <BackedContentDesktop />
            </div>
        </>
    );
};

const BackedContentDesktop = () => {
    return (
        <div className="hidden min-[1200px]:flex items-start justify-center gap-[30px] flex-wrap max-w-[1200px]">
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
        </div>
    );
};

const BackedContentMd = () => {
    return (
        <div className="hidden md:flex min-[1200px]:hidden items-start justify-center gap-[30px] flex-wrap max-w-[648px]">
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
            <SponserCardMockup />
        </div>
    );
};

const BackedContentMobile = () => {
    return (
        <div className="inline-flex flex-col items-center gap-[20px] md:hidden">
            <div className="flex items-start justify-center gap-[20px] py-[6px] flex-wrap">
                <SponserCardMockup />
                <SponserCardMockup />
            </div>
            <div className="flex items-start justify-center gap-[20px] py-[6px] flex-wrap">
                <SponserCardMockup />
                <SponserCardMockup />
            </div>
            <div className="flex items-start justify-center gap-[20px] py-[6px] flex-wrap">
                <SponserCardMockup />
            </div>
        </div>
    );
};

const SponserCardMockup = () => {
    return (
        <div className="h-[80px] w-[165px] rounded-[16px] border-[0.5px] border-[#C6C6C6] bg-[#07051B] md:h-[100px] md:w-[196px]"></div>
    );
};
