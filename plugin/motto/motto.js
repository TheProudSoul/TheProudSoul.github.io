/**
  随机获取名言.

  author:prd.
  version:2016.7.22
  note:名言均来自[一个](https://www.wufazhuce.com)

  使用示例(关于使用的调用,请参考最底部的函数.):
        1.先引入本js.
        2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
        3.名言中存储为json数据,index对应One的每一期号,content是名言.
        4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
*/
var mingyan=new Array();
mingyan.push("{'index':0,'content':'世上只有一种真正的英雄主义，那就是认清生活的真相后依然热爱生活。</br> - </br>罗曼·罗兰'}");
mingyan.push("{'index':1,'content':'所有的悲伤，总会留下一丝欢乐的线索。所有的遗憾，总会留下一处完美的角落。我在冰封的深海，找寻希望的缺口。却在午夜惊醒时，蓦然瞥见绝美的月光。</br> - </br>《缺口》'}");
mingyan.push("{'index':2,'content':'为你，千千万万遍。</br> - </br>《追风筝的人》'}");
mingyan.push("{'index':3,'content':'我爱你不是因为你是谁，而是我在你面前可以是谁。</br> - </br>《剪刀手爱德华》'}");
mingyan.push("{'index':4,'content':'生命确是黑暗，除非有盼望，而一切的盼望都是盲目，除非有知识，而一切的知识都是枉然，除非有工作，而一切的工作都是空虚，除非有爱。</br> - </br>纪伯伦《先知》'}");
mingyan.push("{'index':5,'content':'此刻，我多想拥抱你，可惜时光之里山南水北，可惜你我中间人来人往。</br> - </br>鸢喜'}");
/**
    随机获取名言.

    直接调用此函数即可.
*/
function getMingYan(){
  return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
  var item = getItem();
  return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
  return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
  var item = getItem();
  return item['content'];
}