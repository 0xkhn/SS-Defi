import icons from '../../../../../assets/icons';

export default function LaunchAppModal({ styleModal, styleTitle }) {
    return (
        <div className="flex items-start w-[175px] p-[10px] bg-[#1C1A2D] rounded-[20px] border-[0.5px] border-[#C6C6C6]">
            <div className="flex flex-col items-start">
                <a
                    href="https://exchange.starksport.finance/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex p-[12px] items-start gap-[12px]"
                >
                    <img src={icons.EXCHANGE} alt="ecosystem icon" className="h-[24px] w-[24px]" />
                    <div className='text-[16px] text-white font-["Roboto"] font-bold hover:text-[#24c3bc]'>
                        Exchange
                    </div>
                </a>
                <a
                    href="https://marketplace.starksport.finance/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex p-[12px] items-start gap-[12px]"
                >
                    <img src={icons.MARKETPLACE} alt="ecosystem icon" className="h-[24px] w-[24px]" />
                    <div className='text-[16px] text-white font-["Roboto"] font-bold hover:text-[#24c3bc]'>
                        Marketplace
                    </div>
                </a>
            </div>
        </div>
    );
}
