class CommentsController < ApplicationController

    def index

        if params[:user_id]
            render json: Comment.where(commenter_id: params[:user_id])
        elsif params[:artwork_id]
            render json: Comment.where(artwork_id: params[:artwork_id])
        else
            render json: Comment.all
        end
    end

    def create
        comment = Comment.new(comment_params)

        if comment.save
            render json: comment
        else
            render json: comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        render json: Comment.find(params[:id])
    end

    def update
        comment = Comment.find(params[:id])

        if comment.update(comment_params)
            render json: comment
        else
            render json: comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        comment = Comment.find(params[:id])

        if comment.destroy
            render json: comment
        else
            render text: "Cannot destroy comment!"
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:commenter_id, :artwork_id, :body)
    end

end