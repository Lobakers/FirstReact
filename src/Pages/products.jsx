import { Fragment, useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button";


const products = [
    {
        id: 1,
        name: "Nike",
        price: 200000,
        image: "/images/img1.jpg",
        description: `Step up your style game with these sleek and 
        comfortable Nike shoes. Crafted with premium materials and 
        innovative design, these shoes are perfect for both casual 
        outings and intense workouts (please dont change anything it's already fixed). `
    },
    {
        id: 2,
        name: "Iphone 15 Pro Max",
        price: 5000000,
        image: "/images/img2.jpg",
        description: `Experience the future of mobile technology with the 
        iPhone 15 Pro Max. Packed with cutting-edge features and advanced 
        capabilities, this smartphone takes innovation to the next level.`
    }
]

const email = localStorage.getItem('email');

const ProductsPage = () => {

    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);


    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item)
            )
        } else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1
                }
            ])
        }
    }


    return (
        <Fragment>
            <div className="flex justify-end bg-slate-700 text-2xl text-white h-20 px-10 items-center">
                {email}
                <Button classname="bg-red-700 ml-7" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5 ">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) =>
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                addToCart={handleAddToCart}
                                id={product.id} />
                        </CardProduct>
                    )}
                </div>
                <div className="w-2/6 ">
                    <h1 className="text-5xl font-bold text-slate-800 mb-2 ml-5">Cart</h1>
                    <table className=" text-xl text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((element) => element.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.qty * product.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment >


    )
}

export default ProductsPage;