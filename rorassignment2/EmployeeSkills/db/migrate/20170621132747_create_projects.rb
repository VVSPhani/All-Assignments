class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.text :project_name

      t.timestamps
    end
  end
end
