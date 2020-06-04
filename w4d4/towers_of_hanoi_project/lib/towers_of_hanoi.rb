class TowersOfHanoi
    def initialize()
        @board = Array.new(3) {Array.new()}
        @board[0].concat((0..2).to_a.reverse)
    end

    def move(start_pos, end_pos)
        return false if start_pos == end_pos
        return false if (start_pos < 0) || (start_pos > 2)
        return false if (end_pos < 0) || (end_pos > 2)
        return false if @board[start_pos].empty?
        if @board[end_pos].empty?
            @board[end_pos] << @board[start_pos].pop
        else
            return false if @board[start_pos][-1] > @board[end_pos][-1]
            @board[end_pos] << @board[start_pos].pop
        end
    end

    def complete?
        if @board[2].length == 3
            puts "YOU WIN WOOHOO!!"
            return true
        end
    end

    def game_play
        while !complete?
            p (@board)
            print "Enter move: "
            input = gets.chomp.split(" ").map(&:to_i)
            puts "invalid move, try again!" if !move(input[0], input[1])
        end
    end

end

game = TowersOfHanoi.new()
game.game_play
