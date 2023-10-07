import icons from '../../../../../assets/icons';
import { Popover } from '@headlessui/react';

export default function MobileMenuButton({ className, toggle, open }) {
    return (
        <Popover.Button className={className} as="div" role="button" aria-label="menu button">
            <div className="block h-[36px] w-[36px] rounded-[4px] focus:bg-slate-100" onClick={toggle}>
                <img
                    src={open ? icons.xMarkIcon : icons.mobileMenuIcon}
                    alt="Menu icon"
                    className="h-[36px] w-[36px]"
                />
            </div>
        </Popover.Button>
    );
}
