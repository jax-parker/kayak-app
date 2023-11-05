# Testing

## Validator Results
All folders were run through flake8. Issues were mostly blank spaces, indentation and extra lines. 

All issues were resolved with the exception of lines too long in migration files as they are auto-generated so didn't fix and the import env in settings.py was left as this code was pre-written by Code Institute.

[Kayak_api](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209677/flake_-_kayak_api_ij1wpo.png)

[Profiles](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209678/flake8_-_profiles_zdldi8.png)

[Posts](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209677/flake8_-_posts_vx8cy5.png)

[Comments](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209677/flake8_-_comments_m8rp1x.png)

[Likes](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209677/flake8_-_likes_es18uc.png)

[Followers](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209677/flake8_-_followers_nwvkci.png)

[Contacts](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209677/flake8_-_contacts_szojx2.png)

[Sales](https://res.cloudinary.com/dwvsz0fug/image/upload/v1699209678/flake8_-_sales_fhoqse.png)
## Manual Testing

In addition to the other tests, I have conducted a manual check list for myself to carry out to make sure that everything is working as intended.

| Status | **Navigation Bar - User Logged Out**
|:-------:|:--------|
| &check; | Clicking the navbar logo loads the home page
| &check; | The navbar shows home, signup and signin tabs
| &check; | Clicking the home tab on the navbar loads the home page
| &check; | Clicking the sign up tab on the navbar loads the signup page
| &check; | Clicking the login tab on the navbar loads the signin page
| &check; | Clicking the home tab on the navbar loads the home page

| Status | **Navigation Bar - User Logged In**
|:-------:|:--------|
| &check; | The navbar shows the logo, add launchsite, home, feed , liked, sign-out contact us and profile buttons
| &check; | Clicking the home tab loads the home page
| &check; | Clicking add launchsite loads the new launchsite form
| &check; | Clicking feed loads the users posts
| &check; | Clicking liked loads the users liked posts
| &check; | Clicking the contact us loads the contact form
| &check; | Clicking the sign out us signs the user out and returns to home page
| &check; | Clicking the profile logo loads the profile page and all the users posts
| &check; | Icon is white for active page

| Status | **Home Page - User Logged Out**
|:-------:|:--------|
| &check; | User can view posts, comments and most followed profiles but cannot like posts
| &check; | Clicking the heart shows the message 'log in to like posts'
| &check; | Clicking a profile takes you to a profile page of another user.

| Status | **Sign Up Page**
|:-------:|:--------|
| &check; | If inputs are left empty, clicking sign in shows 'field may not be blank' message
| &check; | If passwords do not match clicking sign up shows 'two password fields didn't match' message
| &check; | If inputs are filled in correctly, clicking sign up takes you to the sign in page

| Status | **Sign In Page**
|:-------:|:--------|
| &check; | If inputs are left empty, clicking sign in shows 'field may not be blank' message
| &check; | If password is incorrect, clicking sign in shows 'unable to log in with provided credentials' message
| &check; | If inputs are left empty, clicking sign in shows 'field may not be blank' message
| &check; | If inputs are correct, clicking sign in takes you to the home page

| Status | **Home Page - User Logged In**
|:-------:|:--------|
| &check; | Home page shows search bar, launchsite posts and most followed profiles
| &check; | Infinite scrolling allows user to scroll through launchsite posts without clicking next
| &check; | If inputs are left empty, clicking sign in shows 'field may not be blank' message
| &check; | Clicking on a profile picture takes you to that users profile bio and launchssite posts
| &check; | Clicking on follow/unfollow buttons allows you to follow/unfollow user
| &check; | Clicking on the What3words logo opens the web page in a new tab

| Status | **Add Launchsite**
|:-------:|:--------|
| &check; | clicking on Add launchsite takes you to the launchsite posts page
| &check; | If inputs are empty, clicking on create shows 'field may not be blank'
| &check; | clicking on Add launchsite takes you to the launchsite posts page
| &check; | Clicking on the upload image or choose image button allows you to add a picture
| &check; | If adding a picture which is too big, warning message shows and change the image button appears
| &check; | Clicking create after filling in inputs creates the launchsite post and shows comment box
| &check; | Profile picture, name and date appear at top of launchsite post
| &check; | Clicking on three dots icons allow you to edit or delete your post
| &check; | Clicking on edit icon takes to the edit page so you can edit then save and return to see your post
| &check; | Clicking on delete, deletes your launchsite and takes you to home page

| Status | **Comments**
|:-------:|:--------|
| &check; | Clicking on the comment icon allows you to enter/see comments about that launchsite and post button shows the comment and date below
| &check; | After the user posts their comment the comment icon increases by one
| &check; | User can edit or delete their comment by clicking on the three dots
| &check; | Clickikng on the edit button allows the user to edit their comment and save using the save button
| &check; | Clicking on the delete button deletes the comment and no longer show in the list

| Status | **Likes**
|:-------:|:--------|
| &check; | Trying to like your own post shows message 'You can't like your own post!'
| &check; | When user clicks on the heart of another users launchsite, number increases by one
| &check; | When user clicks on the heart again to unlike a post the number decreases by one

| Status | **Contact Us**
|:-------:|:--------|
| &check; | If inputs are empty, clicking on send shows warning 'this field may not be blank'
| &check; | After filling in form, when user clicks send modal appears
| &check; | Modal confirms users message has been received and offers return to home button
| &check; | Clicking return to home button goes back to home page

| Status | **Profile Page**
|:-------:|:--------|
| &check; | Clicking on profile avatar opens the user's profile page
| &check; | Profile page shows avatar, name, no. of posts, followers and following, bio and posts of user
| &check; | If users own profile clicking on three dots allows user to edit, change username or password of their own profile
| &check; | Clicking edit profile opens the edit page
| &check; | Edit page allows you to change your image and edit your bio, clicking save/cancel returns to home page
| &check; | Clicking change username opens edit username page where user can edit your name, save/cancel returns to home page
| &check; | Clicking change password opens edit password pagye where user can add a new password, save/cancel returns to home page 
| &check; | User cannot edit another users profile

| Status | **Search Bar**
|:-------:|:--------|
| &check; | Typing in a username shows that users posts
| &check; | Typing in a word contained within posts shows all posts with that word(s)
| &check; | Typing in a word that does not appear in any post shows the no results found page


| Status | **Sign Out**
|:-------:|:--------|
| &check; | Clicking on sign out page signs the user out and takes you back to home page


## Lighthouse Testing
## Responsiveness
| Status | **Responsive Testing - Bootstrap standards**
|:-------:|:--------|
| &check; | 576px for portrait phones
| &check; | 768px for tablets
| &check; | 992px for laptops
| &check; | 1200px for large devices
## Bugs and their fixes
