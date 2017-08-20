class Quiz < ApplicationRecord
    validates :question,    presence: true, length: { minimum: 1 }
    validates :answer,      presence: true, length: { minimum: 1 }
    validates :category,    presence: true, numericality: { only_integer: true }
    validates :answer_type, allow_blank: true, numericality: { only_integer: true }

    before_save   :prepare_save
    before_update :prepare_save

    def prepare_save
      self.answer = normalizeString(self.answer)
    end

    def normalizeString(str)
      begin
        tempInt = Integer(str)
        return tempInt.to_en

      rescue ArgumentError
      end

      tempFloat = Float(str)
      return tempFloat.to_en

    rescue ArgumentError
      return str
    end
end
