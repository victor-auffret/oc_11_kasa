import { FunctionComponent, useCallback, useMemo, useState } from 'react';
import "./index.css";

interface IProps {
  images: string[]
}

const CarouselComponent: FunctionComponent<IProps> = ({ images }: IProps) => {

  const [index, setIndex] = useState(0)

  const style = useMemo(() => {
    const currentImage = (images.length > 0) ? images[index % images.length] : null
    return {
      backgroundImage: `url(${currentImage})`
    }
  }, [index, images])

  const BtnPrev = () => {
    const prev = useCallback(
      () => setIndex(v => Number((images.length + v - 1) % images.length)),
      []
    )
    return images.length > 1 ?
      <button onClick={prev} className={`carousel-btn carousel-prev`}></button> : null
  }

  const BtnNext = () => {
    const next = useCallback(
      () => setIndex(v => Number((v + 1) % images.length)),
      []
    )
    return images.length > 1 ?
      <button onClick={next} className={`carousel-btn carousel-next`}></button> : null
  }

  return <div className={`carousel`} style={style}>
    <BtnPrev />
    <div className={`carousel-count`}>{Number(index) + 1} / {images.length}</div>
    <BtnNext />
  </div>
}

export { CarouselComponent }