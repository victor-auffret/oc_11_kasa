import { FunctionComponent } from 'react';
import { TagComponent } from '../tag';

import "./index.css";

interface IProps {
 tags: string[]
}

const TagListComponent: FunctionComponent<IProps> = ({ tags }: IProps) => {
 return <div className={`logement-infos-tags`}>
  {tags?.map((tag, i) => <TagComponent key={`tag-${tag}-${i}`} tag={tag} />)}
 </div>
}

export { TagListComponent }
