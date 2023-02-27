import { useParams } from "react-router-dom";


export const Movie = () => {

    //console.log(useParams());
    const {id} = (useParams());

    return(
        <div>
            <p>movie id = {id}</p> 
        </div>
    );
};