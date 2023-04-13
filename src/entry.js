import { BODY } from "./constants"
import { navbar } from "./elements/navbar"
import { home } from "./pages/home"

BODY.prepend(navbar)
BODY.append(home)
