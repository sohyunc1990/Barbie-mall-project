class User < ApplicationRecord
    has_many :favorites
    has_many :reviews
    has_many :products, through: :favorites

    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    attr_accessor :password

  def authenticate(plaintext_password)
    if BCrypt::Password.new(self.password_digest) == plaintext_password
      self
    else
      false
    end
end

end
