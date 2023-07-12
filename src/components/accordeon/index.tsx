import { Children, FunctionComponent, useCallback, useMemo, useState } from 'react';
import "./index.css"
import { useAccordeon } from '../../hooks/useAccordeon';
import type { Child } from '../../hooks/useAccordeon';

interface IProps {
  titre: string,
  children: Child[] | Child
}

const AccordeonComponent: FunctionComponent<IProps> = (props: IProps) => {

  //console.log("accordeon props : ", props)
  const { visible, Infos, toggle } = useAccordeon(props.titre, props.children)

  return <article className={`accordeon ${visible ? 'accordeon-gris' : ''}`}>
    <header className={`accordeon-header`} onClick={toggle}>
      <h5 className={`accordeon-title`}>{props.titre} </h5>
      <span className={`icon-chevron icon-chevron-${visible ? "up" : "down"}`}></span>
    </header>
    {visible === true ? Infos : null}
  </article>
}

export { AccordeonComponent }
