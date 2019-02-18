class UserMailer < ApplicationMailer
  def checkout_mail(user, cart)
    @user = user
    @products = cart.products
    mail(to: @user[:email], subject: 'Your Brr Guys Order Confirmation')
  end
end
