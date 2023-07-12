import { FunctionComponent, useState } from 'react';
import { PaysageComponent } from '../components/paysage';
import { AccordeonComponent } from '../components/accordeon';

import "./about.css";

const ABOUT = [
 {
  titre: "Fiabilité",
  contenu: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
 },
 {
  titre: "Respect",
  contenu: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
 },
 {
  titre: "Service",
  contenu: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
 },
 {
  titre: "Sécurité",
  contenu: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
 }
]

const PageAbout: FunctionComponent = () => {
 const [data] = useState(ABOUT)
 return <div>
  <PaysageComponent image="montagne" />
  <section className={`about-accordeon`}>
   {
    data.map((acc, i) => (
     <AccordeonComponent key={`about-${acc.titre}-${i}`} titre={acc.titre}>
      {acc.contenu}
     </AccordeonComponent>)
    )
   }
  </section>
 </div>
}

export { PageAbout }
