import { Children, FunctionComponent, useCallback, useMemo, useState } from 'react';
import "./index.css"

interface IProps {
 titre: string,
 children: any[] | any
}

const AccordeonComponent: FunctionComponent<IProps> = (props: IProps) => {

 //console.log("accordeon props : ", props)
 const [visible, setVisible] = useState(false)

 const toggle = useCallback(() => {
  setVisible(v => !v)
 }, [])

 const Infos = useMemo(() => {
  return (<div className={`accordeon-contenu`}>
   {
    Array.isArray(props.children) ?
     props.children.map((e, k) => <p key={`${props.titre}-${k}`}>{e}</p>) :
     props.children
   }
  </div>)
 }, [props.titre, props.children])

 return <div className={`accordeon`}>
  <header className={`accordeon-header`} onClick={toggle}>
   <h5>{props.titre} </h5>
   <span className={`icon-chevron icon-chevron-${visible ? "up" : "down"}`}></span>
  </header>
  {visible === true ? Infos : null}
 </div>
}

export { AccordeonComponent }
