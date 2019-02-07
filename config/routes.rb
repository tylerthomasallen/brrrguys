Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :products, only: [:show, :index]
    resources :carts, only: [:index]
  end
end
