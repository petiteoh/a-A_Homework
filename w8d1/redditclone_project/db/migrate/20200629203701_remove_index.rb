class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :subs, :moderator_id
  end
end
