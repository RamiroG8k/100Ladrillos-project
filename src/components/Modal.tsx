// Common
import { useEffect } from 'react';

type ModalProps = {
    toggle: Function;
    children: any;
};

const Modal: React.FC<ModalProps> = ({ toggle, children }: ModalProps) => {
    useEffect(() => {
        handleBodyBehavior();

        return () => {
            document.getElementsByTagName('body')[0].style.overflow = 'unset';
        }
    }, []);

    const handleVisibilityChange = () => {
        handleBodyBehavior();
        toggle();
    };

    const handleBodyBehavior = () => {
        const docScrollBehavior = document.getElementsByTagName('body')[0].style.overflow;
        document.getElementsByTagName('body')[0].style.overflow = docScrollBehavior === 'hidden' ? 'unset' : 'hidden';
    };

    return (
        <div onClick={() => handleVisibilityChange()}
            className="center flex-col fixed top-0 left-0 bottom-0 right-0 w-screen h-scren px-2 bg-[#21282d]/40 z-[1000]">

            <div onClick={(e: any) => e.stopPropagation()}
                className="p-4 sm:p-6 bg-white flex flex-col h-full max-h-[580px] w-full max-w-[550px] rounded" >
                {children}
            </div>

        </div>
    );
};

export default Modal;