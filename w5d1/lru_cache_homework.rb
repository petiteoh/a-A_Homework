class LRUCache
attr_reader :size 
attr_writer :set

    def initialize(size)
        @size = size
        @set = []
    end

    def count
        @set.count
    end

    def add(el)
        if @set.include?(el)
            @set.delete(el)
            @set << el
        elsif count >= @size
            @set.shift
            @set << el
        else
            @set << el
        end
    end

    def show
        p @set
    end

    private
    # helper methods go here!
end

#   p johnny_cache = LRUCache.new(4)
#   p johnny_cache.add("I walk the line")
#   p johnny_cache.add(5)
#   p johnny_cache.count # => returns 2
#   p johnny_cache.add([1,2,3])
#   p johnny_cache.add(5)
#   p johnny_cache.add(-5)
#   p johnny_cache.add({a: 1, b: 2, c: 3})
#   p johnny_cache.add([1,2,3,4])
#   p johnny_cache.add("I walk the line")
#   p johnny_cache.add(:ring_of_fire)
#   p johnny_cache.add("I walk the line")
#   p johnny_cache.add({a: 1, b: 2, c: 3})
#   p johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]