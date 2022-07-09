import { useContext } from 'react';
import { SignupContext } from 'context';

// type ProgressButtons = {
//     onPrevious: () => void;
//     onNext: () => void;
// }

const ProgressButtons: React.FC = () => {
    const { step, setStep } = useContext<any>(SignupContext);

    return (
        <div className="flex items-center gap-4">
            {(step !== 1) && <button 
                type="submit" className="progress-btn btn-secondary">
                Anterior
            </button>}
            <button type="submit" className="progress-btn btn-primary">
                Siguiente
            </button>
        </div>
    );
}

export default ProgressButtons;