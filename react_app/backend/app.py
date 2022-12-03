from flask import Flask, request, jsonify, render_template, request, redirect, url_for, session
from flaskext.mysql import MySQL

app = Flask(__name__)
mysql = MySQL()

@app.route('/test', methods=['GET', 'POST'])

def my_profile():
    if request.method == 'GET': # A GET message is send, and the server returns data. 
        response_body = {
            "name": "Nagato",
            "about" :"Hello! I'm a full stack developer that loves python and javascript"
        }
        return response_body

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
    # elif request.method == 'POST': # POST. Used to send HTML form data to the server.
    #     req_json = request.json
    #     name = req_json['name']
    #     return jsonify({"response": "Hi " + name}) # can only concatenate strings

    # if request.method == 'POST': # POST. Used to send HTML form data to the server.
    #     print("POST")
    #     print(request.json('email'))
    #     email = request.json['email']
    #     return {"email":email}

# def test():
#     if request.method == 'GET': # A GET message is send, and the server returns data. 
#         console.log("here")
#         req_json = request.json
#         return jsonify(req_json)
#     elif request.method == 'POST': # POST. Used to send HTML form data to the server.
#         req_json = request.json
#         name = req_json['name']
#         return jsonify({"response": "Hi " + name}) # can only concatenate strings

