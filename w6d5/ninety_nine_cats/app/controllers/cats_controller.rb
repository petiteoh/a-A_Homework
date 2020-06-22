class CatsController < ApplicationController
    def index
        @kitties = Cat.all
        render :index
    end

    def show
        @kitty = Cat.find(params[:id])
        render :show
    end
    
    def create
      @kitty = Cat.new(cat_params)
      if @kitty.save
        redirect_to cat_url(@kitty)
      else
        render :new
      end     
    end  

    def new
      @kitty = Cat.new
      render :new
    end  
      
    def edit
      @kitty = Cat.find(params[:id])
      render :edit
    end

    def update

    end

    private
    def cat_params
      params.require(:cat).permit(:age, :name, :sex, :birth_date, :description, :color)
    end  
end