import { ReactNode } from 'react';
import * as styled_components from 'styled-components';

type AlertProps = {
    children?: ReactNode;
    severity: "error" | "warring" | "info" | "success";
    variant?: "outline";
};

declare const Alert: ({ ...props }: AlertProps) => JSX.Element;

type AvatarProps = {
    children?: ReactNode;
    alt?: string;
    src: string;
    size?: "md" | "lg" | "xl";
    width?: string;
    height?: string;
};

declare const Avatar: ({ ...props }: AvatarProps) => JSX.Element;

type BadgeProps = {
    children?: ReactNode;
    severity: "error" | "warning" | "info" | "success";
    variant?: "outline";
};

declare const Badge: ({ ...props }: BadgeProps) => JSX.Element;

type ButtonProps = {
    variation?: "primary" | "secondary" | "stroke" | "ghost";
    size?: "sm" | "md" | "lg" | number;
    color?: "err" | "suc" | "info" | "warning";
    children?: ReactNode;
};
declare const Button: styled_components.StyledComponent<"button", any, ButtonProps, never>;

type CardProps = {
    children?: ReactNode;
    minWidth?: Number;
    maxWidth?: Number;
    h?: Number;
    variant?: "outline";
    src?: String;
};
type CardMediaProps = {
    children?: ReactNode;
    alt?: string;
    src: string;
    h?: Number;
};
type CardHeaderProps = {
    children?: ReactNode;
    avatar?: any;
    action?: any;
    title?: string;
    subheader?: string;
};

declare const Card: ({ ...props }: CardProps) => JSX.Element;
declare const CardContent: ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;
declare const CardActions: ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;
declare const CardMedia: ({ ...props }: CardMediaProps) => JSX.Element;
declare const CardHeader: ({ ...props }: CardHeaderProps) => JSX.Element;

declare const Icon: ({ ...props }: {
    [x: string]: any;
}) => JSX.Element;

type ListProps = {
    children?: ReactNode;
    width?: number;
    primary?: string;
    secondary?: string;
};

declare const List: ({ ...props }: ListProps) => JSX.Element;
declare const ListItem: ({ ...props }: ListProps) => JSX.Element;
declare const ListButton: ({ ...props }: ListProps) => JSX.Element;
declare const ListItemText: ({ ...props }: ListProps) => JSX.Element;
declare const Divider: ({ ...props }: ListProps) => JSX.Element;

type NavbarProps = {
    children?: ReactNode;
};

declare const Navbar: ({ ...props }: NavbarProps) => JSX.Element;

type PaddingProps = {
    children: ReactNode;
    px?: any;
    py?: any;
    pt?: any;
    pl?: any;
    pb?: any;
    pr?: any;
};

type UtilProps = {
    children?: ReactNode;
} & PaddingProps;
declare const utils: styled_components.FlattenInterpolation<styled_components.ThemedStyledProps<UtilProps, any>>;

type TypographyProps = {
    children?: ReactNode;
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "subtitle1" | "subtitle2" | "body2" | "buttonText" | "captionText" | "overlineText";
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "sidebar" | "sub-title" | "body" | "subtitle1" | "subtitle2" | "body2" | "buttonText" | "captionText" | "overlineText";
} & UtilProps;

declare const Typography: ({ ...props }: TypographyProps) => JSX.Element;

export { Alert, Avatar, Badge, Button, ButtonProps, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Icon, List, ListButton, ListItem, ListItemText, Navbar, Typography, UtilProps, utils };
