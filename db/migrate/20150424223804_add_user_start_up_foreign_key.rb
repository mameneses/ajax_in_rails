class AddUserStartUpForeignKey < ActiveRecord::Migration
  def change
    add_column :users, :start_ups_id, :integer
  end
end
