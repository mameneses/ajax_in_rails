class RemoveStartUpsId < ActiveRecord::Migration
  def change
    remove_column :users, :start_ups_id, :integer
  end
end
