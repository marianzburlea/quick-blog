# Initial steps
1. Create an empty project on GitHub named *quick-blog*
2. In your projects path make a clone of *pug-starter*
  ```
  git clone https://github.com/marianzburlea/pug-starter quick-blog
  ```
3. Change into your **quick-blog** project and remove the **src** folder, to make a clean start

  On linux/mac
  ```
  cd quick-blog
  rm -rf src
  ```

  On Windows
  ```
  cd quick-blog
  rd /s /q src
  ```

4. Add **index.pug** in **src** path */src/index.pug* and add a h1 tag with an welcome message in it

5. Remove **.git** folder to unlink it from *pug-starter*

  On linux/mac
  ```
  rm -rf .git
  ```

  On Windows
  ```
  rd /s /q .git
  ```

6. Link the current local project to your personal *quick-blog* repository that you've just created on GitHub

  ```
  git init
  git add .
  git commit -m "Initialize quick-blog git repository"
  git remote add origin https://github.com/marianzburlea/quick-blog.git
  git push -u origin master
  ```
7. run `npm i` to load dependencies into *node_modules* folder
8. run `npm run dev` to see your clean project in the browser with your welcome message
