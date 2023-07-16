import { FunctionComponent, useMemo } from 'react';
import "./index.css";

interface IProps {
 picture: string,
 name: string
}

const AvatarComponent: FunctionComponent<IProps> = ({ picture }: IProps) => {
 const style = useMemo(() => {
  return {
   backgroundImage: `url(${picture})`
  }
 }, [picture])
 return (<div className={`avatar-container`} style={style}></div>)
}

export { AvatarComponent }
