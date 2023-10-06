import React from 'react';
import icons from '../../../../../assets/icons';
import { HeaderComponent } from './HeaderComponent';
import { twMerge } from 'tailwind-merge';

const contentStyle = {
    margin: 0,
    color: '#fff',
    lineHeight: '36px',
    textAlign: 'center',
    gap: '24px',
};

export default function OurRoadmap() {
    return (
        <div className="flex flex-col justify-center gap-[30px] md:gap-[60px] md:mx-[60px] min-[1440px]:gap-[80px] min-[1440px]:mx-[120px]">
            <HeaderComponent title="ROADMAP" subTitle="Our Roadmap" />
            <div className="max-w-[342px] md:hidden">
                <RoadmapMobile />
            </div>
            <div className="hidden md:flex">
                <RoadmapDesktop />
            </div>
        </div>
    );
}

const RoadmapDesktop = () => {
    const RoadmapDesktopItem = (props) => {
        return (
            <div className={twMerge('flex gap-[4px]', props.className)}>
                <div
                    className={twMerge(
                        "text-start font-['Roboto'] text-[16px] font-normal text-white",
                        props.titleStyle,
                    )}
                >
                    {props.item.demoContent}
                </div>
            </div>
        );
    };
    return (
        <div className="relative h-[265px] min-w-[648px] min-[1440px]:h-[412px] min-[1440px]:min-w-[1220px]">
            <div className="hidden min-[1440px]:flex absolute flex h-full items-center">
                <img src={icons.desktopRoadmap} alt="roadmap" className="w-full" />
            </div>
            <div className="min-[1440px]:hidden absolute flex h-full items-center">
                <img src={icons.mdRoadmap} alt="roadmap" className="w-full" />
            </div>
            <div className="flex flex-col justify-between h-full w-full min-[1440px]:gap-[65px]">
                <div className="flex justify-center gap-[106px] min-[1440px]:gap-[360px]">
                    <RoadmapDesktopItem
                        item={roadmapItemList[1]}
                        className="w-[190px] pr-[18px]"
                        titleStyle="text-center"
                    />
                    <RoadmapDesktopItem item={roadmapItemList[3]} className="w-[158px]" titleStyle="text-center" />
                </div>
                <div className="flex items-end justify-between">
                    <RoadmapDesktopItem item={roadmapItemList[0]} className="w-[128px]" />
                    <RoadmapDesktopItem
                        item={roadmapItemList[2]}
                        className="w-[176px] pl-[28px]"
                        titleStyle="text-center"
                    />
                    <RoadmapDesktopItem item={roadmapItemList[4]} className="w-[153px]" titleStyle="text-right" />
                </div>
            </div>
        </div>
    );
};

const RoadmapMobile = () => {
    return (
        <div className="inline-flex flex-col items-start gap-[20px] rounded-[24px]">
            {roadmapItemList.map((item, idx) => (
                <RoadmapItem key={idx} item={item} />
            ))}
        </div>
    );
};

const RoadmapItem = (props) => {
    return (
        <div className="w-full">
            <div
                style={contentStyle}
                className={twMerge(
                    'flex h-[56px] w-full items-start gap-[20px] pb-[20px]',
                    props.item.date !== '2024' && 'border-b-[0.5px] border-b-[#24C3BC]',
                )}
            >
                <div
                    style={{
                        background: 'linear-gradient(135deg, #24C3BC 0%, #ADFFFB 100%)',
                    }}
                    className="flex flex-col items-start justify-center gap-[4px] rounded-2xl px-[20px] pt-[9px] pb-[8px]"
                >
                    <div className="font-['Roboto'] text-[16px] font-bold leading-normal text-[#1C1A2D] whitespace-nowrap">
                        {props.item.quarter} - {props.item.date}
                    </div>
                </div>
                <div className="font-['Roboto'] text-start text-[14px] font-normal text-white leading-normal">
                    {props.item.demoContent}
                </div>
            </div>
        </div>
    );
};

const roadmapItemList = [
    {
        quarter: 'Q1',
        date: '2023',
        demoContent: 'Website Launch & Token Creation',
    },
    {
        quarter: 'Q2',
        date: '2023',
        demoContent: 'Audit & Development of Dapp Beta',
    },
    {
        quarter: 'Q3',
        date: '2023',
        demoContent: 'Starksport Exchange & Marketplace',
    },
    {
        quarter: 'Q4',
        date: '2023',
        demoContent: 'Private Round & Starksport Launchpad',
    },
    {
        quarter: 'Q1',
        date: '2024',
        demoContent: 'Public Round & Starksport Multichain',
    },
];
