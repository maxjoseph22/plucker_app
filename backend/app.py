import os
# from flask import Flask
from quart import Quart
from flask_cors import CORS
from lib.routes.users_routes import user_routes #import all user routes 

# Create a new Flask app
app = Quart(__name__)
CORS(app)

# register route blueprints 
app.register_blueprint(user_routes)

    #OLD CODE FOR Flask
# if __name__ == '__main__':
#     app.run(debug=True, port=int(os.environ.get('PORT', 8000)))

    # new code for Quart with hypercorn
if __name__ == '__main__':
    import hypercorn.asyncio
    hypercorn.asyncio.serve(app, config={"bind": f"0.0.0.0:{os.environ.get('PORT', 8000)}"})

