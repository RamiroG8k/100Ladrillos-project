import Image from 'next/image';
import Link from 'next/link';

const EmailStep = () => {
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
                <input type="password" id="password" name="password" autoComplete="password"
                    className="input" placeholder="Contraseña" />
            </div>
            <div className="flex justify-between items-center">
                <div className="w-20 h-[1px] bg-gray-200" />
                <span className="text-sm">o regístrate con:</span>
                <div className="w-20 h-[1px] bg-gray-200" />
            </div>
            <div className="flex justify-evenly items-center">
                <Link href="/">
                    <a href="" className="social-link">
                        <Image src="/assets/icons/Google-logo.webp"
                            alt="Google logo" width={32} height={32} />
                    </a>
                </Link>
                <Link href="/">
                    <a href="" className="social-link">
                        <Image src="/assets/icons/Microsoft-logo.webp"
                            alt="Microsoft logo" width={32} height={32} />
                    </a>
                </Link>
                <Link href="/">
                    <a href="" className="social-link">
                        <Image src="/assets/icons/Facebook-logo.webp"
                            alt="Facebook logo" width={32} height={32} />
                    </a>
                </Link>
            </div>
        </>
    )
}

export default EmailStep