import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarouselComponent } from '../../components/carousel';
import { AccordeonComponent } from '../../components/accordeon';
import { LogementInfosComponent } from '../../components/logement-infos';

import { Logement } from '../../models/logement';
import { useLocations } from '../../hooks/useLocations';

import "./index.css"


interface IParams {
 id: string
}

const PageLogement: FunctionComponent = () => {
 const params: Partial<IParams> = useParams()
 const logements: Logement[] = useLocations()
 const [logement, setLogement] = useState<Logement | null>(null)
 const navigate = useNavigate()

 useEffect(() => {
  if (logements.length > 0) {
   const loc = logements.find(l => l.id === params.id)
   if (loc) {
    setLogement(loc)
   } else {
    navigate('/404')
   }
  }
 }, [navigate, params.id, logements])

 return <div className={`logement-container`}>
  {
   logement != null ? (
    <>
     <CarouselComponent images={logement?.pictures ?? []} />

     <LogementInfosComponent logement={logement} />

     <section className={`logement-contenu`}>
      <AccordeonComponent titre={`Description`}>
       {logement?.description}
      </AccordeonComponent>

      <AccordeonComponent titre={`Equipements`}>
       {logement?.equipments}
      </AccordeonComponent>
     </section>

    </>
   ) : null
  }
 </div>
}

export { PageLogement }
