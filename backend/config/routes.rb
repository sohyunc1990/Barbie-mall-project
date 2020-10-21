Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      resources :users do
        resources :favorites
        resources :reviews
      end
      resources :products do
        resources :reviews
      end
      resources :reviews
      resources :favorites
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
end
