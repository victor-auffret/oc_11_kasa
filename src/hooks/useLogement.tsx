import { useMemo } from "react"
import { useLocations } from "./useLocations"

const useLogement = (id: string) => {
 const locations = useLocations()
 const logement = useMemo(() => {
  const res = locations.find(loc => loc.id === id)
  return res ? res : null
 }, [locations])
 return logement
}

export { useLogement }
