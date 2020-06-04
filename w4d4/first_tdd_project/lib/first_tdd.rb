class Array

    def remove_dups
        unique = []
        self.each  {|ele| unique << ele if !unique.include?(ele)}
        unique
    end


    def two_sum
        pairs = []
        self.each_with_index do |ele1, i|
            self.each_with_index do |ele2, j|
                if j > i
                    pairs << [i, j] if ele1 + ele2 == 0
                end
            end
        end
        pairs
    end


    def my_transpose
        return self if self.length == 0
        length = self[0].length
        grid = Array.new(length) { Array.new(length) }
        length.times do |i|
            length.times do |j|
                grid[j][i] = self[i][j]
            end
        end
        grid
    end


    #stock prices => [140, 150, 10, 2, 6, 123, 89, 23, 1]
    def stock_picker
        return self if empty?
        day0 = nil
        day1 = nil
        diff = 0
        (0...self.length).each do |i|
            (0...self.length).each do |j|
                if j > i && self[j] - self[i] > diff
                    day0, day1 = i, j
                    diff = self[j] - self[i]
                end
            end
        end
        [day0, day1]
    end



end