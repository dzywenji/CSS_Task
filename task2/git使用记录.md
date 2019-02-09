### 1. 仓库的初始化、添加到暂存区、提交到仓库

```bash
# 要作为git仓库的路径
user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task
# 初始化一个仓库
$ git init
Initialized empty Git repository in G:/myNote/jnshu/css_task/.git/

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 查看当前路径所有文件（未隐藏的）
$ ls
task1/

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 查看当前路径所有文件（包括隐藏的）
$ ls -la
total 4
drwxr-xr-x 1 user 197121 0 2月   9 11:28 ./
drwxr-xr-x 1 user 197121 0 2月   8 23:52 ../
drwxr-xr-x 1 user 197121 0 2月   9 11:28 .git/
drwxr-xr-x 1 user 197121 0 2月   9 00:06 task1/

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 添加文件到本地仓库暂存区
$ git add .

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 查看仓库状态	A表示已经添加文件到暂存区但未提交到仓库
$ git status -sb
## No commits yet on master
A  task1/css/task1.css
A  "task1/images/task1\351\234\200\346\261\202\346\225\210\346\236\234\345\233\276.gif"
A  task1/task1.html

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 提交文件从暂存区到仓库
$ git commit -m "任务1:九宫格——用html+css制作一个网页"
[master (root-commit) 8cda57d] 任务1:九宫格——用html+css制作一个网页
 3 files changed, 79 insertions(+)
 create mode 100644 task1/css/task1.css
 create mode 100644 "task1/images/task1\351\234\200\346\261\202\346\225\210\346\236\234\345\233\276.gif"
 create mode 100644 task1/task1.html
```

### 2. 本地仓库与远程仓库的关联，拉取，推送

```bash
user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 将当前仓库与远程仓库关联
$ git remote add origin git@github.com:dzyuser/css_task.git

# 该错误表示远程仓库与本地仓库不一致，需要先拉取，在推送
user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
$ git push -u origin master
To github.com:dzyuser/css_task.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:dzyuser/css_task.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 从远程仓库拉取文件到本地仓库
$ git pull --rebase origin master
warning: no common commits
remote: Enumerating objects: 9, done.
remote: Counting objects: 100% (9/9), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 9 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (9/9), done.
From github.com:dzyuser/css_task
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> origin/master
First, rewinding head to replay your work on top of it...
Applying: 任务1:九宫格——用html+css制作一个网页

# 从本地仓库推送文件到远程仓库
user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
$ git push -u origin master
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 4 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 664.60 KiB | 3.41 MiB/s, done.
Total 8 (delta 0), reused 0 (delta 0)
To github.com:dzyuser/css_task.git
   de697c3..4df4082  master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.



```

### 3. SSH本地生成

```bash
user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 该错误表示需要生成SSH密钥与github账户关联
$ git push -u origin master
The authenticity of host 'github.com (192.30.253.113)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,192.30.253.113' (RSA) to the list of known hosts.
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.

# 生成本地的SSH密钥
user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
$ ssh-keygen -t rsa -C "<username>"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/user/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /c/Users/user/.ssh/id_rsa.
Your public key has been saved in /c/Users/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:dJ/Xd0PRohFFzoFtd1B6tK2hCphMEKHJvaIGJ8Ka7fk <username>
The key's randomart image is:
+---[RSA 2048]----+
|    +o      .*=++|
| . + .      oo++B|
|  + . . . .  +==+|
|.    + + . ..o.= |
|+.o . + S   + o.+|
|+* .     . . .  +|
|+..       .      |
|.. .             |
|  o.E            |
+----[SHA256]-----+

user@DESKTOP-<xxxx> MINGW64 /g/myNote/jnshu/css_task (master)
# 查看SSH密钥
$ cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCcHRyyLvLKVouQ24aaHNxxxxxxxxBypKOPe5AiMutswAvlWaQXNXg98/8Q6d/Bvbv8NSS+O3J3yZTYaULgVm7I67FWbCcflKir5jqetOUvyPB/0b4MoAo/LrrKLRLgBcDGy2PdDgXhfi3Wzv0bOjK/OWxxxxxxCyQHV+mxxxxgUuV/lykao/vBQiXO0pvUM61ANfY38mgPct1cEW+UxKImPFu3DDzisY5lgl27I8cO6+9VzaoM8IekiU6oWrdejF+xxxxxxxxxxxxxxxxxxxxxxxxxx <username>
```

### 4. 将仓库作为静态页面部署

```bash
1、进入仓库的Settings选项
2、将Github Pages区中的source选项下拉选择为master branch，然后点击save保存
3、就可以<用户名>.github.io/<仓库名>/<文件>访问了https://username.github.io/css_task/task1/task1.html
```

