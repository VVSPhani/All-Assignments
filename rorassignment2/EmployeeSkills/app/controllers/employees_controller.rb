class EmployeesController < ApplicationController

def index
	@employees = Employee.all
end

def new
	@employee = Employee.new()
end

def show
	@employee = Employee.find(params[:id])
end
def edit 
	@employee = Employee.find(params[:id])

end

def create
	@employee = Employee.new(employee_params)
	Rails.logger.debug "aaaaaaa #{@employee.inspect}"
	if @employee.save
		redirect_to @employee
	else
		render 'new'
	end
end

def destroy
  @employee = Employee.find(params[:id])
  @employee.destroy
 
  redirect_to employees_path
end
 
  def update
  @employee = Employee.find(params[:id])
 
  if @employee.update(employee_params)
    redirect_to @employee
  else
    render 'edit'
  end
 end
 

 private
 
  def employee_params
    params.require(:employee).permit(:EmpName,:team_lead_id,:project_id,:skill_ids => [])
  end

end
