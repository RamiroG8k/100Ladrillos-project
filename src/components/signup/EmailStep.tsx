// Common
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
// Icons
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const socialsAuth: Array<string> = [
    'Google',
    'Microsoft',
    'Facebook'
];

const EmailStep = () => {
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <>
            <span className="font-bold text-lg">
                Crear cuenta
            </span>
            <p className="text-sm leading-snug">
                Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
                <a href="" className="anchor"> Aviso de Privacidad, Derechos Arco </a>
                y nuestros<a href="" className="anchor"> Términos y Condiciones.</a>
            </p>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                    ¿Cuál es tu correo electrónico?
                </label>
                <input type="email" id="email" name="email" autoComplete="email"
                    className="input" placeholder="tu@correo.com" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm">
                    Ingresa una contraseña
                </label>
                <div className="relative">
                    <input type={showPassword ? 'text' : 'password'} minLength={6}
                        id="password" name="password" autoComplete="password"
                        className="input" placeholder="Contraseña" 
                        onChange={({ target: { value } }) => setPassword(value)}/>
                    <button type="button" onClick={() => setShowPassword(v => !v)}
                        className="absolute bottom-2 right-2 p-1 opacity-80 hover:opacity-100">
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                </div>
                <div className="password-rules">
                    <p>Por razones de seguridad tu contraseña debe tener las siguientes carateristicas:</p>
                    <ul id="rules" className="">
                        <li className={(password.length >= 6) ? 'rule-passed' : 'rule-unfinished'}>
                            Mínimo 6 caracteres (letras, números y caracteres especiales).
                        </li>
                        <li>
                            Mínimo 1 número.
                        </li>
                        <li>
                            {"Mínimo 1 de estos caracteres especiales !”#$%&/()=?¿^*@,[]{ };:_><,.-|`+."}
                        </li>
                        <li>
                            No tener la frase “100Ladrillos”.
                        </li>
                        <li>
                            No tener mas de 3 caracteres idénticos en forma consecutiva (ej: aaa).
                        </li>
                        <li>
                            No tener mas de 3 caracteres numéricos y/o letras en forma secuencial (ej: 123).
                        </li>
                    </ul>
                </div>
            </div>
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
        </>
    )
}

export default EmailStep