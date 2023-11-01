# Kayak Klub
Kayak Klub is a social edia platform for anyone who loves kayaking and wants to share information about launchsites, their exact postion using the website 'What3words' and leaving any comment about the launchsite that may be of interest to the users.

<br>
The live link can be found here:[]
<br>

![Mockup](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698434886/screenshots_mseqky.jpg)

# Reusable Components
Reusable components are an essential part of developing efficient and maintainable React applications. By breaking down my UI into smaller, reusable pieces, I reduced code duplication, improved consistency, and improved performance. <br>

In my project, I used reusable components for the following reasons:
* Reduced code duplication: By reusing components throughout my application, I was able to avoid writing the same code multiple times. This made my code more concise and easier to maintain.
* Improved consistency: Reusable components helped me to ensure that the same pieces of UI were displayed in the same way throughout my application. This made my app more user-friendly and easier to navigate.
* Improved performance: Reusable components can help to improve the performance of an app by caching the rendered output of components. This can reduce the amount of time it takes for an app to load and respond to user interactions.

Overall, using reusable components in my React project helped me to develop a more efficient, maintainable, and user-friendly application.<br>

Here are some specific examples of reusable components that I used in my project:
* Alert Message - to render alert messages
* Navigation bar - creates the basic navigation bar functionality with aditional custom hooks
* Avatar - for profile pictures
* Asset - for the spinner
* Not Found - for my 404 page
* MoreDropdown - used to add edit and delete buttons to any element

Using these reusable components helped me to save time and effort, and it also made my code more maintainable and scalable.

# Backend API & Frontend Combined.

## The Strategy Plane
### Site Goals
Kayak Klub is aimed at all kayak enthusiasts. The site aims to connect users with kayaks (or canoes) to allow them to share launch sites and any other valuable information that may be associated with the launch site such as parking, nearby facilites, ease of use etc.
<hr>

## What3words
What3words is a digital geocoding system that converts GPS coordinates into 3 word addresses. It lets you identify any location in the world that's three by three meters in size. The system is available for free and it also has Android and iOS apps. It differs from most other location encoding systems in that it displays three words rather than strings of numbers or letters. It is widely used by all emergency services. Please see the website for more details.

[What3words](https://what3words.com/) 

### Agile Planning
The Agile Methodology was used to plan this project. This was implemented through Github and the Project Board.
Through the use of the Kanban board in the projects view in Github, the project was divided into a few different sections:
Click here to take you to my board (opens in a new tab)

![Kanban Board](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698777215/kanban-board_zcy3vc.png)

[Kanban Board - Github](https://github.com/users/jax-parker/projects/10/views/1)

### Epics

**Set Up**

This Epic covers all the initial setup of the the Django application and Django REST Framework & React application and dependencies in order to begin coding features.

**Add A Launchsite**

This epic covers all API endpoint creation and database connections relating to the CRUD functionality of user posts. This includes like activity. The front end creation of the application in regards to launchsite entries. This is to allow users to interact with the backend API via the user interface in order to create, read, update and delete their own launchsite entries.

**Comments**

This epic covers all API endpoint creation and database connections relating to the CRUD functionality of user comments in relation to posts & the front end creation of the application in regards to comments on posts. This is to allow users to interact with the backend API in order add comments on posts.

**Profiles**

This epic covers all API endpoint creation and database connections relating to the CRUD functionality of user created profiles. This includes following functionality & the front end creation of the application in regards to user profiles. This is to allow users to interact with the backend API via the user interface to manage their own profiles.

**Contact**
This epic covers the front end creation of the application in regards to a contact page. This allows users to interact withthe backend API via the user interface and allow users to contact the site's admin.
## User Stories
By Epic

**Set UP - Backend**
* As a developer, I need to create the base project set up so that I can build out the features.
* As a developer, I need to create a Cloudinary account and create the connection to the project so that static images can be uploaded by users.
* As a developer, I need to create an ElephantSQL acccount to handle my remote database.

**Set Up - Frontend**
* As a user, I would like a favicon on the website so that I can easily know which tab belongs to Kayak Klub
* As a user, I would like a fully responsive navigation menu so that I can easily access the site from any device
* As a logged out user I can see sign in and sign up options so that I can sign in / sign up

**Add A Launchsite - Backend**
* As a user, I want to be able to view edit or delete a launch site
* As a user, I want to able to create a launch site and list launch sites

**Add A Launchsite - Frontend**
* As a logged in user I can create launchsites so that I can share my images and launch site information
* As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"
* As a launch site owner I can edit my launch site title and description so that I can make corrections or update my post after it was created
* As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
* As a logged in user I can view the launch sites I liked so that I can find the sites I enjoy the most
* As a user I can view all the most recent launch sites, ordered by most recently created first so that I am up to date with the newest content
* As a logged in user I can like a launch site so that I can show my support for the sites that interest me
* As a user, I can search for launch sites with keywords, so that I can find the sites and user profiles I am most interested in
* As a user I can view the details of a single post so that I can learn more about it

**Comments - Frontend**
* As a logged in user I can add comments to a launch site so that I can share my thoughts about the site
* As a user I can see how many comments a launch site has and long ago a comment was made so that I know how old a comment is
* As a user I can read comments on launch sites so that I can read what other users think about the sites
* As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
* As an owner of a comment I can edit my comment so that I can fix or update my existing comment

**Profiles - Backend**
* As a developer, I want to create a new blank profile with default image when a user is created.
* As a user, I want to able to get a list of profiles

**Profiles - Frontend**
* As a user I can view all the launch sites by a specific user so that I can catch up on their latest sites, or decide I want to follow them
* As a user I can view other users profiles so that I can see their launch sites and learn more about them
* As a user I can create a new account so that I can access all the features for signed up users
* As a user I can view user's avatars so that I can easily identify users of the application
* As a user I can tell if I am logged in or not so that I can log in if I need to
* As a user I can see a list of the most followed profiles so that I can see which profiles are popular
* As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
* As a logged in user I can follow and unfollow other users so that I can see and remove launch sites by specific users in my feed
* As a logged in user I can edit my profile so that I can change my profile picture and bio

**Contact - Backend**
* As a developer, I want to create a contact model and API view so that users can contact the site owner with issues

**Contact - Frontend**
* As a user, I would like to be able to contact the site owner (admin) in case I have any issues or queries
<hr>
<br>

## API Endpoints

`As a developer, I need to create the base project set up so that I can build out the features.`

Implementation:<br>
The base project was created and a virtual environment created with all neccessary packages installed and frozen into the requirements.
The settings were also edited to hide any secret variables and set dev and production environments apart.

`As a developer, I need to create a Cloudinary account and create the connection to the project so that static images can be uploaded by users.`

Implementation:<br>
A Cloudinary account was created to allow image uploads via the service account.

`As a developer, I need to create an ElephantSQL acccount to handle my remote database.`
Implementation:<br>
An ElephantSQL account was created to handle remote database. Ensured that a version >12 was created to enable it to work.

`As a user I can create a new account so that I can access all the features for signed up users`
Django rest framework and dj_rest_auth were installed and added to the url patterns and site packages to make use of their built in authentication system.

`As a developer, I want to create api views for launch sites so that they are available to the front end`
Implementation:


## The Structure Plane
## Features

**Set Up**

` As a user, I would like a favicon on the website so that I can easily know which tab belongs to Kayak Klub`

Implementation:<br>
A site favicon was implemented with the site's logo. This will allow users to easily identify Kayak Klub when they have multiple tabs open.

![favicon](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698492171/favicon-tab_nl8o0f.png)

`As a logged out user I can see sign in and sign up options so that I can sign in / sign up`

Implementation:<br>
Checks were implemented to detect when a user is signed in or signed out and nav items displayed accordingly. This will prevent users from being able to click buttons from the UI in order to reach restricted pages.

Redirects on the URLS was also implemented to ensure users cannot access pages when logged out if they are for logged in users only.


`As a user, I would like a fully responsive navigation menu so that I can easily access the site from any device`

Implementation:<br>
A navigation menu was implemented than collapses into a hamburger menu on smaller devices.
This will ensure that no navigation items overlap and users can access and navigate the site from any size device.

**Navigation**

` As a logged out user I can see sign in and sign up options so that I can sign in / sign up`

`As a user, I would like a fully responsive navigation menu so that I can easily access the site from any device`

Implementation:<br>
A fully responsive navigation menu has been implemented across the website.

This will allow the users to navigate to different pages on the website with ease from any device. Nav items are different depending on the users logged in state to prevent them accessing areas of the application intended for signed in users.

Logged in users:

When a user is logged in the following navigation items are shown:
`Add launchsite, Home, Feed,Liked, Sign Out, Contact Us, Profile icon and name`

![Logged In Users](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698493206/navbar-pc_e3cxu6.png)

Logged out users:

* Home, Sign In, Sign Up

![Logged Out Users](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698493305/nabar-loggedout-pc_uoogi2.png)

The site logo is displayed on the left side of the navigation at all times.

The navigation icons change to a white colour when the page is active. This is to indicate to users which page they are currently on.

**Home**

`As a user I can view all the most recent launch sites, ordered by most recently created first so that I am up to date with the newest content`

Implementation:<br>
The home page displays user launchsite posts in order of newest sites first. This will prevent users from being shown content they have already seen at the top and reduce the need for them to 'search' for new content. These launchsite posts are visible to all users regardless of logged in status. This will allow non registered users to get a feel for the content on the site to know whether they are interested in signing up. 

Restricted access has been implemented on the launchsite posts for users who are not signed in, they will not be able to create a launchsite, like or comment.

**Launch Sites**

`As a logged in user I can create launch sites so that I can share my images and launch site information`

Implementation:<br>
A 'Add launchsite' button has been implemented in the nav bar in order for logged in users to create a post when they want to share something. This takes you to the launch site posts page where users can upload an image, name the launchsite, add a location, add a what3words and leave a comment. A cancel button will take you back to the home page and the create button will post your launchsite to the top of the home page.

![Add a Launch Site](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698494970/Add-launchsite_e1hebi.png)

`As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"`

Implementation:<br>
Infinite scrolling was implemented to load 10 posts at a time and when user reaches the end of the scroll, it will load 10 more and so on. This will allow for optimal load times to enhance viewing pleasure.

`As a launch site owner I can edit my launch site title and description so that I can make corrections or update my post after it was created`

Implementation:<br>
Only the user who created the post will be able to edit or delete that post. This will ensure that users have full control of their own posts and unauthorized users cannot tamper with them.

`As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about`

Implementation:<br>
Users can also click the Feed navigation item and this will display only posts from users the person has followed.

`As a logged in user I can like a launch site so that I can show my support for the sites that interest me`

Implementation:<br>
Logged in users have full access to post, comment, like or unlike. This will help ensure that unregistered users do not spam the website while also ensuring genuine users register to the site.

![Likes](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698501474/likes-comments_gqi9au.png)

`As a user, I can search for launch sites with keywords, so that I can find the sites and user profiles I am most interested in`

Implementation:<br>
A search bar has been added that will allow users to search for keywords so that they can search for content that interests them.

![Search Bar](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698501645/search-bar_xplfgw.png)

`As a user I can view the details of a single post so that I can learn more about it`

**Comments**

`As a logged in user I can add comments to a launch site so that I can share my thoughts about the site`
Implementation:<br>
Below each post, there will be a comment box available to logged in users. This will allow users to add comments under posts.

`As a user I can see how many comments a launch site has and long ago a comment was made so that I know how old a comment is`
Implementation:<br>
A comment count will also be shown under the post, to allow users to see how many people have commented on each post.
A comment or updated time will be displayed in either minutes ago or days ago

`As a user I can read comments on launch sites so that I can read what other users think about the sites`
Implementation:<br>
The username and Avatar of the user that created the comment will displayed on each comment

`As an owner of a comment I can delete my comment so that I can control removal of my comment from the application`
Implementation:<br>
A delete button has been implemented to allow the user to edit or delete their comment.

`As an owner of a comment I can edit my comment so that I can fix or update my existing comment`
Implementation:<br>
An edit button has been implemented to allow the user to edit or delete their comment.

![Comments](image-1.png)


**Profiles**

`As a user I can view other users profiles so that I can see their launch sites and learn more about them`
`As a logged in user I can edit my profile so that I can change my profile picture and bio`
`As a user I can view user's avatars so that I can easily identify users of the application`
`As a user I can tell if I am logged in or not so that I can log in if I need to`

![Profile Bio](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698503704/profile-bio_xfjusb.png)

`As a user I can see a list of the most followed profiles so that I can see which profiles are popular`
Implementation:<br>
A component showing the most followed users is shown and the user profiles are able to be viewed by clicking on these. On a desktop, the most followed users has 10 users. On a mobile device this is restricted to 4 so that it does not take up too much room as scrolling may become a nuisance. A follow button will also be displayed that will allow the logged in user to follow the target user.
![Most Followed Profiles](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698503354/most-followed-profiles_pgnadc.png)

`As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them`
`As a logged in user I can follow and unfollow other users so that I can see and remove launch sites by specific users in my feed`

**Contact**

`As a user, I would like to be able to contact the site owner (admin) in case I have any issues or queries`
Implementation:<br>
A contact form was added to the navigation that will allow users to submit a contact request if they have any issues or queries.

![Contact Form](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698504056/contact-form_o17pzn.png)
## The Skeleton Plane
### Wireframes
<details>
Home, Add Launchsite, Liked & Feed

Sign Up

![Sign Up](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698424287/wireframe_-_signup_xc0h7e.png)
<br>

Sign In

![Sign In](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698423492/wireframe_-_signin_uhz2jf.png)
<br>

Add Launchsite

![Add Launchsite](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698423492/wireframe_-_addpost_kjwlnq.png)

View Launchsites & Most Popular Profiles

![Home,View Launchsites,Liked & Feed](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698423492/wireframe_-_home.posts_mlbrb2.png)
<br>

Profiles

![Profiles](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698423492/wireframe_-_profile_uxgakl.png)
<br>

Contact

![Contact](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698423492/wireframe_-_contact_q7opbz.png)
<br>
</details>

<summary>All Wireframe Images</summary>

## The Surface Plane

### Design

#### Colour-Scheme
I used the colour palette supplied by Looka when I created my logo
![colour schema](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698425045/Colour_Palette_v1lgbp.png)

#### Typography
I have chosen a font that is clear to read - Roboto
![Roboto](https://res.cloudinary.com/dwvsz0fug/image/upload/v1698425341/Roboto-font_wj7bks.png)
#### Imagery
The images on this website are user uploaded except for the logo which was created at [Looka.com](https://looka.com/)
## Technologies
The website has been implemented with the use of a variety of technologies.

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) used for user interaction on the site.
- [Python](https://www.python.org) used as the back-end programming language.
- [Git](https://git-scm.com) used for version control.
- [GitHub](https://github.com) used for secure online code storage.
- [React Bootstrap](https://react-bootstrap.netlify.app/) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [Django](https://www.djangoproject.com) used as the Python framework for the site.
- [PostgreSQL](https://www.postgresql.org) used as the relational database management.
- [ElephantSQL](https://www.elephantsql.com) used as the Postgres database.
- [Looka](Looka.com) used to create the Bookends Logo
- [Cloudinary](https://cloudinary.com) used to host Static files for the site
- [Heroku](https://www.heroku.com) used for hosting the deployed back-end site.

## Testing & Bugs
Testing can be found in the [TESTING.md file](https://github.com/jax-parker/kayak-app/blob/main/TESTING.md)
<hr>
<br>

## Deployment
## Heroku Deployment
## Deployment to Heroku
The site was deployed to Heroku. The steps to deploy are as follows:

* Navigate to heroku and create an account
* Click the new button in the top right corner
* Select create new app
* Enter app name
* Select region and click create app
* Click the resources tab and search for Heroku Postgres
* Select hobby dev and continue

* Click the deploy tab
* Scroll down to Connect to GitHub and sign in / authorize when prompted
* In the search box, find the repositoy you want to deploy and click connect
* Scroll down to Manual deploy and choose the main branch
* Click deploy
<hr>
<br>
The live link can be found here:


### 1. Creating the Django Project
* If development if being done locally: Activate your virtual environment
* To ensure the virtual environment is not tracked by version control, add .venv to the .gitignore file.
* Install Django and gunicorn: `pip3 install django gunicorn`
* Install supporting database libraries dj_database_url and psycopg2 library: `pip install dj_database_url psycopg2`
* Install Cloudinary libraries to manage static files: `pip install dj-3-cloudinary-storage`
* Create file for requirements: `pip freeze --local > requirements.txt`
* Create project:`django-admin startproject project_name .`
* Create app: `python manage.py startapp app_name`
* Add app to list of `installed apps` in settings.py file: `'app_name'`
* Migrate changes: `python manage.py migrate`
* Test server works locally: `python manage.py runserver`

### 2. Create your Heroku app
* Navigate to the Heroku website
* Create a Heroku account by entering your email address and a password (or login if you have one already).
* Activate the account through the authentication email sent to your email account
* Click the **new button** on the top right corner of the screen and select create a new app from the dropdown menu.
* Enter a unique name for the application.
* Select the appropriate region for the application.
* Click create app
* In the Heroku dashboard click on the Resources tab
* Scroll down to Add-Ons, search for and select 'Heroku Postgres'
* In the Settings tab, scroll down to 'Reveal Config Vars' and copy the text in the box beside DATABASE_URL.

### 3. Set up Environment Variables
* In you IDE create a new env.py file in the top level directory
* Add env.py to the .gitignore file
* In env.py import the os library
* In env.py add `os.environ["DATABASE_URL"]` = "Paste in the text link copied above from Heroku DATABASE_URL"
* In env.py add `os.environ["SECRET_KEY"] = "Make up your own random secret key"
* In env.py add `os.environ["CLOUDINARY]` = "Paste in the API Environment Variable link from Cloudinary and remove the prefix"
* In Heroku Settings tab Config Vars enter the same secret key created in env.py by entering 'SECRET_KEY' in the box for 'KEY' and your randomly created secret key in the 'value' box.

### 4. Setting up settings.py

* In your Django 'settings.py' file type:

 ```
 from pathlib import Path
 import os
 import dj_database_url

 if os.path.isfile("env.py"):
  import env
 ```
* Remove the default insecure secret key in settings.py and replace with the link to the secret key variable in Heroku by typing: `SECRET_KEY = os.environ.get(SECRET_KEY)`
* Comment out the `DATABASES` section in settings.py and replace with:
```
DATABASES = {
  'default': 
  dj_database_url.parse(os.environ.get("DATABASE_URL"))
  }`
```
* Create a Cloudinary account and from the 'Dashboard' in Cloudinary copy your url into the env.py file by typing: `os.environ["CLOUDINARY_URL"] = "cloudinary://<insert-your-url>"`
* In Heroku  add cloudinary url to 'config vars'
* In Heroku config vars add DISABLE_COLLECTSTATIC with value of '1' (note: this must be removed for final deployment)
* Add Cloudinary libraries to the installed apps section of settings.py file:
 ```
 'cloudinary_storage'
 'django.contrib.staticfiles''
 'cloudinary'
 ```
* Connect Cloudinary to the Django app in `settings.py`:
```


* Make an initial commit and push the code to the GitHub Repository.
    ```git add .```
    ```git commit -m "Initial deployment"```
    ```git push```

### 5. Heroku Deployment: 
* Click Deploy tab in Heroku
* In the 'Deployment method' section select 'Github' and click the 'connect to Github' button to confirm.
* In the 'search' box enter the Github repository name for the project
* Click search and then click connect to link the heroku app with the Github repository. The box will confirm that heroku is connected to the repository.

### 6. Final Deployment
In the IDE: 
* When development is complete change the debug setting to: `DEBUG = False` in `env.py` 
* In Heroku settings config vars change the DISABLE_COLLECTSTATIC value to 0
* Because DEBUG must be switched to True for development and False for production it is recommended that only manual deployment is used in Heroku. 
* To manually deploy click the button 'Deploy Branch'. The default 'main' option in the dropdown menu should be selected in both cases. When the app is deployed a message 'Your app was successfully deployed' will be shown. Click 'view' to see the deployed app in the browser.

## To fork the repository on GitHub

A copy of the GitHub Repository can be made by forking the GitHub account. Changes can be made on this copy without affecting the original repository.

1. Log in to GitHub and locate the repository in question.
2. Locate the Fork button which can be found in the top corner, right-hand side of the page, inline with the repository name.
3. Click this button to create a copy of the original repository in your GitHub Account.

## To clone the repository on GitHub

1. Click on the code button which is underneath the main tab and repository name to the right.
2. In the 'Clone with HTTPS' section, click on the clipboard icon to copy the URL.
3. Open Git Bash in your IDE of choice.
4. Change the current working directory to where you want the cloned directory to be made.
5. Type git clone, and then paste the URL copied from GitHub.
6. Press enter and the clone of your repository will be created.



# Credits



<hr>
<br>
The live link can be found here:[]()

### Run Locally
## Credits
* credits here
### Content
### Acknowledgements