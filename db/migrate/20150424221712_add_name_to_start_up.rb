class AddNameToStartUp < ActiveRecord::Migration
  def change
    add_column :start_ups, :name, :string
  end
end
