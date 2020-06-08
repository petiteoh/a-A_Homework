class MaxIntSet
  attr_reader :store
  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" if num > @store.length || num < 0  
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] == false ? false : true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  attr_reader :store 
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @num_buckets = num_buckets
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    self.store[num % num_buckets]
  end

  def num_buckets
    self.store.length
  end
end

class ResizingIntSet
  attr_accessor :count, :store, :num_buckets

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
    @num_buckets = num_buckets
  end

  def insert(num)
    return false if self.include?(num)
    self[num] << num
    self.count += 1
    resize! if num_buckets < self.count 
  end

  def remove(num)
    self.count -= 1 if self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    self.store[num % num_buckets]
  end

  def num_buckets
    self.store.length
  end

  def resize!
    old_store = self.store.dup
    self.count = 0
    self.store = Array.new(num_buckets * 2) { Array.new }
    old_store.flatten.each { |ele| self.insert(ele) }
  end
end
