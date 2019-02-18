module CartServices
    class Checkout
        def initialize(cart, update_params = {}, trigger_email = false, user_params = {})
            @cart = cart
            @update_params = update_params
            @trigger_email = trigger_email
        end

        def execute
            return false if @cart.nil?
            @products = @cart.products
            @cart.products.delete_all
            
            if @trigger_email
              UserMailer.checkout_mail(@update_params, @products).deliver_now
            end

            true
        end

        def errors
            @cart.errors.full_messages
        end
    end
end