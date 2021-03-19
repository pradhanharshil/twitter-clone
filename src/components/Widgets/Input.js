import { forwardRef } from "react";

const Input = forwardRef(({ className, placeholder, value = undefined, onChange = null, type }, ref) => {
    return (
        <input
            ref={ref}
            className={className}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type} />
    );
});

export default Input;