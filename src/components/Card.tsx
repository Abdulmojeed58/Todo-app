import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className='py-[16px] px-[24px] bg-skin-gray-bg'>
            {children}
        </div>
    );
};

export const FormCard: React.FC<CardProps> = ({children}) => {

    return (
        <div className="rounded-[8px] border-[1px] bg-skin-text-light p-5">
            {children}
        </div>
    )
}

export default Card;
