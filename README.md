# graphql-server-demo

执行命令 `node -e 'require("babel-register"); require("./src/seedData");'  `  创建数据库 插入数据

执行命令 `sqlite3 ./db.sqlite "select count(*) from users"` 检查数据是否插入成功
