class User < ApplicationRecord
    has_many :favorites
    has_many :reviews
    has_many :products, through: :favorites

    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }
end
