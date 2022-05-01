import "./style.css"
import { BsPlusCircle,BsDash } from 'react-icons/bs';
const Measurement = () => {
    return (
        <div className='Measurement flex'>
            <BsPlusCircle/>
            <span className='number'>1</span>
            <BsDash />
        </div>
    );
}

export default Measurement;
