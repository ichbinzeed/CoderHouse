import Carrito from "./carrito.png"

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} className="w-[2rem] h-[2rem] mr-[2rem]"></img>
            <strong>3</strong>
        </div>
    );
}

export default CartWidget;
