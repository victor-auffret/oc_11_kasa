import { FunctionComponent, useMemo } from 'react';
import "./index.css"
import { NavLink } from 'react-router-dom';

interface IProps {
 code?: number,
 msg?: string
}

const defaultCode = 404
const defaultMsg = "Oups! La page que vous demandez n'existe pas."

const ErrorComponent: FunctionComponent<IProps> = (props: IProps) => {
 const code = useMemo(() => props?.code ?? defaultCode, [props.code])
 const Img404 = () => (<img className={`error-logo-404`} alt="error 404" src={"/assets/img/404.svg"} />)
 return <div className={`error-container`}>
  {code === defaultCode ? <Img404 /> : <h3 className={`error-titre`} >{code}</h3>}
  <p className={`error-msg`}>{defaultMsg}</p>
  <NavLink className={`error-back`} to={'/'}>Retourner sur la page d’accueil</NavLink>
 </div>
}

export { ErrorComponent }
