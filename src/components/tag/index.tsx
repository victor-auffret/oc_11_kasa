import { FunctionComponent } from 'react';
import "./index.css";

interface IProps {
 tag: string
}

const TagComponent: FunctionComponent<IProps> = ({ tag }: IProps) => {
 return <span className={`tag`}>{tag}</span>
}

export { TagComponent }
