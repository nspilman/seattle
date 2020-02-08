import districtOne from "../assets/images/District1Card.png";
import districtTwo from "../assets/images/District2Card.png";
import districtThree from "../assets/images/District3Card.png";
import districtFour from "../assets/images/District4Card.png";
import districtFive from "../assets/images/District5Card.png";
import districtSix from "../assets/images/District6Card.png";      
import districtSeven from "../assets/images/District7Card.png";      
import allDistricts from "../assets/images/AllSeattleCard.png";

const backgroundImageHash = {
    0 : allDistricts,
    1 : districtOne,
    2 : districtTwo,
    3 : districtThree,
    4 : districtFour,
    5 : districtFive,
    6 : districtSix,
    7 : districtSeven,
}

export default (district) => {
    return backgroundImageHash[district]
}