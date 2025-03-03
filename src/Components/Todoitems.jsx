import '../CSS/Todoitems.css';
import tick from '../assets/correct_colored.png'
import not_tick from '../assets/correct.png'
import cross from '../assets/close.png'
const Todoitems = ({no,display,text}) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
      <img src={not_tick} alt="" width="35" height="35" />
        <img src={tick} alt="" width="35" height="35"/>
        <div className="todoitems-text">{text}</div>
      </div>
        <img src={cross} alt="" width="35" height="35"/>
    </div>
  )
}

export default Todoitems
