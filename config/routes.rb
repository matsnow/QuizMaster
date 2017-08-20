Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'admin/index'
  get 'question/index'

  root 'question#index'

  namespace :api, defaults: {format: :json } do
    namespace :v1 do
      resource :quiz, :except => [:new, :edit] do
        member do
          get  'challenges'
          post 'is_correct'
        end
      end
    end
  end
end
