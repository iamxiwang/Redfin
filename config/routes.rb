Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :appointments, only: [:index]
      resources :likes, only: [:index, :create, :destroy]
    end
    resource :session, only: [:show, :create, :destroy]

    get '/listings/search', to: 'listings#search'

    resources :listings do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:show,:create,:update,:destroy]

    resources :appointments, only: [:show,:create, :update,:destroy]


  end


  # post 'api/test', to: 'application#test' 
  get '*path', to: "static_pages#frontend_index"


end
