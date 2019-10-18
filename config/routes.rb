Rails.application.routes.draw do
  
	root to: "static_pages#root"

	namespace :api, defaults: { format: :json } do
		resources :users, only: [:index, :show, :create]
		resource :session, only: [:create, :destroy]
		resources :pins, only: [:index, :show, :create, :destroy]
		resources :items, only: [:destroy]
		resources :boards, only: [:index, :show, :create, :destroy] do
			resources :pins, only: [:index] do
				resources :items, only: [:create]
				# delete "items", to: "items#destroy"
			end
		end
		# resources :errors, only: [:index, :destroy]
	end

end
