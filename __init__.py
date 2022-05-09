import json, os, uuid
from flask import Flask, request
from pymongo import MongoClient

cluster = MongoClient("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000")

database = cluster["test"]
accounts = database["accounts"]

app = Flask(__name__)

@app.route("/")
def index():
    return json.dumps({"message": "main"})

@app.route("/api/")
def main():
    return json.dumps({"message": "api"})

@app.route("/api/account")
def account():
    return json.dumps({"message": "account"})

@app.route("/api/account/register", methods= ["POST"])
def register():
    content = request.json

    if accounts.find_one(
        {
            "_id": content["_id"]
        }
    ) != None:
        return json.dumps(
            {
                "success": False,
                "error": "Le nom d'utilisateur est déjà utilisé.",
                "key": ""
            }
        )

    elif accounts.find_one(
        {
            "email": content["email"]
        }
    ) != None:
        return json.dumps(
            {
                "success": False,
                "error": "L'email est déjà utilisé.",
                "key": ""
            }
        )

    else:
        key = str(uuid.uuid4())

        accounts.insert_one(
            {
                "_id": content["_id"], 
                "password": content["password"], 
                "email": content["email"], 
                "firstName": content["firstName"], 
                "lastName": content["lastName"],
                "image": "https://cdn-icons-png.flaticon.com/512/126/126486.png",
                "key": key,
                "notifications": [],
                "activity": [],
                "wallet": [],
                "social": []
            }
        )

        return json.dumps(
            {
                "success": True,
                "error": "",
                "key": key
            }
        )

@app.route("/api/account/login", methods= ["POST"])
def login():
    content = request.json

    account = accounts.find_one(
        {
            "_id": content["_id"],
            "password": content["password"]
        }
    )

    if account != None:
        key = str(uuid.uuid4())

        accounts.update_one(
            {
                "_id": content["_id"],
                "password": content["password"]
            },
            {
                "$set": {
                    "key": key
                }
            }
        )

        return json.dumps(
            {
                "success": True,
                "error": "",
                "key": key
            }
        )

    else:
        return json.dumps(
            {
                "success": False,
                "error": "Votre nom d'utilisateur et/ou votre mot de passe est incorrecte.",
                "key": ""
            }
        )

@app.route("/api/account/logout", methods= ["POST"])
def logout():
    content = request.json

    account = accounts.find_one(
        {
            "key": content["key"]
        }
    )

    if account != None:
        accounts.update_one(
            {
                "key": content["key"]
            },
            {
                "$set": {
                    "key": ""
                }
            }
        )

        return json.dumps(
            {
                "success": True,
                "error": "",
                "key": ""
            }
        )

    else:
        return json.dumps(
            {
                "success": False,
                "error": "Une erreur s'est produite. Vous n'avez pas été déconnecté.",
                "key": content["key"]
            }
        )

@app.route("/api/account/data", methods= ["POST"])
def data():
    content = request.json

    account = accounts.find_one(
        {
            "key": content["key"]
        }
    )

    if account != None:
        return json.dumps(
            {
                "success": True,
                "error": "",
                "content": {
                    "_id": account["_id"],
                    "email": account["email"],
                    "firstName": account["firstName"],
                    "lastName": account["lastName"],
                    "image": account["image"]
                }
            }
        )

    else:
        return json.dumps(
            {
                "success": False,
                "error": "Une erreur s'est produite.",
                "content": {}
            }
        )

@app.route("/api/account/notifications", methods= ["POST"])
def notifications():
    content = request.json

    account = accounts.find_one(
        {
            "key": content["key"]
        }
    )

    if account != None:
        return json.dumps(
            {
                "success": True,
                "error": "",
                "content": {
                    "notifications": account["notifications"]
                }
            }
        )

    else:
        return json.dumps(
            {
                "success": False,
                "error": "Une erreur s'est produite.",
                "content": {}
            }
        )

@app.route("/api/account/update", methods= ["POST"])
def update():
    content = request.json

    account = accounts.find_one(
        {
            "key": content["key"]
        }
    )

    if account != None:
        accounts.update_one(
            {
                "key": content["key"]
            },
            {
                "$set": content["fields"]
            }
        )

        return json.dumps(
            {
                "success": True,
                "error": "",
                "content": {
                    "_id": account["_id"],
                    "email": account["email"],
                    "firstName": account["firstName"],
                    "lastName": account["lastName"],
                    "image": account["image"]
                }
            }
        )

    else:
        return json.dumps(
            {
                "success": False,
                "error": "Une erreur s'est produite.",
                "content": {}
            }
        )

@app.route("/api/wallet")
def wallet():
    return json.dumps({"message": "account"})

@app.route("/api/wallet/order", methods= ["POST"])
def order():
    content = request.json

    account = accounts.find_one(
        {
            "key": content["key"]
        }
    )

    if account != None:
        accounts.update_one(
            {
                "key": content["key"]
            },
            {
                "$set": content["fields"]
            }
        )

        return json.dumps(
            {
                "success": True,
                "error": "",
                "content": {
                    "_id": account["_id"],
                    "email": account["email"],
                    "firstName": account["firstName"],
                    "lastName": account["lastName"],
                    "image": account["image"]
                }
            }
        )

    else:
        return json.dumps(
            {
                "success": False,
                "error": "Une erreur s'est produite.",
                "content": {}
            }
        )   


if __name__ == "__main__":
   app.run(debug=True, host="0.0.0.0")