import { Popover } from '@headlessui/react';

export default function MobileMenuButton({ className, toggle, open }) {
    return (
        <Popover.Button className={className} as="div" role="button" aria-label="menu button">
            <div className="block h-[36px] w-[36px] rounded-[4px] focus:bg-slate-100" onClick={toggle}>
                <div id="nav-icon3" className={open && 'open'}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </Popover.Button>
    );
}
