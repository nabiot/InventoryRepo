import './inventoryComponent.css';

function Inventory(props) {
    return(
        <div className = "inventory">
            <div>
                <h1>Name: {props.name} </h1>
            </div>
            <div>
                <h1>Price: {props.Price} </h1>
            </div>
            <div>
                <h1>Stock count: {props.StockCount} </h1>
            </div>
            
        </div>
    )
}

export default Inventory;