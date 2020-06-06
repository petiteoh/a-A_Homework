# O(n!) combinatorial time
# O(n!) combinatorial space
def first_anagram?(str1, str2)
    all_anagrams(str1).include?(str2)
end

def all_anagrams(str)
    return[str] if str.length <= 1
    prev_ana = all_anagrams(str[0...-1])
    possible_anagrams = []

    prev_ana.each do |anagram|
        (0..anagram.length).each do |i|
            possible_anagrams << anagram.dup.insert(i, str[-1])
        end
    end

  possible_anagrams
end

# O(n^2) quadratic time complexity
# O(n) linear space complexity
def second_anagram?(str1, str2)
    str1.each_char.with_index do |char, i|
        index = str2.index(char)
        return false if index.nil?
        str2[index]= ""
    end

    true
end

def sorted_anagram(str1)
    alpha = ("a".."z").to_a
    sorted = false

    while !sorted
        sorted = true

        (0...str1.length-1).each do |i|
            if alpha.index(str1[i]) > alpha.index(str1[i+1])
                str1[i], str1[i+1] = str1[i+1], str1[i]
                sorted = false
            end
        end
    end

    str1
end

# O(n) linear time complexity
# O(1) constant space complexity
def third_anagram?(str1, str2)
    sorted_anagram(str1) == sorted_anagram(str2)
end

def count_chars(str)
    hash = Hash.new(0)
    str.each_char { |char| hash[char] += 1 }
    hash
end

# O(n) linear time complexity
# O(1) constant space complexity
def fourth_anagram?(str1, str2)
    count_chars(str1) == count_chars(str2)
end

p first_anagram?("gizmo", "ogizm")    