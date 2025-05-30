import React from "react";

function Button({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded font-medium transition shadow-sm focus:outline-none focus:ring ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
