// Common
import { SignupContext } from 'context';
import { useState, useContext } from 'react';
// Components
import FormInput from '@components/signup/FormInput';
import { AlreadyGotAccount } from '@components/shared';
// Services
import { setProfile } from 'services/signup';
import { ProfileBody } from '@types';

const PersonalInfo = ({ onSubmit }: any) => {
    const { setStep, toast, setFormGroup, formGroup } = useContext<any>(SignupContext);
    const [formData, setFormData] = useState<ProfileBody>({
        name: formGroup.name ?? '',
        secondName: formGroup.secondName ?? '',
        firstLastName: formGroup.firstLastName ?? '',
        secondLastName: formGroup.secondLastName ?? '',
    });
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            // Avoids to send empty fields
            if (Object.values(formData).every(x => x !== '')) {
                const { ...newProps } = formData;
                setFormGroup((f: any) => ({ ...f, ...newProps }));
            }
            const { data }: any = await setProfile(formData);
            if (data) {
                toast.success('Informacion actualizada con exito.', { duration: 3000, position: 'top-center' });
                // 1 => Curp step, 2  => Default step (success);
                onSubmit(isMobile ? 1 : 2);
            }
        } catch ({ response: { status } }: any) {
            if (status === 400) {
                toast.error('La informacion no coincide con datos de perfil.', { duration: 3000, position: 'top-center' });
            } else if (status === 401) {
                toast.error('Hubo un problema con su autenticacion.', { duration: 3000, position: 'top-center' });
            } else {
                toast.error('Ha ocurrido un error al registrar el token.', { duration: 3000, position: 'top-center' });
            }
        }
    }

    const onChange = (e: any) => {
        setFormData((v: ProfileBody) => ({ ...v, [e.target.name]: e.target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[320px] w-full">
            <span className="font-bold text-lg">
                ¿Cómo te llamas?
            </span>

            <FormInput type="text" id="name" name="name"
                parentstyles="w-full sm:w-[320px]" placeholder="Primer nombre" required
                onChange={onChange} label="Primer nombre" defaultValue={formGroup.name}
                errorMessage={(formData.name && !(/^[a-zA-Z\u00C0-\u00FF]*$/.test(formData.name)))
                    && 'Por favor ingrese un nombre valido, sin espacios'} />

            <FormInput type="text" id="secondName" name="secondName"
                parentstyles="w-full sm:w-[320px]" placeholder="Segundo nombre"
                onChange={onChange} label="Segundo nombre (Opcional)" defaultValue={formGroup.secondName}
                errorMessage={(formData.secondName && !(/^[a-zA-Z\u00C0-\u00FF]*$/.test(formData.secondName)))
                    && 'Por favor ingrese un nombre valido, sin espacios'} />

            <FormInput type="text" id="firstLastName" name="firstLastName"
                parentstyles="w-full sm:w-[320px]" placeholder="Primer apellido" required
                onChange={onChange} label="Primer apellido" defaultValue={formGroup.firstLastName}
                errorMessage={(formData.firstLastName && !(/^[a-zA-Z\u00C0-\u00FF]*$/.test(formData.firstLastName)))
                    && 'Por favor ingrese un apellido valido, sin espacios'} />

            <FormInput type="text" id="secondLastName" name="secondLastName"
                parentstyles="w-full sm:w-[320px]" placeholder="Segundo apellido"
                onChange={onChange} label="Segundo apellido (Opcional)" defaultValue={formGroup.secondLastName}
                errorMessage={(formData.secondLastName && !(/^[a-zA-Z\u00C0-\u00FF]*$/.test(formData.secondLastName)))
                    && 'Por favor ingrese un apellido valido, sin espacios'} />

            <AlreadyGotAccount />
            <div className="btn-group">
                <button onClick={() => setStep((v: number) => v - 1)}
                    type="submit" className="progress-btn btn-secondary">
                    Anterior
                </button>
                <button disabled={(formData.name === '' || formData.firstLastName === '') && formGroup.name === ''}
                    type="submit" onClick={() => { setIsMobile(() => true) }}
                    className="block sm:hidden progress-btn btn-primary">
                    Siguiente
                </button>
                <button disabled={(formData.name === '' || formData.firstLastName === '') && formGroup.name === ''}
                    type="submit" className="hidden sm:block progress-btn btn-primary">
                    Siguiente
                </button>
            </div>
        </form>
    );
}

export default PersonalInfo;