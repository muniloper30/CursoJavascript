const logger = require ('./logger');

function errorPersonalizado(){
    throw new Error("Soy un error personalizado jiji")
}

try {
   errorPersonalizado();
} catch (e) {
    logger.error("ERROR!", e.toString())
}