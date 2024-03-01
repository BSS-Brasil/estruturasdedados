def bubble_sort(arr)
  trocou = true
  while trocou do
    trocou = false
    i = arr.length - 1
    while i > 0 do
      if arr[i] < arr[i - 1] && i > 0
        arr[i], arr[i - 1] = arr[i - 1], arr[i]
        puts "#{i} - #{arr}"
        trocou = true
      end
      i = i - 1
    end
  end
  return arr
end

arr = [5, 4, 8, 1, 3, 2, 7, 1, 9, 3]

bubble_sort(arr)
