import { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

const FormInput = (props: any) => {
    const { label, errorMessage, onChange, onBlur, id, type, ...inputProps } = props;
    const [visible, setVisible] = useState<boolean>(false);

    const handleVisibility = () => {
        if (type !== 'password') return type;
        else {
            return visible ? 'text' : 'password';
        }
    }

    return (
        <div className={`flex flex-col gap-2 ${inputProps.parentstyles ?? ''}`}>
            <label htmlFor={id} className="text-sm">{label}</label>
            <div className="relative">
                <input {...inputProps} id={id} className="input" autoComplete="off"
                    onChange={onChange} onBlur={onBlur} type={handleVisibility()} />
                {type === 'password' && <button type="button"
                    className="absolute bottom-2 right-2 p-1 opacity-80 hover:opacity-100"
                    onClick={() => setVisible(v => !v)}>
                    {visible ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>}
            </div>
            {errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

export default FormInput;