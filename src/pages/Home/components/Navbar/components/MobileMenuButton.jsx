import icons from '../../../../../assets/icons';
import { MouseEventHandler } from 'react';
import { Popover } from '@headlessui/react';

export default function MobileMenuButton({ className, toggle }) {
    return (
        <Popover.Button className={className} as="div" role="button" aria-label="menu button">
            <div className="block h-[36px] w-[36px] rounded-[4px] focus:bg-slate-100 md:hidden" onClick={toggle}>
                <img src={icons.mobileMenuIcon} alt="Menu icon" />
            </div>
        </Popover.Button>
    );
}
