class CreateSkills < ActiveRecord::Migration[5.1]
  def change
    create_table :skills do |t|
      t.text :skill_name

      t.timestamps
    end
  end
end
