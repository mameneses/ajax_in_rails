class UsersController < ApplicationController
  respond_to :html, :js
  def index
    @users = User.all
    @user = User.new
    @user.build_location
  end

  def new
    @user = User.new
    @user.build_location
  end

  def create
    @user = User.create(user_params)
    startup = StartUp.create(name:"new startup")
    @user.start_up = startup
    @user.save
    respond_to do |format|
      format.html { redirect_to users_path }
      format.js 
      format.json {render json: @user.to_json(:include => [:location, :start_up])}
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, location_attributes: [:address])
  end

end