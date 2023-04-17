
import ProductList from "./ProductList";
import "./HomePage.css"
const HomePage = (props)=>{


    return (
        <div className="HomePage">
            <header>Welcome</header>
            <ProductList client={props.client}/>
            <footer>Copyrights@2023</footer>
        </div>
    )
}

export default HomePage