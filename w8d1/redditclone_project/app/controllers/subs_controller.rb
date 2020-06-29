class SubsController < ApplicationController
    before_action :ensure_logged_in

    def new
        @sub = Sub.new
        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = params[:user_id] #/ current_user.id / users/user_id/subs

        if @sub.save
          redirect_to user_subs_url(@sub.moderator)
        else
          flash.now[:errors] = @sub.errors.full_messages
          render :new
        end
    end

    def show
      @post = Post.new
      @sub = Sub.find_by(id: params[:id])
      render :show
    end

    def index
      @subs = Sub.all 
      render :index
    end

    def edit
      @sub = Sub.find_by(id: params[:id])
      render :edit
    end

    def update
      @sub = Sub.find_by(id: params[:id])
      @sub.update(sub_params)
    end

    def destroy
      @sub = current_user.subs.find_by(id: params[:id])
      if @sub && @sub.delete
        redirect_to user_url(current_user)
      end
    end

    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end
end
