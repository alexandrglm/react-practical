const miniapi = require('miniapi');

miniapi
  .withPort(3200)
  .withId('_id')
  .withData([{"id":2,"name":"Juan","number":1,"position":1},{"id":3,"name":"Unai","number":4,"position":2}])
  .start();