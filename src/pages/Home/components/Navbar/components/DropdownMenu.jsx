import { Menu, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { Fragment, MouseEventHandler, ReactNode, useState } from 'react';
import icons from '../../../../../assets/icons';

// type ComponentItem = {
//   id: string;
//   label: string;
//   href: string;
// };

function isLinkItem(item) {
    return item.description !== undefined;
}

export const DropdownMenu = ({
    className,
    dropdownClassName,
    heading,
    items,
    hideArrow = false,
    disableHover = false,
}) => {
    const [hovering, setHovering] = useState(false);
    const timeoutDuration = 200;
    let timeout;

    const onMouseEnter = () => {
        clearTimeout(timeout);
        setHovering(true);
    };

    const onMouseLeave = () => {
        timeout = setTimeout(() => {
            setHovering(false);
        }, timeoutDuration);
    };

    return (
        <Menu as="div" className={twMerge('w-full md:relative md:w-fit', className)}>
            {({ open }) => (
                <>
                    <Menu.Button
                        as="div"
                        className={
                            "flex w-full cursor-pointer items-center justify-between font-['Roboto'] text-[16px] md:text-[12px] min-[1000px]:text-[16px] font-bold text-white dark:hover:text-slate-200 md:gap-[4px]"
                        }
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        {heading}
                        {!hideArrow && (
                            <img
                                src={icons.arrow.arrowDown}
                                alt="arrow icon"
                                className={twMerge(
                                    'h-[20px] w-[20px] transition-transform duration-200',
                                    open ? 'rotate-180' : '',
                                )}
                            />
                        )}
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            className={twMerge(
                                'flex flex-col gap-[16px] pt-[16px] outline-none dark:bg-slate-800',
                                'md:absolute md:left-0 md:z-10 md:mt-[8px] md:w-[332px] md:gap-0 md:rounded-[16px] md:bg-[#1C1A2D] md:pt-0',
                                dropdownClassName,
                            )}
                        >
                            <div className="h-full w-full px-[4px] py-[4px]">
                                {items.map((item) => (
                                    <Menu.Item key={item.id}>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-white'
                                                } flex w-full items-center gap-[12px] rounded-md py-[12px] pl-[12px] font-['Roboto']`}
                                            >
                                                <div className="flex w-[40px]">
                                                    <img src={item.icon} alt="icons" className="h-[24px] w-[24px]" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-left text-[16px] font-bold">
                                                        {item.label}
                                                    </span>
                                                    <span className="text-left text-[14px] font-normal text-[#C6C6C6]">
                                                        {item?.description}
                                                    </span>
                                                </div>
                                            </button>
                                        )}
                                    </Menu.Item>
                                ))}
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
};
