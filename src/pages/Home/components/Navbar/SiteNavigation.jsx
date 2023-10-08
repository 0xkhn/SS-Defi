import Logo from './components/Logo';
import LaunchAppButton from './components/LaunchAppButton';
import MobileMenuButton from './components/MobileMenuButton';
import { useEffect, useRef, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { twMerge } from 'tailwind-merge';

export default function SiteNavigation(props) {
    return (
        <>
            <div className="hidden min-[1200px]:block">
                <DesktopSiteNavigation />
            </div>
            <div className="min-[1200px]:hidden">
                <MobileSiteNavigation />
            </div>
        </>
    );
}

const MobileSiteNavigation = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpen);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <div
            ref={wrapperRef}
            style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(30px)' }}
            className={twMerge(
                'fixed top-0 z-[9999] flex flex-col h-[88px] w-screen justify-between px-[20px] py-[20px] overlay-background md:px-[60px] md:py-[24px] md:h-[96px]',
                open && '!h-[235.56px] md:!h-[316.56px]',
            )}
        >
            <div className="flex w-full justify-between">
                <div className="flex items-center">
                    <Logo className="h-[30px] w-[141.388px] md:h-[48px] md:w-[212.082px]" />
                </div>
                <div className="flex items-center gap-[10px] md:gap-[30px]">
                    <LaunchAppButton styleButton="py-[12px] px-[24px] rounded-[16px] h-[48px] w-[135px]" />
                    <MobileMenuButton toggle={toggle} open={open} />
                </div>
            </div>
            <div
                className={twMerge('w-full flex-col hidden', open && 'flex')}
                style={{
                    maxHeight: 'calc(100vh - 5rem)',
                    overflowY: 'auto',
                }}
            >
                <div className="stroke-secondary flex flex-col gap-[10px] pt-[17px] md:gap-[30px] md:pt-[30px]">
                    <div className="flex flex-col gap-[10px] md:gap-[30px]">
                        <AnchorLink
                            className="text-[16px] font-['Roboto'] font-medium text-white text-right hover:text-[#24c3bc]"
                            href="#about"
                        >
                            About
                        </AnchorLink>
                        <AnchorLink
                            className="text-[16px] font-['Roboto'] font-medium text-white text-right hover:text-[#24c3bc]"
                            href="#features"
                        >
                            Features
                        </AnchorLink>
                        <AnchorLink
                            className="text-[16px] font-['Roboto'] font-medium text-white text-right hover:text-[#24c3bc]"
                            href="#ecosystem"
                        >
                            Ecosystem
                        </AnchorLink>
                        <AnchorLink
                            className="text-[16px] font-['Roboto'] font-medium text-white text-right hover:text-[#24c3bc]"
                            href="#partner"
                        >
                            Backers & Partners
                        </AnchorLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DesktopSiteNavigation = (props) => {
    return (
        <div
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className="fixed top-0 z-[1000] flex h-[96px] w-screen justify-between px-[120px] py-[24px] backdrop-blur-[30px]"
        >
            <div className="flex items-center">
                <Logo className="h-[48px] w-[212.082px]" />
            </div>
            <div className="hidden items-center text-[20px] font-bold md:flex md:gap-[5px] lg:gap-[20px]">
                <AnchorLink
                    href="#about"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">About</div>
                </AnchorLink>
                <AnchorLink
                    href="#features"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">Features</div>
                </AnchorLink>
                <AnchorLink
                    href="#ecosystem"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">Ecosystem</div>
                </AnchorLink>
                <AnchorLink
                    href="#partner"
                    className="button-navbar-hover flex w-fit cursor-pointer items-center font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white max-[815px]:hidden px-[20px] py-[12px]"
                >
                    <div className="text-white">Backers & Partners</div>
                </AnchorLink>
            </div>
            <div className="flex items-center gap-3">
                <LaunchAppButton styleButton="py-[12px] px-[24px] rounded-[16px] h-[48px] w-[175px]" />
            </div>
        </div>
    );
};

const useOutsideAlerter = (ref, setOpen) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};
