import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header>
                <Link to="/" className="logo">REACT STOCK</Link>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/items">Items</Link>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
            <footer>
                <span>Feito com React Router</span>
            </footer>
        </>
    )
}