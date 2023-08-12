import "./index.css";

interface ButtonProps {
    className: string,
    children: any
}

const Button = ({ className, children }: ButtonProps) => {
    return (
        <button className={className}>{children}</button>
    );
}
export default Button;