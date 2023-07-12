import { useCallback, useMemo, useState } from "react"

type Child = JSX.Element | JSX.Element | string | null | undefined

const useAccordeon = (titre: string, children: Child[] | Child) => {
 const [visible, setVisible] = useState(false)

 const toggle = useCallback(() => {
  setVisible(v => !v)
 }, [])

 const Infos = useMemo(() => {
  return (<div className={`accordeon-contenu`}>
   {
    Array.isArray(children) ?
     children.map((e, k) => <p key={`${titre}-${k}`}>{e}</p>) :
     children
   }
  </div>)
 }, [titre, children])
 return { visible, Infos, toggle }
}

export { useAccordeon }
export type { Child }

