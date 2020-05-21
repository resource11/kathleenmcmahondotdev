import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faAccessibleIcon,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons"

const fontLibrary = library

fontLibrary.add(
  fab,
  faAccessibleIcon,
  faArrowRight,
  faChevronRight,
  faInstagram,
  faGithub,
  faLinkedin,
  faTwitch,
  faTwitter
)

export default fontLibrary
