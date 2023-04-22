import "./CartWidget.css"

const CartWidget = () => {
    const imagenCarrito = "./carrri.jpg"
    return (
        <div>
            <img src={imagenCarrito} alt="carrito"></img>
        </div>
    );
}

export default CartWidget;
