
import Product from './Product'
import './ProductTab.css'
function ProductTab()
{
 
    return(
        <div>
             <Product title='Logitech master' index={0}></Product>
             <Product title='apple pencil' index={1}></Product>
             <Product title='zebronics' index={2}></Product>
        </div>
       
    )
}

export default ProductTab