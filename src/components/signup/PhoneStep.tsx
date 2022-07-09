// Common
import { useState, useContext } from 'react';
import { SignupContext } from 'context';
// Icons
import FormInput from '@components/signup/FormInput';
import { setPhoneNumber, verifyNumber } from 'services/signup';
import Modal from '@components/Modal';
import Image from 'next/image';
import Link from 'next/link';
import { AlreadyGotAccount } from '@components/shared';

const PhoneStep = ({ onSubmit }: any) => {
    // Form data
    const [phone, setPhone] = useState<number | any>();
    const [modalVisible, setModalVisible] = useState(false);
    const { setStep, toast, setFormGroup, formGroup } = useContext<any>(SignupContext);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            // Avoids to send empty fields
            setModalVisible(() => true);
            if (phone) {
                setFormGroup((f: any) => ({ ...f, phone }));
            }

            // const res: any = await setPhoneNumber({ number: phone });
            // console.log(res);
            // onSubmit();
        } catch (error) {
            toast.error('Error, solicitud incorrecta 😵‍💫', { position: 'top-center' });
            console.log(error);
        }
    }
    const VerifyPhone = () => {
        const [pinCode, setPinCode] = useState('');

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
                // const res: any = await verifyNumber({ token: pinCode });
                // console.log(res);
                onSubmit();
            } catch (error) {
                toast.error('Error, solicitud incorrecta 😵‍💫', { position: 'top-center' });
                console.log(error);
            }
        }

        return (
            <Modal toggle={() => setModalVisible(v => !v)} >
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
                            <button onClick={() => setModalVisible(v => !v)}
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


    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[320px] w-full">
                <span className="font-bold text-lg">
                    ¿Cuál es tu teléfono celular?
                </span>
                <div className="flex flex-col gap-2">
                    <FormInput type="tel" minLength={10} maxLength={10}
                        id="number" name="number" parentstyles="w-full sm:w-[320px]"
                        placeholder="1234-5678-90" required defaultValue={formGroup.phone}
                        onChange={({ target: { value } }: any) => setPhone(() => value)} />
                    {(phone && !(/^\s*-?[0-9]{1,10}\s*$/).test(phone)) &&
                        <p className="text-xs text-red-400">
                            Ingrese un número de teléfono válido
                        </p>
                    }
                </div>
                <AlreadyGotAccount />
                <div className="btn-group">
                    <button onClick={() => setStep((v: number) => v - 1)}
                        type="submit" className="progress-btn btn-secondary">
                        Anterior
                    </button>
                    <button disabled={!formGroup.phone && !phone}
                        type="submit" className="progress-btn btn-primary">
                        Siguiente
                    </button>
                </div>
            </form>
            {modalVisible && <VerifyPhone />}
        </>);
}

export default PhoneStep;