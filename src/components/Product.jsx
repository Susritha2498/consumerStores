import "./Product.css"

const Product = (props)=>{
    const {item} = props
    return (
        <div className="ProductCard">
                <h2 id="ProductTitle">{item.node.title}</h2>
                <img className="ProductImage" id="prodImg" src={item.node.images.edges[0].node.originalSrc} alt={item.node.title}/>
        </div>

    )
}

export default Product