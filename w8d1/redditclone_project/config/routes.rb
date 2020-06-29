Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show, :index] do
     resources :subs, only: [:index, :create, :new]
  end

  resources :subs, except: [:index, :create, :new] do
    resources :posts, only: [:create]
  end
  resource :session, only: [:new, :create, :destroy]
  resources :posts, only: [:destroy]
end
