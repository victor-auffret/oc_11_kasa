import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import "./index.css"

interface IProps {
 titre: string,
 contenu: string
}

const AccordeonComponent: FunctionComponent<IProps> = (props: IProps) => {

 const [visible, setVisible] = useState(false)

 const toggle = useCallback(() => {
  setVisible(v => !v)
 }, [])

 const Infos = useMemo(() => {
  return <div className={`accordeon-contenu`}>
   {props.contenu}
  </div>
 }, [])

 return <div className={`accordeon`}>
  <header className={`accordeon-header`} onClick={toggle}>
   <h5>{props.titre} </h5>
   <span className={`icon-chevron icon-chevron-${visible ? "up" : "down"}`}></span>
  </header>
  {visible === true ? Infos : null}
 </div>
}

export { AccordeonComponent }
