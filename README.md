# sama

### Project Setup

Install dependencies

```
npm install -g webpack
npm install
```

Start webpack and the server from root directory:

```
npm run react-dev
npm run server-dev
```

Start mongod daemon process:
```
mongod --config /usr/local/etc/mongod.conf
```

Open the application in your browser at localhost:8080

### How to use the app
When form has loaded, click the location on the form/screen for where you would like to create a text box. After the text value has been filled in, press the RETURN or ENTER key on your keyboard and then click the SAVE BOX button at the bottom of the screen. If you are not happy with the last box you created, you can click the REMOVE BOX button at the bottom of the screen. You can continue to add boxes in this manner until you are ready to save your box configuration. To do so, press the SAVE CONFIG button at the bottom of the screen and your configuration will be saved to the database. To retrieve box configurations from the database, click on the GET CONFIG button at the bottom of the screen.

### Tradeoffs
At the beginning of this project, I set out to create a MVP that would allow users to create text boxes over the pdf image, save the final box configuration to the database, and to retrieve box configurations from the database. While I was able to complete those features, I had to make some tradeoffs in terms of usability and design. The styling and the usability of the page is in major need of refining (boxes at the bottom of the screen are not user friendly, saving box configs needs to be more efficient, barely any styling has been implemented); however, I wanted to focus on the core features I outlined above before moving on to enhancing the look and usability.

### What I am proud off
While working on this project, the most challenging aspect was implementing the frontend features. I have not really worked in frontend since I was a student at Hack Reactor and I was rusty when working with React. I am proud that I was able to debug and finish the features I had most trouble with:
- Having text box created at location mouse is clicked
- Parent and child component communication
- Dynamically rendering boxes
- Importing JPEG images into React with webpack
