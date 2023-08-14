import ZapatillasRunningMujerAdidasGalaxy6 from "./images/zapatillas-running-mujer-adidas-galaxy-6.avif";
import CalzasEssentials3TirasNegroAdidas from "./images/Calzas_Essentials_3_Tiras_Negro.avif";
import RemeraRunNegro from "./images/Remera_Run_Negro.avif";
import BuzoEssentialsRosa from "./images/Buzo_Essentials_Rosa.avif";

const items = [{
        id: "1",
        img: RemeraRunNegro,
        title: "Remera running ligera y transpirable.",
        description: "Remera de running adidas que te dará comodidad y frescura.",
        category: "Mujer, Ropa, Running",
        price: "18.000"
    },
    {
        id: "2",
        img: BuzoEssentialsRosa,
        title: "Buzo clásico con infinitas opciones de estilo.",
        description: "Confeccionado en felpa francesa de algodón, muy suave contra la piel.",
        category: "Mujer, Ropa",
        price: "28.000"
    },
    {
        id: "3",
        img: CalzasEssentials3TirasNegroAdidas,
        title: "Calza elástica con un clasico estilo deportivo.",
        description: "La versatilidad para el día a día se combina con el estilo clásico.",
        category: "Mujer, Ropa",
        price: "18.500"
    },
    {
        id: "4",
        img: ZapatillasRunningMujerAdidasGalaxy6, 
        title: "Zapatillas Running Mujer Adidas Galaxy 6 Negro.",
        description: "Unas zapatillas cómodas diseñadas para todo tipo de actividades.",
        category: "Mujer, Zapatilla, Running",
        price: "28.500"
    }
]
export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items);
        }, 2000)
    })
}