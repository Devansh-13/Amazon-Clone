import NavBar from "../../common/navbar/navbar";
import { useState } from "react";

const data=[
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
];

const Products=()=>{
    const [searchText,setSearchText]=useState("ABc");
    const [products,setProducts]=useState(data);

    const filteredProducts=products.filter(product =>
        product.name.toLowerCase().startsWith(searchText.toLowerCase())
    );

    return (
        <>
        <NavBar searchText={searchText}  setSearchText={setSearchText}/>
        { searchText===""?
            products.map((product)=>{
                return (
                    <div key={product.id}>{product.name}</div>
                )
            }):
            filteredProducts.map((product)=>{
                return (
                    <div key={product.id}>{product.name}</div>
                )
            })
        }
        </>
        

    )
}
export default Products;