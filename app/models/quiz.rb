class Quiz < ApplicationRecord
    validates :question,    presence: true, length: { minimum: 5 }
    validates :answer,      presence: true, length: { minimum: 5 }
    validates :category,    presence: true, numericality: { only_integer: true }
    validates :answer_type, allow_blank: true, numericality: { only_integer: true }
end
