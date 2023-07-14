import { FunctionComponent } from 'react';

import { Logement } from '../../models/logement';

import { LogementHostComponent } from '../logement-host';
import { EtoileListComponent } from '../etoile-list';
import { TagListComponent } from '../tag-list';

import "./index.css";
import { LogementIntituleComponent } from '../logement-intitule';

interface IProps {
 logement: Logement
}

const LogementInfosComponent: FunctionComponent<IProps> = ({ logement }: IProps) => {
 return <div className={`logement-infos`}>

  <LogementIntituleComponent titre={logement?.title} lieu={logement?.location} />

  <LogementHostComponent name={logement?.host?.name} picture={logement?.host?.picture} />

  <TagListComponent tags={logement?.tags} />

  <EtoileListComponent rate={Number(logement?.rating ?? 0)} />

 </div>
}

export { LogementInfosComponent }