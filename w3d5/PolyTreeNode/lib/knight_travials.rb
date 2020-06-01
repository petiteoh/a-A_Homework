require_relative "00_tree_node.rb"

class KnightPathFinder
    attr_reader :considered_positions
    attr_accessor :root_node

    def self.valid_moves?(pos)
       row = pos[0]
       col = pos[1]
       (row <= 7 && row >= 0) && (col <= 7 && col >= 0)
    end 
    
    def initialize(pos)
        @considered_positions = [pos]
        @starting_position = pos
    end

    def new_move_positions(pos)
        row = pos[0]
        col = pos[1]
        positions = [[row-2,col+1],[row-1,col+2],[row+1,col+2],[row+2,col+1],
        [row+2,col-1],[row+1,col-2],[row-1,col-2],[row-2,col-1]]
        new_pos = positions.select { |pos| KnightPathFinder.valid_moves?(pos) && !@considered_positions.include?(pos) }
        positions.each do |pos|
            if !@considered_positions.include?(pos)
                @considered_positions << pos
            end
        end
        new_pos
    end

    def build_move_tree
        self.root_node = PolyTreeNode.new(@starting_position) 
        nodes_arr = [self.root_node]

        while !nodes_arr.empty?
            current_node = nodes_arr.shift
            pos = current_node.value
            new_move_positions(pos).each do |new_pos|
                new_node = PolyTreeNode.new(new_pos)
                current_node.add_child(new_node)
                nodes_arr << new_node
            end
        end
    end

    def find_path(end_pos)
        node_instance = self.root_node.bfs(end_pos)
        trace_path_back(node_instance)
    end 

    def trace_path_back(node_inst)
        array = []
        new_node = node_inst
        until new_node.parent.nil? 
            array << new_node
            new_node = new_node.parent
        end

        array << self.root_node
        array.reverse.map { |node| node.value }
    end
end