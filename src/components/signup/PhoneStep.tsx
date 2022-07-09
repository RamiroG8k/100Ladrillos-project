// Common
import { useState, useContext } from 'react';
import { SignupContext } from 'context';
// Icons
import FormInput from '@components/signup/FormInput';
import { setPhoneNumber } from 'services/signup';

const PhoneStep = ({ onSubmit }: any) => {
    // Form data
    const [phone, setPhone] = useState<number | any>();
    const { setStep } = useContext<any>(SignupContext);


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const res: any = await setPhoneNumber({ number: phone });
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[320px]">
            <span className="font-bold text-lg">
                ¿Cuál es tu teléfono celular?
            </span>
            <div className="flex flex-col gap-2">
                <FormInput type="tel" minLength={10} maxLength={10}
                    id="number" name="number" className="input" parentstyles="w-[320px]"
                    placeholder="1234-5678-90" required
                    onChange={({ target: { value } }: any) => setPhone(() => value)} />
                {(phone && !(/^\s*-?[0-9]{1,10}\s*$/).test(phone)) &&
                    <p className="text-xs text-red-400">
                        Ingrese un número de teléfono válido
                    </p>
                }
            </div>
            <div className="flex items-center gap-4">
                <button onClick={() => setStep((v: number) => v - 1)}
                    type="submit" className="progress-btn btn-secondary">
                    Anterior
                </button>
                <button disabled={!phone}
                    type="submit" className="progress-btn btn-primary">
                    Siguiente
                </button>
            </div>
        </form>
    );
}

export default PhoneStep;