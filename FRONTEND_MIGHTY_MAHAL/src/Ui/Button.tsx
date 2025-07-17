interface ButtonProps {
    variant: 'primary' | 'secondary' | 'cart' | 'links' | 'tertiary';
    text?: string;
    startIcon?: React.ReactNode;
    onclick?: () => void;
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large' | 'linksSize';
    fontStyle?: 'mono' | 'sans';
}

const variantClasses = {
    primary: 'bg-white-100 text-[#3d8066] hover:text-white-200',
    secondary: 'bg-blue-500 text-white hover:bg-blue-600',
    tertiary: 'bg-blue-600 text-black hover:bg-blue-700',
    cart: 'hover:bg-white-200 cursor-pointer',
    links: "hover:text-[#31614f] cursor-pointer"
}

const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2 text-sm',
    large: 'px-8 py-3 text-lg',
    linksSize: 'px-4 py-0.5 text-base',
    
}


const defaultStyles = "px-6 py-2 rounded-md font-medium flex justify-center items-center cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black after:transform after:scale-x-0 after:transition-transform hover:after:scale-x-100"

export function Button(props: ButtonProps) {
    const buttonStyles = props.variant === 'links' 
    ? `hover:text-blue-600 cursor-pointer ${props.size ? sizeClasses[props.size] : sizeClasses['medium']} ${props.fullWidth ? 'w-full flex justify-center items-center' : ''} ${props.fontStyle ? `font-${props.fontStyle}` : ''}`
    : props.variant === 'tertiary'
    ? `bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer ${props.size ? sizeClasses[props.size] : sizeClasses['medium']} ${props.fullWidth ? 'w-full flex justify-center items-center' : ''} ${props.fontStyle ? `font-${props.fontStyle}` : ''}`
    : `${defaultStyles} ${variantClasses[props.variant]} ${props.size ? sizeClasses[props.size] : sizeClasses['medium']} ${props.fullWidth ? 'w-full flex justify-center items-center' : ''} ${props.fontStyle ? `font-${props.fontStyle}` : ''}`;

    return (
        <button onClick={props.onclick} className={buttonStyles}>
            {props.startIcon && <span>{props.startIcon}</span>}
            {props.loading ? 'Loading...' : props.text}
        </button>
    )
}