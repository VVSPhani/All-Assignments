class Skill < ApplicationRecord
	has_and_belongs_to_many :employee
	validates :skill_name, presence: true
end
