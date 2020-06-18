Rails.application.routes.draw do
  # get 'users/', to: 'users#index'
  # get 'users/:id', to: 'users#show'
  # post 'users/', to: 'users#create'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do 
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end

  resources :artworks, only: [:show, :update, :create, :destroy] do
    resources :comments, only: [:index]
  end
  
  resources :artwork_shares, only: [:index, :create, :destroy]
  resources :comments, only: [:show, :update, :create, :destroy]

end

# NewspapersApp::Application.routes.draw do
#   resources :magazines do
#     # provides a route to get all the articles for a given magazine.
#     resources :articles, only: :index
#   end

#   # provides all seven typical routes
#   resources :articles
# end