export interface ChildrenProps {
    children: React.ReactNode;
}

export interface ChildrenDurationProps extends ChildrenProps {
    duration: number;
    width?: string;
    animate?: boolean;
    hover?: boolean;
    titleFit?: boolean;
}
