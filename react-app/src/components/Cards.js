import './Cards.css';
function Cards(props){
    return (
        <div className='cardcss'>
            {props.children}
        </div>    
    );
}
export default Cards;