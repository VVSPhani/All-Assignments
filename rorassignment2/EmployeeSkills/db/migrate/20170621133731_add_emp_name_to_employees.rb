class AddEmpNameToEmployees < ActiveRecord::Migration[5.1]
  def change
    add_column :employees, :EmpName, :string
  end
end
