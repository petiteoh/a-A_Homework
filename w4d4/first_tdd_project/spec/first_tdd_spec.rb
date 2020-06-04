require 'first_tdd'

describe Array do

    describe "#remove_dups" do
        before(:each) do
            expect_any_instance_of(Array).not_to receive(:uniq)
            expect_any_instance_of(Array).not_to receive(:uniq!)
        end
        
        it "passes an empty array" do
            arr = []
            expect(arr.remove_dups).to eq([])
        end

        it "selects unique elements from an array" do
            arr = [1, 2, 1, 3, 3]
            expect(arr.remove_dups).to eq([1, 2, 3])
        end
    end

    describe "#two_sum" do
        it "passes an empty array" do
            arr = []
            expect(arr.two_sum).to eq([])
        end

        it "passes an array and returns pairs that equal to 0" do
            arr = [-1, 0, 2, -2, 1]
            expect(arr.two_sum).to eq([[0, 4], [2, 3]])
        end

        it "returns an empty array when no pair is found" do
            expect([6,9,2,1,4].two_sum).to eq([])
        end
    end
# [] to eq []
# [[]] to eq []
# [[], []] to eq []
    describe "#my_transpose" do
        # before(:each) do
        #     expect_any_instance_of(Array).not_to receive(:transpose)
        #     expect_any_instance_of(Array).not_to receive(:transpose!)
        # end

        it "passes an empty array" do
            
            expect([].my_transpose).to eq([])
            # expect
        end

        it "converts two by two grid" do
            expect([[1, 2], [3, 4]].my_transpose).to eq([[1,3],[2,4]])
        end

        it "tranposes three by three grid" do
            expect([[0, 1, 2], [3, 4, 5], [6, 7, 8]].my_transpose).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
        end
    end

    
    describe "#stock_picker" do
        # it "pair should be in increasing order"
        it "passes an empty array" do
            expect([].stock_picker).to eq([])
        end

        it "finds most profitable spread" do
            expect([10, 2, 6, 123, 89, 23, 1].stock_picker).to eq([1, 3])
            expect([-5, 7, 40, -23].stock_picker).to eq([0, 2])
        end
    end


end