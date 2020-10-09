class Product < ApplicationRecord
    has_many :reviews
    belongs_to :favorite, optional: true
end
