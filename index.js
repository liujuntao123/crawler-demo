'use strict'
let request = require('request-promise')
let $ = require('cheerio')
let express = require('express')
let app = express()

const URI = 'https://daily.zhihu.com/'

app.get('/', async (req, res) => {
  let result = await request(URI)//异步请求网页
  let data = []
  let elements = $('a', '.main-content .wrap .box', result)//解析出网页里的a元素
  elements.map((i, ele) => {
    let json = {}
    let $ele = $(ele)
    json.url = $ele.attr('href')//获取a元素的地址链接
    json.title = $ele.children().text()//获取标题
    data.push(json)
  })
  console.log(data)
  res.send(data)//把data数据返回给前台
})

app.get('/detail', async (req, res) => {
  let result = await request(URI + req.query.path)
  let data = {}
  let element = $('.content-inner .answer', result)//解析网页的指定元素
  data.avatar_url = $('.meta img.avatar', element).attr('src')//获取头像url
  data.author = $('.meta .author', element).text()//获取作者
  data.bio = $('.meta .bio', element).text()//获取作者签名
  data.content = $('.content', element).text()//获取文章内容
  res.send(data)//返回data给前台
})

app.listen(8001, () => {//启动一个8001端口的server服务
  console.log('Listening on port 8001')
})
