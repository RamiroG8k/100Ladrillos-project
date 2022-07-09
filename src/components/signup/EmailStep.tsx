// Common
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { socialsAuth, rulesRegex } from '../../constants/email';
// Icons
import FormInput from '@components/signup/FormInput';
import { signUp } from 'services/signup';

type IForm = {
    email: string;
    password: string;
    confirmPassword: string;
};

const EmailStep = ({ onSubmit }: any) => {
    // Handles when to show two password inputs
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    // State to manage equal password validation
    const [equalPasswords, setEqualPasswords] = useState<boolean>(true);
    // Form data
    const [formData, setFormData] = useState<IForm>({ email: '', password: '', confirmPassword: '' });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const { email, password } = formData;

        try {
            const res: any = await signUp({ email, password });
            console.log('Response', res);

            localStorage.setItem('brick-token', res.token);
            onSubmit();
        } catch (error) {
            console.log('Error', error);
        }
    }

    const onChange = (e: any) => {
        setFormData((v: IForm) => ({ ...v, [e.target.name]: e.target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[320px]">
            <span className="font-bold text-lg">
                Crear cuenta
            </span>
            <p className="text-sm leading-snug">
                Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
                <a href="" className="anchor"> Aviso de Privacidad, Derechos Arco </a>
                y nuestros<a href="" className="anchor"> Términos y Condiciones.</a>
            </p>
            <FormInput type="email" id="email" name="email" autoFocus
                placeholder="tu@correo.com" required onChange={onChange}
                onKeyDownCapture={() => setEmailDirty(true)}
                label="¿Cuál es tu correo electrónico?"
            />
            <div className="flex flex-col gap-2">
                <FormInput type="password" minLength={6} id="password" name="password"
                    className="input" placeholder="Contraseña" required onChange={onChange}
                    label="Ingresa una contraseña" />
                {emailDirty && <div className="password-rules">
                    <p>Por razones de seguridad tu contraseña debe tener las siguientes carateristicas:</p>
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
            {emailDirty ? <div className="flex flex-col gap-2">
                <FormInput type="password" minLength={6} id="confirmPassword" name="confirmPassword"
                    className="input" placeholder="Contraseña" required onChange={onChange}
                    label="Confirma tu contraseña"
                    onBlur={({ target: { value } }: any) => setEqualPasswords(value === formData.password)} />
                {!equalPasswords && <p className="text-xs text-red-400">
                    Las contraseñas deben coincidir
                </p>}
            </div> : <>
                <div className="flex justify-between items-center">
                    <div className="w-20 h-[1px] bg-gray-200" />
                    <span className="text-sm">o regístrate con:</span>
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
            </>}
            <div className="flex items-center gap-4">
                <button disabled={!Object.values(formData).every(x => x !== '')}
                    type="submit" className="progress-btn btn-primary">
                    Siguiente
                </button>
            </div>
        </form>
    )
}

export default EmailStep;