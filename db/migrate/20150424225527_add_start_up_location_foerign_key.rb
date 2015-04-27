class AddStartUpLocationFoerignKey < ActiveRecord::Migration
  def change
    add_column :locations, :start_up_id, :integer
  end
end
