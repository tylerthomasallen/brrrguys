class UserMailer < ApplicationMailer
  def checkout_mail(user, products)
    @user = user
    @products = products
    mail(to: @user[:email], subject: 'Your Brr Guys Order Confirmation')
  end
end
