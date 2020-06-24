FactoryBot.define do
  factory :user do
    username { Faker::Games::Pokemon.name }
    session_token { "MyString" }
    password_digest { "MyString" }
    # factory: :user
  end
end
