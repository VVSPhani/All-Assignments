class Employee < ApplicationRecord
has_and_belongs_to_many :skills
belongs_to :team_lead
belongs_to :project
end
