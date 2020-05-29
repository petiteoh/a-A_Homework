require "byebug"
class PolyTreeNode
    attr_reader :parent,:children,:value

    def initialize(value=nil)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        if node != @parent
            self.parent.children.delete(self) if parent
            @parent = node
            node.children << self if node
        end
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child
        
    end

end

# n = PolyTreeNode.new("root")
# e = PolyTreeNode.new("child")
# n.add_child(e)
