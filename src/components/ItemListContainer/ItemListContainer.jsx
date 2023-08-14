import "./ItemListContainer.css";
import { useEffect, useState } from 'react';
import { getItems } from '../Mocks/asyncMock';
import ItemsList from "./ItemsList";
import Loader from "./Loader";

function ItemListContainer() {

    const [isLoading, setIsLoading] = useState(true);

    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
            .then((response) => {
                console.log(response)
                setItems(response);
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));
    })

    if (isLoading) return <Loader />;

    return (
        <main>
            <ItemsList itemsList={items} />
        </main>
    );
}
export default ItemListContainer;

