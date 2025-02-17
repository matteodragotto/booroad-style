import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import SearchTravelDetail from "../components/SearchTravelDetail"

import TravelDetailCard from "../components/TravelDetailCard"
import PartecipantsList from "../components/PartecipantsList"
import NewPartecipant from "../components/NewPartecipant"

const TravelDetail = () => {

  const { id } = useParams()
  const { setOriginalTravelDetail, fetchTravel } = useGlobalContext()

  useEffect(() => {
    if (id) {
      const selectedTravel = fetchTravel(id)
      setOriginalTravelDetail(selectedTravel)
    }
  }, [id])

  return (
    <div className="container py-5">
      <TravelDetailCard />
      <h2 className="mt-5 my-4 text-center ">Elenco partecipanti</h2>
      <SearchTravelDetail />
      <PartecipantsList />
      <NewPartecipant />
    </div>

  )
}

export default TravelDetail