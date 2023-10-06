
import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails(props) {
    const { imageArray } = props;
    const { id } = useParams();
    var findVal = imageArray.filter(function (data) {
        if (Number(data.id) === Number(id)) {
            return true
        }
    })[0]
    return (
        <div>
            <img src={findVal.imag} className='detailImg1'></img>
            <div className='detailImg'>
                <div className='descriptionImage'>
                    <h1>{findVal.moviename}</h1>
                    <h4>{findVal.description}</h4>
                    <button className='btn btn-light'>Watch Now</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
