/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Este es el mensaje de la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitalizar toda el label
    */
    allCaps?: boolean;
    /**
    * Color del label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Color personalizado de la fuente
    */
    fontColor?: string;
    /**
   * Color personalizado del background
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
