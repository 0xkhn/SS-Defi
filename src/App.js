import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './layouts/v2/Header';
import { publicRoutes } from './routes';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import React, { useState, useEffect } from 'react';
import FooterLayout from './layouts/v2/Footer';
import Footer from './layouts/Footer';
import { useEagerConnect } from './evm/hooks/useEagerConnect';
import { useInactiveListener } from './evm/hooks/useInactiveListener';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';
import actions from './redux/action';
import SiteNavigation from './pages/Home/components/Navbar/SiteNavigation';
import HomepageFooter from './pages/Home/components/Footer/Footer';
import icons from './assets/icons';
import { useLocationPath } from './hooks/useLocationPath';

function getLibrary(provider) {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}

// Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

const App = () => {
    console.clear();
    const currentPath = useLocationPath();
    const dispatch = useDispatch();

    const isEvm = useSelector((state) => state.isEvm);

    useEffect(() => {
        const isEvm = String(localStorage.getItem('isEvm')).toLowerCase() === 'true';
        dispatch(actions.setIsEvm(isEvm));
    }, []);

    const { connector } = useWeb3React();

    const [activatingConnector, setActivatingConnector] = useState();
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);
    const triedEager = useEagerConnect();
    useInactiveListener(!triedEager || !!activatingConnector);

    // const size = useWindowSize();
    const connectors = [
        new InjectedConnector({ options: { id: 'braavos' } }),
        new InjectedConnector({ options: { id: 'argentX' } }),
    ];

    return (
        <StarknetConfig connectors={connectors}>
            <div
                style={
                    currentPath === '/'
                        ? {
                              background: `url(${icons.BG_OFFICIAL})`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              backgroundAttachment: 'fixed',
                          }
                        : { backgroundImage: "url('../src/assets/image/bg-home.png')", backgroundSize: '100% 100%' }
                }
            >
                {currentPath === '/' ? <SiteNavigation /> : <HeaderLayout />}

                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.element;
                        return <Route key={index} path={route.path} element={<Page />}></Route>;
                    })}
                </Routes>
                {currentPath === '/' ? (
                    <HomepageFooter />
                ) : (
                    <div style={{ position: 'relative' }}>
                        <div className="overlay-footer"></div>
                        <div className="wrapper-footer">
                            <Footer />
                            <FooterLayout />
                        </div>
                    </div>
                )}
            </div>
        </StarknetConfig>
    );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Router>
                <App />
            </Router>
        </Web3ReactProvider>
    );
}
