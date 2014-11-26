class UsersController < ApplicationController
	before_action :authenticate_user!, only: :show
	
	def show
	    @user = User.find(params[:id])
	    redirect_to 'home#index'
	end

	Events POST ':json events'
end
