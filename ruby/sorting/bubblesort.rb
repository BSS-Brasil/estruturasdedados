def bubble_sort(arr)
  trocou = true
  while trocou do
    trocou = false
    i = arr.length - 1
    while i > 0 do
      if arr[i] < arr[i - 1] && i > 0
        arr[i], arr[i - 1] = arr[i - 1], arr[i]
        trocou = true
      end
      i = i - 1
      puts "#{i} => #{arr}"
    end
  end
  return arr
end

arr = [5, 3, 8, 2, 1, 4]

p bubble_sort(arr)
