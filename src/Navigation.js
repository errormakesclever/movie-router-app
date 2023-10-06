import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <div className="navigation">
            <Link to='/' style={{textDecoration:"none",color:"white"}}><h2>Movie App</h2></Link>
            
        </div>
    )
}
export default Navigation