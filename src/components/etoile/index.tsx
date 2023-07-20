
import { FunctionComponent, useMemo } from 'react';
import "./index.css";

/*
const DOSSIER = "/assets/img/"
const PLEIN = `${DOSSIER}etoile_plein.svg`
const VIDE = `${DOSSIER}etoile_vide.svg`
*/
interface IProps {
 vide: boolean
}

const EtoileComponent: FunctionComponent<IProps> = ({ vide }: IProps) => {
 const plein = useMemo(() => {
  return `etoile-${vide ? "vide" : "plein"}`
 }, [vide])
 return <div className={`etoile ${plein}`}></div>
}

export { EtoileComponent }