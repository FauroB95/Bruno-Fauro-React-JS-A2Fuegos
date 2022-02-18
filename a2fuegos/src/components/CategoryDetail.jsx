import { React } from 'react';
import ItemListContainer from './ItemListContainer';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
    const {filtro} = useParams();
    return (
        <div>
            <ItemListContainer />
            <h3>{filtro}</h3>
        </div>
    );
};

export default CategoryDetail;
