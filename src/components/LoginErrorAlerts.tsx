import React from 'react';

type LoginErrorAlertProps = {
  message: string;
  onClose: () => void;
};

const LoginErrorAlert: React.FC<LoginErrorAlertProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-4 z-50">
      <span className="font-semibold">Error:</span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-white font-semibold hover:underline"
      >
        Cerrar
      </button>
    </div>
  );
};

export default LoginErrorAlert;
