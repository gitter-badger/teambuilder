require 'sinatra'
require 'sequel'
require "json"


@db = Sequel.connect('sqlite://members.db')

@db.create_table :members do
  primary_key :id
  string      :name
  string      :team
  string      :avatar_url
  datetime    :created_at
end rescue nil

class Member < Sequel::Model 
end

set :public_folder, 'public'

get '/' do
  html :index
end

get '/members' do
  content_type :json
  @members = Member.all
  @members.map(&:values).to_json
end

get '/members/:id' do
  content_type :json
  @member = Member.find(id: params[:id].to_i)
  @member.values.to_json
end

post '/members' do
  content_type :json
  params_json = JSON.parse(request.body.read)
  @member = Member.create(params_json.merge(created_at: Time.now))
  @member.values.to_json
end

put '/members/:id' do
  content_type :json
  params_json = JSON.parse(request.body.read)
  params_json.delete('id')
  @member = Member.find(id: params[:id].to_i)
  @member.update(params_json)
  @member.values.to_json
end

delete '/members/:id' do
  content_type :json
  @member = Member.find(id: params[:id].to_i)
  @member.destroy
  {:success => "ok"}.to_json
end

def html(view)
  File.read(File.join('public', "#{view.to_s}.html"))
end
