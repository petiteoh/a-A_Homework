# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

andy = User.create!(username: 'Andy')
peter = User.create!(username: 'Peter')
rosemary = User.create!(username: 'Rosemary')

mona_lisa = Artwork.create!(title: 'Mona Lisa', image_url:"https://i.pinimg.com/originals/03/f3/d3/03f3d312e8d83868cf274c7ed505959d.jpg" , artist_id: peter.id)
starry_night = Artwork.create!(title: 'Starry Night', image_url:"https://images.saatchiart.com/saatchi/29350/art/6476217/5545897-TREENKUC-7.jpg" , artist_id: andy.id)
murakami = Artwork.create!(title: 'Murakami', image_url:"https://d32dm0rphc51dk.cloudfront.net/ypqccnAj_vZLsyMcI6WGmw/large.jpg" , artist_id: rosemary.id)

share_1 = ArtworkShare.create!(artwork_id: mona_lisa.id, viewer_id: andy.id)
share_2 = ArtworkShare.create!(artwork_id: starry_night.id, viewer_id: peter.id)
share_3 = ArtworkShare.create!(artwork_id: murakami.id, viewer_id: andy.id)

comment_1 = Comment.create!(commenter_id: rosemary.id, artwork_id: murakami.id, body: 'Beauuuuutiful')
comment_2 = Comment.create!(commenter_id: peter.id, artwork_id: murakami.id, body: 'Ewwwww, I hate it!')
