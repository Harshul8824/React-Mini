import './ItemDate.css';

function ItemDate(props){
    const name=props.name;
    const date=props.date;
    const month=props.month;
    const year=props.year;
  return (
    <div className='mfg-date'>
        <span className='date'>{date}</span>
        <span className='month'>{month}</span>
        <span className='year'>{year}</span>
    </div>
  );
}
export default ItemDate;
