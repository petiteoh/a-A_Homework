#O(n^2) quadratic time
#O(1) constant space
def my_min_0(list)
    list.each do |ele, i|
        list.each do |ele1, j|
            min = ele if ele < ele1
        end
    end
    min
end

#O(n) linear time
#O(1) constant space
def my_min_1(list)
    min_ele = list.first
    list.each { |ele| min_ele = ele if ele < min_ele }
    min_ele 
end

#O(n^3) cubic time
#O(n^3) cubic space
def largest_contiguous_subsum_0(list)
    subsets = []

    (0...list.length).each do |i|
        (i...list.length).each do |j|
            subsets << list[i..j] if j > i
        end
    end

    subsets.map { |set| set.sum }.max
end

#O(n) linear time
#O(1) constant space
def largest_contiguous_subsum_1(list)
    largest_sum = list.first
    current_sum = list.first

    (1...list.length).each do |i|
        current_sum = 0 if current_sum < 0
        current_sum += list[i]
        largest_sum = current_sum if current_sum > largest_sum
    end

    largest_sum
end

list = [-5, -1, -3]
p largest_contiguous_subsum_1(list) # => 8 (from [7, -6, 7])