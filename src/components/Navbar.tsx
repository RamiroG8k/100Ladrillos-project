import Image from 'next/image';
import React from 'react';
// Icons
import { FiMenu } from 'react-icons/fi';

type NavbarProps = {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
    return (
        <div className={`navbar ${className}`}>
            <button className="hamburger-menu absolute left-4 sm:hidden text-white text-3xl">
                <FiMenu />
            </button>
            <div className="hidden lg:block logo-full">
                <Image src="/assets/img/100Ladrillos-logo-full.svg" priority
                    alt="100 Ladrillos logotipo" width={126} height={50} />
            </div>
            <div className="block lg:hidden logo-full">
                <Image src="/assets/img/100Ladrillos-logo-icon.svg" priority
                    alt="100 Ladrillos logotipo" width={36} height={30} />
            </div>

            <div className="hidden lg:flex gap-6 text-primary">
                <button>
                    Cómo funciona
                </button>
                <button className="py-[10px] px-8 rounded">
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default Navbar;