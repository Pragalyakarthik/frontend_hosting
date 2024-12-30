function List()
{
    return(
        <div>
        <h1>Display Fruits, Vegetables and Birds</h1>
        <ol type="1">
             <li>Fruits</li>

        <ul type="square">
            <li>Mango</li>
            <li>Apple</li>
            <li>Orange</li>
        </ul>
        
            <li>Vegetables</li>
            <ol type ="i">
            <li>Potato</li>
            <li>Carrot</li>
            <li>BeetRoot</li>
            </ol>
            <li>Birds</li>
            <ul >
            <li>Parrot</li>
            <li>Peacock</li>
            <li>Crow</li>
            </ul>
        </ol>
        </div>
    )
}
export default List;