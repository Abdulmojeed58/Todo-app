import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`${className ? className : 'bg-skin-gray-bg'} py-[16px] px-[24px]`}>
            {children}
        </div>
    );
};

export const FormCard: React.FC<CardProps> = ({children, className}) => {

    return (
        <div className={`${className} rounded-tl-[28px] rounded-tr-[28px] md:rounded-[8px] border-[1px] bg-skin-text-light p-[24px] md:p-5`}>
            {children}
        </div>
    )
}

export default Card;
