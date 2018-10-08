require "http/server"

server = HTTP::Server.new do |context|
    context.response.content_type = "text/plain"
    context.response.print "henlo werld; time is around #{Time.now}"
end

address = server.bind_tcp 4200
puts "Listening on http://#{address}"
puts "the server is up: " + server.closed?.to_s
server.listen