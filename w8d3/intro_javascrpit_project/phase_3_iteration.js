Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }
        }
    }

    return this;
};


def bubble_sort

sorted = false
    while !sorted
        sorted = true

        i = 0
        while i < self.length
            if self[i] > self[i + 1]
            self[i], self[i + 1] = self[i + 1], self[i]
            i += 1
            sorted = false
        end
    end

    self
end


String.prototype.substrings = function() {
    let arr = [];

    for(let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            arr.push(this.slice(i, j));
        }
    }
    
    return arr;
};

def substrings
    arr = []
    string_array = self.split

    string_array.each_with_index do |ele, i|
        self[i].length.times do |elei, j|
            arr < self[i..j]
end