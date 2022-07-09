import Link from "next/link";

const AlreadyGotAccount = () => {
    return (
        <div className="flex sm:hidden flex-col gap-3 items-center justify-center mt-6">
            <p className="text-sm">
                ¿Ya tienes tu cuenta?
            </p>
            <Link href="/" passHref>
                <a href="" className="text-primary font-bold w-full px-6 py-[10px] text-center">
                    Iniciar sesión
                </a>
            </Link>
        </div>
    );
}

export default AlreadyGotAccount;