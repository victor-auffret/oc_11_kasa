import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import "./index.css";

interface IProps {
 images: string[]
}

const CarouselComponent: FunctionComponent<IProps> = (props: IProps) => {
 const [index, setIndex] = useState(0)

 const nbImage = useMemo(() => {
  return props.images.length
 }, [props.images])

 const currentImage = useMemo(() => {
  return (nbImage > 0) ? props.images[index % nbImage] : null
 }, [index, nbImage])

 const next = useCallback(() => {
  setIndex(v => (v + 1) % nbImage)
 }, [])

 const prev = useCallback(() => {
  setIndex(v => (nbImage + v - 1) % nbImage)
 }, [])

 return <div className={`carousel`}>
  <button onClick={prev}>précédent</button>
  {currentImage}
  <button onClick={next}>suivant</button>
 </div>
}

export { CarouselComponent }