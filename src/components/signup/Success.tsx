// Common
import Link from 'next/link';
import { SignupContext } from 'context';
import { useState, useContext, useEffect } from 'react';
// Services
import { getProfile } from 'services/signup';
// Icons
import { BsCheck } from 'react-icons/bs';
import { IProfile } from '@types';

const Success = () => {
    const { formGroup, setFormGroup, toast } = useContext<any>(SignupContext);

    const [profile, setProfile] = useState<IProfile>({
        id: '',
        clientNumber: '',
        completed: false,
        email: '',
        name: '',
        firstLastName: '',
        phone: {
            number: '',
            verified: false,
        },
    });

    useEffect(() => {
        handleInfo();
    }, []);

    const handleInfo = async () => {
        try {
            // const response = await getProfile();
            // console.log(response);
    
            // setProfile(response);
        } catch (error) {
            
            toast.error('Error, solicitud incorrecta 😵‍💫', { position: 'top-center' });
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-dark center">
                    <BsCheck className="text-green-500 text-4xl transform translate-y-[2px] rotate-[5deg]" />
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-lg font-bold text-dark">
                        Haz creado una cuenta
                    </span>
                    <p className="text-disabled-dark">
                        Tu número de cliente es: {profile.clientNumber}
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="">
                    <span className="text-[22px]">
                        {profile.name + ' ' + profile.firstLastName}
                    </span>
                    <p className="text-sm">
                        {profile.email}
                    </p>
                    <p className="text-sm">
                        {profile.phone.number}
                    </p>
                </div>
                <Link href="/" passHref>
                    <a href="" className="py-[10px] px-6 text-primary opacity-80 hover:opacity-100 text-lg font-bold">
                        Iniciar sesión
                    </a>
                </Link>
            </div>
        </div>

    );
}

export default Success;