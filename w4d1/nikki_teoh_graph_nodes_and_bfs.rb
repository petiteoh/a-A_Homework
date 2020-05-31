require "byebug"
require 'set'
class GraphNode
    attr_accessor :graph_node, :neighbors

    def initialize(graph_node)
        self.graph_node = graph_node
        self.neighbors = [] #['b', 'c', 'e']
    end

    # def neighbors=(array) #graph_node
    #     #debugger
    #     array.each { |ele| self.neighbors << ele }
    # end

    def add_neighbors(node)
        self.neighbors << node
    end

    def bfs(starting_node, target_value) #(a, "b")
        visited = Set.new()
        queue = [starting_node]

        until queue.empty?
            ele = queue.shift
            unless visited.include?(ele)
                return ele.graph_node if ele.graph_node == target_value
                visited.add(ele)
                ele.neighbors.each { |node| queue << node }
            end
        end

        nil
    end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]
bfs(a, "b")

[9] pry(main)> f = GraphNode.new('f')
=> #<GraphNode:0x00007fa2ac8c44d8 @graph_node="f", @neighbors=[]>
[10] pry(main)> a.add_neighbors([b.graph_node[1],c.graph_node[1],e.graph_node[1]])
=> [[nil, nil, nil]]
[11] pry(main)> a.add_neighbors([b.graph_node[0],c.graph_node[0],e.graph_node[0]])
=> [[nil, nil, nil], ["b", "c", "e"]]
[12] pry(main)> c.add_neighbors([b.graph_node, b.graph_node])
=> [["b", "b"]]
[13] pry(main)> c
=> #<GraphNode:0x00007fa2ad0ab070 @graph_node="c", @neighbors=[["b", "b"]]>
[14] pry(main)> "c".to_i
=> 0