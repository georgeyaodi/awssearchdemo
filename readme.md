1.项目说明
	1.1 bucketfile文件夹中的文件是用来作为检索的文件，demo中将它上传到S3存储桶中，随后被lambda函数写入到cloud search domain中
	1.2 lambda文件夹中的文件是用来创建lambda函数的
		1.2.1 yaodiindex4doc中的index.js文件用来将收到的S3存储桶中的文件写入到cloud search domain中
		1.2.2 yaodisearch4doc中的index.js文件用来根据页面程序输入的查询条件，到cloud search domain中查询符合条件的内容
		1.2.3 yaodipromptwords中的index.js文件用来返回与条件匹配的匹配的建议列表
	1.3 webprogram文件夹中的文件用来执行页面检索功能，直接在本地打开index.html文件即可运行演示功能

2.操作步骤
	2.1下载 webprogram文件夹下的所有文件到本地路径
	2.2用浏览器运行index.html文件
	2.3在搜索框中输入要查询的条件，demo中例如输入api，Developer,Portal和Dashboard
	2.4在输入查询条件之后，页面会自动完成匹配建议，并显示在输入框下面
	2.5点击任意一个建议查询的条件，再点击查询搜索按钮
	2.6包含查询条件的内容会显示在页面下方

3.架构说明请参照Architecture.ppt
4.AWS上创建的服务请参照images文件夹下的截图