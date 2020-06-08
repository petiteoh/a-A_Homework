class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    count = 0
    self.each_with_index do |ele, idx|
      count += (ele + idx).hash
    end
    count
  end
end

class String
  def hash
    ord_arr = self.split("").map { |char| char.ord }
    count = 0
    ord_arr.each_with_index { |ord, idx| count += (ord + idx).hash }
    count
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    count = 0
    self.each do |k, v|
      count += (k.hash + v.ord).hash
    end
    count
  end
end
