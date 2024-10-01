import ReactStars from "react-rating-stars-component";
import React from "react";
import { Star, StarHalf } from 'lucide-react'; 
import '../previewComponents/style.css'

const StarsComponent = ({ value, onChange }) => {

    return (
        <div>
            <ReactStars
                value={value}
                count={5}
                onChange={onChange}
                size={24}
                isHalf={true}
                emptyIcon={<Star className="text-gray-400" />}  
                halfIcon={<StarHalf className="text-yellow-500" />} 
                fullIcon={<Star className="text-yellow-500" />} n
                activeColor="#ffd700"
            />
        </div>
    );
}

export default StarsComponent;
