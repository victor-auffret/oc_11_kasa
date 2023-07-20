import { FunctionComponent, useMemo } from 'react';
import "./index.css"
import { useAccordeon } from '../../hooks/useAccordeon';
import type { Child } from '../../hooks/useAccordeon';

interface IProps {
  titre: string,
  children: Child[] | Child
}

const AccordeonComponent: FunctionComponent<IProps> = (props: IProps) => {

  const { visible, Infos, toggle } = useAccordeon(props.titre, props.children)

  const classArticle = useMemo(() => {
    return `accordeon ${visible ? 'accordeon-gris' : ''}`
  }, [visible])

  const classChevron = useMemo(() => {
    return `icon-chevron icon-chevron-${visible ? "up" : "down"}`
  }, [visible])

  return <article className={classArticle}>
    <header className={`accordeon-header`} onClick={toggle}>
      <h5 className={`accordeon-title`}>{props.titre} </h5>
      <span className={classChevron}></span>
    </header>
    {visible === true ? Infos : null}
  </article>
}

export { AccordeonComponent }
