import './mylabel.css'

interface Props {
    /**
     * Mensaje a mostrar en la etiqueta
     */
    label?: string;
    /**
     * Tamaño por defecto del label
     */
    size?: 'normal'|'h1'|'h2'|'h3';
    /**
     * Letra capitalizada
     */
    allCaps?: boolean;
    /**
     * Color del label
     */
    color?: 'primary'|'secondary'|'tertiary';
    /**
     * Color personalizado  del label
     */
    customFontColor?: string;
    
  }


export const MyLabel = ( {
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    customFontColor,
    ...props
}: Props ) => {

  return (
    <span
        className={` label ${ size } text-${ color }`}
        style={{ color: `${ customFontColor }` }}
        {...props}
    >
        { !allCaps ? label : label.toUpperCase() }
    </span>
  )
}
