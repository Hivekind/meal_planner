require "test_helper"

class QueriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @query = queries(:one)
  end

  test "should get index" do
    get queries_url, as: :json
    assert_response :success
  end

  test "should create query" do
    assert_difference("Query.count") do
      post queries_url, params: { query: { description: @query.description } }, as: :json
    end

    assert_response :created
  end

  test "should show query" do
    get query_url(@query), as: :json
    assert_response :success
  end

  test "should update query" do
    patch query_url(@query), params: { query: { description: @query.description } }, as: :json
    assert_response :success
  end

  test "should destroy query" do
    assert_difference("Query.count", -1) do
      delete query_url(@query), as: :json
    end

    assert_response :no_content
  end
end
