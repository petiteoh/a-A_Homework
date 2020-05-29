class Stack
    def initialize
      @stack_array = []
    end

    def stack_array
        @stack_array
    end

    def push(el)
      stack_array.push(el)
    end

    def pop
        stack_array.pop
    end

    def peek
        stack_array.last
    end
  end

  class Queue
    def initialize
        @queue_array = []
    end

    def queue_array
        @queue_array
    end

    def enqueue(el)
        queue_array.unshift(el)
    end

    def dequeue
        queue_array.shift
    end

    def peek
        queue_array.first
    end
  end

  class Map
    def initialize 
        @map_array = []
    end

    def map_array
        @map_array
    end

    def set(key, value)
        pair_index = map_array.index { |pair| pair[0] == key }
        if pair_index
            map_array[pair_index] = value
        else
            map_array << [key, value]
        end
        value
    end

    def get(key)
        map_array.each { |pair| return pair[1] if pair[0] == key }
        nil
    end

    def delete(key)
        value = get(key)
        map_array.reject! { |pair| pair[0] == key }
        value
    end
  end