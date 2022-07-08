import { useContext } from 'react';
import { SignupContext } from 'context';

const ProgressPoints = () => {
    const { step, setStep } = useContext<any>(SignupContext);

    return (
        <div className="flex gap-6 place-self-center">
            {Array.from({ length: 4 }).map((_, i: number) =>
                <div key={i} onClick={() => setStep(i + 1)}
                    className={`progress-point ${i < step ? 'bg-dark' : 'bg-disabled'}`} />
            )}
        </div>
    );
}

export default ProgressPoints;