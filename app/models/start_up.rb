class StartUp < ActiveRecord::Base
  has_one :location
  has_many :users
end