class AddStartUpId < ActiveRecord::Migration
  def change
    add_column :users, :start_up_id, :integer
  end
end
