class LocationsController < ApplicationController

  def new
    @location = location.new
  end

  def create
    @location = location.create(location_params)
  end

  def location_params
    params.require(:location).permit(:address)
  end
end
