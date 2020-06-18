class ArtworksController < ApplicationController

    def index
        artist = User.find(params[:user_id])
        render json: {artworks: artist.artworks, shares: artist.shared}
    end

    def show
        render json: Artwork.find(params[:id])
    end

    def create
        artwork = Artwork.new(artwork_params)

        if artwork.save
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end
    
    def update
        artwork = Artwork.find(params[:id])

        if artwork.update(artwork_params)
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        artwork = Artwork.find(params[:id])

        if artwork.destroy
            render json: artwork
        else
            render text: "Cannot destroy this thing!"
        end
    end

    private
    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end
