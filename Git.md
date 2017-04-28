push etmeden once yarı yap
````
git config user.name "gokmen.yilmaz"
git config user.email "gokmen1977@gmail.com"
````

angular-cli-ghpages  için
````
git config -global user.name "gokmen.yilmaz"
git config -global user.email "gokmen1977@gmail.com"
````


…or create a new repository on the command line
````
echo "# xxx" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/gokmenyilmaz/xxx.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/gokmenyilmaz/xxx.git
git push -u origin master

````


spesifik commit cağirma
```
git clone -n <repo_name>
git checkout -b <new_branch> <commit_sha>
```
Spesifik branch
````
git checkout master
````
###online github subfolder download
http://kinolien.github.io/gitzip/
