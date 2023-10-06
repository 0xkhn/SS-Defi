import { twMerge } from 'tailwind-merge';
import Tooltip from 'antd/es/tooltip';
import LaunchAppModal from './LaunchAppModal';

export default function LaunchAppButton({ styleButton, styleTitle, onClick }) {
    return (
        <Tooltip placement="bottom" showArrow={false} title={<LaunchAppModal />}>
            <button
                style={{
                    background: 'linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)',
                }}
                className={twMerge(
                    'button-hover-1 h-[36px] items-center justify-center gap-[4px] rounded-[12px] border-0 px-[12px] py-[6px] max-[340px]:hidden',
                    styleButton,
                )}
                onClick={onClick}
            >
                <span className={twMerge("font-['Roboto'] text-[16px] font-bold text-[#1C1A2D]", styleTitle)}>
                    Launch App
                </span>
            </button>
        </Tooltip>
    );
}
