import React from 'react';

type ProgressButtons = {
    onPrevious: () => void;
    onNext: () => void;
}

const ProgressButtons: React.FC<ProgressButtons> = ({ onPrevious, onNext }) => {
    return (
        <div className="flex items-center gap-4">
            <button onClick={onPrevious}
                type="button" className="progress-btn btn-secondary">
                Anterior
            </button>
            <button onClick={onNext}
                type="button" className="progress-btn btn-primary">
                Siguiente
            </button>
        </div>
    );
}

export default ProgressButtons;