import './Item.css';
function Item(props){
    const name=props.name;
    return (
        <div>
    <div className="Item">{name}</div>
    {props.children};
    </div>
    );
}
export default Item;