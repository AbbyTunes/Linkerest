# == Schema Information
#
# Table name: board_pins
#
#  id          :bigint           not null, primary key
#  boardId     :integer          not null
#  pinId       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string
#  description :string
#  authorId    :integer
#

require 'test_helper'

class BoardPinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
