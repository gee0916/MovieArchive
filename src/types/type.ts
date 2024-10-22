/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// user formdata
export interface FormData {
  email: string;
  password: string;
  chkPassword?: string;
}

// Link
export interface PageProps {
  currentPath: string;
  activePage?: string;
  onNavigate?: (page: string) => void;
}

// styled
export interface StyledProps {
  $isActive?: boolean;
  $btnGap?: string;
}

// button
export interface ButtonProps {
  href?: string;
  type: string /* link button circle*/;
  content?: string;
  onClick?: () => void;
}

export interface NextBackProps {
  onNext?: () => void;
  onBack?: () => void;
}

export interface NavButtonProps {
  iconClass?: string;
  label: string;
  isActive?: boolean;
  href?: string;
  isLink: boolean;
  onClick?: () => void;
}

export interface SnsBtnProps {
  src: string;
}

// input
export interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  register?: any;
}

//alret
export interface AlertProps {
  message: string;
}
