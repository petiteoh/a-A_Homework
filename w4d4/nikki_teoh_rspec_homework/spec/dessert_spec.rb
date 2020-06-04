require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  let(:popsicle) { Dessert.new("popsicle", 5, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(popsicle.type).to eq('popsicle')
    end

    it "takes in a quantity" do
      expect(popsicle.quantity).to eq(5)
    end

    it "starts ingredients as an empty array" do
      expect(popsicle.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("popsicle", 5) }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      popsicle.add_ingredient('berries')
      expect(popsicle.ingredients).to include('berries')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ['berries', 'mint', 'water']

      ingredients.each do |ingredient|
        popsicle.add_ingredient(ingredient)
      end

      expect(popsicle.ingredients).to eq(ingredients)
      popsicle.mix!
      expect(popsicle.ingredients).not_to eq(ingredients)
      expect(popsicle.ingredients.sort).to eq(ingredients.sort)
    end   
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      popsicle.eat(2)
      expect(popsicle.quantity).to eq(3)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { popsicle.eat(15) }.to raise_error("sugar overload!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Icey")
      expect(popsicle.serve).to eq("Chef Icey has made 5 popsicles!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(popsicle)
      popsicle.make_more
    end
  end
end
