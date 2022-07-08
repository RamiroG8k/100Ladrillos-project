import Image from 'next/image';
import React from 'react';

type NavbarProps = {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
    return (
        <div className={`navbar ${className}`}>
            <div className="hidden lg:block">
                <Image src="/assets/img/100Ladrillos-logo-full.svg" priority
                    alt="100 Ladrillos logotipo" width={126} height={50} />
            </div>
            <div className="block lg:hidden">
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