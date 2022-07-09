// Common
import { useState, useContext } from 'react';
import { SignupContext } from 'context';
// Components
import FormInput from '@components/signup/FormInput';
import { AlreadyGotAccount } from '@components/shared';

const CurpInfo = ({ onSubmit }: any) => {
    const [curp, setCurp] = useState<number | any>();
    const { setStep, setFormGroup, formGroup } = useContext<any>(SignupContext);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            // Avoids to send empty fields
            if (curp) {
                setFormGroup((f: any) => ({ ...f, curp }));
            }
            console.log(curp);

            // const res: any = await setProfile();
            // console.log(res);

            onSubmit();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[320px] w-full">
            <span className="font-bold text-lg">
                ¿Cuál es tu CURP?
            </span>
            <div className="flex flex-col gap-2">
                <FormInput type="tel" minLength={18} maxLength={18}
                    id="curp" name="curp" className="uppercase" parentstyles="w-full sm:w-[320px]"
                    placeholder="CURP" required defaultValue={formGroup.curp}
                    onChange={({ target: { value } }: any) => setCurp(() => value)}
                    errorMessage={(curp && curp.length !== 18)
                        && 'La longitud de una CURP valida es de 18 caracteres.'} />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm leading-snug">
                    Consulta tu <a href="" className="anchor uppercase"> Curp</a>
                </p>
                <p className="text-sm leading-snug">
                    Si soy extranjero <a href="" className="anchor"> ¿Cómo solicito mi CURP?</a>
                </p>
            </div>

            <AlreadyGotAccount />
            <div className="btn-group">
                <button onClick={() => setStep((v: number) => v - 1)}
                    type="submit" className="progress-btn btn-secondary">
                    Anterior
                </button>
                <button disabled={!curp && !formGroup.curp}
                    type="submit" className="progress-btn btn-primary whitespace-nowrap">
                    Crear Cuenta
                </button>
            </div>
        </form>
    );
}

export default CurpInfo;