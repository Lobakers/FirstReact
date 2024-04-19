import Button from "../Elements/Button";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-400 rounded-lg-shadow mx-3 my-2 flex flex-col justify-between">
            {children}
        </div>

    )
}

const Header = (props) => {
    const { image } = props;
    return (
        <a href="">
            <img
                src={image}
                alt="product"
                className="p-8 rounded-t-lg"
            />
        </a>
    )
}


const Body = (props) => {
    const { name, children } = props;
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-3xl font-semibold tracking-tight text-white ml-3 my-4">
                    {name}
                </h5>
            </a>
            <p className="text-xl text-white mx-3 text-justify">
                {children}
            </p>
        </div>
    )
}

const Footer = ({ price, addToCart, id }) => {
    return (
        <div className="flex items-center justify-between mx-8 mb-3">
            <span className="text-3xl font-bold text-white">
                $ {price.toLocaleString('id-ID', { styles: 'currency', currency: "IDR" })}
            </span>
            <Button
                classname="text-black bg-lime-700"
                onClick={() => addToCart(id)}
            >Add to Cart</Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;