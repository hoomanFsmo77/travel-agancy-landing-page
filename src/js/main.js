import "bootstrap"
import Alpine from "alpinejs";
import Portfolio from "./components/Portfolio/Portfolio.js";
import '../style/main.scss';
import '../images/logo.png'
import '../images/intro.svg';
import '../images/service_1.svg';
import '../images/service_2.svg';
import '../images/service_3.svg';
import '../images/comment_1.jpg';
import '../images/comment_2.jpg';
import '../images/comment_3.jpg';
import '../images/travel_1.jpg';
import '../images/travel_2.jpg';
import '../images/travel_3.jpg';
import '../images/travel_4.jpg';
import '../images/nature_1.jpg';
import '../images/nature_2.jpg';
import '../images/nature_3.jpg';
import '../images/nature_4.jpg';
import '../images/tech_1.jpg';
import '../images/tech_2.jpg';
import '../images/tech_3.jpg';
import '../images/tech_4.jpg';
/////////////////////////////////////////////////
window.Alpine = Alpine
Alpine.data('portfolio',Portfolio)
Alpine.start()
