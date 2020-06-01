module Searchable

    def dfs(target = nil, &prc)
        raise "Need a proc or target" if [target, prc].none?
        prc ||= Proc.new { |node| node.value == target }
        
        return self if prc.call(self)

        _children.each do |child|
            results = child.dfs(&prc)
            return results unless results.nil?
        end

        nil
    end

    def bfs(target=nil, &prc)
        raise "Need a proc or target" if [target, prc].none?
        prc ||= Proc.new { |node| node.value == target }

        nodes = [self]
        until nodes.empty?
            node = nodes.shift

            return node if prc.call(node)
            nodes.concat(node._children)
        end

        nil
    end

    def count
        1 + _children.map(&:count).inject(:+)
    end
end

class PolyTreeNode
    include Searchable

    attr_accessor :value
    attr_reader :parent

    def initialize(pos)
        @value = pos
        @parent = nil
        @children = []
    end

    def parent=(parent)
        return if self.parent == parent #return if you're the root

        if self.parent #if self has a parent, remove yourself
            self.parent._children.delete(self)
        end

        @parent = parent
        self.parent._children << self unless self.parent.nil?

        self
    end

    def add_child(child)
        child.parent = self
    end

    def remove_child(child)
        if child && !self._children.include?(child)
            raise "Tried to remove node that is not a child"
        end

        child.parent = nil
    end

    def children
        @children.dup
    end

    protected

  # Protected method to give a node direct access to another node's
  # children.
  def _children
    @children
  end
end