// Common
import { useState, useContext } from 'react';
import { SignupContext } from 'context';
// Components
import { FormInput, VerifyPhone } from '@components/signup';
import { AlreadyGotAccount } from '@components/shared';
// Services | Utils
import { setPhoneNumber } from 'services/signup';
import { errorMessages } from '@utils/index';

const PhoneStep = () => {
    const { setStep, toast, setFormGroup, formGroup } = useContext<any>(SignupContext);
    // Form data
    const [phone, setPhone] = useState<string>(formGroup.phone ?? '');
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            // Avoids to send empty fields
            if (phone !== formGroup.phone) {
                // Stores in context to keep track of it
                setFormGroup((f: any) => ({ ...f, phone }));
            }
            const { data }: any = await setPhoneNumber({ number: phone });
            if (data) {
                setModalVisible((v) => !v);
            }
        } catch (error: any) {
            const { response: { status: code } } = error;

            const msg = errorMessages.phone[code];
            toast.error(msg, { duration: 3000, position: 'top-center' });
        }
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
            {modalVisible && <VerifyPhone toggleModal={() => setModalVisible(v => !v)} />}
        </>);
}

export default PhoneStep;