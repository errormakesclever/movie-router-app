

import { Link } from 'react-router-dom';


function Movies(props) {
    const { imageArray } = props;
    return (
        <div className="container">
            <h3>Movies</h3>
            <div className="imageBg">
                {
                    imageArray.map(function (im) {
                        return (
                            <div className="imageBg-Div" key={im.id}>
                                <Link to={`/details/${im.id}`} style={{ textDecoration: "none" }}>
                                    <img src={im.imag} alt={im.imag} />
                                    <h3>{im.moviename}</h3>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Movies 