### 配置ssh key

# step1: 设置Git的user name和email
# 这里的 Ekko_Chen 替换成自己的用户名(之后提交记录里看到的名字)
git config --global user.name "Ekko_Chen"
# 这里的邮箱 1028949929@qq.com  替换成自己的邮箱
git config --global user.email  "1028949929@qq.com"

# step2: 生成密钥
# 这里的邮箱 1028949929@qq.com 替换成自己的邮箱
ssh-keygen -t rsa -C "1028949929@qq.com"

连续3个回车。如果不需要密码的话。
最后得到了两个文件：id_rsa和id_rsa.pub。

默认的存储路径是： C:\Users\Administrator\.ssh (这里解释一下：一般都是放在 users/用户名 目录下，有些同学也有可能是在其他盘里的)

# step3: 添加密钥到ssh-agent
# 这一步我其实是跳过了，也可以用。这里还是介绍一下
start the ssh-agent in the background（EXE下面语句）
eval "$(ssh-agent -s)"

添加生成的 SSH key 到 ssh-agent。
ssh-add ~/.ssh/id_rsa

# step4: 登录GitHub，添加ssh
复制step2中生成的id_rsa.pub中的所有内容
在git中找到 setting - SSH keys - Add SSH key
将复制的内容粘贴到Key文本框中，Title自定义（建议是自己的邮箱或者用户名），保存OK

# 推荐阅读文档
# https://www.jianshu.com/p/e262c0889998
# https://blog.csdn.net/gdutxiaoxu/article/details/53573399