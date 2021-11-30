import './mylabel.css'
import { AllCaps } from '../stories/components/MyLabel.stories';


export interface MyLabelProps {
    /**
    * Este es el mensaje de la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3' 
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

export const MyLabel = ({ 
        allCaps = false,
        color = 'primary',
        label = 'No Label', 
        size ,
        fontColor,
        backgroundColor = 'transparent'
    }: MyLabelProps) => {
    return (
        <span className={`label ${ size } text-${ color }`} style={{ color: fontColor, backgroundColor }}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
export default MyLabel;