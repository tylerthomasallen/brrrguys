Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :products, only: [:index]
    resources :carts, only: [:index]

    get '/products/:id/edit', to: 'products#remove_product_from_cart'
    post '/products/:id', to: 'products#add_product_to_cart'
    post '/carts/:id', to: 'carts#checkout'
  end
end
