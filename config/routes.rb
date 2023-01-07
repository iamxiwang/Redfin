Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :listings do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:show,:create,:update,:destroy]

    get '/listings/search', to: 'listings#search'

  end


  # post 'api/test', to: 'application#test' 
  get '*path', to: "static_pages#frontend_index"


end
