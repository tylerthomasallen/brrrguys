class UserMailer < ApplicationMailer
  def checkout_mail(@user, @products)
    mail(to: @user[:email], subject: 'Your Brr Guys Order Confirmation')
  end
end
