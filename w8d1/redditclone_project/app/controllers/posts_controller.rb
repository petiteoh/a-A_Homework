class PostsController < ApplicationController

  before_action :ensure_logged_in

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_id = params[:sub_id]

    unless @post.save
        flash[:errors] = @post.errors.full_messages
    end
    redirect_to sub_url(@post.sub)
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post && (@post.author_id == curent_user.id || @post.sub.moderator.id == current_user.id)
    @post.delete
        redirect_to sub_url(@post.sub)
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end
