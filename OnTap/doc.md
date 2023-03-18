toán tử nullist chỉ quan tâm đến null hay undefined k hay thôi

const user
const value = user ?? 'Tan' // do user là undefined nên sẽ có giá trị là 'Tan'

const user = 0;
const value = user || 'Tan' // đối với || sẽ xét xem có falsy hay truthy hay k, bao gồm cả undefined và null, nếu dùng ?? ở đây thì giá trị 0 sẽ giữ nguyên

RESTful API:
+GET
+PUT
+DELETE
+POST

Postman dùng để test API
