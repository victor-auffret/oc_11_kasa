import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useLogement } from '../hooks/useLogement';
import { CarouselComponent } from '../components/carousel';
import { AccordeonComponent } from '../components/accordeon';
import { LogementInfosComponent } from '../components/logement-infos';

import "./logement.css"


interface IParams {
 id: string
}

const PageLogement: FunctionComponent = () => {
 const params: Partial<IParams> = useParams()
 const logement = useLogement(params?.id ?? "")

 return <div>
  <CarouselComponent images={logement?.pictures ?? []} />

  {logement != null ? <LogementInfosComponent logement={logement} /> : null}

  <section className={`logement-contenu`}>
   <AccordeonComponent titre={`Description`}>
    {logement?.description}
   </AccordeonComponent>

   <AccordeonComponent titre={`Equipements`}>
    {logement?.equipments}
   </AccordeonComponent>
  </section>

 </div>
}

export { PageLogement }
