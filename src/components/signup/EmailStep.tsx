// Common
import Image from 'next/image';
import Link from 'next/link';
// Context
import { SignupContext } from 'context';
import { useState, useContext } from 'react';
// Components
import { FormInput } from '@components/signup';
import { AlreadyGotAccount } from '@components/shared';
// Services | Constants
import { signUp } from 'services/signup';
import { socialsAuth, rulesRegex } from '../../constants/email';
import { IForm } from '@types';
import { errorMessages } from '@utils/index';

const EmailStep = () => {
    const { setStep, formGroup, setFormGroup, toast } = useContext<any>(SignupContext);
    // Handles when to show two password inputs
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    // State to manage equal password validation
    const [equalPasswords, setEqualPasswords] = useState<boolean>(true);
    // Form data, initial state if has been previously registereds
    const [formData, setFormData] = useState<IForm>({
        email: formGroup.email ?? '',
        password: formGroup.password ?? '',
        confirmPassword: formGroup.confirmPassword ?? ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { email, password } = formData;

        try {
            // Avoids to send empty fields
            if (Object.values(formData).every(x => x !== '')) {
                // Stores in context to keep track of it
                setFormGroup((f: any) => ({ ...f, ...formData }));
            }
            const { data: { token } }: any = await signUp({ email, password });
            localStorage.setItem('brick-token', token);

            setStep((v: number) => v + 1);
        } catch (error: any) {
            const { response: { status: code } } = error;

            const msg = errorMessages.email[code];
            toast.error(msg, { duration: 3000, position: 'top-center' });
        }
    }

    /**
     * It takes an event object and sets the form data to the target value.
     * @param {any}  - IForm - the type of the form data
     */
    const onChange = ({ target }: any) => {
        setFormData((v: IForm) => ({ ...v, [target.name]: target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[320px]">
            <span className="font-bold text-lg">
                Crear cuenta
            </span>
            <p className="text-sm leading-snug">
                Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
                <a href="" className="anchor"> Aviso de Privacidad, Derechos Arco </a>
                y nuestros<a href="" className="anchor"> T??rminos y Condiciones.</a>
            </p>
            <FormInput type="email" id="email" name="email" autoFocus
                placeholder="tu@correo.com" required onChange={onChange}
                onKeyDownCapture={() => setEmailDirty(true)} defaultValue={formGroup.email}
                label="??Cu??l es tu correo electr??nico?"
            />
            <div className="flex flex-col gap-2">
                <FormInput type="password" minLength={6} id="password" name="password"
                    placeholder="Contrase??a" required onChange={onChange}
                    label="Ingresa una contrase??a" defaultValue={formGroup.password} />
                {emailDirty && <div className="password-rules">
                    <p>Por razones de seguridad tu contrase??a debe tener las siguientes carateristicas:</p>
                    <ul id="rules" className="">
                        {rulesRegex.map(({ customRegex: reg, name, negative }) => {
                            const match = negative ? !reg.test(formData.password) : reg.test(formData.password);
                            return (
                                <li key={name} className={(formData.password !== '' && match) ? 'rule-passed' : 'rule-unfinished'}>
                                    {name}
                                </li>
                            );
                        })}
                    </ul>
                </div>}
            </div>
            {emailDirty || formGroup.email ? <>
                <div className="flex flex-col gap-2">
                    <FormInput type="password" minLength={6} id="confirmPassword" name="confirmPassword"
                        placeholder="Contrase??a" required onChange={onChange}
                        label="Confirma tu contrase??a" defaultValue={formGroup.confirmPassword}
                        onBlur={({ target: { value } }: any) => setEqualPasswords(value === formData.password)} />
                    {!equalPasswords && <p className="text-xs text-red-400">
                        Las contrase??as deben coincidir
                    </p>}
                </div>
                <div className="flex items-center gap-4">
                    <button disabled={!Object.values(formData).every(x => x !== '') && !formGroup.email}
                        type="submit" className="progress-btn btn-primary">
                        Siguiente
                    </button>
                </div>
            </> : <>
                <div className="flex justify-between items-center">
                    <div className="w-20 h-[1px] bg-gray-200" />
                    <span className="text-sm">o reg??strate con:</span>
                    <div className="w-20 h-[1px] bg-gray-200" />
                </div>
                <div className="flex justify-evenly items-center">
                    {socialsAuth.map((social: string) =>
                        <Link key={social} passHref href="/">
                            <a href="" className="social-link">
                                <Image src={`/assets/icons/${social}-logo.webp`}
                                    alt={`${social} logo`} width={32} height={32} />
                            </a>
                        </Link>
                    )}
                </div>
                <AlreadyGotAccount />
            </>}

        </form>
    )
}

export default EmailStep;