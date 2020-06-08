class HashSet
  attr_accessor :count, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    return false if self.include?(key)
    self[key.hash] << key
    self.count += 1
    resize! if num_buckets < self.count
  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    return false if !self.include?(key)
    self[key.hash].delete(key) 
    self.count -= 1
  end

  private

  def [](num)
    self.store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = self.store.dup
    self.count = 0
    self.store = Array.new(num_buckets * 2) { Array.new }
    old_store.flatten.each { |ele| self.insert(ele) }
  end
end
