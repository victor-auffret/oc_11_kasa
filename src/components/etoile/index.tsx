
import { FunctionComponent, useMemo } from 'react';
import "./index.css";

const DOSSIER = "/assets/img/"
const PLEIN = `${DOSSIER}etoile_plein.svg`
const VIDE = `${DOSSIER}etoile_vide.svg`

interface IProps {
 vide: boolean
}

const EtoileComponent: FunctionComponent<IProps> = ({ vide }: IProps) => {
 const style = useMemo(() => {
  return {
   backgroundImage: `url(${vide ? VIDE : PLEIN})`
  }
 }, [vide])

 return <div className={`etoile`} style={style}></div>
}

export { EtoileComponent }