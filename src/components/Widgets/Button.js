import { forwardRef } from "react";

const Button = forwardRef(({ className, children, onClick = null }, ref) => {
    return (
        <button
            ref={ref}
            className={className}
            children={children}
            onClick={onClick} />
    );
});

export default Button;