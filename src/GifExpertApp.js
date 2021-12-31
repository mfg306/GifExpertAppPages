import React , {useState} from "react";
import AddCategory from "./components/AddCategory";

export const GifExpertApp = () => {
    const categories = ['One punch', 'Samurai X', 'Dragon Ball']

    /*const handleAdd = () => {
        setCategories ( [...categories, 'PRUEBA'] );
    }*/

    return (<>
        <h2>GifExpertApp</h2>
        <AddCategory />
        <hr/>
        <ol>
            { categories.map( ( category, i ) => {
                return <li key={ i }> { category }</li>
            } ) }
        </ol>
    </>)

}


export default GifExpertApp
