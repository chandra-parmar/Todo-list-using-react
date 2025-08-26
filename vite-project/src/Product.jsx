
import Price from './Price'
import './Product.css'
function Product({title,index})
{
    let oldPrices =['499','899','799']
    let newPrices =['399','799','466']
    let description =['fast','slow','good']
    return(
        <div className="Product">
          <h3>{title}</h3>
         <p>{description[index]}</p>
         <Price oldPrice ={oldPrices[index]} newPrice={newPrices[index]}/>

        </div>
    )
}

export default Product