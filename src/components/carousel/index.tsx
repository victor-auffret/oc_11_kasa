import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import "./index.css";

interface IProps {
 images: string[]
}

const CarouselComponent: FunctionComponent<IProps> = (props: IProps) => {

 const [index, setIndex] = useState(0)

 const currentImage = useMemo(() => {
  return (props.images.length > 0) ? props.images[index % props.images.length] : null
 }, [index, props.images.length])

 const next = useCallback(
  () => setIndex(v => Number((v + 1) % props.images.length)),
  [props.images.length]
 )

 const prev = useCallback(
  () => setIndex(v => Number((props.images.length + v - 1) % props.images.length)),
  [props.images.length]
 )

 const style = useMemo(() => {
  return {
   backgroundImage: `url(${currentImage})`
  }
 }, [currentImage])

 return <div className={`carousel`} style={style}>
  <button onClick={prev}>précédent</button>
  {Number(index) + 1} / {props.images.length}
  <button onClick={next}>suivant</button>
 </div>
}

export { CarouselComponent }