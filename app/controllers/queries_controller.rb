require "shellwords"

class QueriesController < ApplicationController
  before_action :set_query, only: %i[ show update destroy ]

  def get_query_results
    # Retrieve the query results by executing a Python script with the given query.
    query = Shellwords.escape(params[:query])
    query_results = system("python3 lib/tasks/query_result.py #{query}")

    render json: { query_results: query_results }
  end

  # GET /queries
  def index
    @queries = Query.all

    render json: @queries
  end

  # GET /queries/1
  def show
    render json: @query
  end

  # POST /queries
  def create
    @query = Query.new(query_params)

    if @query.save
      render json: @query, status: :created, location: @query
    else
      render json: @query.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /queries/1
  def update
    if @query.update(query_params)
      render json: @query
    else
      render json: @query.errors, status: :unprocessable_entity
    end
  end

  # DELETE /queries/1
  def destroy
    @query.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_query
      @query = Query.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def query_params
      params.require(:query).permit(:description)
    end
end
