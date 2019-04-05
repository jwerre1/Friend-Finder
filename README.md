# Friend-Finder
Full Stake Compatibility-Based "Friend-Finder" Application.

---

## Functionality

As one begins visiting the website, a [home page](https://afternoon-retreat-36292.herokuapp.com/) is displayed that summarizes the site's functionality.

![home-page](/images/imgOne.jpeg)

Clicking on the "Go to Survey" button brings you to the [survey questions](https://afternoon-retreat-36292.herokuapp.com/survey). 

![survey-questions](/images/imgTwo.jpeg)

The user must enter your name, provide a link to a photo, and answer ten questions, each of which has a drop down of possible answers. 

Once all the questions have been reviewed, the user clicks the submit button at the bottom of the page. If any questions have not been completed, the page will mark the incomplete area with a red border and a message. Completed areas are marked with a green border. 

![validation](/images/imgThree.jpeg)

If everything indeed has been completed, a friend's name and picture will appear in a modal. The information entered into the survey is saved to be matched with future friends, and the survey also resets its values. 

![results](/images/imgFour.jpeg)

The matched result from the survey is calculated using [Squared Euclidean Distance](https://en.wikipedia.org/wiki/Euclidean_distance). 

## Built With

* [npm-express](https://www.npmjs.com/package/express) - web framework for node.
* [Bootstrap](https://getbootstrap.com/) - a CSS framework.

## Authors
* **Jordan Werre**