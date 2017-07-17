# crawler-demo
node 爬虫demo
本项目以知乎头条为目标，爬取首页内容和详细头条内容
## 使用方法
1. 克隆demo
```bash
git clone https://github.com/liujuntao123/crawler-demo.git
```
2. 安装
```bash
npm install
```
3. 启动项目
```bash
node index.js
```
打开浏览器，访问http://localhost:8001/，
即可在页面上看到响应内容。
访问http://localhost:8001/detail?path=(首页得到的url字段,如:/story/9518822),
可以在页面上看到对应的详细内容响应。
