/**
 * FIFO Class
 * First In First Out data structure
 * with max size
 */

class FIFO{

    maxSize = 99999;

    /**
     * Constructor
     */
    constructor(){
        this.items = [];
    }

    /**
     * Set the max size
     * @param size
     */
    setMaxSize(size){
        this.maxSize = size;
    }

    /**
     * Get the max size
     * @returns {number}
     */
    getMaxSize(){
        return this.maxSize;
    }

    /**
     * Push an item to the FIFO
     * @param item
     */
    push(item){
        this.items.push(item);
        if(this.items.length > this.maxSize){
            this.items.shift();
        }
    }

    /**
     * Check if FIFO is empty
     * @returns {boolean}
     */
    isEmpty(){
        return this.items.length === 0;
    }


    /**
     * Get all items
     * @returns {[]}
     */
    getItems(){
        return this.items;
    }

    /**
     * Get the size
     * @returns {number}
     */
    size(){
        return this.items.length;
    }

    /**
     * Peek the first item
     * @returns {*|null}
     */
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[0];
    }

    /**
     * Peek the last item
     * @returns {*|null}
     */
    peekLast(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length - 1];
    }

    /**
     * Peek at specific index
     * @param index
     * @returns {*|null}
     */
    peekAt(index){
        if(this.isEmpty() || index < 0 || index >= this.items.length){
            return null;
        }
        return this.items[index];
    }

    /**
     * Take the first item
     * @returns {*|null}
     */
    take(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.shift();
    }

}

module.exports = FIFO;