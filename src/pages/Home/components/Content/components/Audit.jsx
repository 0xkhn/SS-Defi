import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';

export default function Audit() {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-[60px] overflow-hidden bg-[#07051B] py-[40px] md:py-[60px] md:pb-[100px] min-[1440px]:gap-[80px] min-[1440px]:pb-[236px] min-[1440px]:pt-[120px]">
            <HeaderComponent title="AUDIT" subTitle="Audited By" />
            <AuditContent />
        </div>
    );
}

const AuditContent = () => {
    return (
        <div className="relative flex h-[100px] items-center px-[24px]">
            <div className="absolute left-[-50px] md:left-[-100px] min-[1440px]:left-[-120px]">
                <img
                    src={icons.ECLIP_SHADOW}
                    alt="certik logo"
                    className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]"
                />
            </div>
            <div className="absolute left-0 md:left-[-60px] min-[1440px]:left-[-80px]">
                <img
                    src={icons.CERTIK_LOGO}
                    alt="certik logo"
                    className="w-[91.169px] h-[100px] md:w-[182.339px] md:h-[200px] min-[1440px]:h-[300px] min-[1440px]:w-[273.508px]"
                />
            </div>
            <div className="absolute right-[-50px] md:right-[-100px] min-[1440px]:right-[-120px]">
                <img
                    src={icons.ECLIP_SHADOW}
                    alt="certik logo"
                    className="h-[200px] w-[200px] md:h-[400px] md:w-[400px]"
                />
            </div>
            <div className="absolute right-0 md:right-[-60px] min-[1440px]:right-[-80px]">
                <img
                    src={icons.STARKGUARDIAN_LOGO}
                    alt="starkguardian logo"
                    className="w-[91.169px] h-[100px] md:w-[182.339px] md:h-[200px] min-[1440px]:h-[300px] min-[1440px]:w-[273.508px]"
                />
            </div>
            <div className="inline-flex items-center justify-center gap-[24px] md:gap-[60px] min-[1440px]:gap-[153px]">
                <img src={icons.homepage.audit1} alt="audit 1" className="md:w-[240px] min-[1440px]:w-[300px]" />
                <div className="h-[24px] border-[1px] border-[#24C3BC] md:h-[57px]"></div>
                <img src={icons.homepage.audit2} alt="audit 2" className="md:w-[240px] min-[1440px]:w-[300px]" />
            </div>
        </div>
    );
};
