import "./CartWidget.css"
import Carrito from "./carrito.png"

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} className="carrito"></img>
        </div>
    );
}

export default CartWidget;
