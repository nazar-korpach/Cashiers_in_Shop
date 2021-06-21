import {POSTGRES_URL} from './src/configs'

module.exports =  {
   "synchronize": true,
   "type": "postgres",
   "ssl": true,
   "extra": {
      "ssl": {
        "rejectUnauthorized": false
      }
   },
   "url": POSTGRES_URL,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts" 
   ],
}