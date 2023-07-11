import { useEffect, useState } from "react";
import { Logement } from "../models/logement";

const useLocations = () => {
 const [locations, setLocations] = useState<Logement[]>([])
 useEffect(() => {

  const controller = new AbortController();
  const signal = controller.signal;
  const url = "/assets/json/logements.json"

  fetch(url, {
   signal,
   headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }
  })
   .then(res => res.json())
   .then(data => setLocations(data))
   .catch((e) => {
    controller.abort(`catch fetch : ${e}`)
   })

  return () => controller.abort()

 }, [])
 return locations;
}

export { useLocations }
