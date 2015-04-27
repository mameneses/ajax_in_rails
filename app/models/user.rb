class User < ActiveRecord::Base
  has_one :location
  accepts_nested_attributes_for :location
  belongs_to :start_up
end