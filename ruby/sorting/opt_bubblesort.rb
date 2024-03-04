def opt_bubblesort(arr)
    i = 1
    while i < arr.length do
        j = arr.length - 1
        while j >= i do
            if arr[j] < arr[j - 1]
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
            end
            j -= 1
            puts "#{i} - #{j} => #{arr}"
        end
        i += 1
    end
    return arr
end

arr = [5, 3, 8, 2, 1, 4]

p opt_bubblesort(arr)