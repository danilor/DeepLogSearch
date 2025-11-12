/************************************************************************
 * **********************************************************************
 *
 * The console class was made to control a lot of the console message functionality. Works
 * better in the dev environment and for debug purposes due to its nature.
 *
 *
 * **********************************************************************
 ***********************************************************************/


class ConsoleClass {


    /************************************************************************
     * Constructor.
     * It will start the time counting using the momentjs library
     * @link https://momentjs.com/
     ***********************************************************************/
    constructor() {

    }

    /**
     * If we call this, this should start saving everything to memory.
     */
    saveToMemory(){
        this.saveMemory = true;
    }

    /************************************************************************
     * Shorten for the con method.
     * @param t
     ***********************************************************************/
    c(t) {
        try {
            if (typeof t === 'string') {
                console.log(' ' + t);
            } else {
                console.log(t);
            }

        } catch (e) {

        }
        return this;
    }

    /************************************************************************
     * Shorten for the con method.
     * @param t
     ***********************************************************************/
    w(t) {
        try {
            if (typeof t === 'string') {
                console.warn(' ' + t);
            } else {
                console.warn(t);
            }

        } catch (e) {

        }
        return this;
    }

    /************************************************************************
     * Display line command console.
     * @param t
     ***********************************************************************/
    l(t) {

        if(typeof t === 'string'){
            try {
                console.log(' -' + t);
            } catch (e) {

            }
        }else{
            console.log(t);
        }
        return this;
    }

    /************************************************************************
     * Error method.
     * @param t
     ***********************************************************************/
    e(t) {
        if(typeof e === 'string'){
            try {
                console.error(' [ERROR] ' + t);
            } catch (e) {

            }
        }else{
            console.error(t);
        }
        return this;

    }

    /************************************************************************
     * Prints a general message
     * @param t
     * @deprecated
     ***********************************************************************/
    con(t) {
        return this.c(t);

    }

    /************************************************************************
     * Prints an space
     * @deprecated
     ***********************************************************************/
    space() {
        return this.s();
    }

    /************************************************************************
     * Shorter for space
     ***********************************************************************/
    s() {
        return this.c(' ');
    }

    /************************************************************************
     * Prints a level process. The higher the level, the far from the main line the text
     * will show up
     * @param t
     * @param l
     ***********************************************************************/
    level(t, l = 1) {
        const message = ('-').repeat(l) + ' ' + t;
        return this.con(message);
    }

    /************************************************************************
     * It prints the title
     * @param t
     ***********************************************************************/
    title(t, sideSpace = 6, sideCharacter = '▓', lineCharacter = '▓') {
        const titleSize = t.length;
        this.con(sideCharacter + lineCharacter.repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        // this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + (' ').repeat(sideSpace) + t + (' ').repeat(sideSpace) + sideCharacter);
        // this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + lineCharacter.repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        return this;
    }
}

module.exports = new ConsoleClass();
