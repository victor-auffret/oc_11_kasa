import { FunctionComponent } from 'react';
import { PaysageComponent } from '../../components/paysage';
import { CardList } from '../../components/card-list';
import "./index.css";

const PageHome: FunctionComponent = () => {
 return <div className={`home`}>
  <PaysageComponent image='cote' titre='Chez vous, partout et ailleurs' />
  <CardList />
 </div>
}

export { PageHome }