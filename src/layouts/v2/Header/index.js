import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../../../assets';
import useDrawer from '../../../components/Drawer/useDrawer';
import { route } from '../../../routes/configs';
import './style.scss';

const ButtonConnectWallet = () => {
    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    };

    return (
        <div className="btn-conc g-5" onClick={() => openInNewTab('https://starksport.finance')}>
            {/* <div
                        className="header__item p-15"
                        onClick={() => }
                    >
                        <h4>Marketplace</h4>
                    </div>
            <ModalWallet isShowing={isShowing} hide={toggle} /> */}
            <div className="row g-5 a-center">
                <span className="btn-conc__title fw-7">Launch App</span>
                {/* <img className="btn-conc__icon" src={assets.svg.iconPower} alt="icon-power" /> */}
            </div>
        </div>
    );
};

const HeaderLayout = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [showMenuEarn, setShowMenuEarn] = useState(false);
    const { toggleDrawer, isDrawerShowing } = useDrawer();
    const menuRef = useRef(null);
    const menuEarn = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    function handleMenuHover() {
        setShowMenu(true);
    }

    function handleMenuLeave() {
        setShowMenu(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuEarn.current && !menuEarn.current.contains(event.target)) {
                setShowMenu(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuEarn]);

    function handleMenuEarnHover() {
        setShowMenuEarn(true);
    }

    function handleMenuEarnLeave() {
        setShowMenuEarn(false);
    }

    const navClick = (path) => {
        navigate(path);
    };

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    };

    return (
        <div
            className="header row a-center j-between"
            style={{
                paddingLeft: '120px',
                paddingRight: '120px',
            }}
        >
            <div className="row a-center g-15">
                <div
                    className="row g-10 a-center"
                    onClick={() => {
                        navClick(route.home);
                    }}
                >
                    <img src={assets.images.logo} alt="logo" style={{ height: '5rem', width: '5rem' }} />
                    <h2 className="header__title">STARKSPORT</h2>
                </div>

                {/* <div className="header__nav row ">
                    <div className="header__item p-15" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuLeave}>
                        <h4>Exchange</h4>

                        {showMenu && (
                            <div ref={menuRef} className="menu col">
                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.swap);
                                    }}
                                >
                                    Swap
                                </p>
                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick('liquidity');
                                    }}
                                >
                                    Liquidity
                                </p>
                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.faucet);
                                    }}
                                >
                                    Faucet
                                </p>
                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.liquidity2);
                                    }}
                                >
                                    Overview
                                </p>
                                <div
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.claimToken);
                                    }}
                                >
                                    <h4>Claim Testnet Token</h4>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="header__item p-15"
                        onClick={() => openInNewTab('https://marketplace.starksport.finance')}
                    >
                        <h4>Marketplace</h4>
                    </div>

                    <div
                        className="header__item p-15"
                        onClick={() => {
                            navClick(route.launchpad);
                        }}
                    >
                        <h4>Launchpads</h4>
                    </div>

                    <div
                        className="header__item p-15"
                        onMouseEnter={handleMenuEarnHover}
                        onMouseLeave={handleMenuEarnLeave}
                    >
                        <h4>Earning</h4>

                        {showMenuEarn && (
                            <div ref={menuRef} className="menu col">
                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.pools);
                                    }}
                                >
                                    Staking
                                </p>
                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.farms);
                                    }}
                                >
                                    Yield Farms
                                </p>

                                <p
                                    className="menu__item py-10 fw-7"
                                    onClick={() => {
                                        navClick(route.lending);
                                    }}
                                >
                                    Lending Network
                                </p>
                            </div>
                        )}
                    </div>

                    <div
                        className="header__item p-15"
                        onClick={() => {
                            navClick(route.airdrop);
                        }}
                    >
                        <h4>NFT Holder Reward</h4>
                    </div>

                    <div
                        className="header__item p-15"
                        onClick={() => {
                            navClick(route.info);
                        }}
                    >
                        <h4>Info</h4>
                    </div>

                    <div
                        className="header__item p-15"
                        onClick={() => {
                            openInNewTab('https://starksport.gitbook.io/staksport/');
                        }}
                    >
                        <h4>Documentation</h4>
                    </div>
                </div> */}
            </div>

            <div className="row g-20">
                <ButtonConnectWallet />
                {/* <Drawer isShowing={isDrawerShowing} hide={toggleDrawer} /> */}
                {/* <div className="menu-icon" onClick={toggleDrawer}>
                    <img src={assets.svg.iconMenu} alt="menu" style={{ height: 40, width: 40 }} />
                </div> */}
            </div>
        </div>
    );
};

export default HeaderLayout;
