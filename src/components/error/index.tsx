import { FunctionComponent } from 'react';
import "./index.css"
import { NavLink } from 'react-router-dom';

interface IProps {
 code?: number,
 msg?: string
}

const defaultCode = 404
const defaultMsg = "Oups! La page que vous demandez n'existe pas."

const ErrorComponent: FunctionComponent<IProps> = (props: IProps) => {
 return <div className={`error-container`}>
  <h3 className={`error-titre`} >{props.code ?? defaultCode} error</h3>
  <p className={`error-msg`}>{defaultMsg}</p>
  <NavLink to={'/'}>Retourner sur la page d’accueil</NavLink>
 </div>
}

export { ErrorComponent }
