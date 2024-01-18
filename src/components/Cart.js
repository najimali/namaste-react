import { useDispatch, useSelector } from "react-redux"
import "../styles/cart.css"
import CartItem from "./CartItem";
import BillDetails from "./BillDetails";
import CancellationPolicy from "./CancellationPolicy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faListUl, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { toggleCart } from "../reducer/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const handleCloseButton = () => {
        dispatch(toggleCart())
    }
    return (
        <div className="cart-container">
            <div className="cart-close">
                <div className="my-cart">My Cart</div>
                <FontAwesomeIcon icon={faCircleXmark} onClick={handleCloseButton}></FontAwesomeIcon>
            </div>

            {(cartItems || []).map((detail) => (<CartItem detail={detail} key={detail.id}></CartItem>))}
            <BillDetails></BillDetails>
            <CancellationPolicy/>
        </div>
    )
}
export default Cart