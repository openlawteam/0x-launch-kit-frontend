import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { themeBreakPoints } from '../../themes/commons';

interface Props {
    image: React.ReactNode;
    text: string;
    textColor?: string;
    onClick: (event: MouseEvent) => void;
}

const LogoLink = styled.a<any>`
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 33px;
    font-family: 'Inter var', sans-serif;
    text-decoration: none;
`;

const LogoText = styled.h1<{ textColor?: string }>`
    color: ${props => props.textColor};
    display: none;
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    text-decoration: none;
    border-left: 1px solid #b9b9b9;
    margin-left: 1rem;
    padding-left: 1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1rem;
    font-weight: 200;

    @media (min-width: ${themeBreakPoints.xxl}) {
        display: block;
    }
`;

LogoText.defaultProps = {
    textColor: '#000',
};

export const Logo: React.FC<Props> = props => {
    const { image, text, textColor, onClick, ...restProps } = props;
    return (
        <LogoLink onClick={onClick} {...restProps}>
            {image}
            <LogoText textColor={textColor}>{text}</LogoText>
        </LogoLink>
    );
};
