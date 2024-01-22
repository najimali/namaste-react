
import "../styles/best-places-to-eats.css"
const BestPlacesToEats = ({ data }) => {
    const title = data?.card?.card?.title
    const brands = data?.card?.card?.brands
    if (!brands?.length) return
    return (
        <div className="best-places-to-eats">
            <div className="header">
                {title}
            </div>
            <div className="content">
                {(brands || []).map(({ text, link }, index ) => (
                    <div className="text" key={index}>
                        {text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestPlacesToEats