# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  authorId    :integer          not null
#  title       :string
#  description :text
#  isPrivate   :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
