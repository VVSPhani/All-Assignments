puts "Enter order of the matrix"
order = gets.chomp.to_i
$matrix = Array.new(order){Array.new(order)}
for i in 0..order-1
  for j in 0..order-1
    $matrix[i][j] = 00
  end
end



def print_array(array)
    array.each do |arr|
        arr.each do |item|
            print "#{item} " 
        end
        print "\n"
    end
end

$Input = {}

def find_row_column(cell)
  columns= ['A','B','C','D','E','F','G','H','I']
  value = cell.split("")
  col = columns.index(cell[0])
  row = cell[1].to_i
  return row,col
end

def update_check(cell)
  $Input.each do |x,value|
    check = value.split(" ")
    if check[0] == cell || check[2] == cell
      des = find_row_column(x)
      c1 = find_row_column(check[0])
      c2 = find_row_column(check[2])
      operation = check[1]
      cell1_value = $matrix[c1[0]][c1[1]]
      cell2_value = $matrix[c2[0]][c2[1]]
      case operation
        when '+'
          $matrix[des[0]][des[1]] = cell1_value + cell2_value
            
        when '-'
          $matrix[des[0]][des[1]] = cell1_value - cell2_value
            
        when '*'
          $matrix[des[0]][des[1]] = cell1_value * cell2_value
            
        else
          puts "Give Proper Operand"
        end
    else
      break
    end
  end
end
        
print_array($matrix)

loop do

  puts "Select any option from given below"
  puts "1.Set Value"
  puts "2.Set Input"
  puts "3.Exit"
  
  option = gets.chomp.to_i

  case option
    when 1
      puts "Assign Value in B3 = 2 format"
      assign = gets.chomp.split(" ")
      value = assign.last.to_i
      values = find_row_column(assign[0])
      $matrix[values[0]][values[1]] = value
      update_check(assign[0])
      print_array($matrix)
    when 2
      puts "Format A0 = B0 + C0"
      index1 = gets.chomp
      index3 = index1.split(" ")
      index2 = index1.split(" ",3)
      $Input[index2[0]] = index2[2]
      
      des = find_row_column(index3[0])
      operation = index3[3]
      c1 = find_row_column(index3[2])
      c2 = find_row_column(index3[4])
      cell1_value = $matrix[c1[0]][c1[1]]
      cell2_value = $matrix[c2[0]][c2[1]]
      case operation
        when '+'
          $matrix[des[0]][des[1]] = cell1_value + cell2_value
          print_array($matrix)
        when '-'
          $matrix[des[0]][des[1]] = cell1_value - cell2_value
          print_array($matrix)
        when '*'
          $matrix[des[0]][des[1]] = cell1_value * cell2_value
          print_array($matrix)
        else
          puts "Give Proper Operand"
        end
    when 3
      break
    else
      puts "Select from given options only"
    end
end