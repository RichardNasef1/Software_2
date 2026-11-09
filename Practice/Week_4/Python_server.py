import json
from flask import Flask, Response, request, send_from_directory


#built in python variable with the name of this module to locate where the application lives
app = Flask(__name__)

#endpoint
# http://127.0.0.1:3000/echo/hello


#create app
@app.route('/echo/<text>')
def echo(text):
  response = {
    "echo": text + " " + text

  }
  return response

#json response

#1st method: return a dict
@app.route('/json/automatic')
def json_automatic():
  response = {
	"message":"Good Moorning from Salo",
	"status" : 200
  }
  return response

# method 2: return a response more manually
@app.route('/json/manual')
def json_manual():
    response = {
        "message":"Hello from Finland",
        "status":200
       
    }
    json_response = json.dumps(response)
    http_response = Response(response= json_response, status=200, mimetype= "application/json")
    return http_response

# pass the request
#1. using query-string ver

@app.route('/sum')

def calculate_sum():
   user_input = request.args
   try:
       number1= float(user_input.get("number1"))
       number2= float(user_input.get("number2"))
   except(TypeError,ValueError):
      response= {
         "message":"Invalid or missing numbers",
         "status":400
      }

      json_response=json.dumps(response)
      http_response= Response(response= json_response, status=400, mimetype="application/json")
      return http_response
   
      total_sum = number1 + number2

   response = {
    "number1":number1,
    "number2":number2,
    "total_sum":total_sum

  }
   return response

#2 using url-path version 
@app.route('/sum/<number1>/<number2>')
def calculate_sum_path(number1,number2):
   try:
       number1 =float(number1)
       number2 =float(number2)
       total_sum = number1 + number2
       response = {
          "number1": number1,
          "number2": number2,
          "total_sum": total_sum
   }
       return response
   except ValueError:
      response= {
               "message":"Invalid or missing numbers",
               "status":400
      }
      json_response=json.dumps(response)
      http_response= Response(response= json_response, status=400, mimetype="application/json")
      return http_response

#serve static files
@app.route('/static/<path:filename>')
def serve_static(filename):
   return send_from_directory('static',filename)


@app.errorhandler(404)
def page_not_found(error_code):
   response = {
      "message": "Invalid endpoint",
      "status": 404
   }
   json_response=json.dumps(response)
   http_response= Response(response= json_response, status=400, mimetype="application/json")
   return http_response


#start the server
if __name__ == '__main__':
  app.run(host= '127.0.0.1', port=3000 , use_reloader = True)

