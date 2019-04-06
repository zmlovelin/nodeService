# 全局安装 typeScript 
# npm install -g typescript
# 1 新建文件夹 如 node-Service
# 2 初始化文件夹 npm init  执行的npm init是把该目录初始化为一个npm项目
# 3 执行 tsc init  执行的tsc —init是为了让tsc帮助我们创建tsconfig文件
# tsconfig.ts 配置
#{
#  "compilerOptions": {
#    "target": "es5",
#   "module": "commonjs",
#   "outDir": "./dist",
#    "rootDir": "./src",
#    "strict": true,
#   "experimentalDecorators": true
#
# }
#}
# 这里只需关注一下outDir和rootDir。outDir是tsc编译后输出的js文件的目录，
# 这里我把它输出在dist目录，rootDir是源文件的目录，也就是需要被tsc编译的目录 src目录。
# 4 可以在src目录下编写一个简单的node程序 
# 5 执行tsc -w 然后我们可以让tsc开启监视模式，根据源文件目录下的文件改变来编译ts文件
# 6 cd 到 dist文件夹下service文件夹 执行 node hello.service.js 即可启动



