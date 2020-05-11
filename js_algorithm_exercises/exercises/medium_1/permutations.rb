def permutations(array)
  return [array] if array.size == 1

  result = []
  array.each_with_index do |element, index|
    sub_array = array[0...index] + array[(index + 1)..-1]
    # puts (array[0..index] + array[(index + 1)..-1]).inspect
    puts sub_array.inspect
    sub_permutations = permutations(sub_array)
    sub_permutations.each do |permutation|
      result << [element] + permutation
    end
  end

  # puts result.inspect
  result
end

permutations(%w(a b c d))
