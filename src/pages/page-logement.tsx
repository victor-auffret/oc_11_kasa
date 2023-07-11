import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useLogement } from '../hooks/useLogement';
import { CarouselComponent } from '../components/carousel';
import { AccordeonComponent } from '../components/accordeon';

interface IParams {
 id: string
}

const PageLogement: FunctionComponent = () => {
 const params: Partial<IParams> = useParams()
 const logement = useLogement(params?.id ?? "")
 // page logement : {logement != null ? JSON.stringify(logement) : null}
 return <div>


  <CarouselComponent images={logement?.pictures ?? []} />

  <div>
   <h4>titre</h4>
   <h5>lieu</h5>
   <p>tags</p>

   <p>auteur</p>
   <span>image</span>

   <p>etoiles</p>
  </div>

  <AccordeonComponent titre={`Description`}>
   {logement?.description}
  </AccordeonComponent>

  <AccordeonComponent titre={`Equipements`}>
   {logement?.equipments}
  </AccordeonComponent>
 </div>
}

export { PageLogement }
