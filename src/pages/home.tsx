import { FunctionComponent } from 'react';
import { PaysageComponent } from '../components/paysage';
import { CardList } from '../components/card-list';

const PageHome: FunctionComponent = () => {
 return <div>
  <PaysageComponent image='cote' titre='Chez vous, partout et ailleurs' />
  <CardList />
 </div>
}

export { PageHome }