# API
Udacity API processing image

## describe
* this Api process image changing its size
* to start search  (localhost:5000)
* to resize image:
  enter /image then three parameter (name,width,height)
  localhost:5000/image?name=fjord&width=500&height=400

#### Brief instructions
http://localhost:5000/

#### Endpoint to resize images
http://localhost:5000/image?name=fjord&width=400&height=600

## the scripts 
- Install:   yarn
- Build:     yarn build
- Eslint:    yarn run eslint --init
- Prettier:  yarn add --dev --exact prettier
- Eslint + Prettier Integration:     yarn add eslint-config-prettier eslint-plugin-prettier prettier --dev
- Jasmine & needed dependencies:    npm install supertest jasmine-spec-reporter jasmine
- Lint:    npm run lint
- and also:  npm install express morgan dotenv
			 npm install --save-dev @types/express @types/morgan @types/node nodemon ts-node nodemon
- Run unit tests:   npm run test
- Start server:     yarn start



## Techmologies
JavaScript
TypeScript
Node.js
ESLint 
Prettier
JSON
Nodemon
Sharp package