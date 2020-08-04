import {forEachPolyfill} from './utils/polyfill-foreach';
import {initIe11Download} from './utils/init-ie11-download';
import {openSearch} from "./modules/openSearch";
import {bannerImageAnimate} from "./modules/bannerImageAnimate";
import {heightServicesList} from "./modules/heightServicesList";
import {reviewSlider} from "./modules/reviewSlider";
import {validateConsultForm} from "./modules/validateConsultForm.";
import {inputMaskPhone} from "./modules/inputMaskPhone";
import {getModal} from "./modules/getModal";
import {overlayOpenMenu} from "./modules/overlayOpenMenu";
import {fixHeader} from "./modules/fixHeader";
import {overlayOpenForm} from "./modules/overlayOpenForm";
import {validateRegularForm} from "./modules/validateRegularForm.";
import {faqAccordion} from "./modules/faqAccordion";
import {validateContactForm} from "./modules/validateContactForm";
import {requestServiceForm} from "./modules/requestServiceForm";
import {scrollToServicesList} from "./modules/scrollToServicesList";

// Utils
// ---------------------------------
forEachPolyfill();
initIe11Download();

// Modules
// ---------------------------------
overlayOpenMenu();
openSearch();
bannerImageAnimate();
heightServicesList();
reviewSlider();
inputMaskPhone();
getModal();
fixHeader();
overlayOpenForm();
faqAccordion();
validateRegularForm();
validateConsultForm();
validateContactForm();
requestServiceForm();
scrollToServicesList();
