import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toggleLocation } from "../reducer/locationSlice"
import { useDispatch } from "react-redux"
import "../styles/location.css"
import { useEffect, useState } from "react"
import { LOCATION_SUGGESTION_API_END_POINT, DEBOUNCE_DELAYS } from "../utils/constant"
import { debounce } from "../utils/debounce"
import useFetch from "../hooks/useFetch";

const Location = () => {
    const dispatch = useDispatch()
    const [autoCompleteUrl, setAutoCompleteUrl] = useState(LOCATION_SUGGESTION_API_END_POINT);
    const { data: suggestedPlaces } = useFetch(autoCompleteUrl)
    const [searchTerm, setSearchTerm] = useState('')
    const debounceSearchText = debounce(() => {
        setAutoCompleteUrl(`${LOCATION_SUGGESTION_API_END_POINT}${searchTerm}`)
    }, DEBOUNCE_DELAYS.SEARCH_INPUT);
    useEffect(() => {
        debounceSearchText();
        return () => debounceSearchText.cancel();
    }, [searchTerm]);
    return (
        <div className="location-container">
            <div className="close">
                <FontAwesomeIcon icon={faXmark} onClick={() => {
                    dispatch(toggleLocation())
                }}></FontAwesomeIcon>
            </div>
            <div className="search-box">
                <div className="input-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for area, street name.."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    >
                    </input>
                </div>
            </div>
            <div className="suggestion-list">
                {(suggestedPlaces || [])?.map(({ place_id, structured_formatting: { main_text, secondary_text } }) => (
                    <div className="place" key={place_id}>
                        <div className="title">
                            {main_text}
                        </div>
                        <div className="sub-title">
                            {secondary_text}
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default Location