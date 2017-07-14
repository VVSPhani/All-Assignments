class TeamLeadsController < ApplicationController
	def index
		@team_lead = TeamLead.all
	end
end
