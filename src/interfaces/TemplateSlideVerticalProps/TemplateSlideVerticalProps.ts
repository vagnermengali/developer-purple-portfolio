export interface TemplateSlideVerticalProps {
    title: string;
    details?: string;
    textButton?: string;
    number: string;
    link?: boolean;
    email?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
    img: string;
    home?: boolean;
    cursor: boolean;
    section: string;
}

export interface ImgProps {
    image: string;
    cursor?: string;
}

export interface ImgHomeProps {
    image: string;
    children?: React.ReactNode;
}

export type CursorProps = Omit<ImgProps, 'image'>;

export interface TemplateVerticalFreeProps {
    children: React.ReactNode;
    number: number;
}
