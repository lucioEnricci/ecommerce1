/*########################################
                    Importaciones
##########################################*/
//Modulos

//Estilos
import './ItemCategoryContainer.css';

//Componentes
import { useParams } from 'react-router-dom';
import ItemCategory from '../itemCategory/ItemCategory.js'


/*########################################
                    Logica
##########################################*/
const ItemCategoryContainer = () => {
    
    const { categoryId }=  useParams();

    
    return (
        <div>
            <ItemCategory category={categoryId}/>
        </div>
    )
};

/*########################################
                    Exportaciones
##########################################*/
export default ItemCategoryContainer;