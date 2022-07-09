// Common
import Image from 'next/image';
import Link from 'next/link';
import { useState, useContext } from 'react';
import { SignupContext } from 'context';
// Components
import Modal from '@components/Modal';
// Services | Utils
import { verifyNumber } from 'services/signup';
import { errorMessages } from '@utils/index';

type VerifyPhoneProps = {
    toggleModal: () => void;
}

const VerifyPhone = ({ toggleModal }: VerifyPhoneProps) => {
    const { setStep, toast } = useContext<any>(SignupContext);
    const [pinCode, setPinCode] = useState<any>();

    const handleChange = ({ target }: any) => {
        const { maxLength, value, name } = target;
        const [_, fieldIndex] = name.split('-');
        // Check if they hit the max character length
        if (value.length >= maxLength) {
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < 4) {
                // Get the next input field
                const nextSibling: any = document.querySelector(
                    `input[name=pinCode-${parseInt(fieldIndex, 10) + 1}]`
                );
                // If found, focus the next field
                if (nextSibling !== null) {
                    nextSibling.focus();
                }
            }
        }
        const pCode = Array.from(document.getElementsByClassName('pin-code'));
        setPinCode(() => pCode.map(({ value }: any) => value).join(''));
    }

    const handleVerify = async () => {
        try {
            const { data }: any = await verifyNumber({ token: pinCode });
            if (data.phone.verified) {
                toast.success('El numero de telefono ha sido verificado.', { duration: 3000, position: 'top-center' });
                setStep((s: number) => s + 1);
            }
        } catch (error: any) {
            const { response: { status: code } } = error;

            const msg = errorMessages.verification[code];
            toast.error(msg, { duration: 3000, position: 'top-center' });
        }
    }

    return (
        <Modal toggle={() => toggleModal()} >
            <div className="text-center center flex-col justify-between gap-6 w-full h-full">
                <span className="text-lg">Verifica tu teléfono celular</span>
                <Image src="/assets/icons/Phone-locked.svg"
                    alt="Phone lock" width={48} height={49} />
                <div className="flex flex-col gap-[7.3px]">
                    <p className="text-sm">Hemos enviado un código único de 6 digítos a tú teléfono celular</p>
                    <span className="font-bold">{'11 1111 1111'}</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-[40.5px]">
                        <p className="text-xs text-gray-400">Tu código expira en 2 minutos.</p>
                        <div className="center gap-4">
                            <input onChange={handleChange} type="tel"
                                className="pin-code"
                                name="pinCode-0" maxLength={1} required />
                            <input onChange={handleChange} type="tel"
                                className="pin-code"
                                name="pinCode-1" maxLength={1} required />
                            <input onChange={handleChange} type="tel"
                                className="pin-code"
                                name="pinCode-2" maxLength={1} required />
                            <input onChange={handleChange} type="tel"
                                className="pin-code"
                                name="pinCode-3" maxLength={1} required />
                        </div>
                        <p className="text-xs text-dark">
                            ¿Aún no te llega tu código? ó ¿Tu código expiró? Intenta enviarlo nuevamente
                        </p>
                        <Link href="/" className="font-bold opacity-80 text-disabled-dark hover:opacity-100">
                            Renvíar SMS
                        </Link>
                    </div>
                    <div className="flex gap-6">
                        <button onClick={() => toggleModal()}
                            type="button" className="progress-btn btn-secondary">
                            Cancelar
                        </button>
                        <button onClick={() => handleVerify()}
                            type="button" className="progress-btn btn-primary">
                            Validar código
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default VerifyPhone;