function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear;
    this.find = find
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;

    function append(element){
        this.dataStore[this.listSize++] = element;
    }

    function find(element){
        for(var i=0; i<this.dataStore.length; i++){
            if(this.dataStore[i] == element){
                return i;
            }
        }
        return -1;
    }

    function remove(element){
        var fountAt = this.find(element);
        if(fountAt > -1) {
            this.dataStore.splice(fountAt,1);
            this.listSize--;
            return true;
        }
        return false;
    }

    function length(){
        return this.listSize;
    }

    function toString(){
        return this.dataStore;
    }

    function insert(element, after){
        var insertPos = this.find(after);
        if(insertPos > -1){
            this.dataStore.splice(insertPos+1, 0, 1);
            this.listSize++;
            return true;
        }
        return false;
    }

    function clear(){
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }

    function contains(element){
        for(var i=0; i<this.dataStore.length; i++){
            if(dataStore[i] == elemen){
                return true;
            }
        }
        return false;
    }

    function front(){
        this.pos = 0;
    }

    function end(){
        this.pos = this.listSize - 1;
    }

    function prev(){
        if(this.pos > 0){
            --this.pos;
        }
    }
    
    function next(){
        if(this.pos <this.listSize-1){
            ++this.pos
        }
    }

    function currPos(){
        return this.pos;
    }

    function moveTo(position){
        this.pos = position;
    }

    function getElement(){
        return this.dataStore[this.pos]; 
    }

    function listRead(){
        for(this.front(); this.currPos()<this.dataStore.length; this.next()){
            console.log(name.getElement());
        }
    }

    function listReadReverse(){
        for(this.end(); this.currPos()>0; this.prev()){
            console.log(name.getElement());
        }
    }
}