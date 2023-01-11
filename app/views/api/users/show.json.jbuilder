json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
    json.imgUrl @user.img.url
    # json.tour @user.tours
end