class AddTeamLeadToEmployees < ActiveRecord::Migration[5.1]
  def change
    add_reference :employees, :team_lead, foreign_key: true
  end
end
