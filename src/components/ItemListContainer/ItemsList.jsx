import Items from "./Items";

function ItemsList({ itemsList = [] }) {
    return (
        <section style={{
            display: "flex",
            padding:"2rem",
            flexDirection: "initial",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
        }}>
            {itemsList.map((item) => {
                const createdItem = new Date(item.created);
                return (
                    <Items
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                    />
                );
            })}
        </section>
    );
}

export default ItemsList;