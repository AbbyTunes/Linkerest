Rails.application.routes.draw do
  
	root to: "static_pages#root"

	namespace :api, defaults: { format: :jason } do
		resources :users, only: [:index, :show, :create]
		resource :session, only: [:create, :destroy]
		resources :pins, only: [:index, :show, :create, :destroy]
		# resources :errors, only: [:index, :destroy]
	end

end
